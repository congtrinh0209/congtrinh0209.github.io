<template>
    <div>
        <v-row align-content="center">
            <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
                <div class="title-page d-inline-block pt-2">QUẢN LÝ CÁ NHÂN</div>
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
            <v-col v-if="!advanceSearch" cols="12" md="4" class="my-0 py-0 mb-2">
                <label>Tìm kiếm theo từ khóa</label>
                <v-text-field
                    class="input-form mt-2"
                    v-model="keywordSearch"
                    solo
                    dense
                    clearable
                    hide-details="auto"
                    placeholder="Nhập họ tên, số cmnd/ cccd, số điện thoại"
                    @keyup.enter="getDanhMuc()"
                ></v-text-field>
            </v-col>
            <v-col v-if="advanceSearch" cols="12" md="4" class="my-0 py-0 mb-2">
                <label>Họ tên công dân</label>
                <v-text-field
                    class="input-form mt-2"
                    v-model="applicantNameSearch"
                    solo
                    dense
                    clearable
                    hide-details="auto"
                    @keyup.enter="getDanhMuc()"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0 mb-2">
                <label>Trạng thái thông tin</label>
                <v-autocomplete
                  class="flex input-form mt-2"
                  hide-no-data
                  :items="itemsTrangThai"
                  v-model="trangThaiSearch"
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
            <v-col cols="12" md="4" class="py-0 mb-2">
                <label>Tình trạng tài khoản</label>
                <v-autocomplete
                  class="flex input-form mt-2"
                  hide-no-data
                  :items="itemsTinhTrang"
                  v-model="tinhTrangSearch"
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
              <v-col cols="12" md="4" class="my-0 py-0">
                  <label>Số CMND/CCCD</label>
                  <v-text-field
                      class="input-form"
                      v-model="applicantIdSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="my-0 py-0">
                  <label>Điện thoại</label>
                  <v-text-field
                      class="input-form"
                      v-model="contactSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="my-0 py-0 mb-3">
                  <label>Email</label>
                  <v-text-field
                      class="input-form"
                      v-model="emailSearch"
                      solo
                      dense
                      clearable
                      hide-details="auto"
                      @keyup.enter="getDanhMuc()"
                  ></v-text-field>
              </v-col>
              <!--  -->
              <!-- <v-col cols="12" class="py-0 mb-2">
                  <label>Địa chỉ thường trú</label>
                  <v-text-field
                    class="input-form"
                    v-model="diaChiThuongTruCuThe"
                    solo
                    dense
                    clearable
                    max
                    hide-details="auto"
                    placeholder="Số nhà, đường, phố, xóm..."
                  ></v-text-field>
              </v-col> -->
              <v-col cols="12" md="4" class="py-0 mb-2">
                  <label>Địa chỉ thường trú: Tỉnh/ thành</label>
                  <v-autocomplete
                    class="flex input-form"
                    hide-no-data
                    :items="itemsTinhThanh"
                    v-model="thuongTruTinhThanh"
                    item-text="tenMuc"
                    item-value="maMuc"
                    dense
                    solo
                    hide-details="auto"
                    return-object
                    clearable
                  >
                  </v-autocomplete>
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                  <label>Quận / Huyện</label>
                  <v-autocomplete
                    class="flex input-form"
                    hide-no-data
                    :items="itemsThuongTruQuanHuyen"
                    v-model="thuongTruQuanHuyen"
                    item-text="tenMuc"
                    item-value="maMuc"
                    dense
                    solo
                    hide-details="auto"
                    return-object
                    clearable
                  >
                  </v-autocomplete>
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                  <label>Phường / Xã</label>
                  <v-autocomplete
                    class="flex input-form"
                    hide-no-data
                    :items="itemsThuongTruPhuongXa"
                    v-model="thuongTruPhuongXa"
                    item-text="tenMuc"
                    item-value="maMuc"
                    dense
                    solo
                    hide-details="auto"
                    return-object
                    clearable
                  >
                  </v-autocomplete>
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
                        <strong>Số lượng: {{ total }}</strong>
                    </v-flex>
                    
                    <v-data-table
                        :headers="headers"
                        :items="itemsApplicant"
                        :items-per-page="itemsPerPage"
                        item-key="primKey"
                        hide-default-footer
                        class="elevation-1 mt-2"
                        no-data-text="Không có"
                        :loading="loadingData"
                        loading-text="Đang tải... "
                    >
                        <template v-slot:item.index="{ item, index }">
                            <div>{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                        </template>
                        <template v-slot:item.hoVaTen="{ item }">
                            <div class="font-weight-bold">
                                {{ item.hoVaTen }}
                            </div>
                            <div>
                                {{ dateLocale(item.ngaySinh) }}
                            </div>
                        </template>
                        <template v-slot:item.danhBaLienLac="{ item }">
                            <div>
                                <v-icon size="16">mdi-phone-in-talk-outline</v-icon>&nbsp; {{ item.danhBaLienLac['soDienThoai'] }}
                            </div>
                            <div>
                                <v-icon size="16">mdi-email-fast-outline</v-icon>&nbsp; {{ item.danhBaLienLac['thuDienTu'] }}
                            </div>
                        </template>
                        <template v-slot:item.diaChiThuongTru="{ item }">
                            <div style="width: 300px;max-width: 300px">
                              <span v-if="item['diaChiThuongTru']['soNhaChiTiet']">{{item['diaChiThuongTru']['soNhaChiTiet']}}, </span>                              
                              {{item['diaChiThuongTru']['phuongXa']['tenMuc']}} - {{item['diaChiThuongTru']['quanHuyen']['tenMuc']}} - {{item['diaChiThuongTru']['tinhThanh']['tenMuc']}}
                            </div>
                        </template>
                        <template v-slot:item.trangThaiDuLieu="{ item }">
                            <div :style="item.trangThaiDuLieu.maMuc == 2 ? 'color: green' : 'color: red'">
                              {{ item.trangThaiDuLieu.tenMuc }}
                            </div>
                        </template>
                        <template v-slot:item.danhTinhDienTu="{ item }">
                            <div :style="getColor(item.danhTinhDienTu)">
                              {{ getStatus(item.danhTinhDienTu) }}
                            </div>
                        </template>
                        <template v-slot:item.vaiTroSuDung="{ item }">
                          <div>
                            {{ vaiTro(item.vaiTroSuDung) }}
                          </div>
                        </template>
                        <template v-slot:item.action="{ item }">
                            <div style="width: 95px">
                                <router-link
                                    :to="'/thong-tin-ca-nhan/' + item.primKey"
                                    custom
                                >
                                    <span>Xem chi tiết</span>
                                </router-link>
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
                text: 'Họ tên / ngày sinh',
                align: 'left',
                value: 'hoVaTen'
            },
            {
                sortable: false,
                text: 'CMND/CCCD',
                align: 'left',
                value: 'maSoCaNhan'
            },
            {
                sortable: false,
                text: 'Điện thoại/ Email',
                align: 'left',
                value: 'danhBaLienLac'
            },
            {
                sortable: false,
                text: 'Địa chỉ thường chú',
                align: 'left',
                value: 'diaChiThuongTru'
            },
            {
                sortable: false,
                text: 'Trạng thái thông tin',
                align: 'left',
                value: 'trangThaiDuLieu'
            },
            {
                sortable: false,
                text: 'Tình trạng tài khoản',
                align: 'left',
                value: 'danhTinhDienTu'
            },
            {
                sortable: false,
                text: 'Vai trò sử dụng',
                align: 'left',
                value: 'vaiTroSuDung'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'center',
                value: 'action'
            },
        ],
        itemsApplicant: [],
        page: 0,
        itemsPerPage: 15,
        total: 0,
        chuaCapTaiKhoan: false,
        daCapTaiKhoan: false,
        pageCount: 0,
        advanceSearch: false,
        applicantNameSearch: '',
        applicantIdSearch: '',
        contactSearch: '',
        emailSearch: '',
        itemsTinhThanh: [],
        diaChiThuongTruCuThe: '',
        thuongTruTinhThanh: '',
        itemsThuongTruQuanHuyen: [],
        thuongTruQuanHuyen: '',
        itemsThuongTruPhuongXa: [],
        thuongTruPhuongXa: '',
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 2)
      vm.getDanhMuc('reset')
      vm.getDanhMucTinhThanh()
      vm.getDanhMucSearch('tinhtrangsudungtaikhoan')
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 2)
      },
      thuongTruTinhThanh (val) {
        let vm = this
        if (!val) {
          vm.itemsThuongTruQuanHuyen = []
          vm.thuongTruQuanHuyen = ''
          vm.itemsThuongTruPhuongXa = []
          vm.thuongTruPhuongXa = ''
        }
        vm.changeTinhThanh('thuongtru')
      },
      thuongTruQuanHuyen (val) {
        let vm = this
        if (!val) {
          vm.itemsThuongTruPhuongXa = []
          vm.thuongTruPhuongXa = ''
        }
        vm.changeQuanHuyen('thuongtru')
      },
    },
    methods: {
      showForm () {
        let vm = this
        vm.$router.push({ path: '/ca-nhan/0' })
      },
      getDanhMuc (type) {
        let vm = this
        if (type === 'reset') {
          vm.keywordSearch = ''
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
          vm.applicantNameSearch = ''
          vm.applicantIdSearch = ''
          vm.contactSearch = ''
          vm.emailSearch = ''
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'canhan',
          data: {
            keyword: vm.keywordSearch,
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'hoVaTen',
            orderTypes: 'asc',
            danhTinhDienTu_tinhTrangSuDungTaiKhoan_maMuc: vm.tinhTrangSearch,
            trangThaiDuLieu_maMuc: vm.trangThaiSearch,

            hoVaTen: vm.applicantNameSearch,
            maSoCaNhan: vm.applicantIdSearch,
            danhBaLienLac_soDienThoai: vm.contactSearch,
            danhBaLienLac_thuDienTu: vm.emailSearch,

            diaChiThuongTru_phuongXa_maMuc: vm.thuongTruPhuongXa ? vm.thuongTruPhuongXa['maMuc'] : '',
            diaChiThuongTru_quanHuyen_maMuc: vm.thuongTruQuanHuyen ? vm.thuongTruQuanHuyen['maMuc'] : '',
            diaChiThuongTru_tinhThanh_maMuc: vm.thuongTruTinhThanh ? vm.thuongTruTinhThanh['maMuc'] : '',
            // diaChiThuongTru_soNhaChiTiet: vm.diaChiThuongTruCuThe
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsApplicant = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
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
      getStatus(danhTinhDienTu) {
        return danhTinhDienTu[0] ? danhTinhDienTu[0].tinhTrangSuDungTaiKhoan['tenMuc'] : 'Chưa tạo tài khoản'
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
          vm.keywordSearch = ''
        } else {
          vm.applicantNameSearch = ''
          vm.applicantIdSearch = ''
          vm.contactSearch = ''
          vm.emailSearch = ''
          vm.thuongTruPhuongXa = ''
          vm.thuongTruQuanHuyen = ''
          vm.thuongTruTinhThanh = ''
          vm.itemsThuongTruQuanHuyen = []
          vm.itemsThuongTruPhuongXa = []
        }
      },
      getDanhMucTinhThanh () {
        let vm = this
        let filter = {
          collectionName: 'tinhthanh',
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
          vm.itemsTinhThanh = response.content
        }).catch(function () {
        })
      },
      changeTinhThanh (type) {
        let vm = this
        let danhMucCha = ''
        if (!vm.thuongTruTinhThanh) {
          return
        }
        if (type === 'thuongtru') {
          danhMucCha = vm.thuongTruTinhThanh['maMuc']
        }
        if (type === 'noiohientai') {
          danhMucCha = vm.noiOHienTaiTinhThanh['maMuc']
        }
        let filter = {
          collectionName: 'quanhuyen',
          data: {
            keyword: '',
            page: 0,
            size: 100,
            orderFields: 'maMuc',
            orderTypes: 'asc',
            tinhTrang: '1',
            thamChieu_maMuc: danhMucCha
          }
        }
        
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (type === 'thuongtru') {
            vm.itemsThuongTruQuanHuyen = response.content
          }
          if (type === 'noiohientai') {
            vm.itemsNoiOHienTaiQuanHuyen = response.content
          }
        }).catch(function () {
        })
      },
      changeQuanHuyen (type) {
        let vm = this
        let danhMucCha = ''
        if (!vm.thuongTruQuanHuyen) {
          return
        }
        if (type === 'thuongtru') {
          danhMucCha = vm.thuongTruQuanHuyen['maMuc']
        }
        if (type === 'noiohientai') {
          danhMucCha = vm.noiOHienTaiQuanHuyen['maMuc']
        }
        let filter = {
          collectionName: 'phuongxa',
          data: {
            keyword: '',
            page: 0,
            size: 100,
            orderFields: 'maMuc',
            orderTypes: 'asc',
            tinhTrang: '1',
            thamChieu_maMuc: danhMucCha
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (type === 'thuongtru') {
            vm.itemsThuongTruPhuongXa = response.content
          }
          if (type === 'noiohientai') {
            vm.itemsNoiOHienTaiPhuongXa = response.content
          }
        }).catch(function () {
        })
      },
      vaiTro (vaitro) {
        if (!vaitro || vaitro.length == 0) {
          return ''
        }
        let data = Array.from(vaitro , value => value['tenMuc'])
        return data.toString().replace(/,/g, ', ')
      },
    }
}
</script>