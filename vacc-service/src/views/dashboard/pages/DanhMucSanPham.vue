<template>
  <v-container
    id="products"
    fluid
    tag="section"
    :style="breakpointName === 'xs' || breakpointName === 'sm' ? 'padding-top: 75px' : ''"
  >
    <v-row>
      <!-- Sơn phủ -->
      <v-col
        cols="12"
      >
        <base-material-card
          icon="mdi-dresser-outline"
          title="SƠN PHỦ"
          class="px-5 py-3"
          color="warning"
          :value="totalItemSonPhu"
        >
            <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
              <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
                <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemSonPhu}}</span> sản phẩm
                </div>
                <span class="mr-auto pt-2" v-else>
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemSonPhu}}</span> sản phẩm
                </span>
                <v-btn color="success" class="mx-0" @click.stop="addProduct('add', 'sonphuProduct', '')">
                  <v-icon left size="22">
                    mdi-plus
                  </v-icon>
                  Thêm sản phẩm
                </v-btn>
              </div>
              <v-data-table
                :headers="headers"
                :items="listSonPhu"
                :page.sync="pageSonPhu"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCountSonPhu = $event"
                no-data-text="Không có sản phẩm nào"
                :loading="loadingDataSonPhu"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-slot:item.quycach="{ item }">
                  <template v-for="(subItem, i) in item['quycach']">
                    <v-chip
                      color="orange"
                      dark
                      :key="i"
                      class="mr-2"
                      label
                    >
                      {{ subItem }}
                    </v-chip>
                  </template>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="addProduct('update', 'sonphuProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteProduct('sonphuProduct', item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </template>
              
              </v-data-table>
              <div class="text-center mt-4">
                <v-pagination
                  v-model="pageSonPhu"
                  :length="pageCountSonPhu"
                ></v-pagination>
              </div>
            </v-card-text>
        </base-material-card>
      </v-col>
      <!-- Sơn lót -->
      <v-col
        cols="12"
      >
        <base-material-card
          style="margin-top: 20px"
          icon="mdi-dresser-outline"
          title="SƠN LÓT"
          class="px-5 py-3"
          color="success"
          :value="totalItemSonLot"
        >
            <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
              <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
                <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemSonLot}}</span> sản phẩm
                </div>
                <span class="mr-auto pt-2" v-else>
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemSonLot}}</span> sản phẩm
                </span>
                <v-btn color="success" class="mx-0" @click.stop="addProduct('add', 'sonlotProduct', '')">
                  <v-icon left size="22">
                    mdi-plus
                  </v-icon>
                  Thêm sản phẩm
                </v-btn>
              </div>
              <v-data-table
                :headers="headers"
                :items="listSonLot"
                :page.sync="pageSonLot"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCountSonLot = $event"
                no-data-text="Không có sản phẩm nào"
                :loading="loadingDataSonLot"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-slot:item.quycach="{ item }">
                  <template v-for="(subItem, i) in item['quycach']">
                    <v-chip
                      color="orange"
                      dark
                      :key="i"
                      class="mr-2"
                      label
                    >
                      {{ subItem }}
                    </v-chip>
                  </template>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="addProduct('update', 'sonlotProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteProduct('sonlotProduct', item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </template>
              
              </v-data-table>
              <div class="text-center mt-4">
                <v-pagination
                  v-model="pageSonLot"
                  :length="pageCountSonLot"
                ></v-pagination>
              </div>
            </v-card-text>
        </base-material-card>
      </v-col>
      <!-- Sơn chống thấm -->
      <v-col
        cols="12"
      >
        <base-material-card
          style="margin-top: 20px"
          icon="mdi-dresser-outline"
          title="SƠN CHỐNG THẤM"
          class="px-5 py-3"
          color="blue"
          :value="totalItemSonChongTham"
        >
            <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
              <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
                <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemSonChongTham}}</span> sản phẩm
                </div>
                <span class="mr-auto pt-2" v-else>
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemSonChongTham}}</span> sản phẩm
                </span>
                <v-btn color="success" class="mx-0" @click.stop="addProduct('add', 'sonchongthamProduct', '')">
                  <v-icon left size="22">
                    mdi-plus
                  </v-icon>
                  Thêm sản phẩm
                </v-btn>
              </div>
              <v-data-table
                :headers="headers"
                :items="listSonChongTham"
                :page.sync="pageSonChongTham"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCountSonChongTham = $event"
                no-data-text="Không có sản phẩm nào"
                :loading="loadingDataSonChongTham"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-slot:item.quycach="{ item }">
                  <template v-for="(subItem, i) in item['quycach']">
                    <v-chip
                      color="orange"
                      dark
                      :key="i"
                      class="mr-2"
                      label
                    >
                      {{ subItem }}
                    </v-chip>
                  </template>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="addProduct('update', 'sonchongthamProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteProduct('sonchongthamProduct', item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </template>
              
              </v-data-table>
              <div class="text-center mt-4">
                <v-pagination
                  v-model="pageSonChongTham"
                  :length="pageCountSonChongTham"
                ></v-pagination>
              </div>
            </v-card-text>
        </base-material-card>
      </v-col>
      <!-- Bột trét -->
      <v-col
        cols="12"
      >
        <base-material-card
          style="margin-top: 20px"
          icon="mdi-dresser-outline"
          title="BỘT TRÉT"
          class="px-5 py-3"
          color="info"
          :value="totalItemBotTret"
        >
            <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
              <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
                <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemBotTret}}</span> sản phẩm
                </div>
                <span class="mr-auto pt-2" v-else>
                  Tổng số: <span style="font-weight: bold; color: green">{{totalItemBotTret}}</span> sản phẩm
                </span>
                <v-btn color="success" class="mx-0" @click.stop="addProduct('add', 'bottretProduct', '')">
                  <v-icon left size="22">
                    mdi-plus
                  </v-icon>
                  Thêm sản phẩm
                </v-btn>
              </div>
              <v-data-table
                :headers="headers"
                :items="listBotTret"
                :page.sync="pageBotTret"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @page-count="pageCountBotTret = $event"
                no-data-text="Không có sản phẩm nào"
                :loading="loadingDataBotTret"
                loading-text="Đang tải... "
              >
                <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-slot:item.quycach="{ item }">
                  <template v-for="(subItem, i) in item['quycach']">
                    <v-chip
                      color="orange"
                      dark
                      :key="i"
                      class="mr-2"
                      label
                    >
                      {{ subItem }}
                    </v-chip>
                  </template>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="addProduct('update', 'bottretProduct', item)" color="blue" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn @click="deleteProduct('bottretProduct', item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="22">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </template>
              
              </v-data-table>
              <div class="text-center mt-4">
                <v-pagination
                  v-model="pageBotTret"
                  :length="pageCountBotTret"
                ></v-pagination>
              </div>
            </v-card-text>
        </base-material-card>
      </v-col>
      
    </v-row>
    <v-dialog
        max-width="600"
        v-model="dialogAddProduct"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title v-if="typeAction === 'add'">Thêm sản phẩm</v-toolbar-title>
            <v-toolbar-title v-else>Cập nhật sản phẩm</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialogAddProduct = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            <v-form
              ref="formAddProduct"
              v-model="validFormAdd"
              lazy-validation
            >
              
              <v-textarea
                v-model="productName"
                :rules="nameRules"
                required
                outlined
                :counter="500"
                label="Tên sản phẩm"
                prepend-inner-icon="mdi-tag-multiple-outline"
                dense
                clearable
              ></v-textarea>
              
              <v-text-field
                v-model="labelProduct"
                placeholder="Nhập quy cách sản phẩm: Lon 5 lít, thùng 20 lít, bao 40kg, ..."
                label="Quy cách sản phẩm"
                @keydown.enter.native="addLabelProduct"
                outlined
                dense
              >
                <template v-slot:append>
                  <v-fade-transition>
                    <v-icon
                      v-if="labelProduct"
                      @click.native="addLabelProduct"
                    >
                      mdi-plus-circle
                    </v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <div>
                <v-chip
                  class="mr-2"
                  color="orange"
                  dark
                  close
                  label
                  outlined
                  v-for="(item, i) in listLabelAdd"
                  :key="i"
                  @click:close="removeLabel(i)"
                >
                  {{ item }}
                </v-chip>
              </div>
              

            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            
            <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="cancelAddProduct">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
            <v-btn class="mr-2" color="primary" :loading="loading" :disabled="loading" @click="submitAddProduct">
              <v-icon left>
                mdi-content-save
              </v-icon>
              <span v-if="typeAction === 'add'">Thêm mới</span>
              <span v-else>Cập nhật</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Products',

    data () {
      return {
        loading: false,
        loadingDataSonPhu: false,
        loadingDataSonLot: false,
        loadingDataSonChongTham: false,
        loadingDataBotTret: false,
        dialogAddProduct: false,
        labelProduct: '',
        listLabelAdd: [],

        totalItemSonPhu: 0,
        pageSonPhu: 1,
        pageCountSonPhu: 0,
        listSonPhu: [],

        totalItemSonLot: 0,
        pageSonLot: 1,
        pageCountSonLot: 0,
        listSonLot: [],

        totalItemSonChongTham: 0,
        pageSonChongTham: 1,
        pageCountSonChongTham: 0,
        listSonChongTham: [],

        totalItemBotTret: 0,
        pageBotTret: 1,
        pageCountBotTret: 0,
        listBotTret: [],

        totalItemChongTham: 0,
        pageChongTham: 1,
        pageChongTham: 0,
        listChongTham: [],

        itemsPerPage: 5,
        typeAction: '',
        productUpdate: '',
        collectionName: '',
        
        validFormAdd: true,
        productName: '',
        nameRules: [
          v => !!v || 'Tên sản phẩm là bắt buộc',
          v => (v && v.length <= 500) || 'Tên không quá 500 ký tự',
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
            text: 'Quy cách sản phẩm',
            align: 'left',
            value: 'quycach'
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
      vm.getListSonChongTham()
      vm.getListBotTret()
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      }
    },
    methods: {
      getListSonPhu () {
        let vm = this
        vm.loadingDataSonPhu = true
        db.collection("sonphuProduct").get().then(function(querySnapshot) {
          vm.loadingDataSonPhu = false
          let sonphuProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonphuProduct.push(item.data())
            })
            sonphuProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listSonPhu = sonphuProduct
            // console.log('vm.listSonPhu', vm.listSonPhu)
            vm.totalItemSonPhu = querySnapshot.size
            vm.pageCountSonPhu = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.listSonPhu = []
          }
        }).catch(function () {
          vm.loadingDataSonPhu = false
        })
      },
      getListSonLot () {
        let vm = this
        vm.loadingDataSonLot = true
        db.collection("sonlotProduct").get().then(function(querySnapshot) {
          vm.loadingDataSonLot = false
          let sonlotProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonlotProduct.push(item.data())
            })
            sonlotProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listSonLot = sonlotProduct
            vm.totalItemSonLot = querySnapshot.size
            vm.pageCountSonLot = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.listSonLot = []
          }
        }).catch(function () {
          vm.loadingDataSonLot = false
        })
      },
      getListSonChongTham () {
        let vm = this
        vm.loadingDataSonChongTham = true
        db.collection("sonchongthamProduct").get().then(function(querySnapshot) {
          vm.loadingDataSonChongTham = false
          let sonchongthamProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              sonchongthamProduct.push(item.data())
            })
            sonchongthamProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listSonChongTham = sonchongthamProduct
            vm.totalItemSonChongTham = querySnapshot.size
            vm.pageCountSonChongTham = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.listSonChongTham = []
          }
        }).catch(function () {
          vm.loadingDataSonChongTham = false
        })
      },
      getListBotTret () {
        let vm = this
        vm.loadingDataBotTret = true
        db.collection("bottretProduct").get().then(function(querySnapshot) {
          vm.loadingDataBotTret = false
          let bottretProduct = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              bottretProduct.push(item.data())
            })
            bottretProduct.forEach(function(item) {
              item['quycach'] = vm.formatQuyCach(item['quycach'])
            })
            vm.listBotTret = bottretProduct
            vm.totalItemBotTret = querySnapshot.size
            vm.pageCountBotTret = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.listBotTret = []
          }
        }).catch(function () {
          vm.loadingDataBotTret = false
        })
      },
      addProduct (type, collectionName, item) {
        let vm = this
        vm.typeAction = type
        vm.collectionName = collectionName
        vm.productUpdate = item
        vm.dialogAddProduct = true
        if (type === 'add') {
          setTimeout(function () {
            vm.productName = ''
            vm.labelProduct = ''
            vm.listLabelAdd = []
            vm.$refs.formAddProduct.resetValidation()
          }, 200)
        } else {
          setTimeout(function () {
            vm.productName = item.productName
            vm.labelProduct = ''
            if (item.quycach) {
              vm.listLabelAdd = String(item.quycach).split(',')
            }
            vm.$refs.formAddProduct.resetValidation()
          }, 200)
        }
        
      },
      deleteProduct (collectionName, item) {
        let vm = this
        let x = confirm('Bạn có chắc chắn xóa sản phẩm này?')
        if (x) {
          vm.loading = true
          db.collection(collectionName).doc(item.uid).delete().then(() => {
            vm.loading = false
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Xóa thành công',
              color: 'success',
            })
            vm.activeReloadList(collectionName)
          }).catch((error) => {
            vm.loading = false
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Xóa thất bại',
              color: 'error',
            })
          })
        }
      },
      submitAddProduct () {
        let vm = this
        if (vm.$refs.formAddProduct.validate()) {
          vm.loading = true
          if (vm.typeAction === 'add') {
            if (vm.collectionName) {
              db.collection(vm.collectionName).add(
                {
                  productName: String(vm.productName).trim(),
                  quycach: vm.listLabelAdd.length > 0 ? vm.listLabelAdd.toString() : '',
                  uid: ''
                }
              ).then((docRef) => {
                vm.loading = false
                db.collection(vm.collectionName).doc(docRef.id).set({
                  productName: String(vm.productName).trim(),
                  quycach: vm.listLabelAdd.length > 0 ? vm.listLabelAdd.toString() : '',
                  uid: docRef.id
                })
                vm.$store.commit('SHOW_SNACKBAR', {
                  show: true,
                  text: 'Thêm sản phẩm thành công',
                  color: 'success',
                })
                vm.activeReloadList(vm.collectionName)
                vm.dialogAddProduct = false
              }).catch((error) => {
                vm.loading = false
                vm.$store.commit('SHOW_SNACKBAR', {
                  show: true,
                  text: 'Thêm sản phẩm thất bại',
                  color: 'error',
                })
              })
            }
          } else {
            if (vm.productUpdate) {
              db.collection(vm.collectionName).doc(vm.productUpdate.uid).set({
                productName: String(vm.productName).trim(),
                quycach: vm.listLabelAdd.length > 0 ? vm.listLabelAdd.toString() : '',
                uid: vm.productUpdate.uid
              }).then(function () {
                vm.loading = false
                vm.dialogAddProduct = false
                vm.$store.commit('SHOW_SNACKBAR', {
                  show: true,
                  text: 'Cập nhật thành công',
                  color: 'success',
                })
                vm.activeReloadList(vm.collectionName)
              }).catch((error) => {
                vm.loading = false
                vm.$store.commit('SHOW_SNACKBAR', {
                  show: true,
                  text: 'Cập nhật thất bại',
                  color: 'error',
                })
              })
            }
          }
        }
      },
      addLabelProduct () {
        let vm = this
        if (vm.labelProduct) {
          vm.listLabelAdd.push(vm.labelProduct)
          setTimeout(function() {
            vm.labelProduct = ''
          }, 100)
        }
      },
      removeLabel (index) {
        let vm = this
        vm.listLabelAdd.splice(index, 1)
      },
      cancelAddProduct () {
        let vm = this
        vm.dialogAddProduct = false
      },
      activeReloadList (collectionName) {
        let vm = this
        if (collectionName === 'sonphuProduct') {
          vm.getListSonPhu()
        } else if (collectionName === 'sonlotProduct') {
          vm.getListSonLot()
        } else if (collectionName === 'bottretProduct') {
          vm.getListBotTret()
        } else if (collectionName === 'sonchongthamProduct') {
          vm.getListSonChongTham()
        }
      },
      formatQuyCach (item) {
        if (item) {
          return String(item).split(',')
        }
      }
    },
  }
</script>
<style lang="css" scoped>
  
</style>
