<template>
  <div id="app">
      <nprogress-container></nprogress-container>

    <div id="nav">
      <router-link to="/">Total Statistics</router-link> |
      <router-link to="/diagrams">Total Statistics Diagrams</router-link> |
      <router-link to="/compare">Compare</router-link> |
      <router-link to="/news">News</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
