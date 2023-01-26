import Vue from 'vue';
import LoadingPage from './components/LoadingPage.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('LoadingPage', LoadingPage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
