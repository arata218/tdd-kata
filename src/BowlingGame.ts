// declare global {
//   interface Array<T> {
//     lastFrame(): T;
//     lastThrow(): T;
//     isStrike(): boolean;
//     isSpare(): boolean;
//   }
// }

// Array.prototype.lastFrame = function () {
//   return this[this.length - 1];
// };
// Array.prototype.lastThrow = function () {
//   return this[this.length - 1];
// };
// Array.prototype.isStrike = function () {
//   return this[0] === 10;
// };
// Array.prototype.isSpare = function () {
//   return this[0] + this[1] === 10;
// };

const lastFrame = (arr: number[][]) => arr[arr.length - 1];
const lastThrow = (arr: number[]) => arr[arr.length - 1];
const isStrike = (f: number[]) => f[0] === 10;
const isSpare = (f: number[]) => f[0] + f[1] === 10;

export class BowlingGame {
  constructor() {
    this.frames = [];
    this.filled = true;
  }

  frames: number[][];
  filled: boolean;

  roll(pins: number) {
    if (this.frames.length === 10 && this.filled) {
      throw new Error("Game end");
    }

    if (pins < 0 || pins > 10 || !Number.isInteger(pins)) {
      throw new Error(`Impossible value: ${pins}`);
    }

    if (
      !this.filled &&
      lastThrow(lastFrame(this.frames)) + pins > 10 &&
      lastThrow(lastFrame(this.frames)) !== 10
    ) {
      throw new Error("Over 10 pins");
    }

    if (this.filled) {
      const f = [pins];
      this.frames.push(f);

      if (isStrike(f) && this.frames.length !== 10) return;

      this.filled = false;
    } else {
      const f = lastFrame(this.frames);
      f.push(pins);

      if (this.frames.length === 10 && f.length === 2) {
        if (isStrike(f) || isSpare(f)) return;
      }

      this.filled = true;
    }
  }

  getScore() {
    let totalScore = 0;

    this.frames.forEach((f, i) => {
      totalScore += f.reduce((sum, elm) => sum + elm);

      if (i == 9) return;

      if (isStrike(f)) {
        if (i !== 8 && isStrike(this.frames[i + 1])) {
          totalScore += 10 + this.frames[i + 2][0];
        } else {
          totalScore += this.frames[i + 1][0] + this.frames[i + 1][1];
        }
      }

      if (isSpare(f)) {
        totalScore += this.frames[i + 1][0];
      }
    });

    return totalScore;
  }
}
