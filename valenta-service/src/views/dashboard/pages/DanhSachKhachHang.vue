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
        title="Danh sách khách hàng"
        class="px-5 py-3"
      >
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
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
              no-data-text="Không có khách hàng nào"
              :loading="loadingData"
              loading-text="Đang tải... "
            >
              <template v-slot:item.index="{ item, index }">
                <span>{{ index + 1 }}</span>
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
    name: 'Users',

    data () {
      return {
        loading: false,
        loadingData: false,
        dialog: false,
        totalItem: 0,
        page: 1,
        pageCount: 0,
        itemsPerPage: 1,
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
      vm.getCustomer()
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      }
    },
    methods: {
      getCustomer () {
        let vm = this
        vm.loadingData = true
        db.collection("customers").get().then(function(querySnapshot) {
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

