<template>
  <div>
    <div>
      <v-row>
        <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'update'">CẬP NHẬT THÔNG TIN CÁN BỘ</div>
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'add'">THÊM MỚI CÁN BỘ</div>
        </v-col>
      </v-row>
      <v-form
        ref="formAddCanBo"
        v-model="validFormAdd"
        lazy-validation
        class="mt-3"
      >
        <v-layout wrap>
          <v-col cols="12" md="6" class="py-0 mb-2">
              <label>Mã cán bộ <span class="red--text">(*)</span></label>
              <v-text-field
                class="flex input-form"
                v-model="thongTinCanBo['maSoCanBo']"
                solo
                dense
                :readonly="typeAction === 'update'"
                :rules="required"
                required
                hide-details="auto"
              ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
              <label>Họ và tên <span class="red--text">(*)</span></label>
              <v-text-field
                class="flex input-form"
                v-model="thongTinCanBo['hoVaTen']"
                solo
                dense
                :rules="required"
                required
                hide-details="auto"
                clearable
              ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Ngày sinh</label>
            <v-text-field
              class="input-form"
              v-model="ngaySinhCreate"
              placeholder="dd/mm/yyyy, ddmmyyyy"
              @blur="formatBirthDate"
              solo
              dense
              clearable
              max
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="py-0">
            <label>Giới tính <span class="red--text">(*)</span></label>
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsGioiTinh"
              v-model="gioiTinhCreate"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
              :rules="required"
              required
              placeholder="Chọn giới tính"
              return-object
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Email</label>
            <v-text-field
              class="input-form"
              v-model="thongTinCanBo.danhBaLienLac['thuDienTu']"
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
              v-model="thongTinCanBo.danhBaLienLac['soDienThoai']"
              solo
              dense
              clearable
              max
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0 mb-2">
            <label>Địa chỉ</label>
            <v-text-field
              class="input-form"
              v-model="diaChiThuongTruCuThe"
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
              v-model="thuongTruTinhThanh"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
              return-object
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
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Cơ quan, đơn vị</label>
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
            <label>Chức vụ</label>
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsChucVu"
              v-model="chucVu"
              item-text="tenGoi"
              item-value="maDinhDanh"
              dense
              solo
              hide-details="auto"
              multiple
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="6" class="py-0 mb-2">
            <label>Tình trạng công tác</label>
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsTrangThai"
              v-model="trangThai"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
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
            <v-btn small color="primary" class="mt-3 mx-2  text-white" v-if="typeAction === 'add'" @click.native="submitAddCanBo()" :loading="loading" :disabled="loading">
                <v-icon
                    left
                    dark
                    size="20"
                >
                    mdi-content-save
                </v-icon>
                Thêm mới
            </v-btn>
            <v-btn small color="primary" class="mt-3 mx-2  text-white" v-else @click.native="submitUpdateCanBo()" :loading="loading" :disabled="loading">
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
  import toastr from 'toastr'
  import ChonDoiTuong from './ChonDoiTuong.vue'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  export default {
    name: 'CapNhatCanBo',
    components: {
      "chon-doi-tuong": ChonDoiTuong
    },
    props: ['id'],
    data: () => ({
      loading: false,
      loadingData: false,
      dialogChonDoiTuong: false,
      typeChonDoiTuong: '',
      toChucCapTrenCreate: '',
      itemsDonVi: [],
      itemsTrangThai: [],
      trangThai: '',
      keywordSearch: '',
      donViSearch: '',
      phongBanSearch: '',
      trangThaiSearch: '',
      chucVuSearch: '',
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
      if (vm.id != 0) {
        vm.typeAction = 'update'
        vm.getThongTinCanBo()
      } else {
        vm.typeAction = 'add'
      }
      vm.$store.commit('SET_INDEXTAB', 1)
      let currentQuery = vm.$router.history.current
      let query = currentQuery.query

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
        if (vm.id != 0) {
          vm.typeAction = 'update'
        } else {
          vm.typeAction = 'add'
        }
        vm.$store.commit('SET_INDEXTAB', 1)
        let query = newRoute.query
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
      getThongTinCanBo () {
        let vm = this
        let filter = {
          collectionName: 'canbo',
          id: vm.id
        }
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          let data = response.resp
          if (data) {
            for (let key in vm.thongTinCanBo) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinCanBo[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinCanBo)
        }).catch(function () {
          vm.loadingData = false
        })
      },
      submitAddCanBo () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddCanBo.validate()) {
          let filter = {
            collectionName: 'canbo',
            data: vm.thongTinCanBo
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm mới thành công')
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            if (response && response.status == 409) {
              toastr.error('Mã cán bộ đã tồn tại')
              return
            }
            toastr.error('Thêm mới thất bại')
          })
        } else {
          vm.loading = false
        }
      },
      submitUpdateCanBo () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddCanBo.validate()) {
          let filter = {
            collectionName: 'canbo',
            id: vm.thongTinCanBo['primKey'],
            data: vm.thongTinCanBo
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
          vm.itemsPhongBan = response.content
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
          vm.itemsChucVu = response.content
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
      goBack () {
        window.history.back()
      }
    }
  }
</script>

<style lang="sass">
</style>
