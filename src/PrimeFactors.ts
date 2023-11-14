export class PrimeFactors {
  generate(num: number) {
    const factors = [];
    let temp = num;

    for (let div = 2; temp > 1; div++) {
      while (temp % div === 0) {
        factors.push(div);
        temp /= div;
      }
    }

    return factors;
  }
}
