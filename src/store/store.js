/**
 * Created by yubin on 2017/10/17.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);


export  default new Vuex.Store({
  state:{
    schoolName:'广东科学技术职业学院',
    faculty:'计算机工程技术学院',
    subjectName:'软件技术',
    id:1,
    subjectId:1,
    token:'',
    userId:1
  },
  getters:{
    getSchoolName(state){
      return state.schoolName;
    },
    getFaculty(state){
      return state.faculty;
    },
    getSubjectName(state){
      return state.subjectName;
    },
    getId(state){
      return state.id;
    },
    getSubjectId(state){
      return state.subjectId;
    },
    getToken(state){
      return state.token;
    },
    getUserId(state){
      return state.userId;
    }
  },
  mutations:{
    setSchoolName(state,value){
        state.schoolName=value;
    },
    setFaculty(state,value){
        state.faculty=value;
    },
    setSubjectName(state,value){
        state.subjectName=value;
    },
    setUserId(state,value){
      state.id=value;
    },
    setSubjectId(state,value){
      state.subjectId=value;
    },
    setToken(state,value){
      state.token=value;
    }
  },
  actions:{
    setFirst(state,{value,that}){
      axios.get('/api/users/user-profile',{
        headers:{Authorization:'Bearer '+value}
      }).then((res)=>{
        if(res.data.data[0]){
          state.userId=res.data.data[0].id;
          if(res.data.data[0].ma_id){
            that.$router.push({path:'/main'})
          }else {
            that.$router.push({path:'/userData'})
          }
        }else{
          that.$router.push({path:'/userData'});
        }

      }).catch((error)=>{

      })
    }
  }
})
