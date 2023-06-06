import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import $ from 'jquery'
export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    count: 0,
    baseURL: import.meta.env.VITE_APP_PATH_API
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    async login(filter) {
      let settings = {
        "url": `${this.baseURL}/flex/oauth2/token`,
        "method": "POST",
        "headers": {
          'Authorization': 'Basic ZmxleDpzc28=',
          'secret': 'f5gDd1JLB0vq6VVBvzEbltq6iVuaddvk',
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        "data": filter
      };
      
      let data = await $.ajax(settings)
      return data
    },
  },
})
