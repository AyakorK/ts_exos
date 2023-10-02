import { filterEvenNumbers } from './exo5';

describe('filterEvenNumbers', () => {
  test('should return an empty array when given an empty array', () => {
    const result = filterEvenNumbers([]);
    expect(result).toEqual([]);
  });

  test('should correctly filter even numbers from an array', () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const result = filterEvenNumbers(inputArray);
    expect(result).toEqual([2, 4, 6]);
  });

  test('should return an empty array when no even numbers are present', () => {
    const inputArray = [1, 3, 5, 7, 9];
    const result = filterEvenNumbers(inputArray);
    expect(result).toEqual([]);
  });

  test('should correctly filter even numbers from a larger array', () => {
    const inputArray = [10, 15, 20, 25, 30];
    const result = filterEvenNumbers(inputArray);
    expect(result).toEqual([10, 20, 30]);
  });
});