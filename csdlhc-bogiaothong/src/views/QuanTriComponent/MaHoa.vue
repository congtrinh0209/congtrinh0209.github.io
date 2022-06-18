<template>
  <v-container
    id="mahoa-page"
    class="px-0 pt-0 mt-2"
    fluid
    tag="section"
  >
    <v-layout wrap>
      <v-flex xs12 class="px-2 mb-3">
        <label>Chọn kiểu mã hóa <span class="red--text">(*)</span></label>
        <v-autocomplete
          class="input-form"
          dense
          solo
          placeholder="Kiểu mã hóa"
          v-model="typeFilter"
          :items="itemsType"
          item-text="name"
          item-value="value"
          hide-details="auto"
          height="32px"
        ></v-autocomplete>
      </v-flex>
      <v-flex xs12 md6 class="px-2">
        <label>Key <span class="red--text">(*)</span></label>
        <v-textarea
          class="flex input-form"
          v-model="keyInput"
          solo
          dense
          hide-details="auto"
          rows="5"
          clearable
        ></v-textarea>
      </v-flex>
      <v-flex xs12 md6 class="px-2">
        <label>Value <span class="red--text">(*)</span></label>
        <v-textarea
          class="flex input-form"
          v-model="valueInput"
          solo
          dense
          hide-details="auto"
          rows="5"
          clearable
        ></v-textarea>
      </v-flex>
      <v-flex xs12 class="px-2 my-4">
        <v-btn class="mr-3" color="primary" :loading="loading" :disabled="loading" @click="encryptText">
          <span>Encrypt</span>
        </v-btn>
        <v-btn class="mr-2" outlined color="primary" :loading="loading" :disabled="loading" @click="decryptText">
          <span>Decrypt</span>
        </v-btn>
      </v-flex>
      <v-flex xs12 class="px-2">
        <label>Kết quả</label>
        <v-textarea
          class="flex input-form"
          v-model="resultValue"
          solo
          dense
          hide-details="auto"
          rows="5"
          clearable
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import toastr from 'toastr'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  export default {
    name: 'MaHoa',
    components: {
    },
    data: () => ({
      resultValue: '',
      keyInput: '',
      valueInput: '',
      typeFilter: '',
      itemsType: [
        {name: 'Basic', value: 'standard'},
        {name: 'Strong Text', value: 'secret'}
      ],
      loading: false,
      validFormAdd: false,
      loadingData: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ]
    }),
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 4)
    },
    computed: {
    },
    watch: {
      typeFilter (val) {
        let vm = this
        vm.resultValue = ''
      }
    },
    methods: {
      encryptText () {
        let vm = this
        if (!vm.typeFilter || !vm.keyInput.trim() || !vm.valueInput.trim()) {
          return
        }
        vm.resultValue = ''
        if (vm.typeFilter.value == 'secret') {
          let config = {
            method: 'get',
            url: 'http://119.17.200.66:8273/flex/oauth2/secret/encrypt',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            },
            data: {},
            params: {
              key: vm.keyInput,
              text: vm.valueInput
            }
          }
          vm.loading = true
          axios(config).then(function (response) {
            vm.loading = false
            let serializable = response.data
            vm.resultValue = serializable.encrypt
          }).catch(function (error) {
            vm.loading = false
            toastr.remove()
            toastr.error('Mã hóa thất bại')
          })
        } else {
          let config = {
            method: 'post',
            url: 'http://119.17.200.66:8273/flex/oauth2/secret/standard/encrypt',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(
              {
                key: vm.keyInput,
                text: vm.valueInput
              }
            ),
            params: {
            }
          }
          vm.loading = true
          axios(config).then(function (response) {
            vm.loading = false
            let serializable = response.data
            vm.resultValue = serializable.encrypt
          }).catch(function (error) {
            vm.loading = false
            toastr.remove()
            toastr.error('Mã hóa thất bại')
          })
        }
      },
      decryptText () {
        let vm = this
        if (!vm.typeFilter || !vm.keyInput.trim() || !vm.valueInput.trim()) {
          return
        }
        vm.resultValue = ''
        if (vm.typeFilter.value == 'secret') {
          let config = {
            method: 'get',
            url: 'http://119.17.200.66:8273/flex/oauth2/secret/decrypt',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            },
            data: {},
            params: {
              key: vm.keyInput,
              secret: vm.valueInput
            }
          }
          vm.loading = true
          axios(config).then(function (response) {
            vm.loading = false
            let serializable = response.data
            vm.resultValue = serializable.decrypt
          }).catch(function (error) {
            vm.loading = false
            toastr.remove()
            toastr.error('Giải mã thất bại')
          })
        } else {
          let config = {
            method: 'post',
            url: 'http://119.17.200.66:8273/flex/oauth2/secret/standard/decrypt',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(
              {
                key: vm.keyInput,
                secret: vm.valueInput
              }
            ),
            params: {
            }
          }
          vm.loading = true
          axios(config).then(function (response) {
            vm.loading = false
            let serializable = response.data
            vm.resultValue = serializable.decrypt
          }).catch(function (error) {
            vm.loading = false
            toastr.remove()
            toastr.error('Giải mã thất bại')
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  .CodeMirror {
    height: 450px;
    background: #ebebeb;
  }
  .CodeMirror-gutters {
    left: 0 !important;
  }
  #editorContent {
    height: 450px;
  }
  #danhmuc-page .v-list {
    background: transparent !important;
  }
  #danhmuc-page .v-list-item {
    padding: 0 8px !important
  }
  #danhmuc-page .v-list-item--dense .v-list-item__icon, .v-list--dense .v-list-item .v-list-item__icon {
    height: 20px !important;
  }
  .danh-muc-1 {
    width: 235px;
    max-width: 235px;
    padding-right: 15px;
    /* border-bottom: 1px solid #DDDDDD; */
  }
  .danh-muc-1 .v-list {
    padding-top: 0px;
  }
  .danh-muc-2 {
    width: calc(100% - 235px);
    border: 1px solid #DDDDDD;
  }
  .nav-content {
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 7px;
  }

  .row-header {
    background-color: #e1e2e1;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
  }
  .row-header .background-triangle-big {
      white-space: nowrap;
      min-width: 135px;
  }
  body .background-triangle-big, body .background-triangle-small {
      background-color: $base-color !important;
  }
  .background-triangle-big, .background-triangle-small {
      background-color: $base-color;
      display: inline-block;
      text-align: left;
      color: #fff;
      position: relative;
      margin-right: 20px;
      text-transform: uppercase;
      padding: 9px 15px;
      width: auto;
      cursor: pointer;
  }
  body .background-triangle-big:before, body .background-triangle-small:before {
      border-top-color: $base-color !important;
  }

  .background-triangle-big:before {
      content: "";
      position: absolute;
      transform: rotate(
  45deg);
      right: -4px;
      top: 4px;
      border-top: 26px solid $base-color;
      border-left: 26px solid transparent;
      border-bottom: 25px solid transparent;
  }
  .background-triangle-big:before {
      content: "";
      position: absolute;
      transform: rotate(
  45deg);
      right: -4px;
      top: 4px;
      border-top: 26px solid $base-color;
      border-left: 26px solid transparent;
      border-bottom: 25px solid transparent;
  }
  .wrap-content-2 {
    padding: 12px
  }
  
  #table-danhmuc td{
    height: 42px !important;
  }
  .text-label {
    width: 150px;
    max-width: 150px;
  }
</style>
