import { assertType, test } from "vitest";
import { IScryfallMigration } from "../src/IScryfallMigration";

test("Migration object conforms to interface", () => {
  const migration = {
    object: "migration" as const,
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

  assertType<IScryfallMigration>(migration);
});
