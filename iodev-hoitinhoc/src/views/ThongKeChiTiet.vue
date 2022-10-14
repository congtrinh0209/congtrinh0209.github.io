<template>
  <v-card
    class="mx-auto pa-3"
    outlined
    flat
  >
    <v-layout class="wrap-quanlyhoso" wrap>
      <v-flex xs12 class="text-center text-bold mb-2" style="font-size: 18px;
        font-weight: 600;
        color: #2161B1;">
        THỐNG KÊ CHI TIẾT HỒ SƠ CỦA ĐƠN VỊ
      </v-flex>
      <v-flex class="mb-2 px-2 xs12">
        <div class=" mb-3">
          <div class="d-inline-block text-bold" style="font-weight:450;width: 200px;">Đơn vị xử lý hồ sơ:</div>
          <v-autocomplete
            placeholder="Chọn đơn vị xử lý hồ sơ"
            class="input-form select-search d-inline-block"
            style="width: calc(100% - 200px);"
            :items="govAgencyList"
            v-model="govAgencyFilter"
            item-text="text"
            item-value="code"
            hide-details
            hide-no-data
            dense
            solo
            return-object
          >
          </v-autocomplete>
        </div>
        <div class="layout wrap mb-3">
          <div class="d-inline-block text-bold pt-1" style="font-weight:450;width: 200px;">Ngày tiếp nhận:</div>
          <v-layout wrap style="width: calc(100% - 200px);">
            <v-flex xs6 class="pr-2">
              <v-menu
                ref="menuDate1"
                v-model="menuDate1"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="input-form"
                    v-model="fromReceiveDateFormatted"
                    persistent-hint
                    append-icon="mdi-calendar"
                    @blur="fromReceiveDate = parseDate(fromReceiveDateFormatted)"
                    placeholder="Từ ngày"
                    hide-details
                    solo
                    dense
                    v-bind="attrs"
                    v-on="on"
                  >
                  </v-text-field>
                </template>
                <v-date-picker :max="toReceiveDateFormatted ? getMinMax(toReceiveDateFormatted) : null" v-model="fromReceiveDate" locale="vi" :first-day-of-week="1" no-title @input="changeDate('1')"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs6 class="pl-2">
              <v-menu
                ref="menuDate2"
                v-model="menuDate2"
                :close-on-content-click="true"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="input-form"
                    v-model="toReceiveDateFormatted"
                    persistent-hint
                    append-icon="mdi-calendar"
                    @blur="toReceiveDate = parseDate(toReceiveDateFormatted)"
                    placeholder="Đến ngày"
                    hide-details
                    solo
                    dense
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                  </template>
                <v-date-picker :min="fromReceiveDateFormatted ? getMinMax(fromReceiveDateFormatted) : null" v-model="toReceiveDate" locale="vi" :first-day-of-week="1" no-title @input="changeDate('2')"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </div>
        <v-row justify="end" class="mt-0">
          <v-col class="d-flex align-center justify-start" style="">
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsMucDo"
              v-model="mucDoSearch"
              item-text="name"
              item-value="value"
              dense
              solo
              hide-details="auto"
              clearable
              return-object
              placeholder="Mức độ"
            >
            </v-autocomplete>
          </v-col>
          <v-col class="d-flex align-center justify-start" style="">
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsHinhThucNop"
              v-model="hinhThucNopSearch"
              item-text="name"
              item-value="value"
              dense
              solo
              hide-details="auto"
              clearable
              placeholder="Hình thức nộp hồ sơ"
              return-object
            >
            </v-autocomplete>
          </v-col>
          <v-col class="d-flex align-center justify-start" style="">
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsLoaiThuTuc"
              v-model="loaiThuTucSearch"
              item-text="name"
              item-value="value"
              dense
              solo
              hide-details="auto"
              clearable
              placeholder="Loại thủ tục hành chính"
              return-object
            >
            </v-autocomplete>
          </v-col>
          <v-col class="d-flex align-center justify-start" style="">
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              :items="itemsTrangThai"
              v-model="trangThaiSearch"
              item-text="name"
              item-value="value"
              dense
              solo
              hide-details="auto"
              clearable
              placeholder="Trạng thái"
              return-object
            >
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-flex>
      <v-flex class="xs12 px-2" style="text-align: right;">
        <v-btn color="primary" class="btn-form mx-0 text-white" @click="getStatistic('reset')">
          <v-icon size="18">mdi-ballot-outline</v-icon>&nbsp;
          XEM THỐNG KÊ
        </v-btn>
      </v-flex>
      <v-flex xs12 class="mx-2 my-2 report__table" style="overflow: hidden;">
        <table class="my-2 table-report" hide-default-footer>
          <thead>
            <tr>
              <th class="text-center px-2">
                <span>STT</span>
              </th>
              <th class="text-center px-2">
                <span>Mã hồ sơ</span>
              </th>
              <th class="text-center px-2 py-1">
                <span>Nội dung</span>
              </th>
              <th class="text-center px-2">
                <span>Chủ hồ sơ</span>
              </th>
              <th class="text-center px-2" width="120">
                <span>Ngày tiếp nhận</span>
              </th>
              <th class="text-center px-2" width="120">
                <span>Ngày hẹn trả</span>
              </th>
              <th class="text-center px-2" width="120">
                <span>Trạng thái</span>
              </th>
            </tr>
          </thead>
          <tbody v-if="loadingTable">
            <tr class="note__column">
              <td class="px-2" colspan="15">
                <content-placeholders class="my-2">
                  <content-placeholders-text :lines="5" />
                </content-placeholders>
              </td>
            </tr>
          </tbody>
          <tbody v-if="!loadingTable && danhSachThongKe.length > 0">
            <tr class="note__column">
              <td align="center" class="px-2">(1)</td>
              <td align="center" class="px-2">(2)</td>
              <td align="center" class="px-2">(3)</td>
              <td align="center" class="px-2">(4)</td>
              <td align="center" class="px-2">(5)</td>
              <td align="center" class="px-2">(6)</td>
              <td align="center" class="px-2">(7)</td>
            </tr>
            <tr v-for="(item,index) in danhSachThongKe" :key="index">
              <td align="center" class="px-2">{{index + 1}}</td>
              <td align="left" class="px-2" style="padding: 8px 10px;">{{item.dossierNo}}</td>
              <td align="left" class="px-2">{{item.dossierName}}</td>
              <td align="left"  class="px-2">{{item.applicantName}}</td>
              <td align="center" class="px-2">{{item.receiveDate}}</td>
              <td align="center" class="px-2">{{item.dueDate}}</td>
              <td align="center" class="px-2">{{item.dossierStatusText}}</td>
            </tr>
          </tbody>
          <tbody v-if="!loadingTable && danhSachThongKe.length === 0">
            <tr class="note__column">
              <td align="center" class="px-2">(1)</td>
              <td align="center" class="px-2">(2)</td>
              <td align="center" class="px-2">(3)</td>
              <td align="center" class="px-2">(4)</td>
              <td align="center" class="px-2">(5)</td>
              <td align="center" class="px-2">(6)</td>
              <td align="center" class="px-2">(7)</td>
            </tr>
          </tbody>
        </table>
        <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount" :total="total" @tiny:change-page="changePage"></pagination>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
  import toastr from 'toastr'
  import Pagination from './Pagination.vue'
  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }

  export default {
    name: 'ThongKeChiTiet',
    components: {
      Pagination
    },
    data: () => ({
      loadingTable: false,
      itemsMucDo: [
        {name: 'Tất cả', value: '2,3,4'},
        {name: 'Mức độ 2', value: 2},
        {name: 'Mức độ 3', value: 3},
        {name: 'Mức độ 4', value: 4}
      ],
      mucDoSearch: '',
      itemsHinhThucNop: [
        {name: 'Tất cả', value: '1,2'},
        {name: 'Trực tiếp', value: 2},
        {name: 'Trực tuyến', value: 1}
      ],
      hinhThucNopSearch: '',
      itemsLoaiThuTuc: [
        {name: 'Tất cả', value: ''},
        {name: '4 tại chỗ', value: "4_TAI_CHO"},
        {name: '5 tại chỗ', value: "5_TAI_CHO"}
      ],
      loaiThuTucSearch: '',
      itemsTrangThai: [
        {name: "Kỳ trước", value: "remaining"},
        {name: "Trong kỳ", value: "receive"},
        {name: "Đã giải quyết", value: "release"},
        {name: "Đã giải quyết sớm hạn", value: "betime"},
        {name: "Đã giải quyết đúng hạn", value: "ontime"},
        {name: "Đã giải quyết trễ hạn", value: "overtime"},
        {name: "Đang giải quyết", value: "processing"},
        {name: "Đang giải quyết chưa đến hạn", value: "undue"},
        {name: "Đang giải quyết quá hạn", value: "overdue"},
        {name: "Hồ sơ đã hủy", value: "cancelled"}
      ],
      trangThaiSearch: '',
      danhSachThongKe: [],
      govAgencyList: [],
      govAgencyFilter: '',
      totalCounter: {},
      menuDate1: false,
      menuDate2: false,
      fromReceiveDate: '',
      fromReceiveDateFormatted: '',
      toReceiveDate: '',
      toReceiveDateFormatted: '',
      page: 0,
      itemsPerPage: 30,
      total: 0,
      pageCount: 0
    }),
    created () {
      let vm = this
      if (!vm.isAdmin && !vm.checkRole('WRITE_QL_HOSO') && !vm.checkRole('READ_QL_HOSO')) {
        vm.$router.push({ path: '/'})
        return
      }
      let date1 = new Date()
      vm.toReceiveDateFormatted = vm.currentDateFormat()
      vm.toReceiveDate = vm.parseDate(vm.toReceiveDateFormatted)
      vm.fromReceiveDateFormatted = `01/${(date1.getMonth() + 1).toString().padStart(2, '0')}/${date1.getFullYear()}`
      vm.fromReceiveDate = vm.parseDate(vm.fromReceiveDateFormatted)
      // vm.getStatistic()
      vm.getAgencyConfigs()
    },
    computed: {
    },
    watch: {
    },
    methods: {
      getStatistic (reset) {
        let vm = this
        if (reset) {
          vm.page = 0
          vm.danhSachThongKe = []
          vm.total = 0
          vm.pageCount = 0
        }
        let fromDate = vm.fromReceiveDate ? (new Date(`${vm.fromReceiveDate}T00:00`)).getTime() : ''
        let toDate = vm.toReceiveDate ? (new Date(`${vm.toReceiveDate}T00:00`)).getTime() : ''
        let filter = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            groupId: vm.govAgencyFilter.value,
            Authorization: "Bearer " + vm.$cookies.get('Token', '')
          },
          data: {
            type: 20,
            groupBy: 'domainCode',
            listServiceLevel: vm.mucDoSearch ? vm.mucDoSearch.value : '2,3,4',
            listTypeSendDossier: vm.hinhThucNopSearch ? vm.hinhThucNopSearch.value: '1,2',
            listInteroperating: 1,
            fromDate: fromDate,
            toDate: toDate,
            subList: vm.trangThaiSearch ? vm.trangThaiSearch.value : 'total',
            tagCode: vm.loaiThuTucSearch ? vm.loaiThuTucSearch.value : '',
            start: (vm.page + 1) * vm.itemsPerPage - vm.itemsPerPage,
            end: (vm.page + 1) * vm.itemsPerPage
          }
        }
        vm.$store.dispatch('getReport', filter).then(function (response) {
          if (response.data) {
            vm.danhSachThongKe = response.data
            vm.total = response.total
            vm.pageCount = Math.ceil(vm.total / vm.itemsPerPage)
          } else {
            vm.danhSachThongKe = []
            vm.total = 0
            vm.pageCount = 0
          }
        }).catch(function () {
        })
      },
      changePage(config) {
        let vm = this
        vm.page = config.page
        vm.getStatistic()
      },
      getAgencyConfigs () {
        let vm = this
        let listDv = vm.dataLocal.danhSachDonVi
        listDv.shift()
        vm.govAgencyList = listDv
        vm.govAgencyFilter = vm.govAgencyList[0]
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
      formatDate(date) {
        if (!date) return ''
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
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
      currentDateFormat (date) {
        let date1 = date ? new Date(date) : new Date()
        return `${date1.getDate().toString().padStart(2, '0')}/${(date1.getMonth() + 1).toString().padStart(2, '0')}/${date1.getFullYear()}`
      }
    }
  }
