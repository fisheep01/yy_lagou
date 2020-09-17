import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51ddbd9a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _3de1934f = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _7e891ef9 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4c37d58e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _1842bada = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _460ee3dd = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _7ea34ef4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _51ddbd9a,
    children: [{
      path: "",
      component: _3de1934f,
      name: "home"
    }, {
      path: "/login",
      component: _7e891ef9,
      name: "login"
    }, {
      path: "/register",
      component: _7e891ef9,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4c37d58e,
      name: "profile"
    }, {
      path: "/settings",
      component: _1842bada,
      name: "settings"
    }, {
      path: "/editor",
      component: _460ee3dd,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _7ea34ef4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
