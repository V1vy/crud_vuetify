<template>
  <v-app>
    <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>

      <v-app-bar color="deep-purple accent-4 " dark prominent height="60">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <!-- <v-toolbar-title>My files</v-toolbar-title> -->
        <!-- <v-toolbar-title>
          <v-list-item :to="{ path: '/' }">
            <v-img
              alt="Vuetify-logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="30"
              :to="{ path: '/' }"
            ></v-img>
          </v-list-item>
        </v-toolbar-title> -->
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item :to="{ path: '/' }">
              <v-list-item-action>
                <v-icon>mdi-{{ icons[0] }}</v-icon>
              </v-list-item-action>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ path: '/articulos' }">
              <v-list-item-action>
                <v-icon>mdi-{{ icons[1] }}</v-icon>
              </v-list-item-action>
              <v-list-item-title>Artículos</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ path: '/contacto' }">
              <v-list-item-action>
                <v-icon>mdi-{{ icons[2] }}</v-icon>
              </v-list-item-action>
              <v-list-item-title>Contacto</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
      <router-view />
      
    </v-main>
    </v-card>

    
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      icons: ["home", "shopping", "email"],
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
