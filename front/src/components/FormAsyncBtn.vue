<script setup lang="ts">
import { faCircleNotch, type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { onMounted } from 'vue'

const props = defineProps<{
  icon: IconDefinition
  isSubmiting: boolean
}>()

onMounted(() => {})
</script>

<template>
  <button class="primary" type="submit" :disabled="props.isSubmiting">
    <FontAwesomeIcon
      :icon="props.isSubmiting ? faCircleNotch : props.icon"
      :spin="props.isSubmiting"
    />
    <slot></slot>
  </button>
</template>

<style scoped></style>
