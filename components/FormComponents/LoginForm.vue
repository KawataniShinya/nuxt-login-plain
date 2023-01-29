<template>
  <v-form>
    <v-card width="400px" class="mx-auto">
      <!-- タイトル -->
      <v-card-title class="headline">ログイン</v-card-title>

      <!-- 入力欄 -->
      <v-card-text>
        <EmailField :email.sync="email" />
        <PasswordField :password.sync="password" />

        <v-alert v-if="loginFailed" type="error"
          >ログインに失敗しました</v-alert
        >
        <v-alert v-if="loginSuccess" type="success">ログインしました</v-alert>
      </v-card-text>

      <!-- アクションボタン -->
      <v-card-actions>
        <v-btn @click="submit">ログイン</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import EmailField from "~/components/TextFieldComponents/EmailField.vue";
import PasswordField from "~/components/TextFieldComponents/PasswordField.vue";
import { authenticate } from "~/store/store";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginFailed: false,
      loginSuccess: false,
    };
  },
  components: { EmailField, PasswordField },
  methods: {
    submit() {
      let email = this.email;
      let password = this.password;
      if (authenticate({email, password})) {
        this.loginSuccess = true;
        this.loginFailed = false;
      } else {
        this.loginFailed = true;
        this.loginSuccess = false;
      }
    },
  },
};
</script>
