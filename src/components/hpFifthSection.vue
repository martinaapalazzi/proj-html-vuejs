<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      offers: [
        {
          text: "Fresh gurden tomato combo offer... $37",
          imgPath: "src/assets/img/offer-img01.jpg",
          link: "SHOP NOW",
        },
        {
          text: "Some ogranic healty fruits combo offer... $49",
          imgPath: "src/assets/img/offer-img02.jpg",
          link: "SHOP NOW",
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<template>
  <section id="fifth-section">
    <div class="container mb-5">
      <div class="shop-now-container">
        <div class="row">
          <div v-for="(elem, i) in offers" class="col-6">
            <div class="position-relative">
              <img :src="elem.imgPath" alt="" />
              <div class="position-absolute w-75 text-white top-0">
                <h2 class="p-3">{{ elem.text }}</h2>
              </div>
              <div class="position-absolute text-white bottom-0">
                <h5 class="p-3 shop-now-link">{{ elem.link }}</h5>
              </div>
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
#fifth-section {
  .shop-now-container {
    width: 80%;
    margin: 0 auto;
    .shop-now-link {
      cursor: pointer;
    }
    .shop-now-link:hover {
      color: $mainOrange;
      transition: 1s;
    }
  }
}
</style>
