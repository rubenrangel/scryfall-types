# scryfall-types
TypeScript types and interfaces for the [Scryfall API](https://scryfall.com/docs/api).

## Interfaces
Where possible, properties that are strings and have several "known" values (such as border colors) are typed as a union of the known values and the `string` type. This is to allow for coding against the known values while also allowing for extensibility for the type, in case the Scryfall API has changes not yet reflected in this library.

### IScryfallObject
The root interface for all Scryfall objects. The `object` property provides support for unions and type-narrowing.

### IScryfallError

```typescript
import type { IScryfallError } from "scryfall-types";

const error: IScryfallError = {
  object: "error",
  code: "bad_request",
  status: 400,
  warnings: [
    "Invalid expression “is:slick” was ignored. Checking if cards are “slick” is not supported",
    "Invalid expression “cmc>cmc” was ignored. The sides of your comparison must be different.",
  ],
  details: "All of your terms were ignored.",
};
```

### IScryfallList
A typed interface that serves as a container for other Scryfall objects.

```typescript
import type { IScryfallBulkData, IScryfallList } from "scryfall-types";

const bulkData: IScryfallList<IScryfallBulkData> = {
  object: 'list',
  has_more: false,
  data: [
    {
      object: "bulk_data",
      id: "27bf3214-1271-490b-bdfe-c0be6c23d02e",
      type: "oracle_cards",
      updated_at: "2023-08-08T21:02:21.602+00:00",
      uri: "https://api.scryfall.com/bulk-data/27bf3214-1271-490b-bdfe-c0be6c23d02e",
      name: "Oracle Cards",
      description:
              "A JSON file containing one Scryfall card object for each Oracle ID on Scryfall. The chosen sets for the cards are an attempt to return the most up-to-date recognizable version of the card.",
      size: 133162334,
      download_uri:
              "https://data.scryfall.io/oracle-cards/oracle-cards-20230808210221.json",
      content_type: "application/json",
      content_encoding: "gzip",
    }
  ]
};
```

### IScryfallCardList
A specialized list that only holds `IScryfallCard` objects and adds the `total_cards` property to the list.

```typescript
import type { IScryfallCardList } from "scryfall-types";

const cards: IScryfallCardList = {
  object: "list",
  total_cards: 1,
  has_more: false,
  data: [
    {
      object: "card",
      id: "023b5e6f-10de-422d-8431-11f1fdeca246",
      oracle_id: "a2404d88-0621-49ae-9908-052c23a96ac6",
      multiverse_ids: [2838],
      tcgplayer_id: 3352,
      cardmarket_id: 7644,
      name: "Abu Ja'far",
      lang: "en",
      released_at: "1995-07-01",
      uri: "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246",
      scryfall_uri: "https://scryfall.com/card/chr/1/abu-jafar?utm_source=api",
      layout: "normal",
      highres_image: true,
      image_status: "highres_scan",
      image_uris: {
        small: "https://cards.scryfall.io/small/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
        normal: "https://cards.scryfall.io/normal/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
        large: "https://cards.scryfall.io/large/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
        png: "https://cards.scryfall.io/png/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.png?1562895407",
        art_crop: "https://cards.scryfall.io/art_crop/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
        border_crop: "https://cards.scryfall.io/border_crop/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407"
      },
      mana_cost: "{W}",
      cmc: 1,
      type_line: "Creature — Human",
      oracle_text: "When Abu Ja'far dies, destroy all creatures blocking or blocked by it. They can't be regenerated.",
      power: "0",
      toughness: "1",
      colors: ["W"],
      color_identity: ["W"],
      keywords: [],
      legalities: {
        standard: "not_legal",
        future: "not_legal",
        historic: "not_legal",
        gladiator: "not_legal",
        pioneer: "not_legal",
        explorer: "not_legal",
        modern: "not_legal",
        legacy: "legal",
        pauper: "not_legal",
        vintage: "legal",
        penny: "not_legal",
        commander: "legal",
        oathbreaker: "legal",
        brawl: "not_legal",
        historicbrawl: "not_legal",
        alchemy: "not_legal",
        paupercommander: "restricted",
        duel: "legal",
        oldschool: "legal",
        premodern: "legal",
        predh: "legal"
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
      set_uri: "https://api.scryfall.com/sets/985eab7d-655a-4cb0-ba74-d48c8dcfb3d4",
      set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Achr&unique=prints",
      scryfall_set_uri: "https://scryfall.com/sets/chr?utm_source=api",
      rulings_uri: "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246/rulings",
      prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aa2404d88-0621-49ae-9908-052c23a96ac6&unique=prints",
      collector_number: "1",
      digital: false,
      rarity: "uncommon",
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
        tix: null
      },
      related_uris: {
        gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=2838",
        tcgplayer_infinite_articles: "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Abu+Ja%27far&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        tcgplayer_infinite_decks: "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Abu+Ja%27far&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        edhrec: "https://edhrec.com/route/?cc=Abu+Ja%27far"
      },
      purchase_uris: {
        tcgplayer: "https://www.tcgplayer.com/product/3352?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        cardmarket: "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Abu+Ja%27far&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        cardhoarder: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Abu+Ja%27far&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
  ]
};
```

### IScryfallBulkData
```typescript
import type { IScryfallBulkData } from "scryfall-types";

const bulkData: IScryfallBulkData = {
  object: "bulk_data",
  id: "27bf3214-1271-490b-bdfe-c0be6c23d02e",
  type: "oracle_cards",
  updated_at: "2023-08-08T21:02:21.602+00:00",
  uri: "https://api.scryfall.com/bulk-data/27bf3214-1271-490b-bdfe-c0be6c23d02e",
  name: "Oracle Cards",
  description: "A JSON file containing one Scryfall card object for each Oracle ID on Scryfall. The chosen sets for the cards are an attempt to return the most up-to-date recognizable version of the card.",
  size: 133162334,
  download_uri: "https://data.scryfall.io/oracle-cards/oracle-cards-20230808210221.json",
  content_type: "application/json",
  content_encoding: "gzip",
};
```
### IScryfallCard
```typescript
import type { IScryfallCard } from "scryfall-types";

const card = {
  object: "card",
  id: "023b5e6f-10de-422d-8431-11f1fdeca246",
  oracle_id: "a2404d88-0621-49ae-9908-052c23a96ac6",
  multiverse_ids: [2838],
  tcgplayer_id: 3352,
  cardmarket_id: 7644,
  name: "Abu Ja'far",
  lang: "en",
  released_at: "1995-07-01",
  uri: "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246",
  scryfall_uri: "https://scryfall.com/card/chr/1/abu-jafar?utm_source=api",
  layout: "normal",
  highres_image: true,
  image_status: "highres_scan",
  image_uris: {
    small: "https://cards.scryfall.io/small/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
    normal: "https://cards.scryfall.io/normal/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
    large: "https://cards.scryfall.io/large/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
    png: "https://cards.scryfall.io/png/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.png?1562895407",
    art_crop: "https://cards.scryfall.io/art_crop/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407",
    border_crop: "https://cards.scryfall.io/border_crop/front/0/2/023b5e6f-10de-422d-8431-11f1fdeca246.jpg?1562895407"
  },
  mana_cost: "{W}",
  cmc: 1,
  type_line: "Creature — Human",
  oracle_text: "When Abu Ja'far dies, destroy all creatures blocking or blocked by it. They can't be regenerated.",
  power: "0",
  toughness: "1",
  colors: ["W"],
  color_identity: ["W"],
  keywords: [],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    historic: "not_legal",
    gladiator: "not_legal",
    pioneer: "not_legal",
    explorer: "not_legal",
    modern: "not_legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "not_legal",
    commander: "legal",
    oathbreaker: "legal",
    brawl: "not_legal",
    historicbrawl: "not_legal",
    alchemy: "not_legal",
    paupercommander: "restricted",
    duel: "legal",
    oldschool: "legal",
    premodern: "legal",
    predh: "legal"
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
  set_uri: "https://api.scryfall.com/sets/985eab7d-655a-4cb0-ba74-d48c8dcfb3d4",
  set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Achr&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/chr?utm_source=api",
  rulings_uri: "https://api.scryfall.com/cards/023b5e6f-10de-422d-8431-11f1fdeca246/rulings",
  prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aa2404d88-0621-49ae-9908-052c23a96ac6&unique=prints",
  collector_number: "1",
  digital: false,
  rarity: "uncommon",
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
    tix: null
  },
  related_uris: {
    gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=2838",
    tcgplayer_infinite_articles: "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Abu+Ja%27far&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    tcgplayer_infinite_decks: "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Abu+Ja%27far&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Abu+Ja%27far"
  },
  purchase_uris: {
    tcgplayer: "https://www.tcgplayer.com/product/3352?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    cardmarket: "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Abu+Ja%27far&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Abu+Ja%27far&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
  }
};
```

### IScryfallCardFace
```typescript
import type { IScryfallCardFace } from "scryfall-types";

const cardFace: IScryfallCardFace = {
  object: "card_face",
  name: "Legion's Landing",
  mana_cost: "{W}",
  type_line: "Legendary Enchantment",
  oracle_text:"When Legion's Landing enters the battlefield, create a 1/1 white Vampire creature token with lifelink.\nWhen you attack with three or more creatures, transform Legion's Landing.",
  colors: ["W"],
  flavor_text: '"I claim this land in the name of the queen."\n—Adrian Adanto of Lujio',
  artist: "Svetlin Velinov",
  artist_id: "ffd063ae-c097-4f26-b2e6-b1e2137708bc",
  illustration_id: "10c237dc-a7f2-427c-a191-72f59bb8aae7",
  image_uris: {
    small:"https://cards.scryfall.io/small/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
    normal:"https://cards.scryfall.io/normal/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
    large:"https://cards.scryfall.io/large/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
    png: "https://cards.scryfall.io/png/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.png?1562550045",
    art_crop: "https://cards.scryfall.io/art_crop/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
    border_crop:"https://cards.scryfall.io/border_crop/front/0/5/05e2a5e6-3aaa-4096-bdd0-fcc1afe5a36c.jpg?1562550045",
  },
};
```

### IScryfallCardSymbol
```typescript
import type { IScryfallCardSymbol } from "scryfall-types";

const cardSymbol: IScryfallCardSymbol = {
  object: "card_symbol",
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
```
### IScryfallCatalog

```typescript
import type { IScryfallCatalog } from "scryfall-types";

const catalog: IScryfallCatalog = {
  object: "catalog",
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
```

### IScryfallMigration

```typescript
import type { IScryfallMigration } from "scryfall-types";

const migration: IScryfallMigration = {
  object: "migration",
  id: "52aa4c9c-ee97-48e4-a5f1-aa15e92fb7b8",
  uri: "https://api.scryfall.com/migrations/52aa4c9c-ee97-48e4-a5f1-aa15e92fb7b8",
  performed_at: "2023-07-24",
  migration_strategy: "delete",
  old_scryfall_id: "c9cce92f-480d-48c1-ac0f-3afb17283c00",
  note: "Accidental duplicate",
  metadata: {
    id: "c9cce92f-480d-48c1-ac0f-3afb17283c00",
    lang: "en",
    name: "Phyrexian Myr",
    set_code: "tcmm",
    oracle_id: "d23c9257-f0fc-40fb-ab35-4be57979568a",
    collector_number: "44x",
  },
};
```

### IScryfallRelatedCard

```typescript
import type { IScryfallRelatedCard } from "scryfall-types";

const relatedCard: IScryfallRelatedCard = {
  object: "related_card",
  id: "40a01679-3224-427e-bd1d-b797b0ab68b7",
  component: "meld_result",
  name: "Urza, Planeswalker",
  type_line: "Legendary Planeswalker — Urza",
  uri: "https://api.scryfall.com/cards/40a01679-3224-427e-bd1d-b797b0ab68b7",
};
```

### IScryfallRuling

```typescript
import type { IScryfallRuling } from "scryfall-types";

const ruling: IScryfallRuling = {
  object: "ruling",
  oracle_id: "afa49a09-146f-4439-850e-dd1938c93cef",
  source: "scryfall",
  published_at: "2015-01-19",
  comment:
    "Derevi, Empyrial Tactician is banned as a commander in Duel Commander format, but it may be part of your deck.",
};
```

### IScryfallSet

```typescript
import type { IScryfallSet } from "scryfall-types";

const set: IScryfallSet = {
  object: "set",
  id: "a4a0db50-8826-4e73-833c-3fd934375f96",
  code: "aer",
  mtgo_code: "aer",
  arena_code: "aer",
  tcgplayer_id: 1857,
  name: "Aether Revolt",
  uri: "https://api.scryfall.com/sets/a4a0db50-8826-4e73-833c-3fd934375f96",
  scryfall_uri: "https://scryfall.com/sets/aer",
  search_uri: "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints",
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
```
