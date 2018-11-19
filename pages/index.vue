<template>
  <section class="container">
    <div>
      <h1 class="title">
        my_app
      </h1>
      <h2 class="subtitle">
        My perfect Nuxt.js project
      </h2>
        <div class="links">
          <button@click="googleLogin">
          googleでログイン
          </button>
        </div>
    </div>
  </section>
</template>

<script>
// import Mypage from '~/components/Mypage.vue'
import Logo from '~/components/Logo.vue'
import firebase from '@/plugins/firebase'
export default {
  components: {
    Logo,
    // Mypage
  },
  data () {
  },
  // asyncData (context) {
 //   // コンポーネントをロードする前に毎回呼び出されます
 //   return { name: 'Hello, World！！', isLogin:false, userData:null}
 // },
 // fetch () {
 //
 //  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true;
        this.userData = user;
        this.$router.push('/shop')
      } else {
        this.isLogin = false;
        this.userData = null;
        // console.log(this.isLogin);
      };
    });
    // console.log(this.isLogin);
    // console.log("3")
    // if(this.isLogin){
    // this.$router.push('/shop')
    // };
  },
  methods: {
    googleLogin: function() {
       firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
