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
    <div
    id="app">
    <el-button type="text" @click="open3">点击打开 Message Box</el-button>
    <nuxt-link to="/shop/guest">add</nuxt-link>
    </div>


  </div>


 </template>

<script>
import Home from '~/components/Home.vue'
import Mypage from '~/components/Mypage.vue'
import firebase from '@/plugins/firebase'
import ElementUI from '@/plugins/element-ui'
export default {
  components: {
    Home,
    Mypage
  },
  methods: {
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
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
