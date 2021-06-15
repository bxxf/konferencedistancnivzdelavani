<template lang="pug">
div.main-program.bg-colored(class="tablet:py-10 desktop:py-24 mobile:py-22" id="program")
  img(:src="'/images/vector38.svg'" draggable="false" alt="dekorace" class="mobile:hidden").decoration
  span.text-base.text-secondary.uppercase(class="mobile:text-sm") Program
  h3.text-primary.mb-2(class="mobile:text-xl tablet:text-xl desktop:text-3xl")  Kdy s čím můžete počítat?
  div.flex.flex-row
    router-link.text-primary.mb-8.mr-2(:to="{name: 'speakers', top: true}" class="underline mobile:text-base tablet:text-base desktop:text-lg") Seznam řečníků
    a.text-primary.mb-8.ml-2(href="/program.pdf" class="underline mobile:text-base tablet:text-base desktop:text-lg") Kompletní program
  div.content
    div.text-primary
      div
        h4.text-lg.my-4.font-bold Program 23.6.
        div.flex.flex-col(class="desktop:justify-between desktop:flex-row")
          div(class="desktop:w-1/2 tablet:pl-4 tablet:border-left-4").mr-16
            ul
              li 
                | 
                span.font-bold 10:00 - 10:30
                |  Zahájení konference
              li 
                |
                span.font-bold 10:30 - 12:00
                |  Kulatý stůl - setkání představitelů a státní správy 
              li
                |
                span.font-bold 12:00 - 13:00
                |  Prezentace - příklady dobré praxe
          div(class="desktop:w-1/2 tablet:pl-4 tablet:border-left-4")
            ul
              li
                |
                span.font-bold 13:00 - 15:00
                |  Kulatý stůl II. - představitelé škol, regionální a státní zprávy
              li
                |
                span.font-bold 15:30 - 16:00
                |  Představení projetků - příklady dobré praxe 
              li
                |
                span.font-bold 16:00 - 18:00
                |  Kulatý stůl III. - zástupci škol (ředitelé, učitelé, studenti)
      div.mt-12
        h4.text-lg.my-4.font-bold Program 24.6.
        div.flex.flex-col(class="desktop:justify-between desktop:flex-row")
          div(class="desktop:w-1/2 tablet:pl-4 tablet:border-left-4" ).mr-16
            ul
              li
                span.font-bold 10:00 - 10:15
                |  Představení projektu Komesnký 2.0
              li
                span.font-bold 10:15 - 10:30
                |  Představení projektu Zapoj se
              li
                span.font-bold 10:30 - 10:45
                |  Představení MDP a jeho akcí
              li
                span.font-bold 10:45 - 11:00
                |  Představení AR výuky
              li
                span.font-bold 11:00 - 12:30
                |  Workshop - příprava memoranda a usnesení
              li
                span.font-bold 12:30 - 13:00
                |  Příklady dobré praxe
          div(class="desktop:w-1/2 tablet:pl-4 tablet:border-left-4")
            ul
              li
                span.font-bold 13:30 - 15:00
                |  Představení skupinových výstupy z workshopů
              li
                span.font-bold 15:00 - 16:00
                |  Tvorba usnesení a memorada o spolupráci z konference
              li
                span.font-bold 16:00 - 17:30 
                |  Schválení usnesení a memoranda o spolupráci
              li
                span.font-bold 17:30 - 18:00 
                |  Networking
</template>
<style lang="sass" scoped>
.main-program
  padding-left: 10%
  padding-right: 10%
  position: relative
  .content
    line-height: 2
  .decoration
    position: absolute
    right:0
    top:0
    width: 300px
</style>
