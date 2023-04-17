import { defineStore } from 'pinia';

interface Accessor {
  fsUser: string;
  fsUserName: string;
}

interface UserInfo {
  fsUserName: string;
  age: number;
}

export const AccessorStores = defineStore('accessor', {
  state: (): Accessor => {
    return {
      fsUser: 'Natchayapat Intaramat',
      fsUserName: 'ncit2',
    };
  },
  getters: {
    getString: (state): string => state.toString(),
    getUser: (state) => state.fsUser,
    getUserName: (state) => state.fsUserName,
  },
  actions: {
    increment() {
      // this.count++
    },
  },
});

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // for initially empty lists
      userList: [] as UserInfo[],
      // for data that is not yet loaded
      user: null as UserInfo | null,
    };
  },
});
