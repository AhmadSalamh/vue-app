import Vue from "vue";
import VueRouter from "vue-router";
import REquest from "../views/Requset.vue";
import InquireAbout from "../views/InquireAbout.vue";
import Address from "../views/Address.vue";
import Confirme from "../views/Confirme.vue";
import Receipt from  '../views/Receipt.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "requset",
    component: REquest,
  },
  {
    path: "/InquireAbout",
    name: "inquireabout",
    component: InquireAbout,
  },
  {
    path: "/address",
    name: "address",
    component: Address,
  },
  {
    path: "/confirme",
    name: "address",
    component: Confirme,
  },
  {
    path: "/receipt",
    name: "receipt",
    component: Receipt,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
