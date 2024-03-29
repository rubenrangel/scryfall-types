import { assertType, test } from "vitest";
import { IScryfallCardList } from "../src";

test("List object conforms to interface", () => {
  const list = {
    object: "list" as const,
    total_cards: 2,
    has_more: true,
    next_page:
      "https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=name&page=2&q=c%3Awhite+mv%3D1&unique=cards",
    data: [
      {
        object: "card" as const,
        id: "023b5e6f-10de-422d-8431-11f1fdeca246",
        oracle_id: "a2404d88-0621-49ae-9908-052c23a96ac6",
        multiverse_ids: [2838],
        tcgplayer_id: 3352,
        cardmarket_id: 7644,
        name: "Abu Ja'far",
        lang: "en",
        released_at: "1995-07-01",
        uri: "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246",
        scryfall_uri:
          "https://scryfall.com/card/chr/1/abu-jafar?utm_source=api",
        layout: "normal",
        highres_image: true,
        image_status: "highres_scan",
        image_uris: {
          small:
            "https://cards.scryfall.io/small/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
          normal:
            "https://cards.scryfall.io/normal/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
          large:
            "https://cards.scryfall.io/large/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
          png: "https://cards.scryfall.io/png/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.png?1562895407",
          art_crop:
            "https://cards.scryfall.io/art_crop/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
          border_crop:
            "https://cards.scryfall.io/border_crop/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
        },
        mana_cost: "{W}",
        cmc: 1,
        type_line: "Creature — Human",
        oracle_text:
          "When Abu Ja'far dies, destroy all creatures blocking or blocked by it. They can't be regenerated.",
        power: "0",
        toughness: "1",
        colors: ["W" as const],
        color_identity: ["W" as const],
        keywords: [],
        legalities: {
          standard: "not_legal" as const,
          future: "not_legal" as const,
          historic: "not_legal" as const,
          gladiator: "not_legal" as const,
          pioneer: "not_legal" as const,
          explorer: "not_legal" as const,
          modern: "not_legal" as const,
          legacy: "legal" as const,
          pauper: "not_legal" as const,
          vintage: "legal" as const,
          penny: "not_legal" as const,
          commander: "legal" as const,
          oathbreaker: "legal" as const,
          brawl: "not_legal" as const,
          historicbrawl: "not_legal" as const,
          alchemy: "not_legal" as const,
          paupercommander: "restricted" as const,
          duel: "legal" as const,
          oldschool: "legal" as const,
          premodern: "legal" as const,
          predh: "legal" as const,
        },
        games: ["paper"],
        reserved: false,
        foil: false,
        nonfoil: true,
        finishes: ["nonfoil"],
        oversized: false,
        promo: false,
        reprint: true,
        variation: false,
        set_id: "985eab7d-655a-4cb0-ba74-d48c8dcfb3d4",
        set: "chr",
        set_name: "Chronicles",
        set_type: "masters",
        set_uri:
          "https://api.scryfall.com/sets/985eab7d-655a-4cb0-ba74-d48c8dcfb3d4",
        set_search_uri:
          "https://api.scryfall.com/cards/search?order=set&q=e%3Achr&unique=prints",
        scryfall_set_uri: "https://scryfall.com/sets/chr?utm_source=api",
        rulings_uri:
          "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246/rulings",
        prints_search_uri:
          "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aa2404d88-0621-49ae-9908-052c23a96ac6&unique=prints",
        collector_number: "1",
        digital: false,
        rarity: "uncommon" as const,
        card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
        artist: "Ken Meyer, Jr.",
        artist_ids: ["466f5d1e-384e-47d9-8d2c-c6ae33ffa687"],
        illustration_id: "949634bd-2f5a-4be7-ad24-d7039a57b6d6",
        border_color: "white",
        frame: "1993",
        full_art: false,
        textless: false,
        booster: true,
        story_spotlight: false,
        edhrec_rank: 17613,
        prices: {
          usd: "0.22",
          usd_foil: null,
          usd_etched: null,
          eur: "0.10",
          eur_foil: null,
          tix: null,
        },
        related_uris: {
          gatherer:
            "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=2838",
          tcgplayer_infinite_articles:
            "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Abu+Ja%27far&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          tcgplayer_infinite_decks:
            "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Abu+Ja%27far&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          edhrec: "https://edhrec.com/route/?cc=Abu+Ja%27far",
        },
        purchase_uris: {
          tcgplayer:
            "https://www.tcgplayer.com/product/3352?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          cardmarket:
            "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Abu+Ja%27far&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          cardhoarder:
            "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Abu+Ja%27far&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
        },
      },
    ],
  };

  assertType<IScryfallCardList>(list);
});
