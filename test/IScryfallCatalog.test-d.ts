import { assertType, test } from "vitest";
import { IScryfallCatalog } from "../src";

test("Catalog object conforms to interface", () => {
  const catalog = {
    object: "catalog" as const,
    uri: "https://api.scryfall.com/catalog/land-types",
    total_values: 15,
    data: [
      "Cloud",
      "Desert",
      "Forest",
      "Gate",
      "Island",
      "Lair",
      "Locus",
      "Mine",
      "Mountain",
      "Sphere",
      "Plains",
      "Power-Plant",
      "Swamp",
      "Tower",
      "Urza's",
    ],
  };

  assertType<IScryfallCatalog>(catalog);
});
