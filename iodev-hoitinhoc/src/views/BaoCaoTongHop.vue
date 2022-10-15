<template>
  <v-card
    class="mx-auto pa-3"
    flat
    id="table-ds-baocao"
  >
    <v-layout wrap>
      <v-flex class="bao-cao-2 py-2 pt-0">
        <div>
          <v-row justify="end" class="mt-0 mb-0 mx-0" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                {{dynamicType}}
              </div>
              <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex align-center justify-end py-0 px-0" style="max-width: 150px;">
              <v-btn
                depressed
                class="mx-0"
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
          </v-row>
          <div v-if="advanceSearch">
            <v-form
              ref="formTimKiem"
              lazy-validation
            >
              <v-row align-content="center" class="my-0 mt-2">
                <v-col cols="12" :md="type == 'tra-cuu' ? 3 : 4" class="py-0 mb-2">
                  <label>Kỳ báo cáo</label>
                  <v-autocomplete
                    class="flex input-form mt-2"
                    hide-no-data
                    :items="kyBaoCaoItems"
                    v-model="kyBaoCaoSearch"
                    item-text="tenMuc"
                    item-value="maMuc"
                    dense
                    solo
                    hide-details="auto"
                    clearable
                    return-object
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" :md="type == 'tra-cuu' ? 3 : 4" class="py-0 mb-2">
                  <label>Năm báo cáo</label>
                  <v-autocomplete
                    class="flex input-form mt-2"
                    hide-no-data
                    :items="namBaoCaoItems"
                    v-model="namBaoCaoSearch"
                    item-text="tenMuc"
                    item-value="maMuc"
                    dense
                    solo
                    hide-details="auto"
                    clearable
                    return-object
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" :md="type == 'tra-cuu' ? 3 : 4" class="my-0 py-0 mb-2">
                  <label>Mã báo cáo</label>
                  <v-text-field
                      class="input-form mt-2"
                      v-model="maBaoCaoSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3" class="py-0 mb-2" v-if="type == 'tra-cuu'">
                    <label>Tình trạng</label>
                    <v-autocomplete
                      class="flex input-form mt-2"
                      hide-no-data
                      :items="trangThaiItems"
                      v-model="trangThaiSearch"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      clearable
                      return-object
                    >
                    </v-autocomplete>
                </v-col>

                <v-col cols="12"  class="py-0 mb-2">
                    <label>Loại báo cáo</label>
                    <v-autocomplete
                      class="flex input-form mt-2"
                      hide-no-data
                      :items="loaiBaoCaoItems"
                      v-model="loaiBaoCaoSearch"
                      item-text="tenGoi"
                      item-value="maMauBaoCao"
                      dense
                      solo
                      hide-details="auto"
                      clearable
                      return-object
                    >
                      <template v-slot:selection="data">
                        <span>{{data.item.maMauBaoCao}}</span>
                        <span>&nbsp;-&nbsp;</span>
                        <span>{{data.item.tenGoi}}</span>
                      </template>
                      <template v-slot:item="data">
                        <span>{{data.item.maMauBaoCao}}</span>
                        <span>&nbsp;-&nbsp;</span>
                        <span>{{data.item.tenGoi}}</span>
                      </template>
                    </v-autocomplete>
                </v-col>
                <v-col cols="4" class="py-0 mb-2">
                    <label>Đơn vị được giao</label>
                    <v-autocomplete
                      class="flex input-form mt-2"
                      hide-no-data
                      :items="donViDuocGiaoItems"
                      v-model="donViDuocGiaoSearch"
                      item-text="tenGoi"
                      item-value="maHanhChinh"
                      dense
                      solo
                      hide-details="auto"
                      clearable
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="8" class="py-0 mb-2">
                  <label>Hạn xử lý</label>
                  <div class="layout wrap mb-3 mt-2">
                    <v-layout wrap style="width: calc(100% - 200px);">
                      <v-flex xs6 class="pr-2">
                        <v-menu
                          ref="menuDate1"
                          v-model="menuDate1"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              class="input-form"
                              v-model="fromReceiveDateFormatted"
                              persistent-hint
                              append-icon="mdi-calendar"
                              @blur="fromReceiveDate = parseDate(fromReceiveDateFormatted)"
                              placeholder="Từ ngày"
                              hide-details
                              solo
                              dense
                              v-bind="attrs"
                              v-on="on"
                              clearable
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker :max="toReceiveDateFormatted ? getMinMax(toReceiveDateFormatted) : null" v-model="fromReceiveDate" locale="vi" :first-day-of-week="1" no-title @input="changeDate('1')"></v-date-picker>
                        </v-menu>
                      </v-flex>
                      <v-flex xs6 class="pl-2">
                        <v-menu
                          ref="menuDate2"
                          v-model="menuDate2"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              class="input-form"
                              v-model="toReceiveDateFormatted"
                              persistent-hint
                              append-icon="mdi-calendar"
                              @blur="toReceiveDate = parseDate(toReceiveDateFormatted)"
                              placeholder="Đến ngày"
                              hide-details
                              solo
                              dense
                              v-bind="attrs"
                              v-on="on"
                              clearable
                            ></v-text-field>
                            </template>
                          <v-date-picker :min="fromReceiveDateFormatted ? getMinMax(fromReceiveDateFormatted) : null" v-model="toReceiveDate" locale="vi" :first-day-of-week="1" no-title @input="changeDate('2')"></v-date-picker>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <v-row class="my-0">
            <v-col cols="12" class="d-flex align-center justify-end py-0 pb-2 my-0" v-if="advanceSearch">
              <v-btn color="primary" depressed small class="mx-0 text-white" @click="getDanhSachBaoCao()">
                <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                Tìm kiếm
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="my-0 mb-3">
            <v-col cols="12" class="pt-0">
              <v-data-table
                :headers="headers"
                :items="danhSachBaoCao"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingData"
                loading-text="Đang tải... "
              >
                  <template v-slot:item.index="{ item, index }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                  </template>
                  <template v-slot:item.maBaoCao="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ item.maBaoCao }}</div>
                  </template>
                  <template v-slot:item.tenBaoCao="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ item.tenBaoCao }}</div>
                  </template>
                  <template v-slot:item.kyBaoCao="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">
                      <span>{{ item.kyBaoCao.tenMuc }}</span>
                      <span v-if="item.nam"> - {{ item.nam }}</span>
                    </div>
                  </template>
                  <template v-slot:item.coQuanThucHien="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ item.coQuanThucHien.tenGoi }}</div>
                  </template>
                  <template v-slot:item.thoiGianTao="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ dateLocale(item.thoiGianTao) }}</div>
                  </template>
                  <template v-slot:item.hanXuLy="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ dateLocale(item.hanXuLy) }}</div>
                  </template>
                  <template v-slot:item.tinhTrang="{ item }">
                    <div @click.stop="xemChiTietBaoCao(item)">{{ item.tinhTrang.tenMuc }}</div>
                  </template>
                  <template v-slot:item.action="{ item }">                   
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click.stop="xemChiTietBaoCao(item)" color="primary" text icon class="" v-bind="attrs" v-on="on">
                          <v-icon size="20">mdi-arrow-right-bold-circle-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Chi tiết báo cáo</span>
                    </v-tooltip>

                    <v-tooltip top v-if="isAdmin || checkRole('THEMMOIBAOCAO')">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click.stop="xoaBaoCao(item)" color="red" text icon class="ml-2" v-bind="attrs" v-on="on">
                          <v-icon size="18">mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Xóa báo cáo</span>
                    </v-tooltip>
                  </template>
              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :total="total" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
            </v-col>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
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
    name: 'BaoCao',
    components: {
      Pagination
    },
    props: ['type'],
    data() {
      return {
        dynamicType: '',
        selected: [],
        keywordSearch: '',
        loadingData: false,
        danhSachBaoCao: [],
        maBaoCaoSearch: '',
        kyBaoCaoItems: [],
        kyBaoCaoSearch: '',
        donViDuocGiaoItems: [],
        donViDuocGiaoSearch: '',
        loaiBaoCaoItems: [],
        loaiBaoCaoSearch: '',
        trangThaiItems: [],
        trangThaiSearch: '',
        namBaoCaoSearch: '',
        headers: [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index'
          },
          {
              sortable: false,
              text: 'Mã báo cáo',
              align: 'left',
              value: 'maBaoCao',
              class: 'th-center',
              width: 120
          },
          {
              sortable: false,
              text: 'Loại báo cáo',
              align: 'left',
              value: 'tenBaoCao',
              class: 'th-center'
          },
          {
              sortable: false,
              text: 'Kỳ, năm báo cáo',
              align: 'left',
              value: 'kyBaoCao',
              class: 'th-center',
              width: 130
          },
          {
              sortable: false,
              text: 'Đơn vị được giao',
              align: 'left',
              value: 'coQuanThucHien',
              class: 'th-center',
              width: 150
          },
          {
              sortable: false,
              text: 'Ngày tạo',
              align: 'left',
              value: 'thoiGianTao',
              class: 'th-center'
          },
          {
              sortable: false,
              text: 'Hạn xử lý',
              align: 'left',
              value: 'hanXuLy',
              class: 'th-center'
          },
          {
              sortable: false,
              text: 'Tình trạng',
              align: 'left',
              value: 'tinhTrang',
              class: 'th-center',
              width: 90
          },
          {
              sortable: false,
              text: 'Thao tác',
              align: 'center',
              value: 'action',
              class: 'th-center',
              width: 100
          },
        ],
        page: 0,
        itemsPerPage: 15,
        total: 0,
        pageCount: 0,
        advanceSearch: false,
        selectedItem: '1',
        itemSelect: '',
        items: [
          { text: 'Báo cáo xử lý', value: '1', collectionName: 'Báo cáo xử lý'},
          { text: 'Báo cáo chờ duyệt', value: '2', collectionName: 'Báo cáo chờ duyệt' },
          { text: 'Tổng hợp báo cáo', value: '3', collectionName: 'Tổng hợp báo cáo' },
          { text: 'Kỳ báo cáo', value: '4', collectionName: 'Kỳ báo cáo' }
        ],
        menuDate1: false,
        menuDate2: false,
        fromReceiveDate: '',
        fromReceiveDateFormatted: '',
        toReceiveDate: '',
        toReceiveDateFormatted: '',
      }
    },
    created () {
      let vm = this
      if (!vm.isAdmin && !vm.checkRole('XEMBAOCAODONVI') && !vm.checkRole('XEMTATCABAOCAO')) {
        vm.$router.push({ path: '/dang-nhap'})
        return
      }
      if (vm.type === 'bao-cao-moi') {
        vm.dynamicType = "Báo cáo tạo mới"
      }
      if (vm.type === 'cho-xu-ly') {
        vm.dynamicType = "Báo cáo chờ xử lý"
      }
      if (vm.type === 'xu-ly-lai') {
        vm.dynamicType = "Báo cáo xử lý lại"
      }
      if (vm.type === 'cho-duyet') {
        vm.dynamicType = "Báo cáo chờ duyệt"
      }
      if (vm.type === 'tra-cuu') {
        vm.dynamicType = "Tra cứu báo cáo"
      }
      if (vm.type === 'tong-hop') {
        vm.dynamicType = "Tổng hợp báo cáo"
      }

      vm.$store.commit('SET_INDEXTAB', 0)
      vm.danhSachBaoCao = []
      vm.getDanhSachBaoCao('reset')
      vm.getDanhMuc('KYBAOCAO')
      vm.getDanhMuc('TINHTRANGXULY')
      vm.getDanhSachMauBaoCao()
      vm.getDanhSachDonVi()
    },
    computed: {
      namBaoCaoItems() {
        let arr = [];
        let year = new Date().getFullYear();
        for (let i = 0; i <= 19; i++) {
          arr.push({ tenMuc: "Năm " + (year - i), maMuc: year - i });
        }
        return arr;
      }
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        if (vm.type === 'bao-cao-moi') {
          vm.dynamicType = "Báo cáo tạo mới"
        }
        if (vm.type === 'cho-xu-ly') {
          vm.dynamicType = "Báo cáo chờ xử lý"
        }
        if (vm.type === 'xu-ly-lai') {
          vm.dynamicType = "Báo cáo xử lý lại"
        }
        if (vm.type === 'cho-duyet') {
          vm.dynamicType = "Báo cáo chờ duyệt"
        }
        if (vm.type === 'tra-cuu') {
          vm.dynamicType = "Tra cứu báo cáo"
        }
        if (vm.type === 'tong-hop') {
          vm.dynamicType = "Tổng hợp báo cáo"
        }
        vm.$store.commit('SET_INDEXTAB', 2)
      },
      type (val) {
        let vm = this
        vm.resetFormTimKiem()
        vm.advanceSearch = false
        vm.getDanhSachBaoCao('reset')
      }
    },
    methods: {
      getDanhSachBaoCao (type) {
        let vm = this
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
          vm.resetFormTimKiem()
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'baocao',
          data: {
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'thoiGianTao',
            orderTypes: 'asc',
            kyBaoCao_maMuc: vm.kyBaoCaoSearch ? vm.kyBaoCaoSearch['maMuc'] : '',
            namBaoCao: vm.namBaoCaoSearch ? vm.namBaoCaoSearch['maMuc'] : '',
            maBaoCao: vm.maBaoCaoSearch,
            tinhTrang_maMuc: vm.trangThaiSearch ? vm.trangThaiSearch['maMuc'] : '',
            mauBaoCao_maMauBaoCao: vm.loaiBaoCaoSearch ? vm.loaiBaoCaoSearch['maMauBaoCao'] : '',
            coQuanThucHien_maHanhChinh: vm.donViDuocGiaoSearch ? vm.donViDuocGiaoSearch['maHanhChinh'] : '',
            tuNgay: vm.fromReceiveDateFormatted ? vm.parseDate(vm.fromReceiveDateFormatted) : '',
            denNgay: vm.toReceiveDateFormatted ? vm.parseDate(vm.toReceiveDateFormatted) : ''
          }
        }
        if (vm.type !== 'tra-cuu') {
          if (vm.type === 'cho-xu-ly') {
            filter.data.tinhTrang_maMuc = "PROCESSING"
          }
          if (vm.type === 'xu-ly-lai') {
            filter.data.tinhTrang_maMuc = "REPROCESSING"
          }
          if (vm.type === 'cho-duyet') {
            filter.data.tinhTrang_maMuc = "APPROVAL"
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.danhSachBaoCao = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      xemChiTietBaoCao (item) {
        let vm = this
        vm.$router.push({ path: '/bao-cao/' + vm.type + '/' + item.primKey})
      },
      xoaBaoCao (item) {
        let vm = this
        vm.$store.commit('SET_SHOWCONFIRM', true)
        let confirm = {
          auth: false,
          title: 'Xóa báo cáo',
          message: 'Bạn có chắc chắn muốn xóa báo cáo này',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: () => {
            let filter = {
              collectionName: 'baocao',
              id: item.primKey
            }
            vm.loading = true
            vm.$store.dispatch('collectionDelete', filter).then(function (result) {
              vm.loading = false
              toastr.remove()
              toastr.success('Xóa báo cáo thành công')
              vm.getDanhSachBaoCao()
            }).catch(function (response) {
              vm.loading = false
              toastr.remove()
              toastr.error('Xóa báo cáo thất bại')
            })
          }
        }
        vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
      },
      getDanhMuc (collection) {
        let vm = this
        let filter = {
          collectionName: 'dulieudanhmuc',
          data: {
            orderFields: 'maMuc',
            orderTypes: 'asc',
            page: 0,
            size: 1000,
            danhMuc_maDanhMuc: collection
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (collection === 'KYBAOCAO') {
            vm.kyBaoCaoItems = response.content
          }
          if (collection === 'TINHTRANGXULY') {
            vm.trangThaiItems = response.content
          }
        }).catch(function () {
        })
      },
      getDanhSachMauBaoCao () {
        let vm = this
        let filter = {
          collectionName: 'maubaocao',
          data: {
            orderFields: 'maMauBaoCao',
            orderTypes: 'asc',
            page: 0,
            size: 1000
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.loaiBaoCaoItems = response.content
        }).catch(function () {
        })
      },
      getDanhSachDonVi () {
        let vm = this
        let filter = {
          collectionName: 'coquandonvi',
          data: {
            orderFields: 'tenGoi',
            orderTypes: 'asc',
            page: 0,
            size: 1000
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.donViDuocGiaoItems = response.content
        }).catch(function () {
        })
      },
      getColor (danhTinhDienTu) {
        let status = danhTinhDienTu[0] ? String(danhTinhDienTu[0].tinhTrangSuDungTaiKhoan['maMuc']) : '0'
        switch(status) {
          case '1':
              return 'color: blue'
          case '2':
              return 'color: green'
          case '3':
            return 'color: orange'
          case '4':
            return 'color: red'
          default:
            return 'color: black'
        }
      },
      dateLocale (dateInput) {
        if (!dateInput) {
          return ''
        }
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      changePage (config) {
        let vm = this
        vm.page = config.page
        vm.getDanhSachBaoCao()
      },
      showAdvanceSearch () {
        let vm = this
        vm.advanceSearch = !vm.advanceSearch
      },
      resetFormTimKiem () {
        let vm = this
        if (vm.$refs.formTimKiem) {
          vm.$refs.formTimKiem.reset()
          vm.$refs.formTimKiem.resetValidation()
        }        
      },
      changeDate(index) {
        let vm = this
        vm.menuDate1 = false
        if (index === '1') {
          vm.fromReceiveDateFormatted = vm.formatDate(vm.fromReceiveDate)
        } else if (index === '2') {
          vm.toReceiveDateFormatted = vm.formatDate(vm.toReceiveDate)
        }
      },
      formatDate(date) {
        if (!date) return ''
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate(date) {
        if (!date) return ''
        if (String(date).indexOf('/') > 0) {
          const [day, month, year] = date.split('/')
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        } else if (String(date).indexOf('-') > 0) {
          const [day, month, year] = date.split('-')
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        } else {
          let date1 = new Date(Number(date))
          return `${date1.getFullYear()}-${(date1.getMonth() + 1).toString().padStart(2, '0')}-${date1.getDate().toString().padStart(2, '0')}`
        }
      },
      getMinMax (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${year}-${month}-${day}`
      },
    }
}
</script>
<style lang="scss">
  #table-ds-baocao table tr td {
    cursor: pointer;
  }
  .bao-cao-1 {
    width: 300px;
    max-width: 235px;
    /* border-bottom: 1px solid #DDDDDD; */
  }
  .bao-cao-1 .v-list {
    padding-top: 0px;
  }
  // .bao-cao-2 {
  //   width: calc(100% - 300px);
  //   padding: 0 10px;
  // }
  .nav-content {
    border-right: 1px solid #DDDDDD;
    box-sizing: border-box;
    // border-radius: 7px;
    height: 100%;
  }
</style>