<template>
  <div class="mx-2 my-2" style="border:1px solid #dedede">
    <v-layout wrap class="px-2 py-2">
      <v-card flat>
        <v-layout wrap>
          <v-flex style="width:100%">
            <v-layout wrap>
              <v-autocomplete
                class="mx-2"
                style="max-width:120px"
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
            <div style="display:inline-block">
              <v-menu bottom offset-y>
                <v-btn slot="activator" color="blue" class="white--text">Config &nbsp; <v-icon size="18">arrow_drop_down</v-icon></v-btn>
                <v-list>
                  <v-list-tile v-for="(item, index) in configItems" :key="index" @click="changeConfig(item, index)">
                    <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-btn color="blue" class="white--text" @click="sendRequest">
                Send
              </v-btn>
            </div>
          </v-flex>
          <!-- configs -->
          <v-flex style="width:100%" v-if="showConfig">
            <div>
              <v-flex class="text-xs-right">
                <span v-if="configItem === 'HEADER'">Header option</span>
                <span v-if="configItem === 'PARAM'">Params option</span>
                <span v-if="configItem === 'DATA'">Data option</span>
                <v-btn icon slot="activator" @click="addField()">
                  <v-icon color="blue" size="22px">add</v-icon>
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
                  <td style="border-right: 1px solid #dedede;width:100px">
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
        </v-layout>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
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
    showConfig: false,
    configItems: [
      {'name': 'HEADER', 'value': 'HEADER'},
      {'name': 'PARAM', 'value': 'PARAM'},
      {'name': 'DATA', 'value': 'DATA'}
    ],
    itemsTable: [],
    itemsTableSet: [],
    headersOption: [
      {'name': 'groupId', 'value': 402132},
      {'name': 'Token', 'value': '1adf0r'}
    ],
    paramOption: [],
    dataOption: [],
    configItem: '',
    editedIndex: '',
    editedItem: {'name': '', 'value': ''},
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
          {'name': 'key1', 'value': 'value1'},
          {'name': 'key2', 'value': 'value2'},
          {'name': 'key3', 'value': 'value3'}
        ]
      }
      vm.showConfig = true
    },
    sendRequest () {
      let vm = this
      let headersOption = {}
      let paramsOption = {}
      let dataOption = new URLSearchParams()
      for (let key in vm.headersOption) {
        headersOption[vm.headersOption[key].name] = vm.headersOption[key].value
      }
      for (let key in vm.paramOption) {
        paramsOption[vm.paramOption[key].name] = vm.paramOption[key].value
      }
      for (let key in vm.dataOption) {
        dataOption.append(vm.dataOption[key].name, vm.dataOption[key].value)
      }
      console.log('headers', headersOption)
      var url = vm.urlRequest
      var typeMethod = vm.method
      var headers = headersOption
      var paramGet = paramsOption
      var dataUpdate = dataOption
      axios({
        method: typeMethod,
        url: url,
        headers: headers,
        params: paramGet,
        data: dataUpdate
      }).then(function (response) {
        console.log('response', response)
      }).catch(function (error) {
        console.log('error', error.response)
      })
    },
    addField () {
      let vm = this
      let item = {'name': 'key', 'value': 'value'}
      vm.itemsTable.push(item)
    },
    deleteField (index) {
      let vm = this
      vm.itemsTable.splice(index, 1)
    }
  }
}
</script>
<style scoped>
</style>
