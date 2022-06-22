<template>
    <div>
      <v-row align-content="center">
          <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
              <div class="title-page d-inline-block pt-2">QUẢN LÝ TÀI KHOẢN</div>
              <v-btn
                class="mx-0 mt-2"
                small
                color="primary"
                @click="showAdvanceSearch()"
                style="float: right"
                >
                <v-icon size="18" v-if="!advanceSearch">mdi-filter-variant-plus</v-icon>
                <v-icon size="18" v-else>mdi-filter-variant</v-icon>
                &nbsp;
                Tìm kiếm nâng cao
              </v-btn>
          </v-col>
          <v-col cols="12" class="my-0 py-0 mb-2">
              <label>Tìm theo từ khóa</label>
              <v-text-field
                  class="input-form mt-2"
                  v-model="keywordSearch"
                  solo
                  dense
                  clearable
                  hide-details="auto"
                  @keyup.enter="getDanhMuc()"
              ></v-text-field>
          </v-col>
          <v-col v-if="advanceSearch" cols="12" md="4" class="py-0 mb-2">
              <label>Loại đối tượng</label>
              <v-autocomplete
                class="flex input-form mt-2"
                hide-no-data
                :items="itemsLoaiDoiTuong"
                v-model="doiTuongSearch"
                item-text="tenMuc"
                item-value="maMuc"
                dense
                solo
                hide-details="auto"
                clearable
                @change="getDanhMuc()"
              >
              </v-autocomplete>
          </v-col>
          <v-col v-if="advanceSearch" cols="12" md="4" class="py-0 mb-2">
              <label>Tình trạng tài khoản</label>
              <v-autocomplete
                class="flex input-form mt-2"
                hide-no-data
                :items="itemsTinhTrang"
                v-model="tinhTrangSearch"
                item-text="tenMuc"
                item-value="tenMuc"
                dense
                solo
                hide-details="auto"
                clearable
                @change="getDanhMuc()"
                return-object
              >
              </v-autocomplete>
          </v-col>
          <v-col v-if="advanceSearch" cols="12" md="4" class="my-0 py-0">
              <label>Ngày đăng ký</label>
              <v-text-field
                class="input-form mt-2"
                v-model="ngayDangKySearch"
                placeholder="dd/mm/yyyy, ddmmyyyy"
                @blur="formatBirthDate('ngayDangKySearch')"
                solo
                dense
                clearable
                max
                hide-details="auto"
              ></v-text-field>
          </v-col>
      </v-row>
      <v-row justify="center" class="mt-0">
          <v-col cols="12" class="d-flex align-center justify-end">
              <v-btn color="primary" small class="mx-0 text-white" @click="getDanhMuc()">
                <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                Tìm kiếm
              </v-btn>
          </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-0">
          <v-card
            class="mx-auto pa-3 mt-3"
            outlined
            flat
          >
              <v-flex class="mb-2">
                  <strong>Số lượng: {{ total }}</strong>
              </v-flex>
              
              <v-data-table
                  :headers="headers"
                  :items="itemsApplicant"
                  :items-per-page="itemsPerPage"
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
                  <template v-slot:item.doiTuongXacThuc="{ item }">
                      <div>
                        {{ item.doiTuongXacThuc.type === 'T_CaNhan' ? 'Cá nhân' : 'Tổ chức, doanh nghiệp' }}
                      </div>
                  </template>
                  <template v-slot:item.thoiGianTao="{ item }">
                      <div>
                        {{ dateLocaleTime(item.thoiGianTao) }}
                      </div>
                  </template>
                  <template v-slot:item.tinhTrangSuDungTaiKhoan="{ item }">
                      <div :style="getColor(item.tinhTrangSuDungTaiKhoan)">
                        {{ getStatus(item.tinhTrangSuDungTaiKhoan) }}
                      </div>
                  </template>
                  <template v-slot:item.action="{ item }">
                      <div>
                          <v-btn
                            text
                            color="primary"
                            @click="viewLog(item)"
                            style="text-transform: none;"
                          >
                            Xem lịch sử
                          </v-btn>
                      </div>
                  </template>
              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
          </v-card>
        </v-col>
      </v-row>
      
      <!--  -->
      <v-dialog
        max-width="1200"
        v-model="dialogStatusAccLog"
        persistent
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title >Lịch sử thay đổi trạng thái tài khoản</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogStatusAccLog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            <v-data-table
              :headers="headersLog"
              :items="logItems"
              :items-per-page="100"
              item-key="primKey"
              hide-default-footer
              class="elevation-1 mt-2"
              no-data-text="Không có"
              :loading="loadingData"
              loading-text="Đang tải... "
          >
              <template v-slot:item.index="{ item, index }">
                  <div>{{index + 1 }}</div>
              </template>
              <template v-slot:item.activityCode="{ item }">
                  <div :style="getLogActionName(item.activityCode)['color']">
                      {{ getLogActionName(item.activityCode)['name'] }}
                  </div>
              </template>
              <template v-slot:item.activityNote="{ item }">
                  <div class="">
                      {{ item.activityNote }}
                  </div>
              </template>
              <template v-slot:item.createdBy="{ item }">
                  <div class="font-weight-bold">
                    {{ item.createdBy.fullName }}
                  </div>
                  <div v-if="item.createdBy.email">
                    {{ item.createdBy.email }}
                  </div>
              </template>
              <template v-slot:item.createdDate="{ item }">
                  <div>
                    {{ dateLocaleTime(item.createdDate) }}
                  </div>
              </template>
              <template v-slot:item.action="{ item }">
                  <div>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            class="ml-2"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            @click="editLog(item)"
                          >
                            mdi-pencil
                          </v-icon>
                        </template>
                        <span>Sửa nội dung</span>
                      </v-tooltip>
                  </div>
              </template>
          </v-data-table>
          </v-card-text>

          <v-card-actions class="justify-end">
            <v-btn color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogStatusAccLog = false">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        max-width="650"
        v-model="dialogChangeLog"
        persistent
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title >Cập nhật nội dung</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogChangeLog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            <v-form
              ref="formChangeLog"
              v-model="validFormChangeLog"
              lazy-validation
            >
                <v-layout wrap>
                  <v-flex xs12 class="mb-2">
                    <v-textarea
                      class="input-form"
                      v-model="logChange"
                      solo
                      dense
                      hide-details="auto"
                    ></v-textarea>
                  </v-flex>
                </v-layout>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <!-- <v-btn color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogChangeLog = false">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn> -->
            <v-btn class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangeLog">
              <v-icon left>
                mdi-content-save
              </v-icon>
              <span>Xác nhận</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--  -->
      <v-dialog
        max-width="900"
        v-model="dialogPrint"
        persistent
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title >Phiếu cấp tài khoản</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogPrint = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            <div id="printPhieu_1" v-html="contentPrint"></div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn color="red" class="white--text mr-2" @click="dialogPrint = false">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
            <v-btn class="mr-2" color="primary" @click.native="submitPrint">
              <v-icon left>
                mdi-printer
              </v-icon>
              <span>In phiếu</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--  -->
    </div>
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
    components: {
      Pagination
    },
    props: ['type'],
    data() {
      return {
        selected: [],
        keywordSearch: '',
        ngayDangKySearch: '',
        loadingData: false,
        itemsTinhTrang: [
          {tenMuc: 'Chưa kích hoạt', maMuc: '1', thaoTac: ''},
          {tenMuc: 'Đang hoạt động', maMuc: '2', thaoTac: ''},
          {tenMuc: 'Đã khóa', maMuc: '3', thaoTac: ''},
          {tenMuc: 'Đã mở khóa', maMuc: '2', thaoTac: 'UNLOCK_ACCOUNT'},
          {tenMuc: 'Đã xóa', maMuc: '4', thaoTac: ''},
          {tenMuc: 'Đã khôi phục', maMuc: '2', thaoTac: 'RESTORE_ACCOUNT'},
        ],
        itemsTrangThai: [
          {tenMuc: 'Đang sử dụng', maMuc: '2'},
          {tenMuc: 'Đánh dấu xóa', maMuc: '1'}
        ],
        itemsLoaiDoiTuong: [
          {tenMuc: 'Tạo tài khoản', maMuc: 'CREATE_ACCOUNT'},
          {tenMuc: 'Kích hoạt tài khoản', maMuc: 'ACTIVE_ACCOUNT'},
          {tenMuc: 'Khóa tài khoản', maMuc: 'LOCK_ACCOUNT'},
          {tenMuc: 'Mở khóa tài khoản', maMuc: 'UNLOCK_ACCOUNT'},
          {tenMuc: 'Xóa tài khoản', maMuc: 'DELETE_ACCOUNT'},
          {tenMuc: 'Khôi phục tài khoản', maMuc: 'RESTORE_ACCOUNT'}
        ],
        doiTuongSearch: '',
        tinhTrangSearch: '',
        trangThaiSearch: '',
        headers: [
            {
                sortable: false,
                text: 'STT',
                align: 'center',
                value: 'index'
            },
            {
                sortable: false,
                text: 'Tên đăng nhập',
                align: 'left',
                value: 'tenDinhDanh'
            },
            {
                sortable: false,
                text: 'Email',
                align: 'left',
                value: 'thuDienTu'
            },
            {
                sortable: false,
                text: 'Đối tượng',
                align: 'left',
                value: 'doiTuongXacThuc'
            },
            {
                sortable: false,
                text: 'Ngày đăng ký',
                align: 'left',
                value: 'thoiGianTao'
            },
            {
                sortable: false,
                text: 'Tình trạng tài khoản',
                align: 'left',
                value: 'tinhTrangSuDungTaiKhoan'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'center',
                value: 'action'
            },
        ],
        itemsApplicant: [],
        page: 0,
        itemsPerPage: 15,
        total: 0,
        chuaCapTaiKhoan: false,
        daCapTaiKhoan: false,
        pageCount: 0,
        advanceSearch: false,
        applicantNameSearch: '',
        applicantIdSearch: '',
        contactSearch: '',
        emailSearch: '',
        itemsTinhThanh: [],
        diaChiThuongTruCuThe: '',
        thuongTruTinhThanh: '',
        itemsThuongTruQuanHuyen: [],
        thuongTruQuanHuyen: '',
        itemsThuongTruPhuongXa: [],
        thuongTruPhuongXa: '',
        dialogStatusAccLog: false,
        headersLog: [
            {
                sortable: false,
                text: 'STT',
                align: 'center',
                value: 'index'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'left',
                value: 'activityCode'
            },
            {
                sortable: false,
                text: 'Nội dung',
                align: 'left',
                value: 'activityNote'
            },
            {
                sortable: false,
                text: 'Người thao tác',
                align: 'left',
                value: 'createdBy'
            },
            {
                sortable: false,
                text: 'Thời gian thao tác',
                align: 'left',
                value: 'createdDate'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'center',
                value: 'action'
            }
        ],
        accUpdate: '',
        logItems: [],
        logUpdate: '',
        dialogChangeLog: false,
        logChange: '',
        validFormChangeLog: true,
        dialogPrint: false,
        contentPrint: '',
        loadingAction: false
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 5)
      vm.getDanhMuc('reset')
      // vm.getDanhMucSearch('tinhtrangsudungtaikhoan')
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 5)
      },
    },
    methods: {
      getDanhMuc (type) {
        let vm = this
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
          vm.heThongThongTin = ''
          vm.activityCode = ''
          vm.tinhTrangSuDungTaiKhoan_maMuc = ''
          vm.keywordSearch = ''
          vm.doiTuongSearch = ''
          vm.ngayDangKySearch = ''
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          data: {
            page: vm.page,
            size: vm.itemsPerPage,
            orderTypes: 'asc',
            orderFields: 'tenDinhDanh',
            keyword: vm.keywordSearch,
            ngayDangKy: vm.ngayDangKySearch,
            tinhTrangSuDungTaiKhoan_maMuc: vm.tinhTrangSearch ? vm.tinhTrangSearch['maMuc'] : '',
            doiTuong: vm.doiTuongSearch ? vm.doiTuongSearch['maMuc'] : '',
            activityCode: vm.tinhTrangSearch ? vm.tinhTrangSearch['thaoTac'] : '',
            heThongThongTin: ''
          }
        }
        vm.$store.dispatch('getDanhTinhDienThu', filter).then(function (response) {
          vm.itemsApplicant = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.itemsApplicant = []
          vm.total = 0
          vm.pageCount = 0
          vm.loadingData = false
        })
      },
      getDanhMucSearch (name) {
        let vm = this
        let filter = {
          collectionName: name,
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
          vm.itemsTinhTrang = response.content
        }).catch(function () {
        })
      },
      getStatus(tinhTrangSuDungTaiKhoan) {
        return tinhTrangSuDungTaiKhoan ? tinhTrangSuDungTaiKhoan['tenMuc'] : 'Chưa tạo tài khoản'
      },
      getColor (tinhTrangSuDungTaiKhoan) {
        let status = tinhTrangSuDungTaiKhoan ? String(tinhTrangSuDungTaiKhoan['maMuc']) : '0'
        switch(status) {
          case '1':
              return 'color: blue'
          case '2':
              return 'color: green'
          case '3':
            return 'color: orange'
          case '4':
            return 'color: red'
          default:
            return 'color: black'
        }
      },
      dateLocale (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      changePage (config) {
        let vm = this
        vm.page = config.page
        vm.getDanhMuc()
      },
      showAdvanceSearch () {
        let vm = this
        vm.advanceSearch = !vm.advanceSearch
      },
      viewLog (item) {
        let vm = this
        vm.accUpdate = item
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          data: {
            className: 'com.fds.flex.core.data.entity.T_Model.DanhTinhDienTu',
            classPK: item['maDinhDanh'],
            page: 0,
            size: 100
          }
          
        }
        vm.$store.dispatch('getLogChangeStatusAcc', filter).then(function (response) {
          vm.loadingData = false
          vm.logItems = response.content.reverse()
          vm.dialogStatusAccLog = true
        }).catch(function () {
          vm.loadingData = false
        })
      },
      editLog (item) {
        let vm = this
        vm.logUpdate = item
        vm.logChange = item.activityNote
        vm.dialogChangeLog = true
      },
      getLogActionName (code) {
        switch(code) {
          case 'LOCK_ACCOUNT':
              return {name: 'Khóa tài khoản', color: 'color: red'}
          case 'DELETE_ACCOUNT':
              return {name: 'Xóa tài khoản', color: 'color: red'}
          case 'UNLOCK_ACCOUNT':
              return {name: 'Mở khóa tài khoản', color: 'color: green'}
          case 'ACTIVE_ACCOUNT':
              return {name: 'Kích hoạt tài khoản', color: 'color: green'}
          case 'RESTORE_ACCOUNT':
              return {name: 'Khôi phục tài khoản', color: 'color: green'}
          case 'CREATE_ACCOUNT':
              return {name: 'Tạo tài khoản', color: 'color: green'}
          default:
              return {name: code, color: 'color: black'}  
        }
      },
      submitChangeLog () {
        let vm = this
        let filter = {
          "uuid": vm.logUpdate['uuid'],
          data: {
            "activityNote": vm.logChange
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('updateLog', filter).then(function (response) {
          vm.loadingAction = false
          toastr.remove()
          toastr.success('Cập nhật thành công')
          vm.viewLog(vm.accUpdate)
          vm.dialogChangeLog = false
        }).catch(function () {
          vm.loadingAction = false
          toastr.remove()
          toastr.error('Cập nhật không thành công')
        })
      },
      printPhieu () {
        let vm = this
        let filter = {
          "madinhdanh": vm.thongTinCongDan['danhTinhDienTu'][0]['maDinhDanh']
        }
        vm.loadingAction = true
        vm.$store.dispatch('printPhieu', filter).then(function (response) {
          vm.contentPrint = response.content
          vm.loadingAction = false
          if (vm.contentPrint) {
            vm.dialogPrint = true
          } else {
            toastr.remove()
            toastr.error('Không có phiếu in')
          }
        }).catch(function () {
          vm.loadingAction = false
        })
      },
      submitPrint() {
        var printContents = document.getElementById("printPhieu_1").innerHTML
        var a = window.open()
        a.document.write(printContents)
        a.document.close()
        a.print()

        // var element = document.getElementById('printPhieu_1')
        // html2pdf(element)
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
      convertDate (date) {
        if (!date) return ''
        const [day, month, year] = date.split('/')
        let ddd = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        return (new Date(ddd)).toISOString()
      },
      dateLocale (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      dateLocaleTime (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} `
      },
    }
}
</script>