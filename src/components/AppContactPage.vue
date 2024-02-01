<script>
export default {
  data() {
    return {};
  },
  props: {
    
  },
};
</script>

<template>
  <!-- AppContactPage -->
  <section class="contact-main">
    <div class="left-column">
      <div>
        <h5>Our Contact</h5>
        <h1>Get In A Touch</h1>
      </div>
      <form class="w-100" action method="GET" id="calcForm">
        <div class="form-row w-100">
          <label for="name"></label>
          <input class="w-100" id="name" name="name" type="text" placeholder="Name*" required>
        </div>
        <div class="form-row">
          <label for="email"></label>
          <input class="w-100" id="email" name="email" type="email" placeholder="Email*" required>
        </div>
        <div class="form-row">
          <label for="tel"></label>
          <input class="w-100" id="tel" name="tel" type="tel" placeholder="Phone*" required>
        </div>
        <div class="form-row">
          <textarea name="note" rows=5 cols=58 placeholder="Your Comment*" required></textarea>
        </div>
        <div class="form-row">
          <button type="submit" id="calc-button">Send Message</button>
        </div>
      </form>
    </div>
    <div class="right-column">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.contact-main {
  width: 70vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
}

.left-column {
  border: none;
  box-shadow: 10px #dedede;
  width: 480px;
  padding: 3%;
  line-height: 2.5;

  h5 {
    color: #EF9E05;
  }

  button {
    color: white;
    background-color: #EF9E05;
    height: 50px;
    border: none;
    padding: 7px 40px;
    margin: 10px 0;
  }

  .form-row {
    width: 100%;
    margin-top: 20px;
    flex-grow: 1;
  }
}

.right-column {
  border: 1px solid black;
  width: 48%;
  margin-left: 4%;
}


</style>
