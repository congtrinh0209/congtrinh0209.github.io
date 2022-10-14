<template>
  <v-card
    class="mx-auto pa-3 pt-0" style="padding-bottom: 36px !important"
    flat
  >
    <v-layout wrap>
      <v-flex class="py-0">
        <div>
          <v-row justify="end" class="my-0 mx-0 mt-3" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                Tổng hợp báo cáo
              </div>
              <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex align-center justify-end py-0 px-0" style="max-width: 150px;">
              <v-btn
                depressed
                class="mx-0"
                small
                color="primary"
                @click="showAdvanceSearch()"
                style="float: right"
                >
                <v-icon size="18" v-if="!advanceSearch">mdi-filter-variant-plus</v-icon>
                <v-icon size="18" v-else>mdi-filter-variant</v-icon>
                &nbsp;
                Lọc số liệu
              </v-btn>
            </v-col>
          </v-row>
          <!--  -->
          <div v-if="advanceSearch">
            <v-layout wrap class="pt-3" style="margin: 0 -8px">
              <v-col cols="12" :md="danhSachMauThongKe.length > 1 ? 12 : 12" class="py-0 mb-2">
                <label>Nhóm báo cáo</label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  v-model="nhomBaoCao"
                  :items="danhSachNhomBaoCao"
                  item-text="tenMuc"
                  item-value="maMuc"
                  dense
                  solo
                  hide-details="auto"
                  return-object
                  clearable
                  @change="getDanhSachMauBaoCao"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" :md="danhSachMauThongKe.length > 1 ? 12 : 12" class="py-0 mb-2">
                <label>Báo cáo <span class="red--text">(*)</span></label>
                <v-autocomplete
                  class="flex height-auto input-form"
                  hide-no-data
                  v-model="mauBaoCao"
                  :items="danhSachMauBaoCao"
                  item-text="tenGoi"
                  item-value="maMauBaoCao"
                  dense
                  solo
                  hide-details="auto"
                  return-object
                  @change="getDanhSachMauThongKe"
                >
                  <template v-slot:selection="data">
                    <span>{{data.item.maMauBaoCao}}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{{data.item.tenGoi}}</span>
                  </template>
                  <template v-slot:item="data">
                    <span>{{data.item.maMauBaoCao}}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{{data.item.tenGoi}}</span>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="12" class="py-0 mb-2" v-if="danhSachMauThongKe && danhSachMauThongKe.length > 1">
                <label>Mẫu thống kê <span class="red--text">(*)</span></label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  v-model="mauThongKe"
                  :items="danhSachMauThongKe"
                  item-text="tenMau"
                  item-value="maMau"
                  dense
                  solo
                  hide-details="auto"
                  return-object
                >
                </v-autocomplete>
              </v-col>
            </v-layout>
            <form-thong-ke ref="formThongKe" :mauNhap="mauNhapForm"></form-thong-ke>
          </div>
          <v-row class="mb-0 mt-2">
            <v-col cols="12" class="d-flex align-center justify-end py-0 pb-2 my-0" v-if="advanceSearch">
              <v-btn color="primary" depressed small class="mx-0 text-white" @click="submitThongKe('reset')">
                <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                Tổng hợp
              </v-btn>
            </v-col>
          </v-row>
          <!--  -->
          <v-row class="my-0 py-0 pt-3">
            <v-col cols="12" class="pt-0" v-if="mauThongKe">
              <v-data-table
                :headers="headers"
                :items="danhSachThanhPhan"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingData"
                loading-text="Đang tải... "
              >
                <template v-slot:body="{ items, headers}">
                  <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                      <td v-for="(itemHeader, indexHeader) in headers" :key="indexHeader" :class="itemHeader['class']" :width="itemHeader.hasOwnProperty('width') ? itemHeader.width : ''">
                        <div v-if="itemHeader.type == 'index'">
                          <div v-if="itemsPerPage" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                          <div v-else :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">{{ index + 1 }}</div>
                        </div>
                        <div v-else-if="itemHeader.type == 'date'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? dateLocale(item['noiDung'][itemHeader.value]) : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'datetime'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? dateLocaleTime(item['noiDung'][itemHeader.value]) : ''}}
                        </div>
                        <div v-else-if="itemHeader.type == 'object'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? item['noiDung'][itemHeader.value][itemHeader.mapping] : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'money'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? currency(item['noiDung'][itemHeader.value]) : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'array'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? convertDataArray(itemHeader, item['noiDung'][itemHeader.value]) : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'calculator'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ convertDataView(itemHeader, item['noiDung']) }}
                        </div>
                        <div v-else :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'][itemHeader.value] }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :total="total" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
            </v-col>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
    <!--  -->
    <v-dialog
      max-width="700"
      v-model="dialogChonMauThongKe"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title >Chọn loại báo cáo và mẫu thống kê</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-card-text class="px-2 pb-0 mt-3">
          <v-form
            ref="formChonMauThongKe"
            v-model="validFormChonMauThongKe"
            lazy-validation
          >
            <v-layout wrap>
              <v-col cols="12" class="py-0 mb-2">
                <label>Nhóm báo cáo <span class="red--text">(*)</span></label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  v-model="nhomBaoCao"
                  :items="danhSachNhomBaoCao"
                  item-text="tenMuc"
                  item-value="maMuc"
                  dense
                  solo
                  hide-details="auto"
                  return-object
                  clearable
                  @change="getDanhSachMauBaoCao"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" class="py-0 mb-2">
                <label>Báo cáo <span class="red--text">(*)</span></label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  v-model="mauBaoCao"
                  :items="danhSachMauBaoCao"
                  item-text="tenGoi"
                  item-value="maMauBaoCao"
                  dense
                  solo
                  hide-details="auto"
                  return-object
                  @change="getDanhSachMauThongKe"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" class="py-0 mb-2">
                <label>Mẫu thống kê <span class="red--text">(*)</span></label>
                <v-autocomplete
                  class="flex input-form"
                  hide-no-data
                  v-model="mauThongKe"
                  :items="danhSachMauThongKe"
                  item-text="tenMau"
                  item-value="maMau"
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
          <v-btn small color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="goBack">
            <v-icon left>
              mdi-close
            </v-icon>
            Hủy
          </v-btn>
          <v-btn small class="mr-0" color="primary" :loading="loadingAction" :disabled="loadingAction" @click="genThongKe">
            <v-icon left>
              mdi-content-save
            </v-icon>
            <span>Xác nhận</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--  -->
  </v-card>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import Pagination from './Pagination.vue'
