<template>
  <div
    id="contact"
    class="contact flex flex-row justify-between mobile:flex-col tablet:items-center py-24"
  >
    <div class="mr-24 mobile:mr-0">
      <h2 class="label text-secondary text-md uppercase">Kontakt</h2>

      <h3
        class="desktop:text-3xl tablet:text-2xl mb-4 mobile:text-xl font-bold text-primary"
      >
        Kontaktujte nás
      </h3>
      <div>
        <h4 class="text-base text-primary mt-2 font-bold">Odpovědná Osoba</h4>
        <p class="text-sm text-primary">Jakub Lhota</p>
        <h4 class="text-base text-primary mt-2 font-bold">Telefon</h4>
        <a class="text-sm text-primary hover:underline" href="tel:420773075110"
          >+420 773 075 110</a
        >

        <h4 class="text-base text-primary mt-2 font-bold">Email</h4>
        <a
          class="text-sm text-primary hover:underline"
          href="mailto:lhota.ja.2019@skola.ssps.cz"
        >
          lhota.ja.2019@skola.ssps.cz
        </a>
      </div>
    </div>
    <div
      class="w-3/6 mobile:w-full desktop:w-2/5 mobile:mt-8 ml-24 mobile:ml-0"
    >
      <h2 class="label text-secondary text-md uppercase">Formulář</h2>
      <h3
        class="desktop:text-3xl tablet:text-2xl mb-4 mobile:text-xl font-bold text-primary"
      >
        Máte dotaz?
      </h3>
      <div>
        <label
          for="email"
          class="text-primary uppercase text-sm mb-2 mobile:text-xs font-bold"
          >Váš Email</label
        >
        <input
          id="email"
          type="text"
          name="email"
          placeholder="vas@email.cz"
          class="textinput block px-4 text-base py-2 text-primary w-full mb-4"
          required
        />

        <label
          for="message"
          class="text-primary uppercase text-sm mb-2 mobile:text-xs font-bold"
          >Zpráva</label
        >
        <textarea
          id="message"
          name="message"
          class="textinput block px-4 text-base py-2 text-primary w-full"
          placeholder="Rád bych se zeptal na.."
          required
        />
        <button
          class="flex flex-row items-center button py-2 px-4 text-white mt-4 rounded cursor-pointer text-base mobile:text-sm"
        >
          Odeslat<svg
            width="20"
            height="20"
            fill="none"
            class="ml-4 mobile:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.796 9.697L.533.038A.368.368 0 00.01.455l1.986 8.111c.03.123.12.222.24.26l3.4 1.168-3.398 1.168a.36.36 0 00-.238.26L.01 19.545a.37.37 0 00.523.417l19.263-9.604a.38.38 0 00.166-.163.373.373 0 00-.166-.498zm-17.515 7.54l1.159-4.735 6.797-2.333a.185.185 0 000-.35L3.44 7.49 2.286 2.772l14.461 7.252-14.466 7.213z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.contact
  padding-left: 10%
  padding-right: 10%
  textarea,
  input
    &::placeholder
      color: #d6d6d6

    &:focus
      outline-color: #6190C0


  .textinput
    border: 1.5px solid #d1d1d1
    border-radius: 5px

  .button
    background: #173e66
    transition: 0.4s ease-out
    svg path
      fill: white
      transition: 0.4s ease-out
</style>
