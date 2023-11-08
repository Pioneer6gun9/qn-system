import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import Signup from '@/views/Signup/Signup'
import Forgetpassword from '@/views/Forgetpassword/Forgetpassword'
import Home from '@/views/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login', // 添加重定向
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup', // 注册
      name: 'Signup',
      component: Signup
    },
    {
      path: '/forgetpassword', // 忘记密码
      name: 'Forgetpassword',
      component: Forgetpassword
    },
    {
      path: '/home', // 首页
      name: 'Home',
      component: Home
    }
  ]
})
