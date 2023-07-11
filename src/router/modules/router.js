import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
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
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/username',
    component: User,
    children: [
      {
        path: '',
        name: 'user',
        component: UserProduct,
      },
      {
        path: 'shopping',
        name: 'shopping',
        component: UserBuy,
      },
      {
        path: 'sales',
        name: 'sales',
        component: UserSells,
      },
      {
        path: 'edit',
        name: 'user-edit',
        component: UserEdit,
      },
    ],
  },
];
