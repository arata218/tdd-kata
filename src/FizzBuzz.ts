type Rule = {
  word: string;
  cond: (i: number) => boolean;
};

export class FizzBuzz {
  constructor(rules: Rule[]) {
    this.rules = rules;
  }

  rules: Rule[];

  generate(from: number = 1, to: number = 100) {
    let arr: (number | string)[] = [];

    for (let i = from; i <= to; i += 1) {
      let str: string = "";

      this.rules.forEach((rule) => {
        if (rule.cond(i)) str += rule.word;
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
