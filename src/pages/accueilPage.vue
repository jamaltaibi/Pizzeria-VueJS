<script setup>

import PizzaList from '@/components/pizzaList.vue';

</script>

<template>
  <h1>Les Pizzas</h1>
  <PizzaList/>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
