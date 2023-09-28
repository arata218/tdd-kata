import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  it.each([
    ["Arata", "Hello Arata"],
    ["Yu", "Hello Yu"],
    // trim
    ["  Arata  ", "Hello Arata"],
    ["\tArata", "Hello Arata"],
    ["\nArata", "Hello Arata"],
    ["Usami Arata", "Hello Usami Arata"],
    // capitalize
    ["arata", "Hello Arata"],
    ["y", "Hello Y"],
    ["", "Hello "],
  ])("Says Hello and name", (name, expected) => {
    const greeter = new Greeter();
    expect(greeter.greet(name)).toBe(expected);
  });

  it("Says Good morning and name", () => {
    const greeter = new Greeter();
    jest.useFakeTimers();

    jest.setSystemTime(new Date().setHours(11));
    expect(greeter.greet("Arata")).toBe("Good morning Arata");

    jest.setSystemTime(new Date().setHours(12));
    expect(greeter.greet("Arata")).toBe("Hello Arata");
  });
});
