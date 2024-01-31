<script>
import axios from "axios";
import { store } from "../store.js";
import SingleProductApp from "./SingleProductApp.vue";

export default {
  data() {
    return {
      store,
      // DATI PRIMA SEZIONE
      sliderImg: [
        {
          imgPath: "/src/assets/img/slider.jpg",
        },
        {
          imgPath: "/src/assets/img/H3-slider3.jpg",
        },
      ],
      activeSlideIndex: 0,
      // DATI SECONDA SEZIONE
      secondSectionImg: [
        { imgPath: "/src/assets/img/fe1.jpg", text: "Fresh Juice" },
        { imgPath: "/src/assets/img/fe2.jpg", text: "Fresh Fruits" },
        { imgPath: "/src/assets/img/fe3.jpg", text: "Dairy Items" },
        { imgPath: "/src/assets/img/fe1.jpg", text: "Vegetable" },
        { imgPath: "/src/assets/img/fe2.jpg", text: "Organic orange" },
        { imgPath: "/src/assets/img/fe3.jpg", text: "Fresh Juice" },
      ],
      // DATI TERZA SEZIONE
      thirdSectionMainItemsList: [
        "All Product",
        "Apple",
        "Food",
        "Orange",
        "Vegetable",
      ],
      // DATI QUARTA SEZIONE
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
      // DATI QUINTA SEZIONE
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
      // DATI SESTA SEZIONE
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
  components: {
    SingleProductApp,
  },
  methods: {
    // FUNZIONI PRIMA SEZIONE
    nextPhoto() {
      if (this.activeSlideIndex < this.sliderImg.length - 1) {
        this.activeSlideIndex++;
      } else {
        this.activeSlideIndex = 0;
      }
    },
    previousPhoto() {
      if (this.activeSlideIndex > 0) {
        this.activeSlideIndex--;
      } else {
        this.activeSlideIndex = this.sliderImg.length - 1;
      }
    },
    // FUNZIONI SECONDA SEZIONE
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
    // FUNZIONI QUARTA SEZIONE
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
  mounted() {
    setInterval(() => {
      if (this.somethingToBeProudOf[0].firstNumber < 29) {
        this.somethingToBeProudOf[0].firstNumber++;
      }
    }, 3000 / 29);

    setInterval(() => {
      if (this.somethingToBeProudOf[1].firstNumber < 200) {
        this.somethingToBeProudOf[1].firstNumber++;
      }
    }, 3000 / 200);

    setInterval(() => {
      if (this.somethingToBeProudOf[2].firstNumber < 20) {
        this.somethingToBeProudOf[2].firstNumber++;
      }
    }, 3000 / 20);

    setInterval(() => {
      if (this.somethingToBeProudOf[3].firstNumber < 30) {
        this.somethingToBeProudOf[3].firstNumber++;
      }
    }, 3000 / 30);
  },
};
</script>

<template>
  <div class="home-page-container">
    <section id="first-section" class="mb-5">
      <div class="slider-container">
        <div v-for="(elem, i) in sliderImg">
          <div v-if="i == activeSlideIndex" class="img-container">
            <img class="h-100" :src="elem.imgPath" alt="" />
            <div @click="previousPhoto()" class="previous-button text-white">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div @click="nextPhoto()" class="next-button text-white">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="title-container text-white text-center">
              <h5>GOGRIN ORGANIC FOOD STORE</h5>
              <h1 class="mb-3">
                Eating naturally & organic is always be healthy
              </h1>
              <button class="about-us-button border-0 me-2 text-white">
                ABOUT US
              </button>
              <button class="our-history-button border-0 ms-2 text-white">
                OUR HISTORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- NELLA PRIMA SEZIONE MANCA LA SCORREVOLEZZA DEL CAROSELLO -->
    <section id="second-section" class="mb-5">
      <div class="my-container">
        <div class="row mb-3">
          <div class="col-6">
            <h1 class="my-green">
              <span class="my-orange">Look what</span> consumer power has done
              with <span class="my-orange">organic food</span>; we can do the
              same with clothes.
            </h1>
          </div>
          <div class="col-6">
            <p>
              I have a need to make these sorts of connections literal
              sometimes, and a vehicle often helps to do that. I have a
              relationship to hosting culture.
              <span class="my-orange"
                >It isn't really about it helps to do that. I have a
                relationship to hosting culture.</span
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
              <div
                v-if="i >= 0 && i < 4"
                class="position-relative img-container"
              >
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
      <!-- NELLA SECONDA SEZIONE MANCA L'ICONA CHE SI MUOVA A DESTRA E SINISTRA E L'OVERLAY CHE SI ESPANDE GRADUALMENTE -->
    </section>
    <section id="third-section">
      <div class="container mb-5">
        <h4 class="text-center my-orange pt-5">Trending online store</h4>
        <h1 class="text-center text-white pt-3">
          GOGRIN ALL <span class="my-orange">ORGANIC</span> FOOD
        </h1>
        <div class="d-flex justify-content-center mt-5 mb-5">
          <ul class="d-flex p-0">
            <li
              v-for="(elem, i) in thirdSectionMainItemsList"
              class="ms-3 me-3"
            >
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
      <!-- NELLA TERZA SEZIONE MANCA L'OPZIONE CHE TI SELEZIONA I CIBI IN BASE AL TIPO CLICCATO NELLA NAV -->
    </section>
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
      <!-- NELLA QUARTA SEZIONE VA MESSA L'OPZIONE PER FISSARE IL COLORE DEL BOTTONE AL CLICK... -->
    </section>
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
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
// GENERAL
.my-orange {
  color: $mainOrange;
}
.my-green {
  color: $mainGreen;
}
.item-active {
  display: block;
}

#first-section {
  font-family: "Barlow Condensed", sans-serif;

  .slider-container {
    .img-container {
      height: 950px;
      position: relative;
      img {
        object-fit: cover;
      }
      .previous-button {
        position: absolute;
        top: calc(950px / 2);
        left: 25px;
        transform: translateY(-50%);
        font-size: 3em;
        cursor: pointer;
        .chevron-container {
          width: 60px;
          height: 60px;
        }
      }
      .previous-button i:hover {
        padding: 12px;
        color: $mainOrange;
        background-color: white;
        border-radius: 6px;
        transition: 0.7s;
      }
      .next-button {
        position: absolute;
        top: calc(950px / 2);
        right: 25px;
        transform: translateY(-50%);
        font-size: 3em;
        cursor: pointer;
      }
      .next-button i:hover {
        padding: 12px;
        color: $mainOrange;
        background-color: white;
        border-radius: 6px;
        transition: 0.7s;
      }
      .title-container {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
          font-size: 5em;
        }
        .about-us-button {
          background-color: $mainOrange;
          padding: 16px 50px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .about-us-button:hover {
          background-color: $mainGreen;
          transition: 1s;
        }
        .our-history-button {
          background-color: $mainGreen;
          padding: 16px 50px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .our-history-button:hover {
          background-color: $mainOrange;
          transition: 1s;
        }
      }
    }
  }
}
#second-section {
  font-family: "Barlow Condensed", sans-serif;
  .my-container {
    width: 70vw;
    margin: 0 auto;
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
