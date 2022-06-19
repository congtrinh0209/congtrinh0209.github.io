<template>
    <div>
        <v-row align-content="center">
            <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
                <div class="title-page d-inline-block pt-2">QUẢN LÝ ĐƠN VỊ</div>
                <v-btn
                  class="mx-0 mt-2"
                  small
                  color="primary"
                  @click="showAdvanceSearch()"
                  style="float: right"
                  >
                  <v-icon size="18" v-if="!advanceSearch">mdi-filter-variant-plus</v-icon>
                  <v-icon size="18" v-else>mdi-filter-variant</v-icon>
                  &nbsp;
                  Tìm kiếm nâng cao
                </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="my-0 py-0 mb-2">
                <label>Tìm kiếm theo từ khóa</label>
                <v-text-field
                    class="input-form"
                    v-model="keywordSearch"
                    solo
                    dense
                    clearable
                    hide-details="auto"
                    placeholder="Nhập tên, mã cơ quan đơn vị"
                    @keyup.enter="getDanhMuc()"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0 mb-2">
                <label>Tình trạng hoạt động</label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  :items="itemsTinhTrang"
                  v-model="tinhTrangHoatDongSearch"
                  item-text="tenMuc"
                  item-value="maMuc"
                  dense
                  solo
                  hide-details="auto"
                  clearable
                  @change="getDanhMuc()"
                >
                </v-autocomplete>
            </v-col>
            <v-row v-if="advanceSearch" align-content="center" class="mx-0 my-0">
              <v-col cols="12" md="3" class="my-0 py-0">
                  <label>Số Quyết định thành lập của tổ chức</label>
                  <v-text-field
                      class="input-form"
                      v-model="soQuyetDinhSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="my-0 py-0">
                  <label>Số giấy đăng ký hoạt động</label>
                  <v-text-field
                      class="input-form"
                      v-model="soDangKyHoatDongSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="my-0 py-0 mb-3">
                  <label>Mã số ngân sách</label>
                  <v-text-field
                      class="input-form"
                      v-model="maNganSachSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="my-0 py-0 mb-3">
                  <label>Người đại diện</label>
                  <v-text-field
                      class="input-form"
                      v-model="nguoiDaiDienSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
            </v-row>
        </v-row>
        <v-row justify="center" class="mt-0">
            <v-col cols="12" md="6" class="py-4">
              <v-btn
                class="mx-0"
                small
                color="primary"
                @click="showForm()"
                >
                <v-icon size="18">mdi-plus</v-icon>&nbsp;
                Thêm mới
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="d-flex align-center justify-end">
                <v-btn color="primary" small class="mx-0 text-white" @click="getDanhMuc()">
                  <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                  Tìm kiếm
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-card
              class="mx-auto pa-3"
              outlined
              flat
            >
                <v-flex class="mb-2">
                    <strong>Tổng số: {{ total }}</strong>
                </v-flex>
                
                <v-data-table
                    :headers="headers"
                    :items="itemsDonVi"
                    :items-per-page="itemsPerPage"
                    item-key="primKey"
                    hide-default-footer
                    class="elevation-1 mt-2"
                    no-data-text="Không có"
                    :loading="loadingData"
                    loading-text="Đang tải... "
                    @click:row="showThongTinDonVi"
                >
                    <template v-slot:item.index="{ item, index }">
                        <div>{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                    </template>
                    <template v-slot:item.danhBaLienLac="{ item }">
                        <div>
                            <v-icon size="16">mdi-phone-in-talk-outline</v-icon>&nbsp; {{ item.danhBaLienLac['soDienThoai'] }}
                        </div>
                        <div>
                            <v-icon size="16">mdi-email-fast-outline</v-icon>&nbsp; {{ item.danhBaLienLac['thuDienTu'] }}
                        </div>
                    </template>
                    <template v-slot:item.tinhTrangToChuc="{ item }">
                        <div :style="getColor(item.tinhTrangToChuc)">
                          {{ item.tinhTrangToChuc['tenMuc'] }}
                        </div>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <div>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="showEditDonVi(item)" color="blue" text icon class=" mr-3" v-bind="attrs" v-on="on">
                                <v-icon size="22">mdi-pencil</v-icon>
                              </v-btn>
                            </template>
                            <span>Cập nhật thông tin</span>
                          </v-tooltip>
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="deleteDonVi(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                                <v-icon size="22">mdi-close</v-icon>
                              </v-btn>
                            </template>
                            <span>Xóa</span>
                          </v-tooltip>
                        </div>
                    </template>
                </v-data-table>
                <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>
import Pagination from './Pagination.vue'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    components: {
      Pagination
    },
    props: ['type'],
    data() {
      return {
        selected: [],
        keywordSearch: '',
        loadingData: false,
        itemsTinhTrang: [],
        itemsTrangThai: [
          {tenMuc: 'Đang sử dụng', maMuc: '2'},
          {tenMuc: 'Đánh dấu xóa', maMuc: '1'}
        ],
        tinhTrangSearch: '',
        trangThaiSearch: '',
        headers: [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index'
          },
          {
              sortable: false,
              text: 'Mã đơn vị',
              align: 'left',
              value: 'maHanhChinh'
          },
          {
              sortable: false,
              text: 'Tên đơn vị',
              align: 'left',
              value: 'tenGoi'
          },
          {
              sortable: false,
              text: 'Thông tin liên hệ',
              align: 'left',
              value: 'danhBaLienLac'
          },
          {
              sortable: false,
              text: 'Tình trạng hoạt động',
              align: 'left',
              value: 'tinhTrangToChuc'
          },
          {
              sortable: false,
              text: 'Thao tác',
              align: 'center',
              value: 'action'
          },
        ],
        itemsDonVi: [],
        page: 0,
        itemsPerPage: 15,
        total: 0,
        pageCount: 0,
        advanceSearch: false,
        soDangKyHoatDongSearch: '',
        soQuyetDinhSearch: '',
        maNganSachSearch: '',
        nguoiDaiDienSearch: ''
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
      vm.getDanhMuc('reset')
      vm.getDanhMucSearch('tinhtranghoatdong')
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 0)
      }
    },
    methods: {
      showForm () {
        let vm = this
        vm.$router.push({ path: '/don-vi/0' })
      },
      showEditDonVi (item) {
        let vm = this
        vm.$router.push({ path: '/don-vi/' + item.primKey })
      },
      showThongTinDonVi (item) {
        let vm = this
        vm.$router.push({ path: '/thong-tin-don-vi/' + item.primKey })
      },
      deleteDonVi (item) {
        let vm = this
        vm.$store.commit('SET_SHOWCONFIRM', true)
        let confirm = {
          auth: false,
          title: 'Xóa cơ quan, đơn vị',
          message: 'Bạn có chắc chắn muốn xóa "' + item.tenGoi + '"',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: () => {
            toastr.success('Xóa đơn vị thành công')
          }
        }
        vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
      },
      getDanhMuc (type) {
        let vm = this
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
          vm.keywordSearch = ''
          vm.tinhTrangHoatDongSearch = ''
          vm.soDangKyHoatDongSearch = ''
          vm.soQuyetDinhSearch = ''
          vm.maNganSachSearch = ''
          vm.nguoiDaiDienSearch = ''
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'donvi',
          data: {
            keyword: vm.keywordSearch,
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'tenGoi',
            orderTypes: 'asc',
            tinhTrangHoatDong: vm.tinhTrangHoatDongSearch,
            soGiayDangKyHoatDong: vm.soDangKyHoatDongSearch,
            soQuyetDinh: vm.soQuyetDinhSearch,
            maSoNganSach: vm.maNganSachSearch,
            nguoiDaiDien: vm.nguoiDaiDienSearch
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsDonVi = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          // mock-data
          vm.itemsDonVi = vm.mockData.danhSachDonVi
          vm.pageCount = 1
          vm.total = vm.itemsDonVi.length
          // 
          vm.loadingData = false
        })
      },
      getDanhMucSearch (name) {
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
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsTinhTrang = response.content
        }).catch(function () {
        })
      },
      getColor (tinhTrangToChuc) {
        let status = tinhTrangToChuc ? String(tinhTrangToChuc['maMuc']) : '0'
        switch(status) {
          case '1':
              return 'color: green'
          case '2':
              return 'color: red'
          default:
            return 'color: black'
        }
      },
      dateLocale (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      changePage (config) {
        let vm = this
        vm.page = config.page
        vm.getDanhMuc()
      },
      showAdvanceSearch () {
        let vm = this
        vm.advanceSearch = !vm.advanceSearch
        if (vm.advanceSearch) {
          
        } else {
          vm.soDangKyHoatDongSearch = ''
          vm.soQuyetDinhSearch = ''
          vm.maNganSachSearch = ''
          vm.nguoiDaiDienSearch = ''
        }
      },
    }
}
</script>