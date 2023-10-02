export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

// Test de la fonction avec différentes valeurs de températures en Celsius
const celsiusTemperatures: number[] = [0, 25, -10, 100];
celsiusTemperatures.forEach((celsius) => {
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius} degrés Celsius équivaut à ${fahrenheit} degrés Fahrenheit.`);
});
