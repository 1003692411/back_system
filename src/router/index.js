import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Welcome from '../components/welcome.vue'
import College from '../components/college.vue'
import Major from '../components/major.vue'
import Part from '../components/part.vue'
import Form from '../components/form.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/index', component: Index, redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/college', component: College },
        { path: '/major', component: Major },
        { path: '/part', component: Part },
        { path: '/form', component: Form }
      ]
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  if (to.path === '/login') { return next() }
  // 如果跳过登录页面，获取是否有保存数据cookie
  const cookie = window.sessionStorage.getItem('cookie')
  if (!cookie) {
    return next('/login')
  }
  next();
  // from从哪来
  // next是放行 next()放行，next('路径')强制跳转
})

export default router
