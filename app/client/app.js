import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './components/App';

import router from './router';
import store from './store';
sync(store, router);

Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store };