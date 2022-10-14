<template>
  <v-card
    class="mx-auto pa-3" style="padding-bottom: 40px !important;"
    flat
  >
    <v-row justify="end" class="mt-0 mb-0 mx-0" style="border-bottom: 1px solid #2161B1">
      <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #2161B1;font-weight: 500;">
        <div class="header-content">
          <span>TẠO BÁO CÁO</span>
          <i>(CREATING REPORT)</i>
        </div>
        <div class="triangle-header"></div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-form
      ref="formTaoBaoCao"
      v-model="validFormAdd"
      lazy-validation
      class="mt-2"
    >
      <v-layout wrap>
        <v-col cols="12" md="4" class="py-0 mb-2">
          <label>Kỳ báo cáo <span class="red--text">(*)</span></label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            v-model="kyBaoCao"
            :items="kyBaoCaoItems"
            item-text="tenMuc"
            item-value="maMuc"
            :rules="required"
            required
            dense
            solo
            hide-details="auto"
            return-object
            clearable
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="4" class="py-0 mb-2">
          <label>Năm báo cáo <span class="red--text">(*)</span></label>
          <v-autocomplete
            class="flex input-form"
            hide-no-data
            v-model="namBaoCao"
            :items="namBaoCaoItems"
            item-text="tenMuc"
            item-value="maMuc"
            :rules="required"
            required
            dense
            solo
            hide-details="auto"
            return-object
            clearable
          >
          </v-autocomplete>
        </v-col>
        <v-col cols="12" md="4" class="py-0 mb-2">
          <label>Hạn xử lý <span class="red--text">(*)</span></label>
          <v-text-field
            class="flex input-form"
            v-model="hanXuLy"
            placeholder="dd/mm/yyyy, ddmmyyyy"
            @blur="formatBirthDate('hanXuLy')"
            @input="formatBirthDate('hanXuLy')"
            solo
            dense
            :rules="required"
            required
            hide-details="auto"
            clearable
          ></v-text-field>
        </v-col>
        <!--  -->
        <v-col cols="12" class="py-0 px-0 mb-2 col col-12 my-2">
          <div class="background-triangle-small"> <v-icon size="20" color="white">mdi-view-dashboard-outline</v-icon></div>
          Loại báo cáo (Type of report)
        </v-col>
        <v-layout wrap class="px-0 py-2 mx-3 mt-2" style="border: 1px solid #dedede">
          <v-col cols="12" md="5" class="py-0 mb-2">
            <label>Loại báo cáo (Type of report)<span class="red--text">(*)</span></label>
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              v-model="nhomBaoCao"
              :items="danhSachNhomBaoCao"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
              return-object
              clearable
              @change="getDanhSachMauBaoCao"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="7" class="wrap-checkbox mb-0 pt-3 pb-0" style="align-self: center;">
            <v-btn small color="primary" class="mx-2  text-white" @click.native="toggleTatCaBaoCao('all')" >
              <v-icon left dark size="18">
                mdi-check-all
              </v-icon>
              Chọn tất cả
            </v-btn>
            <v-btn small color="primary" class="mx-2  text-white" @click.native="toggleTatCaBaoCao('null')">
              <v-icon left dark size="18">
                mdi-close-circle
              </v-icon>
              Bỏ tất cả
            </v-btn>
            <v-checkbox v-model="filterMauDaChon" color="primary" class="d-inline-flex checkbox-loaibaocao" hide-details style="margin-top: 0">
              <template v-slot:label>Đã chọn &nbsp;<span style="color: green">({{counterBaoCaoDaChon}})</span></template>
            </v-checkbox>
            <v-checkbox v-model="filterMauChuaChon" color="primary" class="d-inline-flex checkbox-loaibaocao" hide-details style="margin-top: 0">
              <template v-slot:label>Chưa chọn &nbsp;<span style="color: red">({{counterBaoCaoChuaChon}})</span></template>
            </v-checkbox>
          </v-col>
        </v-layout>
        <v-layout wrap class="px-0 py-2 mx-3 mt-0 wrap-select-loaibaocao mb-2" style="width: 100%;border: 1px solid #dedede; border-top: 0px; max-height: 250px;overflow-y: auto;">
          <v-container fluid class="py-0">
            <v-checkbox
              v-for="(item, index) in danhSachMauBaoCaoFilter" :key="index"
              v-if="((!filterMauDaChon && !filterMauChuaChon) || (filterMauDaChon && item.hasOwnProperty('selected') && item.selected) || (filterMauChuaChon && !item.selected))"
              class="mb-3"
              hide-details
              v-model="item.selected"
              :value="true"
              @change="changeDanhSachMau"
            >
              <template v-slot:label>
                <span>{{item.maMauBaoCao}}</span>
                <span>&nbsp;-&nbsp;</span>
                <span>{{item.tenGoi}}</span>
              </template>
            </v-checkbox>
          </v-container>
        </v-layout>
        <!--  -->
        <v-col cols="12" class="py-0 px-0 mb-2 col col-12 my-2">
          <div class="background-triangle-small"> <v-icon size="20" color="white">mdi-view-dashboard-outline</v-icon></div>
          Đơn vị được giao (Sub-agency in charge)
        </v-col>
        <v-layout wrap class="px-0 py-2 mx-3 mt-2" style="border: 1px solid #dedede">
          <v-col cols="12" md="5" class="py-0 mb-2">
            <label>Đơn vị được giao (Sub-agency in charge) <span class="red--text">(*)</span></label>
            <v-autocomplete
              class="flex input-form"
              hide-no-data
              v-model="nhomDonViGiao"
              :items="danhSachNhomDonViGiao"
              item-text="tenMuc"
              item-value="maMuc"
              dense
              solo
              hide-details="auto"
              return-object
              clearable
              placeholder="Chọn nhóm đơn vị"
              @change="getDanhSachDonVi"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="7" class="wrap-checkbox mb-0 pt-3 pb-0" style="align-self: center;">
            <v-btn small color="primary" class="mx-2  text-white" @click.native="toggleTatCaDonVi('all')" >
              <v-icon left dark size="18">
                mdi-check-all
              </v-icon>
              Chọn tất cả
            </v-btn>
            <v-btn small color="primary" class="mx-2  text-white" @click.native="toggleTatCaDonVi('null')">
              <v-icon left dark size="18">
                mdi-close-circle
              </v-icon>
              Bỏ tất cả
            </v-btn>
            <v-checkbox v-model="filterDonViDaChon" color="primary" class="d-inline-flex checkbox-donvi" hide-details style="margin-top: 0">
              <template v-slot:label>Đã chọn &nbsp;<span style="color: green">({{counterDonViDaChon}})</span></template>
            </v-checkbox>
            <v-checkbox v-model="filterDonViChuaChon" color="primary" class="d-inline-flex checkbox-donvi" hide-details style="margin-top: 0">
              <template v-slot:label>Chưa chọn &nbsp;<span style="color: red">({{counterDonViChuaChon}})</span></template>
            </v-checkbox>
          </v-col>
        </v-layout>
        <v-layout wrap class="px-0 py-2 mx-3 mt-0 wrap-select-loaibaocao mb-2" style="width: 100%;border: 1px solid #dedede; border-top: 0px; max-height: 250px;overflow-y: auto;">
          <v-container fluid class="py-0">
            <v-checkbox
              v-for="(item, index) in danhSachDonViFilter" :key="index"
              v-if="((!filterDonViDaChon && !filterDonViChuaChon) || (filterDonViDaChon && item.hasOwnProperty('selected') && item.selected) || (filterDonViChuaChon && !item.selected))"
              class="mb-3"
              hide-details
              v-model="item.selected"
              :label="item.tenGoi"
              :value="true"
              @change="changeDanhSachDonVi"
            ></v-checkbox>

          </v-container>
        </v-layout>
        <!--  -->
        <v-col cols="12" class="text-right my-3 mt-0">
          <!-- <v-btn small color="primary" class="mt-0 mx-2  text-white" @click.native="submitTaoBaoCao('create')" :loading="loading" :disabled="loading">
            <v-icon left dark size="20">
              mdi-file-document-plus-outline
            </v-icon>
            Tạo báo cáo
          </v-btn> -->
          <v-btn small color="primary" class="mt-0 ml-2  text-white" @click.native="submitTaoBaoCao('send')" :loading="loading" :disabled="loading">
            <v-icon left dark size="20">
              mdi-file-upload-outline
            </v-icon>
            Tạo và giao báo cáo (Create and deliver report)
          </v-btn>
      </v-col>
      </v-layout>
    </v-form>
    
  </v-card>
