<!--
 * @Author: Jethro
 * @Date: 2020-08-31 10:59:00
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-12 16:52:22
 * @FilePath: \vuedemo\src\App.vue
-->
<template>
  <div id="app" v-title data-title="Jethro_vuedemo">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
