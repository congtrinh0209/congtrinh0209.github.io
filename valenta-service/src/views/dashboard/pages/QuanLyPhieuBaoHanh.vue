<template>
  <div>
    <v-container
      id="users"
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
                        <span>Thời gian bảo hành: Từ ngày </span> <span style="color: blue">{{item['noiThatMfgDateLocal']}}</span>
                        đến ngày <span style="color: blue"> {{item['noiThatExpDateLocal']}}</span>
                    </p>
                </template>
                <template v-slot:item.ngoaithatProducts="{ item, index }">
                    <div v-for="(subItem, i) in item['ngoaithatProducts']" :key="i">
                        <p class="mb-2">{{i+ 1}}. {{ subItem.productName}} - {{subItem.quycach}} (sl. <span style="font-weight: bold;color: blue">{{subItem.soluong}}</span>)</p> 
                    </div>
                    <p class="mb-2" v-if="item['ngoaithatProducts'] && item['ngoaithatProducts'].length > 0">
                        <span>Thời gian bảo hành: Từ ngày </span> <span style="color: blue">{{item['ngoaiThatMfgDateLocal']}}</span>
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
      }
    },
    created () {
      let vm = this
      vm.getWarranty()
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
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
      updateStatusUser (type, user) {
        let vm = this
        vm.userUpdate = user
      },
      
    },
  }
</script>
<style lang="css" scoped>
  .v-data-table-header-mobile {
    display: none !important;
  }
</style>

