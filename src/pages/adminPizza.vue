<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const pizzas = ref([]);

const fetchPizzas = async () => {
  //const API = process.env.VUE_APP_API_URL;
  try {
    const response = await axios.get('http://localhost:3000/pizzas');
    pizzas.value = response.data;
  } catch (error) {
    console.error("Failed to fetch pizzas", error);
  }
};

const deletePizza = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/pizzas/${id}`);
    pizzas.value = pizzas.value.filter((pizza) => pizza.id !== id);
  } catch (error) {
    console.error("Failed to delete pizza", error);
  }
};

onMounted(fetchPizzas);
</script>

<template>
  <div>
    <h2>Liste des Pizzas</h2>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Base</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pizza in pizzas" :key="pizza.id">
          <td>{{ pizza.name }}</td>
          <td>{{ pizza.price }}€</td>
          <td>{{ pizza.base }}</td>
          <td>
            <button @click="deletePizza(pizza.id)">Supprimer</button>
            <RouterLink :to="`/admin/edit-pizza/${pizza.id}`"
              >Modifier</RouterLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
table {
  width: 80%;
  border-collapse: collapse;
  background-color: cadetblue;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

button {
  margin-right: 10px;
}
</style>
