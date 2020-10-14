import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    //重定向
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/index',
    name: "index",
    component: () => import('@/page/index/index.vue'),
    meta: {
      title: '主页'
    },
    children: [{
        path: '/home',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '系统首页'
        }
      },
      /* 小功能 */
      {
        path: '/qrcode',
        name: 'Qrcode',
        component: () => import('@/views/miniFunction/QrCode/index.vue'),
        meta: {
          title: '二维码'
        }
      },
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/miniFunction/demo/index.vue'),
        meta: {
          title: 'demo'
        }
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: () => import('@/views/miniFunction/demo/demo2.vue'),
        meta: {
          title: 'demo2'
        }
      },
      {
        path: '/randomData',
        name: 'randomData',
        component: () => import('@/views/miniFunction/randomData/index.vue'),
        meta: {
          title: 'randomData'
        }
      },
      /* 传值 */
      {
        path: '/father',
        name: 'father',
        component: () => import('@/views/byValue/father.vue'),
        meta: {
          title: 'father'
        }
      },
      {
        path: '/brother1',
        name: 'brother1',
        component: () => import('@/views/byValue/brother1.vue'),
        meta: {
          title: 'brother1'
        }
      },
      {
        path: '/brother2',
        name: 'brother2',
        component: () => import('@/views/byValue/brother2.vue'),
        meta: {
          title: 'brother2'
        }
      },
      /* 人员管理 */
      {
        path: '/addPerson',
        name: 'addPerson',
        component: () => import('@/views/personManager/addPerson/index.vue'),
        meta: {
          title: 'addPerson'
        }
      },
      {
        path: '/organManage',
        name: 'organManage',
        component: () => import('@/views/personManager/organManage/index.vue'),
        meta: {
          title: 'organManage'
        }
      },
      {
        path: '/camera',
        name: 'camera',
        component: () => import('@/views/personManager/addPerson/ca.vue'),
        meta: {
          title: 'camera'
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router