import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";

export type CountryOption = { code: string; name: string; dial: string };

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

// India is excluded: this list is for the "outside India" route.
export const countries: CountryOption[] = getCountries()
  .filter((code) => code !== "IN")
  .flatMap((code) => {
    const name = regionNames.of(code);
    if (!name || name === code) return [];
    return [{ code, name, dial: `+${getCountryCallingCode(code)}` }];
  })
  .sort((a, b) => a.name.localeCompare(b.name, "en"));

export const dialCodes: string[] = Array.from(new Set(countries.map((c) => c.dial))).sort(
  (a, b) => Number(a.slice(1)) - Number(b.slice(1)),
);