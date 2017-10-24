<template>
  <div>
    <mt-header title="第几周"></mt-header>
    <div class="week-line" id="list-header">
      <div class="week-day"></div>
      <div class="show-content">
        <div  class="morning">上午</div>
        <div  class="noon" >下午</div>
        <div class="night">晚上</div>
      </div>
    </div>
    <div class="week-show">
      <div class="week-line" v-for="user in week">
        <div class="week-day">星期{{user.c_id}}</div>
        <div class="show-content">
          <div class="morning" >
            <div v-if="user.section_begin<=4" >{{user.c_name}}</div>
          </div>
          <div class="noon" >
            <div v-if="user.section_begin>4&&user.section_begin<=8">{{user.c_name}}</div>
          </div>
          <div class="night" >
            <div v-if="user.section_begin>8"> {{user.c_name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import axios from 'axios';
export default{
    data(){
        return{
            week:[

            ]
        }
    },
    mounted(){
        let userId=this.$store.getters.getUserId;
        axios.get('/api/courses/week/'+userId)
          .then((res)=>{
            this.week=res.data.data;
          }).catch((error)=>{

        })
    }
}

</script>

<style>
.week-line{
  display: flex;
  border: 1px solid #000;
  height: 100px;
}
  .week-day{
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #000;
  }
  .show-content{
    display: flex;
    width: 100%;
  }
  .morning,.noon{
    border-right: 1px solid #000;
  }
  .morning,.noon,.night{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #list-header{
    height: 50px;
  }
</style>
