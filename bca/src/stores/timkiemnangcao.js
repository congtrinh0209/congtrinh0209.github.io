import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import $ from 'jquery'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
export const timKiemStore = defineStore('timkiemnangcao', {
  state: () => ({
    baseURL: import.meta.env.VITE_APP_PATH_API
  }),
  getters: {
    userInfo: (state) => state.userInfo,
  },
  actions: {
    async loadDataSource (filter) {
      let apiGet = filter.api
			if (filter.api.indexOf('http') < 0) {
				apiGet = this.baseURL + filter.api
			}
			let settings = {
				"url": apiGet,
				"method": "GET",
				"headers": {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + cookies.get('Token')
				},
				"data": {}
			};
			
			let data = await $.ajax(settings)
			return data
    }
  },
})
