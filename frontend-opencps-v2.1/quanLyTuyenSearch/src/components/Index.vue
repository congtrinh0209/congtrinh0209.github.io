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
            <v-btn depressed text class="ma-0 px-0" color="primary" @click="showSearchAdvanced">Nâng cao</v-btn>
          </template>
        </v-text-field>

        <div class="flex-grow-0"></div>

        <v-btn height="32" depressed class="ma-1 px-1" color="primary">Tìm kiếm</v-btn>
        <v-btn height="32" class="ma-1 px-1" outlined color="primary">Thêm mới</v-btn>
        <v-btn height="32" class="ma-1 px-1 mr-0" outlined color="primary">Xuất excel</v-btn>
      </v-app-bar>
      <div class="searchAdvanced-content py-2">
        <v-flex class="xs12" v-if="searchAdvanced && itemsFilter.length > 0">
          <v-layout wrap v-for="(item, index) in itemsFilter" :key="index" class="mb-1">
            <v-flex xs12 sm4 class="pr-2">
              <v-select
                class="select-search"
                :items="keyFilterItems"
                v-model="item['key']"
                item-text="name"
                item-value="value"
                return-object
                hide-details
                solo
                flat
                height="32"
                min-height="32"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm2 class="pr-2">
              <v-select
                class="select-search"
                :items="typeFilterItems"
                v-model="item['type']"
                item-text="name"
                item-value="value"
                return-object
                hide-details
                solo
                flat
                height="32"
                min-height="32"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm4 class="pr-2">
              <v-text-field
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
                  <v-btn width="100%" height="32" color="red" dense small dark @click="removeSearchItem">
                    <v-icon>remove</v-icon>
                  </v-btn> 
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </div>
      
    </div>
    <!-- <v-layout wrap>
      <v-flex class="xs12 sm9">
        <v-text-field
          class="input-search"
          height="32"
          single-lines
          hide-details
          outlined
        >
          <template v-slot:append>
            <v-btn depressed text color="primary" class="pr-2 priamry--text"
              @click="showSearchAdvanced"
            >
              Nâng cao
            </v-btn>
          </template>
        </v-text-field>
      </v-flex>
      <v-flex class="xs12 sm3">
        <v-btn depressed color="primary" small class="pr-2">
          Tìm kiếm
        </v-btn>
        <v-btn depressed color="primary" small class="pr-2">
          Thêm mới
        </v-btn>
        <v-btn depressed color="primary" small>
          Xuất excel
        </v-btn>
      </v-flex>
      <v-flex class="xs12" v-if="searchAdvanced && itemsFilter.length > 0">
        <v-layout wrap v-for="(item, index) in itemsFilter" :key="index">
          <v-flex xs12 sm3>
            <v-select
              :items="keyFilterItems"
              v-model="item['key']"
              item-text="name"
              item-value="value"
              return-object
            ></v-select>
          </v-flex>
          <v-flex xs12 sm2>
            <v-select
              :items="typeFilterItems"
              v-model="item['type']"
              item-text="name"
              item-value="value"
              return-object
            ></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field
              v-model="item['value']"
              class="input-search"
              height="32"
              single-lines
              hide-details
              outlined
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn color="primary" small dark>
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn color="red" small dark>
              <v-icon>remove</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout> -->
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
    console.log('filter_options', vm.filter_options)
    vm.createFilterConfig()
  },
  watch: {
    filter_options (val) {
      vm.createFilterConfig()
    }
  },
  methods: {
    createFilterConfig () {
      let vm = this
      let keyFilterAll = []
      let typeFilterAll = []
      for (let key in vm.filter_options) {
        keyFilterAll.push(vm.filter_options[key]['key'])
        typeFilterAll.push(vm.filter_options[key]['type'])
      }
      vm.keyFilterItems = keyFilterAll.length > 0 ? vm.removeDublicate(keyFilterAll, 'value') : []
      vm.typeFilterItems = typeFilterAll.length > 0 ? vm.removeDublicate(typeFilterAll, 'value') : []
      console.log(vm.keyFilterItems, vm.typeFilterItems)
    },
    addSearchItem () {
      let vm = this
      vm.itemsFilter.push(
        {
          key: {name: '', value: ''},
          type: {name: '', value: ''},
          value: ''
        }
      )
    },
    removeSearchItem (item, index) {
      let vm = this
      vm.itemsFilter.splice(index, 1)
      if (vm.itemsFilter.length === 0) {
        vm.searchAdvanced = false
      }
    },
    removeDublicate (arr, key) {
      let result = arr
      .map(e => e[key])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);
      return result;
    },
    showSearchAdvanced () {
      let vm = this
      vm.searchAdvanced = !vm.searchAdvanced
      if (vm.searchAdvanced && vm.itemsFilter.length === 0) {
        vm.itemsFilter = [
          {
            key: {name: '', value: ''},
            type: {name: '', value: ''},
            value: ''
          }
        ]
      }
    }
  },
  setup(props, ctx) {
    return service(props, ctx);
  }
};
</script>
