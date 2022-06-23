import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexTab: 0,
    apiSso: process.env.VUE_APP_PATH_API_SSO,
    isShowConfirm: false,
    dialogConfirm: {
      auth: false,
      title: '',
      message: '',
      button: {},
      callback: () => {}
    }
  },
  getters: {
    getIndexTab: (state) => state.indexTab,
    getIsSigned: (state) => {
      return state.isSigned
    },
    getIsShowConfirm: (state) => {
      return state.isShowConfirm
    },
    getDialogConfirm: (state) => {
      return state.dialogConfirm
    },
  },
  mutations: {
    SET_INDEXTAB(state, indexTab) {
      state.indexTab = indexTab
    },
    SET_ISSIGNED (state, payload) {
      state.isSigned = payload
    },
    SET_SHOWCONFIRM (state, payload) {
      state.isShowConfirm = payload
    },
    SET_CONFIG_CONFIRM_DIALOG (state, payload) {
      state.dialogConfirm = payload
    },
  },
  actions: {
    collectionCreate ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/cmon/internal/' + filter.collectionName + '/1.0',
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
          url: '/cmon/internal/' + filter.collectionName + '/1.0/' + filter.id,
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
          url: '/cmon/internal/' + filter.collectionName + '/1.0/' + filter.id,
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
          url: '/cmon/internal/' + filter.collectionName + '/1.0',
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
          url: '/cmon/internal/' + filter.collectionName + '/1.0/' + filter.id,
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
    loginKeyCloak ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let settings = {
          "url": state.apiSso + '/flex/oauth2/authorization_endpoint?redirect_uri=' + filter.uri,
          "method": "GET",
          "headers": {
            'Secret': 'GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ',
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
            'secret': 'GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ',
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
            'secret': 'GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ',
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
    createAccountCaNhan ({commit, state}, filter) {
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
    importDanhMuc ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let param = {
          headers: {
          },
          params: {}
        }
        let dataPost = new FormData()
        dataPost.append('file', filter.file)
        axios.post(state.apiSso + '/v1/datasharing/importdata/' + filter.danhMuc, dataPost, param).then(function (response) {
          resolve(response)
        }).catch(xhr => {
          reject(xhr)
        })
      })
    },
    createBieuMau ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/admin/dynamiccontent',
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
    updateBieuMau ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/admin/dynamiccontent/' + filter.id,
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
    deleteBieuMau ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'delete',
          url: '/v1/admin/dynamiccontent/' + filter.id,
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
    getBieuMau ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: '/v1/admin/dynamiccontent/filter',
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
    getLogChangeStatusAcc ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: '/v1/admin/activity/filter',
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
    updateLog ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/v1/admin/activity/' + filter.uuid,
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
    printPhieu ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify({})
        let config = {
          method: 'post',
          url: '/v1/datasharing/idp/account/' + filter.madinhdanh + '/printcontent',
          headers: { 
            // 'Accept': 'application/json', 
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
    getDanhTinhDienThu ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          url: '/v1/datasharing/danhtinhdientu/filter',
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
    createChungThuSo ({commit, state}, filter) {
      return new Promise((resolve, reject) => {
        let dataPost = JSON.stringify(filter.data)
        let config = {
          method: 'post',
          url: '/certificate/sign/e-form',
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
  }
})
