<script>
import JumbotronContact from "../components/JumbotronContact.vue";
export default {
  data() {
    return {};
  },
  components: {
    JumbotronContact,
  },
  props: {},
};
</script>

<template>
  <JumbotronContact />
  <section class="contact-main">
    <div class="left-column">
      <div>
        <h5>Our Contact</h5>
        <h1>Get In A Touch</h1>
      </div>
      <form class="w-100" action method="GET" id="calcForm">
        <div class="form-row w-100">
          <label for="name"></label>
          <input
            class="w-100"
            id="name"
            name="name"
            type="text"
            placeholder="Name*"
            required
          />
        </div>
        <div class="form-row">
          <label for="email"></label>
          <input
            class="w-100"
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            required
          />
        </div>
        <div class="form-row">
          <label for="tel"></label>
          <input
            class="w-100"
            id="tel"
            name="tel"
            type="tel"
            placeholder="Phone*"
            required
          />
        </div>
        <div class="form-row">
          <textarea
            class="w-100"
            name="note"
            rows="5"
            placeholder="Your Comment*"
            required
          ></textarea>
        </div>
        <div class="form-row">
          <button type="submit" id="calc-button">Send Message</button>
        </div>
      </form>
    </div>
    <div class="right-column">
      <div clas="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325373.49818100635!2d88.99182172678142!3d25.707627702357726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32d3195baf511%3A0xf7a3fa6c9d0592d6!2sWEB%20IT%20RANGPUR!5e0!3m2!1sit!2sit!4v1706782169941!5m2!1sit!2sit"
          width="100%"
          height="674"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.contact-main {
  width: 70vw;
  // height: 70vh;
  height: 600px;
  margin: 5% auto;
  display: flex;
}

.left-column {
  border: none;
  width: 48%;
  padding: 3%;
  line-height: 2.5;
  box-shadow: 1px 1px 1px #dedede, -1px -1px 10px #dedede, 1px -1px 10px #dedede,
    -1px 1px 1px #dedede;

  h5 {
    color: #ef9e05;
  }

  button {
    color: white;
    background-color: #ef9e05;
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
  // border: 1px solid black;
  width: 48%;
  margin-left: 4%;
}

.google-maps {
  position: relative;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
}
.google-maps > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
