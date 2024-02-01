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
  <section id="seventh-section">
    <div class="container mb-5">
      <h4 class="my-orange text-center">Running week top selling</h4>
      <h1 class="text-center my-green mb-5">
        TOP <span class="my-orange">TRENDING</span> ORGANIC FOOD
      </h1>
      <div class="row ps-5 pe-5">
        <div
          v-for="(elem, i) in store.food.slice(0, 4)"
          class="col-3 item-container"
        >
          <div class="position-relative my-shadow">
            <img :src="elem.imgPath" alt="" />
            <div class="icons-container">
              <div class="little-square">
                <i class="fa-solid fa-heart"></i>
              </div>
              <div class="little-square">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div class="little-square">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div>
            <div v-if="elem.sale" class="sale-container">SALE!</div>
          </div>
          <h3 class="text-center mt-3 mb-3">{{ elem.name }}</h3>
          <p class="text-center mb-5">
            <span v-if="elem.oldPrice != ''" class="crossed-line pe-2">{{
              elem.oldPrice
            }}</span>
            <span :class="{ 'text-underlined': elem.sale }">{{
              elem.price
            }}</span>
          </p>
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
#seventh-section {
  .my-shadow {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .item-container {
    h3 {
      font-weight: bold;
    }
    .crossed-line {
      text-decoration: line-through;
      opacity: 0.5;
    }
    img:hover {
      cursor: pointer;
    }
    .icons-container {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      display: none;
    }

    .little-square {
      width: 32px;
      height: 32px;
      background-color: lightgray;
      margin: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    .little-square:hover {
      background-color: $mainOrange;
      transition: 1s;
    }
  }
  .item-container:hover .icons-container {
    display: flex;
  }
  .my-orange {
    color: $mainOrange;
  }
  .sale-container {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 6px;
    background-color: $mainOrange;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
