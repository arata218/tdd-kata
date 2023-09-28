export class Greeter {
  greet(name: string) {
    const trimmedName = name.trim();

    const cap = trimmedName.slice(0, 1).toUpperCase();
    const rest = trimmedName.slice(1);
    const capitalizedName = cap + rest;

    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return `Good morning ${capitalizedName}`;
    }
    return `Hello ${capitalizedName}`;
  }
}
