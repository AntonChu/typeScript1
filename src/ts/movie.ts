import Buyable from './buyable';
export default class Movie {
    private items: Buyable[] = [];

    add(item: Buyable): void {
      this.items.push(item);
    }

    getAll(): Buyable[] {
        return [...this.items];
    }
}