import { FizzBuzz } from "../src/FizzBuzz";
import { fixtures } from "./fixtures";

const DEFAULT_RULES = [
  { word: "Fizz", cond: (i) => i % 3 === 0 },
  { word: "Buzz", cond: (i) => i % 5 === 0 },
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
      { word: "Foo", cond: (i) => i % 7 === 0 },
      { word: "Boo", cond: (i) => i % 11 === 0 },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FizzBuzzFooBoo);
  });

  test("add Small", () => {
    const fizzbuzz = new FizzBuzz([
      { word: "Small", cond: (i) => i < 16 },
      ...DEFAULT_RULES,
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.SmallFizzBuzz);
  });

  test("add Big", () => {
    const fizzbuzz = new FizzBuzz([
      { word: "Big", cond: (i) => i > 95 },
      ...DEFAULT_RULES,
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.BigFizzBuzz);
  });

  test("BuzzFizz", () => {
    const fizzbuzz = new FizzBuzz([
      { word: "Buzz", cond: (i) => i % 3 === 0 },
      { word: "Fizz", cond: (i) => i % 5 === 0 },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.BuzzFizz);
  });

  test("FTW", () => {
    const fizzbuzz = new FizzBuzz([
      {
        word: "FTW",
        cond: (i) => i % 3 === 0 && i % 5 === 0,
      },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.FTW);
  });

  test("GG", () => {
    const fizzbuzz = new FizzBuzz([
      {
        word: "GG",
        cond: (i) => i % 3 === 0 || i % 5 === 0,
      },
    ]);
    expect(fizzbuzz.generate()).toStrictEqual(fixtures.GG);
  });
});
