<template>
  <div class="register">
    <mt-header fixed title="用户登录" ></mt-header>
    <form class="register-form">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="user.username" type="tel"></mt-field>
      <mt-field label="密码" placeholder="请输入最少6位密码" type="password" v-model="user.password"></mt-field>
    </form>
    <mt-button size="large" type="primary" class="register-btn" @click="judgeName">登录</mt-button>
    <div class="signIn">
      <label class="zhuce"><router-link to="/signIn" >注册帐号</router-link></label>
      <label><router-link to="">忘记密码</router-link></label>
    </div>
  </div>
</template>


<script>
  import axios from  'axios';
  export default{
      data(){
        return {
          user:{
              username:'',
              password:''
          }
        }
      },
    methods:{
        judgeName(){
            let that=this;
            if(this.user.username==='' || this.user.password===''){
              this.$toast({
                message: '请输入账号密码',
                duration: 1000
              });
            } else{
                if(this.verify(this.user.username)){
                  this.$toast({
                    message: '用户名不要用符号!',
                    duration: 1000
                  });
                  return ;
                }
              axios.post('/api/users/login',this.user)
                .then(function (response) {
                    console.log(response.data.data);
                  that.$store.commit('setToken',response.data.data);
                  that.$store.dispatch('setFirst', {
                      value:response.data.data,
                      that:that
                    });
                }).catch(function(error) {
                that.$toast({
                  message: '账号或密码错误!',
                  duration: 1000
                });
              });
            }
        },
        verify(obj){
          let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
          return pattern.test(obj);
        }
    }
  }
</script>

<style >
.register-form{
  margin-top: 150px;
}
 .register-btn{
  margin-top: 100px;
  }
  .signIn{
    margin-top:50px;
  }
  .signIn .zhuce:first-child:after{
    content: '/';
    display: inline-block;
    margin: 0 15px;
  }
</style>
