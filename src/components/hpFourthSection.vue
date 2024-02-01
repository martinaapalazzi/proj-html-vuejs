<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      descriptions: [
        {
          description:
            "'Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffine pudding tart bear claw sugar plum croissant.'. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.'",
          author: "Martha Alex",
          role: "Manager",
          visible: true,
        },
        {
          description:
            "'Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffine pudding tart bear claw sugar plum croissant.'. We started as a small legal consultancy. We have proved our competence and had many satisfied clients.'",
          author: "Parvin Khan",
          role: "Co- Of Officer",
          visible: false,
        },
      ],
      activeDescription: 0,
    };
  },
  props: {},
  methods: {
    nextDescription() {
      if (this.activeDescription == 0) {
        this.activeDescription = 1;
      } else {
        this.activeDescription = 0;
      }
    },
    previousDescription() {
      if (this.activeDescription == 1) {
        this.activeDescription = 0;
      } else {
        this.activeDescription = 1;
      }
    },
  },
};
</script>

<template>
  <section id="fourth-section">
    <div class="container mb-5 position-relative">
      <div class="slider-container-container">
        <div
          v-for="(elem, i) in descriptions"
          class="slider-container"
          :class="{ 'd-block': i == activeDescription }"
        >
          <div class="info-container text-center">
            <p class="quotation-marks">
              <i class="fa-solid fa-quote-left"></i>
            </p>
            <p class="description">{{ elem.description }}</p>
            <h2>{{ elem.author }}</h2>
            <h4 class="my-orange">{{ elem.role }}</h4>
          </div>
        </div>
        <div @click="previousDescription" class="chevron-left-container">
          <i class="fa-solid fa-chevron-left fa-2xl text-white"></i>
        </div>
        <div @click="nextDescription" class="chevron-right-container">
          <i class="fa-solid fa-chevron-right fa-2xl text-white"></i>
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
#fourth-section {
  .slider-container {
    display: none;
  }
  .container {
    .slider-container {
      width: 70%;
      margin: 0 auto;
      .info-container {
        .quotation-marks {
          font-size: 6em;
          color: $mainGreen;
        }
        .description {
          font-size: 1.5em;
        }
      }
    }
    .chevron-left-container {
      width: 60px;
      height: 60px;
      background-color: $mainOrange;
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
      cursor: pointer;
      display: none;
    }
    .chevron-right-container {
      width: 60px;
      height: 60px;
      background-color: $mainOrange;
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
      cursor: pointer;
      display: none;
    }
    .chevron-left-container:hover {
      background-color: $mainGreen;
      transition: 1s;
    }
    .chevron-right-container:hover {
      background-color: $mainGreen;
      transition: 1s;
    }
    .slider-container-container:hover .chevron-left-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slider-container-container:hover .chevron-right-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
