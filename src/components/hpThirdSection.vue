<script>
import { store } from "../store";
import SingleProductApp from "./SingleProductApp.vue";

export default {
  data() {
    return {
      store,
      thirdSectionMainItemsList: [
        { id: "all", name: "All Product" },
        { id: "apple", name: "Apple" },
        { id: "food", name: "Food" },
        { id: "orange", name: "Orange" },
        { id: "vegetable", name: "Vegetable" },
      ],
      filteredStoreFood: [...store.food],
    };
  },
  props: {},
  methods: {
    selectItems(elemId) {
      if (elemId == "all") {
        this.filteredStoreFood = [...store.food];
        return;
      }

      this.filteredStoreFood = store.food.filter((elem) => {
        return elem.type.includes(elemId);
      });

      // if (i == 0) {
      //   // L'ARRAY RIMANE INVARIATO
      //   store.food = store.foodBackup;
      //   return store.food;
      // } else if (i == 1) {
      //   // L'ARRAY PRENDE SOLO GLI OGGETTI CON TYPE: 'APPLE'
      //   store.food = store.foodBackup;
      //   const elemAppleArray = store.food.filter((elem) =>
      //     elem.type.includes("apple")
      //   );
      //   store.food = elemAppleArray;
      //   return store.food;
      // } else if (i == 2) {
      //   // L'ARRAY PRENDE SOLO GLI OGGETTI NEL CUI ARRAY TYPE È PRESENTE 'FOOD'
      //   store.food = store.foodBackup;
      //   const elemFoodArray = store.food.filter((elem) =>
      //     elem.type.includes("food")
      //   );
      //   store.food = elemFoodArray;
      //   return store.food;
      // } else if (i == 3) {
      //   // L'ARRAY PRENDE SOLO GLI OGGETTI NEL CUI ARRAY TYPE È PRESENTE 'ORANGE'
      //   store.food = store.foodBackup;
      //   const elemOrangeArray = store.food.filter((elem) =>
      //     elem.type.includes("orange")
      //   );
      //   store.food = elemOrangeArray;
      //   return store.food;
      // } else if (i == 4) {
      //   // L'ARRAY PRENDE SOLO GLI OGGETTI NEL CUI ARRAY TYPE È PRESENTE 'VEGETABLE'
      //   store.food = store.foodBackup;
      //   const elemVegetableArray = store.food.filter((elem) =>
      //     elem.type.includes("vegetable")
      //   );
      //   store.food = elemVegetableArray;
      //   return store.food;
      // }
    },
  },
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
          <li
            @click="selectItems(elem.id)"
            v-for="(elem, _) in thirdSectionMainItemsList"
            class="ms-3 me-3"
          >
            {{ elem.name }}
          </li>
        </ul>
      </div>
      <div class="row ps-5 pe-5">
        <SingleProductApp
          class="my-margin-bottom"
          v-for="(elem, i) in filteredStoreFood"
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
