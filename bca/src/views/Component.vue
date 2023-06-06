<script setup>
  import { useCookies } from 'vue3-cookies'
  import { ref, reactive, computed, onMounted, watch, defineAsyncComponent } from 'vue'
  import { useAppStore } from '@/stores/global.js'
  // import Pagination from '../views/Pagination.vue'
  // import TimKiemNangCao from './TimKiemNangCao.vue'
  // import FormCRUD from './FormCRUD.vue'
  const Pagination = defineAsyncComponent(() =>
    import('./Pagination.vue')
  )
  const TimKiemNangCao = defineAsyncComponent(() =>
    import('./TimKiemNangCao.vue')
  )
  const FormCRUD = defineAsyncComponent(() =>
    import('./FormCRUD.vue')
  )
  const appStore = useAppStore()
  const { cookies } = useCookies()

  const validForm = ref(false)
  const rules = reactive({
    required: (value) => (!!value && !Array.isArray(value)) || (Array.isArray(value) && value.length) || "Thông tin bắt buộc"
  })
  const model1 = ref('')
  const model2 = ref('')
  const dialog = ref(false)
  const advanceSearch = ref(false)
  const mauTimKiem = reactive([
    {
      "name": "tenChienluoc",
      "title": "Tên chiến lược",
      "type": "textfield",
      "fieldClass": "v-col-xs-12 v-col-4",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": ""
    },
    {
      "name": "hienTrang",
      "title": "Tình trạng",
      "type": "select",
      "multiple": false,
      "itemText": "tenMuc",
      "itemValue": "maMuc",
      "fieldClass": "v-col-xs-12 v-col-4",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": [],
      "autoEvent": "",
      "api": "/v1/datasharing/dulieudanhmuc/filter?page=0&size=10000&danhMuc_maDanhMuc=HIENTRANGVANBAN",
      "responseDataApi": "content"
    },
    {
      "name": "ngayBanHanh",
      "title": "Thời gian ban hành",
      "type": "date",
      "fieldClass": "v-col-xs-12 v-col-4",
      "placeHolder": "ddmmyyyy, dd/mm/yyyy",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": ""
    },
    {
      "name": "tomTat",
      "title": "Tóm tắt nội dung",
      "type": "textarea",
      "fieldClass": "v-col-12",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": "",
      "rows": 3
    }
  ])
  const mauFormCrud = reactive([
    {
      "name": "MaSinhVien",
      "title": "Mã sinh viên",
      "type": "textfield",
      "fieldClass": "v-col-xs-12 v-col-6",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": "",
      "required": true,
      "rules": [],
      "readonly": false
    },
    {
      "name": "HoVaTen",
      "title": "Họ tên",
      "type": "textfield",
      "fieldClass": "v-col-xs-12 v-col-6",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": "",
      "required": true,
      "rules": [],
      "readonly": false
    },
    {
      "name": "GioiTinh",
      "title": "Giới tính",
      "type": "select",
      "multiple": false,
      "itemText": "TenMuc",
      "itemValue": "MaMuc",
      "fieldClass": "v-col-xs-12 v-col-6",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": [],
      "autoEvent": "",
      "api": "/v1/datasharing/dulieudanhmuc/filter?page=0&size=10000&danhMuc_maDanhMuc=GIOITINH",
      "responseDataApi": "content",
      "required": true,
      "rules": [],
      "readonly": false
    },
    {
      "name": "NgaySinh",
      "title": "Ngày sinh",
      "type": "date",
      "fieldClass": "v-col-xs-12 v-col-6",
      "placeHolder": "ddmmyyyy, dd/mm/yyyy",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": "",
      "required": true,
      "rules": [],
      "readonly": false
    },
    {
      "name": "tomTat",
      "title": "Tóm tắt nội dung",
      "type": "textarea",
      "fieldClass": "v-col-12",
      "placeHolder": "",
      "defaultValue": "",
      "dataType": "",
      "dataSource": "",
      "autoEvent": "",
      "rows": 3,
      "required": true,
      "rules": [],
      "readonly": false
    }
  ])
  const advanceSearchReference = ref(null)
  const crudFormReference = ref(null)
  const dataInputSearch = reactive({})
  const dataInputCrud = ref({})
  const dataSource = reactive([
    {name: 'Giá trị 1', value: 1},
    {name: 'Giá trị 2', value: 2},
    {name: 'Giá trị 3', value: 3}
  ])
  const headers = reactive([
    {
      sortable: false,
      title: "STT",
      align: "center",
      key: "stt"
    },
    {
      sortable: false,
      title: "Họ và tên",
      align: "center",
      key: "HoVaTen"
    },
    {
      sortable: false,
      title: "Mã sinh viên",
      align: "center",
      key: "MaSinhVien"
    },
    {
      sortable: false,
      title: "Ngày sinh",
      align: "left",
      key: "NgaySinh"
    },
    {
      sortable: false,
      title: "Giới tính",
      align: "left",
      key: "GioiTinh"
    },
    {
      sortable: false,
      title: "Thao tác",
      align: "center",
      key: "thaotac"
    },
  ])
  const listStudent = reactive([
    {
        "type": "T_SinhVien",
        "PrimKey": "63fc1960b3bbb7226f56e0a1",
        "MaDinhDanh": "72627e9d-5304-4888-8121-10cdaa23e363-wzbi4snsomf5f4dl",
        "ThoiGianTao": "2023-02-27T02:45:52",
        "ThoiGianCapNhat": "2023-02-27T07:40:45",
        "TimeCreate": 1677465952701,
        "TimeUpdate": 1677483645662,
        "NguoiTaoLap": {
            "type": "T_DanhTinhDienTu",
            "maDinhDanh": "",
            "tenDinhDanh": "",
            "maSoID": ""
        },
        "NguoiCapNhat": {
            "type": "T_DanhTinhDienTu",
            "maDinhDanh": "",
            "tenDinhDanh": "",
            "maSoID": ""
        },
        "MaSinhVien": "2",
        "SoHoSo": "2",
        "SoBaoDanh": "2",
        "MaNhapHoc": "2",
        "HoVaTen": "Nguyễn Test",
        "NgaySinh": "1999-04-27T17:00:00",
        "GioiTinh": {
            "type": "C_GioiTinh",
            "MaMuc": "1",
            "TenMuc": "Nam"
        },
        "DanToc": {
            "type": "C_DanToc",
            "MaMuc": "",
            "TenMuc": ""
        },
        "TonGiao": {
            "type": "C_TonGiao",
            "MaMuc": "",
            "TenMuc": ""
        },
        "QuocTich": {
            "type": "C_QuocGia",
            "MaMuc": "",
            "TenMuc": ""
        },
        "GiayToTuyThan": [],
        "DanhBaLienLac": {
            "type": "S_DanhBaLienLac",
            "ThuDienTu": "",
            "SoDienThoai": "0355620860",
            "SoFax": ""
        },
        "DanhTinhDienTu": [],
        "EmailVNU": "zxt@gmail.com",
        "ChungMinhThu": "012345678",
        "MainImage": {
            "type": "T_Attachment",
            "Id": null,
            "FileName": null,
            "FileUrl": null
        },
        "MaLopKhoaHoc": null,
        "TenLopKhoaHoc": null
    }
  ])
  const itemsPerPage = ref(10)
  const loadingData = ref(false)
  const loading = ref(false)
  const page = ref(1)
  const pageCount = ref(3)
  const total = ref(10)

  const eventClick = function () {
    console.log('run callback')
  }
  const action = function () {
    loading.value = true
    setTimeout(function () {
      loading.value = false
    }, 300)
  }
  const showAdvanceSearch = function () {
    advanceSearch.value = !advanceSearch.value
    setTimeout(function () {
      if (advanceSearch.value) {
        advanceSearchReference.value.initForm()
      }
    }, 100)
  }
  const submitAdvanceSearch = function (dataSearch) {
    console.log('dataSearch', dataSearch)
  }
  const submitFormCrud = async function () {
    let valid = await crudFormReference.value.validateForm()
    console.log('validForm', valid)
    if (valid) {
      let dataOutput = crudFormReference.value.submit()
      console.log('dataOutputCrud', dataOutput)
    }
  }
  const changePage = function (page) {
    console.log('page_pagination', page.value)
  }
  const showConfirm = function () {
    appStore.SET_SHOWCONFIRM(true)
    let confirm = {
      auth: false,
      title: 'Xóa sinh viên',
      message: 'Bạn có chắc chắn muốn xóa',
      button: {
        yes: 'Có',
        no: 'Không'
      },
      callback: () => {
        console.log("Tôi đồng ý")
      }
    }
    appStore.SET_CONFIG_CONFIRM_DIALOG(confirm)
  }
  const showDialog = function (type, data) {
    dialog.value = true
    console.log('dataItem', data)
    if (type === 'update') {
      dataInputCrud.value = data
    }
    setTimeout(function () {
      crudFormReference.value.initForm(type)
    }, 100)
  }
  const dateLocale = function (dateInput) {
		if (!dateInput) return ''
		let date = new Date(dateInput)
		return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
	}
  onMounted(() => {

  })
