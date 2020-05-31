<template>
  <div id="noAuth">
    <router-view></router-view>
  </div>
</template>

<script>
// Style
import "@/style/pages/_noAuth.scss";

export default {
  name: "NoAuth",
  created() {
    this.sendTo(this.$route.meta.next);
  },
  methods: {
    sendTo(page) {
      if (this.$route.name == page) return
      this.$router.push({ name: page });
    }
  },
  watch: {
    $route: {
      handler(){
        this.sendTo(this.$route.meta.next)
      }
    }
  }
};
</script>