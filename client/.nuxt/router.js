import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54076fd7 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _3e50f859 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _1b41bf00 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _32d9f146 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _948140c0 = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _4cfad580 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _cd5fe3de = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _9a5c9134 = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _29af456d = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _78a85fb8 = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _519a1be9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _54076fd7,
    name: "address"
  }, {
    path: "/cart",
    component: _3e50f859,
    name: "cart"
  }, {
    path: "/login",
    component: _1b41bf00,
    name: "login"
  }, {
    path: "/payment",
    component: _32d9f146,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _948140c0,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _4cfad580,
    name: "profile"
  }, {
    path: "/signup",
    component: _cd5fe3de,
    name: "signup"
  }, {
    path: "/address/add",
    component: _9a5c9134,
    name: "address-add"
  }, {
    path: "/products/:id?",
    component: _29af456d,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _78a85fb8,
    name: "reviews-id"
  }, {
    path: "/",
    component: _519a1be9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
