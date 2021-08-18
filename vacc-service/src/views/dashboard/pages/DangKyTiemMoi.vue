<template>
  <v-container
    id="createEWarranty"
    fluid
    tag="section"
    :style="breakpointName === 'xs' || breakpointName === 'sm' ? 'padding-top: 75px' : ''"
  >
    <v-row justify="center">
      <v-col
        cols="12" class="px-0 py-0"
      >
        <base-material-card>
          <template v-slot:heading>
            <div v-if="String(uid) === '0'" class="text-h4 font-weight-light">
              ĐĂNG KÝ TIÊM MỚI
            </div>
            <div v-if="String(uid) !== '0'" class="text-h4 font-weight-light">
              CẬP NHẬT THÔNG TIN NGƯỜI ĐĂNG KÝ
            </div>

          </template>

          <v-form
            ref="formAddWarranty"
            v-model="validFormAdd"
            lazy-validation
          >
            <v-container class="py-0 mt-3">
              <!-- row 1 -->
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Họ tên <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['HoVaTen']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Ngày sinh <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['NgaySinh']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Giới tính <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['GioiTinh']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Số CMND/CCCD <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['CMTCCCD']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 2 -->
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Nghề nghiệp <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['NgheNghiep']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Nhóm đối tượng <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['NhomDoiTuong']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Đơn vị công tác <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['DonViCongTac']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Số điện thoại <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['SoDienThoai']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 3 -->
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Email <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['Email']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Mã số BHXH <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['MaSoBHXH']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Số thẻ BHYT <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['SoTheBHYT']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                
              </v-row>
              <!-- row 4 -->
              <v-row>
                <v-col
                  cols="12"
                  class="pb-0"
                >
                  <div class="mb-2">Địa chỉ nơi ở <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['DiaChiNoiO']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Tỉnh/ Thành phố <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['TinhThanh_Ma']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Quận/ Huyện <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['QuanHuyen_Ma']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Xã/ Phường <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['PhuongXa_Ma']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 5 -->
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Địa bàn cơ sở <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['DiaBanCoSo_ID']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Cơ sở y tế <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['CoSoYTe_Ma']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Dân tộc <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['DanToc_Ma']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Quốc tịch <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['QuocTich_Ma']"
                    :rules="required"
                    required
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row 6 -->
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Tiền sử dị ứng</div>
                  <v-text-field
                    v-model="applicantInfo['TienSuDiUng']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Tiền sử dị ứng</div>
                  <v-text-field
                    v-model="applicantInfo['TienSuDiUng']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Các bệnh lý đang mắc </div>
                  <v-text-field
                    v-model="applicantInfo['CacBenhLyDangMac']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Các thuốc đang dùng <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['CacThuocDangDung']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                
              </v-row>
              <!-- row 7 -->
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Ngày đăng ký tiêm</div>
                  <v-text-field
                    v-model="applicantInfo['TienSuDiUng']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Lưu ý</div>
                  <v-text-field
                    v-model="applicantInfo['GhiChu']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-row class="mt-5">
            <v-col
              cols="12"
              class="text-center"
            >
              <v-btn v-if="String(uid) === '0'" class="mr-3" color="#0072bc" @click="">
                <v-icon left>
                  mdi-content-save-outline
                </v-icon>
                <span>ĐĂNG KÝ TIÊM</span>
              </v-btn>
              <v-btn v-if="String(uid) !== '0'" class="mr-3" color="#0072bc" @click="">
                <v-icon left>
                  mdi-content-save-outline
                </v-icon>
                <span>CẬP NHẬT</span>
              </v-btn>
              <!-- <v-btn class="mr-0" color="red" @click="cancelAction">
                <v-icon left>
                  mdi-close
                </v-icon>
                <span>THOÁT</span>
              </v-btn> -->
            </v-col>
          </v-row>
          
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CreateEWarranty',
    props: ['uid'],
    data () {
      return {
        loading: false,
        validFormAdd: true,
        tab: null,
        typeAction: 'add',

        applicantInfo: {
          HoVaTen: '',
          NgaySinh: '',
          GioiTinh: '',
          CMTCCCD: '',
          NgheNghiep: '',
          NhomDoiTuong: '',
          DonViCongTac: '',
          SoDienThoai: '',
          Email: '',
          MaSoBHXH: '',
          SoTheBHYT: '',
          DiaChiNoiO: '',
          TinhThanh_Ma: '',
          TinhThanh_Ten: '',
          QuanHuyen_Ma: '',
          QuanHuyen_Ten: '',
          PhuongXa_Ma: '',
          PhuongXa_Ten: '',
          DiaBanCoSo_ID: '',
          CoSoYTe_Ma: '',
          CoSoYTe_Ten: '',
          DanToc_Ma: '',
          QuocTich_Ma: '',
          TienSuDiUng: '',
          CacBenhLyDangMac: '',
          CacThuocDangDung: '',
          GhiChu: '',
          NgayDangKi: '',
          TinhTrangDangKi: 0
        },
        
        required: [
          v => !!v || 'Thông tin bắt buộc'
        ],
      }
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      },
      userLogin () {
        return this.$store.getters.getPermistion
      }
    },
    created () {
      let vm = this
      console.log('uid', vm.uid)
      if (String(vm.uid) === '0') {
        vm.typeAction = 'add'
      } else {
        vm.typeAction = 'update'
      }
      let current = vm.$router.history.current.query
    },
    methods: {
    },
  }
</script>

<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>
