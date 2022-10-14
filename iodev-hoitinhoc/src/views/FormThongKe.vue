<template>
  <v-card
    class="mx-auto"
    flat
  >
    <v-form
      ref="formThongKe"
      v-model="validFormAdd"
      lazy-validation
      class="mt-2"
      style="margin: 0 -10px;"
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
        }
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
            let valueSearch = Array.from(dataArray, function (item) {
              return item[itemConfig['itemValue']]
            }).toString()
            dataOutput[itemConfig['name']] = valueSearch
          }
          if (!dataOutput[itemConfig['name']]) {
            dataOutput[itemConfig['name']] = ''
          }
        }
        vm.$store.commit('SET_FORM_THONGKE', dataOutput)
      },
      initForm (type) {
        let vm = this
        console.log('mauNhap', vm.mauNhap)
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
          }
          vm.$refs.formThongKe.resetValidation()
        } else {
        }
      },
      validateForm () {
        let vm = this
        return vm.$refs.formThongKe.validate()
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
        vm.$refs.formThongKe.reset()
        vm.$refs.formThongKe.resetValidation()
      },
      goBack () {
        window.history.back()
      }
    }
}
</script>