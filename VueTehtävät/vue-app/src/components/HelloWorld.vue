<template>
  <div class="hello">
    <h1 id="message">{{ msg }}</h1>
    <h3>Merkkijonon pituus: {{ counter }}</h3>
    <input
        id="input"
        type="text"
        v-model="msg"
    />
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: 'Hello world'
    }
  },
  computed: {
    counter : function(){
      if(this.msg.length > 0){
        return this.msg.length;
      }

      return "";
    }

  },


  methods: {
    changeText(){
      document.getElementById("message").innerHTML = document.getElementById("input").innerHTML;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
