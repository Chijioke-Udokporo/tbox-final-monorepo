interface AppStore {
  token: string;
}

export const useAppStore = defineStore("app-store", {
  state: (): AppStore => ({
    token: "",
  }),

  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },

  persist: {
    storage: sessionStorage,
  },
});
