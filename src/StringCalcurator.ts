export class StringCalcurator {
  add(str: String) {
    const arr = str.split(/[,\n]/);

    let sum = 0;
    for (const elm of arr) {
      sum += Number(elm);
    }

    return sum;
  }
}
