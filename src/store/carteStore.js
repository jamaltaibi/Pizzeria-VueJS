// store/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(pizza) {
      const existingPizza = this.cart.find((p) => p.id === pizza.id);
      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        this.cart.push({ ...pizza, quantity: 1 });
      }
    },
    getTotal() {
      return this.cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0).toFixed(2);
    },
  },
});
