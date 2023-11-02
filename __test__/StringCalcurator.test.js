import { StringCalcurator } from "../src/StringCalcurator";

describe("StringCalcurator", () => {
  const calc = new StringCalcurator();

  test("An empty string returns zero", () => {
    expect(calc.add("")).toBe(0);
  });

  test("A single number returns the value", () => {
    expect(calc.add("1")).toBe(1);
    expect(calc.add("10")).toBe(10);
  });

  test("Two numbers, comma delimited, returns the sum", () => {
    expect(calc.add("1,2")).toBe(3);
    expect(calc.add("10,20")).toBe(30);
  });

  test("Two numbers, newline delimited, returns the sum", () => {
    expect(calc.add("1\n2")).toBe(3);
    expect(calc.add("10\n20")).toBe(30);
  });

  test("Three numbers, delimited either way, returns the sum", () => {
    expect(calc.add("1\n2,3\n4")).toBe(10);
  });

  test("Negative numbers throw an exception with the message", () => {
    expect(() => calc.add("-1,2,-3")).toThrow("negatives not allowed: -1,-3");
  });

  test("Numbers greater than 1000 are ignored", () => {
    expect(calc.add("1000,1")).toBe(1001);
    expect(calc.add("1001,1")).toBe(1);
  });

  test("A single char delimiter can be defined on the first line starting with //", () => {
    expect(calc.add("//#\n1#2")).toBe(3);
  });

  test("A multi char delimiter can be defined on the first line starting with //", () => {
    expect(calc.add("//###\n1###2")).toBe(3);
  });
});
