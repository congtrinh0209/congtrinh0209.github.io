<template>
  <div>
    <v-container
      id="users"
      fluid
      tag="section"
      :style="breakpointName === 'xs' || breakpointName === 'sm' ? 'padding-top: 75px' : ''"
    >
      <base-material-card
        style="margin-top: 20px"
        icon="mdi-clipboard-text"
        title="Danh sách khách hàng"
        class="px-5 py-3"
      >
        <v-btn v-if="userLogin && userLogin['role'] && userLogin['role'] === 'Admin'" class="mx-0" fab dark small color="primary" @click.stop="showTimKiem" style="position: absolute; right: 40px; top: 15px;">
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn>
        <v-card-text v-if="showAdvanceSearch">
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="pb-0"
            >
              <v-text-field
                label="Mã thẻ bảo hành"
                v-model="advanceSearchData.codeNumber"
                outlined
                placeholder=""
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
              <v-text-field
                label="Số điện thoại khách hàng"
                v-model="advanceSearchData.customerTelNo"
                outlined
                placeholder=""
                dense
                clearable
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <!-- <v-col
              cols="12" class="pb-0"
            >
              <v-autocomplete
                v-model="dailySelected"
                :items="listDaiLy"
                outlined
                dense
                label="Đại lý bán hàng"
                return-object
                item-text="userName"
                item-value="uid"
                hide-details
              >
                <template v-slot:selection="data">
                  <span>{{ data.item.userName}}&nbsp;-&nbsp;{{data.item.address}}</span>
                </template>
                <template v-slot:item="data">
                  <span>{{ data.item.userName}}&nbsp;-&nbsp;{{data.item.address}}</span>
                </template>
              </v-autocomplete>
            </v-col> -->
          </v-row>
          <v-row class="justify-end">
            <v-btn color="success" class="mt-3 mx-3" @click.stop="searchCustomer">
              <v-icon left size="22">
                mdi-magnify
              </v-icon>
              Tìm kiếm
            </v-btn>
          </v-row>
        </v-card-text>
        <v-card-text :class="breakpointName !== 'lg' ? 'px-0' : ''">
          <div :class="breakpointName === 'xs' ? 'mb-3' : 'd-flex mb-3'">
            <div class="mr-auto pt-2 mb-3" v-if="breakpointName === 'xs'">
              Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> khách hàng
            </div>
            <span class="mr-auto pt-2" v-else>
              Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> khách hàng
            </span>
          </div>
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
            class="elevation-1"
            no-data-text="Không có khách hàng nào"
            :loading="loadingData"
            loading-text="Đang tải... "
          >
            <template v-slot:item.index="{ item, index }">
              <span>{{ page * itemsPerPage - itemsPerPage + index + 1 }}</span>
            </template> 
          </v-data-table>
          <div class="text-center mt-4" v-if="pageCount">
            <nav role="navigation" aria-label="Pagination Navigation">
              <ul class="v-pagination theme--light">
                <li>
                  <button @click="prevPage"  type="button" aria-label="Previous page" 
                    :class="page == 1 ? 'v-pagination__navigation v-pagination__navigation--disabled' : 'v-pagination__navigation'">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--light"></i>
                  </button>
                </li>
                <li>
                  <button type="button" aria-current="true" class="v-pagination__item v-pagination__item--active primary">
                    {{page}}
                  </button>
                </li>
                <li>
                  <button @click="nextPage" type="button" aria-label="Next page" 
                    :class="page == pageCount ? 'v-pagination__navigation v-pagination__navigation--disabled' : 'v-pagination__navigation'">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </v-card-text>
      </base-material-card>
      <v-dialog
        max-width="600"
        v-model="dialog"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Thông tin bảo hành</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="mt-5">
            
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn color="red" class="white--text mr-2" :loading="loading" :disabled="loading" @click="dialog = false">
              <v-icon left>
                mdi-close
              </v-icon>
              Thoát
            </v-btn>
        </v-card>
      </v-dialog>
    </v-container>
    
  </div>
  
</template>

