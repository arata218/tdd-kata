type Frame = {
  first: number;
  second: number;
};

type Bonus = "strike" | "spare" | "none";

export class BowlingGame {
  constructor() {
    this.frames = [];
    this.throwed = false;
    this.bonus = [];
  }

  frames: Frame[];
  throwed: boolean;
  bonus: Bonus[];

  roll(pins: number) {
    if (pins < 0 || pins > 10 || !Number.isInteger(pins)) {
      throw new Error(`impossible value: ${pins}`);
    }
    if (!this.throwed) {
      const frame: Frame = { first: pins, second: 0 };
      this.frames.push(frame);
      this.throwed = true;
    } else {
      const frame: Frame = this.frames.pop() as Frame;
      frame.second = pins;
      if (frame.first + frame.second > 10) {
        throw new Error("over 10 pins");
      }
      this.frames.push(frame);
      this.throwed = false;
    }
  }

  getScore() {
    let totalScore = 0;

    for (const f of this.frames) {
      const score = f.first + f.second;
      totalScore += score;
    }

    return totalScore;
  }
}
