import { FizzBuzz } from "../src/FizzBuzz";
import { fixtures } from "./fixtures";

describe("FizzBuzz", () => {
  test("generate", () => {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FizzBuzz);
  });

  test("change range", () => {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.generate(1, 20)).toStrictEqual(fixtures.From1to20);
    expect(fizzbuzz.generate(15, 50)).toStrictEqual(fixtures.From15to50);
  });

  test("add FooBoo", () => {
    const fizzbuzz = new FizzBuzz([
      [7, "Foo"],
      [11, "Boo"],
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FooBoo);
  });
});
