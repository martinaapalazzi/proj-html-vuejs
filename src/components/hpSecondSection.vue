<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
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
  props: {},
  methods: {
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
  <section id="second-section" class="mb-5">
    <div class="my-container position-relative">
      <div class="position-absolute fe-shap-container">
        <img src="../assets/img/fe-shap1-1.png" alt="" />
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <h1 class="my-green">
            <span class="my-orange">Look what</span> consumer power has done
            with <span class="my-orange">organic food</span>; we can do the same
            with clothes.
          </h1>
        </div>
        <div class="col-6">
          <p>
            I have a need to make these sorts of connections literal sometimes,
            and a vehicle often helps to do that. I have a relationship to
            hosting culture.
            <span class="my-orange"
              >It isn't really about it helps to do that. I have a relationship
              to hosting culture.</span
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
            <div v-if="i >= 0 && i < 4" class="position-relative img-container">
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

#second-section {
  font-family: "Barlow Condensed", sans-serif;
  .my-container {
    width: 70vw;
    margin: 0 auto;
    .fe-shap-container {
      animation-name: right-and-left;
      animation-duration: 4.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes right-and-left {
      0% {
        right: -330px;
      }
      25% {
        right: -360px;
      }
      50% {
        right: -330px;
      }
      75% {
        right: -300px;
      }
      100% {
        right: -330px;
      }
    }
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
