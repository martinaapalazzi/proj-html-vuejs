<script>
export default {
  data() {
    return {

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
        Contact
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
          Contact
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

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
</style>
