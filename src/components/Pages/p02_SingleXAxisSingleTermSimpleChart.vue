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
          text: 'hoge'
        },
        tooltip: {},
        legend: {
          type: 'scroll'
          // data: ['地域指定なし']
        },
        xAxis: {
          // data: ['2017年'],
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            // name: '地域指定なし',
            type: 'bar'
            // data: [28691073]
          }
        ],
        dataset: {
          source: [
            ['期間', '地域指定なし'],
            ['2017年', 28691073]
            // ['2018年', 10000000],
            // ['2019年', 40000000]
          ]
        }
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
