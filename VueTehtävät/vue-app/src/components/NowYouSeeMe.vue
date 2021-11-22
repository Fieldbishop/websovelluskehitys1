<template>
  <div id="app-3">
    <span v-if="seen">Now you see me</span>
    <br>
    <button v-on:click="Vaihda">Näytä/Piilota</button>
  </div>
</template>

<script>
export default {
  name: "NowYouSeeMe",
  data() {
    return{
      seen : true,
    }
  },
  methods: {
    Vaihda() {
      this.seen = !this.seen;
    }
  }
}
</script>

<style scoped>


</style>