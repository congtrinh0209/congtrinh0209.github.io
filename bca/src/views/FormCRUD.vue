<script setup>
  import { ref, reactive} from 'vue'
	import { useCrudStore } from '@/stores/formcrud.js'
	const crud = useCrudStore()
	const props = defineProps({
    mauNhap: {
      type: Object,
      default: {}
    },
    dataInput: {
      type: Object,
      default: {}
    }
  })
	const mauNhapForm = reactive(props.mauNhap)
  const dataInputForm = reactive(props.dataInput)
	const data = ref({})
  const validForm = ref(false)
  const emit = defineEmits(['submitForm'])
	const submit = function (type) {
		let dataOutput = Object.assign({}, data.value)
		for (let key in mauNhapForm) {
			let itemConfig = mauNhapForm[key]
			if (itemConfig.type == 'date' && dataOutput[itemConfig['name']]) {
				dataOutput[itemConfig['name']] = convertDate(dataOutput[itemConfig['name']])
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
		// console.log('dataFormOutput-2', dataOutput)
    return dataOutput
	}
	const initForm = function (type) {
		for (let key in mauNhapForm) {
			let itemData = mauNhapForm[key]
			if (itemData['type'] === 'select' && itemData.hasOwnProperty('api') && itemData['api'] 
				&& (!mauNhapForm[key]['dataSource'] || mauNhapForm[key]['dataSource'].length == 0)
			) {
				crud.loadDataSource(itemData).then(function(result) {
					let resultData = itemData['responseDataApi'] ? result[itemData['responseDataApi']] : result
					mauNhapForm[key]['dataSource'] = resultData
				}).catch(function(){})
			}
		}
		if (type === 'update' && dataInputForm) {
      
			data.value = Object.assign({}, dataInputForm)
      console.log('dataInputForm', data.value)
			for (let key in data.value) {
				let filter = mauNhapForm.find(function (item) {
					return item.name == key
				})
				if (filter && filter.type === 'date') {
					data.value[key] = dateLocale(data.value[key])
				}
				if (filter && filter.type === 'money') {
					data.value[key] = currency(data.value[key])
				}
				if (filter && filter.type === 'select' && !filter['multiple']) {
					data.value[key] = Array.isArray(data.value[key]) ? data.value[key][0] : data.value[key]
				}
			}
			this.$refs.formCrud.resetValidation()
		} else {
      console.log('mauNhapForm', mauNhapForm)
			this.$refs.formCrud.reset()
			this.$refs.formCrud.resetValidation()
		}
	}
	const formatBirthDate = function (name) {
		let lengthDate = String(data.value[name]).trim().length
		let splitDate = String(data.value[name]).split('/')
		let splitDate2 = String(data.value[name]).split('-')
		if (lengthDate && lengthDate > 4 && splitDate.length === 3 && splitDate[2]) {
			data.value[name] = translateDate(data.value[name])
		} else if (lengthDate && lengthDate === 8) {
			let date = String(data.value[name])
			data.value[name] = date.slice(0,2) + '/' + date.slice(2,4) + '/' + date.slice(4,8)
		} else if (splitDate2[1]) {
			data.value[name] = dateLocale(data.value[name])
		} else {
			// data[name] = ''
		}
	}
	const translateDate = function (date) {
		if (!date) return null
		const [day, month, year] = date.split('/')
		return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
	}
	const dateLocale = function (dateInput) {
		if (!dateInput) return ''
		let date = new Date(dateInput)
		return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
	}
	const convertDate = function (date) {
		if (!date) return ''
		const [day, month, year] = date.split('/')
		let ddd = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
		return (new Date(ddd)).getTime()
	}
	const resetForm = function () {
		this.$refs.formCrud.reset()
		this.$refs.formCrud.resetValidation()
	}
  const resetFormValidation = function () {
		this.$refs.formCrud.resetValidation()
	}
  const validateForm = async function () {
    const { valid } = await this.$refs.formCrud.validate()
    return valid
  }
	const goBack = function () {
		window.history.back()
	}

	defineExpose({
		initForm, resetForm, resetFormValidation, validateForm, submit, data
	})
</script>

<template>
	<v-card
		class="mx-auto"
		flat
	>
		<v-form
			ref="formCrud"
			lazy-validation
			class="py-0"
			v-model="validForm"
		>
			<v-row class="my-0">
				<v-col v-for="(item, index) in mauNhap" v-bind:key="index" :class="item['fieldClass']" class="py-0 mb-2">
					<label>{{item.title}} <span style="color: red" v-if="item.required">(*)</span></label>
					<v-text-field
						v-if="item.type === 'textfield'"
						class="flex input-form"
						v-model="data[item.name]"
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
            :clearable="!item['readonly']"
            :required="item.required"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
            :readonly="item['readonly']"
					></v-text-field>
					<v-text-field
						v-if="item.type === 'number'"
						class="flex input-form"
						v-model="data[item.name]"
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
						:clearable="!item['readonly']"
						type="number"
            :required="item.required"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
            @input="!readonly && item.hasOwnProperty('keyCalculator') ? triggerCalculator(item.keyCalculator) : ''"
            :readonly="item['readonly']"
					></v-text-field>
					<v-textarea
						v-if="item.type === 'textarea'"
						class="flex input-form"
						v-model="data[item.name]"
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
						:clearable="!item['readonly']"
						:rows="item.hasOwnProperty('rows') ? item.rows : 3"
            :readonly="item['readonly']"
            :required="item.required"
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
						:clearable="!item['readonly']"
            :required="item.required"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
					></v-text-field>
					<v-text-field
						v-if="item.type === 'money'"
						class="flex input-form"
						@input="toCurrency(item.name)"
						v-model="data[item.name]"
						type='number'
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
						:clearable="!item['readonly']"
            :required="item.required"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
					></v-text-field>
					<v-autocomplete
						v-if="item.type === 'select' && !item.api"
						class="flex input-form"
						hide-no-data
						v-model="data[item.name]"
						:items="item.dataSource"
						:multiple="item['multiple']"
						:item-title="item.itemText"
						:item-value="item.itemValue"
						dense
						solo
						hide-details="auto"
						return-object
						:clearable="!item['readonly']"
            :required="item.required"
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
						:item-title="item.itemText"
						:item-value="item.itemValue"
						dense
						solo
						hide-details="auto"
						return-object
						:clearable="!item['readonly']"
            :required="item.required"
            :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
					>
					</v-autocomplete>
				</v-col>
				
			</v-row>
		</v-form>
	</v-card>
</template>