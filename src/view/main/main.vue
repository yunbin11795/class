<template>
  <div class="tab-main">
    <mt-navbar v-model="active" class="tab-header">
      <mt-tab-item id="tab-container1">月视图</mt-tab-item>
      <mt-tab-item id="tab-container2">周视图</mt-tab-item>
      <mt-tab-item id="tab-container3">日视图</mt-tab-item>
    </mt-navbar>
    <div class="show">
      <mt-tab-container v-model="active" >
        <mt-tab-container-item id="tab-container1">
            <master></master>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
            <week-list></week-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <today></today>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>


<script>
  import Master from './master.vue';
  import WeekList from  './weekList.vue';
  import Today from './today.vue';
  import axios from 'axios';
  export default{
     data(){
         return{
             active:'tab-container1'
         }
     },
    components:{
         Master,WeekList,Today
    }
  }
</script>

<style scoped>
  .tab-main{
    background: #fafafa;
    margin: 0 -8px;
  }
.tab-header{
  margin-bottom: 20px;
}
</style>
