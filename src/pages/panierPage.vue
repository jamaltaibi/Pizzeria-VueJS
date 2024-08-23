<script setup>

import { useCartStore } from '@/store/carteStore';

const cartStore = useCartStore();

</script>


<template>
  <div>
    <h2>Votre Panier</h2>
    <div v-if="cartStore.cart.length === 0">Votre panier est vide</div>
    <div v-else>
      <div v-for="pizza in cartStore.cart" :key="pizza.id" class="cart-item">
        <h3>{{ pizza.name }} ({{ pizza.quantity }})</h3>
        <p>{{ pizza.price }}€</p>
      </div>
      <div class="total">
        Total: {{ cartStore.getTotal() }}€
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div>
    <h2>Votre Panier</h2>
    <div v-if="cartStore.length === 0">Votre panier est vide</div>
    <div v-else>
      <div v-for="pizza in cartStore" :key="pizza.id" class="cart-item">
        <h3>{{ pizza.name }} ({{ pizza.quantity }})</h3>
        <p>{{ pizza.price }}€</p>
      </div>
      <div class="total">
        Total: {{ cartStore.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0).toFixed(2) }}€
      </div>
    </div>
  </div>
</template> -->

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total {
  margin-top: 20px;
  font-weight: bold;
}
</style>