<script>
  export default {
    name: 'Customers',

    data () {
      return {
        loading: false,
        loadingData: false,
        listDaiLy: [],
        dailySelected: '',
        dialog: false,
        lastVisible: '',
        firstVisible: '',
        totalItem: 0,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        items: [],
        advanceSearchData: {
          codeNumber: '',
          customerTelNo: '',
          branchUid: ''
        },
        showAdvanceSearch: false,
        headers: [
          {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
          },
          {
            sortable: false,
            text: 'Tên khách hàng',
            align: 'left',
            value: 'customerName'
          },
          {
            sortable: false,
            text: 'Số điện thoại',
            align: 'left',
            value: 'customerTelNo'
          },
          {
            sortable: false,
            text: 'Địa chỉ',
            align: 'left',
            value: 'customerAddress'
          },
          {
            sortable: false,
            text: 'Ngày mua hàng',
            align: 'center',
            value: 'dealDateLocal'
          },
          {
            sortable: false,
            text: 'Mã thẻ bảo hành',
            align: 'center',
            value: 'eWarrantyCode'
          }
        ],
      }
    },
    created () {
      let vm = this
      vm.getCounter()
      vm.getCustomer()
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      },
      userLogin () {
        return this.$store.getters.getPermistion
      }
    },
    methods: {
      showTimKiem () {
        let vm = this
        vm.showAdvanceSearch = !vm.showAdvanceSearch
        if (!vm.listDaiLy || vm.listDaiLy.length === 0) {
          vm.getBranchs()
        }
      },
      getBranchs () {
        let vm = this
        db.collection("users").get().then(function(querySnapshot) {
          let users = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              users.push(item.data())
            })
            vm.listDaiLy = users
          } else {
            vm.listDaiLy = []
          }
        }).catch(function () {
        })
      },
      getCounter () {
        let vm = this
        let refs = db.collection('counters').doc('counterCustomer')
        refs.collection('shards').get().then((snapshot) => {
          let total = 0
          let pageCount = 0
          snapshot.forEach((doc) => {
            total += doc.data().count
          })
          if (total && vm.itemsPerPage) {
            pageCount = Math.ceil(total / vm.itemsPerPage)
          }
          vm.totalItem = total
          vm.pageCount = pageCount
          console.log('pagination', total, pageCount)
        })
      },
      searchCustomer () {
        let vm = this
        vm.loadingData = true
        let keySearch = ''
        let valueSearch = ''
        if (vm.advanceSearchData['codeNumber']) {
          keySearch = 'codeNumber'
          valueSearch = vm.advanceSearchData['codeNumber']
        }
        if (vm.advanceSearchData['customerTelNo'] && !vm.advanceSearchData['codeNumber']) {
          keySearch = 'customerTelNo'
          valueSearch = vm.advanceSearchData['customerTelNo']
        }
        if (vm.dailySelected && !vm.advanceSearchData['codeNumber'] && !vm.advanceSearchData['customerTelNo']) {
          keySearch = 'branchUid'
          valueSearch = vm.dailySelected['uid']
        }
        let refsCollection = db.collection("customers").where(keySearch, "==", valueSearch)
        if (!valueSearch) {
          refsCollection = db.collection("customers")
        } else {
          valueSearch = String(valueSearch)
        }
        
        console.log('keySearch', keySearch, valueSearch)
        refsCollection.get().then(function(querySnapshot) {
          vm.loadingData = false
          let customers = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              customers.push(item.data())
            })
            vm.items = customers
            vm.totalItem = querySnapshot.size
            vm.pageCount = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.items = []
            vm.totalItem = 0
          }
        }).catch(function () {
          vm.loadingData = false
          vm.items = []
          vm.totalItem = 0
        })
      },
      getCustomer () {
        let vm = this
        vm.loadingData = true
        db.collection("customers").orderBy('dealDate').limit(vm.itemsPerPage).get().then(function(querySnapshot) {
          vm.loadingData = false
          vm.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1]
          let customers = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              customers.push(item.data())
            })
            vm.items = customers
          } else {
            vm.items = []
          }
        }).catch(function () {
          vm.loadingData = false
        })
      },
      prevPage () {
        let vm = this
        vm.loadingData = true
        vm.page -= 1
        db.collection("customers").orderBy("dealDate").endBefore(vm.firstVisible).limit(vm.itemsPerPage).get().then(function(querySnapshot) {
          vm.loadingData = false
          vm.lastVisible = querySnapshot.docs[querySnapshot.docs.length-1]
          let customers = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              customers.push(item.data())
            })
            vm.items = customers
          } else {
            vm.items = []
          }
        }).catch(function () {
          vm.loadingData = false
        })
      },
      nextPage () {
        let vm = this
        vm.loadingData = true
        vm.page += 1
        db.collection("customers").orderBy("dealDate").startAfter(vm.lastVisible).limit(vm.itemsPerPage).get().then(function(querySnapshot) {
          vm.loadingData = false
          vm.firstVisible = querySnapshot.docs[0]
          let customers = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              customers.push(item.data())
            })
            vm.items = customers
          } else {
            vm.items = []
          }
        }).catch(function () {
          vm.loadingData = false
        })
      },
    },
  }
</script>
<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>

