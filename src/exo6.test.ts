import { Dog, Cat, Parrot } from './exo6';

describe('Dog', () => {
  test('should return "Woof!" when speaking', () => {
    const dog = new Dog('Buddy', 3);
    const result = dog.speak();
    expect(result).toBe('Woof!');
  });
});

describe('Cat', () => {
  test('should return "Meow!" when speaking', () => {
    const cat = new Cat('Whiskers', 2);
    const result = cat.speak();
    expect(result).toBe('Meow!');
  });
});

describe('Parrot', () => {
  test('should return the words joined by commas when speaking', () => {
    const parrot = new Parrot('Polly', 5, ['Hello', 'Polly', 'Cracker']);
    const result = parrot.speak();
    expect(result).toBe('Hello, Polly, Cracker');
  });
});
