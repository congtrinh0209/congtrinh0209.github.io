<template>
    <div>
        <v-row>
            <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
              <div class="title-page d-inline-block pt-2" v-if="typeAction == 'update'">CẬP NHẬT THÔNG TIN ĐƠN VỊ</div>
              <div class="title-page d-inline-block pt-2" v-if="typeAction == 'add'">THÊM MỚI ĐƠN VỊ</div>
            </v-col>
        </v-row>
        <v-form lazy-validation ref="formAddCaNhan" v-model="validFormAdd" class="mt-3">
            <v-row>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Mã cơ quan, đơn vị <span class="red--text">(*)</span></label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.MaHanhChinh"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                      :rules="required"
                      required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Tên cơ quan, đơn vị <span class="red--text">(*)</span></label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.TenGoi"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                      :rules="required"
                      required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Tên tiếng anh</label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.TenTiengAnh"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Tên viết tắt</label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.TenVietTat"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Ngày thành lập</label>
                    <v-text-field
                      class="input-form"
                      v-model="ngayThanhLapCreate"
                      placeholder="dd/mm/yyyy, ddmmyyyy"
                      @blur="formatBirthDate"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Số quyết định thành lập của tổ chức</label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.SoQuyetDinh"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Email</label>
                    <v-text-field
                        class="input-form"
                        v-model="thongTinDonVi.DanhBaLienLac['ThuDienTu']"
                        solo
                        dense
                        clearable
                        max
                        hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Điện thoại</label>
                    <v-text-field
                        class="input-form"
                        v-model="thongTinDonVi.DanhBaLienLac['SoDienThoai']"
                        solo
                        dense
                        clearable
                        max
                        hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Người đại diện</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Khối cơ quan</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsKhoiCoQuan"
                      v-model="khoiCoQuanCreate"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Cấp dự toán</label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.CapDuToan"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Mã số ngân sách</label>
                    <v-text-field
                      class="input-form"
                      v-model="thongTinDonVi.MaSoNganSach"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Hình thức sở hữu</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsHinhThucSoHuu"
                      v-model="hinhThucSoHuuCreate"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      :rules="required"
                      required
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Tổ chức cấp trên</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                    >
                    </v-autocomplete>
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
                      :rules="required"
                      required
                      placeholder=""
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                
                <v-col cols="12" class="py-0 mb-2">
                    <label>Địa chỉ hoạt động</label>
                    <v-text-field
                      class="input-form"
                      v-model="diaChiHoatDongCuThe"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                      placeholder="Số nhà, đường, phố..."
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Tỉnh/ thành</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsTinhThanh"
                      v-model="diaChiHoatDongTinhThanh"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Quận / Huyện</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsDiaChiHoatDongQuanHuyen"
                      v-model="diaChiHoatDongQuanHuyen"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" md="4" class="py-0 mb-2">
                    <label>Phường / Xã</label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      :items="itemsDiaChiHoatDongPhuongXa"
                      v-model="diaChiHoatDongPhuongXa"
                      item-text="tenMuc"
                      item-value="maMuc"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                    >
                    </v-autocomplete>
                </v-col>
                <v-col cols="12" class="text-center ">
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
                    <v-btn small color="primary" class="mt-3 mx-2  text-white" v-if="typeAction === 'add'" @click.native="submitAddCongDan()" :loading="loading" :disabled="loading">
                        <v-icon
                            left
                            dark
                            size="20"
                        >
                            mdi-content-save
                        </v-icon>
                        Thêm mới
                    </v-btn>
                    <v-btn small color="primary" class="mt-3 mx-2  text-white" v-else @click.native="submitUpdateCongDan()" :loading="loading" :disabled="loading">
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
    </div>
</template>

