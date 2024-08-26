import { createRouter, createWebHistory } from "vue-router";

import Accueil from "@/pages/pizzaList.vue";
import AdminPizzas from "@/pages/adminPizza.vue";
import CreatePizza from "@/pages/createPizza.vue";
import EditPizza from "@/pages/upDatePizza.vue";

const routes = [
  { path: "/", component: Accueil },
  { path: "/admin", component: AdminPizzas },
  { path: "/admin/create-pizza", component: CreatePizza },
  { path: "/admin/edit-pizza/:id", component: EditPizza },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
