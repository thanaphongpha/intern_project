<template>

  <div>


    <!--    <template>-->

    <!--      <div class="row">-->
    <!--        <div class="myfont col">สวัสดี {{ user.name }}</div>-->
    <!--        <div class="col d-flex justify-end">-->
    <!--          <v-btn icon-->
    <!--                 tile @click="signOut">-->
    <!--            <v-icon>mdi-logout</v-icon>-->
    <!--          </v-btn>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="row">-->
    <!--        <div class="homeblue col d-flex justify-center">-->
    <!--          <h1>-->
    <!--            <digital-clock :blink="true"/>-->
    <!--          </h1>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--      <v-row>sfsdfsdf</v-row>-->
    <!--      <v-row class="homered">-->

    <!--        <v-col class="homeblue col-6 offset-3">-->

    <!--          <v-row class="homered">-->

    <!--            <v-col class="d-flex justify-center">-->
    <!--              <router-link to="/time">-->
    <!--                <v-btn color="primary"-->
    <!--                       elevation="2"-->
    <!--                       fab-->
    <!--                       rounded-->
    <!--                       text-->
    <!--                       x-large-->
    <!--                ><img src="https://www.pngkit.com/png/full/603-6030012_open-11-11-clock-png.png" alt="" height="50">-->
    <!--                </v-btn>-->
    <!--              </router-link>-->
    <!--            </v-col>-->
    <!--            <v-col class="d-flex justify-center">-->
    <!--              <router-link to="/history">-->
    <!--                <v-btn color="primary"-->
    <!--                       elevation="2"-->
    <!--                       fab-->
    <!--                       rounded-->
    <!--                       text-->
    <!--                       x-large><img-->
    <!--                    src="https://www.pngfind.com/pngs/m/589-5899856_png-file-svg-history-icon-svg-transparent-png.png"-->
    <!--                    alt="" height="50"></v-btn>-->
    <!--              </router-link>-->

    <!--            </v-col>-->
    <!--            <v-col class="d-flex justify-center">-->
    <!--              <router-link to="/leavework">-->
    <!--                <v-btn color="primary"-->
    <!--                       elevation="2"-->
    <!--                       fab-->
    <!--                       rounded-->
    <!--                       text-->
    <!--                       x-large><img-->
    <!--                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRthhgexrA6oV6R62UAsduSy7uoj6rKZuH7w&usqp=CAU"-->
    <!--                    alt="" height="50"></v-btn>-->
    <!--              </router-link>-->

    <!--            </v-col>-->
    <!--            <v-col class="d-flex justify-center">-->
    <!--              <router-link to="/calendar">-->
    <!--                <v-btn color="primary"-->
    <!--                       elevation="2"-->
    <!--                       fab-->
    <!--                       rounded-->
    <!--                       text-->
    <!--                       x-large><img-->
    <!--                    src="https://img2.thaipng.com/20180802/uyu/kisspng-online-calendar-clip-art-personal-organizer-calend-calendar-interface-symbol-svg-png-icon-free-downlo-5b62fb254be961.429828691533213477311.jpg"-->
    <!--                    alt="" height="50"></v-btn>-->
    <!--              </router-link>-->

    <!--            </v-col>-->


    <!--          </v-row>-->
    <!--        </v-col>-->
    <!--      </v-row>-->

    <!--    </template>-->
    <!--    <v-card height="50%" elevation="0">-->
    <!--      <v-row>-->

    <!--      </v-row>-->
    <!--      <v-row>-->


    <!--        <v-col class="col-2">-->
    <!--          <v-row>-->
    <!--            <v-navigation-drawer-->
    <!--                absolute-->
    <!--                permanent-->
    <!--                left-->
    <!--                width="300"-->
    <!--            >-->
    <!--              <template v-slot:prepend>-->
    <!--                <v-list-item two-line>-->
    <!--                  <v-list-item-avatar>-->
    <!--                    <img src="https://randomuser.me/api/portraits/women/81.jpg">-->
    <!--                  </v-list-item-avatar>-->

    <!--                  <v-list-item-content>-->
    <!--                    <v-list-item-title>{{ user.name }}</v-list-item-title>-->
    <!--                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>-->
    <!--                    <v-btn @click="signOut">Sing Out</v-btn>-->
    <!--                  </v-list-item-content>-->
    <!--                </v-list-item>-->
    <!--              </template>-->

    <!--              <v-divider></v-divider>-->

    <!--              <v-list dense>-->
    <!--                <v-list-item-->
    <!--                    v-for="item in items"-->
    <!--                    :key="item.title"-->
    <!--                >-->
    <!--                  <router-link :to="item.path">-->
    <!--                    <v-list-item-icon>-->
    <!--                      <v-icon>{{ item.icon }}</v-icon>-->
    <!--                    </v-list-item-icon>-->
    <!--                  </router-link>-->
    <!--                  <router-link :to="item.path">-->
    <!--                    <v-list-item-content>-->
    <!--                      <v-list-item-title>{{ item.title }}</v-list-item-title>-->
    <!--                    </v-list-item-content>-->
    <!--                  </router-link>-->
    <!--                </v-list-item>-->
    <!--              </v-list>-->

    <!--            </v-navigation-drawer>-->
    <!--          </v-row>-->

    <!--        </v-col>-->


    <!--        <v-col class="col-10">-->

    <!--          <v-main>-->

    <!--            &lt;!&ndash; Provides the application the proper gutter &ndash;&gt;-->
    <!--            <v-container fluid>-->
    <!--              <v-row>-->

    <!--                <v-col>-->

    <!--                </v-col>-->
    <!--              </v-row>-->
    <!--              <v-row>-->
    <!--                <v-col class="d-flex justify-center">-->
    <!--                  <router-view></router-view>-->
    <!--                </v-col>-->

    <!--              </v-row>-->
    <!--              &lt;!&ndash; If using vue-router &ndash;&gt;-->

    <!--            </v-container>-->
    <!--          </v-main>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--    </v-card>-->

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

    <!--    <v-toolbar>-->


    <v-app-bar color="white">
      <!--        color="white"-->
      <!--        white-->

      <!--        height="56%"-->

      <!--    >-->
