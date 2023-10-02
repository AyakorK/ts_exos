export class Queue<T> {
  private elements: T[] = [];


  enqueue(item: T) {
    this.elements.push(item);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  size(): number {
    return this.elements.length;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}