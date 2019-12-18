import Vue from 'vue'
import App from './App.vue'
import router from './router'
import uploader from 'vue-simple-uploader'
import firebase from 'firebase'

Vue.use(uploader)

firebase.initializeApp ({
  apiKey: "AIzaSyAYM-yPxTuXeS5y6ydoigKufzsptZ8tYtw",
  authDomain: "vuedz-3a2e9.firebaseapp.com",
  databaseURL: "https://vuedz-3a2e9.firebaseio.com",
  projectId: "vuedz-3a2e9",
  storageBucket: "vuedz-3a2e9.appspot.com",
  messagingSenderId: "580229607199",
  appId: "1:580229607199:web:47a17dc8aa23e28dc48a2a",
  measurementId: "G-TCW7HEWKJD"
});

new Vue({
  router,
  render: h => h(App),
  render(createElement){
    return createElement(App)
  }
}).$mount('#app')
