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
    this.tenth = [];
  }

  frames: Frame[];
  throwed: boolean;
  bonus: Bonus[];
  tenth: number[];

  roll(pins: number) {
    if (pins < 0 || pins > 10 || !Number.isInteger(pins)) {
      throw new Error(`Impossible value: ${pins}`);
    }

    // if (this.frames.length === 9 && !this.throwed) {
    // }

    if (!this.throwed) {
      const frame: Frame = { first: pins, second: 0 };

      if (frame.first === 10) {
        this.bonus.push("strike");
      }

      this.frames.push(frame);
      if (frame.first !== 10) {
        this.throwed = true;
      }
    } else {
      const frame: Frame = this.frames.pop() as Frame;
      frame.second = pins;

      if (frame.first + frame.second > 10) {
        throw new Error("Over 10 pins");
      } else if (frame.first + frame.second === 10) {
        this.bonus.push("spare");
      } else {
        this.bonus.push("none");
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

    // totalScore += this.tenth.reduce((sum, elm) => sum + elm);

    this.bonus.forEach((b, i) => {
      switch (b) {
        case "strike":
          if (this.frames[i + 1].first === 10) {
            totalScore += 10 + this.frames[i + 2].first;
          } else {
            totalScore += this.frames[i + 1].first + this.frames[i + 1].second;
          }
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
