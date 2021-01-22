<template>

  <v-app>
    <router-view></router-view>
  </v-app>

</template>
<style>
.v-badge--bordered .v-badge__badge::after{
  border-width: 5px ;
}
</style>

<!--<script>-->
<!--//import { mdiAlarm } from '@mdi/js';-->
<!--//import Header from ".Header.vue";-->
<!--// import Header from '@/components/Header.vue'-->
<!--import DigitalClock from 'vue-digital-clock'-->
<!--import moment from 'moment'-->
<!--export default {-->
<!--  name: "App",-->

<!--  components: {-->
<!--    // Header,-->
<!--    DigitalClock,-->
<!--    //mdiAlarm-->

<!--  },-->

<!--  data: () => ({-->
<!--    todayDate: moment().format(' ddd Do MMMM YYYY '),-->
<!--    drawer: false,-->
<!--    group: null,-->
<!--    items: [-->
<!--      {title: 'Dashboard', icon: 'mdi-view-dashboard'},-->
<!--      {title: 'Photos', icon: 'mdi-image'},-->
<!--      {title: 'About', icon: 'mdi-help-box'},-->
<!--    ],-->
<!--    right: null-->
<!--  }),-->
<!--  watch: {-->
<!--    group() {-->
<!--      this.drawer = false-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<!--<style scoped>-->
<!--a {-->
<!--  text-decoration: none;-->
<!--}-->

<!--#clock {-->
<!--  font-family: 'Share Tech Mono', monospace;-->
<!--  color: #ffffff;-->
<!--  text-align: center;-->
<!--  position: absolute;-->
<!--  left: 50%;-->
<!--  top: 50%;-->
<!--  transform: translate(-50%, -50%);-->
<!--  color: black;-->
<!--  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);-->

<!--.time {-->
<!--  letter-spacing: 0.05em;-->
<!--  font-size: 80px;-->
<!--  padding: 5px 0;-->
<!--}-->

<!--.date {-->
<!--  letter-spacing: 0.1em;-->
<!--  font-size: 24px;-->
<!--}-->

<!--.text {-->
<!--  letter-spacing: 0.1em;-->
<!--  font-size: 12px;-->
<!--  padding: 20px 0 0;-->
<!--}-->

<!--}-->
<!--</style>-->
