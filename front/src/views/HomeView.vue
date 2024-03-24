<script setup lang="ts">
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="page">
    <main>
      <h1>Gérez efficacement votre stock&nbsp;!</h1>
      <RouterLink to="/stock" class="button primary">
        <span>Voir le stock</span>
        <FontAwesomeIcon :icon="faAngleRight" />
      </RouterLink>
    </main>
  </div>
</template>

<style scoped>
main {
  flex: 0;
}
</style>
