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

  test("Returns Hello <name>", () => {
    expect(greeter.greet("Arata")).toBe("Hello Arata");
    expect(greeter.greet("")).toBe("Hello ");
  });

  test("Trims the input", () => {
    expect(greeter.greet("  Arata  ")).toBe("Hello Arata");
    expect(greeter.greet("\tArata\n")).toBe("Hello Arata");
    expect(greeter.greet("Usami Arata")).toBe("Hello Usami Arata");
  });

  test("Capitalizes the first letter of the name", () => {
    expect(greeter.greet("arata")).toBe("Hello Arata");
    expect(greeter.greet("a")).toBe("Hello A");
  });

  test("Returns Good morning <name> when the time is 06:00-12:00", () => {
    jest.setSystemTime(new Date(2023, 9, 1, 5, 59));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 6, 0));
    expect(new Greeter().greet("Arata")).toBe("Good morning Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 11, 59));
    expect(new Greeter().greet("Arata")).toBe("Good morning Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 12, 0));
    expect(new Greeter().greet("Arata")).toBe("Hello Arata");
  });

  test("Returns Good evening <name> when the time is 18:00-22:00", () => {
    jest.setSystemTime(new Date(2023, 9, 1, 17, 59));
    expect(new Greeter().greet("Arata")).toBe("Hello Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 18, 0));
    expect(new Greeter().greet("Arata")).toBe("Good evening Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 21, 59));
    expect(new Greeter().greet("Arata")).toBe("Good evening Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 22, 0));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
  });

  test("Returns Good night <name> when the time is 22:00-06:00", () => {
    jest.setSystemTime(new Date(2023, 9, 1, 21, 59));
    expect(new Greeter().greet("Arata")).toBe("Good evening Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 22, 0));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 5, 59));
    expect(new Greeter().greet("Arata")).toBe("Good night Arata");
    jest.setSystemTime(new Date(2023, 9, 1, 6, 0));
    expect(new Greeter().greet("Arata")).toBe("Good morning Arata");
  });

  test("Logs into console each time it is called", () => {
    const spy = jest.spyOn(console, "log");
    greeter.greet("Arata");
    expect(spy).toHaveBeenCalledWith("Hello Arata");
  });
});
