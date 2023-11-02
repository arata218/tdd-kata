export class PrimeFactors {
  generate(n: number) {
    const list = [];
    let temp = n;

    while (temp > 1) {
      list.push(temp);
      temp /= 2;
    }

    return list;
  }
}
