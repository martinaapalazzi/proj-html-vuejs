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
      <div class="container-top">
        <div class="top-text">
          <strong>SUNSCRIBE OUR NEWSLETTER</strong>
        </div>
        <div class="top-email">
          <input id="email" name="email" type="text" placeholder="your email" required="">
          <button>
            SEND
          </button>
        </div>
      </div>
    </section>
    <!-- Footer Main -->
    <section id="footer-main">
      <div class="container-main">
        <div class="footer-nav-container">
          <div class="container-logo">
            <div class="img-footer-logo">
              <img src="../assets/img/footer-logo.png" alt="Logo">
            </div>
            <p>
              War should never be entered upon until every agency of peace has failed not to be good
            </p>
            <nav>
              <button>
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button>
                <i class="fa-brands fa-google-plus-g"></i>
              </button>
              <button>
                <i class="fa-brands fa-twitter"></i>
              </button>
              <button>
                <i class="fa-brands fa-pinterest-p"></i>
              </button>
            </nav>
          </div>
          <div class="container-link">
            <h5>
              <strong>Emergency Link.</strong>
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
              <strong>Our Latest Blog.</strong>
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
          <div class="container-gallery">
            <h5>
              <strong>Our Gallery</strong>
            </h5>
            <div class="container-column">
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
    <!-- Footer Bottom -->
    <section id="footer-bottom">
      <div class="container-bottom">
        <div class="bottom-left">
          <p>
            Copyright © gogrin all rights reserved.
          </p>
        </div>
        <div class="bottom-right">
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
      </div>
      
    </section>
  </footer>
  
</template>

<style lang="scss" scoped>
#footer-top {
  height: 20%;

  .container-top {
    background-image: url("..//assets/img/milesim-bg.jpg");
    width: 71vw;
    padding: 3% 4% 3%;
    margin: 20px 14vw;
    position: absolute;
    display: flex;
    justify-content: space-between;
    background-size: cover;
  }

  .top-text {
    padding-top: 20px;
  }

  #email {
    height: 40px;
    width: 550px;
    padding-left: 30px;
  }

  button {
    height: 40px;
    color: white;
    background-color: #017166;
    border: none;
    padding: 7px 40px;
    margin: 10px 0;
  }
}
.footer-container {
  height: 520px;
  color: white;
}

#footer-main {
  background-image: url("../assets/img/footer-bg.jpg");
  padding: 50px 0;
  height: 100%;
}

.container-main {
  width: 70vw;
  padding: 10% 0 0;
  margin: 0 auto;
}

.footer-nav-container {
  display: flex;
}
.container-logo {
  width: 30%;

  nav {
    display: flex;
    justify-content: flex-start;
  }

  button {
    color: white;
    background-color: #017166;
    border: none;
    border-radius: 5px;
    padding: 7px 12px;
    margin-right: 10px;
  }
}

.img-footer-logo {
  margin: 0 0 10px;
  width: 200px;

  nav {
    justify-content: space-around;
  }
}

.container-link {
  width: 20%;
  margin-left: 0;

  h5 {
    padding-left: 10px;
  }
  
  nav ul {
    list-style-type: none;
    padding-left: 10px;
    margin-top: 25px;
    line-height: 2.5;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

.container-blog {
  width: 40%;

  h5 {
    margin-bottom: 25px;
  }
}

.img-text {
  display: flex;
  height: 90px;

  img {
    margin: 5px 0;
    width: auto;
  }
  
  p {
    margin-left: 10px;
  }
}

.container-gallery {
  width: 20%;
  margin-right: 0;
  margin-left: 10px;
}

.container-column {
  width: 200px;
  display: flex;
  margin-top: 25px;
}

.column {
  flex: 1;
}

.container-image {
  margin: 5px;
}

#footer-bottom {
  background-color: #017166;
  height: 15%;

  .container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 100%;
    padding-top: 10px;
    margin: 0 auto;
  }

  .bottom-left {
    padding-top: 9px;
  }

  .bottom-right {
    padding-top: 9px;
    justify-content: space-between;
  }

  nav ul {
    width: 300px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  ul li {
    padding: 0;
  }
}

</style>