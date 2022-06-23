<template>
  <div>
    <div>
      <v-row align-content="center" class="mb-0">
        <v-col class="mt-0 pb-2 wrap-toolbar-page">
          <div class="title-page d-inline-block pt-2" v-if="!selectDonVi">
            DANH SÁCH CÁN BỘ
          </div>
          <div class="title-page d-inline-block pt-2" v-if="selectDonVi">
            CÁN BỘ - {{donViSearch['tenGoi']}}
          </div>
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
      </v-row>
      
      <v-row justify="center" class="mt-0">
        <v-col cols="12" class="my-0 py-0 mb-2" style="">
          <label>Tìm kiếm theo từ khóa</label>
          <v-text-field
              class="input-form mt-2"
              v-model="keywordSearch"
              solo
              dense
              clearable
              hide-details="auto"
              placeholder="Nhập tên, mã cán bộ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" v-if="!selectDonVi && advanceSearch" class="my-0 py-0 mb-2" style="">
          <label>Đơn vị</label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            :items="itemsDonVi"
            v-model="donViSearch"
            item-text="tenGoi"
            item-value="maHanhChinh"
            dense
            solo
            hide-details="auto"
            clearable
            return-object
            placeholder="Đơn vị công tác"
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="3" v-if="!selectPhongBan && advanceSearch" class="my-0 py-0 mb-2" style="">
          <label>Phòng ban</label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            :items="itemsPhongBanSearch"
            v-model="phongBanSearch"
            item-text="tenGoi"
            item-value="maDinhDanh"
            dense
            solo
            hide-details="auto"
            clearable
            placeholder="Phòng ban"
            return-object
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="3" v-if="advanceSearch" class="my-0 py-0 mb-2">
          <label>Chức vụ</label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            :items="itemsChucVuSearch"
            v-model="chucVuSearch"
            item-text="tenGoi"
            item-value="maDinhDanh"
            dense
            solo
            hide-details="auto"
            clearable
            placeholder="Chức vụ"
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="3" v-if="advanceSearch" class="my-0 py-0 mb-2">
          <label>Tình trạng</label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            :items="itemsTrangThai"
            v-model="trangThaiSearch"
            item-text="tenMuc"
            item-value="maMuc"
            dense
            solo
            hide-details="auto"
            clearable
            placeholder="Tình trạng"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="12" md="6" class="py-4">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="showAddCanBo">
            <v-icon size="18">mdi-plus</v-icon>&nbsp;
            Thêm mới
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-end">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="getDanhSachCanBo('reset')">
            <v-icon size="18">mdi-magnify</v-icon>&nbsp;
            Tìm kiếm
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="itemsCanBo"
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
        <template v-slot:item.danhBaLienLac="{ item }">
          <div>
              <v-icon size="16">mdi-phone-in-talk-outline</v-icon>&nbsp; {{ item.danhBaLienLac['soDienThoai'] }}
          </div>
          <div>
              <v-icon size="16">mdi-email-fast-outline</v-icon>&nbsp; {{ item.danhBaLienLac['thuDienTu'] }}
          </div>
        </template>
        <template v-slot:item.phongBan="{ item }">
          <div>
            {{ item.phongBan['tenGoi']}}
          </div>
        </template>
        <template v-slot:item.coQuanDonVi="{ item }">
          <div>
            {{ item.coQuanDonVi['tenGoi'] }}
          </div>
        </template>
        <template v-slot:item.viTriChucDanh="{ item }">
          <div>
            {{ item.viTriChucDanh ? item.viTriChucDanh[0]['tenGoi'] : ''}}
          </div>
        </template>
        <template v-slot:item.tinhTrangCongTac="{ item }">
          <div>
            {{ item.tinhTrangCongTac['tenMuc']}}
          </div>
        </template>
        <template v-slot:item.action="{ item }">
          <div>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="showEditCanBo(item)" color="#025e29" text icon class=" mr-3" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="deleteCanBo(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Xóa</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
      <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount" :total="total" @tiny:change-page="changePage"></pagination>
    </div>
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
    name: 'CanBo',
    components: {
      Pagination
    },
    props: [],
    data: () => ({
      loading: false,
      loadingData: false,
      itemsDonVi: [],
      itemsTrangThai: [],
      trangThai: '',
      keywordSearch: '',
      donViSearch: '',
      phongBanSearch: '',
      trangThaiSearch: '',
      chucVuSearch: '',
      headers: [
        {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
        },
        {
            sortable: false,
            text: 'Mã cán bộ',
            align: 'left',
            value: 'maSoCanBo'
        },
        {
            sortable: false,
            text: 'Họ tên',
            align: 'left',
            value: 'hoVaTen'
        },
        {
            sortable: false,
            text: 'Phòng ban',
            align: 'left',
            value: 'phongBan'
        },
        {
            sortable: false,
            text: 'Đơn vị công tác',
            align: 'left',
            value: 'coQuanDonVi'
        },
        {
            sortable: false,
            text: 'Chức vụ',
            align: 'left',
            value: 'viTriChucDanh'
        },
        {
            sortable: false,
            text: 'Số điện thoại/ email',
            align: 'left',
            value: 'danhBaLienLac'
        },
        {
            sortable: false,
            text: 'Tình trạng công tác',
            align: 'left',
            value: 'tinhTrangCongTac'
        },
        {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action'
        },
      ],
      itemsCanBo: [],
      page: 0,
      itemsPerPage: 15,
      total: 0,
      pageCount: 2,
      thongTinCanBo: {
        "primKey": "",
        "tenGoi": "",
        "hoVaTen": "",
        "biDanh": "",
        "ngaySinh": "",
        "gioiTinh": {
          "maMuc": "",
          "tenMuc": ""
        },
        "noiSinh": {
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "queQuan": {
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "danToc": {
          "maMuc": "",
          "tenMuc": ""
        },
        "tonGiao": {
          "maMuc": "",
          "tenMuc": ""
        },
        "quocTich": {
          "maMuc": "",
          "tenMuc": ""
        },
        "diaChiThuongTru": {
          "soNhaChiTiet": "",
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "noiOHienTai": {
          "soNhaChiTiet": "",
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "danhBaLienLac": {
          "thuDienTu": "",
          "soDienThoai": "",
          "soFax": ""
        },
        "anhCaNhan": {
          "tenTep": "",
          "dinhDang": "",
          "kichThuoc": "",
          "duLieu": "",
          "chuKySo": "",
          "ngayKySo": "",
          "ngayGioTao": "",
          "ngayGioSua": ""
        },
        "maSoCanBo": "",
        "ngayTuyenDung": "",
        "phongBan": {
          "maDinhDanh": "",
          "tenGoi": ""
        },
        "coQuanDonVi": {
          "maHanhChinh": "",
          "tenGoi": "",
          "tenTiengAnh": "",
          "tenVietTat": ""
        },
        "trinhDoChuyenMon": {
          "maMuc": "",
          "tenMuc": ""
        },
        "chucDanhNgheNghiep": {
          "maMuc": "",
          "tenMuc": ""
        },
        "viTriChucDanh": [{
          "maDinhDanh": "",
          "tenGoi": ""
        }],
        "tinhTrangCongTac": {
          "maMuc": "",
          "tenMuc": ""
        },
        "ngayThoiViec": "",
        "trangThaiDuLieu": {
          "maMuc": "",
          "tenMuc": ""
        }
      },
      thongTinCanBoSample: {
        "primKey": "",
        "tenGoi": "",
        "hoVaTen": "",
        "biDanh": "",
        "ngaySinh": "",
        "gioiTinh": {
          "maMuc": "",
          "tenMuc": ""
        },
        "noiSinh": {
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "queQuan": {
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "danToc": {
          "maMuc": "",
          "tenMuc": ""
        },
        "tonGiao": {
          "maMuc": "",
          "tenMuc": ""
        },
        "quocTich": {
          "maMuc": "",
          "tenMuc": ""
        },
        "diaChiThuongTru": {
          "soNhaChiTiet": "",
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "noiOHienTai": {
          "soNhaChiTiet": "",
          "tinhThanh": {
            "maMuc": "",
            "tenMuc": ""
          },
          "quanHuyen": {
            "maMuc": "",
            "tenMuc": ""
          },
          "phuongXa": {
            "maMuc": "",
            "tenMuc": ""
          }
        },
        "danhBaLienLac": {
          "thuDienTu": "",
          "soDienThoai": "",
          "soFax": ""
        },
        "AnhCaNhan": {
          "TenTep": "",
          "DinhDang": "",
          "KichThuoc": "",
          "DuLieu": "",
          "ChuKySo": "",
          "NgayKySo": "",
          "NgayGioTao": "",
          "NgayGioSua": ""
        },
        "maSoCanBo": "",
        "ngayTuyenDung": "",
        "phongBan": {
          "maDinhDanh": "",
          "tenGoi": ""
        },
        "coQuanDonVi": {
          "maHanhChinh": "",
          "tenGoi": "",
          "tenTiengAnh": "",
          "tenVietTat": ""
        },
        "trinhDoChuyenMon": {
          "maMuc": "",
          "tenMuc": ""
        },
        "chucDanhNgheNghiep": {
          "maMuc": "",
          "tenMuc": ""
        },
        "viTriChucDanh": [{
          "maDinhDanh": "",
          "tenGoi": ""
        }],
        "tinhTrangCongTac": {
          "maMuc": "",
          "tenMuc": ""
        },
        "ngayThoiViec": "",
        "trangThaiDuLieu": {
          "maMuc": "",
          "tenMuc": ""
        }
      },
      typeAction: '',
      dialogAddCanBo: false,
      validFormAdd: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      itemsCoQuan: [],
      coQuanDonVi: '',
      itemsPhongBan: [],
      itemsPhongBanSearch: [],
      phongBan: '',
      itemsChucVu: [],
      itemsChucVuSearch: [],
      chucVu: '',
      itemsGioiTinh: [],
      ngaySinhCreate: '',
      gioiTinhCreate: '',
      tonGiaoCreate: '',
      quocTichCreate: '',
      danTocCreate: '',
      itemsDanToc: [],
      itemsQuocTich: [],
      itemsTonGiao: [],
      itemsTinhThanh: [],
      diaChiThuongTruCuThe: '',
      thuongTruTinhThanh: '',
      itemsThuongTruQuanHuyen: [],
      thuongTruQuanHuyen: '',
      itemsThuongTruPhuongXa: [],
      thuongTruPhuongXa: '',
      selectDonVi: false,
      selectPhongBan: false,
      advanceSearch: false
    }),
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 1)
      let currentQuery = vm.$router.history.current
      let query = currentQuery.query
      if (query && query.hasOwnProperty('gov') && query.gov) {
        vm.selectDonVi = true
        vm.donViSearch = {
          'maDinhDanh': query.gov,
          'maHanhChinh': query.code,
          'tenGoi': query.name
        }
        vm.coQuanDonVi = {
          'maDinhDanh': query.gov,
          'maHanhChinh': query.code,
          'tenGoi': query.name
        }
      }
      if (query && query.hasOwnProperty('site') && query.site) {
        vm.selectPhongBan = true
        vm.phongBanSearch = {
          'maDinhDanh': query.site,
          'tenGoi': query.name
        }
        vm.phongBan = {
          'maDinhDanh': query.site,
          'tenGoi': query.name
        }
      } else {
        vm.selectPhongBan = false
        vm.phongBanSearch = ''
        vm.phongBan = ''
      }
      vm.getDanhSachCanBo()
      vm.getDanhMuc()
      vm.getDanhMucTinhThanh()
      vm.getToChucCapTren()
      vm.getPhongBan(vm.donViSearch)
      vm.getChucVu(vm.donViSearch)
    },
    computed: {
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 1)
        let query = newRoute.query
        if (query && query.hasOwnProperty('gov') && query.gov) {
          vm.selectDonVi = true
          vm.donViSearch = {
            'maDinhDanh': query.gov,
            'maHanhChinh': query.code,
            'tenGoi': query.name
          }
          vm.coQuanDonVi = {
            'maDinhDanh': query.gov,
            'maHanhChinh': query.code,
            'tenGoi': query.name
          }
        } else {
          vm.selectDonVi = false
          vm.donViSearch = ''
          vm.coQuanDonVi = ''
        }
        if (query && query.hasOwnProperty('site') && query.site) {
          vm.selectPhongBan = true
          vm.phongBanSearch = {
            'maDinhDanh': query.site,
            'tenGoi': query.name
          }
          vm.phongBan = {
            'maDinhDanh': query.site,
            'tenGoi': query.name
          }
        } else {
          vm.selectPhongBan = false
          vm.phongBanSearch = ''
          vm.phongBan = ''
        }
      },
      coQuanDonVi (val) {
        let vm = this
        setTimeout(function () {
          vm.getPhongBan(val, 'create')
          vm.getChucVu(val, 'create')
        }, 100)
      },
      donViSearch (val, type) {
        let vm = this
        setTimeout(function () {
          vm.getPhongBan(val, 'search')
          vm.getChucVu(val, 'search')
        }, 100)
      },
      thuongTruTinhThanh (val) {
        let vm = this
        if (!val) {
          vm.itemsThuongTruQuanHuyen = []
          vm.thuongTruQuanHuyen = ''
          vm.itemsThuongTruPhuongXa = []
          vm.thuongTruPhuongXa = ''
        }
        vm.changeTinhThanh()
      },
      thuongTruQuanHuyen (val) {
        let vm = this
        if (!val) {
          vm.itemsThuongTruPhuongXa = []
          vm.thuongTruPhuongXa = ''
        }
        vm.changeQuanHuyen()
      }
    },
    methods: {
      getDanhSachCanBo (type) {
        let vm = this
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'canbo',
          data: {
            keyword: vm.keywordSearch,
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'hoVaTen',
            orderTypes: 'asc',
            coQuanDonVi_maHanhChinh: vm.donViSearch ? vm.donViSearch['maHanhChinh'] : '',
            phongBan_maDinhDanh: vm.phongBanSearch ? vm.phongBanSearch['maDinhDanh'] : ''
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsCanBo = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      changePage(config) {
        let vm = this
        vm.page = config.page
        vm.getDanhSachCanBo()
      },
      showEditCanBo (item) {
        let vm = this
        vm.$router.push({ path: '/can-bo/' + item.primKey })
      },
      showAddCanBo () {
        let vm = this
        vm.$router.push({ path: '/can-bo/0'})
      },
      deleteCanBo (item) {
        let vm = this
        vm.$store.commit('SET_SHOWCONFIRM', true)
        let confirm = {
          auth: false,
          title: 'Xóa cán bộ',
          message: 'Bạn có chắc chắn muốn xóa "' + item.hoVaTen + '"',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: () => {
            let filter = {
              collectionName: 'canbo',
              id: item.primKey
            }
            vm.loading = true
            vm.$store.dispatch('collectionDelete', filter).then(function (result) {
              vm.loading = false
              toastr.remove()
              toastr.success('Xóa cán bộ thành công')
              vm.getDanhSachCanBo()
            }).catch(function (response) {
              vm.loading = false
              toastr.remove()
              toastr.error('Xóa cán bộ thất bại')
            })
          }
        }
        vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
      },
      getDanhMuc () {
        let vm = this
        let filter = {
          collectionName: 'tinhtrangcongtac',
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
          vm.itemsTrangThai = response.content
        }).catch(function () {
        })
        let filter3 = {
          collectionName: 'gioitinh',
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
        vm.$store.dispatch('collectionFilter', filter3).then(function (response) {
          vm.itemsGioiTinh = response.content
        }).catch(function () {
        })
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
        danhMucCha = vm.thuongTruTinhThanh['maMuc']
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
          vm.itemsThuongTruQuanHuyen = response.content
        }).catch(function () {
        })
      },
      changeQuanHuyen (type) {
        let vm = this
        let danhMucCha = ''
        if (!vm.thuongTruQuanHuyen) {
          return
        }
        danhMucCha = vm.thuongTruQuanHuyen['maMuc']
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
          vm.itemsThuongTruPhuongXa = response.content
        }).catch(function () {
        })
      },
      getToChucCapTren () {
        let vm = this
        let filter = {
          collectionName: 'coquandonvi',
          data: {
            page: 0,
            size: 500,
            orderFields: 'tenGoi',
            orderTypes: 'asc'
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsDonVi = response.content
        }).catch(function () {
        })
      },
      getPhongBan (donvi, type) {
        let vm = this
        let filter = {
          collectionName: 'phongban',
          data: {
            page: 0,
            size: 500,
            orderFields: 'tenGoi',
            orderTypes: 'asc',
            coQuanDonVi_maDinhDanh: donvi ? donvi['maDinhDanh'] : ''
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (!type) {
            vm.itemsPhongBan = response.content
            vm.itemsPhongBanSearch = response.content
          }
          if (type == 'create') {
            vm.itemsPhongBan = response.content
          }
          if (type == 'search') {
            vm.itemsPhongBanSearch = response.content
          }
        }).catch(function () {
        })
      },
      getChucVu (donvi, type) {
        let vm = this
        let filter = {
          collectionName: 'vitrichucdanh',
          data: {
            keyword: '',
            page: 0,
            size: 100,
            orderFields: 'tenGoi',
            orderTypes: 'asc',
            coQuanDonVi_maDinhDanh: donvi ? donvi['maDinhDanh'] : ''
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (!type) {
            vm.itemsChucVu = response.content
            vm.itemsChucVuSearch = response.content
          }
          if (type == 'create') {
            vm.itemsChucVu = response.content
          }
          if (type == 'search') {
            vm.itemsChucVuSearch = response.content
          }
        }).catch(function () {
        })
      },
      formatOutputData () {
        let vm = this
        vm.thongTinCanBo.ngaySinh = vm.convertDate(vm.ngaySinhCreate)
        vm.thongTinCanBo.diaChiThuongTru = {
          "phuongXa": {
            "maMuc": vm.thuongTruPhuongXa.maMuc,
            "tenMuc": vm.thuongTruPhuongXa.tenMuc
          },
          "quanHuyen": {
            "maMuc": vm.thuongTruQuanHuyen.maMuc,
            "tenMuc": vm.thuongTruQuanHuyen.tenMuc
          },
          "tinhThanh": {
            "maMuc": vm.thuongTruTinhThanh.maMuc,
            "tenMuc": vm.thuongTruTinhThanh.tenMuc
          },
          "soNhaChiTiet": vm.diaChiThuongTruCuThe
        }
        vm.thongTinCanBo.gioiTinh = {
          "maMuc": vm.gioiTinhCreate.maMuc,
          "tenMuc": vm.gioiTinhCreate.tenMuc
        }
        vm.thongTinCanBo.tinhTrangHoatDong = {
          "maMuc": vm.trangThai ? vm.trangThai.maMuc : '',
          "tenMuc": vm.trangThai ? vm.trangThai.tenMuc : ''
        }
        vm.thongTinCanBo.coQuanDonVi = {
          "maHanhChinh": vm.coQuanDonVi ? vm.coQuanDonVi.maHanhChinh : '',
          "tenGoi": vm.coQuanDonVi ? vm.coQuanDonVi.tenGoi : '',
          "tenTiengAnh": "",
		      "tenVietTat": ""
        }
        vm.thongTinCanBo.phongBan = {
          "maDinhDanh": vm.phongBan ? vm.phongBan.maDinhDanh : '',
          "tenGoi": vm.phongBan ? vm.phongBan.tenGoi : ''
        }
        console.log('thongTinCongDanOutput', vm.thongTinCanBo)
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
      formatInputData () {
        let vm = this
        vm.ngaySinhCreate = vm.dateLocale(vm.thongTinCanBo.ngaySinh)
        vm.gioiTinhCreate = vm.thongTinCanBo.gioiTinh
        vm.trangThai = vm.thongTinCanBo.tinhTrangHoatDong
        vm.coQuanDonVi = vm.thongTinCanBo.coQuanDonVi
        vm.phongBan = vm.thongTinCanBo.phongBan
        vm.chucVu = vm.thongTinCanBo.viTriChucDanh
        vm.diaChiThuongTruCuThe = vm.thongTinCanBo.diaChiThuongTru.soNhaChiTiet
        vm.thuongTruTinhThanh = vm.thongTinCanBo.diaChiThuongTru.tinhThanh
        vm.thuongTruQuanHuyen = vm.thongTinCanBo.diaChiThuongTru.quanHuyen
        vm.thuongTruPhuongXa = vm.thongTinCanBo.diaChiThuongTru.phuongXa
      },
      formatBirthDate () {
        let vm = this
        let lengthDate = String(vm.ngaySinhCreate).trim().length
        let splitDate = String(vm.ngaySinhCreate).split('/')
        if (lengthDate && lengthDate > 4 && splitDate.length === 3 && splitDate[2]) {
          vm.ngaySinhCreate = vm.translateDate(vm.ngaySinhCreate)
        } else if (lengthDate && lengthDate === 8) {
          let date = String(vm.ngaySinhCreate)
          vm.ngaySinhCreate = date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8)
        } else {
          vm.ngaySinhCreate = ''
        }
      },
      translateDate (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
      },
      dateLocale (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      convertDate (date) {
        if (!date) return ''
        const [day, month, year] = date.split('/')
        let ddd = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        return (new Date(ddd)).toISOString()
      },
    }
  }
</script>

<style lang="sass">
</style>
