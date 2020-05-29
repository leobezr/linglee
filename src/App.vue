<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
// Components
import Navigation from "@/component/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>