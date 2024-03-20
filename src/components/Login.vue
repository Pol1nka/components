<script setup>
import LoginBlock from "@/components/LoginBlock.vue";
import Logo from "@/components/Logo.vue";
</script>

<template>
  <body>
  <div class="back">
    <div class="leftBox">
      <LoginBlock/>
    </div>
    <div class="rightBox">
      <Logo/>
    </div>
  </div>
  </body>
  <router-view></router-view>

</template>

<style scoped>
.back{
  display: flex;
  justify-content: left;
  align-items: flex-start;
}
.rightBox{
  display: flex;
  width: 50%;
  height: 100vh;
  background: white;
}
.leftBox{
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50%;
  height: 100vh;
  background: #002F55;
}
@media only screen and (max-width: 500px) {
  body {
    overflow-x: scroll;
  }
}
</style>