</template>

<script>
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    props: ["id"],
    components: {
    },
    data() {
      return {
        loading: false,
        loadingData: false,
        validFormAdd: false,
        kyBaoCaoItems: [],
        kyBaoCao: '',
        namBaoCao: '',
        hanXuLy: '',
        danhSachNhomBaoCao: [],
        nhomBaoCao: '',
        danhSachMauBaoCao: [],
        danhSachMauBaoCaoFilter: [],
        danhSachNhomDonViGiao: [],
        nhomDonViGiao: '',
        danhSachDonVi: [],
        danhSachDonViFilter: [],
        filterMauChuaChon: false,
        filterMauDaChon: false,
        filterDonViChuaChon: false,
        filterDonViDaChon: false,
        counterBaoCaoDaChon: 0,
        counterBaoCaoChuaChon: 0,
        counterDonViDaChon: 0,
        counterDonViChuaChon: 0,
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
      }
    },
    created () {
      let vm = this
      if (!vm.isAdmin && !vm.checkRole('THEMMOIBAOCAO')) {
        vm.$router.push({ path: '/login'})
        return
      }
      vm.$store.commit('SET_INDEXTAB', 0)
      vm.getDanhMuc('KYBAOCAO')
      vm.getDanhMuc('NHOMBAOCAO')
      vm.getDanhMuc('NHOMCOQUAN')
      vm.getDanhSachMauBaoCao()
      vm.getDanhSachDonVi()
    },
    computed: {
      namBaoCaoItems() {
        let arr = [];
        let year = new Date().getFullYear();
        for (let i = 0; i <= 19; i++) {
          arr.push({ tenMuc: "Năm " + (year - i), maMuc: year - i });
        }
        return arr;
      }
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 0)
      },
      filterMauDaChon (val) {
        if (val) {
          this.filterMauChuaChon = false
          let dataDaChon = this.danhSachMauBaoCao
          this.danhSachMauBaoCaoFilter = [].concat(dataDaChon)
        } else {
          this.danhSachMauBaoCaoFilter = [].concat(this.danhSachMauBaoCao)
        }
      },
      filterMauChuaChon (val) {
        if (val) {
          this.filterMauDaChon = false
          let dataDaChon = this.danhSachMauBaoCao
          this.danhSachMauBaoCaoFilter = [].concat(dataDaChon)
        } else {
          this.danhSachMauBaoCaoFilter = [].concat(this.danhSachMauBaoCao)
        }
      }
    },
    methods: {
      getDanhMuc (collection) {
        let vm = this
        let filter = {
          collectionName: 'dulieudanhmuc',
          data: {
            orderFields: 'maMuc',
            orderTypes: 'asc',
            page: 0,
            size: 1000,
            danhMuc_maDanhMuc: collection
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          if (collection === 'KYBAOCAO') {
            vm.kyBaoCaoItems = response.content
          }
          if (collection === 'NHOMBAOCAO') {
            vm.danhSachNhomBaoCao = response.content
          }
          if (collection === 'NHOMCOQUAN') {
            vm.danhSachNhomDonViGiao = response.content
          }
        }).catch(function () {
        })
      },
      getDanhSachMauBaoCao () {
        let vm = this
        let filter = {
          collectionName: 'maubaocao',
          data: {
            orderFields: 'maMauBaoCao',
            orderTypes: 'asc',
            nhomBaoCao_maMuc: vm.nhomBaoCao ? vm.nhomBaoCao.maMuc : '',
            page: 0,
            size: 1000
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.danhSachMauBaoCao = response.content
          vm.danhSachMauBaoCaoFilter = [].concat(vm.danhSachMauBaoCao)
        }).catch(function () {
        })
      },
      getDanhSachDonVi () {
        let vm = this
        let filter = {
          collectionName: 'coquandonvi',
          data: {
            orderFields: 'tenGoi',
            orderTypes: 'asc',
            nhomCoQuan_maMuc: vm.nhomDonViGiao ? vm.nhomDonViGiao.maMuc : '',
            page: 0,
            size: 1000
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          vm.danhSachDonVi = response.content
          vm.danhSachDonViFilter = [].concat(vm.danhSachDonVi)
        }).catch(function () {
        })
      },
      changeDanhSachMau () {
        let vm = this
        if (vm.filterMauDaChon) {
          vm.danhSachMauBaoCaoFilter = vm.danhSachMauBaoCao.filter(function (item) {
            return item.hasOwnProperty('selected') && item.selected
          })
        }
        if (vm.filterMauChuaChon) {
          vm.danhSachMauBaoCaoFilter = vm.danhSachMauBaoCao.filter(function (item) {
            return !item.selected
          })
        }
        vm.counterBaoCaoDaChon = vm.danhSachMauBaoCao.filter(function (item) {
          return item.hasOwnProperty('selected') && item.selected
        }).length
        vm.counterBaoCaoChuaChon = vm.danhSachMauBaoCao.filter(function (item) {
          return !item.selected
        }).length
      },
      toggleTatCaBaoCao (type) {
        let vm = this
        if (type === 'all') {
          vm.danhSachMauBaoCao.forEach((element, index) => {
            vm.danhSachMauBaoCao[index] = Object.assign(vm.danhSachMauBaoCao[index], {selected: true})
          })
          vm.danhSachMauBaoCaoFilter = [].concat(vm.danhSachMauBaoCao)
        } else {
          vm.danhSachMauBaoCao.forEach((element, index) => {
            vm.danhSachMauBaoCao[index] = Object.assign(vm.danhSachMauBaoCao[index], {selected: null})
          })
          vm.danhSachMauBaoCaoFilter = [].concat(vm.danhSachMauBaoCao)
        }
        vm.counterBaoCaoDaChon = vm.danhSachMauBaoCao.filter(function (item) {
          return item.hasOwnProperty('selected') && item.selected
        }).length
        vm.counterBaoCaoChuaChon = vm.danhSachMauBaoCao.filter(function (item) {
          return !item.selected
        }).length
      },
      changeDanhSachDonVi () {
        let vm = this
        if (vm.filterDonViDaChon) {
          vm.danhSachDonViFilter = vm.danhSachDonVi.filter(function (item) {
            return item.hasOwnProperty('selected') && item.selected
          })
        }
        if (vm.filterMauChuaChon) {
          vm.danhSachDonViFilter = vm.danhSachDonVi.filter(function (item) {
            return !item.selected
          })
        }
        vm.counterDonViDaChon = vm.danhSachDonVi.filter(function (item) {
          return item.hasOwnProperty('selected') && item.selected
        }).length
        vm.counterDonViChuaChon = vm.danhSachDonVi.filter(function (item) {
          return !item.selected
        }).length
      },
      toggleTatCaDonVi (type) {
        let vm = this
        if (type === 'all') {
          vm.danhSachDonVi.forEach((element, index) => {
            vm.danhSachDonVi[index] = Object.assign(vm.danhSachDonVi[index], {selected: true})
          })
          vm.danhSachDonViFilter = [].concat(vm.danhSachDonVi)
        } else {
          vm.danhSachDonVi.forEach((element, index) => {
            vm.danhSachDonVi[index] = Object.assign(vm.danhSachDonVi[index], {selected: null})
          })
          vm.danhSachDonViFilter = [].concat(vm.danhSachDonVi)
        }
        vm.counterDonViDaChon = vm.danhSachDonVi.filter(function (item) {
          return item.hasOwnProperty('selected') && item.selected
        }).length
        vm.counterDonViChuaChon = vm.danhSachDonVi.filter(function (item) {
          return !item.selected
        }).length
      },
      submitTaoBaoCao (type) {
        let vm = this
        let mauBaoCaoChon = vm.danhSachMauBaoCao.filter(function(item) {
          return item.hasOwnProperty('selected') && item.selected
        })
        let donViDaChon = vm.danhSachDonVi.filter(function(item) {
          return item.hasOwnProperty('selected') && item.selected
        })
        if (!mauBaoCaoChon || !mauBaoCaoChon.length) {
          toastr.error('Vui lòng chọn loại báo cáo')
          return
        }
        if (!donViDaChon || !donViDaChon.length) {
          toastr.error('Vui lòng chọn đơn vị')
          return
        }
        
        if (vm.loading) {
          return
        }
        vm.loading = true
        if (vm.$refs.formTaoBaoCao.validate()) {
          vm.$store.commit('SET_SHOWCONFIRM', true)
          let confirm = {
            auth: false,
            title: 'Xác nhận thao tác',
            message: 'Bạn có chắc chắn thực hiện tạo mới ' + mauBaoCaoChon.length + ' báo cáo cho ' + donViDaChon.length + ' đơn vị',
            button: {
              yes: 'Có',
              no: 'Không'
            },
            callback: () => {
              let kybaocao = {
                maMuc: vm.kyBaoCao['maMuc'],
                tenMuc: vm.kyBaoCao['tenMuc']
              }
              let maubaocao = Array.from(mauBaoCaoChon, function (item) {
                return {
                  "maDinhDanh": item.maDinhDanh,
                  "maMauBaoCao": item.maMauBaoCao,
                  "nhapNhieuThanhPhan": item.nhapNhieuThanhPhan == 'true' ? 1 : 0
                }
              })
              let donvi = Array.from(donViDaChon, function (item) {
                return {
                  "maHanhChinh": item.maHanhChinh,
                  "tenGoi": item.tenGoi
                }
              })
              let userInfo = vm.$cookies.get('UserInfo', '')
              let tienTrinh = {
                "hoVaTen": userInfo ? userInfo.hoVaTen : '',
                "thoiGianCapNhat": (new Date()).toISOString(),
                "hanhDong": "Tạo báo cáo",
                "noiDung": ""
              }
              let filter = {
                collectionName: 'baocao',
                data: {
                  "kyBaoCao": kybaocao,
                  "hanXuLy": vm.convertDate(vm.hanXuLy),
                  "mauBaoCao": maubaocao,
                  "coQuanThucHien": donvi,
                  "nam": vm.namBaoCao.maMuc,
                  "tienTrinh": tienTrinh
                }
              }
              console.log('dataBaoCao', filter.data)
              vm.$store.dispatch('collectionCreate', filter).then(function (result) {
                vm.loading = false
                toastr.remove()
                toastr.success('Tạo báo cáo thành công')
                
              }).catch(function (response) {
                vm.loading = false
                toastr.remove()
                toastr.error('Thêm mới thất bại')
              })
            }
          }
          vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
        } else {
          vm.loading = false
        }
      },
      formatBirthDate (data) {
        let vm = this
        let lengthDate = String(vm[data]).trim().length
        let splitDate = String(vm[data]).split('/')
        if (lengthDate && lengthDate > 4 && splitDate.length === 3 && splitDate[2]) {
          vm[data] = vm.translateDate(vm[data])
        } else if (lengthDate && lengthDate === 8) {
          let date = String(vm[data])
          vm[data] = date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8)
        } else {
          vm[data] = ''
        }
      },
      translateDate (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
      },
      dateLocale (dateInput) {
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      convertDate (date) {
        if (!date) return ''
        const [day, month, year] = date.split('/')
        let ddd = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        return (new Date(ddd)).toISOString()
      },
      goBack () {
        window.history.back()
      }
    }
}
</script>
<style lang="scss">
  .wrap-select-loaibaocao::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 5px;
  }

  .wrap-select-loaibaocao::-webkit-scrollbar
  {
    width: 10px;
    background-color: #F5F5F5;
  }

  .wrap-select-loaibaocao::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122,153,217)),
      color-stop(0.72, rgb(73,125,189)),
      color-stop(0.86, rgb(28,58,148)));
  }
  .checkbox-donvi, .checkbox-loaibaocao {
    margin-left: 30px;
  }

  @media screen and (max-width: 1025px){
    .checkbox-donvi, .checkbox-loaibaocao {
      margin-left: 10px;
    }
    .wrap-checkbox {
      padding: 0px;
    }
  }
</style>