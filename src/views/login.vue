<template>
  <div class="container" style="height: 100vh">
    <v-container style="height: 100%;">
      <v-row align="center" style="height: 100%;">
        <v-col align="center">

          <v-card elevation="3"
                  class="rounded-xl d-flex align-center" width="300" height="450"
          >

            <v-card-text>
              <v-row>

                <v-col>

                  <!--                  <h1 class="d-flex justify-center mt-3">Log In</h1>-->
                  <img src="https://beneat.co/static/img/main-logo.svg" alt="" width="50%">
                </v-col>

              </v-row>

              <form action="" @keyup.enter="logIn">
                <v-row>
                  <v-col>
                    <v-text-field
                        v-model="email"


                        label="Username"
                        required

                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                        v-model="password"


                        label="Password"
                        required
                        type="password"
                    ></v-text-field>
                  </v-col>
                </v-row>

              </form>


              <v-row>

                <v-col class="d-flex justify-center">
                  <v-btn @click="logIn" @keyup.enter="logIn" color="blue-grey lighten-5" block elevation="0">Login
                  </v-btn>

                </v-col>
              </v-row>
              <v-row>
                <v-col>
<!--                  <v-btn @click="google"-->
<!--                         color="blue" elevation="0" outlined block class="mt-1"><img-->
<!--                      src="https://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text-thumbnail.png"-->
<!--                      alt="" width="5%"-->
<!--                      class="mr-2 ml-0"> Continue with Google-->
<!--                  </v-btn>-->
                </v-col>
              </v-row>
              <!--              <v-row>-->
              <!--                <v-col>-->
              <!--                  <v-btn @click="facebookSignInPopup"-->
              <!--                         color="blue" elevation="0" outlined block class="mt-5"><img-->
              <!--                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"-->
              <!--                      alt="" width="2%"-->
              <!--                      class="mr-2 ml-0"> Continue with Facebook-->
              <!--                  </v-btn>-->
              <!--                </v-col>-->
              <!--              </v-row>-->

            </v-card-text>


          </v-card>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>
<script>
import firebase from "firebase";
import {mapState, mapActions} from 'vuex'
import axios from "axios";
//import Swal from "sweetalert2";
//import axios from 'axios'
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
    error: '',
    gmail: false,
    emailLogin: false,
    userData: null,
    userDataPost: {
      email: null,
      photoUrl: null
    }

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
    // async logInWithGmail(){
    //   try {
    //     const val = await firebase.auth().signIn
    //   }catch (err){
    //
    //   }
    // },
    async logIn() {
      try {
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(val)
        this.emailLogin = true
        this.loginSuccess(val)

        this.$router.replace({name: "Time"})
      } catch (err) {
        alert(err.message)
        console.log(err)
      }
    },
    loginSuccess(data) {
      console.log('123', 123)
      let myUserFromDb
      console.log('datalogin', data)
      if (data) {
        if (this.gmail === true) {
          myUserFromDb = {

            email: data.user.email

          }
          this.$store.commit('user/saveUser', myUserFromDb)
          //this.postPhotoUrl(data)
          this.$router.replace({name: "Time"})
          console.log('99999999999')

        }

        if (this.emailLogin === true) {
          console.log('testemailloginnnnnnnnnnnnnnnnnnn999999')
          const myUserFromDb = {

            email: data.user.email

          }


          this.$store.commit('user/saveUser', myUserFromDb)
        }
      }


    },
    google() {
      const vm = this
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase
          .auth()
          .signInWithPopup(provider)
          .then(async function (result) {
            const googleEmail = result.user.email
            console.log('googlemail', googleEmail)
            console.log('googleResult', result.user.photoURL)
            if (googleEmail) {
              vm.gmail = true
              vm.loginSuccess(result)
              console.log('aaaaaaaa')

              vm.getId(googleEmail)
              vm.postPhotoUrl(result)
            }

          })
    },

    facebookSignInPopup() {
      //const vm = this
      var provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider);
      // firebase
      //     .auth()
      //     .getRedirectResult()
      //     .then((result) => {
      //       if (result.credential) {
      //         console.log('test')
      //       }
      //
      //     })
      // // [START auth_facebook_signin_popup]
      //     const vm = this
      //     var provider = new firebase.auth.FacebookAuthProvider();
      // firebase
      //     .auth()
      //     .signInWithPopup(provider)
      //     .then((result) => {
      //       /** @type {firebase.auth.OAuthCredential} */
      //       var credential = result.credential;
      //
      //       // The signed-in user info.
      //       var user = result.user;
      //
      //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //       var accessToken = credential.accessToken;
      //
      //       // ...
      //     })
      //     .catch((error) => {
      //       // Handle Errors here.
      //       var errorCode = error.code;
      //       var errorMessage = error.message;
      //       // The email of the user's account used.
      //       var email = error.email;
      //       // The firebase.auth.AuthCredential type that was used.
      //       var credential = error.credential;
      //
      //       // ...
      //     });
      // // [END auth_facebook_signin_popup]
    },
    postPhotoUrl(data) {
      console.log('postPhotoUrl')
      const url = 'http://localhost:8000/postphotourl'
      console.log('dataPhoto5555', url)
      console.log('777878778', data.user.email, data.user.photoURL)
      this.userDataPost.email = data.user.email
      this.userDataPost.photoUrl = data.user.photoURL
      console.log('AAAAAAAAAA')

      axios
          .post(url, this.userDataPost)
          .then((respone) => {
            if (respone.status === 200) {

              console.log('postphotoUrl', respone.data)


            }
          })
          .catch((error) => {
            console.log('error', error)
          })

    },
    getId(email) {
      const url = 'http://localhost:8000/id'

      axios
          .get(url, {params: {email: email}})
          .then((respone) => {
            if (respone.status === 200) {
              this.userData = respone.data
              console.log('responseId', respone.data)
              console.log('id', this.userData.id)

              if (this.userData.id) {
                this.loginSuccess(email)

              } else {
                //alert('ท่านยังไม่มีอีเมลล์ในระบบ')
                this.$swal({icon: 'error', title: 'ท่านยังไม่มีอีเมลล์ในระบบ'})
              }

            }
          })
          .catch((error) => {
            console.log('error', error)
          })

    },

  }
}
</script>
<style>
h1 {
  color: gray;
}
</style>
