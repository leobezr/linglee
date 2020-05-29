<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Auth",
  created() {
    this.sendTo(this.$route.meta.next);
  },
  methods: {
    sendTo(page) {
      this.$router.push({ name: page });
    }
  },
  watch: {
    $route: {
      handler() {
        this.sendTo(this.$route.meta.next);
      }
    }
  }
};
</script>