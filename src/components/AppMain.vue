<script>
import axios from "axios";
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {},
  methods: {},
};
</script>

<template>
  <div class="home-page-container">
    <section id="first-section">
      <div class="slider-container">
        <div class="img-container">
          <img class="h-100" src="../assets/img/slider.jpg" alt="" />
          <div class="previous-button text-white">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div class="next-button text-white">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <!-- <div class="img-container">
          <img class="h-100" src="../assets/img/H3-slider3.jpg" alt="" />
        </div> -->
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
#first-section {
  .slider-container {
    .img-container {
      height: 950px;
      position: relative;
      img {
        object-fit: cover;
      }
      .previous-button {
        position: absolute;
        top: calc(950px / 2);
        left: 25px;
        transform: translateY(-50%);
        font-size: 3em;
        cursor: pointer;
        .chevron-container {
          width: 60px;
          height: 60px;
        }
      }
      .previous-button i:hover {
        padding: 12px;
        color: $mainOrange;
        background-color: white;
        border-radius: 6px;
        transition: 0.7s;
      }
      .next-button {
        position: absolute;
        top: calc(950px / 2);
        right: 25px;
        transform: translateY(-50%);
        font-size: 3em;
        cursor: pointer;
      }
      .next-button i:hover {
        padding: 12px;
        color: $mainOrange;
        background-color: white;
        border-radius: 6px;
        transition: 0.7s;
      }
    }
  }
}
</style>
