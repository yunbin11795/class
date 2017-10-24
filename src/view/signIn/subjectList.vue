<template>
  <div  class="box">
    <mt-header fixed title="选择专业">
      <router-link to="/userData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div  class="box-show" @click="choose">
      <div class="cell" v-for="user in subject">{{user.m_name}}</div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        subject:[

        ],
      }
    },
    methods:{
      choose(e){
        this.$store.commit('setSubjectName',e.target.innerHTML);
        this.$router.push({path:'/userData'})
      }
    },
    mounted(){
      let id=this.$store.getters.getSubjectId;
      axios.get('/api/majors/get-major/'+id)
        .then((res)=>{
          this.subject=res.data.data;
        }).catch((error)=>{

      })
    }
  }

</script>

<style>
  @import "line.css";
</style>
