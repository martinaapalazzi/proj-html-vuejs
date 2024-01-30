<script>
import { store } from '../store';

export default {
  data() {
    return {
      store
    };
  },
};
</script>


<template>
  
  <div class="header-container">

    <div class="top-header">
        <div class="left-side-header">
          <div class="d-flex align-items-center">
            <div>
              <i class="fa-solid fa-location-dot" style="color: #ffffff;"></i>
            </div>
            <p class="mb-0">
              North baukhula, tala, USA
            </p>
          </div>
          <div class="d-flex align-items-center">
            <div>
              <i class="fa-solid fa-envelope" style="color: #ffffff;"></i>
            </div>
            <a href="#">
             demo@example.com
            </a>
          </div>
        </div>
        <div class="right-side-header">
          <div>
            <div>
              <i class="fa-regular fa-clock" style="color: #ffffff;"></i>
            </div>
            <div>
              8.30AM-8.30PM
            </div>
          </div>
          <div class="icons-header">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest-p"></i>
          </div>
      </div>
    </div>
    <div class="bottom-header">
      <div class="nav-side">
        <div>
          LOGO
        </div>
        <div class="navbar-header">
          <nav class="d-flex">
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Home-1</a></li>
                <li><a class="dropdown-item" href="#">Home-2</a></li>
                <li><a class="dropdown-item" href="#">Home-3</a></li>
                <li><a class="dropdown-item" href="#">Home-landing</a></li>
                <li><a class="dropdown-item" href="#">Home-video</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">About</a></li>
                <li><a class="dropdown-item" href="#">Team</a></li>
                <li><a class="dropdown-item" href="#">Pricing tables</a></li>
                <li><a class="dropdown-item" href="#">FAQ Page</a></li>
                <li><a class="dropdown-item" href="#">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <a class="btn" href="#">
                Service
              </a>
            </div>
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Portfolio
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Portfolio-2Column</a></li>
                <li><a class="dropdown-item" href="#">Portfolio-3Column</a></li>
                <li><a class="dropdown-item" href="#">Portfolio-4Column</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Shop</a></li>
                <li><a class="dropdown-item" href="#">My Account</a></li>
                <li><a class="dropdown-item" href="#">Cart</a></li>
                <li><a class="dropdown-item" href="#">Checkout</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Blog left sidebar</a></li>
                <li><a class="dropdown-item" href="#">Blog right sidebar</a></li>
                <li><a class="dropdown-item" href="#">Blog right 2column</a></li>
                <li><a class="dropdown-item" href="#">Blog left 2column</a></li>
              </ul>
            </div>
            <div>
              <a class="btn" href="#">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="shopping-side">
        <div>
          <i class="search fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <i class="cart fa-solid fa-cart-shopping"></i>
          <div class="cart-list">
            0 
          </div>
        </div>
        <div>
          <button>
            ORDER NOW
          </button>
        </div>
      </div>
      

    </div>

  </div>


</template>

<style lang="scss" scoped>

.header-container {
  .top-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
  .bottom-header {
    height: 100px;
    background-color: rgba(0, 0, 0, 0.445);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .nav-side {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 50px;

        a {
            text-decoration: none;
            color: black;
        }
        a:hover {
          color: #EF9E05;
        }
    }
    .shopping-side {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 20px;

      .search {
        color: white;
        background-color: #EF9E05;
        text-align: center;
        padding-top: 8px;
        width: 35px;
        height: 35px;
        border-radius: 50px;
      }

      .cart {
        color: #017166;
        position: relative;
        font-size: 1.5em;
      }

      .cart-list {
        color: white;
        width: 20px;
        height: 20px;
        text-align: center;
        background-color: #EF9E05;
        border-radius: 50px;
        position: absolute;
        top: 9%;
        right: 20%;
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

  }
}
</style>
