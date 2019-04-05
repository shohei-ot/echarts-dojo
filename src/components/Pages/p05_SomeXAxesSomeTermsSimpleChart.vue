<template lang="pug">
  div#chart_container
    div#chart
    div#controller
</template>

<script>
import * as echarts from 'echarts'

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
        },
        xAxis: {
          // data: ['2017年'],
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            name: '地域指定なし',
            type: 'line'
          },
          {
            name: '韓国',
            type: 'line'
          },
          {
            name: '中国',
            type: 'line'
          },
          {
            name: '台湾',
            type: 'line',
            itemStyle: {
              barBorderColor: 'blue'
            }
          }
        ],
        dataset: {
          source: [
            ['期間', '地域指定なし', '韓国', '中国', '台湾'],
            ['2017年', 100, 200, 500, 50],
            ['2018年', 300, 120, 20, 100],
            ['2019年', 500, 90, 300, 190]
          ]
        },
        color: ['skyblue', 'red', 'blue', 'green', 'orange', 'yellow']
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
