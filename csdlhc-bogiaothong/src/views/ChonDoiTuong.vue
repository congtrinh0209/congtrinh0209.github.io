<template>
    <div>
        <v-layout wrap class="mb-3">
            <v-flex class="my-0 py-0 pr-3" style="width: calc(100% - 120px)">
                <v-text-field
                    class="input-form"
                    v-model="keywordSearch"
                    solo
                    dense
                    clearable
                    hide-details="auto"
                    @keyup.enter="getData()"
                    placeholder="Tìm kiếm theo từ khóa"
                ></v-text-field>
            </v-flex>
            <v-flex style="width: 120px">
                <v-btn color="primary" small class="mx-0 text-white" @click="getData()">
                  <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                  Tìm kiếm
                </v-btn>
            </v-flex>
        </v-layout>
        <v-card
          class="mx-auto pa-3"
          outlined
          flat
        >
            <v-flex class="mb-2">
                <strong>Số lượng: {{ total }}</strong>
            </v-flex>
            
            <v-data-table
                :headers="headers"
                :items="itemsData"
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
                <template v-slot:item.hoVaTen="{ item }">
                    <div class="font-weight-bold">
                        {{ item.hoVaTen }}
                    </div>
                    <div>
                        {{ dateLocale(item.ngaySinh) }}
                    </div>
                </template>
                <template v-slot:item.tinhTrangToChuc="{ item }">
                      <div :style="getColor(item.tinhTrangToChuc)">
                        {{ item.tinhTrangToChuc['tenMuc'] }}
                      </div>
                  </template>
                <template v-slot:item.coQuanChuQuan="{ item }">
                    <div>
                        {{item.coQuanChuQuan.tenGoi}}
                    </div>
                </template>
                <template v-slot:item.action="{ item }">
                    <div>
                        <v-btn
                          text
                          color="primary"
                          @click="selectData(item)"
                        >
                          Chọn
                        </v-btn>
                    </div>
                </template>
            </v-data-table>
            <pagination v-if="pageCount" :pageInput="page" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
        </v-card>
    </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
    components: {
      Pagination
    },
    props: ['type'],
    data() {
      return {
        keywordSearch: '',
        loadingData: false,
        headers: [],
        itemsData: [],
        page: 0,
        itemsPerPage: 20,
        total: 0,
        pageCount: 0
      }
    },
    created () {
      let vm = this
      if (vm.type === 'donvi') {
        vm.headers =  [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index'
          },
          {
              sortable: false,
              text: 'Mã đơn vị',
              align: 'left',
              value: 'maHanhChinh'
          },
          {
              sortable: false,
              text: 'Tên đơn vị',
              align: 'left',
              value: 'tenGoi'
          },
          {
              sortable: false,
              text: 'Tình trạng hoạt động',
              align: 'left',
              value: 'tinhTrangToChuc'
          },
          {
              sortable: false,
              text: 'Thao tác',
              align: 'center',
              value: 'action'
          }
        ]
      }
      if (vm.type === 'canbo') {
        vm.headers =  [
          {
              sortable: false,
              text: 'STT',
              align: 'center',
              value: 'index'
          },
          {
              sortable: false,
              text: 'Mã cán bộ',
              align: 'left',
              value: 'maSoCanBo'
          },
          {
              sortable: false,
              text: 'Tên cán bộ',
              align: 'left',
              value: 'hoVaTen'
          },
          {
              sortable: false,
              text: 'Cơ quan chủ quản',
              align: 'left',
              value: 'coQuanChuQuan'
          },
          {
              sortable: false,
              text: 'Thao tác',
              align: 'center',
              value: 'action'
          }
        ]
      }
      vm.getData('reset')
    },
    watch: {
      type (val) {
        let vm = this
        if (val === 'donvi') {
          vm.headers =  [
            {
                sortable: false,
                text: 'STT',
                align: 'center',
                value: 'index'
            },
            {
                sortable: false,
                text: 'Mã đơn vị',
                align: 'left',
                value: 'maHanhChinh'
            },
            {
                sortable: false,
                text: 'Tên đơn vị',
                align: 'left',
                value: 'tenGoi'
            },
            {
                sortable: false,
                text: 'Tình trạng hoạt động',
                align: 'left',
                value: 'tinhTrangToChuc'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'center',
                value: 'action'
            }
          ]
        }
        if (val === 'canbo') {
          vm.headers =  [
            {
                sortable: false,
                text: 'STT',
                align: 'center',
                value: 'index'
            },
            {
                sortable: false,
                text: 'Mã cán bộ',
                align: 'left',
                value: 'maSoCanBo'
            },
            {
                sortable: false,
                text: 'Tên cán bộ',
                align: 'left',
                value: 'hoVaTen'
            },
            {
                sortable: false,
                text: 'Cơ quan chủ quản',
                align: 'left',
                value: 'coQuanChuQuan'
            },
            {
                sortable: false,
                text: 'Thao tác',
                align: 'center',
                value: 'action'
            }
          ]
        }
        vm.getData('reset')
      }
    },
    methods: {
      getData (reset) {
        let vm = this
        if (vm.loadingData) {
          return
        }
        if (reset) {
          vm.keywordSearch = ''
          vm.page = 0
          vm.total = 0
          vm.pageCount = 0
        }
        vm.loadingData = true
        let filter = {
          collectionName: vm.type,
          data: {
            keyword: vm.keywordSearch,
            page: vm.page,
            size: vm.itemsPerPage
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.itemsData = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          vm.loadingData = false
        }).catch(function () {
          // mock-data
          if (vm.type === 'donvi') {
            vm.itemsData = vm.mockData.danhSachDonVi
          }
          if (vm.type === 'canbo') {
            vm.itemsData = vm.mockData.danhSachCanBo
          }
          vm.total = vm.itemsData.length
          // 
          vm.loadingData = false
        })
      },
      selectData (item) {
        let vm = this
        vm.$emit('tiny:select-data', item)
      },
      getColor (tinhTrangToChuc) {
        let status = tinhTrangToChuc ? String(tinhTrangToChuc['maMuc']) : '0'
        switch(status) {
          case '1':
              return 'color: green'
          case '2':
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
        vm.getData()
      }
    }
}
</script>