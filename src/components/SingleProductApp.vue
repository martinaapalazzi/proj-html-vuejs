<script>
export default {
  data() {
    return {};
  },
  props: {
    path: String,
    name: String,
    price: String,
    oldPrice: String,
    sale: Boolean,
  },
};
</script>

<template>
  <div class="col-3 item-container">
    <div class="position-relative">
      <img :src="path" alt="" />
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
      <div v-if="sale" class="sale-container">SALE!</div>
    </div>
    <h3 class="text-white text-center mt-3 mb-3">{{ name }}</h3>
    <p class="my-orange text-center mb-5">
      <span v-if="oldPrice != ''" class="crossed-line pe-2">{{
        oldPrice
      }}</span>
      <span>{{ price }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
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
</style>
