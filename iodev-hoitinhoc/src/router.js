import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/',
          name: 'DashBoard',
          component: () => import('@/views/Dashboard'),
          props: true
        },
        {
          path: '/cuoc-thi/:id',
          name: 'ChiTietCuocThi',
          component: () => import('@/views/ChiTietCuocThi'),
          props: true
        },
        {
          path: '/dang-ky/:id',
          name: 'DangKy',
          component: () => import('@/views/DangKyThi'),
          props: true
        }
      ],
    },
    {
      name: 'Login',
      path: '/dang-nhap',
      component: () => import('@/views/Login')
    },
    // {
    //   name: 'Home',
    //   path: '/',
    //   component: () => import('@/views/Dashboard')
    // }
  ]
})
