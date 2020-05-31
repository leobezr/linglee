<template>
  <div id="login">
    <div class="loginContainer">
      <div class="gridBox leftContainer">
        <div :class="registerStarted ? 'startedSteps true' : 'startedSteps false'">
          <div class="gridHeader">
            <h2>Linglee.</h2>
          </div>
          <div class="gridBodyContent">
            <h1
              class="mb-5"
            >Gerencie seu tempo com Lingiee! A plataforma que gerencia seu tempo de estudos e atividades.</h1>
            <p>Perfeito para você que quer começar a alcançar metas, de alguma atividade.</p>
          </div>
        </div>
      </div>
      <div class="gridBox rightContainer">
        <div class="alerts">
          Algo deu errado?
          <strong class="primary--text d-inline-block ml-1">Entre em contato</strong>
        </div>
        <div class="steps" v-if="!registerStarted">
          <div class="pick">
            <h2>Login</h2>
            <p class="mt-5">
              Escolha uma das opções abaixo, para continuar, sinta-se livre para criar uma conta.
              <br />Você também pode usar uma conta de visitante
              <v-tooltip v-model="showToolTip" top>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" :size="18" color="secondary">mdi-help-circle-outline</v-icon>
                </template>
                <span>visitante / visit123</span>
              </v-tooltip>
            </p>

            <!--  -->
            <!-- Cards -->
            <div class="boxes">
              <CardBox
                :action="() => changeStep(1)"
                title="Ja tenho conta"
                icon="mdi-login"
                orientation="box"
                content="Clique aqui para entrar"
              />
              <CardBox
                :action="() => changeStep(2)"
                title="Criar conta"
                icon="mdi-account-plus"
                orientation="box"
                content="Clique aqui para continuar"
              />
            </div>
          </div>
        </div>
        <!--  -->
        <!-- Register -->
        <div v-else-if="registerStarted && creatingAccount" class="register">
          <Register :cancelProcess="cancel" :sendLogin="sendLogin"/>
        </div>
        <!--  -->
        <!-- Login -->
        <div v-else>
          <Credential />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import CardBox from "@/component/widget/BoxCard.vue";
import Credential from "@/component/pages/login/Credential.vue";
import Register from "@/component/pages/login/Register.vue";
// Style
import "@/style/pages/_login.scss";

export default {
  name: "Login",
  computed: {
    creatingAccount() {
      return this.step == 1;
    },
    registerStarted() {
      return this.step > 0;
    }
  },
  components: {
    CardBox,
    Credential,
    Register
  },
  data() {
    return {
      hasAccount: false,
      step: 0,
      showToolTip: false,
    };
  },
  methods: {
    cancel(){
      this.step = 0;
    },
    changeStep(step) {
      step = step || 0;
      this.step = step;
    },
    sendLogin(){
      this.step = 2;
    }
  }
};
</script>