</script>

<style lang="sass">
  .table-report
    width: 100%
    border-top: 0px
    border-left: 1px solid #d0cece
    border-bottom: 1px solid #d0cece
  .table-report th,.table-report td
    border: 1px solid #d0cece
    border-left: 0px
    border-bottom: 0px
  #quanlyhoso-page
    background: #f8f9fa !important
  .wrap-quanlyhoso
    justify-content: space-around!important
    padding: 30px
    padding-top: 5px
  .item-statistic
    max-width: 250px !important
    width: 250px
    height: 95px
    margin-bottom: 24px
    margin-right: 24px
  .wrap-item
    background: #ffffff !important
    height: 100%
    border-radius: 16px !important
  .col-tile-1 .text-1
    padding-right: 5px
    color: #2161B1!important
    font-weight: 500
    line-height: 22px
  .col-tile-1 .text-2
    color: #2161B1!important
    font-weight: 700
    font-size: 1.25rem!important
  .item-col-2
    width: 48px
    height: 48px
    background-image: linear-gradient(310deg,#2B8700,#2b8700b8)!important
    border-radius: 10px
    padding: 10px
  .icon-doc
    color: #ffffff !important
  .col-tile-2
    width: 48px !important
    max-width: 48px !important
  .col-tile-1
    width: calc(100% - 48px) !important
    max-width: calc(100% - 48px) !important
</style>
