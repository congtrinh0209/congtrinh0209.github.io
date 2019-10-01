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
              <v-menu
                v-else-if="item['fields'].toLocaleLowerCase() === 'date'"
                :ref="item['menuDate']"
                v-model="item['menuDate']"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                full-width
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    class="search-input-appbar input-search"
                    v-model="item['dateFormatted']"
                    persistent-hint
                    append-icon="event"
                    @blur="item['value'] = parseDate(item['dateFormatted'])"
                    v-on="on"
                    placeholder="Chọn ngày"
                    hide-details
                    solo
                    flat
                    height="32"
                    min-height="32"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="item['value']" locale="vi" :first-day-of-week="1" no-title @input="changeDate(item, index)"></v-date-picker>
              </v-menu>
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
import service from "./service.js";
export default {
  name: "fds-qlt-timkiem",
  props: {
    filter_options: {
      type: Array,
      default: () => []
    }
  },
  setup(props, ctx) {
    return service(props, ctx)
  }
};
</script>
