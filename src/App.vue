<template>
  <div class="box" >
    <div class="box-left">
      <Card></Card>
      <Pie></Pie>
      <Line></Line>
    </div>
    <div id="china" class="box-center">
    </div>
    <div class="box-right">
      <Details></Details>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Card from './components/Card.vue'
import Details from './components/Details.vue'
import Pie from './components/Pie.vue'
import Line from './components/Line.vue'
import { useStore } from './stores'
import { onMounted } from 'vue';
import * as echarts from 'echarts'
import './assets/china'
import { geoCoordMap } from './assets/geoMap';
import 'animate.css'
const store = useStore()
const initCharts = () => {
  const city = store.list.diseaseh5Shelf.areaTree[0].children;
  store.item = city[3].children
  const data = city.map(({ name, total, children }) => {
    return {
      name,
      value: geoCoordMap[name].concat(total.nowConfirm),
      children
    }
  })
  const charts = echarts.init(document.querySelector('#china')!)

  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        // normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },

      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            // normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            // },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        // selectedMode: "multiple", 多选
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 16,
        },
        itemStyle: {
          // normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
          // },

        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        name: 'Top 5',
        type: 'scatter',
        coordinateSystem: 'geo',
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          // normal: {
          show: true,
          color: '#fff',
          formatter(value: any) {
            return value.data.value[2]
          }
          // }
        },
        itemStyle: {
          // normal: {
          color: 'red', //标志颜色
          // }
        },
        data: data,
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        emphasis: { scale: true },
        zlevel: 1
      },
    ],
  })
  charts.on('click', (e: any) => {
    store.item = e.data.children
  })
}
const initPie = () => {
  const pie = echarts.init(document.querySelector('.pie')!)
  pie.setOption({
    backgroundColor: '#223651',
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: '昨日新增',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 4,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '10',
            fontWeight: 'bold'
          }
        },
        data: store.cityDetail.map(({ city, local_confirm_add }) => {
          return {
            name: city,
            value: local_confirm_add
          }
        })
      }
    ]
  })
}
const initLine = () => {
  const line = echarts.init(document.querySelector('.line')!)
  line.setOption({
    backgroundColor: '#223651',
    tooltip: {
        trigger:'axis'
    },
    xAxis: {
      type: 'category',
      data: store.cityDetail.map(({ city }) => city).slice(0,5),
      axisLine:{
        lineStyle:{
          color:'#fff'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          color:'#fff'
        }
      }
    },
    label: {
      show: true
    },
    series: [
      {
        name:'高风险地区',
        data: store.cityDetail.map(({ highRiskAreaNum }) => highRiskAreaNum).slice(0,5),
        type: 'line',
        smooth: true
      }
    ]
  })
}
onMounted(async () => {
  await store.getList()
  initCharts()
  initPie()
  initLine()
})
</script>

<style lang='scss'>
@import './assets/init.css';

.box {
  height: 100%;
  display: flex;
  background-color: black;
  background-image: url('./assets/bg.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  &-left {
    width: 300px;
    color: white;
    margin-top: 10px;
  }

  &-center {
    flex: 1;
  }

  &-right {
    margin-top: 10px;

    width: 330px;
    color: white;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>