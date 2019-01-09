<template>
  <div style="margin-left:50px">
    <div class="container_datepicker" style="width:290px">
      <v-date-picker
        v-model="value"
        @input="changeValue"
        width="290"
        class="mt-3"
      ></v-date-picker>
      <div class="string_day">
        {{parseDay(day)}}, {{date}} {{'Tháng ' + month }}
      </div>
      <v-layout wrap class="date_month_option">
        <v-flex xs6 class="px-3">
          <v-select
            :items="years"
            v-model="year"
            placeholder="Năm"
            @change = "changeYear"
          ></v-select>
        </v-flex>
        <v-flex xs6 class="px-3">
          <v-select
            :items="months"
            v-model="month"
            placeholder="Tháng"
            @change = "changeMonth"
          ></v-select>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: {
      value: {
        type: String,
        default: () => ''
      }
    },
    data: () => ({
      years: ['2018', '2017'],
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      year: '',
      month: '',
      day: '',
      date: '',
      hour: '',
      minute: ''
    }),
    created () {
      let vm = this
      vm.$nextTick(function () {
        if (vm.value) {
          let date = new Date(vm.value)
          vm.year = date.getFullYear().toString()
          vm.month = (date.getMonth() + 1).toString().padStart(2, '0')
          vm.date = date.getDate().toString().padStart(2, '0')
          vm.day = date.getDay()
          console.log(vm.year, vm.month, vm.date, vm.parseDay(vm.day))
        }
      })
    },
    mounted () {
    },
    watch: {
      value (val) {
        let vm = this
        let date = new Date(val)
        vm.year = date.getFullYear().toString()
        vm.month = (date.getMonth() + 1).toString().padStart(2, '0')
        vm.date = date.getDate().toString().padStart(2, '0')
        vm.day = date.getDay()
        console.log(vm.year, vm.month, vm.date, vm.parseDay(vm.day))
      }
    },
    methods: {
      changeValue () {
        let vm = this
        setTimeout(function () {
          vm.$emit('input', vm.value)
        }, 100)
      },
      changeYear () {
        let vm = this
        setTimeout(function () {
          let date = new Date(vm.value)
          vm.value = `${vm.year}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
          vm.$emit('input', vm.value)
        }, 100)
      },
      changeMonth () {
        let vm = this
        setTimeout(function () {
          let date = new Date(vm.value)
          vm.value = `${date.getFullYear()}-${vm.month}-${date.getDate().toString().padStart(2, '0')}`
          vm.$emit('input', vm.value)
        }, 100)
      },
      parseDay (val) {
        let day
        switch (val) {
          case 0:
            day = 'CN'
            break
          case 1:
            day = 'Thứ 2'
            break
          case 2:
            day = 'Thứ 3'
            break
          case 3:
            day = 'Thứ 4'
            break
          case 4:
            day = 'Thứ 5'
            break
          case 5:
            day = 'Thứ 6'
            break
          case 6:
            day = 'Thứ 7'
        }
        return day
      }
    },
    filters: {
    }
  }
</script>
