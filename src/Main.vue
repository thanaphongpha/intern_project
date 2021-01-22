<template>

  <v-app>
    <template>
      <v-row>
        <v-col>สวัสดี {{user.name}}</v-col>
      </v-row>
      <div class="row">
        <v-col class="col-6 offset-3">
          <v-row >
            <v-col class="d-flex justify-center"><v-btn  elevation="2"
                                                         fab
                                                         rounded
                                                         x-large>ปุ่ม</v-btn></v-col>
            <v-col class="d-flex justify-center"><v-btn  elevation="2"
                                                         fab
                                                         rounded
                                                         x-large>ปุ่ม</v-btn></v-col>
            <v-col class="d-flex justify-center"><v-btn  elevation="2"
                                                         fab
                                                         rounded
                                                         x-large>ปุ่ม</v-btn></v-col>
            <v-col class="d-flex justify-center"><v-btn  elevation="2"
                                                         fab
                                                         rounded
                                                         x-large>ปุ่ม</v-btn></v-col>
          </v-row>
        </v-col>



      </div>

    </template>
    <v-card height="50%" elevation="0">
      <v-row>

      </v-row>
      <v-row>


        <v-col class="col-2">
          <v-row>
            <v-navigation-drawer
                absolute
                permanent
                left
                width="300"
            >
              <template v-slot:prepend>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg">
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ user.name }}</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    <v-btn @click="signOut">Sing Out</v-btn>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                >
                  <router-link :to="item.path">
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                  </router-link>
                  <router-link :to="item.path">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </router-link>
                </v-list-item>
              </v-list>

            </v-navigation-drawer>
          </v-row>

        </v-col>


        <v-col class="col-10">

          <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
              <v-row>

                <v-col>

                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <router-view></router-view>
                </v-col>

              </v-row>
              <!-- If using vue-router -->

            </v-container>
          </v-main>
        </v-col>
      </v-row>
    </v-card>

    <!--    <v-app-bar app>-->
    <!--      &lt;!&ndash; &ndash;&gt;-->
    <!--    </v-app-bar>-->

    <!-- Sizes your content based upon application components -->
    <!--    <v-main>-->

    <!--      &lt;!&ndash; Provides the application the proper gutter &ndash;&gt;-->
    <!--      <v-container fluid>-->

    <!--        &lt;!&ndash; If using vue-router &ndash;&gt;-->
    <!--        <router-view></router-view>-->
    <!--      </v-container>-->
    <!--    </v-main>-->

    <v-footer app>
      <!-- -->
    </v-footer>


    <!--    <v-content>-->
    <!--      &lt;!&ndash;     <Header/>&ndash;&gt;-->
    <!--      <v-card-->
    <!--          class="mx-auto overflow-hidden"-->
    <!--          height="100%"-->
    <!--          width="100%"-->
    <!--      >-->
    <!--        <v-system-bar class="justify-end" color="orange"-->
    <!--                      height="26"-->
    <!--        >{{ todayDate }}{{ '*.*' }}-->
    <!--          <digital-clock :blink="true"/>-->
    <!--        </v-system-bar>-->

    <!--        <v-app-bar-->
    <!--            color="white"-->
    <!--            white-->
    <!--            prominent-->
    <!--            height="56%"-->
    <!--            class=""-->
    <!--        >-->
    <!--          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->

    <!--          <v-toolbar-title></v-toolbar-title>-->
    <!--          <v-img-->
    <!--              alt="Vuetify Logo"-->
    <!--              class="img-fluid"-->
    <!--              contain-->
    <!--              src="https://beneat.co/static/img/main-logo.svg"-->
    <!--              transition="scale-transition"-->
    <!--              max-width="150"-->
    <!--          />-->
    <!--          <v-spacer></v-spacer>-->
    <!--          <v-img></v-img>-->
    <!--          {{ user.email }}-->


    <!--          <v-badge color="red" overlap offset-x="25" bordered >-->
    <!--            <v-btn class="mx-2" fab height="44" width="44" elevation="1">-->
    <!--              <v-icon dark color="black">-->
    <!--                mdi-bell-->
    <!--              </v-icon>-->
    <!--            </v-btn>-->
    <!--          </v-badge>-->


    <!--              <v-btn class="mx-2" fab height="44" width="44" elevation="1">-->
    <!--                <v-icon dark color="black">-->
    <!--                  mdi-menu-down-->
    <!--                </v-icon>-->
    <!--              </v-btn>-->


    <!--          <v-btn-->
    <!--              @click="signOut"-->
    <!--              class="mt-1"-->
    <!--              outlined-->
    <!--              color="black">Sign out-->

    <!--          </v-btn>-->
    <!--        </v-app-bar>-->

    <!--        <v-navigation-drawer-->
    <!--            v-model="drawer"-->
    <!--            absolute-->
    <!--            bottom-->
    <!--            temporary-->
    <!--        >-->
    <!--          <v-list-->
    <!--              nav-->
    <!--              dense-->
    <!--          >-->
    <!--            <v-list-item-group-->
    <!--                v-model="group"-->
    <!--                active-class="deep-purple&#45;&#45;text text&#45;&#45;accent-4"-->
    <!--            >-->
    <!--              <router-link to="/">-->
    <!--                <v-list-item>-->
    <!--                  <v-list-item-title>-->
    <!--                    <v-icon>mdi-alarm</v-icon>-->
    <!--                    ระบบลงเวลาทำงาน-->
    <!--                  </v-list-item-title>-->
    <!--                </v-list-item>-->
    <!--              </router-link>-->

    <!--              <router-link to="/history">-->
    <!--                <v-list-item>-->
    <!--                  <v-list-item-title>-->
    <!--                    <v-icon>mdi-history</v-icon>-->
    <!--                    ประวัติการลงเวลาทำงาน-->
    <!--                  </v-list-item-title>-->
    <!--                </v-list-item>-->
    <!--              </router-link>-->

    <!--              <router-link to="/leave">-->
    <!--                <v-list-item>-->
    <!--                  <v-list-item-title>-->
    <!--                    <v-icon>mdi-file-outline</v-icon>-->
    <!--                    ระบบส่งใบลาออนไลน์-->
    <!--                  </v-list-item-title>-->
    <!--                </v-list-item>-->
    <!--              </router-link>-->

    <!--              <router-link to="/calendar">-->
    <!--                <v-list-item>-->
    <!--                  <v-list-item-title class="link">-->
    <!--                    <v-icon>mdi-calendar</v-icon>-->
    <!--                    Calendar-->
    <!--                  </v-list-item-title>-->
    <!--                </v-list-item>-->
    <!--              </router-link>-->
    <!--            </v-list-item-group>-->
    <!--          </v-list>-->

    <!--        </v-navigation-drawer>-->
    <!--        <v-card height="350px">-->
    <!--          <v-navigation-drawer-->
    <!--              absolute-->
    <!--              permanent-->
    <!--              left-->
    <!--          >-->
    <!--            <template v-slot:prepend>-->
    <!--              <v-list-item two-line>-->
    <!--                <v-list-item-avatar>-->
    <!--                  <img src="https://randomuser.me/api/portraits/women/81.jpg">-->
    <!--                </v-list-item-avatar>-->

    <!--                <v-list-item-content>-->
    <!--                  <v-list-item-title>Jane Smith</v-list-item-title>-->
    <!--                  <v-list-item-subtitle>Logged In</v-list-item-subtitle>-->
    <!--                </v-list-item-content>-->
    <!--              </v-list-item>-->
    <!--            </template>-->

    <!--            <v-divider></v-divider>-->

    <!--            <v-list dense>-->
    <!--              <v-list-item-->
    <!--                  v-for="item in items"-->
    <!--                  :key="item.title"-->
    <!--              >-->
    <!--                <v-list-item-icon>-->
    <!--                  <v-icon>{{ item.icon }}</v-icon>-->
    <!--                </v-list-item-icon>-->

    <!--                <v-list-item-content>-->
    <!--                  <v-list-item-title>{{ item.title }}</v-list-item-title>-->
    <!--                </v-list-item-content>-->
    <!--              </v-list-item>-->
    <!--            </v-list>-->
    <!--          </v-navigation-drawer>-->
    <!--          <v-main>-->

    <!--            &lt;!&ndash; Provides the application the proper gutter &ndash;&gt;-->
    <!--            <v-container fluid>-->

    <!--              &lt;!&ndash; If using vue-router &ndash;&gt;-->
    <!--              <router-view></router-view>-->
    <!--            </v-container>-->
    <!--          </v-main>-->

    <!--        </v-card>-->
    <!--        <v-card-text>-->
    <!--          <router-view></router-view>-->

    <!--        </v-card-text>-->
    <!--      </v-card>-->

    <!--    </v-content>-->
    <!--    <v-main>-->

    <!--      &lt;!&ndash; Provides the application the proper gutter &ndash;&gt;-->
    <!--      <v-container fluid>-->

    <!--        &lt;!&ndash; If using vue-router &ndash;&gt;-->
    <!--        <router-view></router-view>-->
    <!--      </v-container>-->
    <!--    </v-main>-->
  </v-app>
