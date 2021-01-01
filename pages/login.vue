<template>
  <v-row justify="center">
    <v-col md="4">
      <v-form ref="form">
        <v-text-field
          v-model="user.username"
          label="نام کاربری"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          label="کلمه عبور"
          required
        ></v-text-field>

        <v-btn color="success" @click="login"> ورود </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import qs from "qs";

export default {
  data: () => ({
    user: {
      username: "9823",
      password: "0123456789",
      grant_type: "password",
      scope: "read"
    }
  }),
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: qs.stringify(this.user),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              "NTdiNWEzODcwNWQ3YjM1NjI2NTU5MjU0MDM0NTQzMjEyOjY2NTVmNTIzMTI4MjEyZDZlNzA2MzQ0NDZiNGI1YjZiNw=="
          }
        });
        this.$router.push("/");
      } catch (err) {
        return;
      }
    }
  }
};
</script>
