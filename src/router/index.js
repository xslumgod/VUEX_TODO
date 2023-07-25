import Vue from 'vue';
import VueRouter from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HelloWorldRoute',
    component: HelloWorld, // Use the imported component
  },
];

const router = new VueRouter({
  routes,
});

export default router;