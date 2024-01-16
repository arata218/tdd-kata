type Rule = {
  key: number;
  word: string;
  conditional: (i: number, key: number) => boolean;
};

export const multiple = (i: number, key: number) => i % key === 0;
export const smaller = (i: number, key: number) => i < key;
export const bigger = (i: number, key: number) => i > key;

export class FizzBuzz {
  constructor(rules: Rule[]) {
    this.rules = rules;
    this.rules.sort((a, b) => a.key - b.key);
  }

  rules: Rule[];

  generate(from: number = 1, to: number = 100) {
    let arr: (number | string)[] = [];

    for (let i = from; i <= to; i += 1) {
      let str: string = "";

      this.rules.forEach((rule) => {
        if (rule.conditional(i, rule.key)) {
          if (rule.conditional !== multiple) {
            str = rule.word + str;
          } else {
            str += rule.word;
          }
        }
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
