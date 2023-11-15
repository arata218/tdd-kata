export class BowlingGame {
  constructor() {
    this.score = 0;
    this.bonus = 0;
  }

  score: number;
  bonus: number;

  roll(pins: number) {}

  getScore() {
    return this.score;
  }
}
