<template>
  <div class="links">
    <Home v-if="!isLogin"/>
    <Mypage
      v-if="isLogin"
      :user="userData"/>
  </div>
</template>

<script>
import Home from '~/components/Home.vue'
import Mypage from '~/components/Mypage.vue'
import firebase from '@/plugins/firebase'

export default {
  components: {
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
}
}

</script>
