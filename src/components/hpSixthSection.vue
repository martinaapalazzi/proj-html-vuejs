<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      somethingToBeProudOf: [
        {
          firstNumber: 0,
          text: "Years of Experience",
        },
        {
          firstNumber: 0,
          text: "Everyday Online Delivery",
        },
        {
          firstNumber: 0,
          text: "Client Satyisfaction",
        },
        {
          firstNumber: 0,
          text: "Award Winning",
        },
      ],
    };
  },
  props: {},
  methods: {},
  mounted() {
    setInterval(() => {
      if (this.somethingToBeProudOf[0].firstNumber < 29) {
        this.somethingToBeProudOf[0].firstNumber++;
      }
    }, 4000 / 29);

    setInterval(() => {
      if (this.somethingToBeProudOf[1].firstNumber < 200) {
        this.somethingToBeProudOf[1].firstNumber++;
      }
    }, 4000 / 200);

    setInterval(() => {
      if (this.somethingToBeProudOf[2].firstNumber < 20) {
        this.somethingToBeProudOf[2].firstNumber++;
      }
    }, 4000 / 20);

    setInterval(() => {
      if (this.somethingToBeProudOf[3].firstNumber < 30) {
        this.somethingToBeProudOf[3].firstNumber++;
      }
    }, 4000 / 30);
  },
};
</script>

<template>
  <section id="sixth-section">
    <div class="container mb-5">
      <div class="row h-100">
        <div v-for="(elem, i) in somethingToBeProudOf" class="col-3 h-100">
          <div
            class="h-100 border-test d-flex justiy-content-center align-items-center"
          >
            <div class="w-100 text-center">
              <div>
                <h1 class="my-orange">
                  {{ elem.firstNumber }}
                  <span v-if="elem.text != 'Client Satyisfaction'">+</span>
                  <span v-if="elem.text == 'Client Satyisfaction'">K</span>
                </h1>
              </div>
              <div>
                <h4 class="text-white">{{ elem.text }}</h4>
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
#sixth-section {
  .container {
    height: 300px;
    background-image: url("../assets/img/shop-bg-img.jpg");
    background-size: cover;
  }
  .my-orange {
    font-size: 4em;
  }
}
</style>
