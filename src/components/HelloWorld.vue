<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      s: "loveleetcode",
    };
  },
  mounted() {
    this.firstUniqChar3(this.s);
  },
  methods: {
    firstUniqChar3(s) {
      for (const [i, ch] of Array.from(s).entries()) {
        console.log(i,ch);
      }

      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
