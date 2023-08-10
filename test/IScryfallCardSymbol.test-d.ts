import { assertType, test } from "vitest";
import { IScryfallCardSymbol } from "../src";

test("Card Symbol object conforms to interface", () => {
  const cardSymbol = {
    object: "card_symbol" as const,
    symbol: "{T}",
    svg_uri: "https://svgs.scryfall.io/card-symbols/T.svg",
    loose_variant: null,
    english: "tap this permanent",
    transposable: false,
    represents_mana: false,
    appears_in_mana_costs: false,
    mana_value: 0,
    cmc: 0,
    funny: false,
    colors: [],
    gatherer_alternates: ["ocT", "oT"],
  };

  assertType<IScryfallCardSymbol>(cardSymbol);
});
