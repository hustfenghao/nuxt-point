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
    <div>
      <add/>
    </div>
    <div
    id="app">
    <nuxt-link to="/shop/guest">add</nuxt-link>
    </div>


  </div>


 </template>

<script>
var database = firebase.database();
import firebase from '@/plugins/firebase'
import ElementUI from '@/plugins/element-ui'
import Home from '~/components/Home.vue'
import Mypage from '~/components/Mypage.vue'
export default {
  components: {
    Home,
    Mypage,
  },
  methods: {
    },
asyncData (context) {
   // コンポーネントをロードする前に毎回呼び出されます
   return { name: 'Hello, World！！', isLogin:false, userData:null}
 },
// Vue.prototype.changeData = function (){//changeData是函数名
//    alert('执行成功');
//  },
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
