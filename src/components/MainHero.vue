<template lang="pug">
div.flex.flex-col.main-hero.min-h-screen.justify-center
  div.border-white-800(class="desktop:border-l-5 desktop:pl-14")
    span.text-yellow-200.fix-spacing.text-base #konference distancni vzdelavani 2021
    h1.text-white.font-bold.text-3xl.mt-2(class="w-2/5 desktop:text-4xl mobile:w-2/3 mobile:text-2xl") Konference k distančnímu vzdělávání 2021
    h2.text-white.text-2xl.mt-5 23.6. - 24.6.2021
  div.heroimage(class="mobile:hidden tablet:w-2/3 desktop:w-auto")
    webp-image(
          src="/images/hero.webp"
          src-fallback="/images/hero.png"
          alt="Ilustrační obrázek"
          dimensions="640x354")
</template>
<style lang="sass" scoped>
@import '../assets/utils/breakpoints.sass'
.main-hero
  position: relative
  padding: 0 10%
  background: linear-gradient(238.87deg, #E19FC9 0.52%, #E8BB8F 100%)
  min-height: 700px
  +mobile
    min-height: 70vh
  h1
    line-height: 1.4

.heroimage
  position: absolute
  right: 0px
  bottom: 0px

.fix-spacing
  word-spacing: -0.2rem
</style>
