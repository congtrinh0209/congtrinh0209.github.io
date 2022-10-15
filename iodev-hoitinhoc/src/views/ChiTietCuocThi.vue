<template>
  <v-card
    class="mx-auto pa-3" style="padding-bottom: 36px !important"
    flat
  >
    <v-layout wrap>
      <v-flex class="py-0">
        <div>
          <a :href="chiTietCuocThi.website" target="_blank" class="py-0 px-0"> 
            <img class="img-cuocthi" :src="chiTietCuocThi.hinhAnh" style="width: 100%">
          </a>
          <v-row justify="end" class="my-0 mx-0" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                Thông tin cuộc thi
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
                <div class="font-weight-bold" style="color: #2161B1;font-size: 18px;">{{chiTietCuocThi.tenGoi}}</div>
                <div class="" style="text-align: justify;">{{chiTietCuocThi.thongTinMoTa}}</div>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Đơn vị tổ chức: </span>
                <span class="blue-text font-weight-bold">{{chiTietCuocThi.donViToChuc}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Thời gian tổ chức: </span>
                <span class="blue-text font-weight-bold">Từ ngày {{convertDate(chiTietCuocThi.ngayBatDau)}}</span>
                <span class="blue-text font-weight-bold"> - Đến ngày {{convertDate(chiTietCuocThi.ngayKetThuc)}}</span>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Trang web: </span>
                <a class="blue-text font-weight-bold">{{chiTietCuocThi.website}}</a>
              </v-col>
              <v-col cols="12" md="3" class="pt-0">
                <span class="label-header">Tình trạng: </span>
                <span class="font-weight-bold" :style="chiTietCuocThi.tinhTrang == 1 ? 'color: green' : (chiTietCuocThi.tinhTrang == 2 ? 'color: blue' : 'color: red')">
                  {{statusContest(chiTietCuocThi.tinhTrang)}}
                </span>
              </v-col>              
            </v-row>
          </div>
        </div>

        <div>
          <v-row justify="end" class="my-0 mx-0 mt-3" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                Tổng hợp thí sinh đăng ký tham dự
              </div>
              <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row class="my-0 py-0 pt-3">
            <v-col cols="12"  class="pt-0">
              <v-data-table
                :headers="headersTongHopDangKy"
                :items="danhSachTongHopDangKy"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingDataTongHopDangKy"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <div>{{ (pageTongHopDangKy+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                </template>
              </v-data-table>
              <pagination v-if="pageCountTongHopDangKy" :pageInput="pageTongHopDangKy" :total="totalTongHopDangKy" :pageCount="pageCountTongHopDangKy" @tiny:change-page="changePage"></pagination>
            </v-col>
          </v-row>
        </div>

        <div>
          <v-row justify="end" class="my-0 mx-0 mt-3" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
              <div class="header-content">
                Kết quả cuộc thi
              </div>
              <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row class="my-0 py-0 pt-3 mx-0">
            <v-col cols="12" class="py-0 px-0 mb-2 col col-12 my-2">
              <div class="background-triangle-small"> <v-icon size="20" color="white">mdi-view-dashboard-outline</v-icon></div>
              NỘI DUNG CÁ NHÂN
            </v-col>
            <v-col cols="12"  class="pt-0 px-0">
              <v-data-table
                :headers="headersKetQuaCaNhan"
                :items="danhSachKetQuaCaNhan"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingDataKetQuaCaNhan"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <div>{{ (pageKetQuaCaNhan+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                </template>
              </v-data-table>
              <pagination v-if="pageCountKetQuaCaNhan" :pageInput="pageKetQuaCaNhan" :total="totalKetQuaCaNhan" :pageCount="pageCountKetQuaCaNhan" @tiny:change-page="changePage"></pagination>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0 pt-3 mx-0">
            <v-col cols="12" class="py-0 px-0 mb-2 col col-12 my-2">
              <div class="background-triangle-small"> <v-icon size="20" color="white">mdi-view-dashboard-outline</v-icon></div>
              NỘI DUNG ĐỒNG ĐỘI
            </v-col>
            <v-col cols="12"  class="pt-0 px-0">
              <v-data-table
                :headers="headersKetQuaDongDoi"
                :items="danhSachKetQuaDongDoi"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingDataKetQuaDongDoi"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <div>{{ (pageKetQuaDongDoi+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                </template>
              </v-data-table>
              <pagination v-if="pageCountKetQuaDongDoi" :pageInput="pageKetQuaDongDoi" :total="totalKetQuaDongDoi" :pageCount="pageCountKetQuaDongDoi" @tiny:change-page="changePage"></pagination>
            </v-col>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import Pagination from './Pagination.vue'
import DangKyThi from './DangKyThi.vue'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    name: 'CuocThi',
    components: {
      Pagination,
      'dang-ky-thi': DangKyThi
    },
    props: ['type', 'id'],
    data() {
      return {
        readonlyForm: false,
        mauNhapForm: '',
        dataInput: '',
        formData: '',
        chiTietCuocThi: {
          "id": "adac1aec-41ac-4e92-be04-52dc99d9fd85",
          "tenGoi": "Olympic tin học sinh viên Việt Nam",
          "tiengAnh": null,
          "serieCuocThi": "OLP",
          "lanToChuc": 21,
          "donViToChuc": "Hội tin học Việt Nam",
          "toChucId": "02123",
          "ngayBatDau": "06-11-2021",
          "ngayKetThuc": "19-03-2022",
          "thongTinMoTa": "Olympic Tin học Sinh viên Việt Nam (OLP) là sáng kiến của Hội Tin học Việt Nam, Hội Sinh viên Việt Nam và Bộ giáo dục và Đào tạo nhằm động viên phong trào học tập tin học và khuyến khích các tài năng tin học trẻ. Bắt đầu từ năm 1992, Kỳ thi đã được tổ chức định kỳ hàng năm với sự tham gia của đông đảo sinh viên các trường Đại học và Cao đẳng trong cả nước. Từ năm 2005, sau những năm thử nghiệm với tiêu chuẩn thi lập trình quốc tế ACM/ICPC cho quy trình chấm thi và thi trực tuyến cho khối thi tập thể ”lều chõng”, từ năm 2006 Việt Nam chính thức được chấp thuận tổ chức Kỳ thi lập trình sinh viên quốc tế ACM/ICPC (ACM International Collegiate Programming Contest) Khu vực Châu Á. Từ năm 2007, Olympic Tin học sinh viên Việt Nam đã kết nối với Kỳ thi ACM/ICPC thành một Hội thi tin học cho sinh viên Việt Nam và Khu vực Châu Á. Từ năm 2018, ACM/ICPC đổi thành Kỳ thi lập trình sinh viên quốc tế ICPC (International Collegiate Programming Contest).",
          "website": "https://www.olp.vn/",
          "hinhAnh": 'https://oj.vnoi.info/martor/16698f71-9463-4556-91f2-d9aa7acdfa96.png',
          "tinhTrang": 2
        },
        itemsPerPage: 15,
        keywordSearch: '',

        danhSachTongHopDangKy: [],
        headersTongHopDangKy: [],
        loadingDataTongHopDangKy: false,
        pageTongHopDangKy: 0,
        totalTongHopDangKy: 0,
        pageCountTongHopDangKy: 0,

        danhSachKetQuaCaNhan: [],
        headersKetQuaCaNhan: [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index',
              width: 50
          },
          {
              sortable: false,
              text: 'Tên thí sinh',
              align: 'left',
              value: 'hoTen',
              class: 'th-center py-2'
          },
          {
              sortable: false,
              text: 'Số báo danh',
              align: 'left',
              value: 'soBaoDanh',
              class: 'th-center'
          },
          {
              sortable: false,
              text: 'Đoàn thi',
              align: 'left',
              value: 'doanThiId',
              class: 'th-center py-2'
          },
          {
              sortable: false,
              text: 'Giải thưởng',
              align: 'center',
              value: 'datGiaiThuong',
              class: 'th-center',
              width: 120
          }
        ],
        loadingDataKetQuaCaNhan: false,
        pageKetQuaCaNhan: 0,
        totalKetQuaCaNhan: 0,
        pageCountKetQuaCaNhan: 0,

        danhSachKetQuaDongDoi: [],
        headersKetQuaDongDoi: [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index',
              width: 50
          },
          {
              sortable: false,
              text: 'Tên đội thi',
              align: 'left',
              value: 'tenGoi',
              class: 'th-center py-2'
          },
          {
              sortable: false,
              text: 'Số báo danh',
              align: 'left',
              value: 'soBaoDanh',
              class: 'th-center'
          },
          {
              sortable: false,
              text: 'Đoàn thi',
              align: 'left',
              value: 'doanThiId',
              class: 'th-center py-2'
          },
          {
              sortable: false,
              text: 'Giải thưởng',
              align: 'center',
              value: 'hangGiaiThuong',
              class: 'th-center',
              width: 120
          }
        ],
        loadingDataKetQuaDongDoi: false,
        pageKetQuaDongDoi: 0,
        totalKetQuaDongDoi: 0,
        pageCountKetQuaDongDoi: 0,

        dialogThemThanhPhan: false,
        editThanhPhan: false,
        thanhPhanEdit: '',
        loadingAction: false,
      }
    },
    created () {
      let vm = this
      vm.getChiTietCuocThi()
      vm.getdanhSachKetQuaCaNhan()
      vm.getdanhSachKetQuaDongDoi()
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.getChiTietCuocThi()
      }
    },
    methods: {
      getChiTietCuocThi () {
        let vm = this
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'cuocthis',
          id: vm.id
        }
        vm.actionItems = []
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          // vm.chiTietCuocThi = response
        }).catch(function () {
          vm.loadingData = false
        })
      },
      getdanhSachKetQuaCaNhan (type) {
        let vm = this
        if (type === 'reset') {
          vm.totalKetQuaCaNhan = 0
          vm.pageCountKetQuaCaNhan = 0
          vm.pageKetQuaCaNhan = 0
        }
        if (vm.loadingDataKetQuaCaNhan) {
          return
        }
        vm.loadingDataKetQuaCaNhan = true
        let filter = {
          collectionName: 'cuocthis',
          collectionId: vm.id,
          collectionNameChild: 'thisinhs',
          data: {
            page: vm.pageKetQuaCaNhan,
            size: vm.itemsPerPage
          }
        }
        vm.$store.dispatch('collectionFilterLevel2', filter).then(function (response) {
          vm.danhSachKetQuaCaNhan = response.content
          vm.totalKetQuaCaNhan = response.totalElements
          vm.pageCountKetQuaCaNhan = response.totalPages
          vm.loadingDataKetQuaCaNhan = false
        }).catch(function () {
          vm.loadingDataKetQuaCaNhan = false
        })
      },
      getdanhSachKetQuaDongDoi (type) {
        let vm = this
        if (type === 'reset') {
          vm.totalKetQuaDongDoi = 0
          vm.pageCountKetQuaDongDoi = 0
          vm.pageKetQuaDongDoi = 0
        }
        if (vm.loadingDataKetQuaDongDoi) {
          return
        }
        vm.loadingDataKetQuaDongDoi = true
        let filter = {
          collectionName: 'cuocthis',
          collectionId: vm.id,
          collectionNameChild: 'doithis',
          data: {
            page: vm.pageKetQuaDongDoi,
            size: vm.itemsPerPage
          }
        }
        vm.$store.dispatch('collectionFilterLevel2', filter).then(function (response) {
          vm.danhSachKetQuaDongDoi = response.content
          vm.totalKetQuaDongDoi = response.totalElements
          vm.pageCountKetQuaDongDoi = response.totalPages
          vm.loadingDataKetQuaDongDoi = false
        }).catch(function () {
          vm.loadingDataKetQuaDongDoi = false
        })
      },
      statusContest (status) {
        if (status == 1) {
          return 'Mở đăng kí'
        } else if (status == 2) {
          return 'Đóng đăng kí'
        } else {
          return 'Đã kết thúc'
        }
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
      currency (value) {
        if (value) {
          let moneyCur = (value / 1).toFixed(0).replace('.', ',')
          return moneyCur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        }
        return ''
      },
      convertDate (date) {
        if (!date) return ''
        const [day, month, year] = date.split('-')
        let ddd = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
        return ddd
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