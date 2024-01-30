<script>
export default {
  data() {
    return {};
  },
  props: {},
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

  <div class="first-paragraph d-flex">
    <div>
      <h6 class="orange">
        Running week top selling
      </h6>
      <div class="d-flex">
        <h2>
          Health is wealth: eat
        </h2>
        <h2 class="orange">
          natural,
        </h2>
        <h2>
          eat
        </h2>
        <h2 class="orange">
          organic,
        </h2>
        <h2>
          be healthy.
        </h2>
      </div>
      <p class="mb-5">
        Organic is loaded with a sense of rightness, with a set of rules. I would much rather someone bought food that was local and sustainable but not organic than bought organic food that had to be shipped across the world.
      </p>
      <div class="d-flex">
        <div>
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
    <div class="container-aside-img">
      <img src="../assets/img/s7.jpg" alt="">
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
    object-fit: cover;
    .home-jumbo:hover {
      cursor: pointer;
      color: #EF9E05;
      transition: 1s;
    }
  }
}
.first-paragraph {
  width: 900px;
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
    margin-left: 25px ;
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

</style>
