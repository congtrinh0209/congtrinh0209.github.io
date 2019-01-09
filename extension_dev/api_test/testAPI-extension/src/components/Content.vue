<template>
  <div class="">
    <div class="my-4"><date-time v-model="dateTest" @input="changeInput"></date-time></div>
  </div>
</template>

<script>
import DateTimePicker from './DateTimePicker.vue'
export default {
  name: 'Content',
  components: {
    'date-time': DateTimePicker
  },
  data () {
    return {
      dateTest: '2018-03-02',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeInput () {
      let vm = this
      setTimeout(function () {
        console.log('dateTest', vm.dateTest)
      }, 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
