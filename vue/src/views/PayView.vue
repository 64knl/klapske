<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import CurrencyInput from "@/components/CurrencyInput.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PayView",
  components: { CurrencyInput, HelloWorld },
  data: () => ({ amountRequested: 0.0 }),
  mounted() {
    if (this.$route.params.details[0] !== undefined) {
      this.amountRequested = parseInt(this.$route.params.details[0]);
    } else {
      this.amountRequested = 0;
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
    v-if="amountRequested"
    v-model="amountRequested"
    class="euro"
  />

  <nav>
    <a
      :href="`https://bunq.me/cocaine/${Intl.NumberFormat('us-EN', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
        .format(amountRequested)
        .replace(',', '')}/klapske`"
      class="button"
      target="_blank"
      >Betaal direct</a
    >
    of
    <a
      :href="`https://tikkie.me/pay/Giro555/xmtUk1Zp9iVbkAyFp2Mxzg/${Intl.NumberFormat(
        'us-EN',
        {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        }
      )
        .format(amountRequested)
        .replace(',', '')}`"
      class="button goodbutton"
      target="_blank"
      >Doneer aan giro 555</a
    >
  </nav>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.button {
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 0 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: white;
}

.goodbutton {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
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
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
