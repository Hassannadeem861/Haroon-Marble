// Three.js scene for the home-page tile visualiser. This module is only ever
// loaded with a dynamic import(), so three.js stays out of the main bundle.

import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { gsap } from "gsap";

const GRID = 14; // tiles per side; the far edges fade into fog
const TILE = 1;
const GAP = 0.05; // grout joint
const THICKNESS = 0.07;
const BACKGROUND = "#e7e1d6";
const ROUGHNESS = { polished: 0.1, honed: 0.55 };

export function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

/**
 * Creates the scene inside `container`.
 * options: { textureUrl, contrastTextureUrl, pattern, finish, reducedMotion }
 * Returns controls: setMaterial, setPattern, setFinish, setActive, dispose.
 */
export async function createTileScene(container, options) {
  const { reducedMotion } = options;
  let pattern = options.pattern;
  let finish = options.finish;

  // ---------- renderer, scene, camera ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.style.display = "block";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BACKGROUND);
  scene.fog = new THREE.Fog(BACKGROUND, 8, 16);

  // Soft studio reflections give polished stone its sheen.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = environment;

  const sun = new THREE.DirectionalLight("#fff6e8", 1.1);
  sun.position.set(4, 8, 3);
  scene.add(sun);
  scene.add(new THREE.HemisphereLight("#ffffff", "#b9b2a6", 0.35));

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60);
  const cameraRig = { radius: 7.6, height: 4.6, yaw: 0.35 };
  const lookTarget = new THREE.Vector3(0, 0, -1.2);

  // ---------- floor ----------
  const grout = new THREE.Mesh(
    new THREE.PlaneGeometry(GRID * 2.2, GRID * 2.2),
    new THREE.MeshStandardMaterial({ color: "#a59c8e", roughness: 0.95 }),
  );
  grout.rotation.x = -Math.PI / 2;
  scene.add(grout);

  const floor = new THREE.Group();
  scene.add(floor);
  const geometry = new THREE.BoxGeometry(TILE - GAP, THICKNESS, TILE - GAP);
  const loader = new THREE.TextureLoader();
  const textureCache = new Map();
  const maxAnisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  function loadTexture(url) {
    if (!textureCache.has(url)) {
      textureCache.set(
        url,
        loader.loadAsync(url).then((texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.anisotropy = maxAnisotropy;
          return texture;
        }),
      );
    }
    return textureCache.get(url);
  }

  // Each tile shows a different part of the "slab", turned a random quarter,
  // so the floor reads like natural stone rather than a repeated sticker.
  function tileMaterial(baseTexture) {
    const map = baseTexture.clone();
    map.repeat.set(0.45, 0.45);
    map.offset.set(Math.random() * 0.55, Math.random() * 0.55);
    map.center.set(0.5, 0.5);
    map.rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;
    return new THREE.MeshStandardMaterial({ map, roughness: ROUGHNESS[finish], metalness: 0, envMapIntensity: 0.9 });
  }

  const tiles = [];
  const half = (GRID - 1) / 2;
  for (let row = 0; row < GRID; row += 1) {
    for (let col = 0; col < GRID; col += 1) {
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      mesh.position.set((col - half) * TILE, THICKNESS / 2, (row - half) * TILE);
      mesh.userData.checker = (row + col) % 2 === 1;
      floor.add(mesh);
      tiles.push(mesh);
    }
  }

  let primary = await loadTexture(options.textureUrl);
  let contrast = await loadTexture(options.contrastTextureUrl);

  function disposeMaterial(material) {
    material.map?.dispose();
    material.dispose();
  }

  function applyMaterials() {
    for (const tile of tiles) {
      const useContrast = pattern === "checker" && tile.userData.checker;
      disposeMaterial(tile.material);
      tile.material = tileMaterial(useContrast ? contrast : primary);
    }
  }

  function patternRotation() {
    return pattern === "diagonal" ? Math.PI / 4 : 0;
  }

  applyMaterials();
  floor.rotation.y = patternRotation();

  // ---------- sizing ----------
  function resize() {
    const { clientWidth, clientHeight } = container;
    if (!clientWidth || !clientHeight) return;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    // Pull the camera back a little on narrow screens.
    cameraRig.radius = camera.aspect < 1 ? 9.5 : 7.6;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  // ---------- gentle camera sway + drag to look around ----------
  let dragYaw = 0;
  let dragTarget = 0;
  let pointerStart = null;
  const canvas = renderer.domElement;
  canvas.style.touchAction = "pan-y"; // vertical swipes still scroll the page
  canvas.style.cursor = "grab";

  const onPointerDown = (event) => {
    pointerStart = { x: event.clientX, yaw: dragTarget };
    canvas.style.cursor = "grabbing";
  };
  const onPointerMove = (event) => {
    if (!pointerStart) return;
    dragTarget = THREE.MathUtils.clamp(pointerStart.yaw + (event.clientX - pointerStart.x) * 0.005, -0.9, 0.9);
  };
  const onPointerUp = () => {
    pointerStart = null;
    canvas.style.cursor = "grab";
  };
  canvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);

  const clock = new THREE.Clock();
  function render() {
    const elapsed = clock.getElapsedTime();
    dragYaw += (dragTarget - dragYaw) * 0.08;
    const sway = reducedMotion ? 0 : Math.sin(elapsed * 0.18) * 0.22;
    const yaw = cameraRig.yaw + sway + dragYaw;
    camera.position.set(Math.sin(yaw) * cameraRig.radius, cameraRig.height, Math.cos(yaw) * cameraRig.radius);
    camera.lookAt(lookTarget);
    renderer.render(scene, camera);
  }

  let active = false;
  function setActive(value) {
    if (value === active) return;
    active = value;
    renderer.setAnimationLoop(active ? render : null);
  }

  // ---------- GSAP transitions ----------
  let timeline;
  const staggerFromCenter = (amount) => ({ grid: [GRID, GRID], from: "center", amount });

  function intro() {
    if (reducedMotion) return;
    gsap.from(cameraRig, { radius: cameraRig.radius + 4, height: 9, duration: 2.2, ease: "power3.out" });
    gsap.from(
      tiles.map((tile) => tile.position),
      { y: 2.5, duration: 1.1, ease: "power3.out", stagger: staggerFromCenter(0.9) },
    );
  }

  /** Lift every tile in a wave, run `change` at the top, then set them down. */
  function waveChange(change, { spin = false } = {}) {
    if (reducedMotion) {
      change();
      return;
    }
    timeline?.progress(1);
    const positions = tiles.map((tile) => tile.position);
    const rotations = tiles.map((tile) => tile.rotation);
    timeline = gsap.timeline();
    timeline.to(positions, { y: 0.9, duration: 0.45, ease: "power2.in", stagger: staggerFromCenter(0.35) });
    if (spin) timeline.to(rotations, { x: `+=${Math.PI}`, duration: 0.6, ease: "power2.inOut", stagger: staggerFromCenter(0.35) }, 0);
    timeline.add(change, ">-0.1");
    timeline.to(positions, { y: THICKNESS / 2, duration: 0.7, ease: "power3.out", stagger: staggerFromCenter(0.35) });
  }

  // ---------- public controls ----------
  async function setMaterial(textureUrl, contrastTextureUrl) {
    const [nextPrimary, nextContrast] = await Promise.all([loadTexture(textureUrl), loadTexture(contrastTextureUrl)]);
    waveChange(
      () => {
        primary = nextPrimary;
        contrast = nextContrast;
        applyMaterials();
      },
      { spin: true },
    );
  }

  function setPattern(nextPattern) {
    if (nextPattern === pattern) return;
    const targetRotation = nextPattern === "diagonal" ? Math.PI / 4 : 0;
    waveChange(() => {
      pattern = nextPattern;
      applyMaterials();
      if (reducedMotion) floor.rotation.y = targetRotation;
    });
    if (!reducedMotion) gsap.to(floor.rotation, { y: targetRotation, duration: 1.2, ease: "power3.inOut" });
  }

  function setFinish(nextFinish) {
    finish = nextFinish;
    const roughness = ROUGHNESS[finish];
    for (const tile of tiles) {
      if (reducedMotion) tile.material.roughness = roughness;
      else gsap.to(tile.material, { roughness, duration: 0.9, ease: "power2.out" });
    }
  }

  function dispose() {
    renderer.setAnimationLoop(null);
    timeline?.kill();
    gsap.killTweensOf([cameraRig, floor.rotation, ...tiles.map((tile) => tile.position), ...tiles.map((tile) => tile.rotation)]);
    resizeObserver.disconnect();
    canvas.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    for (const tile of tiles) disposeMaterial(tile.material);
    geometry.dispose();
    grout.geometry.dispose();
    grout.material.dispose();
    textureCache.forEach((promise) => promise.then((texture) => texture.dispose()));
    environment.dispose();
    pmrem.dispose();
    renderer.dispose();
    canvas.remove();
  }

  intro();
  return { setMaterial, setPattern, setFinish, setActive, dispose };
}
