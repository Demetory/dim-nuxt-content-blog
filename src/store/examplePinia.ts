// Vue Core
import { ref } from "vue";
import { defineStore } from "pinia";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const count = ref(0);
  const input = ref("Test");
  const copyright = ref([
    { id: 1, type: "homepage", text: "Demetory", url: "https://demetrey.ru/" },
    { id: 2, type: "repo", text: "Github", url: "https://github.com/Demetory/dim-nuxt-content-blog" },
  ]);

  // Methods
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const getCopyrightUrl = (key: string, value: string) => {
    // @ts-expect-error: wrong type info
    const element: any = copyright.value.find((link) => link[key] === value);
    const result: string = element ? element.url : "";
    return result;
  };

  return { count, input, copyright, increment, decrement, getCopyrightUrl };
});

// Export
export { useExamplePiniaStore };
