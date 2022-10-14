import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexTab: 0,
    apiSso: process.env.VUE_APP_PATH_API_SSO,
    secretLogin: 'f5gDd1JLB0vq6VVBvzEbltq6iVuaddvk',
    // secretLogin: 'GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ',
    drawer: false,
    breakpointName: 'lg',
    isShowConfirm: false,
    dialogConfirm: {
      auth: false,
      title: '',
      message: '',
      button: {},
      callback: () => {}
    },
    formData: '',
    formThongKe: ''
  },
  getters: {
    getIndexTab: (state) => state.indexTab,
    getIsSigned: (state) => {
      return state.isSigned
    },
    getIsSigned: (state) => {
      return state.isSigned
    },
    getBreakpointName: (state) => state.breakpointName,
    getIsShowConfirm: (state) => {
      return state.isShowConfirm
    },
    getDialogConfirm: (state) => {
      return state.dialogConfirm
    },
    getFormData: (state) => {
      return state.formData
    },
    getFormThongKe: (state) => {
      return state.formThongKe
    },
  },
  mutations: {
    SET_INDEXTAB(state, indexTab) {
      state.indexTab = indexTab
    },
    SET_ISSIGNED (state, payload) {
      state.isSigned = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_BREAKPOINTNAME(state, breakpointName) {
      state.breakpointName = breakpointName
    },
    SET_SHOWCONFIRM (state, payload) {
      state.isShowConfirm = payload
    },
    SET_CONFIG_CONFIRM_DIALOG (state, payload) {
      state.dialogConfirm = payload
    },
    SET_FORM_DATA (state, payload) {
      state.formData = payload
    },
    SET_FORM_THONGKE (state, payload) {
      state.formThongKe = payload
    },
  },
  actions: {
    getThongKeHoSo ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: state.apiSso + '/o/rest/v2/statistics/dossiers/todo',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data: {},
          params: filter.data
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    collectionCreate ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/' + filter.collectionName,
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    collectionUpdate ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/' + filter.collectionName + '/' + filter.id,
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    collectionDelete ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'delete',
          url: '/v1/datasharing/' + filter.collectionName + '/' + filter.id,
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data: {}
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    collectionFilter ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: '/v1/datasharing/' + filter.collectionName + '/filter',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data: {},
          params: filter.data
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    collectionDetail ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: '/v1/datasharing/' + filter.collectionName + '/' + filter.id,
          data: {},
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          }
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    collectionDetailSearch ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: '/v1/datasharing/' + filter.collectionName + '/' + filter.keySearch + '/' + filter.id,
          data: {},
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          }
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    getThongKe ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/thanhphanbaocao/thongke',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    login ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          "url": state.apiSso + '/flex/oauth2/token',
          "method": "POST",
          "headers": {
            'Authorization': 'Basic ZmxleDpzc28=',
            'secret': state.secretLogin,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          "data": filter.data
        };
        
        $.ajax(settings).done(function (response) {
          let serializable = response
          resolve(serializable)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    loginKeyCloak ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          "url": state.apiSso + '/flex/oauth2/authorization_endpoint?redirect_uri=' + filter.uri,
          "method": "GET",
          "headers": {
            'Secret': state.secretLogin,
            'Content-Type': 'application/json'
          },
        };
        
        $.ajax(settings).done(function (response) {
          resolve(response)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    logoutKeyCloak ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          "url": state.apiSso + '/flex/oauth2/logout_endpoint',
          "method": "GET",
          "headers": {
            'Content-Type': 'application/json'
          },
        };
        
        $.ajax(settings).done(function (response) {
          resolve(response)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    getTokenKeyCloak ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          "url": state.apiSso + '/flex/oauth2/token',
          "method": "POST",
          "headers": {
            'Authorization': 'Basic ZmxleDpzc28=',
            'secret': state.secretLogin,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          "data": {
            "code": filter.code,
            "redirect_uri": filter.redirect_uri
          }
        };
        
        $.ajax(settings).done(function (response) {
          let serializable = response
          resolve(serializable)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    getRefreshTokenKeyCloak ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          "url": state.apiSso + '/flex/oauth2/refreshtoken',
          "method": "POST",
          "headers": {
            'Authorization': 'Basic ZmxleDpzc28=',
            'secret': state.secretLogin,
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          "data": {
            "refresh_token": filter.code,
            "redirect_uri": filter.redirect_uri
          }
        };
        
        $.ajax(settings).done(function (response) {
          let serializable = response
          resolve(serializable)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    getThongTinUserDangNhap ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          method: 'get',
          url: state.apiSso + '/v1/datasharing/canbo/token',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': filter.token
          },
          data: {},
          params: {}
        }
        $.ajax(settings).done(function (response) {
          let serializable = response
          resolve(serializable)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    getEmployee ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          method: 'get',
          url: state.apiSso + "/o/rest/v2/employees/" + filter.email + '/profile',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': filter.token
          },
          data: {},
          params: {}
        }
        $.ajax(settings).done(function (response) {
          let serializable = response
          resolve(serializable)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    createAccountCanBo ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/' + filter.data.type,
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    changePass ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/resetpwd',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    changeAcc ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/' + filter.type + '/' + filter.maDinhDanh + '/tendinhdanh',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    activeCaNhan ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/'+ filter.data.type + '/active',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    blockCaNhan ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/' + filter.data.type + '/lock',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    unBlockCaNhan ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/' + filter.data.type + '/unlock',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    restoreCaNhan ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/' + filter.data.type + '/restore',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    deleteCaNhan ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'delete',
          url: '/v1/datasharing/idp/account/' + filter.data.type + '/delete',
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data : dataPost
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error.response)
        })
      })
    },
    // getRefreshTokenKeyCloak ({commit, state}, filter) {
    //   return new Promise((resolve, reject) => {
    //     let settings = {
    //       "url": state.apiSso + '/flex/oauth2/refreshtoken',
    //       "method": "POST",
    //       "headers": {
    //         'Authorization': 'Basic ZmxleDpzc28=',
    //         'secret': state.secretLogin,
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       },
    //       "data": {
    //         "refresh_token": filter.code,
    //         "redirect_uri": filter.redirect_uri
    //       }
    //     };
        
    //     $.ajax(settings).done(function (response) {
    //       let serializable = response
    //       resolve(serializable)
    //     }).fail(function (response) {
    //       reject(response)
    //     })
    //   })
    // },
    loadDataSource ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let apiGet = filter.api
        if (filter.api.indexOf('http') < 0) {
          apiGet = state.apiSso + filter.api
        }
        let settings = {
          "url": apiGet,
          "method": "GET",
          "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Vue.$cookies.get('Token')
          },
          "data": {
          }
        };
        
        $.ajax(settings).done(function (response) {
          let serializable = response
          resolve(serializable)
        }).fail(function (response) {
          reject(response)
        })
      })
    },
    downloadFile ({ commit, state }, filter) {
      return new Promise((resolve, reject) => {
        let param = {
          headers: {
            'Authorization': 'Bearer ' + Vue.$cookies.get('Token')
          },
          responseType: 'blob'
        }
        axios.get('/v1/datasharing/thanhphanbaocao/downloadFile/' + filter.id, param).then(function (response) {
          if (response.data) {
            var a = document.createElement('a')
            document.body.appendChild(a)
            a.style = 'display: none'
            var urlFile = window.URL.createObjectURL(response.data)
            a.href = urlFile
            a.download = filter.name
            a.click()
            resolve('success')
          } else {
            resolve('pending')
          }
        }).catch(function (xhr) {
          console.log(xhr)
        })
        // 
      })
    },
    deleteFile ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'delete',
          url: '/v1/datasharing/thanhphanbaocao/' + filter.idThanhPhan + '/attachment/' + filter.idFile,
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          data: {}
        }
        axios(config).then(function (response) {
          let serializable = response.data
          resolve(serializable)
        }).catch(function (error) {
          reject(error)
        })
      })
    },
  }
})
