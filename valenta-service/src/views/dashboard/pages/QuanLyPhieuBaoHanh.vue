<template>
  <div>
    <v-container
      id="manage_warranty"
      fluid
      tag="section"
      style="padding-top: 75px"
    >
      <base-material-card
        style="margin-top: 20px"
        icon="mdi-clipboard-text"
        title="Danh sách phiếu bảo hành"
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
            <v-col
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
                  <span>{{ data.item.userName}}&nbsp;-&nbsp;{{data.item.address}})</span>
                </template>
                <template v-slot:item="data">
                  <span>{{ data.item.userName}}&nbsp;-&nbsp;{{data.item.address}})</span>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="pb-0"
            >
              <v-text-field
                label="Từ ngày"
                v-model="advanceSearchData.fromCreateDate"
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
                label="Đến ngày"
                v-model="advanceSearchData.toCreateDate"
                outlined
                placeholder=""
                dense
                clearable
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-end">
            <v-btn color="success" class="mt-3 mx-3" @click.stop="searchWarranty">
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
              Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> phiếu bảo hành
            </div>
            <span class="mr-auto pt-2" v-else>
              Tổng số: <span style="font-weight: bold; color: green">{{totalItem}}</span> phiếu bảo hành
            </span>
          </div>
          
          <v-data-table
            :headers="headers"
            :items="items"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
            no-data-text="Không có phiếu bảo hành nào"
            :loading="loadingData"
            loading-text="Đang tải... "
          >
              <template v-slot:item.index="{ item, index }">
                  <span>{{ index + 1 }}</span>
              </template>
              <template v-slot:item.customerName="{ item, index }">
                  <p class="mb-2">{{ item.customerName}}</p>
                  <p class="mb-2" style="color: blue">{{ item.customerTelNo}}</p>
              </template>
              <template v-slot:item.branchName="{ item, index }">
                  <p class="mb-2">{{ item.branchName}}</p>
                  <p class="mb-2" style="color: blue">{{ item.branchTelNo}}</p>
                  <p class="mb-2" style="color: blue">{{ item.branchAddress}}</p>
              </template>
              <template v-slot:item.noithatProducts="{ item, index }">
                  <div v-for="(subItem, i) in item['noithatProducts']" :key="i">
                      <p class="mb-2">{{i+ 1}}. {{ subItem.productName}} - {{subItem.quycach}} (sl. <span style="font-weight: bold;color: blue">{{subItem.soluong}}</span>)</p> 
                  </div>
                  <p class="mb-2" v-if="item['noithatProducts'] && item['noithatProducts'].length > 0">
                      <span class="font-weight-bold">Thời gian bảo hành:</span><span> Từ ngày </span> <span style="color: blue">{{item['noiThatMfgDateLocal']}}</span>
                      đến ngày <span style="color: blue"> {{item['noiThatExpDateLocal']}}</span>
                  </p>
              </template>
              <template v-slot:item.ngoaithatProducts="{ item, index }">
                  <div v-for="(subItem, i) in item['ngoaithatProducts']" :key="i">
                      <p class="mb-2">{{i+ 1}}. {{ subItem.productName}} - {{subItem.quycach}} (sl. <span style="font-weight: bold;color: blue">{{subItem.soluong}}</span>)</p> 
                  </div>
                  <p class="mb-2" v-if="item['ngoaithatProducts'] && item['ngoaithatProducts'].length > 0">
                      <span class="font-weight-bold">Thời gian bảo hành:</span><span> Từ ngày </span> <span style="color: blue">{{item['ngoaiThatMfgDateLocal']}}</span>
                      đến ngày <span style="color: blue"> {{item['ngoaiThatExpDateLocal']}}</span>
                  </p>
              </template>
          </v-data-table>
          <div class="text-center mt-4">
            <v-pagination
              v-model="page"
              :length="pageCount"
            ></v-pagination>
          </div>
        </v-card-text>
      </base-material-card>
    </v-container>
    
  </div>
  
</template>

