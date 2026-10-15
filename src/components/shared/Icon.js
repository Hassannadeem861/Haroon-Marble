import {
  Box,
  Building2,
  ChefHat,
  MessageCircle,
  Clock,
  Droplets,
  Footprints,
  Gem,
  Grid3x3,
  Hammer,
  Home,
  LayoutGrid,
  Package,
  PanelsTopLeft,
  PenTool,
  Ruler,
  Sparkles,
  Square,
  Users,
} from "lucide-react";

// Data files reference icons by name; this map keeps the bundle to the icons used.
const icons = { Box, Building2, ChefHat, Clock, Droplets, Footprints, Gem, Grid3x3, Hammer, Home, LayoutGrid, MessageCircle, Package, PanelsTopLeft, PenTool, Ruler, Sparkles, Square, Users };

export function Icon({ name, className }) {
  const Component = icons[name] ?? Square;
  return <Component aria-hidden="true" className={className} strokeWidth={1.5} />;
}
