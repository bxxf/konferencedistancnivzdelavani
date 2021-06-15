<template>
  <div
    id="about"
    class="main-about flex row justify-between items-center desktop:py-32 mobile:py-22 tablet:py-10"
  >
    <div class="text-primary text-left w-1/2 mobile:w-full">
      <span class="text-secondary text-base mobile:text-sm uppercase"
        >O Konferenci</span
      >
      <h3 class="desktop:text-3xl text-primary mobile:text-xl tablet:text-xl">
        Co Vás čeká?
      </h3>
      <a
        class="text-primary mb-6 block underline mobile:text-base tablet:text-base desktop:text-lg"
        href="./obsah.pdf"
        >Obsah konference</a
      >
      <hr class="w-3/5 decoration" />
      <p class="desktop:text-xl text-primary py-5 tablet:text-lg">
        Cílem této konference k distančnímu vzdělávání je si říci, co vše se za
        tu dobu změnilo, co bylo dobře a co zase tolik ne. Získané pozitivní
        zkušenosti musíme využít až se vrátíme zpět k prezenční výuce.
      </p>
    </div>
    <div class="w-1/4 mobile:hidden">
      <webp-image
        src="/images/about.webp"
        src-fallback="/images/about.png"
        alt="dekorativní obrázek"
        class="image"
        dimensions="496x520"
      />
    </div>
  </div>
</template>
<style lang="sass" scoped>
.main-about
  padding-left: 10%
  padding-right: 10%
  .decoration
    height: 8px
    background-color: #D46BCA
  .image
    width: 50%
</style>
