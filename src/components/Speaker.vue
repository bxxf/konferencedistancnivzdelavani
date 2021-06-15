<template>
  <div
    class="speaker grid desktop:grid-cols-2 grid-rows-1 items-center grid-cols-1"
  >
    <div
      :class="[
        !right ? 'desktop:order-1' : 'desktop:order-2 desktop:justify-self-end',
        'speaker__image mt-12 desktop:mt-0 order-2 justify-self-center desktop:justify-self-start',
      ]"
    >
      <webp-image
        :src="'/images/speakers/' + image + '.webp'"
        :src-fallback="'/images/speakers/' + image + '.png'"
        :alt="name"
        dimensions=""
      />
    </div>
    <div
      :class="[
        !right ? 'desktop:order-2' : 'desktop:order-1',
        'order-1 justify-self-center desktop:justify-self-start flex flex-col items-center desktop:items-start w-full',
      ]"
    >
      <div class="mb-3 desktop:w-3/4 text-center">
        <p
          class="text-secondary text-xl uppercase desktop:text-left mobile:text-base"
        >
          {{ caption }}
        </p>
      </div>
      <div>
        <h1
          class="text-3xl text-primary text-center desktop:text-left mobile:text-2xl"
        >
          {{ name }}
        </h1>
      </div>
      <hr class="my-4 decoration bg-gray-300 w-1/2" />
      <div>
        <p
          class="text-lg text-primary text-center desktop:text-left mobile:text-sm"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  caption: String,
  description: String,
  image: String,
  right: Boolean,
})
</script>

<style lang="sass" scoped>
.speaker
  padding: 5% 10%
  .decoration
    height: 4px
  .speaker__image
    max-width: 400px
    max-height: 400px
</style>
