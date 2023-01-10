<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Formulario de EDICIÓN</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <form v-on:submit.prevent="guardarArticulo()">
          <v-text-field
            v-model="articulo.descripcion"
            label="Descripcion"
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="articulo.precio"
            label="Precio"
            type="number"
            prefix="$"
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="articulo.stock"
            label="Stock"
            type="number"
            outlined
            required
          >
          </v-text-field>
          <v-card-actions>
            <v-btn class="mr-4" color="warning" type="submit">Guardar</v-btn>
          </v-card-actions>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { editArticulo, getOnlyArticulo } from "@/assets/service";

export default {
  name: "editarArticulo",
  data() {
    return {
      articulo: {
        id: null,
        descripcion: "",
        precio: null,
        stock: null,
      },
    };
  },
  mounted() {
    this.articulo.id = this.$route.params.id;
    this.traerArticulo()
  },
  methods: {
    traerArticulo(){
      getOnlyArticulo(this.articulo.id).then((response) => {
        console.log(response.data);
        this.articulo=response.data;
      }).catch((error) =>{
        console.log(error);
      })
    },
    guardarArticulo() {
      editArticulo(this.articulo).then((response) => {
        console.log(response);
        this.$router.push('/articulos')
      }).then((e) =>{
        console.log(e);
      });
    },
  },
};
</script>
