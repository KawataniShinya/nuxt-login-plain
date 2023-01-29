<template>
  <LoginForm class="mx-auto" />
</template>

<script>
import LoginForm from "~/components/FormComponents/LoginForm.vue";
import store from "~/store/store";
export default {
  components: { LoginForm },
  store
};
</script>
