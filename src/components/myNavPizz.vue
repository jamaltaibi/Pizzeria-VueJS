<script setup>
import PanierPage from '@/pages/panierPage.vue';
</script>

<template>
   <nav>
    <h1>Ma Pizzeria</h1>
    <PanierPage/>
    <!-- <ul>
      <li>
        <RouterLink to="./">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="./panier">panier</RouterLink>
      </li>
    </ul> -->
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
}
</style>