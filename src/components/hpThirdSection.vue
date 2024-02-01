<script>
import { store } from "../store";
import SingleProductApp from "./SingleProductApp.vue";

export default {
  data() {
    return {
      store,
      thirdSectionMainItemsList: [
        "All Product",
        "Apple",
        "Food",
        "Orange",
        "Vegetable",
      ],
    };
  },
  props: {},
  methods: {},
  components: {
    SingleProductApp,
  },
};
</script>

<template>
  <section id="third-section">
    <div class="container mb-5">
      <h4 class="text-center my-orange pt-5">Trending online store</h4>
      <h1 class="text-center text-white pt-3">
        GOGRIN ALL <span class="my-orange">ORGANIC</span> FOOD
      </h1>
      <div class="d-flex justify-content-center mt-5 mb-5">
        <ul class="d-flex p-0">
          <li v-for="(elem, i) in thirdSectionMainItemsList" class="ms-3 me-3">
            {{ elem }}
          </li>
        </ul>
      </div>
      <div class="row ps-5 pe-5">
        <SingleProductApp
          class="my-margin-bottom"
          v-for="(elem, i) in store.food"
          :path="elem.imgPath"
          :name="elem.name"
          :price="elem.price"
          :oldPrice="elem.oldPrice"
          :sale="elem.sale"
        />
      </div>
      <div class="d-flex justify-content-center">
        <button class="border-0 me-2 text-white mb-5">ALL PRODUCTS</button>
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

#third-section {
  font-family: "Barlow Condensed", sans-serif;
  .container {
    background-image: url("../assets/img/shop-bg-img.jpg");
    background-size: cover;
    h1 {
      font-weight: bold;
    }
    ul {
      list-style-type: none;
      li {
        color: white;
        cursor: pointer;
      }
      li:hover {
        color: $mainOrange;
        transition: 1s;
      }
    }
    .row {
      .my-margin-bottom {
        margin-bottom: calc((var(--bs-gutter-x) * 0.5) * 2);
      }
    }
  }
  button {
    background-color: $mainOrange;
    padding: 16px 50px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  button:hover {
    background-color: $mainGreen;
    transition: 1s;
  }
}
</style>
