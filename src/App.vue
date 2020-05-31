<template>
  <div id="app">
    <v-app>
      <Navigation />
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
// Components
import Navigation from "@/component/Navigation.vue";
// Style
import "@/style/pages/_global.scss";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>