import { reactive } from "vue";

export const store = reactive({
  food: [
    {
      name: "Fresh Apple",
      imgPath: "/src/assets/img/s5.jpg",
      price: "$18",
    },
    {
      name: "Fresh Cobies",
      imgPath: "/src/assets/img/s2.jpg",
      price: "$17",
    },
    {
      name: "Fresh Waterlemon",
      imgPath: "/src/assets/img/s8.jpg",
      price: "$15",
    },
    {
      name: "Organic Juice",
      imgPath: "/src/assets/img/s1.jpg",
      price: "$15",
    },
    {
      name: "Fresh Blueberries",
      imgPath: "/src/assets/img/s4.jpg",
      price: "$14",
    },
    {
      name: "Organic letus",
      imgPath: "/src/assets/img/s10.jpg",
      price: "$23",
    },
    {
      name: "Red Gajor",
      imgPath: "/src/assets/img/s9.jpg",
      price: "$26",
    },
    {
      name: "Naga pepper",
      imgPath: "/src/assets/img/s7.jpg",
      price: "$21",
    },
  ],
});
