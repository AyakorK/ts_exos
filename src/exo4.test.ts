import { celsiusToFahrenheit } from './exo4';

describe('celsiusToFahrenheit', () => {
  test('should correctly convert 0°C to 32°F', () => {
    const result = celsiusToFahrenheit(0);
    expect(result).toBe(32);
  });

  test('should correctly convert 25°C to 77°F', () => {
    const result = celsiusToFahrenheit(25);
    expect(result).toBe(77);
  });

  test('should correctly convert -10°C to 14°F', () => {
    const result = celsiusToFahrenheit(-10);
    expect(result).toBe(14);
  });

  test('should correctly convert 100°C to 212°F', () => {
    const result = celsiusToFahrenheit(100);
    expect(result).toBe(212);
  });
});
