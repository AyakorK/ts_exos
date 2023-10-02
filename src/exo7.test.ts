import { Queue } from './exo7';

describe('Queue', () => {
  test('should enqueue and dequeue elements', () => {
    const stringQueue = new Queue<string>();
    stringQueue.enqueue('Hello');
    stringQueue.enqueue('World');

    expect(stringQueue.dequeue()).toBe('Hello');
    expect(stringQueue.dequeue()).toBe('World');
    expect(stringQueue.dequeue()).toBeUndefined();
  });

  test('should return the correct size', () => {
    const numberQueue = new Queue<number>();
    numberQueue.enqueue(1);
    numberQueue.enqueue(2);
    numberQueue.enqueue(3);

    expect(numberQueue.size()).toBe(3);
  });

  test('should check if the queue is empty', () => {
    const emptyQueue = new Queue<number>();
    const nonEmptyQueue = new Queue<number>();
    nonEmptyQueue.enqueue(1);

    expect(emptyQueue.isEmpty()).toBe(true);
    expect(nonEmptyQueue.isEmpty()).toBe(false);
  });
});