<script>
import Vue from 'vue'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    props: ["id"],
    data() {
      return {
        loading: false,
        validFormAdd: false,
        typeAction: "add",
        congDanDetail: "",
        itemsKhoiCoQuan: [],
        ngayThanhLapCreate: '',
        khoiCoQuanCreate: '',
        tinhTrangHoatDongCreate: '',
        quocTichCreate: '',
        hinhThucSoHuuCreate: '',
        itemsHinhThucSoHuu: [],
        itemsQuocTich: [],
        itemsTinhTrangHoatDong: [],
        itemsTinhThanh: [],
        diaChiHoatDongCuThe: '',
        diaChiHoatDongTinhThanh: '',
        itemsDiaChiHoatDongQuanHuyen: [],
        diaChiHoatDongQuanHuyen: '',
        itemsDiaChiHoatDongPhuongXa: [],
        diaChiHoatDongPhuongXa: '',
        thongTinDonVi: {
          "id": "",
          "MaHanhChinh": "",
          "TenGoi": "",
          "TenTiengAnh": "",
          "TenVietTat": "",
          "DiaChiHoatDong": {
            "SoNhaChiTiet": "",
            "TinhThanh": {
              "MaMuc": "",
              "TenMuc": ""
            },
            "QuanHuyen": {
              "MaMuc": "",
              "TenMuc": ""
            },
            "PhuongXa": {
              "MaMuc": "",
              "TenMuc": ""
            }
          },
          "NgayThanhLap": "",
          "SoQuyetDinh": "",
          "MaSoNganSach": "",
          "NguoiDaiDien": {
            "MaSoCaNhan": "",
            "HoVaTen": ""
          },
          "DanhBaLienLac": {
            "ThuDienTu": "",
            "SoDienThoai": "",
            "SoFax": ""
          },
          "TinhTrangToChuc": {
            "MaMuc": "",
            "TenMuc": ""
          },
          "ToChucCapTren": {
            "MaHanhChinh": "",
            "TenGoi": "",
            "TenTiengAnh": "",
            "TenVietTat": ""
          }
        },
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
        trangThaiDuLieu: true
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
      vm.getDanhMucTinhThanh()
      vm.getDanhMuc()
      if (vm.id != 0) {
        vm.typeAction = 'update'
        vm.getThongTinCongDan()
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
          vm.getThongTinCongDan()
        } else {
          vm.typeAction = 'add'
        }
      },
      diaChiHoatDongTinhThanh () {
        let vm = this
        vm.changeTinhThanh('thuongtru')
      },
      diaChiHoatDongQuanHuyen () {
        let vm = this
        vm.changeQuanHuyen('thuongtru')
      },
      noiOHienTaiTinhThanh () {
        let vm = this
        vm.changeTinhThanh('noiohientai')
      },
      noiOHienTaiQuanHuyen () {
        let vm = this
        vm.changeQuanHuyen('noiohientai')
      }
    },
    methods: {
      getThongTinCongDan () {
        let vm = this
        let filter = {
          collectionName: 'canhan',
          id: vm.id
        }
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          let data = response.resp
          if (data) {
            for (let key in vm.thongTinDonVi) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinDonVi[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataCongDan', vm.thongTinDonVi)
        }).catch(function () {
          vm.loadingData = false
        })
      },
      submitAddCongDan () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddCaNhan.validate()) {
          let filter = {
            collectionName: 'canhan',
            data: vm.thongTinDonVi
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm mới thành công')
            // window.history.back()
            let data = result.resp
            vm.$router.push({ path: '/thong-tin-ca-nhan/' + data.primKey })
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
      submitUpdateCongDan () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddCaNhan.validate()) {
          let filter = {
            collectionName: 'canhan',
            id: vm.id,
            data: vm.thongTinDonVi
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
        vm.thongTinDonVi.ngaySinh = vm.convertDate(vm.ngayThanhLapCreate)
        vm.thongTinDonVi.diaChiThuongTru = {
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
        vm.thongTinDonVi.noiOHienTai = {
          "phuongXa": {
            "maMuc": vm.noiOHienTaiPhuongXa.maMuc,
            "tenMuc": vm.noiOHienTaiPhuongXa.tenMuc
          },
          "quanHuyen": {
            "maMuc": vm.noiOHienTaiQuanHuyen.maMuc,
            "tenMuc": vm.noiOHienTaiQuanHuyen.tenMuc
          },
          "tinhThanh": {
            "maMuc": vm.noiOHienTaiTinhThanh.maMuc,
            "tenMuc": vm.noiOHienTaiTinhThanh.tenMuc
          },
          "soNhaChiTiet": vm.noiOHienTaiCuThe
        }
        vm.thongTinDonVi.gioiTinh = {
          "maMuc": vm.khoiCoQuanCreate.maMuc,
          "tenMuc": vm.khoiCoQuanCreate.tenMuc
        }
        vm.thongTinDonVi.quocTich = {
          "maMuc": vm.quocTichCreate.maMuc,
          "tenMuc": vm.quocTichCreate.tenMuc
        }
        vm.thongTinDonVi.HinhThucSoHuu = {
          "maMuc": vm.hinhThucSoHuuCreate.maMuc,
          "tenMuc": vm.hinhThucSoHuuCreate.tenMuc
        }
        vm.thongTinDonVi.tonGiao = {
          "maMuc": vm.tinhTrangHoatDongCreate.maMuc,
          "tenMuc": vm.tinhTrangHoatDongCreate.tenMuc
        }
        vm.thongTinDonVi.trangThaiDuLieu = {
          "maMuc": vm.trangThaiDuLieu ? '2' : '1',
          "tenMuc": vm.trangThaiDuLieu ? 'Đang sử dụng' : 'Đánh dấu xóa'
        }
        console.log('thongTinCongDanOutput', vm.thongTinDonVi)
      },
      formatInputData () {
        let vm = this
        vm.ngayThanhLapCreate = vm.dateLocale(vm.thongTinDonVi.ngaySinh)
        vm.khoiCoQuanCreate = vm.thongTinDonVi.gioiTinh
        vm.tinhTrangHoatDongCreate = vm.thongTinDonVi.tonGiao
        vm.quocTichCreate = vm.thongTinDonVi.quocTich
        vm.hinhThucSoHuuCreate = vm.thongTinDonVi.HinhThucSoHuu
        vm.diaChiHoatDongCuThe = vm.thongTinDonVi.diaChiThuongTru.soNhaChiTiet
        vm.diaChiHoatDongTinhThanh = vm.thongTinDonVi.diaChiThuongTru.tinhThanh
        vm.diaChiHoatDongQuanHuyen = vm.thongTinDonVi.diaChiThuongTru.quanHuyen
        vm.diaChiHoatDongPhuongXa = vm.thongTinDonVi.diaChiThuongTru.phuongXa
        vm.noiOHienTaiTinhThanh = vm.thongTinDonVi.noiOHienTai.tinhThanh
        vm.noiOHienTaiQuanHuyen = vm.thongTinDonVi.noiOHienTai.quanHuyen
        vm.noiOHienTaiPhuongXa = vm.thongTinDonVi.noiOHienTai.phuongXa
        vm.noiOHienTaiCuThe = vm.thongTinDonVi.noiOHienTai.soNhaChiTiet
        vm.trangThaiDuLieu = vm.thongTinDonVi.trangThaiDuLieu.maMuc == '2' ? true : false 
      },
      formatBirthDate () {
        let vm = this
        let lengthDate = String(vm.ngayThanhLapCreate).trim().length
        let splitDate = String(vm.ngayThanhLapCreate).split('/')
        if (lengthDate && lengthDate > 4 && splitDate.length === 3 && splitDate[2]) {
          vm.ngayThanhLapCreate = vm.translateDate(vm.ngayThanhLapCreate)
        } else if (lengthDate && lengthDate === 8) {
          let date = String(vm.ngayThanhLapCreate)
          vm.ngayThanhLapCreate = date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8)
        } else {
          vm.ngayThanhLapCreate = ''
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