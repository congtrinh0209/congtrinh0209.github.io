<template>
  <v-card
    class="mx-auto pa-3"
    outlined
    flat
  >
    <v-layout wrap>
      <v-flex xs12 class="pr-3">
        <v-row class="mx-0 my-0" style="border-bottom: 1px solid #2161B1">
          <v-col class="d-flex justify-start px-0 py-0" style="max-width: 250px;color: #2161B1;font-weight: 500;height: 36px;">
            <div class="header-content">
              THÔNG TIN TỔ CHỨC
            </div>
            <div class="triangle-header"></div>
          </v-col>
        </v-row>
        <v-card>
          <v-row class="my-0 mx-0" style="border-bottom: 1px solid #dedede">
            <v-col class="justify-start">
              <div class="font-weight-bold mb-2" style="color: #2161B1;text-transform: uppercase;">{{thongTinToChuc['tenGoi']}}</div>
              <div class="" style="color: #2161B1">{{thongTinToChuc['maHanhChinh']}}</div>
            </v-col>
          </v-row>
          <v-row class="my-0 mx-0 mb-3" v-if="thongTinToChuc">
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Trực thuộc đơn vị: </div>
              <span class="d-inline-block">{{thongTinToChuc.toChucCapTren['tenGoi']}}</span>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Địa chỉ: </div>
              <span class="d-inline-block">
                <span v-if="thongTinToChuc['diaChiHoatDong']['soNhaChiTiet']">{{thongTinToChuc['diaChiHoatDong']['soNhaChiTiet']}}, </span>                              
                {{thongTinToChuc['diaChiHoatDong']['phuongXa']['tenMuc']}} - {{thongTinToChuc['diaChiHoatDong']['quanHuyen']['tenMuc']}} - {{thongTinToChuc['diaChiHoatDong']['tinhThanh']['tenMuc']}}
              </span>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Điện thoại: </div>
              <span class="d-inline-block">{{thongTinToChuc.danhBaLienLac['soDienThoai']}}</span>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Email: </div>
              <span class="d-inline-block">{{thongTinToChuc.danhBaLienLac['thuDienTu']}}</span>
            </v-col>
            <v-col cols="12" md="6" class="py-2">
              <div class="d-inline-block font-weight-bold lable-1">Số fax: </div>
              <span class="d-inline-block">{{thongTinToChuc.danhBaLienLac['soFax']}}</span>
            </v-col>
          </v-row>
          <!--  -->
          <v-row class="mx-0 my-0">
            <v-col class="d-flex justify-start px-0 py-0 mx-2" style="color: #2161B1;font-weight: 500;height: 36px;border-bottom: 1px solid #2161B1;">
              <div class="sub-header" style="max-width: 170px">
                CHỨNG THƯ SỐ
              </div>
            </v-col>
          </v-row>
          <v-data-table
            :headers="headers"
            :items="itemsChungThuSo"
            :items-per-page="itemsPerPage"
            item-key="primKey"
            hide-default-footer
            class="elevation-1 mx-2"
            no-data-text="Không có"
            :loading="loadingData"
            loading-text="Đang tải... "
          >
            <template v-slot:item.index="{ item, index }">
                <div>{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
            </template>
          </v-data-table>
          <pagination class="mx-2" v-if="pageCount" :pageInput="page" :pageCount="pageCount" :total="total" @tiny:change-page="changePage"></pagination>
          <!--  -->
          <v-btn color="primary" outlined class="btn-form text-white mx-2 my-2" @click="goBack">
            <v-icon size="18">mdi-reply</v-icon>&nbsp;
            Quay lại
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-card>
</template>

<script>
  import Pagination from './Pagination.vue'
  export default {
    name: 'ThongTinDonVi',
    components: {
      Pagination
    },
    props: ['id'],
    data: () => ({
      loadingData: false,
      thongTinToChuc: '',
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
    }),
    created () {
      let vm = this
      vm.getThongTinDonVi()
    },
    computed: {
    },
    watch: {
    },
    methods: {
      getThongTinDonVi () {
        let vm = this
        let filter = {
          collectionName: 'coquandonvi',
          id: vm.id
        }
        vm.loadingData = true
        vm.$store.dispatch('collectionDetail', filter).then(function (response) {
          vm.loadingData = false
          vm.thongTinToChuc = response.resp
        }).catch(function () {
          vm.loadingData = false
        })
        vm.getChungThuSo()
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
