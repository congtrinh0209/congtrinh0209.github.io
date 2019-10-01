import { value, onCreated, onMounted, onDestroyed, watch } from "vue-function-api";
function service(props, ctx) {
  const router = value(ctx.root.$router)
  const itemsFilter = value([])
  const searchAdvanced = value(false)
  const keyFilterItems = value([])
  const typeFilterItems = value([])
  //------

  const createFilterConfig = function () {
    keyFilterItems.value = props.filter_options.length > 0 ? removeDublicate(props.filter_options, 'keyCode') : []
    typeFilterItems.value = props.filter_options.length > 0 ? removeDublicate(props.filter_options, 'typeCode') : []
  }
  const getSearchItems = function() {
    let current = ctx.root.$router.history.current
    let newQuery = current.query
    itemsFilter.value = []
    for (let key in newQuery) {
      if (newQuery[key] && String(key).indexOf('filter_field_') === 0) {
        let item = {
          keyCode: newQuery[key],
          typeCode: newQuery[String(key).replace('filter_field_', 'filter_type_')],
          fields: getFields(newQuery[key])['fields'],
          value: newQuery[String(key).replace('filter_field_', 'filter_value_')]
        }
        if (getFields(newQuery[key])['fields'] === 'date') {
          item['value'] = parseDate(item['value'])
          item['dateFormatted'] = formatDate(item['value'])
        }
        if (getFields(newQuery[key])['fields'] === 'select') {
          item['options'] = []
          item['itemText'] = getFields(item['keyCode'])['itemText']
          item['itemValue'] = getFields(item['keyCode'])['itemValue']
          item['resourceApi'] = getFields(item['keyCode'])['resourceApi']
          // get resouce api
          getDataReSource(item['resourceApi']).then(function(result) {
            item['options'] = result
          }).catch(function() {
            item['options'] = []
          })
        }
        itemsFilter.value.push(item)
      }
    }
    if (itemsFilter.value.length > 0) {
      searchAdvanced.value = true
    } else {
      searchAdvanced.value = false
    }
  }
  const addSearchItem = function() {
    itemsFilter.value.push(
      {
        keyCode: '',
        typeCode: '',
        fields: '',
        value: ''
      }
    )
  }
  const showSearchAdvanced = function() {
    searchAdvanced.value = !searchAdvanced.value
    if (searchAdvanced.value && itemsFilter.value.length === 0) {
      itemsFilter.value = [
        {
          keyCode: '',
          typeCode: '',
          fields: '',
          value: ''
        }
      ]
    }
  }
  const getDataReSource = function (api) {
    return new Promise((resolve, reject) => {
      window.Vue.$axios.get(api)
      .then(response => {
        if (response.data.data.search !== null) {
          resolve(response.data.data.search.hits.hits)
        } else {
          resolve([])
        }
      })
      .catch(error => {
        reject()
      })
    })
  }
  const submitSearch = function() {
    let current = ctx.root.$router.history.current
    let newQuery = current.query
    let queryString = '?'
    for (let key in itemsFilter.value) {
      let index = Number(key) + 1
      newQuery['filter_field_' + index] = itemsFilter.value[key]['keyCode']
      newQuery['filter_type_' + index] = itemsFilter.value[key]['typeCode']
      newQuery['filter_value_' + index] = itemsFilter.value[key]['fields'] === 'date' ? (new Date(itemsFilter.value[key]['value'])).getTime() : itemsFilter.value[key]['value']
    }
    for (let key in newQuery) {
      if (newQuery[key] !== '' && newQuery[key] !== undefined && newQuery[key] !== null &&
        Number(String(key).split('_').pop()) <= itemsFilter.value.length
      ) {
        queryString += key + '=' + newQuery[key] + '&'
      }
    }
    
    ctx.root.$router.push({
      path: current.path + queryString,
      query: {
        renew: Math.floor(Math.random() * (100 - 1 + 1)) + 1
      }
    })
  }
  const removeSearchItem = function(item, index) {
    itemsFilter.value.splice(index, 1)
    if (itemsFilter.value.length === 0) {
      searchAdvanced.value = false
    }
  }
  const changeKeySearch = function(item, index) {
    itemsFilter.value[index]['value'] = ''
    itemsFilter.value[index]['fields'] = getFields(item['keyCode'])['fields']
    if (String(itemsFilter.value[index]['fields']).toLowerCase() === 'select') {
      itemsFilter.value[index]['options'] = []
      itemsFilter.value[index]['itemText'] = getFields(item['keyCode'])['itemText']
      itemsFilter.value[index]['itemValue'] = getFields(item['keyCode'])['itemValue']
      itemsFilter.value[index]['resourceApi'] = getFields(item['keyCode'])['resourceApi']
      // get resouce api
      getDataReSource(itemsFilter.value[index]['resourceApi']).then(function(result) {
        itemsFilter.value[index]['options'] = result
      }).catch(function(result) {
        itemsFilter.value[index]['options'] = []
      })
    }
    if (String(itemsFilter.value[index]['fields']).toLowerCase() === 'date') {
      itemsFilter.value[index]['menuDate'] = false
      itemsFilter.value[index]['dateFormatted'] = ''
    }
  }
  const changeDate = function (item, index) {
    item['menuDate'] = false
    item['dateFormatted'] = formatDate(item['value'])
  }
  const formatDate = function (date) {
    if (!date) return null
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  }
  const parseDate = function (date) {
    if (!date) return null
    if (String(date).indexOf('/') > 0) {
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    } else if (String(date).indexOf('-') > 0) {
      const [day, month, year] = date.split('-')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    } else {
      let date1 = new Date(Number(date))
      return `${date1.getFullYear()}-${(date1.getMonth() + 1).toString().padStart(2, '0')}-${date1.getDate().toString().padStart(2, '0')}`
    }
  }
  const getFields = function (keyCode) {
    let fields = props.filter_options.filter(function (item) {
      return String(item['keyCode']) === String(keyCode)
    })
    return fields[0]
  }
  const removeDublicate = function (arr, key) {
    let result = arr
    .map(e => e[key])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e]).map(e => arr[e])
    return result
  }
  // declare methods
  onCreated(() => {
    createFilterConfig()
    getSearchItems()
  })
  onMounted(async () => {
  })
  watch(
    [
      () => router.value
    ],
    ([router], [oldRouter]) => {
      createFilterConfig()
      getSearchItems()
    },
    {
      lazy: false,
      deep: false,
      flush: "sync"
    }
  )
  onDestroyed(() => {
  })
  // 
  return {
    itemsFilter, searchAdvanced, keyFilterItems, typeFilterItems,

    createFilterConfig, getSearchItems, addSearchItem, showSearchAdvanced, submitSearch,
    removeSearchItem, changeKeySearch, changeDate, formatDate, parseDate, getFields, removeDublicate
  }
}

export default service;