</template>

<script>
import firebase from "firebase";
//import "firebase/auth";
//import { mdiAlarm } from '@mdi/js';
//import Header from ".Header.vue";
// import Header from '@/components/Header.vue'
//import DigitalClock from 'vue-digital-clock'
import moment from 'moment'
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "App",

  components: {
    // Header,
    //DigitalClock,
    //mdiAlarm

  },

  data: () => ({
    userData: null,
    loggedIn: false,
    todayDate: moment().format(' ddd Do MMMM YYYY '),
    drawer: false,
    group: null,
    items: [
      {title: 'ลงเวลาทำงาน', icon: 'mdi-alarm', path: '/'},
      {title: 'ประวัติการลงเวลา', icon: 'mdi-history', path: '/history'},
      {title: 'ส่งใบลาออนไลน์', icon: 'mdi-file-outline', path: '/leave'},
      {title: 'Calendar', icon: 'mdi-calendar', path: '/calendar'}
    ],
    right: null
  }),
  computed: {
    ...mapState({
      user: state => state.user.user
    })

  },
  watch: {
    group() {
      this.drawer = false
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
      // if(user){
      //   this.loggedIn = true;
      // }else {
      //   this.loggedIn = false;
      // }

    })
    this.getId()
  },
  methods: {
    getId() {
      const url = 'http://localhost:8000/id'

      axios
          .get(url, {params: {email: this.user.email}})
          .then((respone) => {
            if (respone.status === 200) {
              this.userData = respone.data
              console.log('responseId', respone.data)
              console.log('id', this.userData.id)



              const myUserFromDb = {
                uid: this.user.uid,
                email: this.user.email,
                id: this.userData.id,
                name: this.userData.name,
                departmentName: this.userData.departmentName

              }
              this.$store.commit('user/saveUser', myUserFromDb)

            }
          })
          .catch((error) => {
            console.log('error', error)
          })

    },
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log('DataLogOut', data);
        this.logOutSuccess()
        this.$router.replace({name: "login"})
      } catch (err) {
        console.log(err)
      }

    },
    logOutSuccess() {
      console.log('123', 123)
      const myUserFromDb = null
      this.$store.commit('user/saveUser', myUserFromDb)
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}


#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);

.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}

.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}

.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}

}


</style>
<style>

a {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}


</style>
