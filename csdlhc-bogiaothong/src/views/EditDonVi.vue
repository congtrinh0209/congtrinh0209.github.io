<template>
    <div>
      <v-row>
        <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'update'">CẬP NHẬT THÔNG TIN ĐƠN VỊ</div>
          <div class="title-page d-inline-block pt-2" v-if="typeAction == 'add'">THÊM MỚI ĐƠN VỊ</div>
        </v-col>
      </v-row>
      <v-form lazy-validation ref="formAddToChuc" v-model="validFormAdd" class="mt-3">
        <v-row>
            <v-col cols="12" md="4" class="py-0 mb-2">
                <label>Mã cơ quan, đơn vị <span class="red--text">(*)</span></label>
                <v-text-field
                  class="input-form"
                  v-model="thongTinDonVi.maHanhChinh"
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
                  v-model="thongTinDonVi.tenGoi"
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
                  v-model="thongTinDonVi.tenTiengAnh"
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
                  v-model="thongTinDonVi.tenVietTat"
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
                  @blur="formatBirthDate('ngayThanhLapCreate')"
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
                  v-model="thongTinDonVi.soQuyetDinh"
                  solo
                  dense
                  clearable
                  max
                  hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0 mb-2">
                <label>Giấy đăng ký hoạt động</label>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn @click.stop="showAddGiayDangKy" color="#2161b1" text icon class="" v-bind="attrs" v-on="on">
                      <v-icon size="22">mdi-plus-circle-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Thêm giấy đăng ký</span>
                </v-tooltip>
                <v-data-table
                    flat
                    :headers="headers"
                    :items="thongTinDonVi['giayDangKyHoatDong']"
                    hide-default-footer
                    class="elevation-1"
                    no-data-text="Không có"
                    :loading="loadingData"
                    loading-text="Đang tải... "
                >
                    <template v-slot:item.index="{ item, index }">
                      <div>{{ index + 1 }}</div>
                    </template>
                    <template v-slot:item.loaiGiayTo="{ item, index }">
                      <div>{{ item.loaiGiayTo['tenMuc'] }}</div>
                    </template>
                    <template v-slot:item.ngayCap="{ item, index }">
                      <div>{{ dateLocale(item['ngayCap']) }}</div>
                    </template>
                    <template v-slot:item.action="{ item, index }">
                      <div>
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn @click.stop="showEditGiayDangKy(item, index)" color="#2161b1" text icon class=" mr-3" v-bind="attrs" v-on="on">
                              <v-icon size="22">mdi-pencil</v-icon>
                            </v-btn>
                          </template>
                          <span>Sửa</span>
                        </v-tooltip>
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn @click.stop="deleteGiayDangKy(item, index)" color="red" text icon class="" v-bind="attrs" v-on="on">
                              <v-icon size="22">mdi-close</v-icon>
                            </v-btn>
                          </template>
                          <span>Xóa</span>
                        </v-tooltip>
                      </div>
                    </template>
                </v-data-table>
            </v-col>
            <v-col cols="12" md="4" class="py-0 mb-2">
                <label>Email</label>
                <v-text-field
                    class="input-form"
                    v-model="thongTinDonVi.danhBaLienLac['thuDienTu']"
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
                    v-model="thongTinDonVi.danhBaLienLac['soDienThoai']"
                    solo
                    dense
                    clearable
                    max
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0 mb-2">
                <label>Người đại diện</label>
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
                  return-object
                >
                </v-autocomplete>
            </v-col>
            <v-col cols="12" md="4" class="py-0 mb-2">
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
            <v-toolbar-title v-if="typeChonDoiTuong === 'donvi'">Chọn tổ chức cấp trên</v-toolbar-title>
            <v-toolbar-title v-if="typeChonDoiTuong === 'canbo'">Chọn người đại diện</v-toolbar-title>
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
      <v-dialog
        max-width="700"
        v-model="dialogGiayDangKy"
        persistent
      >
        <v-card>
          <v-toolbar
            dark
            color="primary" class="px-3"
          >
            <v-toolbar-title v-if="typeGiayDangKy === 'add'">Thêm giấy đăng ký</v-toolbar-title>
            <v-toolbar-title v-if="typeGiayDangKy === 'update'">Cập nhật giấy đăng ký</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogGiayDangKy = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5 px-2">
              <v-form
                ref="formAddGiayDangKy"
                v-model="validFormAddGiayDangKy"
                lazy-validation
              >
                <v-layout wrap>
                  <v-col cols="12" class="py-0 mb-2">
                    <label>Số giấy <span class="red--text">(*)</span></label>
                    <v-text-field
                      class="flex input-form"
                      v-model="maGiayToDangKy"
                      solo
                      dense
                      :rules="required"
                      required
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0 mb-2">
                    <label>Ngày cấp</label>
                    <v-text-field
                      class="input-form"
                      v-model="ngayCapGiayDangKy"
                      placeholder="dd/mm/yyyy, ddmmyyyy"
                      @blur="formatBirthDate('ngayCapGiayDangKy')"
                      solo
                      dense
                      clearable
                      max
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0 mb-2">
                    <label>Loại giấy đăng ký <span class="red--text">(*)</span></label>
                    <v-autocomplete
                      class="flex input-form"
                      hide-no-data
                      item-text="tenMuc"
                      item-value="maMuc"
                      v-model="loaiGiayToDangKy"
                      :items="itemsLoaiGiayDangKy"
                      dense
                      solo
                      hide-details="auto"
                      return-object
                      clearable
                      :rules="required"
                      required
                    >
                    </v-autocomplete>
                  </v-col>
                </v-layout>
              </v-form>
          </v-card-text>
          <v-card-actions class="justify-end pb-3">
            <v-btn small color="red" class="white--text mr-2"  @click="dialogGiayDangKy = false">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
            <v-btn small class="mr-2" color="primary"  @click.native="addGiayDangKy">
              <v-icon left>
                mdi-content-save
              </v-icon>
              <span>Xác nhận</span>
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
        ngayThanhLapCreate: '',
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
        thongTinDonVi: {
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
        headers: [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index'
          },
          {
              sortable: false,
              text: 'Loại giấy đăng ký hoạt động',
              align: 'left',
              value: 'loaiGiayTo'
          },
          {
              sortable: false,
              text: 'Số giấy tờ',
              align: 'left',
              value: 'soGiay'
          },
          {
              sortable: false,
              text: 'Ngày cấp',
              align: 'left',
              value: 'ngayCap'
          },
          {
              sortable: false,
              text: 'Thao tác',
              align: 'center',
              value: 'action'
          }
        ],
        itemsGiayDangKy: [],
        ngayCapGiayDangKy: '',
        itemsLoaiGiayDangKy: [
          {maMuc: '1', tenMuc: 'Giấy đăng ký hoạt động kính doanh'}
        ],
        maGiayToDangKy: '',
        loaiGiayToDangKy: '',
        indexGiayDangKy: '',
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
            for (let key in vm.thongTinDonVi) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinDonVi[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinDonVi)
        }).catch(function () {
          vm.loadingData = false
          // mockup-data
          let data = vm.mockData.danhSachDonVi[0]
          if (data) {
            for (let key in vm.thongTinDonVi) {
              if (data.hasOwnProperty(key)) {
                vm.thongTinDonVi[key] = data[key]
              }
            }
          }
          vm.formatInputData()
          console.log('dataDonVi', vm.thongTinDonVi)
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
            data: vm.thongTinDonVi
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
        vm.thongTinDonVi.ngayThanhLap = vm.convertDate(vm.ngayThanhLapCreate)
        vm.thongTinDonVi.diaChiHoatDong = {
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
        vm.thongTinDonVi.hinhThucSoHuu = {
          "maMuc": vm.hinhThucSoHuuCreate.maMuc,
          "tenMuc": vm.hinhThucSoHuuCreate.tenMuc
        }
        vm.thongTinDonVi.tinhTrangHoatDong = {
          "maMuc": vm.tinhTrangHoatDongCreate.maMuc,
          "tenMuc": vm.tinhTrangHoatDongCreate.tenMuc
        }
        console.log('thongTinCongDanOutput', vm.thongTinDonVi)
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
      addGiayDangKy () {
        let vm = this
        let giayDangKy = {
          soGiay: vm.maGiayToDangKy,
          ngayCap: vm.convertDate(vm.ngayCapGiayDangKy),
          loaiGiayTo: vm.loaiGiayToDangKy
        }
        if (vm.typeGiayDangKy === 'add') {
          vm.thongTinDonVi['giayDangKyHoatDong'].push(giayDangKy)
        } else {
          Vue.set(vm.thongTinDonVi['giayDangKyHoatDong'], vm.indexGiayDangKy, giayDangKy)
        }
        vm.dialogGiayDangKy = false
      },
      showAddGiayDangKy () {
        let vm = this
        vm.typeGiayDangKy = 'add'
        vm.dialogGiayDangKy = true
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
      showEditGiayDangKy(item, index) {
        let vm = this
        vm.maGiayToDangKy = item.soGiay
        vm.ngayCapGiayDangKy = vm.dateLocale(item.ngayCap)
        vm.loaiGiayToDangKy = item.loaiGiayTo
        vm.indexGiayDangKy = index
        vm.dialogGiayDangKy = true
      },
      deleteGiayDangKy(item, index) {
        let vm = this
        vm.thongTinDonVi.giayDangKyHoatDong.splice(index,1);
      },
      formatInputData () {
        let vm = this
        vm.ngayThanhLapCreate = vm.dateLocale(vm.thongTinDonVi.ngayThanhLap)
        vm.khoiCoQuanCreate = vm.thongTinDonVi.khoiCoQuan
        vm.tinhTrangHoatDongCreate = vm.thongTinDonVi.tinhTrangHoatDong
        vm.hinhThucSoHuuCreate = vm.thongTinDonVi.hinhThucSoHuu
        vm.diaChiHoatDongCuThe = vm.thongTinDonVi.diaChiHoatDong.soNhaChiTiet
        vm.diaChiHoatDongTinhThanh = vm.thongTinDonVi.diaChiHoatDong.tinhThanh
        vm.diaChiHoatDongQuanHuyen = vm.thongTinDonVi.diaChiHoatDong.quanHuyen
        vm.diaChiHoatDongPhuongXa = vm.thongTinDonVi.diaChiHoatDong.phuongXa
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