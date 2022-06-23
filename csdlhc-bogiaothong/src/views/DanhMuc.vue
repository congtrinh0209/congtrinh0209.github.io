<template>
  <v-container
    id="danhmuc-page"
    class="px-0 pt-0 mt-2"
    fluid
    tag="section"
  >
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
        <v-layout wrap class="wrap-content-2 pb-0">
          <v-flex xs12 :class="itemSelect['collectionName'] === 'phuongxa' ? 'md6 pr-2 mb-2' : 'md12 mb-2'" v-if="itemSelect['collectionName'] === 'quanhuyen' || itemSelect['collectionName'] === 'phuongxa'">
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsTinhThanh"
              v-model="tinhThanhSearch"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
              :rules="required"
              required
              @change="changeTinhThanhSearch"
              placeholder="Chọn Tỉnh/ thành"
            >
              <template v-slot:selection="data">
                <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
              </template>
              <template v-slot:item="data">
                <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
              </template>
            </v-autocomplete>
          </v-flex>
          <v-flex xs12 md6 v-if="itemSelect['collectionName'] === 'phuongxa'">
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsQuanHuyenSearch"
              v-model="quanHuyenSearch"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
              :rules="required"
              required
              placeholder="Chọn Quận/ huyện"
            >
              <template v-slot:selection="data">
                <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
              </template>
              <template v-slot:item="data">
                <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
              </template>
            </v-autocomplete>
          </v-flex>
          <v-flex xs12 md6 class="pr-2">
            <v-text-field
              class="input-form"
              dense
              solo
              placeholder="Nhập mã danh mục hoặc tên danh mục"
              v-model="dictName"
              @keyup.enter="getDanhMuc"
              hide-details="auto"
              height="32px"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6 class="">
            <v-autocomplete
              class="input-form"
              dense
              solo
              placeholder="Trạng thái"
              v-model="statusFilter"
              :items="itemsStatus"
              item-text="name"
              item-value="value"
              @keyup.enter=""
              hide-details="auto"
              height="32px"
              clearable
            ></v-autocomplete>
          </v-flex>
          <v-flex xs12 class="mt-3">
            <v-btn
              class="mx-0 mr-2 left"
              small
              color="primary"
              :loading="loading" :disabled="loading"
              @click.stop="pickFileImport()"
              v-if="itemSelect['collectionName'] === 'tinhthanh'"
            >
              <v-icon size="18">mdi-import</v-icon>&nbsp;
              Import dữ liệu
            </v-btn>
            <v-btn
              class="mx-0 left"
              small
              color="primary"
              @click="showForm()"
            >
              <v-icon size="18">mdi-plus</v-icon>&nbsp;
              Thêm mới
            </v-btn>
            <v-btn @click="getDanhMuc('reset')" color="primary" small class="mx-0 text-white" style="float: right;">
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
              :items="itemsDanhMuc"
              :items-per-page="itemsPerPage"
              item-key="maMuc"
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
                        <v-btn @click="deleteDanhMuc(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
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
      </v-flex>
    </v-layout>
    <v-dialog
      max-width="900"
      v-model="dialogAddDanhMuc"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title v-if="typeAction === 'add'">Thêm danh mục</v-toolbar-title>
          <v-toolbar-title v-else>Cập nhật danh mục</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="dialogAddDanhMuc = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5">
          <v-form
            ref="formAddDanhMuc"
            v-model="validFormAdd"
            lazy-validation
          >
              <v-layout wrap>
                <v-flex xs12 class="mb-2">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Mã mục</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-text-field
                      class="flex input-form"
                      v-model="maMuc"
                      solo
                      dense
                      :readonly="typeAction === 'update'"
                      :rules="required"
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs12 class="mb-2">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Tên mục</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-text-field
                      class="flex input-form"
                      v-model="tenMuc"
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
                    <div class="flex text-label">
                      <span>Trạng thái</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsStatus"
                      v-model="statusCreate"
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
                <v-flex class="mb-2" xs12 v-if="itemSelect['collectionName'] === 'quanhuyen' || itemSelect['collectionName'] === 'phuongxa'">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Danh mục cha</span>
                      <span class="red--text"> (*)</span>
                    </div>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsTinhThanh"
                      v-model="danhMucChaQuanHuyen"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      :rules="required"
                      required
                      return-object
                      @change="changeTinhThanh"
                      :label="itemSelect['collectionName'] === 'phuongxa' ? 'Tỉnh/ thành' : ''"
                    >
                      <template v-slot:selection="data">
                        <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
                      </template>
                      <template v-slot:item="data">
                        <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
                      </template>
                    </v-autocomplete>
                  </v-layout>
                </v-flex>
                <v-flex class="mb-2" v-if="itemSelect['collectionName'] === 'phuongxa'">
                  <v-layout wrap>
                    <div class="flex text-label">
                    </div>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsQuanHuyen"
                      v-model="danhMucChaPhuongXa"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      :rules="required"
                      required
                      return-object
                      label="Quận/ huyện"
                    >
                      <template v-slot:selection="data">
                        <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
                      </template>
                      <template v-slot:item="data">
                        <span>{{ data.item.tenMuc }} - {{ data.item.maMuc }}</span>
                      </template>
                    </v-autocomplete>
                  </v-layout>
                </v-flex>
                <v-flex xs12 class="mb-2">
                  <v-layout wrap>
                    <div class="flex text-label">
                      <span>Ghi chú</span>
                    </div>
                    <v-textarea
                      class="flex input-form"
                      v-model="ghiChu"
                      solo
                      dense
                      hide-details="auto"
                      rows="3"
                      clearable
                    ></v-textarea>
                  </v-layout>
                </v-flex>
              </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="dialogAddDanhMuc = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
          <v-btn v-if="typeAction === 'add'" class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddDanhMuc">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Thêm mới</span>
          </v-btn>
          <v-btn v-else class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitUpdateDanhMuc">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Cập nhật</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <input type="file" id="file_import" accept=".xml" @input="uploadFileImport()" style="display:none">
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import $ from 'jquery'
  import Pagination from './Pagination.vue'
  import toastr from 'toastr'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }

  export default {
    name: 'DanhMuc',
    components: {
      Pagination
    },
    data: () => ({
      loading: false,
      dialogAddDanhMuc: false,
      typeAction: 'add',
      dataAction: '',
      validFormAdd: false,
      itemsStatus: [
        {name: 'Sử dụng', value: '1'},
        {name: 'Không sử dụng', value: '0'}
      ],
      statusFilter: '',
      statusCreate: '',
      itemsDanhMucCha: [],
      danhMucChaQuanHuyen: '',
      danhMucChaPhuongXa: '',
      dictName: '',
      dictCode: '',
      selectedItem: '1',
      itemSelect: '',
      items: [
        { text: 'Giới tính', value: '1', collectionName: 'gioitinh'},
        { text: 'Dân tộc', value: '2', collectionName: 'dantoc' },
        { text: 'Tôn giáo', value: '3', collectionName: 'tongiao' },
        { text: 'Quốc gia', value: '4', collectionName: 'quocgia' },
        { text: 'Tỉnh/ thành', value: '5', collectionName: 'tinhthanh' },
        { text: 'Quận/ huyện', value: '6', collectionName: 'quanhuyen' },
        { text: 'Xã/ phường', value: '7', collectionName: 'phuongxa' },
        { text: 'Vai trò sử dụng', value: '8', collectionName: 'vaitrosudung' },
        { text: 'Loại giấy tờ tùy thân', value: '9', collectionName: 'loaigiaytotuythan' },
        { text: 'Trạng thái dữ liệu', value: '10', collectionName: 'trangthaidulieu' },
        { text: 'Tình trạng tổ chức', value: '11', collectionName: 'tinhtrangtochuc' },
        { text: 'Tình trạng công tác', value: '12', collectionName: 'tinhtrangcongtac' },
        { text: 'Tình trạng sử dụng tài khoản', value: '13', collectionName: 'tinhtrangsudungtaikhoan' },
        { text: 'Khối cơ quan', value: '14', collectionName: 'khoicoquan' },
        { text: 'Hình thức sở hữu', value: '15', collectionName: 'hinhthucsohuu' },
        { text: 'Loại giấy đăng ký kinh doanh', value: '15', collectionName: 'loaigiaydangkykinhdoanh' }
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
            text: 'Mã mục',
            align: 'left',
            value: 'maMuc'
        },
        {
            sortable: false,
            text: 'Tên mục',
            align: 'left',
            value: 'tenMuc'
        },
        {
            sortable: false,
            text: 'Trạng thái',
            align: 'left',
            value: 'tinhTrang'
        },
        {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action',
            width: 120
        },
      ],
      itemsDanhMuc: '',
      page: 0,
      itemsPerPage: 20,
      total: 0,
      pageCount: 0,
      loadingData: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      tenMuc: '',
      maMuc: '',
      ghiChu: '',
      itemUpdate: '',
      itemsTinhThanh: [],
      itemsQuanHuyen: [],
      itemsQuanHuyenSearch: [],
      tinhThanhSearch: '',
      quanHuyenSearch: '',
      tinhThanhDefault: process.env.VUE_APP_MA_TINH_THANH
    }),
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 4)
      vm.selectedItem = '1'
      vm.itemSelect = vm.items[0]
      vm.getDanhMuc('reset')
    },
    computed: {
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 4)
      },
    },
    methods: {
      showForm (item) {
        let vm = this
        if (item) {
          vm.typeAction = 'update'
          vm.itemUpdate = item
          vm.danhMucChaQuanHuyen = ''
          vm.danhMucChaPhuongXa = ''
        } else {
          vm.typeAction = 'add'
        }
        vm.dialogAddDanhMuc = true
        setTimeout(function () {
          if (item) {
            vm.maMuc = item.maMuc
            vm.tenMuc = item.tenMuc
            vm.ghiChu = item.ghiChu
            if (vm.itemSelect.collectionName === 'quanhuyen') {
              vm.danhMucChaQuanHuyen = item.thamChieu
            }
            if (vm.itemSelect.collectionName === 'phuongxa') {
              vm.itemsQuanHuyen = vm.itemsQuanHuyenSearch
              vm.danhMucChaQuanHuyen = vm.itemsTinhThanh.find(function (item) {
                return item.maMuc == vm.tinhThanhSearch
              })
              vm.danhMucChaPhuongXa = item.thamChieu
            }
            try {
              vm.statusCreate = vm.itemsStatus.find(function (itemFilter) {
                return item.tinhTrang == itemFilter.value
              })['value']
            } catch (error) {
            }
          } else {
            vm.maMuc = ''
            vm.tenMuc = ''
            vm.ghiChu = ''
            // vm.danhMucChaQuanHuyen = vm.itemsTinhThanh.find(function (item) {
            //   return item.maMuc === vm.tinhThanhDefault
            // })
            vm.danhMucChaQuanHuyen = vm.itemsTinhThanh.find(function (item) {
              return item.maMuc == vm.tinhThanhSearch
            })
            vm.danhMucChaPhuongXa = ''
            vm.statusCreate = '1'
            if (vm.itemSelect.collectionName === 'phuongxa') {
              // vm.getDanhMucCha('quanhuyen')
              vm.itemsQuanHuyen = vm.itemsQuanHuyenSearch
              vm.danhMucChaPhuongXa = vm.itemsQuanHuyenSearch.find(function (item) {
                return item.maMuc === vm.quanHuyenSearch
              })
            }
          }
          vm.$refs.formAddDanhMuc.resetValidation()
        }, 200)
      },
      submitAddDanhMuc () {
        let vm = this
        vm.dataAction = {
          maMuc: vm.maMuc,
          tenMuc: vm.tenMuc,
          tinhTrang: vm.statusCreate,
          ghiChu: vm.ghiChu,
          nguoiTaoLap: {
            maSoID: '',
            tenDinhDanh: '',
            type: ''
          },
          thamChieu: {
            maMuc: '',
            tenMuc: '',
            type: ''
          }
        }
        if (vm.itemSelect.collectionName === 'quanhuyen') {
          vm.dataAction.thamChieu = {
            maMuc: vm.danhMucChaQuanHuyen.maMuc,
            tenMuc: vm.danhMucChaQuanHuyen.tenMuc,
            type: vm.danhMucChaQuanHuyen.type
          }
        }
        if (vm.itemSelect.collectionName === 'phuongxa') {
          vm.dataAction.thamChieu = {
            maMuc: vm.danhMucChaPhuongXa.maMuc,
            tenMuc: vm.danhMucChaPhuongXa.tenMuc,
            type: vm.danhMucChaPhuongXa.type
          }
        }
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddDanhMuc.validate()) {
          let filter = {
            collectionName: vm.itemSelect.collectionName,
            data: vm.dataAction,
            typeMode: 'C_DATA'
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm danh mục thành công')
            vm.getDanhMuc()
            vm.dialogAddDanhMuc = false
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            if (response && response.status == 409) {
              toastr.error('Mã danh mục đã tồn tại')
              return
            }
            toastr.error('Thêm danh mục thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      submitUpdateDanhMuc () {
        let vm = this
        vm.dataAction = {
          maMuc: vm.itemUpdate.maMuc,
          tenMuc: vm.tenMuc,
          tinhTrang: vm.statusCreate,
          type: vm.itemUpdate.type,
          nguoiTaoLap: {
            maSoID: '',
            tenDinhDanh: '',
            type: ''
          },
          thamChieu: {
            maMuc: '',
            tenMuc: '',
            type: ''
          },
          ghiChu: vm.ghiChu
        }
        if (vm.itemSelect.collectionName === 'quanhuyen') {
          vm.dataAction.thamChieu = {
            maMuc: vm.danhMucChaQuanHuyen.maMuc,
            tenMuc: vm.danhMucChaQuanHuyen.tenMuc,
            type: vm.danhMucChaQuanHuyen.type
          }
        }
        if (vm.itemSelect.collectionName === 'phuongxa') {
          vm.dataAction.thamChieu = {
            maMuc: vm.danhMucChaPhuongXa.maMuc,
            tenMuc: vm.danhMucChaPhuongXa.tenMuc,
            type: vm.danhMucChaPhuongXa.type
          }
        }
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddDanhMuc.validate()) {
          let filter = {
            collectionName: vm.itemSelect.collectionName,
            id: vm.itemUpdate.primKey,
            data: vm.dataAction,
            typeMode: 'C_DATA'
          }
          vm.$store.dispatch('collectionUpdate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Cập nhật danh mục thành công')
            vm.getDanhMuc()
            vm.dialogAddDanhMuc = false
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Cập nhật danh mục thất bại')
          })
        }
      },
      deleteDanhMuc (item) {
        let vm = this
        vm.$confirm({
          title: 'Xác nhận xóa dữ liệu',
          message: 'Bạn có chắc chắn xóa danh mục?',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: confirm => {
            if (confirm == true) {
              vm.loading = true
              let filter = {
                collectionName: vm.itemSelect.collectionName,
                id: item.primKey,
                typeMode: 'C_DATA'
              }
              vm.$store.dispatch('collectionDelete', filter).then(function (result) {
                vm.loading = false
                toastr.remove()
                toastr.success('Xóa danh mục thành công')
                vm.getDanhMuc()
              }).catch(function (response) {
                vm.loading = false
                toastr.remove()
                toastr.error('Xóa danh mục thất bại')
              })
            }
          }
        })
        
      },
      getDanhMuc (type) {
        let vm = this
        let thamChieu = ''
        if (type === 'reset') {
          vm.itemsDanhMuc = []
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
        }
        if (vm.loadingData) {
          return
        }
        if (vm.itemSelect.collectionName === 'quanhuyen') {
          thamChieu = vm.tinhThanhSearch
        }
        if (vm.itemSelect.collectionName === 'phuongxa') {
          thamChieu = vm.quanHuyenSearch
        }
        vm.loadingData = true
        let filter = {
          collectionName: vm.itemSelect.collectionName,
          data: {
            keyword: vm.dictName,
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'maMuc',
            orderTypes: 'asc',
            tinhTrang: !vm.statusFilter ? '1,0' : vm.statusFilter,
            thamChieu_maMuc: thamChieu
          },
          typeMode: 'C_DATA'
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsDanhMuc = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      getDanhMucCha (name, type, getData) {
        let vm = this
        let filter = {
          collectionName: name,
          data: {
            keyword: '',
            page: 0,
            size: 100,
            orderFields: 'maMuc',
            orderTypes: 'asc',
            tinhTrang: '1',
            thamChieu_maMuc: ''
          },
          typeMode: 'C_DATA'
        }
        if (name === 'quanhuyen') {
          if (type === 'search') {
            filter.data.thamChieu_maMuc = vm.tinhThanhSearch
          } else {
            filter.data.thamChieu_maMuc = vm.danhMucChaQuanHuyen['maMuc']
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (name === 'tinhthanh') {
            vm.itemsTinhThanh = response.content
            // if (vm.tinhThanhDefault) {
            //   vm.tinhThanhSearch = vm.tinhThanhDefault
            // }
          } else {
            if (type === 'search') {
              vm.itemsQuanHuyenSearch = response.content
              vm.quanHuyenSearch = vm.itemsQuanHuyenSearch[0]['maMuc']
              if (getData) {
                vm.getDanhMuc()
              }
            } else {
              vm.itemsQuanHuyen = response.content
              vm.danhMucChaPhuongXa = vm.itemsQuanHuyen.find(function (item) {
                item.maMuc === vm.quanHuyenSearch
              })
            }
          }
        }).catch(function () {
        })
      },
      changeTinhThanh () {
        let vm = this
        if (vm.itemSelect.collectionName === 'phuongxa' && vm.danhMucChaQuanHuyen) {
          setTimeout (function () {
            vm.getDanhMucCha('quanhuyen')
          }, 200)
        }
      },
      changeTinhThanhSearch () {
        let vm = this
        if (vm.itemSelect.collectionName === 'phuongxa' && vm.tinhThanhSearch) {
          setTimeout (function () {
            vm.getDanhMucCha('quanhuyen', 'search')
          }, 200)
        }
      },
      selectMenu(item, index) {
        let vm = this
        vm.selectedItem = item.value
        vm.itemSelect = item
        vm.dictName = ''
        vm.statusFilter = ''
        if (vm.itemSelect.collectionName === 'quanhuyen' || vm.itemSelect.collectionName === 'phuongxa') {
          vm.getDanhMucCha('tinhthanh')
          vm.tinhThanhSearch = vm.tinhThanhDefault
        }
        if (vm.itemSelect.collectionName === 'phuongxa') {
          setTimeout (function () {
            vm.getDanhMucCha('quanhuyen', 'search', 'getData')
          }, 50)
        } else {
          vm.getDanhMuc('reset')
        }
      },
      changePage(config) {
        let vm = this
        vm.page = config.page
        vm.getDanhMuc()
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
      },
      pickFileImport () {
        document.getElementById('file_import').value = ''
        document.getElementById('file_import').click()
      },
      uploadFileImport () {
        let vm = this
        let files = $('#file_import')[0].files
        let file = files[0]
        vm.loading = true
        let filter = {
          file: file,
          danhMuc: 'donvihanhchinh'
        }
        vm.$store.dispatch('importDanhMuc', filter).then(function(result) {
          vm.loading = false
          toastr.remove()
          toastr.success('Import dữ liệu thành công')
        }).catch(function () {
          vm.loading = false
          toastr.remove()
          toastr.error('Import dữ liệu thất bại')
        })
      },
    }
  }
</script>

<style lang="scss">
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
