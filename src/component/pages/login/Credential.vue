<template>
  <div id="credentials">
    <v-form ref="credential">
      <div class="login">
        <h2 class="mb-5">Login</h2>
        <v-text-field
          label="Email"
          autocomplete="email"
          v-model="user.email"
          :rules="rules"
          @keydown.native.enter="tryLogin"
          outlined
        />
        <v-text-field
          label="Senha"
          type="password"
          :rules="rules"
          autocomplete="password"
          v-model="user.password"
          @keydown.native.enter="tryLogin"
          outlined
        />
        <!--  -->
        <!-- Controller -->
        <div class="controller">
          <v-btn color="primary" :disabled="loading" @click="back" text>Criar conta</v-btn>
          <v-btn color="primary" :loading="loading" @click="tryLogin">Logar</v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
// Core
import { mapActions } from "vuex";

export default {
  name: "Credential",
  computed: {
    rules() {
      return [v => (!!v && v.length > 2) || ""];
    }
  },
  data() {
    return {
      loading: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    sendDashboard() {
      this.$router.push({ name: "dashboard" });
    },
    tryLogin() {
      if (this.$refs.credential.validate()) {
        this.loading = true;
        this.login({ ...this.user }).then(() => {
          this.loading = false;
          this.assignDone();
          setTimeout(() => this.sendDashboard(), 1000);
        });
      }
    }
  },
  props: {
    back: { type: Function },
    assignDone: { type: Function }
  }
};
</script>