<script>
  export default {
    name: 'Warranty',

    data () {
      return {
        loading: false,
        loadingData: false,
        dialogAddMember: false,
        totalItem: 0,
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        typeAction: '',
        userUpdate: '',
        items: [],
        headers: [
          {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index'
          },
          {
            sortable: false,
            text: 'Mã thẻ bảo hành',
            align: 'left',
            value: 'codeNumber'
          },
          {
            sortable: false,
            text: 'Tên khách hàng',
            align: 'left',
            value: 'customerName'
          },
          {
            sortable: false,
            text: 'Địa chỉ công trình',
            align: 'left',
            value: 'customerAddress'
          },
          {
            sortable: false,
            text: 'Đại lý bán hàng',
            align: 'left',
            value: 'branchName'
          },
          {
            sortable: false,
            text: 'Ngày kích hoạt',
            align: 'left',
            value: 'createDateLocal'
          },
          {
            sortable: false,
            text: 'Nội thất',
            align: 'left',
            value: 'noithatProducts'
          },
          {
            sortable: false,
            text: 'Ngoại thất',
            align: 'left',
            value: 'ngoaithatProducts'
          },
        //   {
        //     sortable: false,
        //     text: 'Thao tác',
        //     align: 'center',
        //     value: 'action'
        //   },
        ],
        advanceSearchData: {
          codeNumber: '',
          customerTelNo: '',
          branchUid: '',
          fromCreateDate: '',
          toCreateDate: ''
        },
        listDaiLy: [],
        dailySelected: '',
        showAdvanceSearch: false
      }
    },
    created () {
      let vm = this
      vm.getWarranty()
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
      getWarranty () {
        let vm = this
        vm.loadingData = true
        db.collection("warranty").get().then(function(querySnapshot) {
          vm.loadingData = false
          let warranty = []
          if (querySnapshot.size) {
            querySnapshot.docs.forEach(function(item) {
              warranty.push(item.data())
            })
            vm.items = warranty
            vm.totalItem = querySnapshot.size
            vm.pageCount = Math.ceil(querySnapshot.size / vm.itemsPerPage)
          } else {
            vm.items = []
          }
        }).catch(function () {
          vm.loadingData = false
        })
      },
      addMember (type, user) {
        let vm = this
        vm.typeAction = type
        vm.userUpdate = user
        vm.dialogAddMember = true
        if (type === 'add') {
          setTimeout(function () {
            vm.account = ''
            vm.passWord = ''
            vm.userName = ''
            vm.telNo = ''
            vm.address = ''
            vm.$refs.formAddMember.resetValidation()
          }, 200)
        } else {
          setTimeout(function () {
            vm.account = user.account
            vm.userName = user.userName
            vm.telNo = user.telNo
            vm.address = user.address
            vm.$refs.formAddMember.resetValidation()
          }, 200)
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
      updateStatusUser (type, user) {
        let vm = this
        vm.userUpdate = user
      },
      showTimKiem () {
        let vm = this
        vm.showAdvanceSearch = !vm.showAdvanceSearch
        if (!vm.listDaiLy || vm.listDaiLy.length === 0) {
          vm.getBranchs()
        }
      },
      searchWarranty () {
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
        let refsCollection = db.collection("warranty").where(keySearch, "==", valueSearch)
        if (!valueSearch) {
          refsCollection = db.collection("warranty")
        } else {
          valueSearch = String(valueSearch)
        }
        if (vm.advanceSearchData['fromCreateDate'] && vm.advanceSearchData['toCreateDate']) {
          let date1 = vm.advanceSearchData['fromCreateDate'].split('/')
          let date2 = vm.advanceSearchData['toCreateDate'].split('/')
          let fromDate = (new Date(date1[2] + '-' + date1[1] + '-' + date1[0])).getTime()
          let toDate = (new Date(date2[2] + '-' + date2[1] + '-' + date2[0])).getTime()
          refsCollection = db.collection("warranty").where(keySearch, "==", valueSearch).where('fromCreateDate', ">=", fromDate).where('toCreateDate', "<=", toDate)
        } else if (vm.advanceSearchData['fromCreateDate'] && !vm.advanceSearchData['toCreateDate']) {
          let date1 = vm.advanceSearchData['fromCreateDate'].split('/')
          let fromDate = (new Date(date1[2] + '-' + date1[1] + '-' + date1[0])).getTime()
          refsCollection = db.collection("warranty").where(keySearch, "==", valueSearch).where('fromCreateDate', ">=", fromDate)
        } else if (!vm.advanceSearchData['fromCreateDate'] && vm.advanceSearchData['toCreateDate']) {
          let date2 = vm.advanceSearchData['toCreateDate'].split('/')
          let toDate = (new Date(date2[2] + '-' + date2[1] + '-' + date2[0])).getTime()
          refsCollection = db.collection("warranty").where(keySearch, "==", valueSearch).where('toCreateDate', "<=", toDate)
        }
        console.log('keySearch', keySearch, valueSearch)
        refsCollection.get().then(function(querySnapshot) {
          vm.loadingData = false
          console.log('itemSearchXXXX', querySnapshot.size)
          let warranty = []
          if (querySnapshot.size) {
            console.log('itemSearch123', querySnapshot.size)
            querySnapshot.docs.forEach(function(item) {
              warranty.push(item.data())
            })
            vm.items = warranty
            vm.totalItem = querySnapshot.size
            vm.pageCount = Math.ceil(querySnapshot.size / vm.itemsPerPage)
            console.log('itemSearch', vm.items, vm.totalItem)
          } else {
            vm.items = []
            vm.totalItem = 0
          }
        }).catch(function () {
          vm.loadingData = false
          vm.items = []
          vm.totalItem = 0
        })
      }
    },
  }
</script>
<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>

