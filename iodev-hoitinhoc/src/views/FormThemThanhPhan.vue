<template>
  <v-card
    class="mx-auto"
    flat
  >
    <v-form
      ref="formThanhPhan"
      v-model="validFormAdd"
      lazy-validation
      class="mt-2"
    >
      <v-layout wrap>
        <!--  -->
        <div v-for="(item, index) in mauNhap" v-bind:key="index" :class="item['fieldClass']" class="py-0 mb-2">
          <label>{{item.title}} <span class="red--text" v-if="item.required">(*)</span></label>
          <v-text-field
            v-if="item.type === 'textfield'"
            class="flex input-form"
            v-model="data[item.name]"
            :placeholder="item['placeHolder']"
            solo
            dense
            hide-details="auto"
            :clearable="!readonly"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
          ></v-text-field>
          <v-textarea
            v-if="item.type === 'textarea'"
            class="flex input-form"
            v-model="data[item.name]"
            :placeholder="item['placeHolder']"
            solo
            dense
            hide-details="auto"
            :clearable="!readonly"
            :rows="item.hasOwnProperty('rows') ? item.rows : 3"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
          ></v-textarea>

          <v-text-field
            v-if="item.type === 'date'"
            class="flex input-form"
            v-model="data[item.name]"
            placeholder="dd/mm/yyyy, ddmmyyyy"
            @blur="formatBirthDate(item.name)"
            @input="formatBirthDate(item.name)"
            @change="formatBirthDate(item.name)"
            solo
            dense
            hide-details="auto"
            :clearable="!readonly"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
          ></v-text-field>
          <v-text-field
            v-if="item.type === 'money'"
            class="flex input-form"
            @input="toCurrency(item.name)"
            v-model="data[item.name]"
            :placeholder="item['placeHolder']"
            solo
            dense
            hide-details="auto"
            :clearable="!readonly"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
          ></v-text-field>
          <v-autocomplete
            v-if="item.type === 'select' && !item.api"
            class="flex input-form"
            hide-no-data
            v-model="data[item.name]"
            :items="item.dataSource"
            :multiple="item['multiple']"
            :item-text="item.itemText"
            :item-value="item.itemValue"
            dense
            solo
            hide-details="auto"
            return-object
            :clearable="!readonly"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
          >
          </v-autocomplete>
          <v-autocomplete
            v-if="item.type === 'select' && item.api"
            class="flex input-form"
            hide-no-data
            v-model="data[item.name]"
            :items="item.dataSource"
            :multiple="item['multiple']"
            :item-text="item.itemText"
            :item-value="item.itemValue"
            dense
            solo
            hide-details="auto"
            return-object
            :clearable="!readonly"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
          >
          </v-autocomplete>

          <div class="col-12" v-if="item.type === 'attack'" style="border: 1px solid #D9D9D9">
            <input type="file" id="file_upload" :multiple="item.multiple" @input="uploadFile()" style="display:none">
            <div v-if="fileUpload && fileUpload.length">
              <div class="pb-2" @click="viewFileUpload()" v-for="(item, key) in fileUpload" v-bind:key="key" >
                <v-icon size="18" color="green" v-if="getExtension(item) === 'xls' || getExtension(item) === 'xlsx'">mdi-file-excel-outline</v-icon>
                <v-icon size="18" color="blue" v-else-if="getExtension(item) === 'doc' || getExtension(item) === 'docx'">mdi-file-word-outline</v-icon>
                <v-icon size="18" color="red" v-else-if="getExtension(item) === 'pdf'">mdi-file-pdf-box</v-icon>
                <v-icon size="18" color="blue" v-else-if="getExtension(item) === 'png' || getExtension(item) === 'jpg' || getExtension(item) === 'jpeg'">mdi-file-image</v-icon>
                <v-icon size="18" color="#2161b1" v-else>mdi-paperclip</v-icon>
                <a class="ml-2" style="font-size: 14px;text-decoration: underline;">{{item.name}}</a>
                <v-tooltip top v-if="item.id">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="downloadFile(item, key)" color="blue" text icon class="mx-2" v-bind="attrs" v-on="on">
                      <v-icon size="18">mdi-cloud-download-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Tải xuống</span>
                </v-tooltip>
                <v-tooltip top v-if="!readonly">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="deleteFileAttack(item, key)" color="red" text icon class="mx-0" v-bind="attrs" v-on="on">
                      <v-icon size="18">mdi-close-circle</v-icon>
                    </v-btn>
                  </template>
                  <span>Xóa</span>
                </v-tooltip>
              </div>
            </div>
            <div v-else>
              <span>Không có giấy tờ đính kèm!</span>
            </div>
            <v-btn
              v-if="!readonly"
              class="btn-form my-2 mx-0 mr-2 left" small
              color="primary"
              :loading="loading" :disabled="loading"
              @click.stop="pickFileUpload()"
            >
              <v-icon size="18">mdi-cloud-upload-outline</v-icon>&nbsp;
              Tải lên tài liệu đính kèm
            </v-btn>
          </div>
        </div>
      </v-layout>
    </v-form>
  </v-card>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import toastr from 'toastr'
toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}
export default {
    props: ["mauNhap", "dataInput", "readonly", "thongtinthanhphan"],
    components: {
    },
    data() {
      return {
        loading: false,
        loadingData: false,
        validFormAdd: false,
        data: {},
        required: [
          v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'
        ],
        rules: {
          required: value => !!value || 'Thông tin bắt buộc'
        },
        fileUpload: []
      }
    },
    created () {
      let vm = this
      vm.$store.commit('SET_INDEXTAB', 0)
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        vm.$store.commit('SET_INDEXTAB', 0)
      },
    },
    methods: {
      processRules (rulesStr) {
        let rulesInput = []
        try {
          if (rulesStr) {
            rulesInput = eval('( ' + rulesStr + ' )')
          }
        } catch (error) {
        }
        return rulesInput
      },
      pickFileUpload () {
        document.getElementById('file_upload').value = ''
        document.getElementById('file_upload').click()
      },
      uploadFile () {
        let vm = this
        let files = $('#file_upload')[0].files
        for (let index = 0; index < files.length; index++) {
          vm.fileUpload.push({
            name: files[index]['name']
          })
        }
      },
      deleteFileAttack (item, index) {
        let vm = this
        if (!item.id) {
          vm.fileUpload.splice(index, 1)
        } else {
          vm.$store.commit('SET_SHOWCONFIRM', true)
          let confirm = {
            auth: false,
            title: 'Xóa tài liệu đính kèm',
            message: 'Bạn có chắc chắn muốn xóa tài liệu này',
            button: {
              yes: 'Có',
              no: 'Không'
            },
            callback: () => {
              let filter = {
                idThanhPhan: vm.thongtinthanhphan.primKey,
                idFile: item.id
              }
              vm.$store.dispatch('deleteFile', filter).then(function(result) {
                vm.fileUpload.splice(index, 1)
                toastr.success('Xóa tài liệu đính kèm thành công')
              }).catch(function(){
                toastr.success('Xóa tài liệu đính kèm thất bại')
              })
            }
          }
          vm.$store.commit('SET_CONFIG_CONFIRM_DIALOG', confirm)
        }
      },
      getExtension (file) {
        var regex = new RegExp('[^.]+$');
        var extension = file.name.match(regex);
        return extension[0].toLocaleLowerCase()
      },
      viewFileUpload () {
        let vm = this
      },
      downloadFile (file) {
        let vm = this
        vm.$store.dispatch('downloadFile', file).then(function(result) {
        }).catch(function(){})
      },
      submitTaoBaoCao (type) {
        let vm = this
        console.log('dataFormOutput', vm.data)
        let dataOutput = Object.assign({}, vm.data)
        for (let key in vm.mauNhap) {
          let itemConfig = vm.mauNhap[key]
          if (itemConfig.type == 'date' && dataOutput[itemConfig['name']]) {
            dataOutput[itemConfig['name']] = vm.convertDate(dataOutput[itemConfig['name']])
          }
          if (itemConfig.type == 'money' && dataOutput[itemConfig['name']]) {
            dataOutput[itemConfig['name']] = Number(dataOutput[itemConfig['name']].toString().replace(/\./g, ''))
          }
          if (itemConfig.type == 'select' && dataOutput[itemConfig['name']]) {
            let dataCv = Array.isArray(dataOutput[itemConfig['name']]) ? dataOutput[itemConfig['name']] : [dataOutput[itemConfig['name']]]
            let dataArray = Array.from(dataCv, function (item) {
              let itemGet = {}
              itemGet[itemConfig['itemText']] = item[itemConfig['itemText']]
              itemGet[itemConfig['itemValue']] = item[itemConfig['itemValue']]
              return itemGet
            })
            dataOutput[itemConfig['name']] = dataArray
          }
        }
        vm.$store.commit('SET_FORM_DATA', dataOutput)
      },
      initForm (type) {
        let vm = this
        for (let key in vm.mauNhap) {
          let itemData = vm.mauNhap[key]
          if (itemData['type'] === 'select' && itemData.hasOwnProperty('api') && itemData['api']) {
            vm.$store.dispatch('loadDataSource', itemData).then(function(result) {
              let resultData = itemData['responseDataApi'] ? result[itemData['responseDataApi']] : result
              vm.$set(vm.mauNhap[key], 'dataSource', resultData)
            }).catch(function(){})
          }
        }
        if (type === 'update' && vm.dataInput) {
          document.getElementById('file_upload').value = ''
          vm.fileUpload = []
          vm.data = vm.dataInput
          console.log('data', vm.data)
          for (let key in vm.data) {
            let filter = vm.mauNhap.find(function (item) {
              return item.name == key
            })
            if (filter && filter.type === 'date') {
              vm.data[key] = vm.dateLocale(vm.data[key])
            }
            if (filter && filter.type === 'money') {
              vm.data[key] = vm.currency(vm.data[key])
            }
            if (filter && filter.type === 'select' && !filter['multiple']) {
              vm.data[key] = Array.isArray(vm.data[key]) ? vm.data[key][0] : vm.data[key]
            }
            if (filter && filter.type === 'attack') {
              vm.fileUpload = [].concat(vm.data[key])
            }
          }
          vm.$refs.formThanhPhan.resetValidation()
        } else {
          document.getElementById('file_upload').value = ''
          vm.fileUpload = []
        }
      },
      validateForm () {
        let vm = this
        return vm.$refs.formThanhPhan.validate()
      },
      formatBirthDate (name) {
        let vm = this
        let lengthDate = String(vm.data[name]).trim().length
        let splitDate = String(vm.data[name]).split('/')
        let splitDate2 = String(vm.data[name]).split('-')
        if (lengthDate && lengthDate > 4 && splitDate.length === 3 && splitDate[2]) {
          vm.data[name] = vm.translateDate(vm.data[name])
        } else if (lengthDate && lengthDate === 8) {
          let date = String(vm.data[name])
          vm.data[name] = date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8)
        } else if (splitDate2[1]) {
          vm.data[name] = vm.dateLocale(vm.data[name])
        } else {
          vm.data[name] = ''
        }
      },
      currency (value) {
        if (value) {
          let moneyCur = (value / 1).toFixed(0).replace('.', ',')
          return moneyCur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        }
        return ''
      },
      toCurrency (name) {
        let vm = this
        if (vm.data[name]) {
          let data_number = Number(vm.data[name].toString().replace(/\./g, ''))
          let moneyCur = (data_number / 1).toFixed(0).replace('.', ',')
          Vue.set(vm.data, name, moneyCur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'))
        }
      },
      translateDate (date) {
        if (!date) return null
        const [day, month, year] = date.split('/')
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
      },
      dateLocale (dateInput) {
        if (!dateInput) return ''
        let date = new Date(dateInput)
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
      },
      convertDate (date) {
        if (!date) return ''
        const [day, month, year] = date.split('/')
        let ddd = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        return (new Date(ddd)).toISOString()
      },
      resetForm () {
        let vm = this
        vm.$refs.formThanhPhan.reset()
        vm.$refs.formThanhPhan.resetValidation()
      },
      goBack () {
        window.history.back()
      }
    }
}
</script>