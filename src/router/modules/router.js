import Home from '@/views/Home.vue';
import Produto from '@/views/Produto.vue';

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
];
