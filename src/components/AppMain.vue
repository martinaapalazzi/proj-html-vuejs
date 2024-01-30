<script>
import axios from "axios";
import { store } from "../store.js";

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
      secondSectionImg: [
        { imgPath: "/src/assets/img/fe1.jpg", text: "Fresh Juice" },
        { imgPath: "/src/assets/img/fe2.jpg", text: "Fresh Fruits" },
        { imgPath: "/src/assets/img/fe3.jpg", text: "Dairy Items" },
        { imgPath: "/src/assets/img/fe1.jpg", text: "Vegetable" },
        { imgPath: "/src/assets/img/fe2.jpg", text: "Organic orange" },
        { imgPath: "/src/assets/img/fe3.jpg", text: "Fresh Juice" },
      ],
    };
  },
  components: {},
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
    nextPhotoTwo() {
      // input:  [3, 5, 1, 7, 9, 12]
      // output: [12, 3, 5, 1, 7, 9]

      // const items = [3, 5, 1, 7, 9, 12];
      // items.slice(2, 4) // returns [1, 7]
      // items.slice(1, 5) // returns [5, 1, 7, 9]

      const lastItem = this.secondSectionImg[this.secondSectionImg.length - 1];
      this.secondSectionImg = [
        lastItem,
        ...this.secondSectionImg.slice(0, this.secondSectionImg.length - 1),
      ];
    },
    previousPhotoTwo() {
      // input:  [3, 5, 1, 7, 9, 12]
      // output: [5, 1, 7, 9, 12, 3]
      const firstItem = this.secondSectionImg[0];
      this.secondSectionImg = [
        ...this.secondSectionImg.slice(1, this.secondSectionImg.length),
        firstItem,
      ];
    },
  },
};
</script>

<template>
  <div class="home-page-container">
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
    <section id="second-section" class="mb-5">
      <div class="my-container">
        <div class="row mb-3">
          <div class="col-6">
            <h1 class="my-green">
              <span class="my-orange">Look what</span> consumer power has done
              with <span class="my-orange">organic food</span>; we can do the
              same with clothes.
            </h1>
          </div>
          <div class="col-6">
            <p>
              I have a need to make these sorts of connections literal
              sometimes, and a vehicle often helps to do that. I have a
              relationship to hosting culture.
              <span class="my-orange"
                >It isn't really about it helps to do that. I have a
                relationship to hosting culture.</span
              >
            </p>
            <p>
              Need to make these sorts of connections literal sometimes, and a
              vehicle often helps to do that. I have a relationship to hosting
              culture.
            </p>
          </div>
        </div>
        <div class="hard-carousel-container position-relative">
          <div class="row">
            <div
              v-for="(elem, i) in secondSectionImg"
              :class="{ 'col-3': i >= 0 && i < 4 }"
            >
              <div
                v-if="i >= 0 && i < 4"
                class="position-relative img-container"
              >
                <div class="overlay">
                  <div
                    class="h-100 d-flex justify-content-center align-items-end"
                  >
                    <h2 class="text-white pb-3">
                      {{ elem.text }}
                    </h2>
                  </div>
                </div>
                <img :src="secondSectionImg[i].imgPath" alt="" />
              </div>
            </div>
          </div>
          <div @click="previousPhotoTwo" class="previous-button">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div @click="nextPhotoTwo" class="next-button">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
    <section id="third-section">
      <div class="container"></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
// GENERAL
.my-orange {
  color: $mainOrange;
}
.my-green {
  color: $mainGreen;
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
#second-section {
  .my-container {
    width: 70vw;
    margin: 0 auto;
  }
  h1 {
    font-weight: bold;
  }
  .previous-button {
    width: 50px;
    height: 50px;
    color: white;
    font-size: 2em;
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%);
    background-color: $mainOrange;
    cursor: pointer;
    display: none;
  }
  .previous-button:hover {
    background-color: $mainGreen;
    transition: 1s;
  }
  .next-button {
    width: 50px;
    height: 50px;
    color: white;
    font-size: 2em;
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    background-color: $mainOrange;
    cursor: pointer;
    display: none;
  }
  .next-button:hover {
    background-color: $mainGreen;
    transition: 1s;
  }
  .hard-carousel-container:hover .previous-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hard-carousel-container:hover .next-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
  }
  .img-container:hover .overlay {
    display: block;
  }
}
</style>
