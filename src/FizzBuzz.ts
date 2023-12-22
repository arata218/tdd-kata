export class FizzBuzz {
  constructor() {}

  generate(from: number = 1, to: number = 100) {
    let arr: (number | string)[] = [];

    for (let i = from; i <= to; i += 1) {
      if (i % 15 === 0) {
        arr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }

    return arr;
  }
}
