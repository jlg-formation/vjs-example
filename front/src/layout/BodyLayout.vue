<template>
  <div class="body">
    <RouterView v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
div.body {
  flex: 1;
  position: relative;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
}
</style>
