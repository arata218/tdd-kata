export class Greeter {
  constructor() {
    this.hour = new Date().getHours();
  }

  hour: number;

  greet(name: string) {
    const trimmedName = name.trim();
    const cap = trimmedName.slice(0, 1).toUpperCase();
    const rest = trimmedName.slice(1);
    const capitalizedName = cap + rest;

    let greeting = "Hello";
    if (this.hour >= 6 && this.hour < 12) {
      greeting = "Good morning";
    } else if (this.hour >= 18 && this.hour < 22) {
      greeting = "Good evening";
    } else if (this.hour >= 22 || this.hour < 6) {
      greeting = "Good night";
    }

    console.log(`${greeting} ${capitalizedName}`);
    return `${greeting} ${capitalizedName}`;
  }
}
