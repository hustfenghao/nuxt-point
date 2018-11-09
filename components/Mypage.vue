
<template>
  <div id="Mypage">
    <span>こんにちは, {{ user.displayName }}さん</span>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Mypage',
  props: {
    user: {
      type: String,
      required: true,

    }

},
  methods: {
    logout: function() {
      firebase.auth().signOut();
      router.go(-1);
    }
  }
}
</script>
