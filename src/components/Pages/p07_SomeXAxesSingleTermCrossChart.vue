<template lang="pug">
  div#chart_container
    div#chart
    div#controller
</template>

<script>
import * as echarts from 'echarts'
import color from '../../utils/color.js'

export default {
  mounted() {
    this.init()
  },
  data() {
    return {
      chart_: null,
      option: {
        title: {
          // text: 'hoge'
        },
        tooltip: {},
        legend: {
          type: 'scroll',
          orient: 'vertical',
          // align: 'right'
          right: 0,
          top: 20,
          bottom: 20
          // borderColor: '#000',
          // borderWidth: 2
        },
        // NOTE: xAxis, yAxis を付けるとX/Y軸のための線が出てくる
        xAxis: {
          type: 'category'
        },
        yAxis: {
          min: 0,
          max: 100
        },
        series: [
          {
            name: '3日以内',
            type: 'bar',
            // NOTE: ↓ "スタック名" という概念？
            stack: '地域'
          },
          {
            name: '4~6日間',
            type: 'bar',
            stack: '地域'
          },
          {
            name: '7~13日間',
            type: 'bar',
            stack: '地域'
          }
        ],
        dataset: {
          source: [
            ['地域', '3日以内', '4~6日間', '7~13日間'],
            ['地域指定なし', 20, 40, 40],
            ['埼玉県', 10, 60, 30]
          ]
        },
        color: color(3)
      }
    }
  },
  computed: {
    chart() {
      return this.$data.chart_
    }
  },
  methods: {
    init() {
      this.initChart()
      this.setOption()
    },
    initChart() {
      this.$data.chart_ = echarts.init(this.$el.querySelector('#chart'))
    },
    setOption() {
      this.chart.setOption(this.$data.option)
    }
  }
}
</script>

<style lang="scss" scoped>
#chart {
  width: 600px;
  height: 400px;
  background-color: #faf7f5;
}
</style>
