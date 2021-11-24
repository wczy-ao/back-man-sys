<template>
  <div class="login"><login-panl /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanl from './cpn/login-panl.vue'
export default defineComponent({
  components: {
    LoginPanl
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
