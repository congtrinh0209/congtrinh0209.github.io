<template>
  <v-container
    id="quantri-page"
    class="px-0 pt-0 mt-2"
    fluid
    tag="section"
  >
    <vue-confirm-dialog></vue-confirm-dialog>
    <v-layout wrap>
      <v-flex class="danh-muc-1">
        <div class="nav-content">
          <v-list dense>
            <v-list-item
              v-for="(item, i) in items"
              :key="item.value"
              @click="selectMenu(item, i)"
              :style="selectedItem == item.value ? 'background: #dedede;' : ''"
            >
              <v-list-item-icon class="mr-2">
                <v-icon size="20" color="primary" v-if="selectedItem == item.value">mdi-play</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-flex>
      <v-flex class="danh-muc-2">
        <div class="row-header">
          <div class="background-triangle-big">
            <span>{{itemSelect['text']}}</span>
          </div>
          <div class="layout row wrap header_tools row-blue">
            <div class="flex xs12 pl-3 text-ellipsis text-bold">
              <div class="layout chart__report wrap">
                <div class="flex px-2 text-right">
                  <button type="button" class="mx-0 my-0 v-btn v-btn--flat theme--light" style="display: none;">
                    <div class="v-btn__content">
                      <i aria-hidden="true" class="v-icon material-icons theme--light">settings</i> &nbsp;
                      <span>Tùy chọn</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="itemSelect['value'] == 1">
          <BieuMau></BieuMau>
        </div>
        <div v-if="itemSelect['value'] == 2">
          <MaHoa></MaHoa>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import toastr from 'toastr'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }

  import BieuMau from './QuanTriComponent/BieuMau.vue'
  import MaHoa from './QuanTriComponent/MaHoa.vue'
  export default {
    name: 'QuanTri',
    components: {
      BieuMau,
      MaHoa
    },
    data: () => ({
      loading: false,
      typeAction: 'add',
      dataAction: '',
      validFormAdd: false,
      typeFilter: '',
      templateType: '',
      keyword: '',
      dictCode: '',
      selectedItem: '1',
      itemSelect: '',
      items: [
        { text: 'Biểu mẫu', value: '1', collectionName: '' },
        { text: 'Mã hóa', value: '2', collectionName: '' }
      ],
      loadingData: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      templateContent: '',
      templateSubject: '',
      templateCode: '',
      ghiChu: '',
      itemUpdate: ''
    }),
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 6)
      vm.selectedItem = '1'
      vm.itemSelect = vm.items[0]
    },
    computed: {
    },
    watch: {
    },
    methods: {
      selectMenu(item, index) {
        let vm = this
        vm.selectedItem = item.value
        vm.itemSelect = item
        vm.keyword = ''
        vm.typeFilter = ''
      },
      getStatus(status) {
        switch(status) {
          case '1':
              return 'Sử dụng'
          case '0':
              return 'Không sử dụng'
          default:
              return ''
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
