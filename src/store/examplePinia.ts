// Vue Core
import { ref, reactive } from "vue";
import { defineStore } from "pinia";

// Modules
import * as staticData from "@/content/example.json";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const examples = reactive({ counter: 0, textfield: "Test" });
  const colorMode = ref({});
  const language = ref({});
  const links = ref(staticData.links);
  const navi = ref(staticData.navi);

  // Methods
  const increment = () => {
    examples.counter++;
  };

  const decrement = () => {
    examples.counter--;
  };

  return { examples, colorMode, language, links, navi, increment, decrement };
});

// Export
export { useExamplePiniaStore };
