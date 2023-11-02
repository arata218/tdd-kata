export class StringCalcurator {
  add(str: string) {
    let delimiter = "";

    if (str.startsWith("//")) {
      delimiter = str[2];
    }
    const arr = str.split(/[/,\n#{delimiter}]/);

    let sum = 0;
    const negatives = [];

    for (const elm of arr) {
      const num = Number(elm);
      if (num > 1000) continue;
      if (num < 0) {
        negatives.push(num);
      }
      sum += num;
    }

    if (negatives.length !== 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return sum;
  }
}
