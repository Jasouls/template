<template>
  <div class="common-page flex-column">
    <div class="common-header"></div>
    <div class="common-main flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.common-header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
}

.common-main {
  width: 100%;
}
</style>