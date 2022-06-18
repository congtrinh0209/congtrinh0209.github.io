<template>
    <div>
        <v-row>
            <v-col cols="12" md="8">
                <div class="d-flex justify-space-between mb-4">
                    <div class="title-page">THÔNG TIN CÔNG DÂN</div>
                    <div>
                        <v-btn
                            class="mx-0 mr-3"
                            small
                            color="primary"
                            @click="goBack()"
                        >
                            <v-icon size="18">mdi-reply</v-icon>&nbsp;
                            <span>Quay lại</span>
                        </v-btn>
                        <!-- <v-btn
                            v-if="!daCapChungThu"
                            class="mx-0 mr-3"
                            small
                            color="primary"
                            @click="createChungThuSo()"
                        >
                            <v-icon size="18">mdi-plus</v-icon>&nbsp;
                            <span>Cấp chứng thư số</span>
                        </v-btn> -->
                        <v-btn
                            class="mx-0"
                            small
                            color="primary"
                            @click="editCongDan(thongTinCongDan['primKey'])"
                        >
                            <v-icon size="18">mdi-pencil-outline</v-icon>&nbsp;
                            <span>Cập nhật thông tin</span>
                        </v-btn>
                    </div>
                </div>
                <div>
                    <div class="mb-3" v-if="thongTinCongDan['trangThaiDuLieu']['maMuc'] == 2">
                      <v-icon
                        color="green darken-2"
                      >
                        mdi-check-decagram-outline
                      </v-icon>
                      <span class="ml-2" style="color: #388E3C; text-transform: uppercase;">{{thongTinCongDan['trangThaiDuLieu']['tenMuc']}}</span>
                    </div>
                    <div class="mb-3" v-if="thongTinCongDan['trangThaiDuLieu']['maMuc'] == 1">
                      <v-icon
                        color="red darken-2"
                      >
                        mdi-close-octagon-outline
                      </v-icon>
                      <span class="ml-2" style="color: #D32F2F; text-transform: uppercase;">{{thongTinCongDan['trangThaiDuLieu']['tenMuc']}}</span>
                    </div>
                    <v-simple-table :dense="true" class="cong-dan-info"  style="border-bottom: thin solid rgba(0, 0, 0, 0.12);">
                        <template v-slot:default>
                            <tbody>
                                <tr v-for="(item, index) in thongTin" :key="index" :class="{'td-highlight': index%2 === 0}">
                                    <td class="py-2 px-6" style="width: 200px"><strong>{{item.lable}}</strong></td>
                                    <td v-if="item.value !== 'action'" class="py-2">
                                      <span v-if="item.type && item.type === 'date'">{{dateLocale(thongTinCongDan[item.value])}}</span>
                                      <span v-else-if="item.type === 'danhmuc'">{{thongTinCongDan[item.value] ? thongTinCongDan[item.value]['tenMuc'] : ''}}</span>
                                      <span v-else-if="item.type === 'address'">
                                        <span v-if="thongTinCongDan[item.value]">
                                          {{thongTinCongDan[item.value]['soNhaChiTiet']}}, {{thongTinCongDan[item.value]['phuongXa']['tenMuc']}} - 
                                          {{thongTinCongDan[item.value]['quanHuyen']['tenMuc']}} - {{thongTinCongDan[item.value]['tinhThanh']['tenMuc']}}
                                        </span>
                                        <span v-else></span>
                                      </span>
                                      <span v-else-if="item.value === 'sdt'">{{thongTinCongDan['danhBaLienLac'] ? thongTinCongDan['danhBaLienLac']['soDienThoai'] : ''}}</span>
                                      <span v-else-if="item.value === 'email'">{{thongTinCongDan['danhBaLienLac'] ? thongTinCongDan['danhBaLienLac']['thuDienTu'] : ''}}</span>
                                      <span v-else>{{ thongTinCongDan[item.value]}}</span>
                                    </td>
                                    <td v-else class="py-2">    
                                      <v-btn                            
                                          dark
                                          text
                                          color="primary"
                                          >
                                          <v-icon dark>
                                              mdi-plus
                                          </v-icon>
                                      </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </div>
                <!-- <div class="title-page mt-3">GIẤY TỜ, TÀI LIỆU</div>
                <div class="px-0 mt-4">
                    <v-data-table
                        flat
                        :headers="headers"
                        :items="items"
                        :items-per-page="itemsPerPage"
                        hide-default-footer
                        class="elevation-1"
                        no-data-text="Không có"
                        :loading="loadingData"
                        loading-text="Đang tải... "
                    >
                        <template v-slot:item.index="{ item, index }">
                            <div>{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                        </template>
                        <template v-slot:item.action="{ item }">
                            <div>
                                <v-btn
                                    class="mx-2"
                                    small
                                    text
                                    color="primary"
                                >
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-btn>
                            </div>
                        </template>
                    </v-data-table>
                    <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount"></pagination>
                </div> -->
            </v-col>
            <v-col cols="12" md="4" class="mt-2">
                <v-card class="pt-4">
                    <div class="d-flex align-center flex-column">
                        <img class="mb-4" style="width: 226px; height: 226px;" :src="`${publicPath}/images/avt.png`">
                        <h4 class="title-page">{{thongTinCongDan['hoVaTen']}}</h4>
                        <v-layout class="mt-4" wrap style="width: 350px;">
                            <v-flex xs5>Tên đăng nhập:</v-flex>
                            <v-flex xs7 class="mb-2">
                              <span class="font-weight-bold">
                                {{thongTinCongDan && thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0] ? thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'] : 'Chưa tạo tài khoản'}}
                              </span>
                            </v-flex>
                            <v-flex style="max-width: 100px;">Trạng thái: </v-flex>
                            <v-flex >
                              <span class="font-weight-bold">
                                {{thongTinCongDan && thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['tenMuc'] ? thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['tenMuc'] : 'Chưa tạo tài khoản'}}
                              </span>
                              <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-icon
                                    class="ml-2"
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="viewLog()"
                                  >
                                    mdi-history
                                  </v-icon>
                                </template>
                                <span>Lịch sử thay đổi</span>
                              </v-tooltip>
                            </v-flex>
                        </v-layout>
                        <div class="d-flex justify-space-between w-full pa-4 pb-2" v-if="thongTinCongDan">
                            <v-btn v-if="thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 2"
                             color="primary" small class="mt-3 mx-3 text-white" @click="showChangePass()">
                              Cấp lại mật khẩu
                            </v-btn>
                            <v-btn color="primary" v-if="!thongTinCongDan['danhTinhDienTu'][0]" small class="mt-3 mx-3 text-white" @click="showCreateAcc()">
                                Tạo tài khoản
                            </v-btn>
                            <v-btn v-if="thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 1" color="primary" small class="mt-3 mx-3 text-white" @click="showChangeStatusAcc('active')">
                                Kích hoạt tài khoản
                            </v-btn>
                            <v-btn v-if="thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 2" color="primary" small class="mt-3 mx-3 text-white" @click="showChangeStatusAcc('block')">
                                Khóa tài khoản
                            </v-btn>
                            <v-btn v-if="thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 3" color="primary" small class="mt-3 mx-3 text-white" @click="showChangeStatusAcc('unlock')">
                                Mở khóa tài khoản
                            </v-btn>
                            <v-btn v-if="thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 4" color="primary" small class="mt-3 mx-3 text-white" @click="showChangeStatusAcc('restore')">
                                Khôi phục tài khoản
                            </v-btn>
                            <v-btn color="primary" v-if="thongTinCongDan['danhTinhDienTu'][0] && thongTinCongDan['danhTinhDienTu'][0]['tinhTrangSuDungTaiKhoan']['maMuc'] == 3" small class="mt-3 mx-3 text-white" @click="showChangeStatusAcc('delete')">
                              Xóa tài khoản
                            </v-btn>
                        </div>
                        <div class="d-flex justify-space-between w-full pb-4 " v-if="thongTinCongDan && thongTinCongDan['danhTinhDienTu'][0]">
                          <v-btn v-if="thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'] != thongTinCongDan['maSoCaNhan']" color="primary" small class="mt-3 mx-1 px-2 text-white" @click="showChangeAcc()">
                            Cập nhật tên đăng nhập
                          </v-btn>
                          <v-btn color="primary" @click="printPhieu()" small class="mt-3 mx-1 px-2 text-white">
                              In phiếu cấp tài khoản
                          </v-btn>
                        </div>
                    </div>
                </v-card>
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
              <v-btn color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogCreateAcc = false">
                <v-icon left>
                  mdi-close
                </v-icon>
                Thoát
              </v-btn>
              <v-btn class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="createAccount">
                <v-icon left>
                  mdi-content-save
                </v-icon>
                <span>Tạo tài khoản</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          max-width="450"
          v-model="dialogChangePass"
          persistent
        >
          <v-card>
            <v-toolbar
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
                        :rules="required"
                        required
                        hide-details="auto"
                        :readonly="typeChange != 'password'"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogChangePass = false">
                <v-icon left>
                  mdi-close
                </v-icon>
                Thoát
              </v-btn>
              <v-btn v-if="typeChange == 'password'" class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangePass">
                <v-icon left>
                  mdi-content-save
                </v-icon>
                <span>Xác nhận</span>
              </v-btn>
              <v-btn v-else class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangeAccount">
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
              <v-btn color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="dialogNoteAction = false">
                <v-icon left>
                  mdi-close
                </v-icon>
                Thoát
              </v-btn>
              <v-btn class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitChangeStatusAcc">
                <v-icon left>
                  mdi-content-save
                </v-icon>
                <span>Xác nhận</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
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
            <v-card-text class="mt-5" style="color: inherit !important">
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
    </div>
</template>

<script>
import Vue from 'vue'
import Pagination from './Pagination.vue'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    props: ["id"],
    components: {
      Pagination
    },
    data() {
      return {
        publicPath: process.env.VUE_APP_PULIC_PATH,
        selected: [],
        passwordCreate: '',
        loadingAction: false,
        loadingData: false,
        headers: [
            {
                sortable: false,
                text: 'STT',
                align: 'center',
                value: 'index'
            },
            {
                sortable: false,
                text: 'Loại giấy tờ',
                align: 'left',
                value: 'cmnd'
            },
            {
                sortable: false,
                text: 'Số giấy tờ',
                align: 'left',
                value: 'fullname'
            },
            {
                sortable: false,
                text: 'Ngày cấp',
                align: 'left',
                value: 'contact'
            },
            {
                sortable: false,
                text: 'Nơi cấp',
                align: 'left',
                value: 'status'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'center',
                value: 'action'
            },
        ],
        items: [
            {
                cmnd: 'CMND',
                fullname: '029922398',
                contact: '11/12/2020',
                status: 'Hà Nội',
            },
            {
                cmnd: 'CMND',
                fullname: '029922398',
                contact: '11/12/2020',
                status: 'Hà Nội',
            }
        ],
        page: 0,
        itemsPerPage: 10,
        total: 2,
        chuaCapTaiKhoan: false,
        daCapTaiKhoan: false,
        pageCount: 10,
        thongTin:  [
            {
                lable: 'Họ tên',
                value: 'hoVaTen'
            },
            {
                lable: 'Ngày sinh',
                value: 'ngaySinh',
                type: 'date'
            },
            {
                lable: 'Giới tính',
                value: 'gioiTinh',
                type: 'danhmuc'
            },
            {
                lable: 'Dân tộc',
                value: 'danToc',
                type: 'danhmuc'
            },
            {
                lable: 'Quốc gia',
                value: 'quocTich',
                type: 'danhmuc'
            },
            {
                lable: 'CMND/CCCD',
                value: 'maSoCaNhan'
            },
            {
                lable: 'Số điện thoại',
                value: 'sdt'
            },
            {
                lable: 'Email',
                value: 'email'
            },
            {
                lable: 'Địa chỉ thường trú',
                value: 'diaChiThuongTru',
                type: 'address'
            },
            {
                lable: 'Nơi ở hiện tại',
                value: 'noiOHienTai',
                type: 'address'
            },
            // {
            //     lable: 'Giấy tờ tùy thân',
            //     value: 'action'
            // }
        
        ],
        thongTinCongDan: '',
        validFormAdd: true,
        dialogCreateAcc: false,
        typeChange: '',
        dialogChangePass: false,
        validFormChangePass: true,
        passwordChange: '',
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
        validFormActionAccount: true,
        dialogNoteAction: false,
        titleAction: '',
        noteAction: '',
        actionStatusAcc: '',
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
        logItems: [],
        logUpdate: '',
        dialogChangeLog: false,
        logChange: '',
        validFormChangeLog: true,
        dialogPrint: false,
        contentPrint: '',
        daCapChungThu: false
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 2)
      vm.getThongTinCongDan()
    },
    watch: {
      dialogNoteAction (val) {
        this.noteAction = ''
      }
    },
    methods: {
      getStatus(status) {
          switch(status) {
              case 1:
                  return 'Hoạt động'
              case 0:
                  return 'Đã khóa'
              default:
                  return ''
          }
      },
      editCongDan(id) {
        this.$router.push({ path: '/ca-nhan/' + id })
      },
      getThongTinCongDan () {
        let vm = this
        let filter = {
          collectionName: 'canhan',
          id: vm.id
        }
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          // console.log('responseThongTinCongDan', response.resp)
          vm.thongTinCongDan = response.resp
        }).catch(function () {
          vm.loadingData = false
        })
      },
      showCreateAcc () {
        let vm = this
        vm.passwordCreate = ''
        vm.dialogCreateAcc = true
      },
      showChangeAcc () {
        let vm = this
        vm.typeChange = 'account'
        vm.passwordChange = vm.thongTinCongDan['maSoCaNhan']
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
              "tenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'],
              "matKhauMoi": vm.passwordChange,
              "type": "canhan"
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
              "oldTenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh']
            },
            "type": "canhan",
            "maDinhDanh": vm.thongTinCongDan.maDinhDanh
          }
          vm.loadingAction = true
          vm.$store.dispatch('changeAcc', filter).then(function (response) {
            vm.loadingAction = false
            vm.dialogChangePass = false
            toastr.remove()
            toastr.success('Cập nhật tên đăng nhập thành công')
            vm.getThongTinCongDan()
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
              "maDinhDanh": vm.thongTinCongDan.maDinhDanh,
              "password": vm.passwordCreate,
              "type": "canhan"
            }
          }
          vm.loadingAction = true
          vm.$store.dispatch('createAccountCaNhan', filter).then(function (response) {
            vm.loadingAction = false
            vm.dialogCreateAcc = false
            toastr.remove()
            toastr.success('Tạo tài khoản thành công')
            vm.getThongTinCongDan()
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
            "tenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canhan",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('activeCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          vm.dialogCreateAcc = false
          toastr.remove()
          toastr.success('Kích hoạt tài khoản thành công')
          vm.getThongTinCongDan()
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
            "tenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canhan",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('blockCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          vm.dialogCreateAcc = false
          toastr.remove()
          toastr.success('Khóa tài khoản thành công')
          vm.getThongTinCongDan()
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
            "tenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canhan",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('unBlockCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          toastr.remove()
          toastr.success('Mở khóa tài khoản thành công')
          vm.getThongTinCongDan()
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
            "tenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'],
            "type": "canhan",
            "activityNote": vm.noteAction
          }
        }
        vm.loadingAction = true
        vm.$store.dispatch('restoreCaNhan', filter).then(function (response) {
          vm.loadingAction = false
          toastr.remove()
          toastr.success('Khôi phục tài khoản thành công')
          vm.getThongTinCongDan()
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
                  "tenDinhDanh": vm.thongTinCongDan['danhTinhDienTu'][0]['tenDinhDanh'],
                  "type": "canhan",
                  "activityNote": vm.noteAction
                }
              }
              vm.loadingAction = true
              vm.$store.dispatch('deleteCaNhan', filter).then(function (response) {
                vm.loadingAction = false
                vm.dialogCreateAcc = false
                toastr.remove()
                toastr.success('Xóa tài khoản thành công')
                vm.getThongTinCongDan()
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
      dateLocale (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      dateLocaleTime (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} `
      },
      goBack () {
        window.history.back()
      },
      viewLog () {
        let vm = this
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          data: {
            className: 'com.fds.flex.core.data.entity.T_Model.DanhTinhDienTu',
            classPK: vm.thongTinCongDan['danhTinhDienTu'][0]['maDinhDanh'],
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
          vm.viewLog()
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
      createChungThuSo () {
        let vm = this
        let date = ''
        let maSoCaNhan = String(vm.thongTinCongDan.maSoCaNhan)
        try {
          let month = (new Date(vm.thongTinCongDan.ngaySinh)).getMonth() + 1
          date = (new Date(vm.thongTinCongDan.ngaySinh)).getDate() + '-' + month + '-' + (new Date(vm.thongTinCongDan.ngaySinh)).getFullYear()
        } catch (error) {
        }
        let filter = {
          data: {
            "fullName": vm.thongTinCongDan.hoVaTen, 
            "dob": date,
            "identityNo": maSoCaNhan.length == 9 ? "CMND:" + maSoCaNhan : "CCCD:" + maSoCaNhan,
            "issueDate": "",
            "issuePlace": "",
            "permanentAddress": "",
            "nation": "VN",
            "state": "",
            "email": vm.thongTinCongDan['danhBaLienLac']['thuDienTu'],
            "phone": vm.thongTinCongDan['danhBaLienLac']['soDienThoai'],
            "organization": "TrustCA"
          }
        }
        vm.$store.dispatch('createChungThuSo', filter).then(function (result) {
          
        }).catch(function (response) {
          
        })
      }
    }
}
</script>

<style scoped lang="scss">
.cong-dan-info td{
    border-bottom: 0px!important;
}
.cong-dan-info table{
    border-top: none!important;
}
.td-highlight{
    background-color: #F9F4F1;
}
</style>