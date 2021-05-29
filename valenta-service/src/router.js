import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          path: '',
          name: 'BaoHanh',
          component: () => import('@/views/dashboard/pages/BaoHanh'),
        },
        {
          path: '/pages/quan-ly-bao-hanh',
          name: 'QuanLyPhieuBaoHanh',
          component: () => import('@/views/dashboard/pages/QuanLyPhieuBaoHanh'),
        },
        {
          path: '/pages/kich-hoat-bao-hanh/:uid',
          name: 'TaoPhieuBaoHanh',
          component: () => import('@/views/dashboard/pages/TaoPhieuBaoHanh'),
        },
        {
          name: 'Users',
          path: 'pages/users',
          component: () => import('@/views/dashboard/pages/Users'),
        },
        {
          name: 'Dashboard',
          path: 'pages/dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
      ],
    },
    // Login
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/dashboard/pages/Login'),
    },
  ],
})
