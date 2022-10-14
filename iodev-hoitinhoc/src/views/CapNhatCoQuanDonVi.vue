<template>
  <v-card
    class="mx-auto pa-3"
    outlined
    flat
  >
    <div>
      <v-row justify="end" class="mt-0">
        <v-col class="d-flex align-center justify-start" style="max-width: 300px;color: #2161B1;font-weight: 500;">
          <div class="header-content">
            CƠ QUAN, ĐƠN VỊ
          </div>
          <div class="triangle-header"></div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex align-center justify-end" style="max-width: 200px;">
          <v-autocomplete
            class="flex autocomplete-form-input"
            hide-no-data
            :items="itemsCapDonVi"
            v-model="capDonViSearch"
            item-text="name"
            item-value="value"
            dense
            outlined
            hide-details="auto"
            clearable
            placeholder="Cấp đơn vị"
          >
          </v-autocomplete>
        </v-col>
        
        <v-col class="d-flex align-center justify-end" style="max-width: 150px;">
          <v-btn color="primary" class="btn-form mx-0 text-white" @click="">
            <v-icon size="18">mdi-magnify</v-icon>&nbsp;
            Tìm kiếm
          </v-btn>
        </v-col>
        <v-col class="d-flex align-center justify-end" style="max-width: 150px;">
          <v-btn color="primary" class="btn-form mx-0 text-white" @click="showAddToChuc">
            <v-icon size="18">mdi-plus</v-icon>&nbsp;
            Thêm mới
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="itemsToChuc"
        :items-per-page="itemsPerPage"
        @click:row="showThongTinToChuc"
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
        <template v-slot:item.DanhBaLienLac="{ item }">
          <div>
              <v-icon size="16">mdi-phone-in-talk-outline</v-icon>&nbsp; {{ item.DanhBaLienLac['SoDienThoai'] }}
          </div>
          <div>
              <v-icon size="16">mdi-email-fast-outline</v-icon>&nbsp; {{ item.DanhBaLienLac['ThuDienTu'] }}
          </div>
        </template>
        <template v-slot:item.ToChucCapTren="{ item }">
          <div>
            {{ item.ToChucCapTren['TenGoi'] }}
          </div>
        </template>
        <template v-slot:item.DiaChiHoatDong="{ item }">
          <div style="width: 300px;max-width: 300px">
            <span v-if="item['DiaChiHoatDong']['SoNhaChiTiet']">{{item['DiaChiHoatDong']['SoNhaChiTiet']}}, </span>                              
            {{item['DiaChiHoatDong']['PhuongXa']['TenMuc']}} - {{item['DiaChiHoatDong']['QuanHuyen']['TenMuc']}} - {{item['DiaChiHoatDong']['TinhThanh']['TenMuc']}}
          </div>
        </template>
        <template v-slot:item.action="{ item }">
          <div>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="showEditToChuc(item)" color="blue" text icon class=" mr-3" v-bind="attrs" v-on="on">
                  <v-icon size="22">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn @click.stop="" color="red" text icon class="" v-bind="attrs" v-on="on">
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
    <v-dialog
      max-width="900"
      v-model="dialogAddToChuc"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title v-if="typeAction === 'create'">Thêm cơ quan, đơn vị</v-toolbar-title>
          <v-toolbar-title v-else>Cập nhật cơ quan, đơn vị</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="dialogAddToChuc = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5 px-2">
          <v-form
            ref="formAddToChuc"
            v-model="validFormAdd"
            lazy-validation
          >
            <v-layout wrap>
              <v-col cols="12" md="6" class="py-0 mb-2">
                  <label>Mã cơ quan, đơn vị <span class="red--text">(*)</span></label>
                  <v-text-field
                    class="flex input-form"
                    v-model="thongTinToChuc['MaHanhChinh']"
                    solo
                    dense
                    :readonly="typeAction === 'update'"
                    :rules="required"
                    required
                    hide-details="auto"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="py-0 mb-2">
                  <label>Tên cơ quan, đơn vị <span class="red--text">(*)</span></label>
                  <v-text-field
                    class="flex input-form"
                    v-model="thongTinToChuc['TenGoi']"
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
                    v-model="thongTinToChuc.DanhBaLienLac['ThuDienTu']"
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
                    v-model="thongTinToChuc.DanhBaLienLac['SoDienThoai']"
                    solo
                    dense
                    clearable
                    max
                    hide-details="auto"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0 mb-2">
                  <label>Địa chỉ hoạt động</label>
                  <v-text-field
                    class="input-form"
                    v-model="thongTinToChuc.DiaChiHoatDong['SoNhaChiTiet']"
                    solo
                    dense
                    clearable
                    max
                    hide-details="auto"
                    placeholder="Số nhà, đường, phố, xóm..."
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
              <v-col cols="12" md="4" class="py-0">
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
              <v-col cols="12" md="4" class="py-0">
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
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end pb-3">
          <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="dialogAddToChuc = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
          <v-btn v-if="typeAction === 'create'" class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddToChuc">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Thêm mới</span>
          </v-btn>
          <v-btn v-else class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitUpdateToChuc">
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
  export default {
    name: 'CoQuanDonVi',
    components: {
      Pagination
    },
    props: [],
    data: () => ({
      loading: false,
      loadingData: false,
      itemsCapDonVi: [
        {name: 'Cấp sở', 'value': '1'},
        {name: 'Cấp huyện', 'value': '2'}
      ],
      capDonViSearch: '',
      headers: [
        {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
        },
        {
            sortable: false,
            text: 'Cơ quan/ đơn vị',
            align: 'left',
            value: 'TenGoi'
        },
        {
            sortable: false,
            text: 'Mã cơ quan, đơn vị',
            align: 'left',
            value: 'MaHanhChinh'
        },
        {
            sortable: false,
            text: 'Địa chỉ',
            align: 'left',
            value: 'DiaChiHoatDong'
        },
        {
            sortable: false,
            text: 'Điện thoại/ Email',
            align: 'left',
            value: 'DanhBaLienLac'
        },
        {
            sortable: false,
            text: 'Trực thuộc',
            align: 'left',
            value: 'ToChucCapTren'
        },
        {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action'
        }
      ],
      itemsToChuc: [],
      itemsTinhThanh: [],
      diaChiHoatDongCuThe: '',
      diaChiHoatDongTinhThanh: '',
      itemsDiaChiHoatDongQuanHuyen: [],
      diaChiHoatDongQuanHuyen: '',
      itemsDiaChiHoatDongPhuongXa: [],
      diaChiHoatDongPhuongXa: '',
      thongTinToChuc: {
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
      thongTinToChucSample: {
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
      page: 0,
      itemsPerPage: 15,
      total: 0,
      pageCount: 2,
      typeAction: '',
      dialogAddToChuc: false,
      validFormAdd: false,
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
    }),
    created () {
      let vm = this
      vm.itemsToChuc = [
        {
          "id": "1",
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
        }
      ]
    },
    computed: {
    },
    watch: {
    },
    methods: {
      showAddToChuc () {
        let vm = this
        vm.typeAction = 'create'
        vm.dialogAddToChuc = true
        setTimeout(function () {
          vm.thongTinToChuc = vm.thongTinToChucSample
          vm.$refs.formAddToChuc.resetValidation()
        }, 100)
      },
      showEditToChuc (item) {
        let vm = this
        vm.typeAction = 'update'
        vm.thongTinToChuc = item
        vm.dialogAddToChuc = true
      },
      submitAddToChuc () {

      },
      submitUpdateToChuc () {

      },
      getChungThuSo (type) {
        let vm = this
        let thamChieu = ''
        if (type === 'reset') {
          vm.itemsDanhMuc = []
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
        }
        if (vm.loadingData) {
          return
        }
        if (vm.itemSelect.collectionName === 'quanhuyen') {
          thamChieu = vm.tinhThanhSearch
        }
        if (vm.itemSelect.collectionName === 'phuongxa') {
          thamChieu = vm.quanHuyenSearch
        }
        vm.loadingData = true
        let filter = {
          collectionName: vm.itemSelect.collectionName,
          data: {
            keyword: vm.dictName,
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'maMuc',
            orderTypes: 'asc',
            tinhTrang: !vm.statusFilter ? '1,0' : vm.statusFilter,
            thamChieu_maMuc: thamChieu
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsDanhMuc = response.content
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
        vm.getChungThuSo()
      },
      showThongTinToChuc (item) {
        let vm = this
        vm.$router.push({ path: '/co-quan-don-vi/' + item.id })
      },
    }
  }
</script>

<style lang="sass">
</style>
