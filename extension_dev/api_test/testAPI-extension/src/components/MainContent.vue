<template>
  <div class="container-content">
    <div class="bookmark_btn">
      <v-btn class="mx-0 my-0" icon color="#f19d27" title="Save request" @click="saveRequest">
        <v-icon color="white" size="18px">bookmark</v-icon>
      </v-btn>
    </div>
    <v-layout wrap>
      <v-flex style="width:100%">
        <v-layout wrap>
          <v-autocomplete
            class="mx-2 methods-select"
            box
            label="methods"
            :items="methods"
            v-model="method"
            item-value="value"
            item-text="name"
          ></v-autocomplete>
          <v-text-field
            class="mx-2"
            box
            label="url"
            v-model="urlRequest"
            clearable
          ></v-text-field>
        </v-layout>
      </v-flex>
      <v-flex class="text-xs-right">
        <div class="d-inline-block">
          <v-btn small color="#e67e22" class="white--text" @click="showRecord">
            Saved &nbsp;
            <v-icon size="18">save</v-icon>
          </v-btn>
          <v-menu right>
            <v-btn small slot="activator" color="#e67e22" class="white--text">Config &nbsp;
              <v-icon size="18">settings</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, index) in configItems" :key="index" @click="changeConfig(item, index)">
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn small color="blue" class="white--text" @click="sendRequest">
            Send &nbsp;
            <v-icon size="18">send</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex class="my-4 text-xs-center" style="width:100%" v-if="loading">
        <v-progress-circular
          class="mt-2"
          :size="50"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex class="wrap-config mt-2 py-2" v-if="showConfig">
        <div>
          <v-flex class="text-xs-right">
            <span class="text-bold white--text" v-if="configItem === 'HEADER'">Header Option</span>
            <span class="text-bold" v-if="configItem === 'PARAM'">Params Option</span>
            <span class="text-bold" v-if="configItem === 'DATA'">Data Option</span>
            <v-btn icon slot="activator" @click="addField()">
              <v-icon color="white" size="22px">add</v-icon>
            </v-btn>
          </v-flex>
          <v-data-table
            class="elevation-1 mx-2 mt-2"
            hide-actions
            hide-headers
            :items="itemsTable"
            no-data-text="No data"
          >
            <template slot="items" slot-scope="props">
              <td style="border-right: 1px solid #dedede;width:150px">
                <v-edit-dialog
                  lazy
                > {{ props.item.name }}
                  <v-text-field
                    slot="input"
                    v-model="props.item.name"
                    label="Edit"
                    single-line
                    clearable
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <td>
                <v-edit-dialog
                  lazy
                > {{ props.item.value }}
                  <v-text-field
                    slot="input"
                    v-model="props.item.value"
                    label="Edit"
                    single-line
                    clearable
                  ></v-text-field>
                </v-edit-dialog>
              </td>
              <v-btn style="position:absolute;right:5px" icon slot="activator" @click="deleteField(props.index)">
                <v-icon color="red" size="22px">clear</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </v-flex>
      <!-- response -->
      <v-flex class="mt-2 wrap-result" v-if="showResult">
        <div>
          <v-tabs slider-color="blue">
            <v-tab :key="1" ripple>
              Headers
            </v-tab>
            <v-tab :key="2" ripple>
              Preview
            </v-tab>
            <v-tab :key="3" ripple>
              Response
            </v-tab>
            <v-tab-item :key="1">
              <v-card flat>
                <json-viewer
                  :value="jsonHeaders"
                  :expand-depth=2
                  copyable
                  boxed>
                </json-viewer>
              </v-card>
            </v-tab-item>
            <v-tab-item :key="2">
              <v-card flat>
                <json-viewer
                  :value="jsonData"
                  :expand-depth=2
                  copyable
                  boxed>
                </json-viewer>
              </v-card>
            </v-tab-item>
            <v-tab-item :key="3">
              <div class="px-2 py-2 reponse-item">
                <span>{{JSON.stringify(jsonData)}}</span>
              </div>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-flex>
      <!--  -->
      <v-flex class="mt-2 wrap-history" v-if="showHistory">
        <v-layout class="py-1" wrap v-for="(item, index) in recordStorage" :key="index">
          <v-flex class="pt-2 cord-time">
            <span class="text-bold">{{dateTimeView(item.time)}}</span>
          </v-flex>
          <v-flex class="pt-2 cord-url">
            <v-tooltip top>
              <span slot="activator" style="color:blue">{{item.url}}</span>
              <span>{{item.url}}</span>
            </v-tooltip>
          </v-flex>
          <v-flex class="cord-action">
            <v-icon color="green" title="send" @click="sendCord(item)">play_arrow</v-icon>
            <v-icon class="ml-2" color="red" title="clear" @click="removeCord(item, index)">clear</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer)
