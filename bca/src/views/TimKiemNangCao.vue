<script setup>
  import { ref, reactive} from 'vue'
	import { timKiemStore } from '@/stores/timkiemnangcao.js'
	const timkiemnangcao = timKiemStore()
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
	const mauNhapSearch = reactive(props.mauNhap)
  const dataInputSearch = reactive(props.dataInput)
	const data = ref({})
  const emit = defineEmits(['submitSearch'])
	const submitForm = function (type) {
		let dataOutput = Object.assign({}, data.value)
		for (let key in mauNhapSearch) {
			let itemConfig = mauNhapSearch[key]
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
		emit('submitSearch', dataOutput)
	}
	const initForm = function (type) {
		for (let key in mauNhapSearch) {
			let itemData = mauNhapSearch[key]
			if (itemData['type'] === 'select' && itemData.hasOwnProperty('api') && itemData['api'] 
				&& (!mauNhapSearch[key]['dataSource'] ||mauNhapSearch[key]['dataSource'].length == 0)
			) {
				timkiemnangcao.loadDataSource(itemData).then(function(result) {
					let resultData = itemData['responseDataApi'] ? result[itemData['responseDataApi']] : result
					mauNhapSearch[key]['dataSource'] = resultData
				}).catch(function(){})
			}
		}
		
		data.value = dataInputSearch
		for (let key in data.value) {
			let filter = mauNhapSearch.find(function (item) {
				return item.name == key
			})
			if (filter && filter.type === 'date') {
				// data.value[key] = formatBirthDate(key)
			}
			if (filter && filter.type === 'money') {
				data.value[key] = currency(data.value[key])
			}
			if (filter && filter.type === 'select' && !filter['multiple']) {
				data.value[key] = Array.isArray(data.value[key]) ? data.value[key][0] : data.value[key]
			}
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
		let vm = this
		vm.$refs.formTimKiem.reset()
		vm.$refs.formTimKiem.resetValidation()
	}
	const goBack = function () {
		window.history.back()
	}

	defineExpose({
		initForm, data
	})
</script>

<template>
	<v-card
		class="mx-auto"
		flat
	>
		<v-form
			ref="formTimKiem"
			lazy-validation
			class="py-2"
			style="border: 1px solid #025e295e;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;border-top: 0px;"
		>
			<v-row class="mx-0 my-0">
				<v-col v-for="(item, index) in mauNhap" v-bind:key="index" :class="item['fieldClass']" class="py-0 mb-2">
					<label>{{item.title}} </label>
					<v-text-field
						v-if="item.type === 'textfield'"
						class="flex input-form"
						v-model="data[item.name]"
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
						clearable
					></v-text-field>
					<v-text-field
						v-if="item.type === 'number'"
						class="flex input-form"
						v-model="data[item.name]"
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
						clearable
						type="number"
					></v-text-field>
					<v-textarea
						v-if="item.type === 'textarea'"
						class="flex input-form"
						v-model="data[item.name]"
						:placeholder="item['placeHolder']"
						solo
						dense
						hide-details="auto"
						clearable
						:rows="item.hasOwnProperty('rows') ? item.rows : 3"
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
						clearable
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
						clearable
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
						clearable
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
						clearable
					>
					</v-autocomplete>
				</v-col>
				<v-col class="py-2 px-3">
					<v-btn
						size="small"
						color="success"
						prepend-icon="mdi-magnify"
						class="mx-0" style="float: right"
						@click.stop="submitForm"
					>
						Tìm kiếm
					</v-btn>
				</v-col>
			</v-row>
		</v-form>
	</v-card>
</template>