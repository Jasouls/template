<template>
  <div class="login-page">
    <div class="login-block">
      <h2>登录</h2>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="UserName" prop="username">
          <el-input v-model.number="ruleForm.username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Submit</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import store from '@/store';
import router from '@/router';

const ruleFormRef = ref()

const validateUser = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    callback()
  }
}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  password: [{ validator: validatePass, trigger: 'blur' }],
  username: [{ validator: validateUser, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      store.dispatch('UserLogin', ruleForm).then(() => {
        router.push({ name: 'home' });
      });
    } else {
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-color: #bfa;
  position: relative;
  .login-block {
    width: 400px;
    height: 240px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid black;
    padding: 20px 80px 40px 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    h2 {
      text-align: center;
      margin-bottom: 20px;
      transform: translateX(40px);
    }
  }
}
</style>