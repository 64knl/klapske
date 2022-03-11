<template>
  <input ref="inputRef" type="text" />
</template>

<script lang="ts">
import { useCurrencyInput } from "vue-currency-input";
import { defineComponent } from "vue";
export default defineComponent({
  name: "CurrencyInput",
  props: {
    modelValue: Number, // Vue 2: value
  },
  setup(props) {
    const { inputRef } = useCurrencyInput({
      locale: "nl-NL",
      currency: "EUR",
      // currencyDisplay: "symbol",
      hideCurrencySymbolOnFocus: true,
      hideGroupingSeparatorOnFocus: true,
      hideNegligibleDecimalDigitsOnFocus: true,
      autoDecimalDigits: false,
      autoSign: true,
      useGrouping: true,
      accountingSign: false,
    });

    return { inputRef };
  },
});
</script>
