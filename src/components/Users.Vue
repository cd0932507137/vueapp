<template>
  <div class="container">
    <h1>Users</h1>
    <b-form v-on:submit="addUser">
      <b-form-group>
        <b-form-input type="text" v-model="newUser.name" placeholder="請輸入姓名"></b-form-input>
        <br>
        <b-form-input type="text" v-model="newUser.email" placeholder="請輸入E-mail"></b-form-input>
        <br>
        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form-group>
    </b-form>
    <ul>
      <li v-for="user in users">
        <b-form-checkbox type="checkbox" class="toggle" v-model="user.contacted"></b-form-checkbox>
        <span :class="{contacted: user.contacted}">
          {{ user.name }}: {{ user.email }}
          <b-button v-on:click="deleteUser(user)">x</b-button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "users",
  data() {
    return {
      newUser: {},
      users: []
    };
  },
  methods: {
    addUser: e => {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      });
      e.preventDefault();
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        this.users = response.data;
      });
  }
};
</script>
<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>
