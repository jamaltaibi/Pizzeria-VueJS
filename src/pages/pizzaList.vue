<script setup>
import { ref, computed, onMounted } from "vue";
import Pizza from "@/components/pizzaComponent.vue";
import { useCartStore } from "@/store/carteStore";
import axios from "axios";

const cartStore = useCartStore();

// const pizzasDatas = [
//   {
//     id: 1,
//     name: "Pizza Margherita",
//     image: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
//     price: 5.99,
//     base: "tomato",
//     ingredients: ["tomato", "mozzarella", "basil"],
//     bestSeller: true,
//   },
//   {
//     id: 2,
//     name: "Pizza Marinara",
//     image: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
//     price: 6.99,
//     base: "tomato",
//     ingredients: ["tomato", "garlic", "oregano"],
//     bestSeller: false,
//   },
//   {
//     id: 3,
//     name: "Pizza Quattro Stagioni",
//     image: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
//     price: 7.99,
//     base: "tomate",
//     ingredients: [
//       "tomato",
//       "mozzarella",
//       "mushrooms",
//       "artichokes",
//       "olives",
//       "anchovies",
//     ],
//     bestSeller: false,
//   },
//   {
//     id: 4,
//     name: "Pizza 4 Formaggi",
//     image: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
//     price: 8.99,
//     base: "creme",
//     ingredients: ["creme", "mozzarella", "gorgonzola", "parmesan", "pecorino"],
//     bestSeller: true,
//   },
//   {
//     id: 5,
//     name: "Pizza Salmon",
//     image: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
//     price: 9.99,
//     base: "creme",
//     ingredients: ["creme", "mozzarella", "smoked salmon", "rocket", "lemon"],
//     bestSeller: true,
//   },
// ];

//const pizzas = ref(pizzasDatas);

const pizzas = ref([]);

const baseFilter = ref("");
const priceFilter = ref("");
const bestSeller = ref("");

const fetchPizzas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/pizzas");
    pizzas.value = response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des pizzas:", error);
  }
};

onMounted(() => {
  fetchPizzas();
});

const filteredPizzas = computed(() => {
  let filtered = pizzas.value;

  if (baseFilter.value) {
    filtered = filtered.filter((pizza) => pizza.base === baseFilter.value);
  }

  if (priceFilter.value === "asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (priceFilter.value === "desc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  if (bestSeller.value === "true") {
    filtered = filtered.filter((pizza) => pizza.bestSeller === true);
  } else if (bestSeller.value === "false") {
    filtered = filtered.filter((pizza) => pizza.bestSeller === false);
  }

  return filtered;
});

const addToCart = (pizza) => {
  cartStore.addToCart(pizza);
};
</script>

<template>
  <h1>Les Pizzas</h1>
  <div class="filtre">
    <div>
      <label for="base-filter">Filtrer par base : </label>
      <select v-model="baseFilter" id="base-filter">
        <option value="">Tous</option>
        <option value="creme">Crème</option>
        <option value="tomato">Tomate</option>
      </select>
    </div>
    <div>
      <label for="price-filter">Trier par prix : </label>
      <select v-model="priceFilter" id="price-filter">
        <option value="">Aucun tri</option>
        <option value="asc">Prix croissant</option>
        <option value="desc">Prix décroissant</option>
      </select>
    </div>
    <div>
      <label for="best-seller-filter">Filtrer par Best Seller : </label>
      <select v-model="bestSeller" id="best-seller-filter">
        <option value="">Tous</option>
        <option value="true">Best Sellers</option>
        <option value="false">Non Best Sellers</option>
      </select>
    </div>
  </div>
  <div class="pizzaFiltre">
    <Pizza
      v-for="pizza in filteredPizzas"
      :key="pizza.id"
      :pizza="pizza"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<style scoped>
.filtre {
  display: flex;
  justify-content: space-around;
}
.pizzaFiltre{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-items: center;
}
.pizza {
  width: 350px;
  background-color: blanchedalmond;
  display: flex;
  flex-direction:column;
  border: 1px solid #ccc;
  align-items: center;
  justify-items: center;
}
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
