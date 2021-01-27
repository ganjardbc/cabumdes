import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// auth
import Login from '@/components/web/auth/Login'
import Register from '@/components/web/auth/Register'

// admin
import Admin from '@/components/admin/Index'
import AdminShops from '@/components/admin/shops/Index'
import AdminOrders from '@/components/admin/orders/Index'
import AdminMenus from '@/components/admin/menus/Index'
import AdminCashier from '@/components/admin/cashier/Index'
import AdminEmployees from '@/components/admin/employees/Index'


Vue.use(Router)

export default new Router({
  routes: [
    // web
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },

    // admin
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin-shops',
      name: 'AdminShops',
      component: AdminShops
    },
    {
      path: '/admin-order',
      name: 'AdminOrders',
      component: AdminOrders
    },
    {
      path: '/admin-menus',
      name: 'AdminMenus',
      component: AdminMenus
    },
    {
      path: '/admin-cashier',
      name: 'AdminCashier',
      component: AdminCashier
    },
    {
      path: '/admin-employees',
      name: 'AdminEmployees',
      component: AdminEmployees
    },
  ]
})
