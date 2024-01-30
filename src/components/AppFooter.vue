<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Footer Top -->
  <footer class="footer-container">
    <section id="footer-top">
    </section>
    <section id="footer-main">
      <div class="container">
        <div class="footer-nav-container">
          <div class="container-logo">
            <div class="img-footer-logo">
              <img src="../assets/img/footer-logo.png" alt="Logo">
            </div>
            
            <p>
              War should never be entered upon until every agency of peace has failed not to be good
            </p>
            <nav>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-pinterest-p"></i>
            </nav>
          </div>
          <div class="container-link">
            <h5>
              Emergency Link.
            </h5>
            <nav>
              <ul>
                <li>
                  <a href="#">Organic Food Shop</a>
                </li>
                <li>
                  <a href="#">Out Term & Condition</a>
                </li>
                <li>
                  <a href="#">Gogrin Faq Section</a>
                </li>
                <li>
                  <a href="#">Our Team Member</a>
                </li>
                <li>
                  <a href="#">Our Latest News Feed</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="container-blog">
            <h5>
              Our Latest Blog.
            </h5>
            <div class="img-text">
              <img src="../assets/img/blo1-70x70.jpg">
              <p>
                Where I live, I am surreounded by fresh, organic food, so I eat really well.
              </p>
            </div>
            <div class="img-text">
              <img src="../assets/img/blo2-70x70.jpg">
              <p>
                What we get at home is 100% organic food, We are also 90% vegetarian.
              </p>
            </div>
          </div>
          <div>
            <h5>
              Our Gallery
            </h5>
            <div class="container-gallery">
              <div class="column">
                <div class="container-image">
                  <img src="../assets/img/blo1-70x70.jpg">
                </div>
                <div class="container-image">
                  <img src="../assets/img/blo7-70x70.jpg">
                </div>
              </div>
              <div class="column">
                <div class="container-image">
                  <img src="../assets/img/blo9-70x70.jpg">
                </div>
                <div class="container-image">
                  <img src="../assets/img/blo4-70x70.jpg">
                </div>
              </div>
              <div class="column">
                <div class="container-image">
                  <img src="../assets/img/blo8-70x70.jpg">
                </div>
                <div class="container-image">
                  <img src="../assets/img/blo3-70x70.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="footer-bottom">
      <div class="row">
        <div>
        </div>
      </div>
      <div class="row">
        <nav>
          <ul>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Pricing Table</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </footer>
  
</template>

<style lang="scss" scoped>
.footer.footer-container {
  /*color: white;*/
}

.footer-main {
  background-image: url("/src/assets/img/footer-bg.jpg");
  padding: 50px 0;
}

.container {
  margin: 0 auto;
}

.footer-nav-container {
  display: flex;
}
.container-logo {
  width: 350px;

  .img-footer-logo {
    width: 100px;
  }

  .nav {
    justify-content: space-around;
  }
}

.container-link {
  width: 300px;
  .ul {
    list-style-type: none;
    text-decoration: none;
  }
}

.container-blog {
  width: 300px;
}

.img-text {
  display: flex;
  margin: 1px;

  .img {
    margin: 10px;
  }
}

.column {
  flex: 1;
}

.container-gallery {
  width: 100%;
  display: flex;
}

.container-image {
  padding: 10px;
}

.footer-bottom {

  .ul li {
    display: inline-block;
  }
}

</style>