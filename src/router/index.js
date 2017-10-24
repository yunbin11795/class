import Vue from 'vue'
import Router from 'vue-router'
import Main from  '@/view/main/main'
import Register from  '@/view/register/register'
import SignIn from  '@/view/signIn/signIn'
import UserData from  '@/view/signIn/user-data'
import SchoolList from '@/view/signIn/schoolList'
import Subject  from '@/view/signIn/subjectList'
import Faculty from '@/view/signIn/Faculty'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Register
    },
    {
      path:'/main',
      component:Main,
    },
    {
      path:'/signIn',
      component:SignIn
    },
    {
      path:'/userData',
      component:UserData
    },
    {
      path:'/school',
      component:SchoolList
    },
    {
      path:'/subject',
      component:Subject
    },
    {
      path:'/faculty',
      component:Faculty
    }
  ]
})
