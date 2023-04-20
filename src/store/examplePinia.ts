// Core
import { ref } from "vue";
import { defineStore } from "pinia";
// Modules
import { links } from "@/assets/data/links";
// Types
import { ILink } from "@/types/ILink";
import { IUser } from "@/types/IUser";

// Store
const useExamplePiniaStore = defineStore("examplePiniaStore", () => {
  // State
  const count = ref(0);
  const errorMsg = ref<Object | null>();
  const input = ref("Test");
  const loading = ref(false);
  const userInfo = ref<IUser | null>();
  const authenticated = ref(false);

  // Methods
  const doIncrement = () => {
    count.value++;
  };

  const doDecrement = () => {
    count.value--;
  };

  const getLink = (value: string) => {
    return links.find((link) => link.type === value) as ILink;
  };

  const getUserInfo = async () => {
    loading.value = true;
    const { data, pending, error } = await useFetch(import.meta.env.VITE_API_URL as string);

    loading.value = pending.value;

    if (data.value) {
      userInfo.value = data.value as IUser;
    }
    if (error.value) {
      errorMsg.value = error.value;
    }
  };

  const clearUserInfo = () => {
    userInfo.value = null;
    loading.value = false;
    errorMsg.value = null;
  };

  // Return
  return {
    count,
    errorMsg,
    input,
    links,
    loading,
    userInfo,
    authenticated,
    doIncrement,
    doDecrement,
    getLink,
    getUserInfo,
    clearUserInfo,
  };
});

// Export
export { useExamplePiniaStore };
