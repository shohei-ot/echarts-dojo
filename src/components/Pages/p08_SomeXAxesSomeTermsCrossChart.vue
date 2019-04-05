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
        color: ['#3e6591', '#eb7d22', '#d73f45'],
        grid: {
          bottom: 250
        },
        yAxis: {
          axisLine: {
            lineStyle: { color: '#ccc' }
          },
          axisLabel: {
            textStyle: { color: '#777' }
          }
        },
        xAxis: [
          {
            // inverse: true,
            splitLine: {
              show: true
            },
            axisTick: {
              length: 100,
              lineStyle: { color: '#ccc' }
            },
            axisLine: {
              lineStyle: { color: '#ccc' }
            },
            data: ['-', '-', '-', '-', '-']
          },
          {
            name: '産業？',
            nameLocation: 'start',
            nameTextStyle: {
              fontWeight: 'bold'
            },
            position: 'bottom',
            offset: 130,
            axisLine: {
              onZero: false,
              show: false
            },
            axisTick: {
              length: 70,
              inside: true,
              lineStyle: { color: '#ccc' }
            },
            axisLabel: {
              inside: true
            },
            // inverse: true,
            data: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
          },
          {
            name: '商品名',
            nameLocation: 'start',
            nameTextStyle: {
              fontWeight: 'bold'
            },
            position: 'bottom',
            offset: 220,
            axisLine: {
              onZero: false,
              show: false
            },
            axisTick: {
              length: 100,
              inside: true,
              lineStyle: { color: '#ccc' }
            },
            axisLabel: {
              inside: true
            },
            // inverse: true,
            data: ['APP数据分析', 'DMP', '企业版', '移动广告鉴别', '']
          }
        ],
        series: [
          {
            type: 'bar',
            data: [220, 182, 191, 234, 290],
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: { color: '#000' },
                formatter: '合同金额'
              }
            }
          },
          {
            type: 'bar',
            data: [210, 132, 91, 204, 220],
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: { color: '#000' },
                formatter: '已收款'
              }
            }
          },
          {
            type: 'bar',
            data: [120, 132, 131, 254, 278],
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: { color: '#000' },
                formatter: '应收款'
              }
            }
          },
          {
            type: 'bar',
            data: ['-', '-', '-', '-', '-'],
            xAxisIndex: 1
          },
          {
            type: 'bar',
            data: ['-', '-', '-', '-', '-'],
            xAxisIndex: 2
          }
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