<!--      <v-col align="left" class="">-->
        <!--        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->


        <!--              <v-img-->
        <!--                  alt="Vuetify Logo"-->
        <!--                  class="img-fluid"-->
        <!--                  contain-->
        <!--                  src="https://beneat.co/static/img/main-logo.svg"-->
        <!--                  transition="scale-transition"-->
        <!--                  max-width="150"-->
        <!--              />-->

<!--        <v-toolbar-items class="hidden-sm-and-down">-->
<!--          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
<!--          <v-btn text class="mt-1">-->
<!--            <router-link to="/">-->
<!--              <v-icon>mdi-home</v-icon>-->
<!--              Home-->
<!--            </router-link>-->
<!--          </v-btn>-->

<!--          <v-divider vertical></v-divider>-->

<!--          <v-btn text class="mt-1">-->
<!--            <router-link to="/history">-->
<!--              <v-icon>mdi-clock-outline</v-icon>-->
<!--              History-->
<!--            </router-link>-->
<!--          </v-btn>-->

<!--          <v-divider vertical></v-divider>-->

<!--          <v-btn text class="mt-1">-->
<!--            <router-link to="/leavework">-->
<!--              <v-icon>mdi-newspaper-variant</v-icon>-->
<!--              leave-->
<!--            </router-link>-->
<!--          </v-btn>-->
<!--          <v-divider vertical></v-divider>-->

<!--          <v-btn text class="mt-1">-->
<!--            <router-link to="/calendar">-->
<!--              <v-icon>mdi-calendar-month-outline</v-icon>-->
<!--              Calendar-->
<!--            </router-link>-->
<!--          </v-btn>-->

