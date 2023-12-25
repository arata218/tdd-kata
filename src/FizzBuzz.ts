type Rule = [number, string];

export class FizzBuzz {
  constructor(additionalRules: Rule[]) {
    const map = new Map(additionalRules);
    map.set(3, "Fizz");
    map.set(5, "Buzz");
    this.rules = new Map([...map].sort((a, b) => a[0] - b[0]));

    console.log(this.rules);
  }

  rules: Map<number, string>;

  generate(from: number = 1, to: number = 100) {
    let arr: (number | string)[] = [];
    let str: string = "";

    for (let i = from; i <= to; i += 1) {
      this.rules.forEach((word, key) => {
        if (i % key === 0) str += word;
      });

      if (str) {
        arr.push(str);
        str = "";
      } else {
        arr.push(i);
      }
    }

    return arr;
  }
}
