<template>
  <v-card
    class="mx-auto pa-3"
    outlined
    flat
  >
    <v-layout wrap>
      <v-flex xs12 class="pr-3">
        <v-row class="mx-0 my-0" style="border-bottom: 1px solid #2161B1">
          <v-col class="d-flex justify-start px-0 py-0" style="max-width: 250px;color: #2161B1;font-weight: 500;">
            <div class="header-content">
              THÔNG TIN CÁN BỘ
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
        <v-card>
          <v-row class="my-0 mx-0" style="border-bottom: 1px solid #dedede">
            <v-col class="justify-start">
              <div class="mb-2 font-weight-bold" style="color: #2161B1;text-transform: uppercase;">{{thongTinCanBo['hoVaTen']}}</div>
              <div style="color: #2161B1;">{{chucDanhText}} - {{thongTinCanBo['coQuanDonVi']['tenGoi']}}</div>
            </v-col>
            <v-spacer></v-spacer>
            
          </v-row>
          <v-row class="my-0 mx-0" v-if="thongTinCanBo">
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Mã cán bộ:</div>
              <div class="d-inline-block">{{thongTinCanBo['maSoCanBo']}}</div>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Đơn vị công tác:</div>
              <div class="d-inline-block">{{thongTinCanBo['coQuanDonVi']['tenGoi']}}</div>
            </v-col>
            <!-- <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Phòng ban:</div>
              <div class="d-inline-block">{{thongTinCanBo['phongBan']['tenGoi']}}</div>
            </v-col> -->
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Chức vụ:</div>
              <div class="d-inline-block">{{thongTinCanBo['viTriChucDanh'][0]['tenGoi']}}</div>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Điện thoại:</div>
              <div class="d-inline-block">{{thongTinCanBo['danhBaLienLac']['soDienThoai']}}</div>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Email:</div>
              <div class="d-inline-block">{{thongTinCanBo['danhBaLienLac']['thuDienTu']}}</div>
            </v-col>
            <v-col cols="12" md="6" class="py-2" v-if="thongTinCanBo['tinhTrangCongTac']['tenMuc']">
              <div class="d-inline-block font-weight-bold lable-1">Tình trạng công tác:</div>
              <div class="d-inline-block">{{thongTinCanBo['tinhTrangCongTac']['tenMuc']}}</div>
            </v-col>
          </v-row>
          <v-row class="my-0 pb-3">
            <v-col cols="12" class="py-2">
              <v-btn v-if="thongTinCanBo['danhTinhDienTu'][0] && thongTinCanBo['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 2"
                color="primary" small class="mx-3 text-white" @click="showChangePass()">
                Cấp lại mật khẩu
              </v-btn>
              <v-btn color="primary" v-if="!thongTinCanBo['danhTinhDienTu'][0]" small class="mx-3 text-white" @click="showCreateAcc()">
                  Tạo tài khoản
              </v-btn>
              <v-btn v-if="thongTinCanBo['danhTinhDienTu'][0] && thongTinCanBo['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 1" color="primary" small class="mx-3 text-white" @click="showChangeStatusAcc('active')">
                  Kích hoạt tài khoản
              </v-btn>
              <v-btn v-if="thongTinCanBo['danhTinhDienTu'][0] && thongTinCanBo['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 2" color="primary" small class="mx-3 text-white" @click="showChangeStatusAcc('block')">
                  Khóa tài khoản
              </v-btn>
              <v-btn v-if="thongTinCanBo['danhTinhDienTu'][0] && thongTinCanBo['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 3" color="primary" small class="mx-3 text-white" @click="showChangeStatusAcc('unlock')">
                  Mở khóa tài khoản
              </v-btn>
              <v-btn v-if="thongTinCanBo['danhTinhDienTu'][0] && thongTinCanBo['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 4" color="primary" small class="mx-3 text-white" @click="showChangeStatusAcc('restore')">
                  Khôi phục tài khoản
              </v-btn>
              <v-btn color="primary" v-if="thongTinCanBo['danhTinhDienTu'][0] && thongTinCanBo['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 3" small class="mx-3 text-white" @click="showChangeStatusAcc('delete')">
                Xóa tài khoản
              </v-btn>
            </v-col>
          </v-row>
          <v-dialog
            max-width="450"
            v-model="dialogCreateAcc"
            persistent
          >
            <v-card>
              <v-toolbar
                dark
                color="primary"
                class="px-3"
              >
                <v-toolbar-title >Tạo tài khoản</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn
                    icon
                    dark
                    @click="dialogCreateAcc = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text class="mt-5">
                <v-form
                  ref="formCreateAcc"
                  v-model="validFormAdd"
                  lazy-validation
                >
                    <v-layout wrap>
                      <v-flex xs12 class="mb-2">
                        <div class="text-label mb-2">
                          <span>Mật khẩu tài khoản</span>
                          <span class="red--text"> (*)</span>
                        </div>
                        <v-text-field
                          class="input-form"
                          v-model="passwordCreate"
                          solo
                          dense
                          :rules="required"
                          required
                          hide-details="auto"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn small color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogCreateAcc = false">
                  <v-icon left>
                    mdi-close
                  </v-icon>
                  Thoát
                </v-btn>
                <v-btn small class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="createAccount">
                  <v-icon left>
                    mdi-content-save
                  </v-icon>
                  <span>Tạo tài khoản</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog
            class="px-3"
            max-width="450"
            v-model="dialogChangePass"
            persistent
          >
            <v-card>
              <v-toolbar
                class="px-3"
                dark
                color="primary"
              >
                <v-toolbar-title>
                  {{typeChange == 'password' ? 'Cấp lại mật khẩu' : 'Cập nhật tên đăng nhập'}}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn
                    icon
                    dark
                    @click="dialogChangePass = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text class="mt-5">
                <v-form
                  ref="formChangePass"
                  v-model="validFormChangePass"
                  lazy-validation
                >
                    <v-layout wrap>
                      <v-flex xs12 class="mb-2">
                        <div class="text-label mb-2">
                          <span v-if="typeChange == 'password'">Mật khẩu mới</span>
                          <span v-else>Tên đăng nhập mới</span>
                          <span class="red--text"> (*)</span>
                        </div>
                        <v-text-field
                          class="input-form"
                          v-model="passwordChange"
                          solo
                          dense
                          :rules="typeChange == 'password' ? requiredPassword : required"
                          required
                          hide-details="auto"
                          :readonly="typeChange != 'password'"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn small color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogChangePass = false">
                  <v-icon left>
                    mdi-close
                  </v-icon>
                  Thoát
                </v-btn>
                <v-btn small v-if="typeChange == 'password'" class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangePass">
                  <v-icon left>
                    mdi-content-save
                  </v-icon>
                  <span>Xác nhận</span>
                </v-btn>
                <v-btn small v-else class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangeAccount">
                  <v-icon left>
                    mdi-content-save
                  </v-icon>
                  <span>Xác nhận</span>
                </v-btn>
                
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog
          max-width="650"
          v-model="dialogNoteAction"
          persistent
        >
          <v-card>
            <v-toolbar
              class="px-3"
              dark
              color="primary"
            >
              <v-toolbar-title >{{titleAction}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  icon
                  dark
                  @click="dialogNoteAction = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-text class="mt-5">
              <v-form
                ref="formActionAccount"
                v-model="validFormActionAccount"
                lazy-validation
              >
                  <v-layout wrap>
                    <v-flex xs12 class="mb-2">
                      <div class="text-label mb-2">
                        <span>Nhập nội dung</span>
                        <!-- <span class="red--text"> (*)</span> -->
                      </div>
                      <v-textarea
                        class="input-form"
                        v-model="noteAction"
                        solo
                        dense
                        hide-details="auto"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
              </v-form>
            </v-card-text>

            <v-card-actions class="justify-end">
              <v-btn small color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogNoteAction = false">
                <v-icon left>
                  mdi-close
                </v-icon>
                Thoát
              </v-btn>
              <v-btn small class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangeStatusAcc">
                <v-icon left>
                  mdi-content-save
                </v-icon>
                <span>Xác nhận</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        </v-card>
      </v-flex>
    </v-layout>
    
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
    name: 'ThongTinCanBo',
    components: {
      Pagination
    },
    props: ['id'],
    data: () => ({
      loadingAction: false,
      loadingData: false,
      thongTinCanBo: '',
      headers: [
        {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
        },
        {
            sortable: false,
            text: 'Số hiệu hiện tại',
            align: 'left',
            value: 'soHieuHienTai'
        },
        {
            sortable: false,
            text: 'Số hiệu gốc',
            align: 'left',
            value: 'soHieuGoc'
        },
        {
            sortable: false,
            text: 'Số mã vạch',
            align: 'left',
            value: 'soMaVach'
        },
        {
            sortable: false,
            text: 'Số PIN',
            align: 'left',
            value: 'soPin'
        },
        {
            sortable: false,
            text: 'Hết hiệu lực',
            align: 'left',
            value: 'hetHieuLuc'
        },
        {
            sortable: false,
            text: 'Thiết bị',
            align: 'left',
            value: 'thietBi'
        },
        {
            sortable: false,
            text: 'Trạng thái',
            align: 'left',
            value: 'trangThai'
        }
      ],
      itemsChungThuSo: [],
      page: 0,
      itemsPerPage: 15,
      total: 0,
      pageCount: 2,
      chucDanhText: '',
      dialogCreateAcc: false,
      typeChange: '',
      dialogChangePass: false,
      validFormChangePass: true,
      passwordChange: '',
      validFormActionAccount: true,
      dialogNoteAction: false,
      titleAction: '',
      noteAction: '',
      required: [
        v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
      ],
      passwordCreate: '',
      validFormAdd: false
    }),
    created () {
      let vm = this
      vm.getThongTinCanBo()
    },
    computed: {
    },
    watch: {
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
          vm.thongTinCanBo = response.resp
          vm.chucDanhText = vm.thongTinCanBo['viTriChucDanh'][0]['tenGoi']
        }).catch(function () {
          vm.loadingData = false
        })
        vm.getChungThuSo()
      },
      showCreateAcc () {
        let vm = this
        vm.passwordCreate = ''
        vm.dialogCreateAcc = true
      },
      showChangeAcc () {
        let vm = this
        vm.typeChange = 'account'
        vm.passwordChange = vm.thongTinCanBo['maSoCaNhan']
        vm.dialogChangePass = true
      },
      showChangePass () {
        let vm = this
        vm.typeChange = 'password'
        vm.passwordChange = ''
        vm.dialogChangePass = true
      },
      submitChangePass () {
        let vm = this
        if (vm.$refs.formChangePass.validate()) {
          let filter = {
            data: {
              "tenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh'],
              "matKhauMoi": vm.passwordChange,
              "type": "canbo"
            }
          }
          vm.loadingAction = true
          vm.$store.dispatch('changePass', filter).then(function (response) {
            vm.loadingAction = false
            vm.dialogChangePass = false
            toastr.remove()
            toastr.success('Cấp lại mật khẩu thành công')
          }).catch(function () {
            vm.loadingAction = false
            toastr.remove()
            toastr.error('Cấp lại mật khẩu thất bại')
          })
        }
      },
      submitChangeAccount () {
        let vm = this
        if (vm.$refs.formChangePass.validate()) {
          let filter = {
            data: {
              "newTenDinhDanh": vm.passwordChange,
              "oldTenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh']
            },
            "type": "canbo",
            "maDinhDanh": vm.thongTinCanBo.maDinhDanh
          }
          vm.loadingAction = true
          vm.$store.dispatch('changeAcc', filter).then(function (response) {
            vm.loadingAction = false
            vm.dialogChangePass = false
            toastr.remove()
            toastr.success('Cập nhật tên đăng nhập thành công')
            vm.getThongTinCanBo()
          }).catch(function () {
            vm.loadingAction = false
            toastr.remove()
            toastr.error('Cập nhật tên đăng nhập thất bại')
          })
        }
      },
      showChangeStatusAcc (action) {
        let vm = this
        vm.actionStatusAcc = action
        if (action === 'block') {
          vm.titleAction = 'LÝ DO KHÓA TÀI KHOẢN'
        } else if (action === 'active') {
          vm.titleAction = 'NỘI DUNG KÍCH HOẠT TÀI KHOẢN'
        } else if (action === 'unlock') {
          vm.titleAction = 'NỘI DUNG MỞ KHÓA TÀI KHOẢN'
        } else if (action === 'delete') {
          vm.titleAction = 'LÝ DO XÓA TÀI KHOẢN'
        } else if (action === 'restore') {
          vm.titleAction = 'NỘI DUNG KHÔI PHỤC TÀI KHOẢN'
        } 
        vm.noteAction = ''
        vm.dialogNoteAction = true
        setTimeout (function () {
          vm.$refs.formActionAccount.resetValidation()
        }, 100)
      },
      submitChangeStatusAcc () {
        let vm = this
        if (vm.$refs.formActionAccount.validate()) {
          if (vm.actionStatusAcc === 'block') {
            vm.blockAccount()
          } else if (vm.actionStatusAcc === 'delete') {
            vm.deleteAccount()
          } else if (vm.actionStatusAcc === 'active') {
            vm.activeAccount()
          } else if (vm.actionStatusAcc === 'unlock') {
            vm.unLockAccount()
          } else if (vm.actionStatusAcc === 'restore') {
            vm.restoreAccount()
          }
        }
      },
      createAccount () {
        let vm = this
        if (vm.$refs.formCreateAcc.validate()) {
          let filter = {
            data: {
              "maDinhDanh": vm.thongTinCanBo.maDinhDanh,
              "password": vm.passwordCreate,
              "type": "canbo"
            }
          }
          vm.loadingAction = true
          vm.$store.dispatch('createAccountCanBo', filter).then(function (response) {
            vm.loadingAction = false
            vm.dialogCreateAcc = false
            toastr.remove()
            toastr.success('Tạo tài khoản thành công')
            vm.getThongTinCanBo()
          }).catch(function () {
            vm.loadingAction = false
            toastr.remove()
            toastr.error('Tạo tài khoản không thành công')
          })
        }
      },
      activeAccount () {
        let vm = this
        let filter = {
          data: {
            "tenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canbo",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('activeCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          vm.dialogCreateAcc = false
          toastr.remove()
          toastr.success('Kích hoạt tài khoản thành công')
          vm.getThongTinCanBo()
          vm.dialogNoteAction = false
        }).catch(function () {
          vm.loadingAction = false
          toastr.remove()
          toastr.error('Kích hoạt tài khoản không thành công')
        })
      },
      blockAccount () {
        let vm = this
        let filter = {
          data: {
            "tenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canbo",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('blockCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          vm.dialogCreateAcc = false
          toastr.remove()
          toastr.success('Khóa tài khoản thành công')
          vm.getThongTinCanBo()
          vm.dialogNoteAction = false
        }).catch(function () {
          vm.loadingAction = false
          toastr.remove()
          toastr.error('Khóa tài khoản không thành công')
        })
      },
      unLockAccount () {
        let vm = this
        let filter = {
          data: {
            "tenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canbo",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('unBlockCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          toastr.remove()
          toastr.success('Mở khóa tài khoản thành công')
          vm.getThongTinCanBo()
          vm.dialogNoteAction = false
        }).catch(function () {
          vm.loadingAction = false
          toastr.remove()
          toastr.error('Mở khóa tài khoản không thành công')
        })
      },
      restoreAccount () {
        let vm = this
        let filter = {
          data: {
            "tenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canbo",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('restoreCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          toastr.remove()
          toastr.success('Khôi phục tài khoản thành công')
          vm.getThongTinCanBo()
          vm.dialogNoteAction = false
        }).catch(function () {
          vm.loadingAction = false
          toastr.remove()
          toastr.error('Khôi phục tài khoản không thành công')
        })
      },
      deleteAccount () {
        let vm = this
        vm.$confirm({
          title: 'Xác nhận xóa dữ liệu',
          message: 'Bạn có chắc chắn xóa tài khoản này?',
          button: {
            yes: 'Có',
            no: 'Không'
          },
          callback: confirm => {
            if (confirm == true) {
              let filter = {
                data: {
                  "tenDinhDanh": vm.thongTinCanBo['danhTinhDienTu'][0]['tenDinhDanh'],
                  "type": "canbo",
                  "activityNote": vm.noteAction
                }
              }
              vm.loadingAction = true
              vm.$store.dispatch('deleteCaNhan', filter).then(function (response) {
                vm.loadingAction = false
                vm.dialogCreateAcc = false
                toastr.remove()
                toastr.success('Xóa tài khoản thành công')
                vm.getThongTinCanBo()
                vm.dialogNoteAction = false
              }).catch(function () {
                vm.loadingAction = false
                toastr.remove()
                toastr.error('Xóa tài khoản không thành công')
              })
            }
          }
        })
      },
      changePage(config) {
        let vm = this
        vm.page = config.page
        vm.getChungThuSo()
      },
      getChungThuSo () {
        let vm = this
        vm.itemsChungThuSo = [{'soHieuHienTai': 'A12394123', 'soHieuGoc': 'B12394123','chuSoHuu':'Trịnh Công Trình','toChuc': 'Công ty cổ phần FDS', 'email': 'congtrinh0209@gmail.com','soMaVach': '19381241231','soPin': '1983123', 'hetHieuLuc':'12/08/2021','thietBi': 'USB Token','trangThai':'Còn hiệu lực'}]
      },
      goBack () {
        let vm = this
        window.history.back()
      }
    }
  }
</script>

<style lang="sass">
  .lable-1
    margin-right: 8px
</style>
