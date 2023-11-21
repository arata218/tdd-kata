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

  test("Impossible value", () => {
    expect(() => game.roll(11)).toThrow("impossible value: 11");
    expect(() => game.roll(-1)).toThrow("impossible value: -1");
    expect(() => game.roll(0.1)).toThrow("impossible value: 0.1");
  });

  test("Over 10 pins", () => {
    game.roll(5);
    expect(() => game.roll(6)).toThrow("over 10 pins");
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
    expect(game.bonus[0]).toBe("spare");
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(13);
  });

  test("Strike", () => {
    game.roll(10);
    expect(game.bonus[0]).toBe("strike");
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(14);
  });

  test("Turkey", () => {});

  test("10th frame", () => {});

  test("Perfect", () => {});

  test("Game end", () => {});
});
