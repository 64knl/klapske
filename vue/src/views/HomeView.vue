<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
<style scoped>
main {
  padding: 2rem;
}
@media (min-width: 1024px) {
  main {
    padding: 0;
  }
}
</style>
