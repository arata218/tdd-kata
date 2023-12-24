type Rule = { value: number; word: string };

export class FizzBuzz {
  constructor(r: Rule[]) {
    this.rules = [
      { value: 3, word: "Fizz" },
      { value: 5, word: "Buzz" },
    ];
    this.rules.concat(r);
  }

  rules: Rule[];

  generate(from: number = 1, to: number = 100) {
    let arr: (number | string)[] = [];
    let str: string = "";

    for (let i = from; i <= to; i += 1) {
      if (i % (this.rules[0].value * this.rules[1].value) === 0) {
        arr.push(this.rules[0].word + this.rules[1].word);
      } else if (i % this.rules[0].value === 0) {
        arr.push(this.rules[0].word);
      } else if (i % this.rules[1].value === 0) {
        arr.push(this.rules[1].word);
      } else {
        arr.push(i);
      }
    }

    return arr;
  }
}
