<template>
  <div
    id="partners"
    class="main-partners mobile:pt-22 tablet:pt-10 pb-8 justify-between items-center mobile:hidden"
  >
    <div
      class="desktop:text-3xl text-primary pb-5 mobile:text-xl tablet:text-xl"
    >
      <h3>Partneři akce</h3>
    </div>
    <div class="flex-row flex justify-between gap-8">
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/ssps.webp"
          src-fallback="/images/logos/ssps.png"
          alt="Smíchovská střední průmyslová škola partnerlogo"
          dimensions="400x110"
        />
      </div>
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/praha.webp"
          src-fallback="/images/logos/praha.png"
          alt="Praha Logo"
          dimensions="400x400"
        />
      </div>
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/msmt.webp"
          src-fallback="/images/logos/msmt.png"
          alt="MŠMT Logo"
          dimensions="400x300"
        />
      </div>
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/senat.webp"
          src-fallback="/images/logos/senat.png"
          alt="Senát Logo"
          dimensions="400x264"
        />
      </div>
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/aspen.webp"
          src-fallback="/images/logos/aspen.png"
          alt="AspenInstitute Logo"
          dimensions="400x239"
        />
      </div>
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/csu.webp"
          src-fallback="/images/logos/csu.png"
          alt="ČSU"
          dimensions="400x174"
        />
      </div>
      <div class="flex flex-col justify-center">
        <webp-image
          class="object-contain max-h-20 partnerlogo"
          src="/images/logos/ss.webp"
          src-fallback="/images/logos/ss.png"
          alt="Středoškolský sněm Logo"
          dimensions="400x337"
        />
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.main-partners
  margin-left: 10%
  margin-right: 10%
  border-bottom: 1px solid #E5E5E5
</style>
