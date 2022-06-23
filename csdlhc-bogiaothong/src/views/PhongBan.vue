<template>
  <div>
    <div>
      <v-row align-content="center">
        <v-col class="mt-0 pb-2 wrap-toolbar-page">
          <div class="title-page d-inline-block pt-2" v-if="!selectDonVi">
            DANH SÁCH PHÒNG BAN
          </div>
          <div class="title-page d-inline-block pt-2" v-if="selectDonVi">
            PHÒNG BAN - {{donViSearch['tenGoi']}}
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="12" md="6">
          <label>Tìm kiếm theo từ khóa</label>
          <v-text-field
              class="input-form"
              v-model="keywordSearch"
              solo
              dense
              clearable
              hide-details="auto"
              placeholder="Nhập tên, mã phòng ban"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" v-if="!selectDonVi">
          <label>Đơn vị</label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            :items="itemsDonVi"
            v-model="donViSearch"
            item-text="tenGoi"
            item-value="maDinhDanh"
            dense
            solo
            hide-details="auto"
            placeholder="Chọn đơn vị"
            return-object
            clearable
          >
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-0">
        <v-col cols="12" md="6" class="py-4">
          <v-btn color="primary" small class="mx-0 text-white" @click="showAddPhongBan">
            <v-icon size="18">mdi-plus</v-icon>&nbsp;
            Thêm mới
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-end">
          <v-btn color="primary" small class="mx-0 text-white" @click="getPhongBan('reset')">
            <v-icon size="18">mdi-magnify</v-icon>&nbsp;
            Tìm kiếm
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="itemsPhongBan"
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
        <template v-slot:item.coQuanDonVi="{ item }">
          <div>
            {{ item.coQuanDonVi['tenGoi'] }}
          </div>
        </template>
        <template v-slot:item.action="{ item }">
          <div>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="showEditPhongBan(item)" color="#025e29" text icon class=" mr-3" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="" color="red" text icon class="" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Xóa</span>
            </v-tooltip> -->
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
    name: 'PhongBan',
    components: {
      Pagination
    },
    props: [],
    data: () => ({
      loading: false,
      loadingData: false,
      itemsDonVi: [
      ],
      keywordSearch: '',
      donViSearch: '',
      headers: [
        {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
        },
        {
            sortable: false,
            text: 'Phòng ban',
            align: 'left',
            value: 'tenGoi'
        },
        {
            sortable: false,
            text: 'Mã phòng ban',
            align: 'left',
            value: 'maPhongBan'
        },
        {
            sortable: false,
            text: 'Điện thoại/ Email',
            align: 'left',
            value: 'danhBaLienLac'
        },
        {
            sortable: false,
            text: 'Đơn vị',
            align: 'left',
            value: 'coQuanDonVi'
        },
        {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action'
        }
      ],
      itemsToChucCapTren: [],
      toChucCapTrenCreate: '',
      tinhTrangHoatDongCreate: '',
      itemsTinhTrangHoatDong: [],
      itemsPhongBan: [],
      thongTinPhongBan: {
        "maPhongBan": "",
        "tenGoi": "",
        "danhBaLienLac": {
          "thuDienTu": "",
          "soDienThoai": "",
          "soFax": ""
        },
        "coQuanDonVi": {
          "maDinhDanh": "",
          "tenGoi": ""
        }
      },
      thongTinPhongBanSample: {
        "maPhongBan": "",
        "tenGoi": "",
        "danhBaLienLac": {
          "thuDienTu": "",
          "soDienThoai": "",
          "soFax": ""
        },
        "coQuanDonVi": {
          "maDinhDanh": "",
          "tenGoi": ""
        }
      },
      thongTinPhongBanUpdate: '',
      page: 0,
      itemsPerPage: 15,
      total: 0,
      pageCount: 0,
      typeAction: '',
      dialogAddPhongBan: false,
      validFormAdd: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      selectDonVi: ''
    }),
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
      let currentQuery = vm.$router.history.current
      let query = currentQuery.query
      if (query && query.hasOwnProperty('gov') && query.gov) {
        vm.selectDonVi = true
        vm.donViSearch = {
          'maDinhDanh': query.gov,
          'tenGoi': query.name
        }
        vm.toChucCapTrenCreate = {
          'maDinhDanh': query.gov,
          'tenGoi': query.name
        }
      } else {
        vm.selectDonVi = false
        vm.donViSearch = ''
        vm.toChucCapTrenCreate = ''
      }
      vm.getPhongBan()
      vm.getDonVi()
    },
    computed: {
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        let query = newRoute.query
        if (query && query.hasOwnProperty('gov') && query.gov) {
          vm.selectDonVi = true
          vm.donViSearch = {
            'maDinhDanh': query.gov,
            'tenGoi': query.name
          }
          vm.toChucCapTrenCreate = {
            'maDinhDanh': query.gov,
            'tenGoi': query.name
          }
        } else {
          vm.selectDonVi = false
          vm.donViSearch = ''
          vm.toChucCapTrenCreate = ''
        }
        vm.getPhongBan()
        vm.getDonVi()
      }
    },
    methods: {
      showDanhSachCanBo (item) {
        let vm = this
        let gov = item.coQuanDonVi ? item.coQuanDonVi['maHanhChinh'] : ''
        vm.$router.push({ path: '/can-bo?site=' + item.maDinhDanh + '&gov=' + gov + '&name=' + item.tenGoi })
      },
      showAddPhongBan () {
        let vm = this
        vm.$router.push({ path: '/phong-ban/0'})
      },
      showEditPhongBan (item) {
        let vm = this
        vm.$router.push({ path: '/phong-ban/' + item.primKey })
      },
      getPhongBan (type) {
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
          collectionName: 'phongban',
          data: {
            keyword: vm.keywordSearch,
            coQuanDonVi_maDinhDanh: vm.donViSearch ? vm.donViSearch['maDinhDanh'] : '',
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'tenGoi',
            orderTypes: 'asc'
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsPhongBan = response.content
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
        vm.getPhongBan()
      },
      getDonVi () {
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
      formatOutputData () {
        let vm = this
        vm.thongTinPhongBan.coQuanDonVi = {
          "maDinhDanh": vm.toChucCapTrenCreate.maDinhDanh,
          "tenGoi": vm.toChucCapTrenCreate.tenGoi
        }
        console.log('thongTinCongDanOutput', vm.thongTinPhongBan)
      },
      formatInputData () {
        let vm = this
        vm.toChucCapTrenCreate = vm.itemsDonVi && vm.itemsDonVi.length ? vm.itemsDonVi.find(function (item) {
          return item.maDinhDanh == vm.thongTinPhongBan.coQuanDonVi['maDinhDanh']
        }) : ''
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
