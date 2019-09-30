<template>
  <div class="qlt_timkiem" style="max-width:1000px; margin: 0 auto">
    <div class="toolbar-search">
      <v-app-bar
        color="white accent-4"
        dense
        class="primary--text"
        flat
        height="42"
      >
        <v-text-field
          class="mr-2 search-input-appbar"
          flat
          placeholder="Tìm kiếm ..."
          hide-details
          solo
          height="32"
          min-height="32"
        >
          <template v-slot:append>
            <v-btn depressed text class="ma-0 px-0" color="primary" @click.native="showSearchAdvanced">Nâng cao</v-btn>
          </template>
        </v-text-field>

        <div class="flex-grow-0"></div>

        <v-btn height="32" depressed class="ma-1 px-1 mr-0" color="primary" @click="submitSearch">Tìm kiếm</v-btn>
        <!-- <v-btn height="32" class="ma-1 px-1" outlined color="primary">Thêm mới</v-btn>
        <v-btn height="32" class="ma-1 px-1 mr-0" outlined color="primary">Xuất excel</v-btn> -->
      </v-app-bar>
      <div class="searchAdvanced-content py-2">
        <v-flex class="xs12" v-if="searchAdvanced && itemsFilter.length > 0">
          <v-layout wrap v-for="(item, index) in itemsFilter" :key="index" class="mb-1">
            <v-flex xs12 sm4 class="pr-2">
              <v-select
                class="select-search"
                :items="keyFilterItems"
                v-model="item['keyCode']"
                item-text="keyName"
                item-value="keyCode"
                hide-details
                solo
                flat
                height="32"
                min-height="32"
                @change="changeKeySearch(item, index)"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm2 class="pr-2">
              <v-select
                class="select-search"
                :items="typeFilterItems"
                v-model="item['typeCode']"
                item-text="typeName"
                item-value="typeCode"
                hide-details
                solo
                flat
                height="32"
                min-height="32"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm4 class="pr-2">
              <v-text-field
                v-if="item['fields'].toLocaleLowerCase() === 'input'"
                v-model="item['value']"
                class="search-input-appbar input-search"
                single-lines
                hide-details
                solo
                flat
                height="32"
                min-height="32"
              ></v-text-field>
              <v-select
                v-else-if="item['fields'].toLocaleLowerCase() === 'select'"
                class="select-search"
                :items="item['options']"
                v-model="item['value']"
                :item-text="item['itemText']"
                :item-value="item['itemValue']"
                hide-details
                solo
                flat
                height="32"
                min-height="32"
              ></v-select>
              <v-text-field
                v-else
                v-model="item['value']"
                class="search-input-appbar input-search"
                single-lines
                hide-details
                solo
                flat
                height="32"
                min-height="32"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm2 class="pl-2">
              <v-layout wrap>
                <v-flex xs6 class="pr-1">
                  <v-btn width="100%" height="32" color="primary" dense small dark @click="addSearchItem">
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs6 class="pl-1">
                  <v-btn width="100%" height="32" color="red" dense small dark @click="removeSearchItem(item, index)">
                    <v-icon>remove</v-icon>
                  </v-btn> 
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </div>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import "../search.css";
import service from "../service";
export default {
  name: "fds-qlt-timkiem",
  props: {
    filter_options: {
      type: Array,
      default: () => []
    }
  },
  data: function(){
    return {
      itemsFilter: [],
      searchAdvanced: false,
      keyFilterItems: [],
      typeFilterItems: []
    };
  },
  created () {
    var vm = this
    vm.createFilterConfig()
    vm.getSearchItems()
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      let vm = this
      vm.createFilterConfig()
      vm.getSearchItems()
    }
  },
  methods: {
    createFilterConfig () {
      let vm = this
      vm.keyFilterItems = vm.filter_options.length > 0 ? vm.removeDublicate(vm.filter_options, 'keyCode') : []
      vm.typeFilterItems = vm.filter_options.length > 0 ? vm.removeDublicate(vm.filter_options, 'typeCode') : []
    },
    getSearchItems () {
      let vm = this
      let current = vm.$router.history.current
      let newQuery = current.query
      vm.itemsFilter = []
      for (let key in newQuery) {
        if (newQuery[key] && String(key).indexOf('filter_field_') === 0) {
          vm.itemsFilter.push({
            keyCode: newQuery[key],
            typeCode: newQuery[String(key).replace('filter_field_', 'filter_type_')],
            fields: vm.getFields(newQuery[key])['fields'],
            value: newQuery[String(key).replace('filter_field_', 'filter_value_')]
          })
        }
      }
      if (vm.itemsFilter.length > 0) {
        vm.searchAdvanced = true
      } else {
        vm.searchAdvanced = false
      }
    },
    addSearchItem () {
      let vm = this
      vm.itemsFilter.push(
        {
          keyCode: '',
          typeCode: '',
          fields: '',
          value: ''
        }
      )
    },
    showSearchAdvanced () {
      let vm = this
      vm.searchAdvanced = !vm.searchAdvanced
      if (vm.searchAdvanced && vm.itemsFilter.length === 0) {
        vm.itemsFilter = [
          {
            keyCode: '',
            typeCode: '',
            fields: '',
            value: ''
          }
        ]
      }
    },
    submitSearch () {
      let vm = this
      let current = vm.$router.history.current
      let newQuery = current.query
      let queryString = '?'
      for (let key in vm.itemsFilter) {
        let index = Number(key) + 1
        newQuery['filter_field_' + index] = vm.itemsFilter[key]['keyCode']
        newQuery['filter_type_' + index] = vm.itemsFilter[key]['typeCode']
        newQuery['filter_value_' + index] = vm.itemsFilter[key]['value']
      }
      for (let key in newQuery) {
        if (newQuery[key] !== '' && newQuery[key] !== undefined && newQuery[key] !== null &&
          Number(String(key).split('_').pop()) <= vm.itemsFilter.length
        ) {
          queryString += key + '=' + newQuery[key] + '&'
        }
      }
      
      vm.$router.push({
        path: current.path + queryString,
        query: {
          renew: Math.floor(Math.random() * (100 - 1 + 1)) + 1
        }
      })
    },
    removeSearchItem (item, index) {
      let vm = this
      vm.itemsFilter.splice(index, 1)
      if (vm.itemsFilter.length === 0) {
        vm.searchAdvanced = false
      }
    },
    changeKeySearch(item, index) {
      let vm = this
      vm.itemsFilter[index]['value'] = ''
      vm.itemsFilter[index]['fields'] = vm.getFields(item['keyCode'])['fields']
      if (String(vm.itemsFilter[index]['fields']).toLowerCase() === 'select') {
        vm.itemsFilter[index]['options'] = []
        vm.itemsFilter[index]['itemText'] = vm.getFields(item['keyCode'])['itemText']
        vm.itemsFilter[index]['itemValue'] = vm.getFields(item['keyCode'])['itemValue']
      }
    },
    getFields (keyCode) {
      let vm = this
      let fields = vm.filter_options.filter(function (item) {
        return String(item['keyCode']) === String(keyCode)
      })
      return fields[0]
    },
    removeDublicate (arr, key) {
      let result = arr
      .map(e => e[key])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);
      return result;
    }
  },
  setup(props, ctx) {
    return service(props, ctx);
  }
};
</script>
