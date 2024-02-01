<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      latestNewsFeeds: [
        {
          imgPath: "/src/assets/img/blo1-390x250.jpg",
          user: "Gogrin",
          date: "17 Dec 2022",
          title:
            "Where I live, I am surrounded by fresh, organic food, so I eat really well.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, velit perferendis. Dignissimos neque natus libero, ipsa ratione, amet quae saepe architecto dolore perferendis itaque animi!",
          readMore: "READ MORE....",
        },
        {
          imgPath: "/src/assets/img/blo2-390x250.jpg",
          user: "Gogrin",
          date: "16 Dec 2022",
          title:
            "What we get at home is 100% organic food. We are also 90% vegetarian.",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, velit perferendis. Dignissimos neque natus libero, ipsa ratione, amet quae saepe architecto dolore perferendis itaque animi!",
          readMore: "READ MORE....",
        },
        {
          imgPath: "/src/assets/img/blo3-390x250.jpg",
          user: "Gogrin",
          date: "15 Dec 2022",
          title:
            "If we as a society are willing to have a preference for organic food farmer",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, velit perferendis. Dignissimos neque natus libero, ipsa ratione, amet quae saepe architecto dolore perferendis itaque animi!",
          readMore: "READ MORE....",
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<template>
  <section id="ninth-section">
    <div class="container special-margin">
      <h4 class="my-orange text-center">The news whatwe have</h4>
      <h1 class="text-center my-green mb-5">
        GOGREEN LATEST <span class="my-orange">NEWS</span> FEED
      </h1>
      <div class="row">
        <div v-for="(elem, i) in latestNewsFeeds" class="col-4">
          <div class="mb-3">
            <img :src="elem.imgPath" alt="" />
          </div>
          <div class="mb-3">
            <a href="">
              <i class="fa-solid fa-user my-orange me-1"></i>
              <span class="me-3 my-grey">{{ elem.user }}</span>
            </a>
            <i class="fa-regular fa-clock my-orange me-1"></i>
            <span class="me-3 my-grey">{{ elem.date }}</span>
          </div>
          <a href=""
            ><h5 class="mb-3">{{ elem.title }}</h5></a
          >
          <p class="mb-3">{{ elem.text }}</p>
          <a href="">{{ elem.readMore }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
.my-margin-zero-auto {
  margin: 0 auto;
}
.text-underlined {
  text-decoration: underline;
}
.my-orange {
  color: $mainOrange;
}
.my-green {
  color: $mainGreen;
}
.item-active {
  display: block;
}

#ninth-section {
  .my-grey {
    color: #999999;
  }
  h5 {
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: $mainGreen;
  }
  a:hover {
    color: $mainOrange;
    transition: 1s;
  }
  .special-margin {
    margin-bottom: 100px;
  }
}
</style>
