<template>
  <div class="guestInformation">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"  class="demo-ruleForm">
    <el-form-item label="名前" prop="name">
    <el-input class="form1" v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="性別" prop="gender">
    <el-select v-model="ruleForm.gender" placeholder="性別を選んでください">
      <el-option label="男性" value="男性"></el-option>
      <el-option label="女性" value="女性"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item class="form2" label-width="120px" label="メール" prop="mail">
    <el-input v-model="ruleForm.mail"></el-input>
    </el-form-item>
    <el-form-item class="form3" label="住所" prop="address">
    <el-input v-model="ruleForm.address"></el-input>
    </el-form-item>
    <el-form-item class="form4" label="電話番号" prop="telphone">
    <el-input v-model="ruleForm.telphone"></el-input>
    </el-form-item>
    <el-form-item class="form5" label="クーポン" prop="coupon">
    <el-input v-model="ruleForm.coupon"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button @click="resetForm('ruleForm')">save</el-button>
    <el-button @click="resetForm('ruleForm')">reset</el-button>
    </el-form-item>
    </el-form>

  </div>


</template>


<script>
import Home from '~/components/Home.vue'
import Mypage from '~/components/Mypage.vue'
import firebase from '@/plugins/firebase'
import ElementUI from '@/plugins/element-ui'
export default {
  data() {
      return {
        ruleForm: {
          name: '',
          gender: '',
          mail:'',
          address:'',
          telphone:'',
          coupon:'',
        },
        rules:{
          name: [
                     { required: true, message: '名前を入力してください', trigger: 'blur' },
                ],
          gender: [
             { required: true, message: '性別を入力してください', trigger: 'change' },
          ],
          mail:[
               { required: true, message: 'メールを入力してください', trigger: 'blur' },
             ],
          address:[
             { required: true, message: '住所を入力してください', trigger: 'blur' },
          ],
          telphone:[
             { required: true, message: '電話番号を入力してください', trigger: 'blur' },
          ],
          coupon:[
             { required: true, message: 'クーポン情報を入力してください', trigger: 'blur' },
          ]



        }
}
},
methods: {

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
//   function writeUserData(userId, name, email, ) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//     });
// }
  }

</script>

<style scoped>
.form1 {
  width:15vw;
  }
.form2 {
  width:30vw;
    }
.form3 {
    width:30vw;
    }
.form4 {
    width:30vw;
      }
.form5 {
  width:30vw;
}

</style>
