<template>
  <v-container
    id="createEWarranty"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h4 font-weight-light">
              KÍCH HOẠT BẢO HÀNH SẢN PHẨM
            </div>

            <!-- <div class="text-subtitle-1 font-weight-light">
            </div> -->
          </template>

          <v-form
            ref="formAddWarranty"
            v-model="validFormAdd"
            lazy-validation
          >
            <v-container class="py-0">
              <div class="my-3">
                <v-icon color="info" class="mr-3" >
                  mdi-card-account-details-outline
                </v-icon>
                <span style="color: #00bcd4">THÔNG TIN KHÁCH HÀNG</span>
              </div>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pb-0"
                >
                  <div class="mb-2">Tên khách hàng <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="customName"
                    :rules="customNameRules"
                    required
                    outlined
                    placeholder=""
                    prepend-inner-icon="mdi-account-check-outline"
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
                  <div class="mb-2">Số điện thoại <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="customTelNo"
                    :rules="customTelNoRules"
                    required
                    outlined
                    placeholder=""
                    prepend-inner-icon="mdi-lock-check-outline"
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <div class="mb-2">Địa chỉ công trình <span style="color:red">(*)</span></div>
                  <v-text-field
                    v-model="customAddress"
                    :rules="customAddressRules"
                    outlined
                    placeholder="Địa chỉ"
                    prepend-inner-icon="mdi-map-marker"
                    dense
                    clearable
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <div class="mb-3">
                <v-icon color="info" class="mr-3" >
                  mdi-format-list-checkbox
                </v-icon>
                <span style="color: #00bcd4">THÔNG TIN SẢN PHẨM</span>
              </div>
              <div>
                <!-- Nội thất -->
                <div  class="font-weight-bold ml-1">I.   THI CÔNG NỘI THẤT </div>
                <div>
                  <v-icon color="info darken-2" class="mr-4" >
                    mdi-flash-outline
                  </v-icon>SƠN PHỦ
                </div>

                <v-row class="pl-4">
                  <v-col cols="12" sm="6" md="6">
                    <v-autocomplete
                      v-model="sonPhuSelected"
                      :items="listSonPhu"
                      outlined
                      dense
                      label="Sản phẩm"
                      return-object
                      item-text="productName"
                      item-value="uid"
                      hide-details
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-autocomplete
                      v-model="quycachSelected"
                      :items="sonPhuSelected ? sonPhuSelected['quycach'] : []"
                      outlined
                      dense
                      label="Quy cách"
                      hide-details
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      class="counter-up-down"
                      style="width: 120px"
                      v-model="counterSonPhu"
                      append-icon="mdi-plus"
                      prepend-inner-icon="mdi-minus"
                      type="number"
                      label="Số lượng"
                      outlined
                      @click:append="increaseCounter('counterSonPhu')"
                      @click:prepend-inner="decreaseCounter('counterSonPhu')"
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-btn class="" color="primary" @click="addNoiThatSonPhu">
                      <v-icon left>
                        mdi-plus
                      </v-icon>
                      <span>Thêm</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-data-table
                      :headers="headers"
                      :items="noiThatSonPhu"
                      hide-default-footer
                      no-data-text="Không có sản phẩm"
                    ></v-data-table>
                  </v-col>
                </v-row>
              </div>

              <div>
                <v-icon color="info" class="mr-3" >
                  mdi-archive-clock-outline
                </v-icon>
                <span style="color: #00bcd4">THỜI GIAN BẢO HÀNH</span>
              </div>
              <v-row>
                
              </v-row>
            </v-container>
          </v-form>
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
        panels: [0,1,2],
        listSonPhu: [],
        listSonLot: [],
        listBotTret: [],
        noiThatSonPhu: [],
        counterSonPhu: 0,
        sonPhuSelected: '',
        quycachSelected: '',
        userName: '',
        nameRules: [
          v => !!v || 'Tên thành viên là bắt buộc',
          v => (v && v.length <= 100) || 'Tên không quá 100 ký tự',
        ],
        account: '',
        accountRules: [
          v => !!v || 'Tên đăng nhập là bắt buộc',
          v => /^[a-zA-Z0-9]+$/.test(v) || 'Tên đăng nhập gồm chữ hoặc số',
          v => (v && v.length <= 75) || 'Tên đăng nhập không quá 75 ký tự',
        ],
        passWord: '',
        passwordRules: [
          v => !!v || 'Mật khẩu đăng nhập là bắt buộc',
          v => (v && v.length >= 6 && v.length <= 20) || 'Mật khẩu ít nhất 6 ký tự',
        ],
        telNo: '',
        telNoRules: [
          v => !!v || 'Số điện thoại là bắt buộc',
          v => /^0([1-9]{1}\d{8})$/.test(v) || 'Số điện thoại gồm 10 chữ số',
        ],
        address: '',
        addressRules: [
          v => (v && v.length <= 200) || 'Địa chỉ không quá 200 ký tự',
        ],
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
            align: 'left',
            value: 'soluong'
          },
          {
            sortable: false,
            text: 'Thao tác',
            align: 'center',
            value: 'action'
          },
        ],
      }
    },
    created () {
      let vm = this
      vm.getListSonPhu()
      vm.getListSonLot()
      vm.getListBotTret()
    },
    methods: {
      addMember () {
        let vm = this
        vm.dialogAddMember = true
        setTimeout(function () {
          vm.account = ''
          vm.passWord = ''
          vm.userName = ''
          vm.telNo = ''
          vm.address = ''
          vm.$refs.formAddMember.resetValidation()
        }, 200)
      },
      submitAddMember () {
        let vm = this
        if (vm.$refs.formAddMember.validate()) {
          let dataUserAuthen = {
            account: String(vm.account).trim() + '@gmail.com',
            passWord: String(vm.passWord).trim(),
            userName: String(vm.userName).trim(),
            telNo: String(vm.telNo).trim(),
            address: String(vm.address).trim()
          }
          vm.loading = true
          firebase.auth().createUserWithEmailAndPassword(dataUserAuthen.account, dataUserAuthen.passWord)
          .then(userCredential => {
            vm.loading = false
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Thêm thành viên thành công',
              color: 'success',
            })
            // Signed in 
            let user = userCredential.user;
            db.collection("users").doc(user.uid).set({
              account: String(vm.account).trim(),
              userName: dataUserAuthen.userName,
              telNo: dataUserAuthen.telNo,
              address: dataUserAuthen.address,
              role: "Member"
            })
            .then(() => {
            })
            .catch((error) => {
            });
            // ...
          })
          .catch((error) => {
            vm.loading = false
            let errorCode = error.code;
            let errorMessage = error.message;
            let mess = ''
            if (errorCode == 'auth/email-already-in-use') {
              mess = 'Tên đăng nhập đã được sử dụng. Vui lòng sử dụng tên đăng nhập khác.'
            } else if (errorCode == 'auth/weak-password') {
              mess = 'Mật khẩu quá yếu'
            } else if (errorCode == 'auth/invalid-email') {
              mess = 'Tên đăng nhập không hợp lệ'
            } else {
              mess = errorMessage
            }
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: mess,
              color: 'error',
            })
            // ..
          });
        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddMember = false
      },
      getListSonPhu () {
        let vm = this
        db.collection("sonphuProduct").get().then(function(querySnapshot) {
          let sonphuProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonphuProduct.push(item.data())
            })
            sonphuProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            console.log('sonphuProduct', sonphuProduct)
            vm.listSonPhu = sonphuProduct
          } else {
            vm.listSonPhu = []
          }
        }).catch(function () {
        })
      },
      getListSonLot () {
        let vm = this
        db.collection("sonlotProduct").get().then(function(querySnapshot) {
          let sonlotProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonlotProduct.push(item.data())
            })
            sonlotProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listSonLot = sonlotProduct
          } else {
            vm.listSonLot = []
          }
        }).catch(function () {
        })
      },
      getListBotTret () {
        let vm = this
        db.collection("bottretProduct").get().then(function(querySnapshot) {
          let bottretProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              bottretProduct.push(item.data())
            })
            bottretProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listBotTret = bottretProduct
          } else {
            vm.listBotTret = []
          }
        }).catch(function () {
        })
      },
      formatQuyCach (item) {
        if (item) {
          return String(item).split(',')
        }
      },
      addNoiThatSonPhu () {
        let vm = this
        let item = {
          productName: vm.sonPhuSelected['productName'],
          quycach: vm.quycachSelected,
          soluong: vm.counterSonPhu
        }
        vm.noiThatSonPhu.push(item)
        vm.sonPhuSelected = ''
        vm.quycachSelected = ''
        vm.counterSonPhu = 0
      },
      increaseCounter(model) {
        let vm = this
        vm[model] += 1
      },
      decreaseCounter(model) {
        let vm = this
        vm[model] -= 1
        if (vm[model] < 0) {
          vm[model] = 0
        }
      }
    },
  }
</script>

<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
  main {
    padding-top: 75px !important;
  }
</style>
