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
