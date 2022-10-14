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
        // {
        //   path: '/',
        //   name: 'TaoBaoCao',
        //   component: () => import('@/views/FormTaoBaoCao'),
        //   props: true
        // },
        {
          path: '/tao-bao-cao',
          name: 'TaoBaoCao',
          component: () => import('@/views/FormTaoBaoCao'),
          props: true
        },
        {
          path: '/bao-cao/:type',
          name: 'BaoCao',
          component: () => import('@/views/BaoCaoTongHop'),
          props: true
        },
        {
          path: '/thong-ke',
          name: 'ThongKe',
          component: () => import('@/views/ThongKe'),
          props: true
        },
        {
          path: '/bao-cao/:type/:id',
          name: 'BaoCao',
          component: () => import('@/views/ChiTietBaoCao'),
          props: true
        },
      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/Login')
    },
    // {
    //   name: 'Home',
    //   path: '/',
    //   component: () => import('@/views/Dashboard')
    // }
  ]
})
