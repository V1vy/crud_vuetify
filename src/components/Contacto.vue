<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="d-flex justify-center">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          max-width="200"
          max-height="250"
        ></v-img>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Contacto
        </h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <v-btn  href="https://www.facebook.com" target="_blank" class="mx-10" fab dark large color="indigo darken-2">
          <v-icon dark>mdi-facebook</v-icon>
        </v-btn>
        <v-btn  href="https://www.twitter.com" target="_blank" class="mx-10" fab dark large color="indigo darken-1">
          <v-icon dark>mdi-twitter</v-icon>
        </v-btn>
        <v-btn  href="https://www.instagram.com" target="_blank" class="mx-10" fab dark large color="pink accent-3">
          <v-icon dark>mdi-instagram</v-icon>
        </v-btn>
        
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name:'contactoA',
  
}
</script>