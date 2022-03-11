<script lang="ts">
export default {
  name: "App",
  components: {},
  data: () => ({ value: 1234 }),
  copmuted: {
    bef() {
      return 33;
    },
  },
};
</script>

<template>
  <header>
    <a href="/"><img alt="Klapske" class="logo" src="@/assets/logo.svg" /></a>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

header {
  place-items: center;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.logo {
  margin: 0 auto;
  width: 20rem;
  max-width: 70%;
}
</style>
