<template>
  <div class="baohanh wrap-page-login" style="min-height: calc(100vh - 92px) !important">
    <v-container fluid class="page-login" fill-height>
      <v-row>
        <v-col :cols="12">
          <v-card class="pa-2 page-login__card" tile>
            <v-card-title class="mx-3 py-0">
              <div class="image-title-login text-center my-2">
                <img src="/images/logo.png?t=1619886615424" alt="" height="80" contain />
              </div>
              <div class="text-title-login white--text text-center">BẢO HÀNH ĐIỆN TỬ</div>
            </v-card-title>
            <v-card-text class="pb-0">
              <v-form ref="form" v-model="formValid" class="form-kichhoat mt-10 mb-5 pt-4" lazy-validation>
                <div class="label-bh mb-2">MÃ THẺ BẢO HÀNH:</div>
                <v-text-field
                  v-model="eCode"
                  autocomplete="off"
                  solo
                  class="font-weight-bold"
                />
                <!-- <div class="label-bh mb-2">SỐ ĐIỆN THOẠI KHÁCH HÀNG:</div>
                <v-text-field
                  v-model="talNo"
                  autocomplete="off"
                  solo
                  class="font-weight-bold"
                /> -->
              </v-form>
            </v-card-text>
            <v-card-actions class="mx-2 pt-0 mb-3">
              <v-btn class="btn-submit-login" tile color="primary" :loading="loading" :disabled="loading" @click="createEWarranty">
                <v-icon size="20" color="#fff" class="mr-2">mdi-login-variant</v-icon> 
                <span>KÍCH HOẠT BẢO HÀNH</span>
              </v-btn>
            </v-card-actions>
            <v-card-actions class="mx-2 pt-0">
              <v-btn class="btn-submit-login" tile color="orange" :loading="loading" :disabled="loading" @click="searchBaoHanh">
                <v-icon size="20" color="#fff" class="mr-2">mdi-credit-card-search-outline</v-icon> 
                <span>TRA CỨU THÔNG TIN BẢO HÀNH</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        max-width="900"
        v-model="dialogWarrantyInfo"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>THÔNG TIN BẢO HÀNH</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogWarrantyInfo = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="pb-0"
              >
                <v-text-field
                  v-model="warrantySearch.codeNumber"
                  outlined
                  placeholder=""
                  label="Mã thẻ bảo hành"
                  prepend-inner-icon="mdi-account-check-outline"
                  dense
                  hide-details="auto"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="pb-0"
              >
                <v-text-field
                  v-model="warrantySearch.createDateLocal"
                  outlined
                  label="Ngày mua hàng"
                  prepend-inner-icon="mdi-lock-check-outline"
                  dense
                  hide-details="auto"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="pb-0"
              >
                <v-text-field
                  v-model="warrantySearch.customerName"
                  outlined
                  placeholder=""
                  label="Tên khách hàng"
                  prepend-inner-icon="mdi-account-check-outline"
                  dense
                  hide-details="auto"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="pb-0"
              >
                <v-text-field
                  v-model="warrantySearch.customerTelNo"
                  outlined
                  label="Số điện thoại"
                  prepend-inner-icon="mdi-lock-check-outline"
                  dense
                  hide-details="auto"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="warrantySearch.customerAddress"
                  outlined
                  label="Địa chỉ công trình"
                  prepend-inner-icon="mdi-map-marker"
                  dense
                  hide-details="auto"
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <div>
              <div class="my-3 font-weight-bold">
                <v-icon color="info" class="mr-3" >
                  mdi-archive-outline
                </v-icon>
                <span style="color: #00bcd4">DANH SÁCH SẢN PHẨM</span>
              </div>
              <div class="my-2 font-weight-bold">
                <v-icon color="info darken-2" class="mr-4" >
                  mdi-flash-outline
                </v-icon>NỘI THẤT
              </div>
              <v-data-table
                :headers="headers"
                :items="listSonNoiThat"
                hide-default-footer
                class="elevation-1"
                no-data-text="Không có sản phẩm nào"
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
              </v-data-table>
              <div class="my-2 font-weight-bold">
                <v-icon color="info darken-2" class="mr-4" >
                  mdi-flash-outline
                </v-icon>NGOẠI THẤT
              </div>
              <v-data-table
                :headers="headers"
                :items="listSonNgoaiThat"
                hide-default-footer
                class="elevation-1"
                no-data-text="Không có sản phẩm nào"
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
              </v-data-table>
              
            </div>
            <div>
              <div class="my-3 font-weight-bold">
                <v-icon color="info" class="mr-3" >
                  mdi-web-clock
                </v-icon>
                <span style="color: #00bcd4">THỜI GIAN BẢO HÀNH</span>
              </div>
              <div v-if="listSonNoiThat">
                <div class="mb-5">
                  <div class="d-inline-block" style="width: 130px">
                    <v-icon color="blue" class="mr-3" >
                      mdi-calendar-range
                    </v-icon>
                    Nội thất: 
                  </div>
                  <span> Từ ngày </span> <span style="color: blue">{{warrantySearch['noiThatMfgDateLocal']}}</span>
                        đến ngày <span style="color: blue"> {{warrantySearch['noiThatExpDateLocal']}}</span>
                </div>
                <div class="mb-2">
                  <div class="d-inline-block" style="width: 130px">
                    <v-icon color="orange" class="mr-3" >
                      mdi-calendar-range
                    </v-icon>
                    Ngoại thất:
                  </div>
                  <span> Từ ngày </span> <span style="color: blue">{{warrantySearch['ngoaiThatMfgDateLocal']}}</span>
                        đến ngày <span style="color: blue"> {{warrantySearch['ngoaiThatExpDateLocal']}}</span>
                </div>
              </div>
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn color="red" class="white--text" @click="dialogWarrantyInfo = false">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
const name = 'page-login'
export default {
  name: name,
  data() {
    return {
      loading: false,
      formValid: false,
      dialogWarrantyInfo: false,
      warrantySearch: '',
      eCode: '',
      talNo: '',
      formRule: {
        eCode: [(v) => !!v || this.$t('Thông tin bắt buộc', ['eCode'])],
        captcha: [(v) => !!v || this.$t('Thông tin bắt buộc', ['captcha'])],
      },
      listSonNoiThat: [],
      listSonNgoaiThat: [],
      listBotTret: [],
      headers: [
        {
          sortable: false,
          text: 'STT',
          align: 'center',
          value: 'index'
        },
        {
          sortable: false,
          text: 'Tên sản phẩm',
          align: 'left',
          value: 'productName'
        },
        {
          sortable: false,
          text: 'Quy cách',
          align: 'left',
          value: 'quycach'
        },
        {
          sortable: false,
          text: 'Số lượng',
          align: 'center',
          value: 'soluong'
        }
      ]
    }
  },
  computed: {},
  methods: {
    createEWarranty () {
      let vm = this
      vm.$router.push(
        {
          path: '/pages/kich-hoat-bao-hanh/0?activeCode=' + vm.eCode
        }
      )
    },
    searchBaoHanh () {
      let vm = this
      if (vm.eCode) {
        vm.loading = true
        db.collection("warranty").where("codeNumber", "==", String(vm.eCode)).get().then(function(querySnapshot) {
          vm.loading = false
          let warrantyList = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              warrantyList.push(item.data())
            })
            if (warrantyList.length === 1) {
              vm.warrantySearch = warrantyList[0]
              vm.listSonNoiThat = vm.warrantySearch.noithatProducts
              vm.listSonNgoaiThat = vm.warrantySearch.ngoaithatProducts
              vm.dialogWarrantyInfo = true
            }
          } else {
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: "Không có thông tin bảo hành",
              color: 'error',
            })
          }
        }).catch(function () {
          vm.loading = false
          vm.$store.commit('SHOW_SNACKBAR', {
            show: true,
            text: "Không có thông tin bảo hành",
            color: 'error',
          })
        })
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
  max-width: 500px
  margin: 0 auto
