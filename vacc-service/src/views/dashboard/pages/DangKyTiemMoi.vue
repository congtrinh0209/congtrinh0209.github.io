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
                    placeholder="Họ và tên"
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
                  <v-menu
                    ref="menuApplicantIdDate"
                    :close-on-content-click="false"
                    v-model="menuApplicantIdDate"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :rules="requiredBirthDate"
                        v-model="applicantDateFormatted"
                        placeholder="dd/mm/yyyy"
                        v-mask="'##/##/####'"
                        @blur="bithDate = parseDate(applicantDateFormatted)"
                        dense
                        clearable
                        hide-details="auto"
                        outlined
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker min="1900-01-01" :max="getMaxdate()" ref="picker"
                    :first-day-of-week="1" locale="vi" v-model="birthDate" no-title @input="menuApplicantIdDate = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Giới tính <span style="color:red">(*)</span></div>
                  <v-autocomplete
                      :items="listGioiTinh"
                      placeholder="Giới tính"
                      v-model="applicantInfo['GioiTinh']"
                      item-text="name"
                      item-value="value"
                      hide-no-data
                      :rules="requiredSex"
                      required
                      outlined
                      dense
                      hide-details="auto"               
                  ></v-autocomplete>
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
                    placeholder="Số CMND/CCCD"
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
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Nghề nghiệp <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="applicantInfo['NgheNghiep']"
                    :rules="required"
                    required
                    outlined
                    placeholder="Nghề nghiệp"
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
                  <div class="mb-2">Đơn vị công tác</div>
                  <v-text-field
                    v-model="applicantInfo['DonViCongTac']"
                    outlined
                    placeholder="Đơn vị công tác"
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="12"
                  class="pb-0"
                >
                  <div class="mb-2">Nhóm đối tượng <span style="color:red">(*)</span></div>
                  <v-autocomplete
                      :items="listDoiTuong"
                      placeholder="Nhóm đối tượng"
                      v-model="applicantInfo['NhomDoiTuong']"
                      item-text="name"
                      item-value="value"
                      hide-no-data
                      :rules="required"
                      required
                      outlined
                      dense
                      hide-details="auto"               
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <!-- row 3 -->
              <v-row>
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
                    placeholder="Số điện thoại"
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
                  <div class="mb-2">Email</div>
                  <v-text-field
                    v-model="applicantInfo['Email']"
                    outlined
                    placeholder="Email"
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
                    placeholder="Mã số bảo hiểm xã hội"
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
                  <div class="mb-2">Số thẻ BHYT</div>
                  <v-text-field
                    v-model="applicantInfo['SoTheBHYT']"
                    outlined
                    placeholder="Số thẻ bảo hiểm y tế"
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
                    placeholder="Địa chỉ nơi ở"
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
                  <v-autocomplete
                      hide-no-data
                      :items="listTinhThanh"
                      v-model="tinhThanh"
                      item-text="itemName"
                      item-value="itemCode"
                      clearable
                      :rules="required"
                      required
                      outlined
                      placeholder="Tỉnh/ Thành phố"
                      dense
                      hide-details="auto"
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                  class="pb-0"
                >
                  <div class="mb-2">Quận/ Huyện <span style="color:red">(*)</span></div>
                  <v-autocomplete
                    hide-no-data
                    :items="listQuanHuyen"
                    v-model="quanHuyen"
                    item-text="itemName"
                    item-value="itemCode"
                    clearable
                    :rules="required"
                    required
                    outlined
                    placeholder="Quận/ Huyện"
                    dense
                    hide-details="auto"
                ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Phường/ Xã <span style="color:red">(*)</span></div>
                  <v-autocomplete
                      hide-no-data
                      :items="listXaPhuong"
                      v-model="xaPhuong"
                      item-text="itemName"
                      item-value="itemCode"
                      clearable
                      :rules="required"
                      required
                      outlined
                      placeholder="Phường/ Xã"
                      dense
                      hide-details="auto"
                  ></v-autocomplete>
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
                  <v-autocomplete
                      hide-no-data
                      :items="listDiaBan"
                      v-model="applicantInfo['DiaBanCoSo_ID']"
                      item-text="itemName"
                      item-value="itemCode"
                      clearable
                      :rules="required"
                      required
                      outlined
                      placeholder="Địa bàn cơ sở"
                      dense
                      hide-details="auto"
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Cơ sở y tế <span style="color:red">(*)</span></div>
                  <v-autocomplete
                      hide-no-data
                      :items="listCoSoYTe"
                      v-model="coSoYTe"
                      item-text="itemName"
                      item-value="itemCode"
                      clearable
                      :rules="required"
                      required
                      outlined
                      placeholder="Cơ sở y tế"
                      dense
                      hide-details="auto"
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Dân tộc</div>
                  <v-autocomplete
                      hide-no-data
                      :items="listDanToc"
                      v-model="applicantInfo['DanToc_Ma']"
                      item-text="itemName"
                      item-value="itemCode"
                      clearable
                      outlined
                      placeholder="Dân tộc"
                      dense
                      hide-details="auto"
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Quốc tịch </div>
                  <v-autocomplete
                      hide-no-data
                      :items="listQuocTich"
                      v-model="applicantInfo['QuocTich_Ma']"
                      item-text="itemName"
                      item-value="itemCode"
                      clearable
                      :rules="required"
                      required
                      outlined
                      placeholder="Quốc tịch"
                      dense
                      hide-details="auto"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <!-- row 6 -->
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                  class="pb-0"
                >
                  <div class="mb-2">Tiền sử dị ứng</div>
                  <v-textarea
                    v-model="applicantInfo['TienSuDiUng']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                    rows="3"
                  ></v-textarea>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Các bệnh lý đang mắc </div>
                  <v-textarea
                    v-model="applicantInfo['CacBenhLyDangMac']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                    rows="3"
                  ></v-textarea>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Các thuốc đang dùng</div>
                  <v-textarea
                    v-model="applicantInfo['CacThuocDangDung']"
                    outlined
                    placeholder=""
                    dense
                    clearable
                    hide-details="auto"
                    rows="3"
                  ></v-textarea>
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
                  <v-menu
                    ref="menuDate"
                    :close-on-content-click="false"
                    v-model="menuDate"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        :rules="requiredBirthDate"
                        v-model="ngayDuKienFormatted"
                        placeholder="dd/mm/yyyy"
                        v-mask="'##/##/####'"
                        @blur="bithDate = parseDate(ngayDuKienFormatted)"
                        dense
                        clearable
                        hide-details="auto"
                        outlined
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker :min="getMindate()" ref="picker"
                    :first-day-of-week="1" locale="vi" v-model="ngayDuKien" no-title @input="menuDate = false"></v-date-picker>
                  </v-menu>
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
              <v-btn v-if="String(uid) === '0'" class="mr-3" color="#0072bc" @click="submitForm">
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
        listGioiTinh: [{name: 'Nam', value: 'M'},{name: 'Nữ', value: 'F'},{name: 'Không xác định', value: 'O'}],
        listDoiTuong: [
          {
            "id" : 1,
            "value" : "N1",
            "name" : "1. Người làm việc trong các cơ sở y tế, ngành y tế (công lập và tư nhân)",
          }, {
            "id" : 2,
            "value" : "N2",
            "name" : "2. Người tham gia phòng chống dịch (Thành viên Ban chỉ đạo phòng, chống dịch các cấp, người làm việc ở các khu cách ly, làm nhiệm vụ truy vết, điều tra dịch tễ, tổ Covid dựa vào cộng đồng, tình nguyện viên, phóng viên...)",
          }, {
            "id" : 3,
            "value" : "N3",
            "name" : "3. Lực lượng Quân đội",
          },
        ],
        listTinhThanh: [],
        tinhThanh: '',
        listQuanHuyen: [],
        quanHuyen: '',
        listXaPhuong: [],
        xaPhuong: '',
        listDiaBan: [],
        listCoSoYTe: [],
        coSoYTe: [],
        listQuocTich: [],
        listDanToc: [],
        menuApplicantIdDate: false,
        menuDate: false,
        applicantDate: null,
        applicantDateFormatted: null,
        birthDate: null,
        ngayDuKienFormatted: null,
        ngayDuKien: null,

        required: [
          v => !!v || 'Thông tin bắt buộc'
        ],
        requiredSex: [
          (value) => {
            if(value || value == 0){
              return true
            } else {
              return 'Thông tin bắt buộc'
            }  
          }
        ],
        require: (value) => {
          if(value){
              return true
            } else {
              return 'Thông tin bắt buộc'
            } 
        },
        requiredBirthDate: [
          v => !!v || 'Thông tin bắt buộc'
        ],
      }
    },
    watch: {
      tinhThanh (val) {
        this.applicantInfo.TinhThanh_Ma = val
        this.getQuanHuyen()
      },
      quanHuyen (val) {
        this.applicantInfo.QuanHuyen_Ma = val
        this.getXaPhuong()
      },
      xaPhuong (val) {
        this.applicantInfo.PhuongXa_Ma = val 
      },
      coSoYTe (val) {
        this.applicantInfo.CoSoYTe_Ma = val 
      },
      birthDate (val) {
        this.applicantDateFormatted = this.formatDate(this.birthDate)
      },
      ngayDuKien (val) {
        this.ngayDuKienFormatted = this.formatDate(this.ngayDuKien)
      },
      menuApplicantIdDate (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
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
      submitForm () {
        let vm = this
        console.log('submitForm', vm.applicantDateFormatted)
      },
      getNhomDoiTuong () {
        let vm = this
      },
      getQuocGia () {
        let vm = this
      },
      getDanToc () {
        let vm = this
      },
      getTinhThanh () {
        let vm = this
      },
      getQuanHuyen () {
        let vm = this
      },
      getXaPhuong () {
        let vm = this
      },
      formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        console.log('date', date)
        const [day, month, year] = date.split('/')
        console.log('date', `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`)
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      getMaxdate () {
        let date = new Date()
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      },
      getMindate () {
        let date = new Date()
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      },
    },
  }
</script>

<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>
