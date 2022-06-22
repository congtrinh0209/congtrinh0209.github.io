<template>
    <div>
      <v-row>
        <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'update'">CẬP NHẬT THÔNG TIN TÀI KHOẢN</div>
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'add'">THÊM MỚI TÀI KHOẢN</div>
        </v-col>
      </v-row>
      <v-form lazy-validation ref="formAddToChuc" v-model="validFormAdd" class="mt-3">
        <v-row>
            <v-col cols="12" md="6" class="py-0 mb-2">
              <label>Tổ chức cấp trên</label>
              <v-layout wrap>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  v-model="toChucCapTren"
                  :items="itemsToChucCapTren"
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
                  <span>Chọn tổ chức cấp trên</span>
                </v-tooltip>
              </v-layout>
            </v-col>
            <v-col cols="12" md="4" class="py-0 mb-2">
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
                    <span>Chọn người đại diện</span>
                  </v-tooltip>
                </v-layout>
            </v-col>
            <v-col cols="12" md="6" class="py-0 mb-2">
                <label>Tên tài khoản <span class="red--text">(*)</span></label>
                <v-text-field
                  class="input-form"
                  v-model="thongTinTaiKhoan.tenTaiKhoan"
                  solo
                  dense
                  clearable
                  max
                  hide-details="auto"
                  :rules="required"
                  required
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0 mb-2">
                <label>Ngày đăng ký</label>
                <v-text-field
                  class="input-form"
                  v-model="ngayDangKyCreate"
                  placeholder="dd/mm/yyyy, ddmmyyyy"
                  @blur="formatBirthDate('ngayDangKyCreate')"
                  solo
                  dense
                  clearable
                  max
                  hide-details="auto"
                ></v-text-field>
            </v-col>           
            
            <v-col cols="12" md="4" class="py-0 mb-2">
                <label>Tình trạng hoạt động</label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  :items="itemsTinhTrangHoatDong"
                  v-model="tinhTrangHoatDongCreate"
                  item-text="tenMuc"
                  item-value="maMuc"
                  dense
                  solo
                  hide-details="auto"
                  placeholder=""
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
                <v-btn small color="primary" class="mt-3 mx-2  text-white" v-if="typeAction === 'add'" @click.native="submitAddDonVi()" :loading="loading" :disabled="loading">
                    <v-icon
                        left
                        dark
                        size="20"
                    >
                        mdi-content-save
                    </v-icon>
                    Thêm mới
                </v-btn>
                <v-btn small color="primary" class="mt-3 mx-2  text-white" v-else @click.native="submitUpdateToChuc()" :loading="loading" :disabled="loading">
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
        </v-row>
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
        validFormAddGiayDangKy: false,
        typeAction: "add",
        congDanDetail: "",
        nguoiDaiDien: "",
        itemsNguoiDaiDien: [],
        toChucCapTren: "",
        itemsToChucCapTren: [],
        itemsKhoiCoQuan: [],
        ngayDangKyCreate: '',
        khoiCoQuanCreate: '',
        tinhTrangHoatDongCreate: '',
        hinhThucSoHuuCreate: '',
        itemsHinhThucSoHuu: [],
        itemsTinhTrangHoatDong: [],
        itemsTinhThanh: [],
        diaChiHoatDongCuThe: '',
        diaChiHoatDongTinhThanh: '',
        itemsDiaChiHoatDongQuanHuyen: [],
        diaChiHoatDongQuanHuyen: '',
        itemsDiaChiHoatDongPhuongXa: [],
        diaChiHoatDongPhuongXa: '',
        thongTinTaiKhoan: {
          "id": "",
          "maHanhChinh": "",
          "tenGoi": "",
          "tenTiengAnh": "",
          "tenVietTat": "",
          "diaChiHoatDong": {
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
          "ngayThanhLap": "",
          "soQuyetDinh": "",
          "maSoNganSach": "",
          "nguoiDaiDien": {
            "maSoCaNhan": "",
            "hoVaTen": ""
          },
          "danhBaLienLac": {
            "thuDienTu": "",
            "soDienThoai": "",
            "soFax": ""
          },
          "tinhTrangToChuc": {
            "maMuc": "",
            "tenMuc": ""
          },
          "toChucCapTren": {
            "maDinhDanh": "",
            "tenGoi": "",
            "tenTiengAnh": "",
            "tenVietTat": ""
          },
          "giayDangKyHoatDong": []
        },
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
        trangThaiDuLieu: true,
        dialogChonDoiTuong: false,
        dialogGiayDangKy: false,
        typeGiayDangKy: '',
        typeChonDoiTuong: '',
        
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
      vm.getDanhMucTinhThanh()
      vm.getDanhMuc()
      if (vm.id != 0) {
        vm.typeAction = 'update'
        vm.getThongTinDonVi()
      } else {
        vm.typeAction = 'add'
      }
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 0)
        vm.getDanhMucTinhThanh()
        vm.getDanhMuc()
        if (vm.id != 0) {
          vm.typeAction = 'update'
          vm.getThongTinDonVi()
        } else {
          vm.typeAction = 'add'
        }
      }
    },
    methods: {
      getThongTinDonVi () {
        let vm = this
        let filter = {
          collectionName: 'donvi',
          id: vm.id
        }
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          let data = response.resp
          if (data) {
            for (let key in vm.thongTinTaiKhoan) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinTaiKhoan[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinTaiKhoan)
        }).catch(function () {
          vm.loadingData = false
          // mockup-data
          let data = vm.mockData.danhSachDonVi[0]
          if (data) {
            for (let key in vm.thongTinTaiKhoan) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinTaiKhoan[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinTaiKhoan)
          // end
        })
      },
      submitAddDonVi () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddToChuc.validate()) {
          let filter = {
            collectionName: 'donvi',
            data: vm.thongTinTaiKhoan
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm mới thành công')
            // window.history.back()
            let data = result.resp
            vm.$router.push({ path: '/thong-tin-don-vi/' + data.primKey })
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
      submitUpdateToChuc () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddToChuc.validate()) {
          let filter = {
            collectionName: 'donvi',
            id: vm.id,
            data: vm.thongTinTaiKhoan
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
      changeTinhThanh (type) {
        let vm = this
        let danhMucCha = ''
        if (type === 'thuongtru') {
          danhMucCha = vm.diaChiHoatDongTinhThanh['maMuc']
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
            vm.itemsDiaChiHoatDongQuanHuyen = response.content
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
        if (type === 'thuongtru') {
          danhMucCha = vm.diaChiHoatDongQuanHuyen['maMuc']
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
            vm.itemsDiaChiHoatDongPhuongXa = response.content
          }
          if (type === 'noiohientai') {
            vm.itemsNoiOHienTaiPhuongXa = response.content
          }
        }).catch(function () {
        })
      },
      formatOutputData () {
        let vm = this
        vm.thongTinTaiKhoan.ngayThanhLap = vm.convertDate(vm.ngayDangKyCreate)
        vm.thongTinTaiKhoan.diaChiHoatDong = {
          "phuongXa": {
            "maMuc": vm.diaChiHoatDongPhuongXa.maMuc,
            "tenMuc": vm.diaChiHoatDongPhuongXa.tenMuc
          },
          "quanHuyen": {
            "maMuc": vm.diaChiHoatDongQuanHuyen.maMuc,
            "tenMuc": vm.diaChiHoatDongQuanHuyen.tenMuc
          },
          "tinhThanh": {
            "maMuc": vm.diaChiHoatDongTinhThanh.maMuc,
            "tenMuc": vm.diaChiHoatDongTinhThanh.tenMuc
          },
          "soNhaChiTiet": vm.diaChiHoatDongCuThe
        }
        vm.thongTinTaiKhoan.hinhThucSoHuu = {
          "maMuc": vm.hinhThucSoHuuCreate.maMuc,
          "tenMuc": vm.hinhThucSoHuuCreate.tenMuc
        }
        vm.thongTinTaiKhoan.tinhTrangHoatDong = {
          "maMuc": vm.tinhTrangHoatDongCreate.maMuc,
          "tenMuc": vm.tinhTrangHoatDongCreate.tenMuc
        }
        console.log('thongTinCongDanOutput', vm.thongTinTaiKhoan)
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
      formatInputData () {
        let vm = this
        vm.ngayDangKyCreate = vm.dateLocale(vm.thongTinTaiKhoan.ngayThanhLap)
        vm.khoiCoQuanCreate = vm.thongTinTaiKhoan.khoiCoQuan
        vm.tinhTrangHoatDongCreate = vm.thongTinTaiKhoan.tinhTrangHoatDong
        vm.hinhThucSoHuuCreate = vm.thongTinTaiKhoan.hinhThucSoHuu
        vm.diaChiHoatDongCuThe = vm.thongTinTaiKhoan.diaChiHoatDong.soNhaChiTiet
        vm.diaChiHoatDongTinhThanh = vm.thongTinTaiKhoan.diaChiHoatDong.tinhThanh
        vm.diaChiHoatDongQuanHuyen = vm.thongTinTaiKhoan.diaChiHoatDong.quanHuyen
        vm.diaChiHoatDongPhuongXa = vm.thongTinTaiKhoan.diaChiHoatDong.phuongXa
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