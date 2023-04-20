// Modules
import { useExamplePiniaStore } from "@/store/examplePinia";

export default defineNuxtRouteMiddleware(() => {
  const examplePiniaStore = useExamplePiniaStore();

  if (examplePiniaStore.authenticated === false) {
    return navigateTo("/login", { redirectCode: 401 });
  }
});
