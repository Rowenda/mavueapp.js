<template>
<div class="container" id="app">
<div class="row justify-content-center text-center">
<div class="col-6">
<img alt="Vue logo" src="./assets/tva.png">
<Tva msg="Calcul de la Tva"/>
</div>
</div>
</div>
</template>

<script>
import Tva from './components/Tva.vue'

export default {
  name: 'App',
  components: {
    Tva
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
  margin-top: 60px;
}
body {
padding-top: 2rem;
}
</style>
