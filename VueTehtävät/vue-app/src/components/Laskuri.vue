<template>
<div id="laskuridiv">
  <h2>{{ total.toString() }}</h2>
  <button id="minus" v-on:click="minus">-</button>
  <button id="zero" v-on:click="zero">0</button>
  <button id="plus" v-on:click="plus">+</button>
</div>
</template>

<script>
export default {
  name: "laskuri",
  data(){
    return{
      total : 0
    }
  },
  methods: {
    plus(){
      this.total++;
    },
    minus(){
      this.total--;
    },
    zero(){
      this.total = 0;
    }
  }
}
</script>

<style scoped>


</style>