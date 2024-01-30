<script>
export default {
  data() {
    return {
      fruits: [
        {
          image: '/src/assets/img/cabbage.jpg',
          name: 'Natural Cabbage'
        },
        {
          image: '/src/assets/img/tomatos.jpg',
          name: 'Fresh Tomato'
        },
        {
          image: '/src/assets/img/spinach.jpg',
          name: 'Organic Spinach'
        },
        {
          image: '/src/assets/img/carrots.jpg',
          name: 'Natural Carrots'
        },
        {
          image: '/src/assets/img/cabbage.jpg',
          name: 'Organic Grapes'
        },
        {
          image: '/src/assets/img/tomatos.jpg',
          name: 'Fresh Apple'
        },
        {
          image: '/src/assets/img/spinach.jpg',
          name: 'Natural Farming'
        },
        {
          image: '/src/assets/img/carrots.jpg',
          name: 'Organic Eggplant'
        },
      ]
    };
  },
  props: {

  },
};
</script>

<template>

  <div class="about-page">
    <div class="jumbotron">
      <h2>
        About
      </h2>
      <div class="d-flex justify-content-center align-items-center gap-2">
        <div>
          You here!
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        <div class="home-jumbo">
          Home
        </div>
        <i class="fa-solid fa-chevron-right"></i>
        <div>
          About
        </div>
      </div>
    </div>
  </div>

  <div class="first-paragraph d-flex align-items-center">
    <div class="row">
      <h6 class="orange col-4">
        Running week top selling
      </h6>
      <h2>
        <span>Health is wealth – eat </span>
        <span class="orange">natural, </span>
        <span>eat </span>
        <span class="orange">organic, </span>
        <span>be healthy.</span>
      </h2>
      <p class="mb-5">
        Organic is loaded with a sense of rightness, with a set of rules. I would much rather someone bought food that was local and sustainable but not organic than bought organic food that had to be shipped across the world.
      </p>
      <div class="d-flex">
        <div class="me-4">
          <h5>
            All are handmade
          </h5>
          <p>
            If I'm honest, the thing I am proudest of is my varieties of wild flowers in the hay meadow.
          </p>
        </div>
        <div>
          <h5>
            100% Fresh ogranic
          </h5>
          <p>
            If I'm honest, the thing I am proudest of is my varieties of wild flowers in the hay meadow.
          </p>
        </div>
      </div>
      <div class="mb-5">
        <div class="d-flex gap-2">
          <h5>
            Call us for order: 
          </h5>
          <h5 class="orange">
            +088012345 678 906
          </h5>
        </div>
        <p>
          Organic is loaded with a sense of rightness, with a set of rules. I would much rather someone bought food that was local and sustainable but not organic.
        </p>
      </div>
      <div>
        <button>
          ABOUT US
        </button>
      </div>
    </div>
    <div class="container-aside-img col-8">
      <img src="../assets/img/about-img.jpg" alt="">
    </div>
  </div>

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
          Organic is loaded with a sense of rightness, with a set of rules. I would much rather someone bought food that was local and sustainable but not organic than bought organic food.
        </div>
        <div>
          <button>
            ABOUT US
          </button>
        </div>
      </div>
      <div class="col-8 fruit-grid">
        <div class="single-fruit-container" v-for="(fruit, index) in fruits" :key="index">
          <div class="fruit-img-container">
            <img :src="fruit.image" :alt="fruit.name">
          </div>
          <div>
            {{ fruit.name }}
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.about-page {
  .jumbotron {
    color: white;
    text-align: center;
    padding: 80px;
    height: 220px;
    background-image: url(../assets/img/breckum-img.jpg);
    background-size: cover;
    object-fit: cover;
    .home-jumbo:hover {
      cursor: pointer;
      color: #EF9E05;
      transition: 1s;
    }
  }
}
.first-paragraph {
  width: 1000px;
  padding: 50px 0px;
  margin: 0 auto;
  .container-aside-img {
    width: 500px;
    height: 500px;
  }

  .orange {
    color: #EF9E05;
  }

  button {
    background-color: #EF9E05;
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
  width: 1000px;
  padding: 50px 0px;
  margin: 0 auto; 

  .orange {
    color: #EF9E05;
  }
  button {
    background-color: #EF9E05;
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
    width: calc(100% / 2);

    .single-fruit-container {
      width: 100px;
      height: 150px;

      .fruit-img-container {
        width: 80px;
      }
    }
  }
}
</style>
