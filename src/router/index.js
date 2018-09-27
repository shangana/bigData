import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/Table/Index'),
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('@/view/Classify/Index'),
    },
  ],
});
