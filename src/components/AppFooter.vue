<script>
  export default {
    data() {
      return {
      
      }
    },
  }
</script>

<template>
  <!-- Footer -->
  <footer bg="dark" :text="['center', 'white']">
    <!-- Grid container -->
    <container class="p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="bi bi-facebook"></i>
        </a>
        <!-- Google -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="bi bi-google"></i>
        </a>
        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="bi bi-twitter"></i>
        </a>
        <!-- Pinterest -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="bi bi-pinterest"></i>
        </a>
      </section>
      <!-- Section: Social media -->
      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <row center class="d-flex">
            <!--Grid column-->
            <column auto>
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </column>
            <!--Grid column-->
            <!--Grid column-->
            <column md="5" col="12">
              <!-- Email input -->
              <Minput
                white
                type="email"
                id="form5Example2"
                label="your email"
                wrapperClass="mb-4"/>
            </column>
            <!--Grid column-->
            <!--Grid column-->
            <column auto>
              <!-- Submit button -->
              <btn outline="light" class="mb-4"> SEND </btn>
            </column>
            <!--Grid column-->
          </row>
          <!--Grid row-->
        </form>
      </section>
      <!-- Section: Form -->
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <row>
          <!--Grid column-->
          <column lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
            <!-- Section: Text -->
            <section class="mb-4">
              <p>
                War should never be entered upon until every agency of peace has failed not to be good
              </p>
            </section>
            <!-- Section: Text -->
            <ul class="list-unstyled mb-0">
              <li>
                <!-- Facebook -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M15 0H1C.447 0 0 .447 0 1v14c0 .553.447 1 1 1h7.54v-6.373H6.362V7.58c0-1.854 1.103-2.878 2.792-2.878.805 0 1.58.06 1.816.088v1.95h-1.004c-1.01 0-1.208.48-1.208 1.184v1.551h2.415L9.36 9.627H8.16v6.373H15c.553 0 1-.447 1-1V1c0-.553-.447-1-1-1z"/>
                  </svg>
                </a>
              </li>
              <li>
                <!-- Google -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M2 8.087c0-.644.054-1.264.148-1.87H0v-1.77h2.682C2.412 3.89 1.253 2.35 1.253 1.482 1.253.667 1.63 0 2.145 0c.779 0 1.434.53 1.666 1.252l1.6-.13C5.31.486 3.63 0 2.144 0 1.07 0 .12.667.12 1.482c0 .943.637 1.728 1.49 1.968-.14 1.127-.553 2.307-2.108 4.14-.125.164-.248.34-.362.53-.08.125-.153.26-.218.4-.092.188-.174.37-.25.555-.07.17-.137.338-.202.51l-.12.312-.12.31C-.2 9.055 0 9.57 0 10.086 0 11.37 1.442 12 2.144 12c.86 0 1.06-.645 1.122-.963h2.272c-.22 1.13-.866 2.31-2.448 2.31-1.482 0-2.682-1.296-2.682-2.902z"/>
                  </svg>
                </a>
              </li>
              <li>
                <!-- Twitter -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M16 3.056a6.582 6.582 0 0 1-1.885.518 3.326 3.326 0 0 0 1.46-1.837 6.6 6.6 0 0 1-2.092.796 3.292 3.292 0 0 0-5.61 2.994c0 .26.028.512.08.754A9.357 9.357 0 0 1 1.112 2.168a3.29 3.29 0 0 0 1.018 4.388 3.28 3.28 0 0 1-1.487-.41v.04a3.293 3.293 0 0 0 2.635 3.223 3.308 3.308 0 0 1-1.485.056 3.293 3.293 0 0 0 3.068 2.288A6.603 6.603 0 0 1 0 12.39a9.31 9.31 0 0 0 5.032 1.474c6.066 0 9.39-5.03 9.39-9.39 0-.142-.004-.284-.01-.426A6.75 6.75 0 0 0 16 3.057z"/>
                  </svg>
                </a>
              </li>
              <li>
                <!-- Pinterest -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 0 1 8 8c0 3.86-2.572 7.07-6 8.155-.44-.38-1.04-.875-1.75-1.486-.625.71-1.32 1.267-2.067 1.606a11.08 11.08 0 0 1-.947.25c-.33.07-.675.105-1.033.105-2.628 0-4.88-1.67-5.72-4.03a4.51 4.51 0 0 1-.038-.85c0-2.522 1.902-4.47 4.42-4.47 1.968 0 3.494 1.472 3.494 3.42 0 2.56-1.072 4.57-2.678 4.57-.255 0-.485-.083-.73-.123a1.2 1.2 0 0 1-.25-.042c-.1-.057-.205-.167-.17-.33.028-.207.186-.878.258-1.214.027-.072.06-.195.06-.295 0-.348-.19-.605-.46-.605"/>
                  </svg>
                </a>
              </li>
            </ul>
          </column>
          <!--Grid column-->
          <!--Grid column-->
          <column lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">Emergency Link.</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Organic Food Shop</a>
              </li>
              <li>
                <a href="#!" class="text-white">Our Team & Condition</a>
              </li>
              <li>
                <a href="#!" class="text-white">Gogrin Faq Section</a>
              </li>
              <li>
                <a href="#!" class="text-white">Our Team Member</a>
              </li>
              <li>
                <a href="#!" class="text-white">Our Latest News Feed</a>
              </li>
            </ul>
          </column>
          <!--Grid column-->
          <!--Grid column-->
          <column lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">Our Latest Blog.</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Where I live, I am surrounded by fresh, organic food, so I eat really well.</a>
              </li>
              <li>
                <a href="#!" class="text-white">What we get at home si 100% organic food. We are also 90% vegetarian.</a>
              </li>
            </ul>
          </column>
          <!--Grid column-->
          <!--Grid column-->
          <column lg="3" md="6" class="mb-4 mb-md-0">
            <h5 class="text-uppercase">Our Gallery</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Link 1</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 2</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 3</a>
              </li>
              <li>
                <a href="#!" class="text-white">Link 4</a>
              </li>
            </ul>
          </column>
          <!--Grid column-->
        </row>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </container>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: green"
    >
      Copyright © gogrin all rights reserved.
      <a class="text-white" href="https://mdbootstrap.com/"
        >MDBootstrap.com</a
      >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style lang="scss" scoped>
</style>
