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
        component: () => import('@/views/miniFn/QrCode/index.vue'),
        meta: {
          title: '二维码'
        }
      },
      {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/miniFn/demo/index.vue'),
        meta: {
          title: 'demo'
        }
      },
      {
        path: '/randomData',
        name: 'randomData',
        component: () => import('@/views/miniFn/randomData/index.vue'),
        meta: {
          title: 'randomData'
        }
      },
      {
        path: '/remoteSearch',
        name: 'remoteSearch',
        component: () => import('@/views/miniFn/remoteSearch/remoteSearch.vue'),
        meta: {
          title: 'remoteSearch'
        }
      },
      /* 组件传值 */
      {
        path: '/father',
        name: 'father',
        component: () => import('@/views/byValue/father.vue'),
        meta: {
          title: 'father'
        }
      },
      /* 人员管理 */
      {
        path: '/personnel/add',
        name: 'add',
        component: () => import('@/views/personnel/add/index.vue'),
        meta: {
          title: 'add'
        }
      },
      {
        path: '/organization',
        name: 'organization',
        component: () => import('@/views/personnel/organization'),
        meta: {
          title: 'organization'
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