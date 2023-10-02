export class Greeter {
  // constructor(ms?: number) {
  //   this.hour = ms ? new Date(ms).getHours() : new Date().getHours();
  // }

  // hour: number;

  greet(name: string) {
    const trimmedName = name.trim();

    const cap = trimmedName.slice(0, 1).toUpperCase();
    const rest = trimmedName.slice(1);
    const capitalizedName = cap + rest;

    let greeting = "Hello";
    // if (this.hour >= 6 && this.hour < 12) {
    //   greeting = "Good Morning";
    // }
    return `${greeting} ${capitalizedName}`;
  }
}
