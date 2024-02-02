<script>
import hpThirdSection from "./hpThirdSection.vue";
import { store } from "../store.js";
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      store,
      fruits: [
        {
          image: "/src/assets/img/cabbage-1.png",
          name: "Natural Cabbage",
        },
        {
          image: "/src/assets/img/tomato-1.png",
          name: "Fresh Tomato",
        },
        {
          image: "/src/assets/img/spinach-1.png",
          name: "Organic Spinach",
        },
        {
          image: "/src/assets/img/carrots-1.png",
          name: "Natural Carrots",
        },
        {
          image: "/src/assets/img/grapes-1.png",
          name: "Organic Grapes",
        },
        {
          image: "/src/assets/img/apple-1.png",
          name: "Fresh Apple",
        },
        {
          image: "/src/assets/img/broccoli-1.png",
          name: "Natural Farming",
        },
        {
          image: "/src/assets/img/eggplant-1.png",
          name: "Organic Eggplant",
        },
      ],
      qualities: [
        {
          image: "/src/assets/img/qualities.png",
          title: "Natural Farming",
          info: "we have a need to make these the of connections literal.",
        },
        {
          image: "/src/assets/img/qualities-2.png",
          title: "Quality Product",
          info: "we have a need to make these the of connections literal.",
        },
        {
          image: "/src/assets/img/qualities-3.png",
          title: "Free Delivery",
          info: "we have a need to make these the of connections literal.",
        },
        {
          image: "/src/assets/img/qualities-4.png",
          title: "Always Fresh",
          info: "we have a need to make these the of connections literal.",
        },
      ],
    };
  },
  components: {
    hpThirdSection,
    RouterView
  },
  props: {},
};
</script>

