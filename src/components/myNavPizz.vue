<script setup>
import PanierPage from "@/pages/panierPage.vue";
</script>

<template>
  <h1>M2I Pizza</h1>
  <nav>
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/admin">Admin</RouterLink>
    <RouterLink to="/admin/create-pizza">Créer Pizza</RouterLink>
    <PanierPage />
  </nav>
</template>

<style scoped>
h1 {
  margin: O;
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
