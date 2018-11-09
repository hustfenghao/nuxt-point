<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        my_app
      </h1>
      <h2 class="subtitle">
        My perfect Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>

        <div class="links">
          <Home v-if="!isLogin"/>
          <Mypage
            v-if="isLogin"
            :user="userData"/>
        </div>
        <div v-if="isLogin">
          <nuxt-link to="/shop">管理画面</nuxt-link>

        </div>
      </div>

    </div>
  </section>
</template>



<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>

<script>
import Home from '~/components/Home.vue'
import Mypage from '~/components/Mypage.vue'
import Logo from '~/components/Logo.vue'
import firebase from '@/plugins/firebase'
export default {
  components: {
    Logo,
    Home,
    Mypage
  },
  asyncData (context) {
   // コンポーネントをロードする前に毎回呼び出されます
   return { name: 'Hello, World！！', isLogin:false, userData:null}
 },
 fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
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
