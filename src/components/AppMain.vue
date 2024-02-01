<script>
import axios from "axios";
import { store } from "../store.js";
import hpFirstSection from "./hpFirstSection.vue";
import hpSecondSection from "./hpSecondSection.vue";
import hpThirdSection from "./hpThirdSection.vue";
import hpFourthSection from "./hpFourthSection.vue";
import hpFifthSection from "./hpFifthSection.vue";
import hpSixthSection from "./hpSixthSection.vue";
import hpSeventhSection from "./hpSeventhSection.vue";
import hpEighthSection from "./hpEighthSection.vue";
import hpNinthSection from "./hpNinthSection.vue";
import hpTenthSection from "./hpTenthSection.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    hpFirstSection,
    hpSecondSection,
    hpThirdSection,
    hpFourthSection,
    hpFifthSection,
    hpSixthSection,
    hpSeventhSection,
    hpEighthSection,
    hpNinthSection,
    hpTenthSection,
  },
  methods: {},
};
</script>

<template>
  <div class="home-page-container">
    <hpFirstSection />
    <!-- NELLA PRIMA SEZIONE MANCA LA SCORREVOLEZZA DEL CAROSELLO -->
    <hpSecondSection />
    <!-- NELLA SECONDA SEZIONE MANCA L'ICONA CHE SI MUOVA A DESTRA E SINISTRA E L'OVERLAY CHE SI ESPANDE GRADUALMENTE -->
    <hpThirdSection />
    <!-- NELLA TERZA SEZIONE MANCA L'OPZIONE CHE TI SELEZIONA I CIBI IN BASE AL TIPO CLICCATO NELLA NAV -->
    <hpFourthSection />
    <!-- NELLA QUARTA SEZIONE VA MESSA L'OPZIONE PER FISSARE IL COLORE DEL BOTTONE AL CLICK... -->
    <hpFifthSection />
    <!-- ---------- -->
    <hpSixthSection />
    <!-- NELLA SESTA SEZIONE MANCA IL BORDO DESTRO A ZIG-ZAG -->
    <hpSeventhSection />
    <!-- ---------- -->
    <hpEighthSection />
    <!-- ---------- -->
    <hpNinthSection />
    <!-- MANCA L'OVERLAY! -->
    <hpTenthSection />
    <!-- ---------- -->
  </div>
</template>

<style lang="scss" scoped></style>
