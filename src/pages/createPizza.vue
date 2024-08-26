<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const pizza = ref({
  name: '',
  image: '',
  price: '',
  base: '',
  ingredients: '',
  bestSeller: false,
});

const router = useRouter();

const createPizza = async () => {
  try {
    await axios.post('http://localhost:3000/pizzas', {
      ...pizza.value,
      ingredients: pizza.value.ingredients.split(','),
    });
    router.push('/admin');
  } catch (error) {
    console.error('Failed to create pizza', error);
  }
};
</script>

<template>
  <div>
    <h2>Créer une Nouvelle Pizza</h2>
    <form @submit.prevent="createPizza">
      <div>
        <label>Nom : </label>
        <input v-model="pizza.name" required />
      </div>
      <div>
        <label>Image URL : </label>
        <input v-model="pizza.image" required />
      </div>
      <div>
        <label>Prix : </label>
        <input v-model="pizza.price" type="number" step="0.01" required />
      </div>
      <div>
        <label>Base : </label>
        <input v-model="pizza.base" required />
      </div>
      <div>
        <label>Ingrédients (séparés par des virgules) : </label>
        <input v-model="pizza.ingredients" required />
      </div>
      <div>
        <label>Best Seller : </label>
        <input v-model="pizza.bestSeller" type="checkbox" />
      </div>
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: grid;
  grid-gap: 10px;
  max-width: 400px;
}

label {
  margin-bottom: 5px;
}

input, button {
  padding: 8px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
