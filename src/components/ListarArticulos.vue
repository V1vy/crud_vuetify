<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">Listado de Artículos</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-1">
        <v-btn
          :to="{ name: 'crearArticulo' }"
          class="mx-2"
          fab
          dark
          color="indigo"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3 mb-15">
          <template v-slot:default >
            <thead>
              <tr>
                <th class="text-center">ID</th>
                <th class="text-center">Descripción</th>
                <th class="text-center">Precio</th>
                <th class="text-center">Stock</th>
                <th class="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="articulo in articulos" :key="articulo.id" >
                <td>{{ articulo.id }}</td>
                <td>{{ articulo.descripcion }}</td>
                <td>{{ articulo.precio }}</td>
                <td>{{ articulo.stock }}</td>
                <td>
                  <v-btn fab small color="primary" :to="{ name: 'editarArticulo' , params:{id:articulo.id}}">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn fab small color="error" @click.stop="dialog= true" @click="id=articulo.id">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <!-- Ventana de dialogo para eliminar  -->
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">Cancelar</v-btn>
          <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" color="success" :timeout=2500>{{ textsnack }}
      <template v-slot:action="{attrs}">
        <v-btn text v-bind="attrs" @click="snackbar =false">Cerrar</v-btn>
      </template>
    </v-snackbar>

  </v-container>
</template>

<script>
import { getArticulos, deleteArticulo } from "@/assets/service";

export default {
  name: "listarArticulos",
  data() {
    return {
      dialog:false,
      snackbar:false,
      id:null,
      textsnack:'',
      articulos:[]
    }
  },
  mounted() {
    this.traerArticulos();
  },
  methods: {
    traerArticulos(){
      getArticulos().then((response) => {
        console.log(response.data);
        this.articulos=response.data;
      }).catch((error) =>{
        console.log(error);
      })
    },
      confirmarBorrado(id){
        deleteArticulo(id)
              .then((response) => {
                console.log(response);
                this.traerArticulos();
                this.dialog=false;
                this.snack(true, '¡Registro eliminado!');
              })
              .catch((e) => {
                console.log(e);
              });
      },
      snack(estado, text){
      this.snackbar= estado,
      this.textsnack= text
    }
    }
};
</script>


