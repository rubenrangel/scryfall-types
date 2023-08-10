import { assertType, test } from "vitest";
import { IScryfallCard } from "../src/IScryfallCard";

test("Card object conforms to interface", () => {
  const card = {
    object: "card" as const,
    id: "33787a5b-d1d1-4d60-ba09-d9c98025e9b3",
    oracle_id: "979e670e-bbd8-4595-8d9d-ad1c0bc422e3",
    multiverse_ids: [401848],
    mtgo_id: 58749,
    mtgo_foil_id: 58750,
    tcgplayer_id: 105589,
    cardmarket_id: 284826,
    name: "Coralhelm Guide",
    lang: "en",
    released_at: "2015-10-02",
    uri: "https://api.scryfall.com/cards/33787a5b-d1d1-4d60-ba09-d9c98025e9b3",
    scryfall_uri:
      "https://scryfall.com/card/bfz/74/coralhelm-guide?utm_source=api",
    layout: "normal",
    highres_image: true,
    image_status: "highres_scan",
    image_uris: {
      small:
        "https://cards.scryfall.io/small/front/3/3/33787a5b-d1d1-4d60-ba09-d9c98025e9b3.jpg?1562907023",
      normal:
        "https://cards.scryfall.io/normal/front/3/3/33787a5b-d1d1-4d60-ba09-d9c98025e9b3.jpg?1562907023",
      large:
        "https://cards.scryfall.io/large/front/3/3/33787a5b-d1d1-4d60-ba09-d9c98025e9b3.jpg?1562907023",
      png: "https://cards.scryfall.io/png/front/3/3/33787a5b-d1d1-4d60-ba09-d9c98025e9b3.png?1562907023",
      art_crop:
        "https://cards.scryfall.io/art_crop/front/3/3/33787a5b-d1d1-4d60-ba09-d9c98025e9b3.jpg?1562907023",
      border_crop:
        "https://cards.scryfall.io/border_crop/front/3/3/33787a5b-d1d1-4d60-ba09-d9c98025e9b3.jpg?1562907023",
    },
    mana_cost: "{1}{U}",
    cmc: 2,
    type_line: "Creature — Merfolk Scout Ally",
    oracle_text: "{4}{U}: Target creature can't be blocked this turn.",
    power: "2",
    toughness: "1",
    colors: ["U" as const],
    color_identity: ["U" as const],
    keywords: [],
    legalities: {
      standard: "not_legal" as const,
      future: "not_legal" as const,
      historic: "legal" as const,
      gladiator: "legal" as const,
      pioneer: "legal" as const,
      explorer: "legal" as const,
      modern: "legal" as const,
      legacy: "legal" as const,
      pauper: "legal" as const,
      vintage: "legal" as const,
      penny: "legal" as const,
      commander: "legal" as const,
      oathbreaker: "legal" as const,
      brawl: "not_legal" as const,
      historicbrawl: "legal" as const,
      alchemy: "not_legal" as const,
      paupercommander: "legal" as const,
      duel: "legal" as const,
      oldschool: "not_legal" as const,
      premodern: "not_legal" as const,
      predh: "not_legal" as const,
    },
    games: ["paper", "mtgo"],
    reserved: false,
    foil: true,
    nonfoil: true,
    finishes: ["nonfoil", "foil"],
    oversized: false,
    promo: false,
    reprint: false,
    variation: false,
    set_id: "91719374-7ac5-4afa-ada8-5da964dcf1d4",
    set: "bfz",
    set_name: "Battle for Zendikar",
    set_type: "expansion",
    set_uri:
      "https://api.scryfall.com/sets/91719374-7ac5-4afa-ada8-5da964dcf1d4",
    set_search_uri:
      "https://api.scryfall.com/cards/search?order=set&q=e%3Abfz&unique=prints",
    scryfall_set_uri: "https://scryfall.com/sets/bfz?utm_source=api",
    rulings_uri:
      "https://api.scryfall.com/cards/33787a5b-d1d1-4d60-ba09-d9c98025e9b3/rulings",
    prints_search_uri:
      "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A979e670e-bbd8-4595-8d9d-ad1c0bc422e3&unique=prints",
    collector_number: "74",
    digital: false,
    rarity: "common" as const,
    flavor_text:
      '"She knows every step of this coastline, both above and below the surface, and she has hideouts all along the way. She will get you there."\n—Jori En, expedition leader',
    card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    artist: "Viktor Titov",
    artist_ids: ["2270c0b0-afb4-42b0-bcb6-25fe4ad6eef2"],
    illustration_id: "02172ec6-fd88-4c18-aebb-42958236caa8",
    border_color: "black",
    frame: "2015",
    full_art: false,
    textless: false,
    booster: true,
    story_spotlight: false,
    edhrec_rank: 17736,
    penny_rank: 11428,
    prices: {
      usd: "0.05",
      usd_foil: "0.24",
      usd_etched: null,
      eur: "0.02",
      eur_foil: "0.05",
      tix: "0.03",
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=401848",
      tcgplayer_infinite_articles:
        "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Coralhelm+Guide&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      tcgplayer_infinite_decks:
        "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Coralhelm+Guide&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      edhrec: "https://edhrec.com/route/?cc=Coralhelm+Guide",
    },
    purchase_uris: {
      tcgplayer:
        "https://www.tcgplayer.com/product/105589?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      cardmarket:
        "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Coralhelm+Guide&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      cardhoarder:
        "https://www.cardhoarder.com/cards/58749?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
    },
  };

  assertType<IScryfallCard>(card);
});
