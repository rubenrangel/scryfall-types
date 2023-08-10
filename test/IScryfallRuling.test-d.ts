import { assertType, test } from "vitest";
import { IScryfallRuling } from "../src";

test("Ruling object conforms to interface", () => {
  const ruling = {
    object: "ruling" as const,
    oracle_id: "afa49a09-146f-4439-850e-dd1938c93cef",
    source: "scryfall",
    published_at: "2015-01-19",
    comment:
      "Derevi, Empyrial Tactician is banned as a commander in Duel Commander format, but it may be part of your deck.",
  };

  assertType<IScryfallRuling>(ruling);
});
