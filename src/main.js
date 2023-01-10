import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router'

// Importamos lo socmponentes qu evamos a usar 
import inicioA from './components/Inicio';
import listarArticulos from './components/ListarArticulos';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';
import contactoA from './components/Contacto';

Vue.config.productionTip = false

// Creamos nuestros componentes 
Vue.component('inicioA', inicioA)
Vue.component('listarArticulos', listarArticulos)
Vue.component('crearArticulo', crearArticulo)
Vue.component('editarArticulo', editarArticulo)
Vue.component('contactoA', contactoA)

// Uso de vue-router
Vue.use(VueRouter);

// Definir las rutas
const routes=[
  {path:'/',component:inicioA},
  {path:'/inicio',component:inicioA},
  {path:'/contacto',component:contactoA},
  {path:'/articulos',component:listarArticulos},
  {path:'/crear',component:crearArticulo, name:'crearArticulo'},
  {path:'/editar/:id',component:editarArticulo, name:'editarArticulo'}
]

// Creamos el objeto router para usarlo
const router = new VueRouter({
  routes,
  mode:'history' //quita el # de las rutas
})

new Vue({
  vuetify,
  router, //agregar router a la instancia de vue
  render: h => h(App)
}).$mount('#app')
