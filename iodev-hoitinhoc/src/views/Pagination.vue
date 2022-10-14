<template>
<v-layout wrap class="mt-4">
  <div v-if="showTong" class="flex" style="max-width: 200px;color: #2161B1;font-weight: 500;">
    <span>TỔNG SỐ:</span>&nbsp;
    <span>{{total}}</span>
  </div>
  <div class="flex text-center">
    <nav role="navigation" aria-label="Pagination Navigation" style="position: relative;">
      <ul class="v-pagination theme--light">
      <li>
          <button @click="prevPage"  type="button" aria-label="Previous page" 
          :class="currentPage == 0 ? 'v-pagination__navigation v-pagination__navigation--disabled' : 'v-pagination__navigation'">
          <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--light"></i>
          </button>
      </li>
      <li>
          <button type="button" aria-current="true" class="v-pagination__item v-pagination__item--active primary">
          {{currentPage + 1}} / {{pageCount}}
          </button>
      </li>
      <li>
          <button @click="nextPage" type="button" aria-label="Next page" 
          :class="currentPage == pageCount -1 ? 'v-pagination__navigation v-pagination__navigation--disabled' : 'v-pagination__navigation'">
          <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light"></i>
          </button>
      </li>
      </ul>
    </nav>
  </div>
  <div class="flex" style="max-width:120px">
    <v-autocomplete
      class="autocomplete-form-input"
      hide-no-data
      :items="listPage"
      v-model="currentPagePagination"
      item-text="name"
      item-value="value"
      dense
      outlined
      hide-details="auto"
      style=""
    >
    </v-autocomplete>
  </div>
</v-layout>
</template>

<script>
  export default {
    name: 'Search',
    props: {
        pageInput: {
            type: Number,
            default: 0
        },
        pageCount: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        },
        showTong: {
          type: Boolean,
          default: true
        }
    },
    data () {
      return {
        currentPage: 0,
        currentPagePagination: 1,
        listPage: [],
        type: ''
      }
    },
    created () {
      let vm = this
      vm.currentPage = vm.pageInput
      vm.currentPagePagination = vm.currentPage + 1
      for (let i = 1; i <= vm.pageCount; i++) {
        let item = {
          name: 'Trang ' + i,
          value: i
        }
        vm.listPage.push(item)
      }
    },
    watch: {
        pageInput () {
            // this.currentPage = val
            // this.currentPagePagination = this.currentPage + 1
        },
        pageCount (val) {
          let vm = this
          for (let i = 1; i <= val; i++) {
            let item = {
              name: 'Trang ' + i,
              value: i
            }
            vm.listPage.push(item)
          }
        },
        currentPagePagination (val) {
          let vm = this
          vm.currentPage = val -1
          vm.$emit('tiny:change-page', {
            page: vm.currentPage
          })
        }
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      }
    },
    methods: {
      prevPage () {
        let vm = this
        vm.currentPage -= 1
        vm.currentPagePagination = vm.currentPage + 1
        vm.$emit('tiny:change-page', {
          page: vm.currentPage
        })
        console.log('vm.currentPage1', vm.currentPage)
      },
      nextPage () {
        let vm = this
        vm.currentPage += 1
        vm.currentPagePagination = vm.currentPage + 1
        vm.$emit('tiny:change-page', {
          page: vm.currentPage
        })
        console.log('vm.currentPage2', vm.currentPage)
      },
    },
  }
</script>
<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>

