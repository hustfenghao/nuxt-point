<template>
  <div id="app">
    <h2>ゲスト一覧</h2>
    <button  @click="showToggle">ゲスト追加</button>
    <div v-show="isShow" >
    <input type="text" v-model="newGuestName">
    <input type="text" v-model="newGuestMail">
    <input type="text" v-model="newGuestCoupun">
    <button type="submit" v-on:click="createTodo()">ゲスト作成</button>
    </div>
    <ul v-for="(item,index) in Object.keys(message)" v-if="message">
          <td>{{message[item].name}}
          <button type="submit" v-on:click="deleteTodo(item)">delete</button>
          </td>

        </ul>
     </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
name: 'App',
data () {
  return {
    database: null,
    btnText: 'ゲスト追加',
    guestRef: null,
    newGuestName: '',
    newGuestMail: '',
    newGuestCoupun:'',
    isShow:false,
    message:[],
    arr:[]
    // todos: []
  }
},
// firestore: {
//
//             messages: db.collection("messages"),
//           },
created: function() {
  this.database = firebase.database();
  this.guestRef = this.database.ref('message');
  var _this = this;
  this.guestRef.on('value', function(snapshot) {
  _this.message = snapshot.val() || {};

    // console.log(_this.message);
    // _this.arr.push(_this.message);// データに変化が起きたときに再取得する
  });
},
  computed:{
     messages: function(){
      return this.message;
    },



},

methods:{
showToggle: function () {
    this.isShow = !this.isShow;
  },
  deleteTodo: function (item) {
    console.log(item)
    console.log(this.database.ref('message').child)
    this.database.ref('message').child(item).remove();
  },
  createTodo: function() {
    if (this.newTodoName&& this.newGuestMail == "") { return; }

    var message = {
      name :this.newGuestName,
      mail:this.newGuestMail,
      coupun:this.newGuestCoupun
    }
    //   this.todosRef.push({
    //   name: this.newGuestName,
    //   mail: this.newGuestMail,
    //   coupun:this.newGuestCoupun
    // })
    this.guestRef.push(
    message
    )
    this.newGuestName = "";
    this.newGuestMail = "";
    this.newGuestCoupun = ""
  },
}

}


</script>
