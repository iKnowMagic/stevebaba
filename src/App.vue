<template>
  <div id="app">
    <transition name="fade" mode="out-in"> <router-view /> </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: opacity;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
