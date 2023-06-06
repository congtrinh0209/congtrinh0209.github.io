import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import $ from 'jquery'
export const authorizationStore = defineStore('authorization', {
  state: () => ({
    baseURL: import.meta.env.VITE_APP_PATH_API
  }),
  getters: {
    userInfo: (state) => state.userInfo,
  },
  actions: {
    async login (filter) {
      let settings = {
        "url": `${this.baseURL}/flex/oauth2/token`,
        "method": "POST",
        "headers": {
          'Authorization': 'Basic ZmxleDpzc28=',
          'secret': 'f5gDd1JLB0vq6VVBvzEbltq6iVuaddvk',
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        "data": filter.data
      };
      
      let data = await $.ajax(settings)
      return data
    },
    async getThongTinUserDangNhap (filter) {
      let settings = {
        method: 'get',
        url: `${this.baseURL}/v1/datasharing/canbo/token`,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json',
          'Authorization': filter.token
        },
        data: {},
        params: {}
      }
      let data = await $.ajax(settings)
      return data
    },
  },
})