<template class="app-about-page">
  <div class="about-page">
    <div class="jumbotron">
      <h2>About</h2>
      <div class="d-flex justify-content-center align-items-center gap-2">
        <div>You here!</div>
        <i class="fa-solid fa-chevron-right"></i>
        <div>
          <RouterLink class="home-jumbo" :to="{ name: 'home' }"
            >Home</RouterLink
          >
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        <div>About</div>
      </div>
    </div>
  </div>

  <div class="first-paragraph d-flex align-items-center">
    <div class="row">
      <h6 class="orange col-4">Running week top selling</h6>
      <h2>
        <span>Health is wealth – eat </span>
        <span class="orange">natural, </span>
        <span>eat </span>
        <span class="orange">organic, </span>
        <span>be healthy.</span>
      </h2>
      <p class="mb-5">
        Organic is loaded with a sense of rightness, with a set of rules. I
        would much rather someone bought food that was local and sustainable but
        not organic than bought organic food that had to be shipped across the
        world.
      </p>
      <div class="d-flex">
        <div class="me-4">
          <h5>All are handmade</h5>
          <p>
            If I'm honest, the thing I am proudest of is my varieties of wild
            flowers in the hay meadow.
          </p>
        </div>
        <div>
          <h5>100% Fresh ogranic</h5>
          <p>
            If I'm honest, the thing I am proudest of is my varieties of wild
            flowers in the hay meadow.
          </p>
        </div>
      </div>
      <div class="mb-5">
        <div class="d-flex gap-2">
          <h5>Call us for order:</h5>
          <h5 class="orange">+088012345 678 906</h5>
        </div>
        <p>
          Organic is loaded with a sense of rightness, with a set of rules. I
          would much rather someone bought food that was local and sustainable
          but not organic.
        </p>
      </div>
      <div>
        <a href="#">
          <button>ABOUT US</button>
        </a>
      </div>
    </div>
    <div class="container-aside-img col-8">
      <img src="../assets/img/about-img.jpg" alt="" />
    </div>
  </div>

  <hpThirdSection />

  <div class="third-paragraph">
    <div class="row d-flex justify-content-between">
      <div class="col-4">
        <h2>
          <span>Our organic </span>
          <span class="orange">fruits </span>
          <span>& </span>
          <span class="orange">vegetable</span>
        </h2>
        <div class="mb-5">
          Organic is loaded with a sense of rightness, with a set of rules. I
          would much rather someone bought food that was local and sustainable
          but not organic than bought organic food.
        </div>
        <div>
          <a href="#">
            <button>ABOUT US</button>
          </a>
        </div>
      </div>
      <div class="col-8 fruit-grid">
        <div
          class="single-fruit-container"
          v-for="(fruit, index) in fruits"
          :key="index"
        >
          <div class="fruit-img-container">
            <img :src="fruit.image" :alt="fruit.name" />
          </div>
          <h6 class="fruit-info">
            {{ fruit.name }}
          </h6>
        </div>
      </div>
    </div>
  </div>

  <div class="fourth-paragraph">
    <div class="row d-flex align-items-center">
      <div class="container-aside-img col-6">
        <img src="../assets/img/25y.jpg" alt="" />
      </div>
      <div class="col-6 info-container">
        <h6 class="orange">Running week top selling</h6>
        <h2>
          <span>Health is wealth – eat </span>
          <span class="orange">natural, </span>
          <span>eat </span>
          <span class="orange">organic, </span>
          <span>be healthy.</span>
        </h2>
        <p class="mb-5">
          Organic is loaded with a sense of rightness, with a set of rules. I
          would much rather someone bought food that was local and sustainable
          but not organic than bought organic food that had to be shipped across
          the world.
        </p>
        <div class="d-flex">
          <div class="me-4">
            <h5>All are handmade</h5>
            <p>
              If I'm honest, the thing I am proudest of is my varieties of wild
              flowers in the hay meadow.
            </p>
          </div>
          <div>
            <h5>100% Fresh ogranic</h5>
            <p>
              If I'm honest, the thing I am proudest of is my varieties of wild
              flowers in the hay meadow.
            </p>
          </div>
        </div>
        <div>
          <a href="">
            <button>ABOUT US</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fifth-paragraph">
    <div class="fifth-pragraph gap-5">
      <div
        class="qualities d-flex align-items-center gap-3"
        v-for="(quality, index) in qualities"
        :key="index"
      >
        <div class="w-75">
          <img :src="quality.image" :alt="quality.title" />
        </div>
        <div>
          <h5 class="quality-title">
            {{ quality.title }}
          </h5>
          <div>
            {{ quality.info }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-about-page {
  font-family: "Barlow Condensed", sans-serif;
}
.about-page {
  .jumbotron {
    color: white;
    text-align: center;
    padding: 80px;
    height: 220px;
    background-image: url(../assets/img/breckum-img.jpg);
    background-size: cover;
    object-fit: cover;
    .home-jumbo {
      text-decoration: none;
      color: white;
    }
    .home-jumbo:hover {
      cursor: pointer;
      color: #ef9e05;
      transition: 1s;
    }
  }
}
.first-paragraph {
  width: 1100px;
  padding: 50px 0px;
  margin: 0 auto;
  .container-aside-img {
    width: 500px;
    height: 500px;
  }

  .orange {
    color: #ef9e05;
  }

  button {
    background-color: #ef9e05;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 0px 20px 0px 20px;
  }

  button:hover {
    background-color: #017166;
    transition: 1s;
  }
}

.third-paragraph {
  width: 1100px;
  padding: 50px 0px;
  margin: 0 auto;

  .orange {
    color: #ef9e05;
  }
  button {
    background-color: #ef9e05;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 0px 20px 0px 20px;
  }

  button:hover {
    background-color: #017166;
    transition: 1s;
  }
  .fruit-grid {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    .single-fruit-container {
      width: calc(100% / 4);
      height: calc(100% / 2);

      .fruit-img-container {
        margin: 0 auto;
        width: 80px;
        height: 80px;
      }
      .fruit-info {
        text-align: center;
        margin-top: 10px;
      }
      .fruit-info:hover {
        color: #ef9e05;
        transition: 1s;
      }
    }
  }
}

.fourth-paragraph {
  width: 1100px;
  padding: 50px 0px;
  margin: 0 auto;
  .orange {
    color: #ef9e05;
  }
  button {
    background-color: #ef9e05;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 0px 20px 0px 20px;
  }

  button:hover {
    background-color: #017166;
    transition: 1s;
  }
}
.container-fifth-paragraph {
  width: 90%;
  height: 250px;
  background-color: #fbf4e6;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  .fifth-pragraph {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    margin: 0 auto;
    .quality-title:hover {
      color: #ef9e05;
      transition: 1s;
    }
  }
}
</style>
