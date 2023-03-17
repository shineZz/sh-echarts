<template>
  <view class="echarts-page">
    <view class="pie-chart">
      <e-canvas ref="ecCanvasRef" canvas-id="pieCanvas" :ec="ec"></e-canvas>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { onMounted, ref, defineProps, defineExpose } from 'vue'
import ECanvas from '@/components/ec-canvas/index.vue'
import * as echarts from '@/components/ec-canvas/echarts'
interface Ititle {
  text?: string
  subtext?: string
  left?: 'center' | 'left' | 'right'
}
interface Itooltip {
  trigger?: string
  formatter?: string
  axisPointer?: {
    type: 'shadow'
  }
}
interface Ilegend {
  orient?: string
  left?: 'center' | 'left' | 'right'
  data: any[]
}

interface Ioptions {
  title: Ititle
  tooltip?: Itooltip
  legend: Ilegend
  series: any[]
  xAxis?: any[]
  yAxis?: any[]
  toolbox?: any
}
let chart
const props = defineProps<{ options: Ioptions }>()
const ecCanvasRef = ref()

const initChart = (canvas, width, height, dpr) => {
  chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr,
  })
  canvas.setChart(chart)
  refresh()
  return chart
}

const ec: {
  lazyLoad?: boolean
  onInit: (canvas, width, height, dpr) => void
} = {
  // lazyLoad: true,
  onInit: initChart,
}

const refresh = () => {
  chart?.setOption(props.option)
}

const init = () => {
  ecCanvasRef.value.init((canvas, width, height, dpr) => {
    chart = echarts.init(canvas, null, {
      width,
      height,
      devicePixelRatio: dpr,
    })
    canvas.setChart(chart)
    refresh()
    return chart
  })
}
function setOption(data) {
  if (!chart)
    return console.error('echart 实例化还未完成，可参考使用说明：https://github.com/beezen/echarts4taro3#基础用法')
  chart.setOption(data)
}
onMounted(() => {
  setTimeout(() => {
    ec.lazyLoad && init()
  }, 300)
})
// 对外暴露属性
defineExpose({
  setOption,
  refresh,
})
</script>
<style lang="less">
.pie-chart {
  width: 100%;
  height: 100vh;
}
</style>
