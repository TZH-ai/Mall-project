<template>
   <div class="box">
     <div class="top">
       <p class="title">实时游客统计</p>
       <p class="bg"></p>
       <p class="right">
         可预约总量
         <span>99999</span>
         人
       </p>
     </div>
     <div class="number">
       <span v-for="(item, index) in people" :key="index">{{ item }}</span>
     </div>
     <!-- 盒子将来echarts展示图形图标的节点 -->
     <div class="charts" ref="charts">123</div>
   </div>
 </template>
    
<script setup lang='ts'>
    import * as echarts from 'echarts';
    import {ref,onMounted} from 'vue';
    import 'echarts-liquidfill'
    let charts=ref();
   
    onMounted(() => {
      let mycharts=echarts.init(charts.value);
      mycharts.setOption({
        title:{
          text:"水球图"
        },
        xAxis:{},
        yAxis:{},
        grid:{
          top:0,
          bottom:0,
          left:0,
          right:0
        },
        series:[
        {
          type:'liquidFill',
          data:[0.6,0.4,0.2],
          radius:'100%'
        },

        ]
      })
    })
</script>
    
<style scoped lang="scss">
.box {
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;

  .top {
    margin-left: 20px;

    .title {
      color: white;
      font-size: 20px;
    }

    .bg {
      width: 68px;
      height: 7px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    }

    .right {
      float: right;
      color: white;
      font-size: 20px;

      span {
        color: #ccc;
      }
    }
  }

  .number {
    padding: 10px;
    margin-top: 30px;
    display: flex;

    span {
      flex: 1;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: url(../../images/total.png) no-repeat;
      background-size: 100% 100%;
      color: #29fcff;
    }
  }

  .charts {
    width: 100%;
    height: 270px;
  }
}
</style>