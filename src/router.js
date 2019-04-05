import SimpleChart from './components/Pages/p01_SimgpleChart.vue'
import SingleXAxisSingleTermSimpleChart from './components/Pages/p02_SingleXAxisSingleTermSimpleChart.vue'
import SingleXAxisSomeTermsSimpleChart from './components/Pages/p03_SingleXAxisSomeTermsSimpleChart.vue'
import SomeXAxesSingleTermSimpleChart from './components/Pages/p04_SomeXAxesSingleTermSimpleChart.vue'
import SomeXAxesSomeTermsSimpleChart from './components/Pages/p05_SomeXAxesSomeTermsSimpleChart.vue'
import SingleXAxisSingleTermCrossChart from './components/Pages/p06_SingleXAxisSingleTermCrossChart.vue'
import SomeXAxesSingleTermCrossChart from './components/Pages/p07_SomeXAxesSingleTermCrossChart.vue'
import SomeXAxesSomeTermsCrossChart from './components/Pages/p08_SomeXAxesSomeTermsCrossChart.vue'

// Vue.use(Router)

export default {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SimpleChart',
      component: SimpleChart
    },
    {
      path: '/SingleXAxisSingleTermSimpleChart',
      name: '単一比較/単一期間',
      component: SingleXAxisSingleTermSimpleChart
    },
    {
      path: '/SingleXAxisSomeTermsSimpleChart',
      name: '単一比較/複数期間',
      component: SingleXAxisSomeTermsSimpleChart
    },
    {
      path: '/SomeXAxesSingleTermSimpleChart',
      name: '複数比較/単一期間',
      component: SomeXAxesSingleTermSimpleChart
    },
    {
      path: '/SomeXAxesSomeTermsSimpleChart',
      name: '複数比較/複数期間',
      component: SomeXAxesSomeTermsSimpleChart
    },
    {
      path: '/SingleXAxisSingleTermCrossChart',
      name: '単一比較/単一期間/クロス',
      component: SingleXAxisSingleTermCrossChart
    },
    {
      path: '/SomeXAxesSingleTermCrossChart',
      name: '複数比較/単一期間/クロス',
      component: SomeXAxesSingleTermCrossChart
    },
    {
      path: '/SomeXAxesSomeTermsCrossChart',
      name: '複数比較/複数期間/クロス',
      component: SomeXAxesSomeTermsCrossChart
    }
  ]
}