<!--          <v-divider vertical></v-divider>-->
<!--        </v-toolbar-items>-->
        <!--        <v-icon>mdi-home</v-icon>-->
        <!--        <router-link to="/time"> หน้าหลัก </router-link>-->

        <!--        <v-icon>mdi-clock-outline </v-icon>-->
        <!--        <router-link to="/history"> ประวัติการลงเวลา </router-link>-->

        <!--        <v-icon>mdi-newspaper-variant</v-icon>-->
        <!--        <router-link to="/leavework"> ลางาน </router-link>-->

        <!--        <v-icon>mdi-calendar-month-outline</v-icon>-->
        <!--        <router-link to="/calendar">  ปฎิทินวันลา</router-link>-->


<!--      </v-col>-->
      <v-col align="center"><h3>Beneat HRM System </h3></v-col>
<!--      <v-col align="right">-->
<!--        <v-chip color="blue" outlined>-->
<!--          <v-icon icon="mdi-lock">mdi-account-circle-outline</v-icon>-->
<!--          {{ user.name }}-->
<!--        </v-chip>-->


<!--        <v-badge color="error" overlap offset-x="25" icon="1">-->
<!--          <v-btn class="mx-2" fab height="44" width="44" elevation="1">-->
<!--            <v-icon dark color="black">-->
<!--              mdi-bell-->
<!--            </v-icon>-->
<!--          </v-btn>-->

<!--        </v-badge>-->


        <!--        <v-btn class="mx-2" fab height="44" width="44" elevation="1">-->
        <!--          <v-icon dark color="black">-->
        <!--            mdi-menu-down-->
        <!--          </v-icon>-->
        <!--        </v-btn>-->

        <!--        <v-btn-->
        <!--            class="mx-2"-->
        <!--            height="44" width="44"-->
        <!--            @click="signOut"-->
        <!--            fab-->
        <!--            elevation="1">-->
        <!--          <v-icon color="black">mdi-power</v-icon>-->
        <!--        </v-btn>-->
<!--        <v-menu offset-y>-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-btn-->
<!--                fab height="44" width="44"-->
<!--                elevation="1"-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--            >-->
<!--              <v-icon dark color="black">-->
<!--                mdi-menu-down-->
<!--              </v-icon>-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <v-list>-->
<!--            <v-list-item-->
<!--                v-bind:style="{backgroundColor:bgColor}"-->
<!--            >-->
<!--              <v-list-item-title>-->
<!--                <v-icon color="primary">mdi-account-circle-outline</v-icon>-->
<!--                {{ user.name }}-->
<!--              </v-list-item-title>-->

<!--            </v-list-item>-->

<!--            <v-col align="center">-->
<!--              <v-divider width="100%"></v-divider>-->
<!--            </v-col>-->
<!--            <v-list-item>-->
<!--              <v-list-item-title @click="signOut" class="myHover">-->
<!--                <v-icon color="primary">mdi-lock-outline</v-icon>-->
<!--                เปลี่ยนรหัสผ่าน-->
<!--              </v-list-item-title>-->
<!--            </v-list-item>-->
<!--            <v-list-item>-->
<!--              <v-list-item-title @click="signOut" class="myHover">-->
<!--                <v-icon color="red">mdi-power</v-icon>-->
<!--                ออกจากระบบ-->
<!--              </v-list-item-title>-->
<!--            </v-list-item>-->
<!--          </v-list>-->
<!--        </v-menu>-->
<!--      </v-col>-->


    </v-app-bar>

    <!--    </v-toolbar>-->

    <!--      <v-navigation-drawer-->
    <!--          v-model="drawer2"-->
    <!--          :mini-variant.sync="mini"-->
    <!--          permanent-->
    <!--      >-->
    <!--        <v-list-item class="px-2">-->
    <!--          <v-list-item-avatar>-->
    <!--            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>-->
    <!--          </v-list-item-avatar>-->

    <!--          <v-list-item-title>John Leider</v-list-item-title>-->

    <!--          <v-btn-->
    <!--              icon-->
    <!--              @click.stop="mini = !mini"-->
    <!--          >-->
    <!--            <v-icon>mdi-chevron-left</v-icon>-->
    <!--          </v-btn>-->
    <!--        </v-list-item>-->

    <!--        <v-divider></v-divider>-->

    <!--        <v-list dense>-->
    <!--          <v-list-item-->
    <!--              v-for="item in items"-->
    <!--              :key="item.title"-->
    <!--              link-->
    <!--          >-->
    <!--            <v-list-item-icon>-->
    <!--              <v-icon>{{ item.icon }}</v-icon>-->
    <!--            </v-list-item-icon>-->

    <!--            <v-list-item-content>-->
    <!--              <v-list-item-title>{{ item.title }}</v-list-item-title>-->
    <!--            </v-list-item-content>-->
    <!--          </v-list-item>-->
    <!--        </v-list>-->

    <!--      </v-navigation-drawer>-->

    <router-view></router-view>
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
    <v-bottom-navigation
        :value="value"
        color="blue"
        grow
        fixed
    >

        <v-btn href="/">
          <span>Home</span>

          <v-icon color="blue">mdi-home</v-icon>
        </v-btn>



        <v-btn href="/history">
          <span style="color: grey" >History</span>

          <v-icon color="blue">mdi-history</v-icon>
        </v-btn>



        <v-btn href="/leavework">
          <span >Leave</span>

          <v-icon color="blue">mdi-file-outline</v-icon>
        </v-btn>


