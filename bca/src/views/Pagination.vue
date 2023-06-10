<script setup>
  import { ref, onMounted, watch } from 'vue'

  const props = defineProps({
    pageInput: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    showTong: {
      type: Boolean,
      default: true
    }
  })

  const emit = defineEmits(['changePage'])
  const currentPage = ref(0)
  const currentPagePagination = ref(1)
  const pageCountUse = ref(props.pageCount)
  const totalUse = ref(props.total)
  const listPage = ref([])
  const type = ref('')

  const prevPage = function () {
    currentPage.value -= 1
    currentPagePagination.value = currentPage.value
  }
  const nextPage = function () {
    currentPage.value += 1
    currentPagePagination.value = currentPage.value
  }

  onMounted (() => {
    // console.log('onMounted', props)
    currentPage.value = props.pageInput
    currentPagePagination.value = currentPage.value
    let items = []
    for (let i = 1; i <= props.pageCount; i++) {
      let item = {
        name: 'Trang'  +' '+ i,
        value: i
      }
      items.push(item)
    }
    listPage.value = items
  })

  watch(pageCountUse, async (newPageCount, oldPageCount) => {
    let items = []
    for (let i = 1; i <= newPageCount; i++) {
      let item = {
        name: 'Trang' +' '+ i,
        value: i
      }
      items.push(item)
    }
    listPage.value = items
  })
  watch(currentPagePagination, async (newPagePagination, oldPagePagination) => {
    // console.log('currentPagePagination', newPagePagination)
    currentPage.value = newPagePagination
    emit('changePage', currentPage)
  })
</script>

<template>
  <v-row class="mt-0" style="margin-bottom: 30px;align-items: center;">
    <v-col v-if="showTong" class="flex" style="max-width: 200px;">
      <span style="color: #1E7D30;font-weight: 700;">Tổng số:</span>&nbsp;
      <span style="color: #1E7D30;font-weight: 700;">{{totalUse}}</span>
    </v-col>

    <v-col >
      <div class="flex text-center">
        <nav role="navigation" aria-label="Pagination Navigation" style="position: relative;">
          <ul class="v-pagination theme--light">
          <li>
              <button @click="prevPage"  type="button" aria-label="Previous page"  style="width: 32px;height: 32px;"
              :class="currentPage == 1 ? 'v-pagination__navigation v-pagination__navigation--disabled' : 'v-pagination__navigation'">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--light"></i>
              </button>
          </li>
          <li>
              <button style="background: #1E7D30" type="button" aria-current="true" class="v-pagination__item v-pagination__item--active primary">
              {{currentPage}} / {{pageCountUse}}
              </button>
          </li>
          <li>
              <button @click="nextPage" type="button" aria-label="Next page" style="width: 32px;height: 32px;"
              :class="currentPage == pageCountUse ? 'v-pagination__navigation v-pagination__navigation--disabled' : 'v-pagination__navigation'">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light"></i>
              </button>
          </li>
          </ul>
        </nav>
      </div>
    </v-col>
    <v-col style="max-width:150px">
      <v-autocomplete
        class="input-form"
        hide-no-data
        :items="listPage"
        v-model="currentPagePagination"
        item-title="name"
        item-value="value"
        dense
        outlined
        hide-details="auto"
        style=""
      >
      </v-autocomplete>
    </v-col>
  </v-row>
</template>

<style>
</style>

