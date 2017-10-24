<template>
  <div class="signIn">
    <mt-header fixed title="用户注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <form class="signIn-main">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="user.username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"  v-model="user.password"></mt-field>
      <mt-field label="再次输入" placeholder="请输入再次密码" type="password"  v-model="secondPassword"></mt-field>
    </form>
    <mt-button type="primary" size="large" class="singIn-btn" @click="submit">注册</mt-button>
  </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
          user:{
            username:'',
            password:'',
          },
          secondPassword:''
        }
    },
   methods:{
        submit(){

          let that=this;

          if(this.user.username==='' || this.user.password===''){
            this.$toast({
              message: '请输入账号密码',
              duration: 1000
            });
            return;
          } else if(this.user.password!==this.secondPassword) {
            this.$toast({
              message: '密码不一致',
              duration: 1000
            });
            return;
          } else if(this.verify(this.user.username)){
              this.$toast({
                message: '用户名不要用符号!',
                duration: 1000
              });
            return;
            }
          axios.post('/api/users/signup',this.user)
            .then(function (response) {
              console.log(response);
              that.$router.push({path:'/'})
            }).catch(function(error) {
                if(error){
                  that.$toast({
                    message: '账号已存在或密码小于6位',
                    duration: 1000
                  });
                }
          });

        },
         verify(obj){
           let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
           return pattern.test(obj);
         }
   }
}
</script>

<style>
.signIn-main{
  margin-top: 150px;
}
  .singIn-btn{
    margin-top: 150px;
  }
</style>
