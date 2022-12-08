// Vue Core
import { ref, reactive } from "vue";
import { defineStore } from "pinia";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const examples = reactive({ counter: 0, textfield: "Test" });
  const colorMode = ref({});
  const copyright = ref([
    { id: 1, type: "homepage", text: "Demetory", url: "https://demetrey.ru/" },
    { id: 2, type: "repo", text: "Github", url: "https://github.com/Demetory/dim-nuxt-content-blog" },
  ]);

  // Methods
  const increment = () => {
    examples.counter++;
  };

  const decrement = () => {
    examples.counter--;
  };

  const getCopyrightUrl = (value: string) => {
    return copyright.value.find((link) => link["type"] === value)?.url;
  };

  return { examples, copyright, colorMode, increment, decrement, getCopyrightUrl };
});

// Export
export { useExamplePiniaStore };
