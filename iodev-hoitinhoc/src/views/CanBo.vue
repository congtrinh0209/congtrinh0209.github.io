<template>
  <v-card
    class="mx-auto pa-3"
    outlined
    flat
  >
    <div>
      <v-row justify="end" class="mt-0 mb-0 mx-0" style="border-bottom: 1px solid #2161B1">
        <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;margin-bottom: -1px;">
          <div class="header-content" v-if="!selectDonVi">
            DANH SÁCH CÁN BỘ
          </div>
          <div class="header-content" v-if="selectDonVi">
            CÁN BỘ - {{donViSearch['tenGoi']}}
          </div>
          <div class="triangle-header"></div>
        </v-col>
        
        <v-spacer></v-spacer>
        
        <v-col class="d-flex align-center justify-end py-0 px-0" style="max-width: 150px;">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="showAddCanBo">
            <v-icon size="18">mdi-plus</v-icon>&nbsp;
            Thêm mới
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row justify="end" class="mt-0">
        <v-col class="d-flex align-center justify-start" style="">
          <v-text-field
              class="input-form"
              v-model="keywordSearch"
              solo
              dense
              clearable
              hide-details="auto"
              placeholder="Nhập tên, mã cán bộ"
          ></v-text-field>
        </v-col>
        <v-col v-if="!selectDonVi" class="d-flex align-center justify-start" style="">
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
        <!-- <v-col v-if="!selectPhongBan" class="d-flex align-center justify-start" style="">
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
        </v-col> -->
        <v-col class="d-flex align-center justify-start" style="max-width: 300px;">
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
            return-object
          >
          </v-autocomplete>
        </v-col>
        <!-- <v-col class="d-flex align-center justify-end" style="max-width: 200px;">
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
            return-object
          >
          </v-autocomplete>
        </v-col> -->
        <v-col class="d-flex align-center justify-end" style="max-width: 150px;">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="getDanhSachCanBo('reset')">
            <v-icon size="18">mdi-magnify</v-icon>&nbsp;
            Tìm kiếm
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="itemsCanBo"
        @click:row="showThongTinCanBo"
        :items-per-page="itemsPerPage"
        item-key="primKey"
        hide-default-footer
        class="table-base mt-5 table-canbo"
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
            {{ formatChucDanh(item.viTriChucDanh)}}
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
                <v-btn small @click.stop="showEditCanBo(item)" color="#2161B1" text icon class=" mr-3" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn small @click.stop="deleteCanBo(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
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
      v-model="dialogAddCanBo"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title v-if="typeAction === 'create'">Thêm mới cán bộ</v-toolbar-title>
          <v-toolbar-title v-else>Cập nhật thông tin cán bộ</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              small
              icon
              dark
              @click="dialogAddCanBo = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5 px-2">
          <v-form
            ref="formAddCanBo"
            v-model="validFormAdd"
            lazy-validation
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
                  placeholder="Chọn giới tính"
                  return-object
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" class="py-0 mb-2">
                <label>Email <span class="red--text">(*)</span></label>
                <v-text-field
                  class="input-form"
                  v-model="thongTinCanBo.danhBaLienLac['thuDienTu']"
                  solo
                  dense
                  clearable
                  max
                  hide-details="auto"
                  :rules="required"
                  required
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
              <!-- <v-col cols="12" md="4" class="py-0 mb-2">
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
              </v-col> -->
              <v-col v-if="!selectDonVi" cols="12"  class="py-0 mb-2">
                <label>Cơ quan, đơn vị</label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  :items="itemsDonVi"
                  v-model="coQuanDonVi"
                  item-text="tenGoi"
                  item-value="maHanhChinh"
                  dense
                  solo
                  hide-details="auto"
                  return-object
                >
                </v-autocomplete>
              </v-col>
              <!-- <v-col v-if="!selectPhongBan" cols="12" md="6" class="py-0 mb-2">
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
              </v-col> -->
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
                  return-object
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
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end pb-3">
          <v-btn small color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="dialogAddCanBo = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
          <v-btn small v-if="typeAction === 'create'" class="mr-0" color="primary" :loading="loading" :disabled="loading" @click="submitAddCanBo">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Thêm mới</span>
          </v-btn>
          <v-btn small v-else class="mr-0" color="primary" :loading="loading" :disabled="loading" @click="submitUpdateCanBo">
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
      validFormActionAccount: true,
      dialogNoteAction: false,
      titleAction: '',
      noteAction: '',
      actionStatusAcc: '',
      dialogStatusAccLog: false,
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
        // {
        //     sortable: false,
        //     text: 'Phòng ban',
        //     align: 'left',
        //     value: 'phongBan'
        // },
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
      selectPhongBan: false
    }),
    created () {
      let vm = this
      if (!vm.isAdmin) {
        vm.$router.push({ path: '/login'})
        return
      }
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
      vm.getDanhMuc('GIOITINH')
      vm.getDanhMuc('TINHTRANGCONGTAC')
      // vm.getDanhMucTinhThanh()
      vm.getToChucCapTren()
      // vm.getPhongBan(vm.donViSearch)
      vm.getChucVu(vm.donViSearch)
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
      // thuongTruTinhThanh (val) {
      //   let vm = this
      //   if (!val) {
      //     vm.itemsThuongTruQuanHuyen = []
      //     vm.thuongTruQuanHuyen = ''
      //     vm.itemsThuongTruPhuongXa = []
      //     vm.thuongTruPhuongXa = ''
      //   }
      //   vm.changeTinhThanh()
      // },
      // thuongTruQuanHuyen (val) {
      //   let vm = this
      //   if (!val) {
      //     vm.itemsThuongTruPhuongXa = []
      //     vm.thuongTruPhuongXa = ''
      //   }
      //   vm.changeQuanHuyen()
      // }
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
            phongBan_maDinhDanh: vm.phongBanSearch ? vm.phongBanSearch['maDinhDanh'] : '',
            viTriChucDanh_maDinhDanh: vm.chucVuSearch ? vm.chucVuSearch['maDinhDanh'] : '',
            tinhTrangCongTac_maMuc: vm.trangThaiSearch ? vm.trangThaiSearch['maMuc'] : ''
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
      showThongTinCanBo (item) {
        let vm = this
        vm.$router.push({ path: '/can-bo/' + item.primKey })
      },
      showEditCanBo (item) {
        let vm = this
        vm.typeAction = 'update'
        vm.dialogAddCanBo = true
        setTimeout(function () {
          vm.thongTinCanBo = item
          vm.formatInputData()
          vm.$refs.formAddCanBo.resetValidation()
        }, 100)
      },
      showAddCanBo () {
        let vm = this
        vm.typeAction = 'create'
        vm.dialogAddCanBo = true
        setTimeout(function () {
          vm.thongTinCanBo = vm.thongTinCanBoSample
          vm.$refs.formAddCanBo.reset()
          vm.$refs.formAddCanBo.resetValidation()
        }, 100)
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
            vm.dialogAddCanBo = false
            vm.getDanhSachCanBo()
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
            vm.dialogAddCanBo = false
            vm.getDanhSachCanBo()
          }).catch(function (response) {
            vm.loading = false
            toastr.remove()
            toastr.error('Cập nhật thông tin thất bại')
          })
        } else {
          vm.loading = false
        }
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
          if (collection === 'TINHTRANGCONGTAC') {
            vm.itemsTrangThai = response.content
          }
          if (collection === 'GIOITINH') {
            vm.itemsGioiTinh = response.content
          }
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
            "maMuc": vm.thuongTruPhuongXa ? vm.thuongTruPhuongXa.maMuc : '',
            "tenMuc": vm.thuongTruPhuongXa ? vm.thuongTruPhuongXa.tenMuc : ''
          },
          "quanHuyen": {
            "maMuc": vm.thuongTruQuanHuyen ? vm.thuongTruQuanHuyen.maMuc : '',
            "tenMuc": vm.thuongTruQuanHuyen ? vm.thuongTruQuanHuyen.tenMuc : ''
          },
          "tinhThanh": {
            "maMuc": vm.thuongTruTinhThanh ? vm.thuongTruTinhThanh.maMuc : '',
            "tenMuc": vm.thuongTruTinhThanh ? vm.thuongTruTinhThanh.tenMuc : ''
          },
          "soNhaChiTiet": vm.diaChiThuongTruCuThe
        }
        vm.thongTinCanBo.gioiTinh = {
          "maMuc": vm.gioiTinhCreate ? vm.gioiTinhCreate.maMuc : '',
          "tenMuc": vm.gioiTinhCreate ? vm.gioiTinhCreate.tenMuc : ''
        }
        vm.thongTinCanBo.tinhTrangCongTac = {
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
        let chucVuOutput = []
        try {
          let chucVu = vm.chucVu.filter(function (item) {
            return item.maDinhDanh
          })
          let chucVuExits = []
          for (let index = 0; index < chucVu.length; index++) {
            let element = chucVu[index]
            let findChucVu = vm.itemsChucVu.find(function (item) {
              return item.maDinhDanh == element.maDinhDanh
            })
            if (findChucVu) {
              chucVuExits.push(element)
            }
          }
          if (chucVuExits && chucVuExits.length) {
            chucVuOutput = Array.from(chucVuExits, function (item) {
              return {maDinhDanh: item.maDinhDanh, tenGoi: item.tenGoi}
            })
          }
        } catch (error) {
        }
        vm.thongTinCanBo.viTriChucDanh = chucVuOutput && chucVuOutput.length ? chucVuOutput : []
      },
      formatInputData () {
        let vm = this
        vm.ngaySinhCreate = vm.dateLocale(vm.thongTinCanBo.ngaySinh)
        vm.gioiTinhCreate = vm.thongTinCanBo.gioiTinh
        vm.trangThai = vm.thongTinCanBo.tinhTrangCongTac
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
      formatChucDanh (chucDanh) {
        if (chucDanh && chucDanh.length) {
          let arr = Array.from(chucDanh, function (item) {
            return item.tenGoi
          })
          return arr.toString().replace(/,/g, '; ')
        } else {
          return ''
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
