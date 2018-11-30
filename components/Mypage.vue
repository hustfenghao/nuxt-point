
<template>
  <div id="Mypage">
    <span>こんにちは, {{ user.displayName }}さん</span>
    <p>{{ user.userData }}</p>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'Mypage',
  props: {
    user: {
      type: Object,
      required: true,

    }

},
  methods: {
    logout: function() {
      firebase.auth().signOut();
      this.$router.push('/')
    }

  }
}
</script>
