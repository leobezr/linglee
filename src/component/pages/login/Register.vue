<template>
  <div id="register">
    <v-form ref="register">
      <h2 class="mb-5">Registro</h2>
      <!--  -->
      <!-- Persona Form -->
      <div class="step-1" v-if="personaStep">
        <div class="inputs">
          <div class="first-row">
            <v-text-field
              label="Nome"
              :rules="rules.mandatory"
              autocomplete="name"
              v-model="persona.name"
              @keydown.native.enter="register"
              outlined
            />
            <v-text-field
              label="Sobrenome"
              autocomplete="lastName"
              :rules="rules.mandatory"
              v-model="persona.lastName"
              @keydown.native.enter="register"
              outlined
            />
          </div>
          <div class="first-row">
            <v-text-field
              label="Email"
              :rules="rules.email"
              autocomplete="email"
              v-model="persona.email"
              @keydown.native.enter="register"
              outlined
            />
            <v-text-field
              label="Telefone"
              autocomplete="telephone"
              v-model="persona.contact"
              :rules="rules.mandatory"
              @keydown.native.enter="register"
              outlined
            />
          </div>
          <div class="first-row">
            <v-text-field
              label="Cargo"
              autocomplete="job"
              :rules="rules.mandatory"
              v-model="persona.job"
              placeholder="Ex: estudante, designer, programador, rh"
              @keydown.native.enter="register"
              outlined
            />
          </div>
        </div>
      </div>
    </v-form>
    <!--  -->
    <!-- Credentials -->
    <v-form ref="credential">
      <div class="step-2" v-if="!personaStep">
        <div class="first-row">
          <v-text-field
            label="Senha"
            type="password"
            :rules="rules.credential"
            autocomplete="password"
            v-model="persona.credential"
            @keydown.native.enter="register"
            outlined
          />
          <v-text-field
            label="Confirme sua senha"
            type="password"
            :rules="rules.credential"
            autocomplete="password"
            v-model="confirm"
            @keydown.native.enter="register"
            outlined
          />
        </div>
      </div>
    </v-form>
    <!--  -->
    <!-- Form Controller -->
    <div class="controller mt-5">
      <v-btn color="primary" @click="register" :loading="loading">Confirmar</v-btn>
    </div>
    <!--  -->
    <!-- Alert Request -->
    <v-snackbar v-model="showCreationFeedback" top color="primary">
      {{ creationRequest }}
      <v-btn color="white" text @click="showCreationFeedback = false">Fechar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
// Core
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  computed: {
    ...mapGetters(["tester"]),
    rules() {
      return {
        credential: [
          this.persona.credential == this.confirm || "Senha diferente",
          v => (!!v && v.length > 4) || "Senha obrigatória"
        ],
        mandatory: [v => (!!v && v.length > 4) || "Campo obrigatório"],
        email: [
          v => (!!v && v.length > 4) || "Preencha seu e-mail",
          v => /.+@.+/.test(v) || "Esse campo precisa ser um e-mail válido"
        ]
      };
    },
    personaStep() {
      return this.step === 0;
    }
  },
  data() {
    return {
      creationRequest: "",
      confirm: "",
      loading: false,
      persona: {
        name: "",
        lastName: "",
        job: "",
        email: "",
        contact: "",
        credential: ""
      },
      showCreationFeedback: false,
      step: 0
    };
  },
  methods: {
    ...mapActions(["createUserAccount"]),
    startLoading(state) {
      this.loading = state;
    },
    register() {
      if (this.personaStep) {
        if (this.$refs.register.validate()) {
          this.step = 1;
        }
        return
      } else {
        if (this.$refs.credential.validate()) {
          this.startLoading(true);
          this.createUserAccount({ ...this.credential }).then(() => {
            this.showCreationFeedback = true;
            this.creationRequest = "Criado com sucesso!";
            setTimeout(this.sendLogin(), 500);
          });
        }
      }
    }
  },
  props: {
    sendLogin: { type: Function }
  }
};
</script>