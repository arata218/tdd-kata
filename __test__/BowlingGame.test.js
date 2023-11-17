import { BowlingGame } from "../src/BowlingGame";

describe("BowlingGame", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  test("New game", () => {
    expect(game.getScore()).toBe(0);
  });

  test("Roll and getScore", () => {
    game.roll(1);
    expect(game.getScore()).toBe(1);
  });

  test("Roll with impossible value returns error", () => {
    expect(() => game.roll(11)).toThrow("impossible value: 11");
    expect(() => game.roll(-1)).toThrow("impossible value: -1");
    expect(() => game.roll(0.1)).toThrow("impossible value: 0.1");
  });

  test("1st frame", () => {
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(2);
  });

  test("2nd frame", () => {
    game.roll(1);
    game.roll(1);
    game.roll(2);
    game.roll(2);
    expect(game.getScore()).toBe(6);
  });

  test("Spare", () => {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(13);
  });

  test("Strike", () => {});

  test("Turkey", () => {});

  test("10th frame", () => {});
});
