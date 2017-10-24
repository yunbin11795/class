<template>
  <div class="box">
    <mt-header fixed title="选择学校">
      <router-link to="/userData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="box-show"  @click="choose">
      <div class="cell" :data-id="user.s_id" v-for="user in school">{{user.s_name}}</div>
    </div>
  </div>
</template>


<script>
import axios from'axios'
export default{
    data(){
        return{
            school:[],
        }
    },
    methods:{
        choose(e){
            this.$store.commit('setSchoolName',e.target.innerHTML);
            this.$store.commit('setUserId',e.target.getAttribute('data-id'));
            this.$router.push({path:'/userData'})
        }
    },
    mounted(){
        axios.get('/api/schools')
          .then((res)=> {
              this.school=res.data.data;
          }).catch((error)=>{

        })
    }
}

</script>

<style>
@import "line.css";
</style>
