<template>
  <div class="wrap">
    <h2>demo2</h2>
  </div>
</template>
<script>
export default {
  name: "demo2",
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {},
  mounted() {},
};
const env = process.env;
console.log(env);
let person = {
  name: "tom",
  sex: "1",
  age: 18,
};
const obj = Object.keys(person);
console.log(obj);
</script>