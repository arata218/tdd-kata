import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  let greeter;
  // const date = new Date();

  beforeEach(() => {
    greeter = new Greeter();
    // greeter = new Greeter(date.setHours(15, 0));
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

  it.skip("Says Good morning", () => {
    greeter = new Greeter(date.setHours(5, 59));
    expect(greeter.greet("Arata")).toBe("Hello Arata");
    greeter = new Greeter(date.setHours(6, 0));
    expect(greeter.greet("Arata")).toBe("Good morning Arata");
    greeter = new Greeter(date.setHours(11, 59));
    expect(greeter.greet("Arata")).toBe("Good morning Arata");
    greeter = new Greeter(date.setHours(12, 0));
    expect(greeter.greet("Arata")).toBe("Hello Arata");
  });
});
