<template>
  <div id="app">
    <div>hi</div>
    <router-link to="/hello">HelloWorld Page</router-link>
    <br>
    <router-link to="/test">Test Page</router-link>
    <br>
    <router-link to="/seat-plan">Seat-Plan Page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
  
</style>
