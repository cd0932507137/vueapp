<template>
  <div>
    <input type="text" v-model="title">
    <br/>
    <h1>{{ title }}</h1>
    <span v-if="showName">{{ user.firstName }}</span>
    <ul>
      <li v-for="item in items">{{ item.label }}</li>
    </ul>
    <button v-on:click="greet('Hello World')">greet</button>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr />
    <label>First Name:</label><input type="text" v-model="user.firstName">
    <br />
    <label>Last Name:</label><input type="text" v-model="user.lastName">
    <h3>{{ fullName }}</h3>
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: "test",
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
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
    pressKey: e => console.log(e.target.value),
    enterHit: () => console.log('你點擊Enter')
  },
  // 收納 template 邏輯，即時更動資料就靠它
  computed: {
    fullName: function () {
      return this.user.firstName + '' + this.user.lastName
    }
  }
};
</script>
<style scoped>
</style>
