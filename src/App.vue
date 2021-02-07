<template>
  <div id="app">
    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <router-link class="router-link" to="/setup">Setup</router-link> |
      <router-link class="router-link" to="/play">Play</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('loadSettings')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 45em;
}

.router-link {
  color: white;
}
</style>