export default {
  props: [],
  components: {
  },
  data: () => ({
    loading: false,
    methods: [
      {'name': 'GET', 'value': 'GET'},
      {'name': 'POST', 'value': 'POST'},
      {'name': 'PUT', 'value': 'PUT'},
      {'name': 'DELETE', 'value': 'DELETE'}
    ],
    method: 'GET',
    urlRequest: '',
    showHistory: false,
    showConfig: false,
    showResult: false,
    recordStorage: '',
    configItems: [
      {'name': 'HEADER', 'value': 'HEADER'},
      {'name': 'PARAM', 'value': 'PARAM'},
      {'name': 'DATA', 'value': 'DATA'}
    ],
    itemsTable: [],
    itemsTableSet: [],
    headersOption: [
      {'name': 'groupId', 'value': window.themeDisplay ? window.themeDisplay.getScopeGroupId() : ''},
      {'name': 'Token', 'value': window.Liferay ? window.Liferay.authToken : ''}
    ],
    paramOption: [],
    dataOption: [],
    configItem: '',
    editedIndex: '',
    editedItem: {'name': '', 'value': ''},
    jsonHeaders: '',
    jsonData: '',
    e1: true,
    e2: true,
    rules: {
      required: (value) => !!value || 'Trường dữ liệu bắt buộc',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Địa chỉ Email không hợp lệ'
      },
      telNo: (value) => {
        const pattern = /^(([0-9]{0,}))$/
        return pattern.test(value) || 'Gồm các ký tự 0-9'
      },
      passWord: (value) => {
        const pattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])([0-9a-zA-Z@$!%*#?&]{8,}))$/
        return pattern.test(value) || 'Ít nhất 8 ký tự và có chữ hoa, chữ thường, ký tự đặc biệt @$!%*#?&'
      }
    }
  }),
  computed: {
  },
  created () {
    var vm = this
    vm.$nextTick(function () {
    })
  },
  updated () {
    var vm = this
    vm.$nextTick(function () {
    })
  },
  watch: {
    itemsTable () {
      let vm = this
      if (vm.configItem === 'HEADER') {
        vm.headersOption = vm.itemsTable
      } else if (vm.configItem === 'PARAM') {
        vm.paramOption = vm.itemsTable
      } else if (vm.configItems === 'DATA') {
        vm.dataOption = vm.itemsTable
      }
    }
  },
  methods: {
    changeConfig (item, index) {
      let vm = this
      vm.configItem = item.name
      if (item.name === 'HEADER') {
        vm.itemsTable = vm.headersOption
      } else if (item.name === 'PARAM') {
        vm.itemsTable = vm.paramOption
      } else {
        vm.itemsTable = vm.dataOption
      }
      if (!vm.itemsTable || vm.itemsTable === []) {
        vm.itemsTable = [
          {'name': 'key', 'value': 'value'},
          {'name': 'key', 'value': 'value'},
          {'name': 'key', 'value': 'value'}
        ]
      }
      vm.showResult = false
      vm.showHistory = false
      vm.showConfig = true
    },
    sendRequest () {
      let vm = this
      vm.loading = true
      vm.showConfig = false
      vm.showResult = false
      vm.showHistory = false
      let headersOption = {}
      let paramsOption = {}
      let dataOption = new URLSearchParams()
      for (let key in vm.headersOption) {
        if (vm.headersOption[key].name && vm.headersOption[key].name !== 'key') {
          headersOption[vm.headersOption[key].name] = vm.headersOption[key].value
        }
      }
      for (let key in vm.paramOption) {
        if (vm.paramOption[key].name && vm.paramOption[key].name !== 'key') {
          paramsOption[vm.paramOption[key].name] = vm.paramOption[key].value
        }
      }
      for (let key in vm.dataOption) {
        if (vm.dataOption[key].name && vm.dataOption[key].name !== 'key') {
          dataOption.append(vm.dataOption[key].name, vm.dataOption[key].value)
        }
      }
      var url = vm.urlRequest
      var typeMethod = vm.method
      var headers = headersOption
      var paramGet = paramsOption
      var dataUpdate = dataOption
      if (url && typeMethod) {
          axios({
          method: typeMethod,
          url: url,
          headers: headers,
          params: paramGet,
          data: dataUpdate
        }).then(function (response) {
          if (response) {
            let headerContent = {
              'General': {
                'Request URL': response.config['url'],
                'Request Method': response.config['method'],
                'Status Code': response.status
              },
              'Response Header': {
                'cache-control': response.headers['cache-control'],
                'content-type': response.headers['content-type']
              },
              'Request Headers': response.config.headers
            }
            vm.jsonHeaders = headerContent
          }
          if (response.data) {
            vm.jsonData = response.data
          }
          setTimeout(function () {
            vm.loading = false
            vm.showConfig = false
            vm.showHistory = false
            vm.showResult = true
          }, 2000)
        }).catch(function (errorRes) {
          console.log('errorResponse', errorRes.response)
          let response = errorRes.response
          if (response) {
            let headerContent = {
              'General': {
                'Request URL': response.config['url'],
                'Request Method': response.config['method'],
                'Status Code': response.status
              },
              'Response Header': {
                'content-type': response.headers['content-type']
              },
              'Request Headers': response.config.headers
            }
            vm.jsonHeaders = headerContent
          }
          if (response.data) {
            vm.jsonData = response.data
          }
          setTimeout(function () {
            vm.loading = false
            vm.showConfig = false
            vm.showHistory = false
            vm.showResult = true
          }, 2000)
        })
      }
    },
    addField () {
      let vm = this
      let item = {'name': 'key', 'value': 'value'}
      vm.itemsTable.push(item)
    },
    deleteField (index) {
      let vm = this
      vm.itemsTable.splice(index, 1)
    },
    saveRequest () {
      let vm = this
      let lengthStorage = localStorage.length + 1
      let cordName = 'cord_' + (new Date()).getTime() + '_' + lengthStorage
      let cordData = {
        'url': vm.urlRequest,
        'method': vm.method,
        'headersOption': vm.headersOption,
        'paramOption': vm.paramOption,
        'dataOption': vm.dataOption,
        'time': (new Date()).getTime()
      }
      localStorage.setItem(cordName, JSON.stringify(cordData))
    },
    showRecord () {
      let vm = this
      vm.loading = false
      vm.showConfig = false
      vm.showResult = false
      vm.showHistory = true
      vm.recordStorage = []
      let lengthStorage = localStorage.length
      for (let i = 0; i < lengthStorage; i++) {
        if (localStorage.key(i).indexOf('cord_') >= 0) {
          vm.recordStorage.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    },
    sendCord (itemCord) {
      let vm = this
      vm.urlRequest = itemCord.url
      vm.method = itemCord.method
      vm.headersOption = itemCord.headersOption
      vm.paramOption = itemCord.paramOption
      vm.dataOption = itemCord.dataOption
      // setTimeout(function () {
      //   vm.sendRequest()
      // }, 1000)
    },
    removeCord (item, index) {
      let vm = this
      vm.recordStorage.splice(index, 1)
      localStorage.removeItem(localStorage.key(index))
    },
    dateTimeView (arg) {
      if (arg) {
        let value = new Date(Number(arg))
        return `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1).toString().padStart(2, '0')}/${value.getFullYear()}-${value.getHours().toString().padStart(2, '0')}:${value.getMinutes().toString().padStart(2, '0')}`
      } else {
        return ''
      }
    }
  }
}
</script>
<style>
  .methods-select {
    max-width: 150px;
  }
  .container-content {
    position: relative;
    min-height: 350px;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px
  }
  .bookmark_btn {
    position:absolute;
    top: 10px;
    right: 10px;
    z-index: 501
  }
  .wrap-config {
    width:100%;
    position: relative;
    border: 1px dashed #ddd;
  }
  .wrap-result {
    width:100%;
  }
  .wrap-history {
    width:100%;
    font-size:12px;
    max-height:150px;
    overflow: hidden;
    overflow-y: auto;
    background: #ffffff
  }
  .wrap-history .layout{
    border: 1px dashed #ddd;
  }
  .wrap-history .layout .cord-time{
    width: 110px
  }
  .wrap-history .layout .cord-url{
    width: calc(100% - 190px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left
  }
  .wrap-history .layout .cord-action{
    width: 80px
  }
  .wrap-history .layout .cord-action .v-icon:hover{
    cursor: pointer;
  }
  .wrap-result > div {
    border: 1px dashed #ddd;
  }
  .wrap-result .reponse-item {
    background: #ffffff;
    /* max-width:535px; */
    max-height:350px;
    border: 1px solid #eee;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    text-align: left;
    font-size:12px;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: auto;
    color: #d32f2f
  }
  .jv-node {
    text-align: start !important
  }
  .jv-container .jv-tooltip {
    top: 0 !important
  }
  .theme--light.v-text-field--box>.v-input__control>.v-input__slot, .theme--light.v-text-field--box>.v-input__control>.v-input__slot:hover {
    background: #ffffff;
  }
  .jv-container .jv-code, .jv-container .jv-code.open {
    max-height: 350px !important;
    overflow: hidden !important;
    overflow-y: auto !important;
  }
  @media only screen and (max-width: 600px) {
    .methods-select {
      max-width: 100% !important
    }
    .container-content {
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 20px
    }
    .bookmark_btn {
      position:absolute;
      top: 0px;
      right: 0px;
      z-index: 501
    }
  }
</style>
