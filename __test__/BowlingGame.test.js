import { BowlingGame } from "../src/BowlingGame";

describe("BowlingGame", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });
  test("new game", () => {
    expect(game.getScore()).toBe(0);
  });
});
