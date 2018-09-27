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
    {
      path: '/domino',
      name: 'domino',
      component: () => import('@/view/Domino/Index'),
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('@/view/Page/Index'),
    },
    {
      path: '/district',
      name: 'district',
      component: () => import('@/view/District/Index'),
    },
  ],
});
