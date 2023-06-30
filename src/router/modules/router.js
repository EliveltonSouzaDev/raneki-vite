import Home from '@/views/Home.vue';
import Produto from '@/views/Produto.vue';
import Login from '@/views/Login.vue';
import User from '@/views/user/User.vue';
import UserProduct from '@/views/user/UserProduct.vue';
import UserSells from '@/views/user/UserSells.vue';
import UserBuy from '@/views/user/UserBuy.vue';
import UserEdit from '@/views/user/UserEdit.vue';

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
    component: User,
    children: [
      {
        path: '',
        name: 'usuario',
        component: UserProduct,
      },
      {
        path: 'compras',
        name: 'compras',
        component: UserBuy,
      },
      {
        path: 'vendas',
        name: 'vendas',
        component: UserSells,
      },
      {
        path: 'editar',
        name: 'usuario-editar',
        component: UserEdit,
      },
    ],
  },
];
