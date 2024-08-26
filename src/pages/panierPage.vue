<script setup>
import { useCartStore } from "@/store/carteStore";

const cartStore = useCartStore();
</script>

<template>
  <div class="panier">
    <h2>Votre Panier</h2>
    <div v-if="cartStore.cart.length === 0">Votre panier est vide</div>
    <div v-else>
      <div v-for="pizza in cartStore.cart" :key="pizza.id" class="cart-item">
        <h3>{{ pizza.name }} ({{ pizza.quantity }})</h3>
        <p>{{ pizza.price }}€</p>
        <div class="quantity-controls">
          <button @click="cartStore.decreaseQuantity(pizza.id)"> - </button>
          <span> {{pizza.quantity}} </span>
          <button @click="cartStore.increaseQuantity(pizza.id)"> + </button>
        </div>
        <button @click="cartStore.removeFromCart(pizza.id)">Retirer</button>
      </div>
      <div class="total">Total: {{ cartStore.getTotal() }}€</div>
    </div>
  </div>
</template>

<style scoped>
.panier {
  border: solid 2px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}
.cart-item button {
  margin-left: 10px;
  margin-right: 10px;
  background-color: green;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

.cart-item button:hover {
  background-color: green;
}

.total {
  margin-top: 20px;
  font-weight: bold;
}
</style>
