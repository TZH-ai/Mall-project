<!-- Login.vue -->
<template>
  <div class="login-container">
    <div class="login-box">
      <el-row>
        <el-col :span="12" >ddd</el-col>
        <el-col :span="12" >
          <h2>Login</h2>
          <el-form >
            <el-form-item label="">
              <label for="username">Username:</label>
              <el-input
                v-model="username"
                type="primary"
                id="username"
                name="username"
                required
                :prefix-icon="User"
              ></el-input>
            </el-form-item>

            <el-form-item label="">
              <label for="password">Password:</label>
              <el-input
                v-model="password"
                type="password"
                id="password"
                name="password"
                required
                :prefix-icon="Lock"
                show-password
              />
            </el-form-item>

          <el-form-item label="">
            <el-button type="submit" @click="login" :loading="loading">Login</el-button>
          </el-form-item>
          </el-form></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref,reactive } from "vue";
import { useRouter } from "vue-router";
import {User,Lock} from "@element-plus/icons-vue"
import  useUserStore from '@/store/modules/user'
import {ElNotification} from 'element-plus'
import {getTime} from '@/utils/time'
const username = ref("");
const password = ref("");
const $router = useRouter();
let useStore =useUserStore()
let loading=ref(false);

const loginForm = reactive({
  username: 'admin',
  password: '111111',
  verifyCode: '1234',
})


const login = async () => {
  console.log('333')
  loading.value=true
  // 在这里处理登录逻辑，可以使用 Vue Router 进行页面跳转
  // console.log("Logging in with:", {
  //   username: username.value,
  //   password: password.value,
  // });
try {
  await useStore.userLogin(loginForm);
  $router.push('/Home');
  ElNotification({
    type:'success',
    message:'欢迎回来',
    title:`Hi,${getTime()}好`
  })
  loading.value=false
} catch (error) {
  ElNotification({
    type:'error',
    message:'登录失败'
  })
  loading.value=false
}
  
 
 
};
</script>

<style scoped>
/* 样式可以根据需求进行调整 */
.login-container {
  background: url("../img/bj.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
}

.login-box {
  position: relative;
  width: 80%;
  height: 80vh;
  background:url('../img/loginbg.jpg') no-repeat;
  background-size: cover;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #333333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
