<template>
  <div class="header flex">
    <div class="header-left flex-1">XXXX分析系统</div>
    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar>user</el-avatar>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in downList" :key="item.id">{{item.label}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { reactive } from 'vue';

const downList = reactive([
  {id: 1, label: '后台管理'},
  {id: 2, label: '重置密码'},
  {id: 3, label: '版本记录'},
  {id: 4, label: '退出登录'},
])
</script>

<style lang="less" scoped>
.header {
  line-height: 60px;
  padding: 0 20px;
  .header-right {
    width: 100px;
    text-align: right;
    .el-dropdown {
      line-height: 60px;
      .el-dropdown-link {
        outline: none;
      }
    }
  }
}
</style>