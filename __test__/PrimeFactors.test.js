import { PrimeFactors } from "../src/PrimeFactors";

describe("PrimeFactors", () => {
  const pf = new PrimeFactors();

  test("1 should return []", () => {
    expect(pf.generate(1)).toStrictEqual([]);
  });

  test("2 should return [2]", () => {
    expect(pf.generate(2)).toStrictEqual([2]);
  });

  test("3 should return [3]", () => {
    expect(pf.generate(3)).toStrictEqual([3]);
  });

  test("4 should return [2, 2]", () => {
    expect(pf.generate(4)).toStrictEqual([2, 2]);
  });

  test("5 should return [5]", () => {
    expect(pf.generate(5)).toStrictEqual([5]);
  });

  test("6 should return [2, 3]", () => {
    expect(pf.generate(6)).toStrictEqual([2, 3]);
  });

  test("7 should return [7]", () => {
    expect(pf.generate(7)).toStrictEqual([7]);
  });

  test("8 should return [2, 2, 2]", () => {
    expect(pf.generate(8)).toStrictEqual([2, 2, 2]);
  });

  test("9 should return [3, 3]", () => {
    expect(pf.generate(9)).toStrictEqual([3, 3]);
  });

  test("4620 should return [2, 2, 3, 5, 7, 11]", () => {
    expect(pf.generate(4620)).toStrictEqual([2, 2, 3, 5, 7, 11]);
  });
});
