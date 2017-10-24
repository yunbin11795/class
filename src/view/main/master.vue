<template>
  <full-calendar :events="fcEvents" locale="en"></full-calendar>
</template>


<script>
  import axios from 'axios'
  import fullCalendar from 'vue-fullcalendar'
    export default{
        data(){
            return{
              fcEvents : []
            }
        },
      components : {
        fullCalendar
      },
      mounted(){
            axios.get('/api/courses/month/1')
              .then((res)=>{
                let date=res.data.data;
                for(let i=0;i<date.length;i++){
                    let a={};
                    a.start=date[i].date_begin;
                    a.end=date[i].date_end;
                    a.title=date[i].c_name;
                    this.fcEvents.push(a);
                }
              }).catch((error)=>{

            })
      },
    }
</script>

<style>

</style>
