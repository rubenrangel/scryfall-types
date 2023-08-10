import { assertType, test } from "vitest";
import { IScryfallCardFace } from "../src/IScryfallCardFace";

test("Card Face object conforms to interface", () => {
  const cardFace = {
    object: "card_face" as const,
    name: "Legion's Landing",
    mana_cost: "{W}",
    type_line: "Legendary Enchantment",
    oracle_text:
      "When Legion's Landing enters the battlefield, create a 1/1 white Vampire creature token with lifelink.\nWhen you attack with three or more creatures, transform Legion's Landing.",
    colors: ["W" as const],
    flavor_text:
      '"I claim this land in the name of the queen."\n—Adrian Adanto of Lujio',
    artist: "Svetlin Velinov",
    artist_id: "ffd063ae-c097-4f26-b2e6-b1e2137708bc",
    illustration_id: "10c237dc-a7f2-427c-a191-72f59bb8aae7",
    image_uris: {
      small:
        "https://cards.scryfall.io/small/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
      normal:
        "https://cards.scryfall.io/normal/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
      large:
        "https://cards.scryfall.io/large/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
      png: "https://cards.scryfall.io/png/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.png?1562550045",
      art_crop:
        "https://cards.scryfall.io/art_crop/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
      border_crop:
        "https://cards.scryfall.io/border_crop/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
    },
  };

  assertType<IScryfallCardFace>(cardFace);
});
