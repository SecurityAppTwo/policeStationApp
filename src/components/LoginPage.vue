<template>
  <div class="LoginPage">
    <header>
      <div class="loginPicture">
        <img src="./../assets/1.png" />
      </div>
    </header>

    <body class="Login-window">
      <div class="loginInput"></div>
      <input
        class="username"
        type="text"
        name="username"
        v-model="input.username"
        placeholder="שם משתמש"
      />
      <input
        class="password"
        type="password"
        name="username"
        v-model="input.password"
        placeholder="סיסמה"
      />
      <button class="loginButton" type="button" @click="login()">
        התחברות
      </button>
      <p v-if="!confirmed">
        משתמש לא קיים
      </p>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      confirmed: true
    };
  },
  methods: {
    async login() {
      await axios
        .get(
          `http://localhost:8081/users/validateUser?username=${this.input.username}&password=${this.input.password}`
        )
        .then(response => {
          if (response.data.isValid) {
            this.$router.push("/ActionsPage");
          } else {
            this.confirmed = false;
          }
        })
        .catch(e => {
          throw e;
        });
    }
  }
};
</script>

<style>
.LoginPage {
  width: 100%;
  background-color: #5c677d;
}

.Login-window {
  background-color: #33415c;
  top: 50%;
  height: 45vh;
  width: 74%;
  margin-left: 10%;
  padding-top: 360px;
  padding-left: 50px;
  padding-right: 50px;
}

.loginPicture {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.username {
  height: 30px;
  display: flex;
  justify-content: center;
  margin-left: 44%;
}

.password {
  margin-top: 2%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-left: 44%;
}

.loginButton {
  margin-top: 2%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-left: 48%;
}

.loginInput {
  margin-left: 35%;
}
</style>
