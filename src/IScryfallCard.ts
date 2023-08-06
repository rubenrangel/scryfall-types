import { IScryfallObject } from "./IScryfallObject";

export interface IScryfallCardCoreFields {
  /**
   * This card's Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID.
   */
  arena_id?: number | null;

  /**
   * A unique ID for this card in Scryfall's database.
   */
  id: string;

  /**
   * A language code for this printing.
   */
  lang: string;

  /**
   * This card's Magic Online ID (also known as the Catalog ID), if any. A large
   * percentage of cards are not available on Magic Online and do not have this
   * ID.
   */
  mtgo_id?: number | null;

  /**
   * This card's foil Magic Online ID (also known as the Catalog ID), if any. A
   * large percentage of cards are not available on Magic Online and do not have
   * this ID.
   */
  mtgo_foil_id?: number | null;

  /**
   * This card's multiverse IDs on Gatherer, if any, as an array of integers.
   * Note that Scryfall includes many promo cards, tokens, and other esoteric
   * objects that do not have these identifiers.
   */
  multiverse_ids?: Array<number> | null;

  /**
   * This card's ID on TCGplayer's API, also known as the `productId`.
   */
  tcgplayer_id?: number | null;

  /**
   * This card's ID on TCGplayer's API, for its etched version if that version
   * is a separate product.
   */
  tcgplayer_etched_id?: number | null;

  /**
   * This card's ID on Cardmarket's API, also known as the `idProduct`.
   */
  cardmarket_id?: number | null;

  /**
   * A content type for this object, always `card`.
   */
  object: string;

  /**
   * A unique ID for this card's oracle identity. This value is consistent
   * across reprinted card editions, and unique among different cards with the
   * same name (tokens, Unstable variants, etc).
   */
  oracle_id: string;

  /**
   * A link to where you can begin paginating all re/prints for this card on
   * Scryfall's API.
   */
  prints_search_uri: string;

  /**
   * A link to this card's rulings list on Scryfall's API.
   */
  rulings_uri: string;

  /**
   * A link to this card's permapage on Scryfall's website.
   */
  scryfall_uri: string;

  /**
   * A link to this card object on Scryfall's API.
   */
  uri: string;
}

/**
 * Card objects represent individual Magic: The Gathering cards that players
 * could obtain and add to their collection (with a few minor exceptions).
 */
export interface IScryfallCard
  extends IScryfallObject,
    IScryfallCardCoreFields {
  object: "card";
}
