<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld/>
  <now-you-see-me/>
  <laskuri/>
  <lista/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import NowYouSeeMe from "@/components/NowYouSeeMe";
import Laskuri from "@/components/Laskuri";
import Lista from "@/components/Lista";

export default {
  name: 'App',
  components: {
    Lista,
    Laskuri,
    NowYouSeeMe,
    HelloWorld
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
</style>