import toastr from 'toastr'
import FormThongKe from './FormThongKe.vue'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    name: 'BaoCao',
    components: {
      Pagination,
      'form-thong-ke': FormThongKe
    },
    props: ['type', 'id'],
    data() {
      return {
        dialogChonMauThongKe: false,
        validFormChonMauThongKe: false,
        nhomBaoCao: '',
        danhSachNhomBaoCao: [],
        mauBaoCao: '',
        danhSachMauBaoCao: [],
        mauThongKe: '',
        danhSachMauThongKe: [],
        advanceSearch: true,
        readonlyForm: false,
        mauNhapForm: '',
        dataInput: '',
        formData: '',
        chiTietBaoCao: '',
        chiTietMauBaoCao: '',
        selected: [],
        keywordSearch: '',
        loadingData: false,
        danhSachThanhPhan: [],
        tableConfig: '',
        maBaoCaoSearch: '',
        kyBaoCaoItems: [],
        kyBaoCaoSearch: '',
        donViDuocGiaoItems: [],
        donViDuocGiaoSearch: '',
        loaiBaoCaoItems: [],
        loaiBaoCaoSearch: '',
        trangThaiItems: [],
        trangThaiSearch: '',
        headers: [],
        page: 0,
        itemsPerPage: 0,
        total: 0,
        pageCount: 0,
        menuDate1: false,
        menuDate2: false,
        fromReceiveDate: '',
        fromReceiveDateFormatted: '',
        toReceiveDate: '',
        toReceiveDateFormatted: '',
        dialogThemThanhPhan: false,
        editThanhPhan: false,
        thanhPhanEdit: '',
        loadingAction: false,
        actionItems: [],
        actionSelected: '',
        validFormDoAction: false,
        dialogDoAction: false,
        ghiChuDoAction: '',
        dialogLichSu: false,
        headersTienTrinh: [
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
              value: 'hanhDong',
              class: 'th-center',
              width: 200
          },
          {
              sortable: false,
              text: 'Người thực hiện',
              align: 'left',
              value: 'hoVaTen',
              class: 'th-center',
              width: 200
          },
          {
              sortable: false,
              text: 'Thời gian thực hiện',
              align: 'left',
              value: 'thoiGianCapNhat',
              class: 'th-center',
              width: 150
          },
          {
              sortable: false,
              text: 'Ghi chú thực hiện',
              align: 'left',
              value: 'noiDung',
              class: 'th-center'
          },
        ],
        danhSachTienTrinh: []
      }
    },
    created () {
      let vm = this
      if (!vm.isAdmin && !vm.checkRole('TONGHOPBAOCAO')) {
        vm.$router.push({ path: '/login'})
        return
      }
      vm.getDanhMuc('NHOMBAOCAO')
      vm.getDanhSachMauBaoCao()
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
      }
    },
    methods: {
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
          if (collection === 'NHOMBAOCAO') {
            vm.danhSachNhomBaoCao = response.content
          }
        }).catch(function () {
        })
      },
      getDanhSachMauBaoCao () {
        let vm = this
        let filter = {
          collectionName: 'maubaocao',
          data: {
            orderFields: 'maMauBaoCao',
            orderTypes: 'asc',
            nhomBaoCao_maMuc: vm.nhomBaoCao ? vm.nhomBaoCao.maMuc : '',
            page: 0,
            size: 1000
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.danhSachMauBaoCao = response.content
        }).catch(function () {
        })
      },
      getDanhSachMauThongKe () {
        let vm = this
        vm.danhSachMauThongKe = vm.mauBaoCao ? vm.mauBaoCao['mauThongKe'] : []
        if (!vm.danhSachMauThongKe.length) {
          vm.mauThongKe = ''
          return
        }
        if (vm.danhSachMauThongKe.length === 1) {
          vm.mauThongKe = vm.danhSachMauThongKe[0]
        }
        vm.mauNhapForm = vm.mauThongKe['searchForm']
        vm.headers = vm.mauThongKe.listView[0]['headers']
        vm.itemsPerPage = vm.mauThongKe.listView[0].hasOwnProperty('itemsPerPage') ? vm.mauThongKe.listView[0].itemsPerPage : 0

        setTimeout(function () {
          vm.$refs.formThongKe.initForm()
          vm.$refs.formThongKe.resetForm()
        }, 200)
      },
      genThongKe () {
        let vm = this
        vm.advanceSearch = true
        setTimeout(function () {
          if (vm.$refs.formChonMauThongKe.validate()) {
            vm.$refs.formThongKe.initForm()
            vm.$refs.formThongKe.resetForm()
            vm.dialogChonMauThongKe = false
          }
        }, 200)
      },
      showAdvanceSearch () {
        let vm = this
        vm.advanceSearch = !vm.advanceSearch
      },
      showUpdateThanhPhan (item) {
        let vm = this
        vm.readonlyForm = false
        vm.thanhPhanEdit = item
        try {
          vm.dataInput = Object.assign({}, item.noiDung)
        } catch (error) {
          vm.dataInput = {}
        }
        vm.dialogThemThanhPhan = true
        vm.editThanhPhan = true
        setTimeout(function () {
          vm.$refs.formThanhPhan.initForm('update')
        }, 200)
      },
      submitThongKe (type) {
        let vm = this
        if (!vm.mauBaoCao) {
          toastr.error('Vui lòng chọn báo cáo muốn thống kê')
          return
        }
        if (!vm.mauThongKe) {
          toastr.error('Vui lòng chọn mẫu thống kê')
          return
        }
        vm.$refs.formThongKe.submitTaoBaoCao()
        let formData = vm.$store.getters.getFormThongKe
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
          // vm.resetFormTimKiem()
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let formDataFilter = {}
        for (let key in formData) {
          if (formData[key]) {
            formDataFilter[key] = formData[key]
          }
        }
        let dataSearch = Object.assign(formDataFilter, {
          "mauBaoCao_maMauBaoCao": vm.mauBaoCao.maMauBaoCao,
          "mauThongKe_maMau": vm.mauThongKe.maMau,
          "pageable":{
              "orderFields":"baoCao_maBaoCao",
              "orderTypes":"asc",
              "page": vm.page,
              "size": vm.itemsPerPage
            }
          })
        let filter = {
          data: dataSearch
        }
        console.log('dataSearch', dataSearch)
        vm.$store.dispatch('getThongKe', filter).then(function (response) {
          vm.danhSachThanhPhan = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      exitForm () {
        let vm = this
        vm.$refs.formThanhPhan.resetForm()
        vm.dialogThemThanhPhan = false
      },
      showDoAction (item) {
        let vm = this
        vm.actionSelected = item
        vm.dialogDoAction = true
        vm.ghiChuDoAction = ''
      },
      doAction (item) {
        let vm = this
        vm.loadingAction = true
        let userInfo = vm.$cookies.get('UserInfo', '')
        let filter = {
          id: vm.chiTietBaoCao.primKey,
          collectionName: 'baocao',
          data: Object.assign(vm.chiTietBaoCao, {
            "tinhTrang": {
              "maMuc": item.maTrangThai,
              "tenMuc": item.tenTrangThai
            },
            "tienTrinh": {
              "hoVaTen": userInfo ? userInfo.hoVaTen : '',
              "thoiGianCapNhat": (new Date()).toISOString(),
              "hanhDong": item.tenHanhDong,
              "maHanhDong": item.maHanhDong,
              "noiDung": String(vm.ghiChuDoAction).trim()
            }
          })
        }
        vm.$store.dispatch('collectionUpdate', filter).then(function (result) {
          vm.loadingAction = false
          toastr.remove()
          toastr.success('Thực hiện thành công')
          vm.dialogDoAction = false
          vm.$router.push({ path: '/bao-cao/' + vm.type})
        }).catch(function () {
          vm.loadingAction = false
          vm.dialogDoAction = false
          toastr.remove()
          toastr.error('Thực hiện thất bại')
        })
      },
      checkRoleAction (role) {
        let vm = this
        let roleUser = vm.$cookies.get('Roles', '')
        if (!role || !roleUser) {
          return false
        }
        let roles = roleUser.split(',')
        let exits = roles.find(function (item) {
          return item == role
        })
        if (exits) {
          return true
        } else {
          return false
        }
      },
      viewHistory () {
        let vm = this
        vm.dialogLichSu = true
      },
      convertDataView (itemHeader, item) {
        let output = ''
        try {
          let calu = itemHeader['calculator'].replace(/dataInput/g, 'item')
          output = eval(calu)
        } catch (error) {
          output = ''
        }
        return output
      },
      convertDataArray (itemHeader, array) {
        let output = ''
        if (array) {
          output = Array.from(array, function (item) {
            return item[itemHeader['mapping']]
          })
        }
        output = output.toString().replace(/,/g, ', ')
        return output
      },
      getdanhSachThanhPhan (type) {
        let vm = this
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
          // vm.resetFormTimKiem()
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'thanhphanbaocao',
          data: {
            page: vm.page,
            size: vm.itemsPerPage,
            orderFields: 'baoCao_maBaoCao',
            orderTypes: 'asc',
            baoCao_maBaoCao: vm.chiTietBaoCao.maBaoCao
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.danhSachThanhPhan = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      getStatus(danhTinhDienTu) {
        return danhTinhDienTu[0] ? danhTinhDienTu[0].tinhTrangSuDungTaiKhoan['tenMuc'] : 'Chưa tạo tài khoản'
      },
      getColor (danhTinhDienTu) {
        let status = danhTinhDienTu[0] ? String(danhTinhDienTu[0].tinhTrangSuDungTaiKhoan['MaMuc']) : '0'
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
      currency (value) {
        if (value) {
          let moneyCur = (value / 1).toFixed(0).replace('.', ',')
          return moneyCur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        }
        return ''
      },
      dateLocale (dateInput) {
        if (!dateInput) {
          return ''
        }
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      dateLocaleTime (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
      },
      changePage (config) {
        let vm = this
        vm.page = config.page
        vm.submitThongKe()
      },
      resetFormTimKiem () {
        let vm = this
        vm.$refs.formTimKiem.reset()
        vm.$refs.formTimKiem.resetValidation()
      },
      changeDate(index) {
        let vm = this
        vm.menuDate1 = false
        if (index === '1') {
          vm.fromReceiveDateFormatted = vm.formatDate(vm.fromReceiveDate)
        } else if (index === '2') {
          vm.toReceiveDateFormatted = vm.formatDate(vm.toReceiveDate)
        }
      },
      formatDate(date) {
        if (!date) return ''
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate(date) {
        if (!date) return ''
        if (String(date).indexOf('/') > 0) {
          const [day, month, year] = date.split('/')
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        } else if (String(date).indexOf('-') > 0) {
          const [day, month, year] = date.split('-')
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        } else {
          let date1 = new Date(Number(date))
          return `${date1.getFullYear()}-${(date1.getMonth() + 1).toString().padStart(2, '0')}-${date1.getDate().toString().padStart(2, '0')}`
        }
      },
      getMinMax (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${year}-${month}-${day}`
      },
      goBack () {
        window.history.back()
      }
    }
  }
</script>
<style lang="scss">
  .bao-cao-1 {
    width: 300px;
    max-width: 235px;
    /* border-bottom: 1px solid #DDDDDD; */
  }
  .bao-cao-1 .v-list {
    padding-top: 0px;
  }
  .nav-content {
    border-right: 1px solid #DDDDDD;
    box-sizing: border-box;
    // border-radius: 7px;
    height: 100%;
  }
</style>