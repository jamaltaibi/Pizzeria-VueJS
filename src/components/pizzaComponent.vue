<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  pizza: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["add-to-cart"]);

const addToCart = () => {
  emit("add-to-cart", props.pizza);
};
</script>

<template>
  <div class="pizza">
    <h2>{{ pizza.name }}</h2>
    <img :src="pizza.image" alt="Image de {{ pizza.name }}" />
    <p>Base: {{ pizza.base }}</p>
    <ul>
      <li v-for="ingredient in pizza.ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <p>Prix: {{ pizza.price }}€</p>
    <button @click="addToCart">Ajouter au panier</button>
    <p v-if="pizza.bestSeller">Best Seller!</p>
  </div>
</template>

<style scoped>

img {
  max-width: 30%;
  height: auto;
}
</style>