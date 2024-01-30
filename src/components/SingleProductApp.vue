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
  },
};
</script>

<template>
  <div class="col-3 item-container">
    <img :src="path" alt="" />
    <h3 class="text-white text-center mt-3 mb-3">{{ name }}</h3>
    <p class="my-orange text-center mb-5">
      <span v-if="oldPrice != ''" class="crossed-line pe-2">{{
        oldPrice
      }}</span>
      <span>{{ price }}</span>
    </p>
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
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.item-container {
  img:hover {
    cursor: pointer;
  }
  position: relative;
  .icons-container {
    position: absolute;
    top: 55%;
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
h3 {
  font-weight: bold;
}
.my-orange {
  color: $mainOrange;
}
.crossed-line {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
