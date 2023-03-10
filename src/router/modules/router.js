import Home from '@/views/Home.vue';
import Produto from '@/views/Produto.vue';
import Login from '@/views/Login.vue';
import Usuario from '@/views/usuario/Usuario.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
  },
];
