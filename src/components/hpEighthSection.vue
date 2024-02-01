<script>
import { store } from "../store";

export default {
  data() {
    return { store };
  },
  props: {},
  methods: {},
};
</script>

<template>
  <section id="eighth-section">
    <div class="container mb-5">
      <div class="w-75 my-margin-zero-auto">
        <div class="apointment-container text-white">
          <h4 class="text-center mb-3">
            HERE YOU CAN GET 100% FRESH ORGANIC FOOD
          </h4>
          <h1 class="text-center mb-3">
            Best organic food up to 25% off for all product
          </h1>
          <p class="text-center mb-5">
            The most beautiful people we have known are those who have known
            defeat, known suffering, known struggle, known loss, and have found
            their way out of those depths. The most beautiful people we have
            known are those who have known defeat, known suffering
          </p>
          <div class="d-flex justify-content-center">
            <div class="number-button-container me-1">
              <button class="border-0 text-white">
                <i class="fa-solid fa-phone-volume"></i> +088123 56 906
              </button>
            </div>
            <div class="apointment-button-container ms-1">
              <button class="border-0 text-white">APOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.my-margin-zero-auto {
  margin: 0 auto;
}
.text-underlined {
  text-decoration: underline;
}
.my-orange {
  color: $mainOrange;
}
.my-green {
  color: $mainGreen;
}
.item-active {
  display: block;
}

#eighth-section {
  .container {
    background-image: url("../assets/img/call-to-bg.jpg");
    background-size: cover;
    .apointment-container {
      padding: 100px 0;
      h1 {
        font-size: 2.5em;
        font-weight: bold;
      }
    }
  }
  .number-button-container button {
    padding: 12px 36px;
    background-color: $mainOrange;
    border-radius: 8px;
  }
  .apointment-button-container button {
    padding: 12px 36px;
    background-color: $mainGreen;
    border-radius: 8px;
  }
  .number-button-container button:hover {
    background-color: $mainGreen;
    transition: 1s;
  }
  .apointment-button-container button:hover {
    background-color: $mainOrange;
    transition: 1s;
  }
}
</style>