</style>
<style lang="css">
  main {
    padding-top: 0px !important;
  }
</style>
<style lang="css" scoped>
  
.label-bh {
  font-weight: bold;
  color: #0c0078;
}
.wrap-page-login{
  background-image: url(/images/bg_active.jpg);
  background-position: center;
  /* background-color: #1ae28a;
  background: linear-gradient( -45deg, #209077 0%, #1ae28a 100%); */
}
.wrap-page-login:before {
  z-index: 0;
  width: 100%;
  display: block;
  left: 0;
  top: 0;
  content: "";
  background: rgba(0,0,0,.21)
}
.page-login__card {
  border-radius: 6px !important;
  background-color: transparent;
  box-shadow: none !important
}
.v-card__title {
  background: linear-gradient(65deg,#171cc2,#ff5200);
  color: #fff;
  /* margin-top: -55px; */
  height: auto;
  border-radius: 6px !important;
}
.text-title-login {
  width: 100%;
  margin-top: -10px;
  margin-bottom: 8px;
  font-size: 16px;
    font-weight: bold;
}
.image-title-login {
  width: 100%;
}
.btn-submit-login {
  font-size: 16px;
  /* font-weight: bold; */
  width: 100%;
  height: 42px !important;
  /* background: linear-gradient(65deg,#49c217,#ff5200); */
  border-radius: 4px;
}
</style>
