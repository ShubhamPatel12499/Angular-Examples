import { Injectable } from '@angular/core';

@Injectable()
export class cartService {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): string[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}