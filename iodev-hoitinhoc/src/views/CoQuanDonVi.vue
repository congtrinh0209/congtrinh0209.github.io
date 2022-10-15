<template>
  <v-card
    class="mx-auto pa-3"
    outlined
    flat
  >
    <v-layout>
      <v-flex>
      <v-row justify="end" class="mt-0 mb-0 mx-0" style="border-bottom: 1px solid #2161B1">
        <v-col class="d-flex align-center justify-start py-0 pl-0" style="max-width: 300px;color: #2161B1;font-weight: 500;margin-bottom: -5px;">
          <div class="header-content ">
            CƠ QUAN, ĐƠN VỊ
          </div>
          <div class="triangle-header"></div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex align-center justify-end py-0" style="max-width: 500px;">
          <v-text-field
              class="mb-1"
              v-model="keywordSearch"
              dense
              clearable
              hide-details="auto"
              placeholder="Nhập tên đơn vị, mã đơn vị"
              append-icon="mdi-magnify"
              @click:append="getCoQuanDonVi('reset')"
              @keyup.enter="getCoQuanDonVi('reset')"
          ></v-text-field>
        </v-col>
        
        <!-- <v-col class="d-flex align-center justify-end py-0" style="max-width: 150px;">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="getCoQuanDonVi('reset')">
            <v-icon size="18">mdi-magnify</v-icon>&nbsp;
            Tìm kiếm
          </v-btn>
        </v-col> -->
        <v-col class="d-flex align-center justify-end py-0 px-0" style="max-width: 120px;">
          <v-btn small color="primary" class="btn-form mx-0 text-white" @click="showAddToChuc">
            <v-icon size="18">mdi-plus</v-icon>&nbsp;
            Thêm mới
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="row my-0 mb-3">
        <v-col cols="12" class="pt-0">
          <v-data-table
            :headers="headers"
            :items="itemsToChuc"
            :items-per-page="itemsPerPage"
            item-key="primKey"
            hide-default-footer
            class="table-base mt-5"
            no-data-text="Không có"
            :loading="loadingData"
            loading-text="Đang tải... "
            flat
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
            <template v-slot:item.toChucCapTren="{ item }">
              <div>
                {{ item.toChucCapTren['tenGoi'] }}
              </div>
            </template>
            <template v-slot:item.diaChiHoatDong="{ item }">
              <div style="width: 300px;max-width: 300px">
                <span v-if="item['diaChiHoatDong']['soNhaChiTiet']">{{item['diaChiHoatDong']['soNhaChiTiet']}}, </span>                              
                {{item['diaChiHoatDong']['phuongXa']['tenMuc']}} - {{item['diaChiHoatDong']['quanHuyen']['tenMuc']}} - {{item['diaChiHoatDong']['tinhThanh']['tenMuc']}}
              </div>
            </template>
            <template v-slot:item.action="{ item }">
              <div>
                <v-tooltip top v-if="isAdmin || checkRole('WRITE_QL_PHONGBAN') || checkRole('READ_QL_PHONGBAN')">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn small @click.stop="showDanhSachPhongBan(item)" color="#2161B1" text icon class=" mr-3" v-bind="attrs" v-on="on">
                      <v-icon size="22">mdi-file-tree-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Danh sách phòng ban</span>
                </v-tooltip>
                <v-tooltip top v-if="isAdmin || checkRole('WRITE_QL_CANBO') || checkRole('READ_QL_CANBO')">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn small @click.stop="showDanhSachCanBo(item)" color="#2161B1" text icon class=" mr-3" v-bind="attrs" v-on="on">
                      <v-icon size="22">mdi-account-multiple-plus-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Danh sách cán bộ</span>
                </v-tooltip>
                <v-tooltip top v-if="isAdmin  || checkRole('WRITE_QL_COQUANDONVI')">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn small @click.stop="showEditToChuc(item)" color="#2161B1" text icon class=" mr-3" v-bind="attrs" v-on="on">
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
        </v-col>
      </v-row>
      </v-flex>
    </v-layout>
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
              small
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
                    v-model="thongTinToChuc['maHanhChinh']"
                    solo
                    dense
                    :rules="required"
                    required
                    hide-details="auto"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="py-0 mb-2">
                  <label>Tên cơ quan, đơn vị <span class="red--text">(*)</span></label>
                  <v-text-field
                    class="flex input-form"
                    v-model="thongTinToChuc['tenGoi']"
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
                    v-model="thongTinToChuc.danhBaLienLac['thuDienTu']"
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
                    v-model="thongTinToChuc.danhBaLienLac['soDienThoai']"
                    solo
                    dense
                    clearable
                    max
                    hide-details="auto"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="py-0 mb-2">
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
              <v-col cols="12" md="6" class="py-0 mb-2">
                  <label>Tổ chức cấp trên</label>
                  <v-autocomplete
                    class="flex input-form"
                    :items="itemsToChucCapTren"
                    v-model="toChucCapTrenCreate"
                    hide-no-data
                    item-text="tenGoi"
                    item-value="maHanhChinh"
                    dense
                    solo
                    hide-details="auto"
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
          <v-btn small color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="cancelCreate">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
          <v-btn small v-if="typeAction === 'create'" class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddToChuc">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Thêm mới</span>
          </v-btn>
          <v-btn small v-else class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitUpdateToChuc">
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
      keywordSearch: '',
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
            value: 'tenGoi'
        },
        {
            sortable: false,
            text: 'Mã cơ quan, đơn vị',
            align: 'left',
            value: 'maHanhChinh'
        },
        // {
        //     sortable: false,
        //     text: 'Địa chỉ',
        //     align: 'left',
        //     value: 'diaChiHoatDong'
        // },
        // {
        //     sortable: false,
        //     text: 'Điện thoại/ Email',
        //     align: 'left',
        //     value: 'danhBaLienLac'
        // },
        // {
        //     sortable: false,
        //     text: 'Trực thuộc đơn vị',
        //     align: 'left',
        //     value: 'toChucCapTren'
        // },
        // {
        //     sortable: false,
        //     text: 'Thao tác',
        //     align: 'center',
        //     value: 'action'
        // }
      ],
      ngayThanhLapCreate: '',
      itemsToChucCapTren: [],
      toChucCapTrenCreate: '',
      tinhTrangHoatDongCreate: '',
      itemsTinhTrangHoatDong: [],
      itemsToChuc: [],
      itemsTinhThanh: [],
      diaChiHoatDongCuThe: '',
      diaChiHoatDongTinhThanh: '',
      itemsDiaChiHoatDongQuanHuyen: [],
      diaChiHoatDongQuanHuyen: '',
      itemsDiaChiHoatDongPhuongXa: [],
      diaChiHoatDongPhuongXa: '',
      thongTinToChuc: {
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
          "maHanhChinh": "",
          "tenGoi": "",
          "tenTiengAnh": "",
          "tenVietTat": ""
        }
      },
      thongTinToChucSample: {
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
          "maHanhChinh": "",
          "tenGoi": "",
          "tenTiengAnh": "",
          "tenVietTat": ""
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
      if (!vm.isAdmin) {
        vm.$router.push({ path: '/dang-nhap'})
        return
      }
      vm.$store.commit('SET_INDEXTAB', 1)
      vm.getCoQuanDonVi()
      vm.getDanhMuc()
      vm.getDanhMucTinhThanh()
      vm.getToChucCapTren()
    },
    computed: {
    },
    watch: {
      diaChiHoatDongTinhThanh (val) {
        let vm = this
        if (!val) {
          vm.itemsDiaChiHoatDongQuanHuyen = []
          vm.diaChiHoatDongQuanHuyen = ''
          vm.itemsDiaChiHoatDongPhuongXa = []
          vm.diaChiHoatDongPhuongXa = ''
        }
        vm.changeTinhThanh()
      },
      diaChiHoatDongQuanHuyen (val) {
        let vm = this
        if (!val) {
          vm.itemsDiaChiHoatDongPhuongXa = []
          vm.diaChiHoatDongPhuongXa = ''
        }
        vm.changeQuanHuyen()
      }
    },
    methods: {
      showDanhSachPhongBan (item) {
        let vm = this
        vm.$router.push({ path: '/phong-ban?gov=' + item.maDinhDanh + '&name=' + item.tenGoi })
      },
      showDanhSachCanBo (item) {
        let vm = this
        vm.$router.push({ path: '/can-bo?gov=' + item.maDinhDanh + '&code=' + item.maHanhChinh+ '&name=' + item.tenGoi })
      },
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
        vm.formatInputData()
        vm.dialogAddToChuc = true
      },
      submitAddToChuc () {
        let vm = this
        vm.formatOutputData()
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formAddToChuc.validate()) {
          let filter = {
            collectionName: 'coquandonvi',
            data: vm.thongTinToChuc
          }
          vm.$store.dispatch('collectionCreate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Thêm mới thành công')
            let data = result.resp
            vm.$router.push({ path: '/co-quan-don-vi/' + data.primKey })
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
            collectionName: 'coquandonvi',
            id: vm.thongTinToChuc['primKey'],
            data: vm.thongTinToChuc
          }
          vm.$store.dispatch('collectionUpdate', filter).then(function (result) {
            vm.loading = false
            toastr.remove()
            toastr.success('Cập nhật thông tin thành công')
            vm.dialogAddToChuc = false
            vm.getCoQuanDonVi()
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
        vm.getCoQuanDonVi()
        vm.dialogAddToChuc = false
      },
      getCoQuanDonVi (type) {
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
          collectionName: 'coquandonvi',
          data: {
            keyword: vm.keywordSearch,
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'tenGoi',
            orderTypes: 'asc'
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsToChuc = response.content
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
        vm.getCoQuanDonVi()
      },
      showThongTinToChuc (item) {
        let vm = this
        vm.$router.push({ path: '/co-quan-don-vi/' + item.primKey })
      },
      getDanhMuc () {
        let vm = this
        let filter = {
          collectionName: 'tinhtrangtochuc',
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
        if (!vm.diaChiHoatDongTinhThanh) {
          return
        }
        danhMucCha = vm.diaChiHoatDongTinhThanh['maMuc']
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
          vm.itemsDiaChiHoatDongQuanHuyen = response.content
        }).catch(function () {
        })
      },
      changeQuanHuyen (type) {
        let vm = this
        let danhMucCha = ''
        if (!vm.diaChiHoatDongQuanHuyen) {
          return
        }
        danhMucCha = vm.diaChiHoatDongQuanHuyen['maMuc']
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
          vm.itemsDiaChiHoatDongPhuongXa = response.content
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
          vm.itemsToChucCapTren = response.content
        }).catch(function () {
        })
      },
      formatOutputData () {
        let vm = this
        vm.thongTinToChuc.diaChiHoatDong = {
          "phuongXa": {
            "maMuc": vm.diaChiHoatDongPhuongXa ? vm.diaChiHoatDongPhuongXa.maMuc : '',
            "tenMuc": vm.diaChiHoatDongPhuongXa ? vm.diaChiHoatDongPhuongXa.tenMuc : ''
          },
          "quanHuyen": {
            "maMuc": vm.diaChiHoatDongQuanHuyen ? vm.diaChiHoatDongQuanHuyen.maMuc : '',
            "tenMuc": vm.diaChiHoatDongQuanHuyen ? vm.diaChiHoatDongQuanHuyen.tenMuc : ''
          },
          "tinhThanh": {
            "maMuc": vm.diaChiHoatDongTinhThanh ? vm.diaChiHoatDongTinhThanh.maMuc : '',
            "tenMuc": vm.diaChiHoatDongTinhThanh ? vm.diaChiHoatDongTinhThanh.tenMuc : ''
          },
          "soNhaChiTiet": vm.diaChiHoatDongCuThe
        }
        vm.thongTinToChuc.tinhTrangToChuc = {
          "maMuc": vm.tinhTrangHoatDongCreate ? vm.tinhTrangHoatDongCreate.maMuc : '',
          "tenMuc": vm.tinhTrangHoatDongCreate ? vm.tinhTrangHoatDongCreate.tenMuc : ''
        }
        vm.thongTinToChuc.toChucCapTren = {
          "maHanhChinh": vm.toChucCapTrenCreate ? vm.toChucCapTrenCreate.maHanhChinh : '',
          "tenGoi": vm.toChucCapTrenCreate ? vm.toChucCapTrenCreate.tenGoi : '',
          "tenTiengAnh": "",
		      "tenVietTat": ""
        }
        console.log('thongTinCongDanOutput', vm.thongTinToChuc)
      },
      formatInputData () {
        let vm = this
        vm.tinhTrangHoatDongCreate = vm.thongTinToChuc.tinhTrangToChuc
        vm.toChucCapTrenCreate = vm.itemsToChucCapTren.find(function (item) {
          return item.maHanhChinh == vm.thongTinToChuc.toChucCapTren['maHanhChinh']
        })
        vm.diaChiHoatDongCuThe = vm.thongTinToChuc.diaChiHoatDong.soNhaChiTiet
        vm.diaChiHoatDongTinhThanh = vm.thongTinToChuc.diaChiHoatDong.tinhThanh
        vm.diaChiHoatDongQuanHuyen = vm.thongTinToChuc.diaChiHoatDong.quanHuyen
        vm.diaChiHoatDongPhuongXa = vm.thongTinToChuc.diaChiHoatDong.phuongXa
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
