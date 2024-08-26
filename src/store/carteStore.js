
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({ cart: [], }),
  actions: {
    addToCart(pizza) {
      const existingPizza = this.cart.find((p) => p.id === pizza.id);
      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        this.cart.push({ ...pizza, quantity: 1 });
      }
    },
    removeFromCart(pizzaId) {
      const index = this.cart.findIndex((p) => p.id === pizzaId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    increaseQuantity(pizzaId) {
      const pizza = this.cart.find((p) => p.id === pizzaId);
      if (pizza) {
        pizza.quantity += 1;
      }
    },
    decreaseQuantity(pizzaId) {
      const pizza = this.cart.find((p) => p.id === pizzaId);
      if (pizza) {
        pizza.quantity -= 1;
        if (pizza.quantity === 0) {
          this.removeFromCart(pizzaId);
        }
      }
    },
    getTotal() {
      return this.cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0).toFixed(2);
    },
  },
});
