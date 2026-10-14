import "server-only";
import en from "@/dictionaries/en";
import ur from "@/dictionaries/ur";

const dictionaries = { en, ur };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