</script>
<template>
  <v-card class="mx-auto pa-3" style="box-shadow: none !important;">
    <v-row justify="end" class="mt-0 mb-0 mx-0" style="border-bottom: 1px solid #025e29;">
      <v-col class="d-flex align-center justify-start py-0 px-0" style="color: #025E29;font-weight: 500;">
        <div class="header-content">
          DANH SÁCH CÁN BỘ
        </div>
        <div class="triangle-header"></div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="py-0" style="max-width: 500px;">
        <v-text-field
          append-inner-icon="mdi-magnify"
          @click:append-inner="eventClick"
          @click:prepend-inner="eventClick"
          placeholder="Tìm kiếm theo từ khóa ..."
          dense
          hide-details="auto"
          class="input-form"
          clearable
        ></v-text-field>
      </v-col>
      <v-col class="py-0 px-0" style="max-width: 180px;">
        <v-btn
          size="small"
          color="success"
          :prepend-icon="!advanceSearch ? 'mdi-filter-variant-plus' : 'mdi-filter-variant'"
          @click.stop="showAdvanceSearch" class="mx-0" style="float: right"
        >
          Tìm kiếm nâng cao
        </v-btn>
      </v-col>
    </v-row>
    <div v-if="advanceSearch">
      <TimKiemNangCao ref="advanceSearchReference" :mauNhap="mauTimKiem" :dataInput="dataInputSearch" @submitSearch="submitAdvanceSearch"></TimKiemNangCao>
    </div>

    <!-- table -->
    <v-row class="mx-0 mt-3">
      <v-col align="right" class="py-0 px-0">
        <v-btn
          size="small"
          color="success"
          prepend-icon="mdi-plus"
          @click.stop="showDialog" class="mx-0"
        >
          Thêm mới
        </v-btn>
      </v-col>
      <v-col cols="12" class="px-0">
        <v-data-table
          :headers="headers"
          :items="listStudent"
          v-model:items-per-page="itemsPerPage"
          item-value="PrimKey"
          hide-default-footer
          class="table-base"
          no-data="Không có dữ liệu"
          :loading="loadingData"
          loading-text="Đang tải... "
        >

          <template v-slot:item="{ item, index }">
            <tr>
              <td class="align-center" width="70">{{ index + 1 }}</td>
              <td class="align-left">{{ item.columns.HoVaTen }}</td>
              <td class="align-right" width="220">{{ item.columns.MaSinhVien }}</td>
              <td width="220">{{ dateLocale(item.columns.NgaySinh) }}</td>
              <td width="220">{{ item.columns.GioiTinh.TenMuc }}</td>
              <td class="align-center" width="150">
                <div>
                  <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn icon variant="flat" size="small" v-bind="props" class="mr-2" @click.stop="showDialog('update', item.columns)">
                        <v-icon size="22" color="success">mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Sửa</span>
                  </v-tooltip>

                  <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                      <v-btn icon variant="flat" size="small" v-bind="props" @click.stop="showConfirm">
                        <v-icon size="22" color="error">mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <span>Xóa</span>
                  </v-tooltip>
                </div>
              </td>
            </tr>
          </template>
        </v-data-table>
        <Pagination :pageInput="page" :pageCount="pageCount" :total="total" @changePage="changePage" style="margin-bottom: 50px;"></Pagination>
      </v-col>
    </v-row>

    <v-form
      class="pa-5 px-2"
      ref="formRef"
      lazy-validation
      v-model="validForm"
    >
      <v-row>
        <v-col cols="12" sm="6">
          <div class="titleText mb-2">
            <span class="text-label">Tiêu đề </span><span class="title-required">(*)</span>
          </div>
          <v-text-field
            :rules="[rules.required]"
            v-model="model1"
            append-inner-icon="mdi-magnify"
            prepend-inner-icon="mdi-account"
            @click:append-inner="eventClick"
            @click:prepend-inner="eventClick"
            :disabled="false"
            :readonly="false"
            placeholder="Nhập giá trị ..."
            dense
            hide-details="auto"
            required
            class="input-form"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="titleText mb-2">
            <span class="text-label">Tiêu đề </span><span class="title-required">(*)</span>
          </div>
          <v-autocomplete
            class="input-form"
            hide-no-data
            v-model="model2"
            :items="dataSource"
            :multiple="true"
            item-title="name"
            item-value="value"
            dense
            hide-details="auto"
            return-object
            clearable
            required
            :rules="[rules.required]"
          >
          </v-autocomplete>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="titleText mb-2">
            <span class="text-label">Tiêu đề </span><span class="title-required">(*)</span>
          </div>
          <v-textarea
            class="input-form"
            v-model="model1"
            placeholder="Nhập giá trị"
            dense
            hide-details="auto"
            clearable
            :rows="3"
            :rules="[rules.required]"
            required
          ></v-textarea>
        </v-col>

      </v-row>
    </v-form>
    <!-- button -->
    <v-row class="mx-0 my-5">
      <v-col cols="12">
          
        <v-btn size="small" icon="mdi-pencil" color="success"></v-btn>

        <span class="mx-3"></span>

        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn icon variant="flat" size="small" v-bind="props">
              <v-icon size="22" color="success">mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Sửa</span>
        </v-tooltip>

        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn icon variant="flat" size="small" v-bind="props">
              <v-icon size="22" color="error">mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Xóa</span>
        </v-tooltip>
        
        <span class="mx-3"></span>

        <v-btn
          size="small"
          :loading="loading"
          :disabled="loading"
          color="success"
          prepend-icon="mdi-content-save"
          @click.stop="action()"
        >
          Đồng ý
        </v-btn>
        <span class="mx-3"></span>
        <v-btn
          size="small"
          :loading="loading"
          :disabled="loading"
          color="error"
          prepend-icon="mdi-close"
          @click.stop="action()"
        >
          Thoát
        </v-btn>

        <span class="mx-3"></span>

        <v-btn
          size="small"
          variant="outlined"
          color="success"
          prepend-icon="mdi-cloud-upload"
        >
          Outlined Button
        </v-btn>

        <v-btn
          class="ml-4"
          size="small"
          color="success"
          @click.stop="showConfirm()"
        >
          Show Confirm
        </v-btn>

        <v-btn
          class="ml-4"
          size="small"
          color="success"
          @click.stop="showDialog()"
        >
          Show Dialog
        </v-btn>
      </v-col>
    </v-row>
    
    <!-- dialog -->
    <v-dialog
      max-width="1000"
      v-model="dialog"
      persistent
      absolute
    >
      <v-card>
        <v-toolbar
          dark
          color="success" class="px-3"
        >
          <v-toolbar-title>Thêm mới sinh viên</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="flat" size="small" icon color="success" @click="dialog = false" >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-2 px-3">
          <!-- Content dialog -->
          <FormCRUD ref="crudFormReference" :mauNhap="mauFormCrud" :dataInput="dataInputCrud"></FormCRUD>
        </v-card-text>
        <v-card-actions class="justify-end pb-3 px-3">
          <v-btn
            size="small" variant="elevated"
            :loading="loading"
            :disabled="loading"
            color="error"
            prepend-icon="mdi-close"
            @click.stop="dialog = false"
            class="mr-3"
          >
            Thoát
          </v-btn>
          <v-btn
            size="small" variant="elevated"
            :loading="loading"
            :disabled="loading"
            color="success"
            prepend-icon="mdi-content-save"
            @click.stop="submitFormCrud"
          >
            Thêm mới
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--  -->
  </v-card>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
