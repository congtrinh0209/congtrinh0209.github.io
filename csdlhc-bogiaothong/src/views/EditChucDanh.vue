<template>
  <div>
    <div>
      <v-row>
        <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'update'">CẬP NHẬT VỊ TRÍ CHỨC DANH</div>
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'add'">THÊM MỚI VỊ TRÍ CHỨC DANH</div>
        </v-col>
      </v-row>
      <v-form
        ref="formAddChucVu"
        v-model="validFormAdd"
        class="mt-3"
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
              <v-layout wrap>
              <v-autocomplete
                class="flex input-form"
                hide-no-data
                v-model="toChucCapTrenCreate"
                :items="itemsDonVi"
                item-text="tenGoi"
                item-value="maHanhChinh"
                dense
                solo
                hide-details="auto"
                return-object
                clearable
              >
              </v-autocomplete>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn @click.stop="showAddToChucCapTren" color="#2161b1" text icon class="" v-bind="attrs" v-on="on">
                    <v-icon size="22">mdi-plus-circle-outline</v-icon>
                  </v-btn>
                </template>
                <span>Chọn đơn vị</span>
              </v-tooltip>
            </v-layout>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Phòng ban</label>
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsPhongBan"
              v-model="phongBan"
              item-text="tenGoi"
              item-value="maDinhDanh"
              dense
              solo
              hide-details="auto"
              return-object
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
                <label>Cán bộ</label>
                <v-layout wrap>
                  <v-autocomplete
                    class="flex input-form"
                    hide-no-data
                    item-text="hoVaTen"
                    item-value="maSoCanBo"
                    v-model="nguoiDaiDien"
                    :items="itemsNguoiDaiDien"
                    dense
                    solo
                    hide-details="auto"
                    return-object
                    clearable
                  >
                  </v-autocomplete>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click.stop="showAddNguoiDaiDien" color="#2161b1" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-plus-circle-outline</v-icon>
                      </v-btn>
                    </template>
                    <span>Chọn cán bộ</span>
                  </v-tooltip>
                </v-layout>
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
          <v-col cols="12" class="text-center mb-3">
            <v-btn small color="primary" @click="goBack()"  outlined class="mt-3 mx-2  text-white" :loading="loading" :disabled="loading">
              <v-icon
                left
                dark
                size="20"
              >
                mdi-reply
              </v-icon>
              Quay lại
            </v-btn>
            <v-btn small color="primary" class="mt-3 mx-2  text-white" v-if="typeAction === 'add'" @click.native="submitAddChucVu()" :loading="loading" :disabled="loading">
              <v-icon
                left
                dark
                size="20"
              >
                mdi-content-save
              </v-icon>
              Thêm mới
            </v-btn>
            <v-btn small color="primary" class="mt-3 mx-2  text-white" v-else @click.native="submitUpdateChucVu()" :loading="loading" :disabled="loading">
              <v-icon
                left
                dark
                size="20"
              >
                mdi-content-save
              </v-icon>
              Cập nhật
            </v-btn>
          </v-col>
        </v-layout>
      </v-form>
    </div>
    <v-dialog
      max-width="900"
      v-model="dialogChonDoiTuong"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title v-if="typeChonDoiTuong === 'donvi'">Chọn đơn vị</v-toolbar-title>
          <v-toolbar-title v-if="typeChonDoiTuong === 'canbo'">Chọn cán bộ</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="dialogChonDoiTuong = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5 px-2">
          <chon-doi-tuong :type="typeChonDoiTuong" @tiny:select-data="chonDoiTuong"></chon-doi-tuong>
        </v-card-text>
        <v-card-actions class="justify-end pb-3">
          <v-btn small color="red" class="white--text mr-2"  @click="dialogChonDoiTuong = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import toastr from 'toastr'
  import ChonDoiTuong from './ChonDoiTuong.vue'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  export default {
    name: 'CapNhatChucDanh',
    components: {
      "chon-doi-tuong": ChonDoiTuong
    },
    props: ["id"],
    data: () => ({
      loading: false,
      loadingData: false,
      itemsDonVi: [
      ],
      nguoiDaiDien: '',
      itemsNguoiDaiDien: [],
      itemsVaiTro: [],
      vaitro: '',
      vaiTroSuDungCreate: '',
      keywordSearch: '',
      donViSearch: '',
      itemsPhongBan: [],
      phongBan: '',
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
      selectDonVi: '',
      dialogChonDoiTuong: false,
      typeChonDoiTuong: '',
    }),
    created () {
      let vm = this
      if (vm.id != 0) {
        vm.typeAction = 'update'
        vm.getThongTinChucDanh()
      } else {
        vm.typeAction = 'add'
      }
      vm.$store.commit('SET_INDEXTAB', 0)
      let currentQuery = vm.$router.history.current
      let query = currentQuery.query
      vm.getDonVi()
      vm.getVaiTro()
    },
    computed: {
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        let query = newRoute.query
        vm.getDonVi()
        vm.getVaiTro()
      }
    },
    methods: {
      getThongTinChucDanh () {
        let vm = this
        let filter = {
          collectionName: 'vitrichucdanh',
          id: vm.id
        }
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          let data = response.resp
          if (data) {
            for (let key in vm.thongTinChucVu) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinChucVu[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinChucVu)
        }).catch(function () {
          vm.loadingData = false
        })
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
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Cập nhật thông tin thất bại')
          })
        } else {
          vm.loading = false
        }
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
          vm.itemsPhongBan = response.content
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
        return data.toString().replace(/,/g, ', ')
      },
      showAddToChucCapTren () {
        let vm = this
        vm.typeChonDoiTuong = 'donvi'
        vm.dialogChonDoiTuong = true
      },
      showAddNguoiDaiDien () {
        let vm = this
        vm.typeChonDoiTuong = 'canbo'
        vm.dialogChonDoiTuong = true
      },
      chonDoiTuong(data) {
        let vm = this
        console.log('dataaaa', data)
        if (vm.typeChonDoiTuong === 'donvi') {
          vm.toChucCapTren = data
          vm.itemsToChucCapTren = [data]
        }
        if (vm.typeChonDoiTuong === 'canbo') {
          vm.nguoiDaiDien = data
          vm.itemsNguoiDaiDien = [data]
        }
        vm.dialogChonDoiTuong = false
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
