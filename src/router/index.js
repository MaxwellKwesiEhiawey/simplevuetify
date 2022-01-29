import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/Signin.vue";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
