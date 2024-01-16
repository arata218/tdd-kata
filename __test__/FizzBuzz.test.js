import { FizzBuzz, bigger, multiple, smaller } from "../src/FizzBuzz";
import { fixtures } from "./fixtures";

const DEFAULT_RULES = [
  { key: 3, word: "Fizz", conditional: multiple },
  { key: 5, word: "Buzz", conditional: multiple },
];

describe("FizzBuzz", () => {
  test("generate", () => {
    const fizzbuzz = new FizzBuzz(DEFAULT_RULES);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FizzBuzz);
  });

  test("change range", () => {
    const fizzbuzz = new FizzBuzz(DEFAULT_RULES);
    expect(fizzbuzz.generate(1, 20)).toStrictEqual(fixtures.From1to20);
    expect(fizzbuzz.generate(15, 50)).toStrictEqual(fixtures.From15to50);
  });

  test("add FooBoo", () => {
    const fizzbuzz = new FizzBuzz([
      ...DEFAULT_RULES,
      { key: 7, word: "Foo", conditional: multiple },
      { key: 11, word: "Boo", conditional: multiple },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FizzBuzzFooBoo);
  });

  test("add Small", () => {
    const fizzbuzz = new FizzBuzz([
      ...DEFAULT_RULES,
      { key: 16, word: "Small", conditional: smaller },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.SmallFizzBuzz);
  });

  test("add Big", () => {
    const fizzbuzz = new FizzBuzz([
      ...DEFAULT_RULES,
      { key: 95, word: "Big", conditional: bigger },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.BigFizzBuzz);
  });

  test("BuzzFizz", () => {
    const fizzbuzz = new FizzBuzz([
      { key: 3, word: "Buzz", conditional: multiple },
      { key: 5, word: "Fizz", conditional: multiple },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.BuzzFizz);
  });

  test("FTW", () => {
    const fizzbuzz = new FizzBuzz({
      key: 0,
      word: "FTW",
      conditional: multiple,
    });
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FTW);
  });

  test("GG", () => {
    const fizzbuzz = new FizzBuzz({
      key: 0,
      word: "GG",
      conditional: multiple,
    });
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.GG);
  });
});
