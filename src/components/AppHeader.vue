<script>
import { store } from "../store";
import { RouterView } from "vue-router";
import appAboutPage from "../components/AppAboutPage.vue";

export default {
  data() {
    return {
      store,
      flag: 0,
      navbar: [
        {
          linkName: "HOME",
          link: "#",
          dropdown: [
            {
              dropdownName: "Home-1",
              dropdownLink: "home",
            },
            {
              dropdownName: "Home-2",
              dropdownLink: "home",
            },
            {
              dropdownName: "Home-3",
              dropdownLink: "home",
            },
            {
              dropdownName: "Home-landing",
              dropdownLink: "home",
            },
            {
              dropdownName: "Home-video",
              dropdownLink: "home",
            },
          ],
        },
        {
          linkName: "ABOUT",
          link: "#",
          dropdown: [
            {
              dropdownName: "About",
              dropdownLink: "about",
            },
            {
              dropdownName: "Team",
              dropdownLink: "about",
            },
            {
              dropdownName: "Pricing tables",
              dropdownLink: "about",
            },
            {
              dropdownName: "FAQ Page",
              dropdownLink: "about",
            },
            {
              dropdownName: "Testimonials",
              dropdownLink: "about",
            },
          ],
        },
        {
          linkName: "SERVICE",
          link: "#",
          dropdown: [],
        },
        {
          linkName: "SHOP",
          link: "#",
          dropdown: [
            {
              dropdownName: "Shop",
              dropdownLink: "shop",
            },
            {
              dropdownName: "My Account",
              dropdownLink: "shop",
            },
            {
              dropdownName: "Cart",
              dropdownLink: "shop",
            },
            {
              dropdownName: "Checkout",
              dropdownLink: "shop",
            },
          ],
        },
        {
          linkName: "CONTACT",
          link: "#",
          dropdown: [],
        },
      ],
    };
  },
  components: {
    appAboutPage,
    RouterView,
  },
  methods: {
    showSearch: function () {
      if (this.flag == 0) {
        this.flag = 1;
      }
    },
    returnHomePage: function () {
      if (this.flag == 1) {
        this.flag = 0;
      }
    },
  },
};
</script>

<template>
  <div class="header-container">
    <div class="top-header">
      <div class="left-side-header">
        <div class="d-flex align-items-center">
          <div>
            <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
          </div>
          <p class="mb-0">North baukhula, tala, USA</p>
        </div>
        <div class="d-flex align-items-center">
          <div>
            <i class="fa-solid fa-envelope" style="color: #ffffff"></i>
          </div>
          <a href="#"> demo@example.com </a>
        </div>
      </div>
      <div class="right-side-header">
        <div>
          <div>
            <i class="fa-regular fa-clock" style="color: #ffffff"></i>
          </div>
          <div>8.30AM-8.30PM</div>
        </div>
        <div class="icons-header">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-header">
    <div class="nav-side">
      <div>
        <RouterLink :to="{ name: 'home' }">
          <img src="../assets/img/logo.png" alt="" />
        </RouterLink>
      </div>
      <div class="navbar-header">
        <div class="d-flex align-items-center gap-3">
          <div class="dropdown d-flex mb-0 gap-2">
            <div class="hover-drop" v-for="(nav, index) in navbar" :key="index">
              <a
                v-if="index < 4"
                class="btn"
                :class="{ 'dropdown-toggle': nav.dropdown.length > 0 }"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ nav.linkName }}
              </a>
              <RouterLink
                class="btn special-contact-hover"
                v-if="index == 4"
                :to="{ name: 'contact' }"
                >{{ nav.linkName }}</RouterLink
              >
              <ul class="dropdown-menu" v-if="nav.dropdown.length > 0">
                <li v-for="(drop, j) in nav.dropdown" :key="j">
                  <RouterLink
                    :to="
                      index == 1 && j == 0
                        ? { name: 'about' }
                        : { name: 'home' }
                    "
                    class="dropdown-item"
                    href="#"
                  >
                    {{ drop.dropdownName }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-side">
      <div
        class=""
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        <i
          @click="showSearch()"
          class="search fa-solid fa-magnifying-glass"
        ></i>
      </div>
      <div
        class="hidden-search offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style="height: 100%"
      >
        <div
          class="offcanvas-body d-flex align-items-center justify-content-center"
        >
          <div :class="{ 'd-block': flag == 1 }">
            <form action="">
              <input class="search-user fs-1" type="text" placeholder="Type your keyboard" />
              <button class="search-submit-button" type="submit">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </form>
            <hr />
            <div
              type="button"
              class="btn-close search-close-button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></div>
          </div>
        </div>
      </div>
      <!--<div>
        <i @click="showSearch()" class="search fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="hidden-search" :class="{ 'd-block': flag == 1 }">
        <form action="">
          <input type="text" placeholder="Type your keyboard" />
          <button class="search-submit-button" type="submit">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <div @click="returnHomePage()" class="exit-search">
          <i class="fa-solid fa-x"></i>
        </div>
      </div> -->
      <div class="position-relative">
        <i class="cart fa-solid fa-cart-shopping"></i>
        <div
          class="cart-list position-absolute top-0 start-100 translate-middle"
        >
          0
        </div>
      </div>
      <div>
        <button>ORDER NOW</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  position: relative;
  .top-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 100px;
    background-color: #017166;
    height: 50px;

    .left-side-header {
      display: flex;
      align-items: center;
      gap: 20px;
      color: white;

      div {
        display: flex;
        gap: 5px;

        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .right-side-header {
      display: flex;
      align-items: center;
      gap: 20px;
      color: white;

      > div {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .icons-header i:hover {
        color: black;
        cursor: pointer;
      }
    }
  }
}
.bottom-header {
  width: 100%;
  z-index: 99;
  position: sticky;
  background-color: white;
  top: 0px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .nav-side {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .dropdown {
      list-style: none;

      .dropdown-menu {
        display: none;
      }

      .hover-drop:hover .dropdown-menu {
        display: block;
      }
      .dropdown-toggle:hover {
        color: #ef9e05;
        transition: 0.5s;
      }
      .dropdown-item:hover {
        background-color: transparent;
        color: #ef9e05;
        transition: 0.5s;
        margin-left: 10px;
      }
    }
  }
  .shopping-side {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

    .search {
      cursor: pointer;
      color: white;
      background-color: #ef9e05;
      text-align: center;
      padding-top: 8px;
      width: 35px;
      height: 35px;
      border-radius: 50px;
    }

    .hidden-search {
      //display: none;
      color: white;
      background-color: rgba(0, 0, 0, 0.772);
      .search-submit-button {
        color: black;
        background-color: transparent;
        color: white;
        font-size: x-large;
      }
      .search-user {
        width: 500px;
        color: white;
        font-size: 20px;
        background-color: transparent;
        border: 0px ;
        box-shadow: none;
      }
      .search-user:focus {
        outline: none;
      }

      .search-close-button {
        width: 30px;
        height: 30px;
        margin-left: 40%;
        text-align: center;
        font-size: small;
        padding-top: 5px;
        border-radius: 50px;
        color: white;
        background-color: #ef9e05;
      }
    }
    .cart {
      cursor: pointer;
      color: #017166;
      font-size: 1.5em;
    }

    .cart-list {
      color: white;
      width: 20px;
      height: 20px;
      text-align: center;
      background-color: #ef9e05;
      border-radius: 50px;
    }

    button {
      margin-left: 25px;
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
}
</style>
