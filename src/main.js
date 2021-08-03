import Vue from 'vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
//import firebase from "firebase/app";
import firebase from 'firebase'
//import { firebaseConfig } from './config'
import VueSweetalert2 from 'vue-sweetalert2';
import * as VueGoogleMaps from 'vue2-google-maps'
import {GmapMarker} from 'vue2-google-maps/src/components/marker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('GmapMarker', GmapMarker)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDYZz7AlJKyX9It65Jx1_dJ2I7ZujWG8xg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyCBlGBpgkbq4xndIaT5NVNJxYyl367GIyg",
  authDomain: "login-8024d.firebaseapp.com",
  projectId: "login-8024d",
  storageBucket: "login-8024d.appspot.com",
  messagingSenderId: "667748621931",
  appId: "1:667748621931:web:bf9c12d85bddca92021b2e",
  measurementId: "G-8G77ZX7VWD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
