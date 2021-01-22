import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
//import firebase from "firebase/app";
import firebase from 'firebase'
//import { firebaseConfig } from './config'
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(VueSweetalert2);
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
