<template>
  <div id="app">
    <div id="nav">
      <ol>
        <li v-for="(route, i) of routes" :key="i">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ol>
    </div>
    <div id="main">
      <h1>{{ $route.name }}</h1>
      <router-view />
    </div>
  </div>
</template>

<script>
import router from './router.js'

export default {
  name: 'App',
  computed: {
    routes() {
      return router.routes
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
#nav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0;
  background-color: #f5f5f5;
  a {
    margin-right: 12px;
    margin-bottom: 12px;
  }
}

#main {
  flex: 1 1;
}

#chart_container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
