<template>
  <div class="personal-center">
    <h1 class="title">个人中心</h1>
    <el-card class="user-info">
      <p><strong>用户名：</strong>{{ user.name }}</p>
      <p><strong>年龄：</strong>{{ user.age }}</p>
      <p><strong>邮箱：</strong>{{ user.email }}</p>
    </el-card>
    <el-button @click="editUserInfo" type="primary" class="edit-button">编辑信息</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
});

const editUserInfo = () => {
  // 编辑用户信息的逻辑
};
</script>

<style scoped>
.personal-center {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.user-info {
  border: 1px solid #ebeef5;
  border-radius: 5px;
  padding: 20px;
}

.edit-button {
  margin-top: 20px;
}
</style>
