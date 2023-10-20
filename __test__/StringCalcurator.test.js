import { StringCalcurator } from "../src/StringCalcurator";

describe("StringCalcurator", () => {
  const calc = new StringCalcurator();

  it("returns zero with empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  it("returns the value with single number", () => {
    expect(calc.add("1")).toBe(1);
    expect(calc.add("10")).toBe(10);
  });

  it("returns the sum with comma delimited two numbers", () => {
    expect(calc.add("1,2")).toBe(3);
    expect(calc.add("10,20")).toBe(30);
  });

  it("returns the sum with newline delimited two numbers", () => {
    expect(calc.add("1\n2")).toBe(3);
    expect(calc.add("10\n20")).toBe(30);
  });
});
