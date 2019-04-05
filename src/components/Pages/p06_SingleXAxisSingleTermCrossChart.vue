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
        // NOTE: xAxis, yAxis を付けるとX/Y軸のための線が出てくる
        // xAxis: {
        //   // data: ['2017年'],
        //   type: 'category'
        // },
        // yAxis: {},
        series: [
          {
            name: '地域指定なし',
            type: 'pie',
            label: {
              normal: {
                // 円グラフにくっつくラベルの非表示
                show: false
              }
            }
          }
        ],
        dataset: {
          source: [
            ['項目', '地域指定なし'],
            ['3日以内', 100],
            ['4~6日間', 200],
            ['7~13日間', 120]
          ]
        },
        color: [
          'skyblue',
          'rgb(240, 120, 120)',
          'rgb(150, 160, 230)',
          'green',
          'orange',
          'yellow'
        ]
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
