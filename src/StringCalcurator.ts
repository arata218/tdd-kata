export class StringCalcurator {
  add(str: String) {
    let arr = [];

    if (str.startsWith("//")) {
      const delimiter = str[2];
      arr = str.slice(3).split(/[,\n#{delimiter}]/);
    } else {
      arr = str.split(/[,\n]/);
    }

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
