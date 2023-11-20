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
      if (pins === 10) {
        this.bonus.push("strike");
      }
      const frame: Frame = { first: pins, second: 0 };
      this.frames.push(frame);
      if (pins !== 10) {
        this.throwed = true;
      }
    } else {
      const frame: Frame = this.frames.pop() as Frame;
      if (frame.first + pins > 10) {
        throw new Error("over 10 pins");
      } else if (frame.first + pins === 10) {
        this.bonus.push("spare");
      } else {
        this.bonus.push("none");
      }
      frame.second = pins;
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

    this.bonus.forEach((b, i) => {
      switch (b) {
        case "strike":
          totalScore += this.frames[i + 1].first + this.frames[i + 1].second;
          break;
        case "spare":
          totalScore += this.frames[i + 1].first;
          break;
        case "none":
          break;
      }
    });

    return totalScore;
  }
}
