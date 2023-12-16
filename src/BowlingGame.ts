type Frame = number[];

type Bonus = "strike" | "spare" | "none";

export class BowlingGame {
  constructor() {
    this.frames = [];
    this.filled = true;
    this.bonus = [];
  }

  frames: Frame[];
  filled: boolean;
  bonus: Bonus[];

  roll(pins: number) {
    if (this.frames.length === 10 && this.filled) {
      throw new Error("Game end");
    }

    if (pins < 0 || pins > 10 || !Number.isInteger(pins)) {
      throw new Error(`Impossible value: ${pins}`);
    }

    if (this.filled) {
      const frame: Frame = [pins];
      this.frames.push(frame);

      if (pins === 10) {
        this.bonus.push("strike");
        if (this.bonus.length === 10) this.filled = false;
        return;
      }

      this.filled = false;
    } else {
      const frame: Frame = this.frames.pop() as Frame;
      frame.push(pins);

      if (this.bonus[9] === "strike") {
        if (frame[1] !== 10 && frame[1] + frame[2] > 10) {
          throw new Error("Over 10 pins");
        }

        this.frames.push(frame);
        if (frame.length === 3) this.filled = true;
        return;
      }

      if (frame[0] + frame[1] > 10) {
        throw new Error("Over 10 pins");
      }

      this.frames.push(frame);
      if (frame.length === 3) {
        this.filled = true;
        return;
      }

      if (frame[0] + frame[1] === 10) {
        this.bonus.push("spare");
        if (this.bonus.length === 10) return;
      } else {
        this.bonus.push("none");
      }

      this.filled = true;
    }
  }

  getScore() {
    let totalScore = 0;

    for (const f of this.frames) {
      totalScore += f.reduce((sum, elm) => sum + elm);
    }

    this.bonus.forEach((b, i) => {
      if (i == 9) return;

      switch (b) {
        case "strike":
          if (i !== 8 && this.frames[i + 1][0] === 10) {
            totalScore += 10 + this.frames[i + 2][0];
          } else {
            totalScore += this.frames[i + 1][0] + this.frames[i + 1][1];
          }
          break;

        case "spare":
          totalScore += this.frames[i + 1][0];
          break;

        case "none":
          break;
      }
    });

    return totalScore;
  }
}
