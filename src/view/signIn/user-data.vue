<template>
  <div>
    <mt-header fixed title="信息填写" ></mt-header>
    <div class="userData">
      <form>
        <mt-cell title="你的学院" to="/school" is-link :value="user.schoolName" class="cell-number" ></mt-cell>
        <mt-cell title="你的院系" to="/faculty" is-link :value="user.faculty" class="cell-number"></mt-cell>
        <mt-cell title="你的专业" to="/subject" is-link :value="user.subject" class="cell-number"></mt-cell>
        <div class="weekNumber">
          <mt-cell title="当前周数" :label="'第'+user.weekNumber+'周'" class="cell-number"></mt-cell>
          <mt-range v-model="user.weekNumber" class="cell-range" :min="1" :max="20" >
            <div slot="start">1</div>
            <div slot="end">20</div>
          </mt-range>
        </div>
      </form>
      <mt-button size="large" type="primary" class="submit-btn" @click="test">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
export default{
    data(){
      return{
          user:{
              schoolName:'',
              faculty:'',
              subject:'',
              weekNumber:5
          }
      }
    },
    methods:{
        test(){
          this.$toast({
            message: '提交成功',
            iconClass: 'icon icon-success'
          });
          let userId=this.$store.getters.getUserId;
          axios.get('api/courses/curent-week/'+userId+'/'+this.user.weekNumber)
            .then((res)=>{
              this.$router.push({path:'/main'});
            })
            .catch((error)=>{

            });

        },
    },
    mounted(){
     this.user.schoolName=this.$store.getters.getSchoolName;
     this.user.faculty=this.$store.getters.getFaculty;
      this.user.subject=this.$store.getters.getSubjectName;
    }
}
</script>

<style>
.userData{
  margin-top: 150px;
}
  .submit-btn{
    margin-top: 80px;
  }
  .cell-number{
    text-align: left;
    padding-left: 20px;
  }
  .weekNumber{
    position: relative;
  }
  .cell-range{
    position: absolute;
    right: 0;
    top:2px;
    width: 248px;
  }
</style>
