<template>
  <div class="container" v-if="is_register">
    <el-form ref="registerForm" :model="registerForm" label-width="100px" class="form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirm">
        <el-input type="password" v-model="registerForm.confirm" autocomplete="off"></el-input>
      </el-form-item>
      <el-radio-group v-model="usertype">
        <el-radio :label="0">顾客</el-radio>
        <el-radio :label="1">店主</el-radio>
      </el-radio-group>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button type="info" @click="gotoLogin">已有账号，前去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="container" v-if="is_login">
    <el-form ref="loginForm" :model="loginForm" label-width="100px" class="form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-radio-group v-model="usertype">
        <el-radio :label="0">顾客</el-radio>
        <el-radio :label="1">店主</el-radio>
      </el-radio-group>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">登录</el-button>
        <el-button type="info" @click="gotoRegister">未有账号，前去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default {
  data(){
    return{
      registerForm :{
        username: '',
        password: '',
        confirm: ''
      },
      loginForm:{
        username:'',
        password:''
      },
      is_register:true,
      is_login:false,
      usertype:null
    }
  },
  name: 'Auth',
  methods: {
    gotoAuth() {
      this.$router.push('/auth')
    },
    submitForm(){
      if(this.is_register){
        if (this.registerForm.password === this.registerForm.confirm){
          axios({
            method:"post",
            url:"http://localhost:8080/auth/register",
            params:{
              username:this.registerForm.username,
              password:this.registerForm.password,
              usertype:this.usertype
            }
          }).then((response)=>{
            let data =response.data;
            if (data.code === 200){
              ElMessage({
                message: '注册成功，接下来请继续登录',
                type: 'success',
              })
              this.gotoLogin();
            }else {
              ElMessage({
                message: '注册失败，请重试',
                type: 'error',
              })
            }
          })
        }else {
          ElMessage({
            message: '密码不一致，请重试',
            type: 'error',
          })
        }
      }
      if (this.is_login){
        axios({
          method:"post",
          url:"http://localhost:8080/auth/login",
          params:{
            username:this.loginForm.username,
            password:this.loginForm.password,
            usertype:this.usertype
          }
        }).then((response)=>{
          let data =response.data;
          if (data.code === 200){
            ElMessage({
              message: '登录成功，接下来将跳转',
              type: 'success',
            })
            if (this.usertype == 0){
              this.$router.push('/customer')
            }
            else if(this.usertype == 1){
              this.$router.push('/owner')
            }
          }else {
            ElMessage({
              message: '登录失败，请重试',
              type: 'error',
            })
          }
        })
      }
    },
    gotoLogin(){
      this.is_register = false;
      this.is_login = true;
    },
    gotoRegister(){
      this.is_register = true;
      this.is_login = false;
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 25px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  border-radius: 4px;
}
.form {
  margin: 20px 0;
}
</style>