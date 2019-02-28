<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background-image: url("https://congtrinh0209.github.io/extension_dev/api_test/testAPI-extension/dist/images/1657b3cea5bb265.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  min-height: 320px;
}
</style>
