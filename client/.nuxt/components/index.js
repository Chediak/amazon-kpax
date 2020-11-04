export { default as FeaturedProduct } from '../..\\components\\FeaturedProduct.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Search } from '../..\\components\\Search.vue'

export const LazyFeaturedProduct = import('../..\\components\\FeaturedProduct.vue' /* webpackChunkName: "components_FeaturedProduct" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
export const LazySearch = import('../..\\components\\Search.vue' /* webpackChunkName: "components_Search" */).then(c => c.default || c)
