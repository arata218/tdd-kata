import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  let greeter;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 9, 1, 15, 0));
    greeter = new Greeter();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("Says Hello", () => {
    expect(greeter.greet("Arata")).toBe("Hello Arata");
    expect(greeter.greet("")).toBe("Hello ");
  });

  it("Says trimmed name", () => {
    expect(greeter.greet("  Arata  ")).toBe("Hello Arata");
    expect(greeter.greet("\tArata\n")).toBe("Hello Arata");
    expect(greeter.greet("Usami Arata")).toBe("Hello Usami Arata");
  });

  it("Says capitalized name", () => {
    expect(greeter.greet("arata")).toBe("Hello Arata");
    expect(greeter.greet("a")).toBe("Hello A");
  });

  it("Says Good morning", () => {
    jest.setSystemTime(new Date(2023, 9, 1, 5, 59));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 6, 0));
    expect(new Greeter().greet("Arata")).toBe("Good morning Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 11, 59));
    expect(new Greeter().greet("Arata")).toBe("Good morning Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 12, 0));
    expect(new Greeter().greet("Arata")).toBe("Hello Arata");
  });

  it("Says Good evening", () => {
    jest.setSystemTime(new Date(2023, 9, 1, 17, 59));
    expect(new Greeter().greet("Arata")).toBe("Hello Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 18, 0));
    expect(new Greeter().greet("Arata")).toBe("Good evening Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 21, 59));
    expect(new Greeter().greet("Arata")).toBe("Good evening Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 22, 0));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
  });

  it("Says Good night", () => {
    jest.setSystemTime(new Date(2023, 9, 1, 21, 59));
    expect(new Greeter().greet("Arata")).toBe("Good evening Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 22, 0));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 5, 59));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 6, 0));
    expect(new Greeter().greet("Arata")).toBe("Good morning Arata");
  });

  it("Calls console.log() with 'Hello Arata'", () => {
    const spy = jest.spyOn(console, "log");
    greeter.greet("Arata");
    expect(spy).toHaveBeenCalledWith("Hello Arata");
  });
});
