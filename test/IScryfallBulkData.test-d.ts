import { assertType, test } from "vitest";
import { IScryfallBulkData } from "../src";

test("Bulk Data object conforms to interface", () => {
  const bulkData = {
    object: "bulk_data" as const,
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
  };

  assertType<IScryfallBulkData>(bulkData);
});
