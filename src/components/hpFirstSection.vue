<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      sliderImg: [
        {
          imgPath: "/src/assets/img/slider.jpg",
        },
        {
          imgPath: "/src/assets/img/H3-slider3.jpg",
        },
      ],
      activeSlideIndex: 0,
    };
  },
  props: {},
  methods: {
    nextPhoto() {
      if (this.activeSlideIndex < this.sliderImg.length - 1) {
        this.activeSlideIndex++;
      } else {
        this.activeSlideIndex = 0;
      }
    },
    previousPhoto() {
      if (this.activeSlideIndex > 0) {
        this.activeSlideIndex--;
      } else {
        this.activeSlideIndex = this.sliderImg.length - 1;
      }
    },
  },
};
</script>

<template>
  <section id="first-section" class="mb-5">
    <div class="slider-container">
      <div v-for="(elem, i) in sliderImg">
        <div v-if="i == activeSlideIndex" class="img-container">
          <img class="h-100" :src="elem.imgPath" alt="" />
          <div @click="previousPhoto()" class="previous-button text-white">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="nextPhoto()" class="next-button text-white">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div class="title-container text-white text-center">
            <h5>GOGRIN ORGANIC FOOD STORE</h5>
            <h1 class="mb-3">
              Eating naturally & organic is always be healthy
            </h1>
            <button class="about-us-button border-0 me-2 text-white">
              ABOUT US
            </button>
            <button class="our-history-button border-0 ms-2 text-white">
              OUR HISTORY
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
// GENERAL
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
#first-section {
  font-family: "Barlow Condensed", sans-serif;

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
      .title-container {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
          font-size: 5em;
        }
        .about-us-button {
          background-color: $mainOrange;
          padding: 16px 50px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .about-us-button:hover {
          background-color: $mainGreen;
          transition: 1s;
        }
        .our-history-button {
          background-color: $mainGreen;
          padding: 16px 50px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .our-history-button:hover {
          background-color: $mainOrange;
          transition: 1s;
        }
      }
    }
  }
}
</style>
