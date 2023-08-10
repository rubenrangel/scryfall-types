import { assertType, test } from "vitest";
import { IScryfallError } from "../src";

test("Error object conforms to interface", () => {
  const error = {
    object: "error" as const,
    code: "bad_request",
    status: 400,
    warnings: [
      "Invalid expression “is:slick” was ignored. Checking if cards are “slick” is not supported",
      "Invalid expression “cmc>cmc” was ignored. The sides of your comparison must be different.",
    ],
    details: "All of your terms were ignored.",
  };

  assertType<IScryfallError>(error);
});
