<template lang="pug">
div
  picture
    source(:srcset="src" type="image/webp")
    img(aria-hidden="true" loading="eager" :width="width" :class="class" :height="height" :src="srcFallback" :alt="alt")
</template>
<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  srcFallback: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  dimensions: {
    type: String,
    default: '100x100',
  },
  class: {
    type: String,
    default: '',
  },
})

const { dimensions } = toRefs(props)

const width = computed(() => dimensions.value.split('x')[0])
const height = computed(() => dimensions.value.split('x')[1])
</script>
