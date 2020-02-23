import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect() {
        return '/blank'
      }
    },
    {
      path: '/blank',
      name: 'blank',
      component: resolve => (require(["@/views/blank/index"], resolve))
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => (require(["@/views/blank/detail"], resolve))
    },
    {
      path: '/employees',
      name: 'employees',
      component: resolve => (require(["@/views/blank/employees"], resolve))
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => (require(["@/views/index/index"], resolve))
    },
    {
      path: '/fangyi',
      name: 'fangyi',
      component: resolve => (require(["@/views/user/index"], resolve)),
      meta: {
        title: '人员信息'
      }
    },
    {
      path: '/employeeInfo',
      name: 'employeeInfo',
      component: resolve => (require(["@/views/employees/index"], resolve)),
      meta: {
        title: '人员通行证信息核对'
      }
    }
  ]
});

// 全局路由守
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router