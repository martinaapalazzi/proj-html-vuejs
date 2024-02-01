<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      tenthSectionImg: [
        { imgPath: "/src/assets/img/brand1.png" },
        { imgPath: "/src/assets/img/brand2.png" },
        { imgPath: "/src/assets/img/brand3.png" },
        { imgPath: "/src/assets/img/brand4.png" },
        { imgPath: "/src/assets/img/brand1.png" },
        { imgPath: "/src/assets/img/brand2.png" },
      ],
    };
  },
  props: {},
  methods: {
    nextPhotoThree() {
      const lastItem = this.tenthSectionImg[this.tenthSectionImg.length - 1];
      this.tenthSectionImg = [
        lastItem,
        ...this.tenthSectionImg.slice(0, this.tenthSectionImg.length - 1),
      ];
      console.log(this.tenthSectionImg);
    },
    previousPhotoThree() {
      const firstItem = this.tenthSectionImg[0];
      this.tenthSectionImg = [
        ...this.tenthSectionImg.slice(1, this.tenthSectionImg.length),
        firstItem,
      ];
      console.log(this.tenthSectionImg);
    },
  },
};
</script>

<template>
  <section id="tenth-section">
    <div class="container mb-5">
      <div class="big-carousel-container position-relative">
        <div class="row">
          <div
            v-for="(elem, i) in tenthSectionImg"
            :class="{ col: i >= 0 && i < 5 }"
          >
            <div v-if="i >= 0 && i < 5" class="p-4">
              <img :src="elem.imgPath" alt="" />
            </div>
          </div>
        </div>
        <div @click="previousPhotoThree" class="previous-button">
          <i class="fa-solid fa-chevron-left text-white fa-2xl"></i>
        </div>
        <div @click="nextPhotoThree" class="next-button">
          <i class="fa-solid fa-chevron-right text-white fa-2xl"></i>
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
#tenth-section {
  .previous-button {
    width: 50px;
    height: 50px;
    background-color: $mainOrange;
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
  }
  .next-button {
    width: 50px;
    height: 50px;
    background-color: $mainOrange;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
  }
  .previous-button:hover {
    background-color: $mainGreen;
    transition: 1s;
  }
  .next-button:hover {
    background-color: $mainGreen;
    transition: 1s;
  }
  .big-carousel-container:hover .previous-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .big-carousel-container:hover .next-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
