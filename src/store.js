import { reactive } from "vue";

export const store = reactive({
  food: [
    {
      name: "Fresh Apple",
      imgPath: "/src/assets/img/s5.jpg",
      oldPrice: "",
      price: "$18",
      sale: false,
      type: ["apple"],
    },
    {
      name: "Fresh Cobies",
      imgPath: "/src/assets/img/s2.jpg",
      oldPrice: "$18",
      price: "$17",
      sale: true,
      type: ["vegetable"],
    },
    {
      name: "Fresh Waterlemon",
      imgPath: "/src/assets/img/s8.jpg",
      oldPrice: "",
      price: "$15",
      sale: false,
      type: ["food", "orange"],
    },
    {
      name: "Organic Juice",
      imgPath: "/src/assets/img/s1.jpg",
      oldPrice: "$20",
      price: "$15",
      sale: true,
      type: ["apple", "orange"],
    },
    {
      name: "Fresh Blueberries",
      imgPath: "/src/assets/img/s4.jpg",
      oldPrice: "$19",
      price: "$14",
      sale: true,
      type: ["apple", "food"],
    },
    {
      name: "Organic letus",
      imgPath: "/src/assets/img/s10.jpg",
      oldPrice: "",
      price: "$23",
      sale: false,
      type: ["food", "vegetables"],
    },
    {
      name: "Red Gajor",
      imgPath: "/src/assets/img/s9.jpg",
      oldPrice: "$29",
      price: "$26",
      sale: true,
      type: ["food", "vegetables"],
    },
    {
      name: "Naga pepper",
      imgPath: "/src/assets/img/s7.jpg",
      oldPrice: "",
      price: "$21",
      sale: false,
      type: ["apple", "orange"],
    },
  ],
  // foodBackup: [
  //   {
  //     name: "Fresh Apple",
  //     imgPath: "/src/assets/img/s5.jpg",
  //     oldPrice: "",
  //     price: "$18",
  //     sale: false,
  //     type: ["apple"],
  //   },
  //   {
  //     name: "Fresh Cobies",
  //     imgPath: "/src/assets/img/s2.jpg",
  //     oldPrice: "$18",
  //     price: "$17",
  //     sale: true,
  //     type: ["vegetable"],
  //   },
  //   {
  //     name: "Fresh Waterlemon",
  //     imgPath: "/src/assets/img/s8.jpg",
  //     oldPrice: "",
  //     price: "$15",
  //     sale: false,
  //     type: ["food", "orange"],
  //   },
  //   {
  //     name: "Organic Juice",
  //     imgPath: "/src/assets/img/s1.jpg",
  //     oldPrice: "$20",
  //     price: "$15",
  //     sale: true,
  //     type: ["apple", "orange"],
  //   },
  //   {
  //     name: "Fresh Blueberries",
  //     imgPath: "/src/assets/img/s4.jpg",
  //     oldPrice: "$19",
  //     price: "$14",
  //     sale: true,
  //     type: ["apple", "food"],
  //   },
  //   {
  //     name: "Organic letus",
  //     imgPath: "/src/assets/img/s10.jpg",
  //     oldPrice: "",
  //     price: "$23",
  //     sale: false,
  //     type: ["food", "vegetables"],
  //   },
  //   {
  //     name: "Red Gajor",
  //     imgPath: "/src/assets/img/s9.jpg",
  //     oldPrice: "$29",
  //     price: "$26",
  //     sale: true,
  //     type: ["food", "vegetables"],
  //   },
  //   {
  //     name: "Naga pepper",
  //     imgPath: "/src/assets/img/s7.jpg",
  //     oldPrice: "",
  //     price: "$21",
  //     sale: false,
  //     type: ["apple", "orange"],
  //   },
  // ],
});
