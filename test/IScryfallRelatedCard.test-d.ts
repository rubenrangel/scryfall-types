import { assertType, test } from "vitest";
import { IScryfallRelatedCard } from "../src/IScryfallRelatedCard";

test("Related Card object conforms to interface", () => {
  const relatedCard = {
    object: "related_card" as const,
    id: "40a01679-3224-427e-bd1d-b797b0ab68b7",
    component: "meld_result",
    name: "Urza, Planeswalker",
    type_line: "Legendary Planeswalker — Urza",
    uri: "https://api.scryfall.com/cards/40a01679-3224-427e-bd1d-b797b0ab68b7",
  };

  assertType<IScryfallRelatedCard>(relatedCard);
});
