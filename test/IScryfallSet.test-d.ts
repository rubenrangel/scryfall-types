import { assertType, test } from "vitest";
import { IScryfallSet } from "../src";

test("Set object conforms to interface", () => {
  const set = {
    object: "set" as const,
    id: "a4a0db50-8826-4e73-833c-3fd934375f96",
    code: "aer",
    mtgo_code: "aer",
    arena_code: "aer",
    tcgplayer_id: 1857,
    name: "Aether Revolt",
    uri: "https://api.scryfall.com/sets/a4a0db50-8826-4e73-833c-3fd934375f96",
    scryfall_uri: "https://scryfall.com/sets/aer",
    search_uri:
      "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints",
    released_at: "2017-01-20",
    set_type: "expansion",
    card_count: 194,
    printed_size: 184,
    digital: false,
    nonfoil_only: false,
    foil_only: false,
    block_code: "kld",
    block: "Kaladesh",
    icon_svg_uri: "https://svgs.scryfall.io/sets/aer.svg?1691380800",
  };

  assertType<IScryfallSet>(set);
});
