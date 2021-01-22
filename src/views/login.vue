<template>
  <div class="container">
    <v-container style="height: 100%;">
      <v-row align="center" style="height: 720px;">
        <v-col align="center">
          <v-card elevation="3"
                  class="rounded-xl d-flex align-center" width="300" height="450"
          >
            <v-card-text>
              <v-row>
                <v-col>
                  <h1 class="d-flex justify-center mt-3">Log In</h1>
                </v-col>

              </v-row>

              <form action="" @keyup.enter="logIn">
                <v-row>
                  <v-col>
                    <v-text-field
                        v-model="email"
                        :rules="nameRules"
                        :counter="20"
                        label="Username"
                        required

                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                        v-model="password"
                        :rules="nameRules"
                        :counter="10"
                        label="Password"
                        required
                        type="password"
                    ></v-text-field>
                  </v-col>
                </v-row>

              </form>


              <v-row>

                <v-col class="d-flex justify-center">
                  <v-btn @click="logIn" @keyup.enter="logIn">Login</v-btn>
                </v-col>
              </v-row>

            </v-card-text>


          </v-card>
        </v-col>
      </v-row>
    </v-container>
{{ user }}

  </div>
</template>
<script>
import firebase from "firebase";
import { mapState, mapActions } from 'vuex'
//import "firebase/auth";

export default {
  data: () => ({
    // alignments: [
    //   'start',
    //   'center',
    //   'end',
    // ],
    email: '',
    password: '',
    error: ''

  }),
  computed: {
    ...mapState({
      user: state => state.user.user
    })

  },

  methods: {
    ...mapActions('user', [
      'LOGIN'
    ]),
    async logIn() {
      try{
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(val)
        this.loginSuccess(val)
        this.$router.replace({name: "Time"})
      }catch(err) {
        alert(err.message)
        console.log(err)
      }
    },
    loginSuccess (data) {
      console.log('123', 123)


      const myUserFromDb = {
        uid: data.user.uid,
        email: data.user.email,

      }
      this.$store.commit('user/saveUser', myUserFromDb)
    }

  }
}
</script>
<style>
h1 {
  color: gray;
}
</style>
