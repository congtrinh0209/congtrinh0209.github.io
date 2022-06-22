<template>
    <div>
        <v-row>
          <v-col cols="12" class="mt-0 pb-2 wrap-toolbar-page">
                <div class="title-page d-inline-block pt-2">THÔNG TIN CƠ QUAN ĐƠN VỊ</div>
                <div class="d-inline-block" style="float: right;">
                  <v-btn
                      class="mx-0 mr-3"
                      small
                      color="primary"
                      @click="goBack()"
                  >
                      <v-icon size="18">mdi-reply</v-icon>&nbsp;
                      <span>Quay lại</span>
                  </v-btn>

                  <v-btn
                      class="mx-0"
                      small
                      color="primary"
                      @click="editDonVi(thongTinDonVi['primKey'])"
                  >
                      <v-icon size="18">mdi-pencil-outline</v-icon>&nbsp;
                      <span>Cập nhật thông tin</span>
                  </v-btn>
                </div>
                
            </v-col>
            <v-col cols="12">
                <div>
                    <v-simple-table :dense="true" class="cong-dan-info"  style="border-bottom: thin solid rgba(0, 0, 0, 0.12);">
                        <template v-slot:default>
                            <tbody>
                                <tr v-for="(item, index) in thongTin" :key="index" :class="{'td-highlight': index%2 === 0}">
                                    <td class="py-2 px-6" style="width: 200px"><strong>{{item.lable}}</strong></td>
                                    <td v-if="item.value !== 'action'" class="py-2">
                                      <span v-if="item.type && item.type === 'date'">{{dateLocale(thongTinDonVi[item.value])}}</span>
                                      <span v-else-if="item.type === 'danhmuc'">{{thongTinDonVi[item.value] ? thongTinDonVi[item.value]['tenMuc'] : ''}}</span>
                                      <span v-else-if="item.type === 'address'">
                                        <span v-if="thongTinDonVi[item.value]">
                                          {{thongTinDonVi[item.value]['soNhaChiTiet']}}, {{thongTinDonVi[item.value]['phuongXa']['tenMuc']}} - 
                                          {{thongTinDonVi[item.value]['quanHuyen']['tenMuc']}} - {{thongTinDonVi[item.value]['tinhThanh']['tenMuc']}}
                                        </span>
                                        <span v-else></span>
                                      </span>
                                      <span v-else-if="item.value === 'sdt'">{{thongTinDonVi['danhBaLienLac'] ? thongTinDonVi['danhBaLienLac']['soDienThoai'] : ''}}</span>
                                      <span v-else-if="item.value === 'email'">{{thongTinDonVi['danhBaLienLac'] ? thongTinDonVi['danhBaLienLac']['thuDienTu'] : ''}}</span>
                                      <span v-else-if="item.value === 'nguoiDaiDien'">{{thongTinDonVi['nguoiDaiDien'] ? thongTinDonVi['nguoiDaiDien']['hoVaTen'] : ''}}</span>
                                      <span v-else>{{ thongTinDonVi[item.value]}}</span>
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
                <div class="title-page mt-3">GIẤY ĐĂNG KÝ HOẠT ĐỘNG</div>
                <div class="px-0 mt-4">
                    <v-data-table
                        flat
                        :headers="headers"
                        :items="thongTinDonVi['giayDangKyHoatDong']"
                        hide-default-footer
                        class="elevation-1"
                        no-data-text="Không có"
                        :loading="loadingData"
                        loading-text="Đang tải... "
                    >
                        <template v-slot:item.index="{ item, index }">
                          <div>{{ index + 1 }}</div>
                        </template>
                        <template v-slot:item.ngayCap="{ item, index }">
                          <div>{{ dateLocale(item['ngayCap']) }}</div>
                        </template>
                          <template v-slot:item.loaiGiayTo="{ item, index }">
                          <div>{{ item.loaiGiayTo['tenMuc'] }}</div>
                        </template>
                    </v-data-table>
                </div>
            </v-col>
        </v-row>
        
        
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
                text: 'Loại giấy đăng ký hoạt động',
                align: 'left',
                value: 'loaiGiayTo'
            },
            {
                sortable: false,
                text: 'Số giấy tờ',
                align: 'left',
                value: 'soGiay'
            },
            {
                sortable: false,
                text: 'Ngày cấp',
                align: 'left',
                value: 'ngayCap'
            }
        ],
        itemsGiayDangKy: [],
        thongTin:  [
            {
                lable: 'Mã cơ quan, đơn vị',
                value: 'maHanhChinh'
            },
            {
                lable: 'Tên cơ quan, đơn vị',
                value: 'tenGoi'
            },
            {
                lable: 'Tên tiếng anh',
                value: 'tenTiengAnh'
            },
            {
                lable: 'Tên viết tắt',
                value: 'tenVietTat'
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
                lable: 'Địa chỉ hoạt động',
                value: 'diaChiHoatDong',
                type: 'address'
            },
            {
                lable: 'Ngày thành lập',
                value: 'ngayThanhLap',
                type: 'date'
            },
            {
                lable: 'Số quyết định thành lập của tổ chức',
                value: 'soQuyetDinh'
            },
            {
                lable: 'Khối cơ quan',
                value: 'khoiCoQuan'
            },
            {
                lable: 'Cấp dự toán',
                value: 'capDuToan'
            },
            {
                lable: 'Mã số ngân sách',
                value: 'maSoNganSach'
            },
            {
                lable: 'Người đại diện',
                value: 'nguoiDaiDien'
            },
            {
                lable: 'Hình thức sở hữu',
                value: 'hinhThucSoHuu',
                type: 'danhmuc'
            }
        
        ],
        thongTinDonVi: '',
        validFormAdd: true,
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
        validFormActionAccount: true,
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
      // mockup-data
      vm.thongTinDonVi = vm.mockData.danhSachDonVi[0]
      // end
      vm.getThongTinDonVi()
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
      editDonVi(id) {
        this.$router.push({ path: '/don-vi/' + id })
      },
      getThongTinDonVi () {
        let vm = this
        let filter = {
          collectionName: 'canhan',
          id: vm.id
        }
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.thongTinDonVi = response.resp
        }).catch(function () {
          vm.loadingData = false
        })
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
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} `
      },
      goBack () {
        window.history.back()
      },
      
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