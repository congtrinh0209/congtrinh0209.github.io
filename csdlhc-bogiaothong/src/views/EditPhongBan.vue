<template>
  <div>
    <v-row>
      <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
        <div class="title-page d-inline-block pt-2" v-if="typeAction == 'update'">CẬP NHẬT THÔNG TIN PHÒNG BAN</div>
        <div class="title-page d-inline-block pt-2" v-if="typeAction == 'add'">THÊM MỚI PHÒNG BAN</div>
      </v-col>
    </v-row>
    <v-form
      ref="formAddPhongBan"
      v-model="validFormAdd"
      lazy-validation
      class="mt-3"
    >
      <v-layout wrap>
        <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Mã phòng ban <span class="red--text">(*)</span></label>
            <v-text-field
              class="flex input-form"
              v-model="thongTinPhongBan['maPhongBan']"
              solo
              dense
              :rules="required"
              required
              hide-details="auto"
              clearable
            ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Tên phòng ban <span class="red--text">(*)</span></label>
            <v-text-field
              class="flex input-form"
              v-model="thongTinPhongBan['tenGoi']"
              solo
              dense
              :rules="required"
              required
              hide-details="auto"
              clearable
            ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Email</label>
            <v-text-field
              class="input-form"
              v-model="thongTinPhongBan.danhBaLienLac['thuDienTu']"
              solo
              dense
              clearable
              max
              hide-details="auto"
            ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
            <label>Điện thoại</label>
            <v-text-field
              class="input-form"
              v-model="thongTinPhongBan.danhBaLienLac['soDienThoai']"
              solo
              dense
              clearable
              max
              hide-details="auto"
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
          <v-btn small color="primary" class="mt-3 mx-2  text-white" v-if="typeAction === 'add'" @click.native="submitAddPhongBan()" :loading="loading" :disabled="loading">
              <v-icon
                  left
                  dark
                  size="20"
              >
                  mdi-content-save
              </v-icon>
              Thêm mới
          </v-btn>
          <v-btn small color="primary" class="mt-3 mx-2  text-white" v-else @click.native="submitUpdatePhongBan()" :loading="loading" :disabled="loading">
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
          <v-toolbar-title>Chọn đơn vị</v-toolbar-title>
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
import Vue from 'vue'
import toastr from 'toastr'
import ChonDoiTuong from './ChonDoiTuong.vue'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    props: ["id"],
    components: {
      "chon-doi-tuong": ChonDoiTuong
    },
    data() {
      return {
        loading: false,
        loadingData: false,
        validFormAdd: false,
        typeAction: "add",
        itemsDonVi: [],
        dialogChonDoiTuong: false,
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
        typeChonDoiTuong: '',
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
        
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
      vm.getDanhMuc()
      if (vm.id != 0) {
        vm.typeAction = 'update'
        vm.getThongTinPhongBan()
      } else {
        vm.typeAction = 'add'
      }
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 0)
        vm.getDanhMuc()
        if (vm.id != 0) {
          vm.typeAction = 'update'
          vm.getThongTinPhongBan()
        } else {
          vm.typeAction = 'add'
        }
      },
      
    },
    methods: {
      getThongTinPhongBan () {
        let vm = this
        let filter = {
          collectionName: 'phongban',
          id: vm.id
        }
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          let data = response.resp
          if (data) {
            for (let key in vm.thongTinPhongBan) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinPhongBan[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinPhongBan)
        }).catch(function () {
          vm.loadingData = false
          // mockup-data
          let data = vm.mockData.danhSachPhongBan[0]
          if (data) {
            for (let key in vm.thongTinPhongBan) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinPhongBan[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinPhongBan)
          // end
        })
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
      submitAddPhongBan () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddPhongBan.validate()) {
          let filter = {
            collectionName: 'phongban',
            data: vm.thongTinPhongBan
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm mới thành công')
            // window.history.back()
            let data = result.resp
            vm.$router.push({ path: '/phong-ban'})
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            // if (response && response.status == 409) {
            //   toastr.error('Mã danh mục đã tồn tại')
            //   return
            // }
            toastr.error('Thêm mới thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      submitUpdatePhongBan () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddPhongBan.validate()) {
          let filter = {
            collectionName: 'phongban',
            id: vm.id,
            data: vm.thongTinPhongBan
          }
          vm.$store.dispatch('collectionUpdate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Cập nhật thông tin thành công')
            window.history.back()
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Cập nhật thông tin thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      getDanhMuc () {
        let vm = this
        let filter = {
          collectionName: 'tongiao',
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
          vm.itemsTinhTrangHoatDong = response.content
        }).catch(function () {
        })
        let filter1 = {
          collectionName: 'dantoc',
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
        vm.$store.dispatch('collectionFilter', filter1).then(function (response) {
          vm.itemsHinhThucSoHuu = response.content
        }).catch(function () {
        })
        let filter2 = {
          collectionName: 'quocgia',
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
        vm.$store.dispatch('collectionFilter', filter2).then(function (response) {
          vm.itemsQuocTich = response.content
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
          vm.itemsKhoiCoQuan = response.content
        }).catch(function () {
        })
      },
      chonDoiTuong(data) {
        let vm = this
        console.log('dataaaa', data)
        if (vm.typeChonDoiTuong === 'donvi') {
          vm.toChucCapTrenCreate = data
          vm.itemsDonVi = [data]
        }
        if (vm.typeChonDoiTuong === 'canbo') {
          vm.nguoiDaiDien = data
          vm.itemsNguoiDaiDien = [data]
        }
        vm.dialogChonDoiTuong = false
      },
      showAddToChucCapTren () {
        let vm = this
        vm.typeChonDoiTuong = 'donvi'
        vm.dialogChonDoiTuong = true
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
      formatBirthDate (data) {
        let vm = this
        let lengthDate = String(vm[data]).trim().length
        let splitDate = String(vm[data]).split('/')
        if (lengthDate && lengthDate > 4 && splitDate.length === 3 && splitDate[2]) {
          vm[data] = vm.translateDate(vm[data])
        } else if (lengthDate && lengthDate === 8) {
          let date = String(vm[data])
          vm[data] = date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8)
        } else {
          vm[data] = ''
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
      goBack () {
        window.history.back()
      }
    }
}
</script>