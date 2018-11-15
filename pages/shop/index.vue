<template>
  <div
    class="links">
    <Home v-if="!isLogin"/>
    <Mypage
      v-if="isLogin"
      :user="userData"/>
    <div>
      <h2>
        客様一覧
      </h2>
    </div>
    <div id="app">

    </div>


  </div>


  <!-- <div>
  <h1>1231231</h1>
  </div> -->
</template>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
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
    // console.log(user);
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
