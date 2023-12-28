type Rule = [number, string];

export class FizzBuzz {
  constructor(
    additionalRules: Rule[],
    replace: boolean,
    small: number,
    big: number
  ) {
    const map = new Map(additionalRules);
    if (!replace) {
      map.set(3, "Fizz");
      map.set(5, "Buzz");
    }
    this.rules = new Map([...map].sort((a, b) => a[0] - b[0]));

    this.small = small;
    this.big = big;
  }

  rules: Map<number, string>;
  small: number;
  big: number;

  generate(from: number = 1, to: number = 100) {
    let arr: (number | string)[] = [];

    for (let i = from; i <= to; i += 1) {
      let str: string = "";

      if (i < this.small) str = "Small";
      if (i > this.big) str = "Big";

      this.rules.forEach((word, key) => {
        if (i % key === 0) str += word;
      });

      if (str) {
        arr.push(str);
      } else {
        arr.push(i);
      }
    }

    return arr;
  }
}
