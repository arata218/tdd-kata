export class Greeter {
  constructor(ms) {
    this.hour = ms ? new Date(ms).getHours() : new Date().getHours();
  }

  greet(name) {
    const trimmedName = name.trim();

    const cap = trimmedName.slice(0, 1).toUpperCase();
    const rest = trimmedName.slice(1);
    const capitalizedName = cap + rest;

    if (this.hour >= 6 && this.hour < 12) {
      return `Good morning ${capitalizedName}`;
    }
    return `Hello ${capitalizedName}`;
  }
}

const g = new Greeter();
console.log(g);
