<template>
  <div  class="box">
    <mt-header fixed title="选择院系">
      <router-link to="/userData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div  class="box-show" @click="choose">
      <div class="cell" v-for="user in faculty" :data-id="user.a_id">{{user.a_name}}</div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        faculty:[

        ],
      }
    },
    methods:{
      choose(e){
        this.$store.commit('setFaculty',e.target.innerHTML);
        this.$store.commit('setSubjectId',e.target.getAttribute('data-id'));
        this.$router.push({path:'/userData'});
      }
    },
    mounted(){
      let id=this.$store.getters.getId;
      axios.get('/api/academies/get-acadamy/'+id)
        .then((res)=>{
          this.faculty=res.data.data;
        }).catch((error)=>{

      })
    }
  }

</script>

<style>
  @import "line.css";

</style>
