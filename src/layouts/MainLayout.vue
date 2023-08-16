<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          icon="arrow_back"
          flat
          dense
          label="Back"
          @click="navigateBack"
        />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        <q-btn
          to="/auth"
          class="absolute-right q-pr-sm"
          icon="account_circle"
          flat
          dense
          label="login"
        />
        <!-- this property to be used in above one => no-caps -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// Composition API variant
import { useRouter } from "vue-router";
import { openURL } from "quasar";

export default {
  computed: {
    title() {
      console.log(this.$route);
      let currentPath = this.$route.fullPath;
      if (currentPath === "/") return "Chat App";
      else if (currentPath === "/chat") return "Chat";
      else if (currentPath === "/auth") return "Login";
      else return "Unknown Page"; // Default return value
    },
  },
  methods: {
    openURL,
  },
  //name: "YourComponentName", // Replace with your component name
  setup() {
    const $router = useRouter();

    const navigateBack = () => {
      // go back by one record, the same as $router.back()
      $router.go(-1);
    };

    return {
      navigateBack,
    };
  },
};
</script>
