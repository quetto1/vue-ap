import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Hook to the firebase 
const configOptions = {
  apiKey: 'AIzaSyApESsgSvrwKDdpZY9wb-iuDAfC8r0aCmM',
  authDomain: 'my-awesome-base.firebaseapp.com',
  databaseURL: 'https://my-awesome-base.firebaseio.com',
  projectId: 'my-awesome-base',
  storageBucket: 'my-awesome-base.appspot.com',
  messagingSenderId: '605264774093',
  appId: '1:605264774093:web:2f2cc62db7e932d9c4fa84'
};

// Initializing connection
firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
