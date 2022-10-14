<template>
  <v-card
    class="mx-auto pa-3 pt-0"
    outlined
    flat
  >
    <div>
      <v-row justify="start" class="mt-0 mx-0" style="border-bottom: 1px solid #2161B1">
        <v-col class="d-flex align-center justify-start px-0" style="color: #2161B1;font-weight: 500;">
          <div class="header-content" v-if="!selectDonVi">
            DANH SÁCH CHỨC VỤ
          </div>
          <div class="header-content" v-if="selectDonVi">
            CHỨC VỤ - {{donViSearch['tenGoi']}}
          </div>
          <div class="triangle-header"></div>
        </v-col>
        <v-col class="d-flex align-center justify-end">
          <v-text-field
              class="input-form"
              v-model="keywordSearch"
              solo
              dense
              clearable
              hide-details="auto"
              placeholder="Nhập tên chức vụ"
          ></v-text-field>
        </v-col>
        <v-col v-if="!selectDonVi" class="d-flex align-center justify-end" style="max-width: 300px;">
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
        <v-col class="d-flex align-center justify-end" style="max-width: 150px;">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="getChucVu('reset')">
            <v-icon size="18">mdi-magnify</v-icon>&nbsp;
            Tìm kiếm
          </v-btn>
        </v-col>
        <v-col class="d-flex align-center justify-end px-0" style="max-width: 120px;">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="showAddChucVu">
            <v-icon size="18">mdi-plus</v-icon>&nbsp;
            Thêm mới
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="itemsChucVu"
        :items-per-page="itemsPerPage"
        item-key="primKey"
        hide-default-footer
        class="table-base mt-2"
        no-data-text="Không có"
        :loading="loadingData"
        loading-text="Đang tải... "
      >
        <template v-slot:item.index="{ item, index }">
          <div>{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
        </template>
         <template v-slot:item.tenGoi="{ item }">
          <div style="min-width: 120px;">
            {{ item['tenGoi'] }}
          </div>
        </template>
        <template v-slot:item.coQuanDonVi="{ item }">
          <div style="min-width: 120px;">
            {{ item.coQuanDonVi['tenGoi'] }}
          </div>
        </template>
        <template v-slot:item.vaiTroSuDung="{ item }">
          <div>
            {{ vaiTro(item.vaiTroSuDung) }}
          </div>
        </template>
        <template v-slot:item.action="{ item }">
          <div style="min-width: 120px;">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="showEditChucVu(item)" color="#2161B1" text icon class=" mr-3" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="deleteChucVu(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
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
    <v-dialog
      max-width="900"
      v-model="dialogAddChucVu"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title v-if="typeAction === 'create'">Thêm chức vụ</v-toolbar-title>
          <v-toolbar-title v-else>Cập nhật chức vụ</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="dialogAddChucVu = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5 px-2">
          <v-form
            ref="formAddChucVu"
            v-model="validFormAdd"
            lazy-validation
          >
            <v-layout wrap>
              <v-col cols="12" md="6" class="py-0 mb-2">
                  <label>Chức vụ <span class="red--text">(*)</span></label>
                  <v-text-field
                    class="flex input-form"
                    v-model="thongTinChucVu['tenGoi']"
                    solo
                    dense
                    :rules="required"
                    required
                    hide-details="auto"
                    clearable
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="py-0 mb-2">
                  <label>Thuộc đơn vị <span class="red--text">(*)</span></label>
                  <v-autocomplete
                    class="flex input-form"
                    :items="itemsDonVi"
                    v-model="toChucCapTrenCreate"
                    hide-no-data
                    item-text="tenGoi"
                    item-value="maDinhDanh"
                    dense
                    solo
                    hide-details="auto"
                    return-object
                    :rules="required"
                    required
                  >
                  </v-autocomplete>
              </v-col>
              <v-col cols="12" class="py-0 mb-2">
                <label>Vai trò sử dụng</label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  :items="itemsVaiTro"
                  v-model="vaiTroSuDungCreate"
                  item-text="tenMuc"
                  item-value="maMuc"
                  dense
                  solo
                  hide-details="auto"
                  multiple
                  return-object
                >
                </v-autocomplete>
              </v-col>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end pb-3">
          <v-btn small color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="cancelCreate">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
          <v-btn small v-if="typeAction === 'create'" class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddChucVu">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Thêm mới</span>
          </v-btn>
          <v-btn small v-else class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitUpdateChucVu">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Cập nhật</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      itemsVaiTro: [],
      vaitro: '',
      vaiTroSuDungCreate: '',
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
            text: 'Chức vụ',
            align: 'left',
            value: 'tenGoi'
        },
        {
            sortable: false,
            text: 'Đơn vị',
            align: 'left',
            value: 'coQuanDonVi'
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
        }
      ],
      itemsToChucCapTren: [],
      toChucCapTrenCreate: '',
      tinhTrangHoatDongCreate: '',
      itemsTinhTrangHoatDong: [],
      itemsChucVu: [],
      thongTinChucVu: {
        "tenGoi": "",
        "coQuanDonVi": {
          "maDinhDanh": "",
          "tenGoi": ""
        },
        "vaiTroSuDung": []
      },
      thongTinPhongBanSample: {
        "tenGoi": "",
        "coQuanDonVi": {
          "maDinhDanh": "",
          "tenGoi": ""
        },
        "vaiTroSuDung": []
      },
      page: 0,
      itemsPerPage: 15,
      total: 0,
      pageCount: 0,
      typeAction: '',
      dialogAddChucVu: false,
      validFormAdd: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      selectDonVi: ''
    }),
    created () {
      let vm = this
      // if (!vm.isAdmin && !vm.checkRole('WRITE_QL_CHUCVUCANBO') && !vm.checkRole('READ_QL_CHUCVUCANBO')) {
      //   vm.$router.push({ path: '/'})
      //   return
      // }
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
      vm.getChucVu()
      vm.getDonVi()
      // vm.getDanhMuc('VAITROSUDUNG')
      vm.getVaiTro()
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
        vm.getChucVu()
        vm.getDonVi()
        // vm.getDanhMuc('VAITROSUDUNG')
        vm.getVaiTro()
      }
    },
    methods: {
      showAddChucVu () {
        let vm = this
        vm.typeAction = 'create'
        vm.dialogAddChucVu = true
        setTimeout(function () {
          vm.thongTinChucVu = vm.thongTinPhongBanSample
          vm.$refs.formAddChucVu.resetValidation()
        }, 100)
      },
      showEditChucVu (item) {
        let vm = this
        vm.typeAction = 'update'
        vm.thongTinChucVu = item
        vm.formatInputData()
        vm.dialogAddChucVu = true
      },
      deleteChucVu (item) {
        let vm = this
        vm.$store.commit('SET_SHOWCONFIRM', true)
        let confirm = {
          auth: false,
          title: 'Xóa chức vụ',
          message: 'Bạn có chắc chắn muốn xóa "' + item.tenGoi + '"',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: () => {
            let filter = {
              collectionName: 'vitrichucdanh',
              id: item.primKey
            }
            vm.loading = true
            vm.$store.dispatch('collectionDelete', filter).then(function (result) {
              vm.loading = false
              toastr.remove()
              toastr.success('Xóa thành công')
              vm.getDanhSachCanBo()
            }).catch(function (response) {
              vm.loading = false
              toastr.remove()
              toastr.error('Xóa thất bại')
            })
          }
        }
        vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
      },
      submitAddChucVu () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddChucVu.validate()) {
          let filter = {
            collectionName: 'vitrichucdanh',
            data: vm.thongTinChucVu
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm mới thành công')
            vm.dialogAddChucVu = false
            vm.getChucVu()
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Thêm mới thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      submitUpdateChucVu () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddChucVu.validate()) {
          let filter = {
            collectionName: 'vitrichucdanh',
            id: vm.thongTinChucVu['primKey'],
            data: vm.thongTinChucVu
          }
          vm.$store.dispatch('collectionUpdate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Cập nhật thông tin thành công')
            vm.dialogAddChucVu = false
            vm.getChucVu()
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Cập nhật thông tin thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      cancelCreate () {
        let vm = this
        vm.getChucVu()
        vm.dialogAddChucVu = false
      },
      getChucVu (type) {
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
          collectionName: 'vitrichucdanh',
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
          vm.itemsChucVu = response.content
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
        vm.getChucVu()
      },
      getDonVi () {
        let vm = this
        let filter = {
          collectionName: 'coquandonvi',
          data: {
            keyword: '',
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
          if (collection === 'VAITROSUDUNG') {
            vm.itemsVaiTro = response.content
          }
        }).catch(function () {
        })
      },
      getVaiTro () {
        let vm = this
        let filter = {
          collectionName: 'vaitrosudung',
          data: {
            keyword: '',
            page: 0,
            size: 500,
            orderFields: 'maMuc',
            orderTypes: 'asc',
            tinhTrang: '1,0',
            thamChieu_maMuc: ''
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsVaiTro = response.content
        }).catch(function () {
        })
      },
      vaiTro (vaitro) {
        if (!vaitro || vaitro.length == 0) {
          return ''
        }
        let data = Array.from(vaitro , value => value['tenMuc'])
        return data.toString().replace(/,/g, '; ')
      },
      formatOutputData () {
        let vm = this
        vm.thongTinChucVu.coQuanDonVi = {
          "maDinhDanh": vm.toChucCapTrenCreate.maDinhDanh,
          "tenGoi": vm.toChucCapTrenCreate.tenGoi
        }
        vm.thongTinChucVu.vaiTroSuDung = vm.vaiTroSuDungCreate
        console.log('thongTinCongDanOutput', vm.thongTinChucVu)
      },
      formatInputData () {
        let vm = this
        vm.toChucCapTrenCreate = vm.itemsDonVi && vm.itemsDonVi.length ? vm.itemsDonVi.find(function (item) {
          return item.maDinhDanh == vm.thongTinChucVu.coQuanDonVi['maDinhDanh']
        }) : ''
        vm.vaiTroSuDungCreate = vm.thongTinChucVu.vaiTroSuDung
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
