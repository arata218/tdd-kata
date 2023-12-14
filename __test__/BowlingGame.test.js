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
    expect(() => game.roll(11)).toThrow("Impossible value: 11");
    expect(() => game.roll(-1)).toThrow("Impossible value: -1");
    expect(() => game.roll(0.1)).toThrow("Impossible value: 0.1");
  });

  test("Over 10 pins", () => {
    game.roll(5);
    expect(() => game.roll(6)).toThrow("Over 10 pins");
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

  test("Strike", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(14);
  });

  test("Turkey", () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(65);
  });

  test("10th frame and Game end", () => {
    for (let i = 0; i < 18; i++) {
      game.roll(1);
    }
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(20);
    expect(() => game.roll(1)).toThrow("Game end");
  });

  test("Spare on 10th frame", () => {
    for (let i = 0; i < 18; i++) {
      game.roll(1);
    }
    game.roll(5);
    game.roll(5);
    game.roll(5);
    expect(game.getScore()).toBe(33);
    expect(() => game.roll(1)).toThrow("Game end");
  });

  test("Strike on 10th frame", () => {
    for (let i = 0; i < 18; i++) {
      game.roll(1);
    }
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toBe(30);
    expect(() => game.roll(1)).toThrow("Game end");
  });

  test("Perfect", () => {
    for (let i = 0; i < 9; i++) {
      game.roll(10);
    }
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.getScore()).toBe(300);
    expect(() => game.roll(1)).toThrow("Game end");
  });
});
