import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _150a7738 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _ac3bf7ba = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _65f1435e = () => interopDefault(import('..\\pages\\owner.vue' /* webpackChunkName: "pages/owner" */))
const _b923f24c = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _c8d17a4e = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _699a2781 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _34c251fd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _150a7738,
    name: "about"
  }, {
    path: "/category",
    component: _ac3bf7ba,
    name: "category"
  }, {
    path: "/owner",
    component: _65f1435e,
    name: "owner"
  }, {
    path: "/product",
    component: _b923f24c,
    name: "product"
  }, {
    path: "/products",
    component: _c8d17a4e,
    name: "products"
  }, {
    path: "/products/:id",
    component: _699a2781,
    name: "products-id"
  }, {
    path: "/",
    component: _34c251fd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
