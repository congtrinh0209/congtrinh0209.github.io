<template>
  <v-card
    class="mx-auto pa-3" style="padding-bottom: 36px !important"
    flat
  >
    <v-layout wrap>
      <v-flex class="py-0">
        <div>
          <v-row justify="end" class="my-0 mx-0" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                Chi tiết báo cáo
              </div>
              <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex align-center justify-end py-0 px-0" style="max-width: 150px;margin-bottom: -3px;">
              <v-btn
                depressed
                class="mx-0"
                small
                color="primary"
                @click="goBack()"
                style="float: right"
                >
                <v-icon size="18">mdi-reply-all</v-icon>
                &nbsp;
                Quay lại
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <v-row class="mx-0 my-0 py-0" style="border: 1px solid #D9D9D9; border-top: 0px;">
              <v-col cols="12" class="py-2">
                <div class="font-weight-bold" style="color: #2161B1;">{{chiTietBaoCao.tenBaoCao}}</div>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Mã báo cáo: </span>
                <span class="blue-text font-weight-bold">{{chiTietBaoCao.maBaoCao}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Kỳ - năm báo cáo: </span>
                <span class="blue-text font-weight-bold">{{chiTietBaoCao.kyBaoCao ? chiTietBaoCao.kyBaoCao.tenMuc : ''}}</span>
                <span class="blue-text font-weight-bold" v-if="chiTietBaoCao.nam"> - {{chiTietBaoCao.nam ? chiTietBaoCao.nam : ''}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Đơn vị xử lý: </span>
                <span class="blue-text font-weight-bold">{{chiTietBaoCao.coQuanThucHien ? chiTietBaoCao.coQuanThucHien.tenGoi : ''}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Tình trạng: </span>
                <span class="blue-text font-weight-bold">{{chiTietBaoCao.tinhTrang ? chiTietBaoCao.tinhTrang.tenMuc : ''}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Ngày tạo: </span>
                <span class="blue-text font-weight-bold">{{dateLocale(chiTietBaoCao.thoiGianTao)}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Hạn xử lý: </span>
                <span class="blue-text font-weight-bold">{{dateLocale(chiTietBaoCao.hanXuLy)}}</span>
              </v-col>
              
              <v-col cols="12" md="3" class="pt-0">
                <div class="d-inline-block" @click="viewHistory">
                  <v-icon size="20" class="font-weight-bold" color="green">mdi-history</v-icon>
                  <a class="ml-2 font-weight-bold" style="font-size: 14px;text-decoration: underline;color: green">Xem lịch sử thực hiện</a>
                </div>
              </v-col>
              <!--  -->
              <v-col class="mb-2" cols="12" v-if="actionItems && actionItems.length">
                <v-btn
                  v-for="(item, index) in actionItems" :key="index"
                  class="btn-form mx-0 mr-3 left" small
                  color="success"
                  :loading="loadingAction" :disabled="loadingAction"
                  @click.stop="showDoAction(item)"
                >
                  <v-icon size="18">mdi-arrow-right-drop-circle-outline</v-icon>&nbsp;
                  <span>{{item.tenHanhDong}}</span>
                </v-btn>
              </v-col>
              <!--  -->
            </v-row>
          </div>
        </div>

        <div>
          <v-row justify="end" class="my-0 mx-0 mt-3" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                Danh sách thành phần
              </div>
              <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col v-if="isAdmin || checkRole('CAPNHATBAOCAO')" class="d-flex align-center justify-end py-0 px-0" style="max-width: 150px;">
              <v-btn
                depressed
                class="mx-0"
                small
                color="primary"
                @click="showAddThanhPhan()"
                style="float: right"
                >
                <v-icon size="18">mdi-file-document-plus-outline</v-icon>
                &nbsp;
                Thêm mới thành phần
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0 pt-3">
            <v-col cols="12"  class="pt-0">
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
                    <tr v-for="(item, index) in items" :key="index" @click="showThongTinThanhPhan(item)">
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
                        <div v-else-if="itemHeader.type == 'action'">
                          <v-tooltip top >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="showThongTinThanhPhan(item)" color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-file-document-multiple-outline</v-icon>
                              </v-btn>
                            </template>
                            <span>Chi tiết thành phần</span>
                          </v-tooltip>
                          <v-tooltip top v-if="isAdmin || checkRole('CAPNHATBAOCAO')">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="showUpdateThanhPhan(item)" color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-pencil</v-icon>
                              </v-btn>
                            </template>
                            <span>Sửa</span>
                          </v-tooltip>
                          <v-tooltip top v-if="isAdmin || checkRole('CAPNHATBAOCAO')">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="xoaThanhPhan(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-delete</v-icon>
                              </v-btn>
                            </template>
                            <span>Xóa</span>
                          </v-tooltip>
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
      max-width="1200"
      v-model="dialogThemThanhPhan"
      persistent
      fullscreen
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
          class="px-3"
        >
          <v-toolbar-title v-if="readonlyForm && editThanhPhan === null">THÔNG TIN THÀNH PHẦN BÁO CÁO</v-toolbar-title>
          <v-toolbar-title v-if="editThanhPhan === true && !readonlyForm">CẬP NHẬT THÀNH PHẦN BÁO CÁO</v-toolbar-title>
          <v-toolbar-title v-if="editThanhPhan === false && !readonlyForm">THÊM THÀNH PHẦN BÁO CÁO</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="exitForm"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="px-2 py-2">
          <form-them-thanh-phan ref="formThanhPhan" :thongtinthanhphan="thanhPhanEdit" :mauNhap="mauNhapForm" :dataInput="dataInput" :readonly="readonlyForm"></form-them-thanh-phan>
          <v-card-actions class="justify-center my-4">
            <v-btn small depressed color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="exitForm">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
            <v-btn v-if="!readonlyForm" small depressed class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitThemThanhPhan">
              <v-icon left dark size="18">
                mdi-file-document-plus-outline
              </v-icon>
              <span v-if="editThanhPhan">Cập nhật</span>
              <span v-else>Thêm thành phần</span>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--  -->
    <v-dialog
      max-width="700"
      v-model="dialogDoAction"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title >Ghi chú thực hiện</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              small
              icon
              dark
              @click="dialogDoAction = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="px-2 pb-0 mt-3">
          <v-form
            ref="formDoAction"
            v-model="validFormDoAction"
            lazy-validation
          >
            <v-layout wrap>
              <v-col cols="12" class="py-0 mb-2">
                <label>Ghi chú</label>
                <v-textarea
                  class="input-form"
                  v-model="ghiChuDoAction"
                  solo
                  dense
                  clearable
                  max
                  hide-details="auto"
                  placeholder="Nội dung ghi chú..."
                  rows="5"
                ></v-textarea>
              </v-col>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end pb-3">
          <v-btn small color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogDoAction = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Hủy
          </v-btn>
          <v-btn small class="mr-0" color="primary" :loading="loadingAction" :disabled="loadingAction" @click="doAction(actionSelected)">
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
      v-model="dialogLichSu"
      persistent
    >
      <v-card>
        <v-toolbar
          dark
          color="primary" class="px-3"
        >
          <v-toolbar-title >Lịch sử thực hiện</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              small
              icon
              dark
              @click="dialogLichSu = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-3 px-2">
          <v-data-table
            :headers="headersTienTrinh"
            :items="danhSachTienTrinh"
            item-key="primKey"
            hide-default-footer
            class="table-base mt-2"
            no-data-text="Không có"
            :loading="loadingData"
            loading-text="Đang tải... "
          >
              <template v-slot:item.index="{ item, index }">
                <div >{{ index + 1 }}</div>
              </template>
              <template v-slot:item.thoiGianCapNhat="{ item }">
                <div>{{ dateLocaleTime(item.thoiGianCapNhat) }}</div>
              </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions class="justify-end pb-3 px-2">
          <v-btn small color="red" class="white--text mx-0"  @click="dialogLichSu = false">
            <v-icon left>
              mdi-close
            </v-icon>
            Thoát
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import Pagination from './Pagination.vue'
import FormThemThanhPhan from './FormThemThanhPhan.vue'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    name: 'BaoCao',
    components: {
      Pagination,
      'form-them-thanh-phan': FormThemThanhPhan
    },
    props: ['type', 'id'],
    data() {
      return {
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
      if (!vm.isAdmin && !vm.checkRole('XEMBAOCAODONVI') && !vm.checkRole('XEMTATCABAOCAO')) {
        vm.$router.push({ path: '/login'})
        return
      }
      vm.getChiTietBaoCao()
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.getChiTietBaoCao()
      }
    },
    methods: {
      getChiTietBaoCao () {
        let vm = this
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'baocao',
          id: vm.id
        }
        vm.actionItems = []
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          vm.chiTietBaoCao = response
          vm.danhSachTienTrinh = vm.chiTietBaoCao.tienTrinh
          let roleUser = vm.$cookies.get('Roles', '') ? vm.$cookies.get('Roles', '').split(',') : []
          let actions = vm.chiTietBaoCao.hasOwnProperty('chiTietQuyTrinh') ? vm.chiTietBaoCao.chiTietQuyTrinh : []
          if (vm.isAdmin) {
            vm.actionItems = actions
          } else {
            for (let index = 0; index < actions.length; index++) {
              let vaiTroAction = actions[index]['vaiTro']
              if (vaiTroAction && vaiTroAction.length) {
                for (let index2 = 0; index2 < vaiTroAction.length; index2++) {
                  let element = vaiTroAction[index2]['maMuc']
                  let perm = roleUser.find(function (item2) {
                    return item2 == element
                  })
                  if (perm) {
                    vm.actionItems.push(actions[index])
                  }
                }
              }
            }
          }
          vm.getChiTietMauBaoCao(vm.chiTietBaoCao['mauBaoCao']['maDinhDanh'])
        }).catch(function () {
          vm.loadingData = false
        })
      },
      getChiTietMauBaoCao (key) {
        let vm = this
        let filter = {
          collectionName: 'maubaocao',
          keySearch: 'madinhdanh',
          id: key
        }
        vm.$store.dispatch('collectionDetailSearch', filter).then(function (response) {
          vm.chiTietMauBaoCao = response.resp
          vm.mauNhapForm = vm.chiTietMauBaoCao.mauNhap
          vm.headers = vm.chiTietMauBaoCao.mauHienThi[0]['headers']
          vm.itemsPerPage = vm.chiTietMauBaoCao.mauHienThi[0].hasOwnProperty('itemsPerPage') ? vm.chiTietMauBaoCao.mauHienThi[0].itemsPerPage : 0
          vm.getdanhSachThanhPhan()
        }).catch(function () {
        })
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
      showAddThanhPhan () {
        let vm = this
        if (vm.danhSachThanhPhan.length && vm.chiTietMauBaoCao.nhapNhieuThanhPhan != 'true') {
          toastr.error('Không thể thêm thành phần. Loại báo cáo chỉ có 1 thành phần')
          return
        }
        vm.readonlyForm = false
        vm.dialogThemThanhPhan = true
        vm.editThanhPhan = false
        setTimeout(function () {
          vm.$refs.formThanhPhan.initForm()
          vm.$refs.formThanhPhan.resetForm()
        }, 200)
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
      submitThemThanhPhan () {
        let vm = this
        let validate = vm.$refs.formThanhPhan.validateForm()
        if (validate) {
          vm.$refs.formThanhPhan.submitTaoBaoCao()
          let formData = vm.$store.getters.getFormData
          let filter = {
            collectionName: 'thanhphanbaocao',
            data: {
              "baoCao": {
                "maDinhDanh": vm.chiTietBaoCao['maDinhDanh'],
                "maBaoCao": vm.chiTietBaoCao['maBaoCao']
              },
              "mauBaoCao": {
                "maDinhDanh": vm.chiTietMauBaoCao.maDinhDanh,
                "maMauBaoCao": vm.chiTietMauBaoCao.maMauBaoCao
              },
              "kyBaoCao": {
                "maMuc": vm.chiTietBaoCao['kyBaoCao']['maMuc'],
                "tenMuc": vm.chiTietBaoCao['kyBaoCao']['tenMuc']
              },
              "noiDung": formData
            }
          }
          console.log('dataBaoCao', filter.data)
          vm.loadingAction = true
          if (!vm.editThanhPhan) {
            vm.$store.dispatch('collectionCreate', filter).then(function (result) {
              vm.runProcessUploadFiles(result.resp)
            }).catch(function (response) {
              vm.loadingAction = false
              toastr.remove()
              toastr.error('Thêm mới thất bại')
            })
          } else {
            filter['id'] = vm.thanhPhanEdit.primKey
            vm.$store.dispatch('collectionUpdate', filter).then(function (result) {
              vm.runProcessUploadFiles(vm.thanhPhanEdit)
            }).catch(function (response) {
              vm.loadingAction = false
              toastr.remove()
              toastr.error('Cập nhật thất bại')
            })
          }
        }
      },
      showThongTinThanhPhan (item) {
        let vm = this
        vm.readonlyForm = true
        vm.editThanhPhan = null
        vm.dataInput = Object.assign({}, item.noiDung)
        vm.dialogThemThanhPhan = true
        setTimeout(function () {
          vm.$refs.formThanhPhan.initForm('update')
        }, 200)
      },
      exitForm () {
        let vm = this
        vm.$refs.formThanhPhan.resetForm()
        vm.dialogThemThanhPhan = false
      },
      xoaThanhPhan (item) {
        let vm = this
        vm.$store.commit('SET_SHOWCONFIRM', true)
        let confirm = {
          auth: false,
          title: 'Xóa thành phần',
          message: 'Bạn có chắc chắn muốn xóa thành phần báo cáo này',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: () => {
            let filter = {
              collectionName: 'thanhphanbaocao',
              id: item.primKey
            }
            vm.loading = true
            vm.$store.dispatch('collectionDelete', filter).then(function (result) {
              vm.loading = false
              toastr.remove()
              toastr.success('Xóa thành phần thành công')
              vm.getdanhSachThanhPhan()
            }).catch(function (response) {
              vm.loading = false
              toastr.remove()
              toastr.error('Xóa thành phần thất bại')
            })
          }
        }
        vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
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
      uploadFiles (index) {
        let vm = this
        let files = ''
        try {
          files = $('#file_upload')[0].files
        } catch (error) {
        }
        let file = files[index]
        let fileName = file['name']
        if (file['name']) {
          fileName = file['name'].replace(/\%/g, '')
          fileName = fileName.replace(/\//g, '')
          fileName = fileName.replace(/\\/g, '')
        }
        let formData = new FormData()
        formData.append('id', vm.thanhPhanEdit.primKey)
        formData.append('files', file, fileName)

        axios.post('/v1/datasharing/thanhphanbaocao/upload', formData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
          }
        }).then(function (response) {
          let files = ''
          try {
            files = $('#file_upload')[0].files
          } catch (error) {
          }
          let file = files[index + 1]
          if (!file) {
            vm.loadingAction = false
            vm.dialogThemThanhPhan = false
            toastr.remove()
            toastr.success('Thực hiện thành công')
            vm.getdanhSachThanhPhan()
            return
          } else {
            vm.uploadFiles(index + 1)
          }
        }).catch(function (xhr) {
          toastr.clear()
          toastr.error('Tài liệu ' + fileName + ' tải lên không thành công. Vui lòng kiểm tra lại.')
          let files = ''
          try {
            files = $('#file_upload')[0].files
          } catch (error) {
          }
          let file = files[index + 1]
          if (!file) {
            vm.loadingAction = false
            vm.dialogThemThanhPhan = false
            toastr.remove()
            toastr.success('Thực hiện thành công')
            vm.getdanhSachThanhPhan()
            return
          } else {
            vm.uploadFiles(index + 1)
          }
        })
      },
      runProcessUploadFiles () {
        let vm = this
        let files = ''
        try {
          files = $('#file_upload')[0].files
        } catch (error) {
        }
        let count = files.length
        if (count) {
          vm.uploadFiles(0)
        } else {
          vm.loadingAction = false
          vm.dialogThemThanhPhan = false
          toastr.remove()
          toastr.success('Thực hiện thành công')
          vm.getdanhSachThanhPhan()
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
        vm.getdanhSachThanhPhan()
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