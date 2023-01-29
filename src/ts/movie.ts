import Buyable from './buyable';
export default class Movie {
    items: Buyable[] = [];

    add(item: Buyable): void {
      this.items.push(item);
    }
}