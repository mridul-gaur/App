<template>
  <q-form @submit="submitForm">
    <q-input
      v-model="formData.name"
      v-if="tab == 'register'"
      class="q-mb-md"
      outlined
      label="Name"
    />
    <q-input
      v-model="formData.email"
      class="q-mb-md"
      outlined
      label="Email"
      type="email"
    />
    <q-input
      v-model="formData.password"
      class="q-mb-md"
      outlined
      label="Password"
      type="password"
    />
    <div class="row">
      <q-space />
      <q-btn color="primary" type="submit" :label="tab" />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("store", ["registerUser", "loginUser"]),
    submitForm() {
      if (this.tab == "login") {
        this.loginUser(this.formData);
      } else {
        this.registerUser(this.formData);
      }
    },
  },
};
</script>
