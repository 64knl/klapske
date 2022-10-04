<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import CurrencyInput from "@/components/CurrencyInput.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PayView",
  components: { CurrencyInput, HelloWorld },
  data: () => ({ amountRequested: -1 }),
  mounted() {
    if (this.$route.params.details[0] !== undefined) {
      this.amountRequested = parseFloat(this.$route.params.details[0]);
    } else {
      this.amountRequested = 0.0;
    }
  },
});
</script>

<template>
  <HelloWorld
    :msg="`Amai... ik krijg nog ${Intl.NumberFormat('nl-NL', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(amountRequested * 40.3399)} franken ${
      $route.params.details[1] ? 'voor ' + $route.params.details[1] + ' ' : ''
    } van u!`"
  />

  <currency-input
    v-if="amountRequested !== -1"
    v-model="amountRequested"
    class="euro"
  />

  <nav>
    <a
      :href="`https://bunq.me/cocaine/${Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
        .format(amountRequested)
        .replace(',', '')}/klapske`"
      class="button"
      target="_blank"
      >Betaal direct</a
    >
  </nav>
  <div class="bc-link">
    <a
      :href="`https://bunq.me/cocaine/${Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
        .format(amountRequested)
        .replace(',', '')}/klapske/bancontact`"
      v-if="amountRequested >= 5"
    >
      <img src="@/assets/bancontact.svg" />
    </a>
  </div>
</template>

<style>
@import "@/assets/base.css";

.bc-link {
  text-align: center;
  width: 100%;
  display: block;
  padding-top: 1.2rem;
}
.bc-link a {
  display: inline-block;
  max-width: 4rem;
  width: 100%;
}

.bc-link a img {
  width: 100%;
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

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
