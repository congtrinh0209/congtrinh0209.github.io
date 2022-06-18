<template>
  <v-container
    id="bieumau-page"
    class="px-0 pt-0 mt-2"
    fluid
    tag="section"
  >
    <v-layout wrap>
      <v-flex >
        <div>
          <v-layout wrap class="wrap-content-2 pb-0">
            <v-flex xs12 class="">
              <v-text-field
                class="input-form"
                dense
                solo
                placeholder="Nhập mã biểu mẫu hoặc tên biểu mẫu"
                v-model="keyword"
                @keyup.enter="getBieuMau"
                hide-details="auto"
                height="32px"
                clearable
              ></v-text-field>
            </v-flex>
            <!-- <v-flex xs12 md6 class="">
              <v-autocomplete
                class="input-form"
                dense
                solo
                placeholder="Loại biểu mẫu"
                v-model="typeFilter"
                :items="itemsType"
                item-text="name"
                item-value="value"
                @keyup.enter=""
                hide-details="auto"
                height="32px"
                clearable
              ></v-autocomplete>
            </v-flex> -->
            <v-flex xs12 class="mt-3">
              <v-btn
                class="mx-0 left"
                small
                color="primary"
                @click="showForm()"
              >
                <v-icon size="18">mdi-plus</v-icon>&nbsp;
                Thêm mới
              </v-btn>
              <v-btn @click="getBieuMau('reset')" color="primary" small class="mx-0 text-white" style="float: right;">
                <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                Tìm kiếm
              </v-btn>
            </v-flex>
          </v-layout>
          <v-card
              class="mx-auto pa-3"
              flat
          >
              <v-data-table
                flat
                :headers="headers"
                :items="itemsBieuMau"
                :items-per-page="itemsPerPage"
                item-key="templateCode"
                hide-default-footer
                class="elevation-1"
                no-data-text="Không có"
                :loading="loadingData"
                loading-text="Đang tải... "
                id="table-danhmuc"
              >
                  <template v-slot:item.index="{ item, index }">
                      <div>{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                  </template>
                  <template v-slot:item.tinhTrang="{ item }">
                      <div :style="item.tinhTrang == '1' ? 'color: green' : 'color: red'">
                          {{ getStatus(item.tinhTrang) }}
                      </div>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <div>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn @click="showForm(item)" color="blue" text icon class=" mr-3" v-bind="attrs" v-on="on">
                            <v-icon size="22">mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <span>Sửa</span>
                      </v-tooltip>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn @click="deleteBieuMau(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                            <v-icon size="22">mdi-delete</v-icon>
                          </v-btn>
                        </template>
                        <span>Xóa</span>
                      </v-tooltip>
                    </div>
                  </template>
              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
    <v-dialog
      fullscreen
      v-model="dialogAddBieuMau"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title v-if="typeAction === 'add'">Thêm biểu mẫu</v-toolbar-title>
          <v-toolbar-title v-else>Cập nhật biểu mẫu</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="dialogAddBieuMau = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5">
          <v-form
            ref="formAddBieuMau"
            v-model="validFormAdd"
            lazy-validation
          >
              <v-layout wrap>
                <v-flex xs12 md6 class="mb-3 pr-2">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Mã loại</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-text-field
                      class="flex input-form"
                      v-model="templateCode"
                      solo
                      dense
                      :readonly="typeAction === 'update'"
                      :rules="required"
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs12 md6 class="mb-3 pl-3">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Loại biểu mẫu</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsType"
                      v-model="templateType"
                      item-text="name"
                      item-value="value"
                      :rules="required"
                      required
                      dense
                      solo
                      hide-details="auto"
                    ></v-autocomplete>
                  </v-layout>
                </v-flex>
                <v-flex xs12 class="mb-3">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Tên biểu mẫu</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-text-field
                      class="flex input-form"
                      v-model="templateSubject"
                      solo
                      dense
                      :rules="required"
                      required
                      hide-details="auto"
                      clearable
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs12 class="mb-2">
                  <v-layout wrap>
                    <div class="flex text-label xs12">
                      <span>Nội dung biểu mẫu</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <div class="flex mt-2 xs12">
                      <!-- <vue-editor id="editorContent" v-model="templateContent"></vue-editor> -->
                      <codemirror v-model="templateContent" :options="cmOptions"></codemirror>
                    </div>
                  </v-layout>
                </v-flex>
              </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="dialogAddBieuMau = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
          <v-btn v-if="typeAction === 'add'" class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddBieuMau">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Thêm mới</span>
          </v-btn>
          <v-btn v-else class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitUpdateBieuMau">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Cập nhật</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import { codemirror } from 'vue-codemirror'
  import { VueEditor } from "vue2-editor";
  import Pagination from '../Pagination.vue'
  import toastr from 'toastr'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  import 'codemirror/lib/codemirror.css'
  export default {
    name: 'BieuMau',
    components: {
      Pagination,
      VueEditor,
      codemirror
    },
    data: () => ({
      loading: false,
      dialogAddBieuMau: false,
      typeAction: 'add',
      dataAction: '',
      validFormAdd: false,
      itemsType: [
        {name: 'Freemarker', value: 'ftl'}
      ],
      typeFilter: '',
      templateType: '',
      itemsDanhMucCha: [],
      danhMucChaQuanHuyen: '',
      danhMucChaPhuongXa: '',
      keyword: '',
      dictCode: '',
      selectedItem: '1',
      itemSelect: '',
      items: [
        { text: 'Biểu mẫu', value: '1', collectionName: '' },
        { text: 'Mã hóa', value: '2', collectionName: '' }
      ],
      headers: [
        {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
        },
        {
            sortable: false,
            text: 'Mã biểu mẫu',
            align: 'left',
            value: 'templateCode'
        },
        {
            sortable: false,
            text: 'Tên biểu mẫu',
            align: 'left',
            value: 'templateSubject'
        },
        // {
        //     sortable: false,
        //     text: 'Loại biểu mẫu',
        //     align: 'left',
        //     value: 'templateSubject'
        // },
        {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action',
            width: 120
        },
      ],
      itemsBieuMau: '',
      page: 0,
      itemsPerPage: 20,
      total: 0,
      pageCount: 0,
      loadingData: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      templateContent: '',
      templateSubject: '',
      templateCode: '',
      ghiChu: '',
      itemUpdate: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/html',
        theme: 'base16-light',
        lineNumbers: true,
        line: true,
        connect: 'align',
        collapseIdentical: false,
          highlightDifferences: true
      }
    }),
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 4)
      vm.selectedItem = '1'
      vm.itemSelect = vm.items[0]
      vm.getBieuMau('reset')
    },
    computed: {
    },
    watch: {
    },
    methods: {
      showForm (item) {
        let vm = this
        if (item) {
          vm.typeAction = 'update'
          vm.itemUpdate = item
          vm.templateCode = item.templateCode
          vm.templateContent = item.templateContent
          vm.templateSubject = item.templateSubject
          vm.templateType = item.templateType
        } else {
          vm.typeAction = 'add'
          vm.templateCode = ''
          vm.templateContent = ''
          vm.templateSubject = ''
          vm.templateType = ''
        }
        vm.dialogAddBieuMau = true
        setTimeout(function () {
          vm.$refs.formAddBieuMau.resetValidation()
        }, 200)
      },
      submitAddBieuMau () {
        let vm = this
        vm.dataAction = {
          "status": "",
          "templateCode": vm.templateCode,
          "templateContent": vm.templateContent,
          "templateSubject": vm.templateSubject,
          "templateType": vm.templateType
        }
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddBieuMau.validate() && vm.templateContent) {
          let filter = {
            data: vm.dataAction
          }
          vm.$store.dispatch('createBieuMau', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm biểu mẫu thành công')
            vm.getBieuMau()
            vm.dialogAddBieuMau = false
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            if (response && response.status == 409) {
              toastr.error('Mã biểu mẫu đã tồn tại')
              return
            }
            toastr.error('Thêm biểu mẫu thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      submitUpdateBieuMau () {
        let vm = this
        vm.dataAction = {
          "status": "",
          "templateCode": vm.templateCode,
          "templateContent": vm.templateContent,
          "templateSubject": vm.templateSubject,
          "templateType": vm.templateType
        }
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddBieuMau.validate() && vm.templateContent) {
          let filter = {
            data: vm.dataAction,
            id: vm.itemUpdate.uuid
          }
          vm.$store.dispatch('updateBieuMau', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Cập nhật biểu mẫu thành công')
            vm.getBieuMau()
            vm.dialogAddBieuMau = false
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Cập nhật biểu mẫu thất bại')
          })
        }
      },
      deleteBieuMau (item) {
        let vm = this
        vm.$confirm({
          title: 'Xác nhận xóa dữ liệu',
          message: 'Bạn có chắc chắn xóa biểu mẫu?',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: confirm => {
            if (confirm == true) {
              vm.loading = true
              let filter = {
                id: item.uuid
              }
              vm.$store.dispatch('deleteBieuMau', filter).then(function (result) {
                vm.loading = false
                toastr.remove()
                toastr.success('Xóa biểu mẫu thành công')
                vm.getBieuMau()
              }).catch(function (response) {
                vm.loading = false
                toastr.remove()
                toastr.error('Xóa biểu mẫu thất bại')
              })
            }
          }
        })
        
      },
      getBieuMau (type) {
        let vm = this
        if (type === 'reset') {
          vm.itemsBieuMau = []
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          data: {
            page: vm.page,
            size: vm.itemsPerPage,
            orderTypes: 'asc',
            keyword: vm.keyword,
            templateType: vm.typeFilter
          }
        }
        vm.$store.dispatch('getBieuMau', filter).then(function (response) {
          vm.itemsBieuMau = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      selectMenu(item, index) {
        let vm = this
        vm.selectedItem = item.value
        vm.itemSelect = item
        vm.keyword = ''
        vm.typeFilter = ''
        if (vm.itemSelect.collectionName === 'quanhuyen' || vm.itemSelect.collectionName === 'phuongxa') {
          vm.getDanhMucCha('tinhthanh')
          vm.tinhThanhSearch = vm.tinhThanhDefault
        }
        if (vm.itemSelect.collectionName === 'phuongxa') {
          setTimeout (function () {
            vm.getDanhMucCha('quanhuyen', 'search', 'getData')
          }, 50)
        } else {
          vm.getBieuMau('reset')
        }
      },
      changePage(config) {
        let vm = this
        vm.page = config.page
        vm.getBieuMau()
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
