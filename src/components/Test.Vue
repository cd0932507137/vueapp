<template>
  <div>
    <h1>test</h1>
    <p>{{ title }}</p>
    <span v-if="showName">{{ user.firstName }}</span>
    <ul>
      <li v-for="item in items">{{ item.label }}</li>
    </ul>
    <button v-on:click="greet('Hello World')">greet</button>
    <br/>
    <input type="text" v-on:keyup="pressKey">
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      title: "Hi Hi Josh",
      user: {
        firstName: "Tommy",
        lastName: "Chen"
      },
      showName: true,
      items: [
        {
          label: "Apple"
        },
        {
          label: "LG"
        },
        {
          label: "Samsung"
        },
        {
          label: "小米"
        }
      ]
    };
  },
  methods: {
    greet: greeting => alert(greeting),
    pressKey: e => console.log(e.target.value)
  },
  computed: {
    // 收納 template 邏輯，即時更動資料就靠它
  }
};
</script>
<style scoped>
</style>