<!--      <router-link to="/calendar">-->
        <v-btn href="/calendar">
          <span >Calendar</span>

          <v-icon color="blue">mdi-calendar</v-icon>
        </v-btn>
<!--      </router-link>-->

    </v-bottom-navigation>
  </div>

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
  data: () => ({
    value: 1,
    mini: true,
    drawer2: true,
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
    right: null,
    bgColor: null
  }),
  computed: {
    ...mapState({
      user: state => state.user.user
    })

  },
  components: {
    //DigitalClock
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
    hoverIn() {
      this.bgColor = 'red'
    },
    hoverOut() {
      this.bgColor = null
    },
    getId() {
      const url = 'http://localhost:8000/id'

      axios
          .get(url, {params: {email: this.user.email}})
          .then((respone) => {
            if (respone.status === 200) {
              this.userData = respone.data
              console.log('MainresponseId', respone.data)
              console.log('Mainid', this.userData.id)
              console.log('Main', this.userData)


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
<style>
.freedom a{
color: red!important;
}
.v-list-item.theme--light:hover {
  border-radius: 7px;
  background-color: rgba(192, 192, 192, 0.3);
  cursor: pointer;
  margin-left: 3%;
  margin-right: 3%;
}


/*.homeblue {*/
/*  border-style: solid;*/
/*  border-color: #3D5AFE;*/
/*  border-radius: 20px;*/
/*}*/

/*.homered {*/
/*  border-style: solid;*/
/*  border-color: red;*/
/*  border-radius: 20px;*/
/*}*/

/*a {*/
/*  text-decoration: none;*/
/*}*/


/*#clock {*/
/*  font-family: 'Share Tech Mono', monospace;*/
/*  color: #ffffff;*/
/*  text-align: center;*/
/*  position: absolute;*/
/*  left: 50%;*/
/*  top: 50%;*/
/*  transform: translate(-50%, -50%);*/
/*  color: black;*/
/*  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);*/

/*.time {*/
/*  letter-spacing: 0.05em;*/
/*  font-size: 80px;*/
/*  padding: 5px 0;*/
/*}*/

/*.date {*/
/*  letter-spacing: 0.1em;*/
/*  font-size: 24px;*/
/*}*/

/*.text {*/
/*  letter-spacing: 0.1em;*/
/*  font-size: 12px;*/
/*  padding: 20px 0 0;*/
/*}*/

/*}*/


</style>
<style>
.v-application--wrap {
  display: block;
}

.myfont {
  font: 30px JasmineUPC, sans-serif;
}


.v-application a {
  color: blue !important;
  text-decoration: none;
  vertical-align: center;
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

a
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}


</style>
