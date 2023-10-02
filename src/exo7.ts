export class Queue<T> {
  private elements: T[] = [];


  // Méthode pour ajouter un élément à la file d'attente
  enqueue(item: T) {
    this.elements.push(item);
  }

  // Méthode pour retirer et renvoyer le premier élément de la file d'attente
  dequeue(): T | undefined {
    return this.elements.shift();
  }

  // Méthode pour obtenir la taille de la file d'attente
  size(): number {
    return this.elements.length;
  }

  // Méthode pour vérifier si la file d'attente est vide
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}