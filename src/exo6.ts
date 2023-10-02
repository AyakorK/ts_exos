// Interface Pet
interface Pet {
    name: string;
    age: number;
    speak(): string;
}
export class Dog implements Pet {
  constructor(public name: string, public age: number) {}

  speak(): string {
    return 'Woof!';
  }
}

export class Cat implements Pet {
  constructor(public name: string, public age: number) {}

  speak(): string {
    return 'Meow!';
  }
}
export class Parrot implements Pet {
  private words: string[];

  constructor(public name: string, public age: number, words: string[]) {
    this.words = words;
  }

  speak(): string {
    return this.words.join(', ');
  }
}