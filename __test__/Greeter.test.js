import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  it.each([
    ["Arata", "Hello Arata"],
    ["Yu", "Hello Yu"],
  ])("Says Hello and name", (name, expected) => {
    const greeter = new Greeter();
    expect(greeter.greet(name)).toBe(expected);
  });
});
