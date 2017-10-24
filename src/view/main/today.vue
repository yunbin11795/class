<template>
  <div class="today">
    <mt-header :title="date"></mt-header>
    <div>
      <div v-for="user in classData" class="day-line">
        <div class="list-name" v-if="user">{{user.c_name}}</div>
        <div class="line-style" v-if="user">
          <div>时间: {{user.time_begin}}-{{user.time_end}}</div>
          <div>老师: {{user.teacher_name}}</div>
          <div>教室: {{user.room_name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default{
    data(){
        return {
            date:'',
            classData:[]
        }
    },
    mounted(){
        this.date=this.getToday();
        let userId=this.$store.getters.getUserId;
        axios.get('/api/courses/curent/'+userId)
          .then((res)=>{
            this.classData=res.data.data;
          }).catch((error)=>{

        })
    },
    methods:{
        getToday(){
            let date=new Date();
            return date.getFullYear()+'-'+parseInt(date.getMonth()+1)+'-'+date.getDate();
        }
    }
}

</script>

<style>
.day-line{
  display: flex;
  border-bottom: 1px solid #000;
}
.list-name{
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #000;
}
.line-style{
  margin: 5px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
}
</style>
