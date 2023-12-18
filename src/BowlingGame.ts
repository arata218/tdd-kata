type Frame = number[];

const last = () => {};

export class BowlingGame {
  constructor() {
    this.frames = [];
    this.filled = true;
  }

  frames: Frame[];
  filled: boolean;

  roll(pins: number) {
    if (this.frames.length === 10 && this.filled) {
      throw new Error("Game end");
    }

    if (pins < 0 || pins > 10 || !Number.isInteger(pins)) {
      throw new Error(`Impossible value: ${pins}`);
    }

    if (this.filled) {
      this.frames.push([pins]);

      if (pins === 10) {
        if (this.frames.length === 10) this.filled = false;
        return;
      }

      this.filled = false;
    } else {
      const f: Frame = this.frames.pop() as Frame;

      if ((f.at(-1) as number) + pins > 10 && (f.at(-1) as number) !== 10) {
        throw new Error("Over 10 pins");
      }

      f.push(pins);
      this.frames.push(f);

      if (this.frames.length === 10 && f.length === 2) {
        if (f[0] === 10 || f[0] + f[1] === 10) return;
      }

      this.filled = true;
    }
  }

  getScore() {
    let totalScore = 0;

    this.frames.forEach((f, i) => {
      totalScore += f.reduce((sum, elm) => sum + elm);

      if (i == 9) return;

      if (f[0] === 10) {
        if (i !== 8 && this.frames[i + 1][0] === 10) {
          totalScore += 10 + this.frames[i + 2][0];
        } else {
          totalScore += this.frames[i + 1][0] + this.frames[i + 1][1];
        }
      }

      if (f[0] + f[1] === 10) {
        totalScore += this.frames[i + 1][0];
      }
    });

    return totalScore;
  }
}
