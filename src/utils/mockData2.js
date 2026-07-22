const restoMenu = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    image: "...",
    rating: 4.8,

    description: "Fresh mozzarella, basil and homemade tomato sauce.",

    priceForTwo: "₹499",

    deliveryTime: "25 mins",

    offers: ["20% OFF up to ₹100", "Free Delivery"],

    address: "Hazratganj, Lucknow",

    menu: [
      {
        id: 101,
        name: "Margherita Pizza",
        price: 249,
        image: "...",
        description: "Cheesy delight",
      },
      {
        id: 102,
        name: "Farmhouse Pizza",
        price: 349,
        image: "...",
        description: "Loaded with veggies",
      },
      {
        id: 103,
        name: "Garlic Bread",
        price: 129,
        image: "...",
        description: "Crispy garlic bread",
      },
    ],

    reviews: [
      {
        user: "Rahul",
        rating: 5,
        comment: "Amazing taste!",
      },
      {
        user: "Priya",
        rating: 4,
        comment: "Worth the price.",
      },
    ],
  },
];

export default restoMenu;