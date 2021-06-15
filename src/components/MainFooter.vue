<template>
  <footer class="block w-screen bg-gray-800">
    <div
      class="text-gray-800 flex flex-wrap justify-between mobile:flex-col mobile:justify-start py-8"
    >
      <div class="tablet:px-5 tablet:w-1/2 text-left">
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
          Odpovědná osoba
        </div>
        <p class="my-3 block text-gray-300 text-sm font-medium">Jakub Lhota</p>
        <a
          class="my-3 block text-gray-300 text-sm font-medium hover:underline"
          href="mailto:lhota.ja.2019@skola.ssps.cz"
        >
          lhota.ja.2019@skola.ssps.cz
        </a>
        <a
          class="my-3 block text-gray-300 text-sm font-medium hover:underline"
          href="tel:420773075110"
        >
          +420 773 075 110
        </a>
      </div>

      <div
        class="tablet:px-5 tablet:w-1/2 text-right tablet:self-center mobile:text-left"
      >
        <div
          class="text-xs uppercase text-gray-400 font-medium mb-4 tablet:mb-6 mobile:mt-4"
        >
          Užitečné odkazy
        </div>
        <router-link
          to="/speakers"
          class="my-2 block text-gray-300 text-sm font-medium"
        >
          Řečníci
        </router-link>
        <a
          href="/program.pdf"
          class="my-2 block text-gray-300 text-sm font-medium"
        >
          Kompletní program
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScCtXRyPIsIPtAvxkwUpo7yA9fdyTgknju8viz9z9_sr6KxQw/viewform?usp=sf_link"
          class="my-2 block text-gray-300 text-sm font-medium"
        >
          Registrace
        </a>
      </div>
    </div>

    <div class="pt-2">
      <div
        class="block justify-between flex flex-wrap pb-5 tablet:px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm"
      >
        <div class="text-left mobile:hidden">
          <router-link to="/about" class="mr-2"> O konferenci </router-link>
          <router-link to="/program" class="mx-2"> Program </router-link>
          <router-link to="/speakers" class="mx-2"> Řečníci </router-link>
        </div>
        <div class="tablet:text-right">
          <h2>
            Made with &lt;3 by<a href="https://beinhoud.com" class="w-6 mx-1"
              >Inhoud</a
            >
          </h2>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
footer
  padding: 2% 10%
  a
    @apply hover:underline
</style>
