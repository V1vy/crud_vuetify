<template>
  <v-container class="text-center">
    <v-row >
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          max-width="200"
          max-height="250"
        ></v-img>
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">App SPA</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-5 font-weight-bold mb-3">Vue.Js + Vuetify</h1>
        <h1 class="display-5 font-weight-bold mb-3">CLI y ROUTER</h1>
        <h1 class="display-5 font-weight-bold mb-3">API Rest</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "inicioA",
};
</script>
<style scoped></style>
