<template>
  <el-form label-width="65px" :rules="rules" :model="phone">
    <el-form-item label="手机号" prop="phoneNum">
      <el-input v-model="phone.num" />
    </el-form-item>
    <el-form-item label="验证码" prop="verifyCode">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped llang="less">
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
