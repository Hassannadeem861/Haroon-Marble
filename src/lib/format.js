/** Replace {placeholders} in a dictionary string: format("{n} min", { n: 5 }). */
export function format(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}

export function formatDate(isoDate, locale) {
  return new Intl.DateTimeFormat(locale === "ur" ? "ur-PK" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
