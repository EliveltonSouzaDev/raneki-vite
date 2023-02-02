// import Vue from 'vue';
// import VueRouter from 'vue-router';

// import demoRouters from './modules/demo';

// Vue.use(VueRouter);

// const routes = [...demoRouters];

// const router = new VueRouter({
//   mode: 'history',
//   base: import.meta.env.BASE_URL,
//   routes,
//   scrollBehavior() {
//     return { x: 0, y: 0 };
//   },
// });

// export default router;

import Vue from 'vue';
import Router from 'vue-router';
import demoRouters from './modules/router.js';

Vue.use(Router);

const routes = [...demoRouters];

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});
