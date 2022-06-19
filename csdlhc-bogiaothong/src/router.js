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
          path: '/don-vi',
          name: 'DonVi',
          component: () => import('@/views/DanhSachDonVi'),
          props: true
        },
        {
          path: '/don-vi/:id',
          name: 'EditDonVi',
          component: () => import('@/views/EditDonVi'),
          props: true
        },
        {
          path: '/thong-tin-don-vi/:id',
          name: 'ThongTinDonVi',
          component: () => import('@/views/ChiTietDonVi'),
          props: true
        },
        {
          path: '/can-bo',
          name: 'CanBo',
          component: () => import('@/views/DanhSachCanBo'),
          props: true
        },
        {
          path: '/danh-muc',
          name: 'DanhMuc',
          component: () => import('@/views/DanhMuc'),
          props: true
        },
        {
          path: '/ca-nhan',
          name: 'CongDan',
          component: () => import('@/views/DanhSachCongDan'),
          props: true
        },
        {
          path: '/doanh-nghiep',
          name: 'DoanhNghiep',
          component: () => import('@/views/DanhSachDoanhNghiep'),
          props: true
        },
        {
          path: '/thong-tin-ca-nhan/:id',
          name: 'ChiTietCongDan',
          component: () => import('@/views/ChiTietCongDan'),
          props: true
        },
        {
          path: '/thong-tin-doanh-nghiep/:id',
          name: 'ChiTietDoanhNghiep',
          component: () => import('@/views/ChiTietDoanhNghiep'),
          props: true
        },
        {
          path: '/ca-nhan/:id',
          name: 'ChinhSuaCongDan',
          component: () => import('@/views/EditCongDan'),
          props: true
        },
        {
          path: '/doanh-nghiep/:id',
          name: 'ChinhSuaDoanhNghiep',
          component: () => import('@/views/EditDoanhNghiep'),
          props: true
        },
        {
          name: 'KichHoatTaiKhoan',
          path: '/kich-hoat-tai-khoan',
          component: () => import('@/views/KichHoatTaiKhoan')
        },
        {
          name: 'QuanTri',
          path: '/quan-tri',
          component: () => import('@/views/QuanTri')
        },
        {
          path: '/tai-khoan',
          name: 'TaiKhoan',
          component: () => import('@/views/DanhSachTaiKhoan'),
          props: true
        },
      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/Login')
    }
  ]
})
