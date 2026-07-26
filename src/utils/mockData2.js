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

  {
    id: 2,
    name: "Veggie Delight",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 4.7,
    description: "Healthy vegetarian meals with fresh ingredients.",
    priceForTwo: "₹399",
    deliveryTime: "20 mins",
    offers: ["15% OFF", "Free Delivery"],
    address: "Aliganj, Lucknow",

    menu: [
      {
        id: 201,
        name: "Paneer Tikka",
        price: 249,
        image: "https://cdn.dummyjson.com/recipe-images/2.webp",
        description: "Spicy grilled paneer cubes",
      },
      {
        id: 202,
        name: "Veg Fried Rice",
        price: 189,
        image: "https://cdn.dummyjson.com/recipe-images/2.webp",
        description: "Chinese style fried rice",
      },
      {
        id: 203,
        name: "Hakka Noodles",
        price: 199,
        image: "https://cdn.dummyjson.com/recipe-images/2.webp",
        description: "Loaded with vegetables",
      },
    ],

    reviews: [
      {
        user: "Neha",
        rating: 5,
        comment: "Fresh and tasty food.",
      },
      {
        user: "Amit",
        rating: 4,
        comment: "Good quantity.",
      },
    ],
  },

  {
    id: 3,
    name: "Sweet Cravings",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    description: "Best desserts and bakery items.",
    priceForTwo: "₹299",
    deliveryTime: "18 mins",
    offers: ["Buy 1 Get 1", "Flat ₹100 OFF"],
    address: "Gomti Nagar, Lucknow",

    menu: [
      {
        id: 301,
        name: "Chocolate Cookies",
        price: 149,
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
        description: "Freshly baked cookies",
      },
      {
        id: 302,
        name: "Brownie",
        price: 179,
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
        description: "Chocolate brownie",
      },
      {
        id: 303,
        name: "Cheese Cake",
        price: 249,
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
        description: "Creamy cheesecake",
      },
    ],

    reviews: [
      {
        user: "Priya",
        rating: 5,
        comment: "Best desserts in Lucknow.",
      },
      {
        user: "Rohit",
        rating: 5,
        comment: "Loved the brownies.",
      },
    ],
  },

  {
    id: 4,
    name: "Italian House",
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.8,
    description: "Authentic Italian dishes.",
    priceForTwo: "₹699",
    deliveryTime: "28 mins",
    offers: ["25% OFF", "Free Garlic Bread"],
    address: "Indira Nagar, Lucknow",

    menu: [
      {
        id: 401,
        name: "Chicken Alfredo Pasta",
        price: 349,
        image: "https://cdn.dummyjson.com/recipe-images/4.webp",
        description: "Creamy white sauce pasta",
      },
      {
        id: 402,
        name: "Lasagna",
        price: 399,
        image: "https://cdn.dummyjson.com/recipe-images/4.webp",
        description: "Classic Italian lasagna",
      },
      {
        id: 403,
        name: "Garlic Bread",
        price: 149,
        image: "https://cdn.dummyjson.com/recipe-images/4.webp",
        description: "Cheesy garlic bread",
      },
    ],

    reviews: [
      {
        user: "Rahul",
        rating: 5,
        comment: "Authentic Italian taste.",
      },
      {
        user: "Kajal",
        rating: 4,
        comment: "Loved the pasta.",
      },
    ],
  },

  {
    id: 5,
    name: "Biryani Junction",
    image: "https://cdn.dummyjson.com/recipe-images/11.webp",
    rating: 5,
    description: "Hyderabadi style biryani.",
    priceForTwo: "₹599",
    deliveryTime: "30 mins",
    offers: ["30% OFF", "Free Coke"],
    address: "Hazratganj, Lucknow",

    menu: [
      {
        id: 501,
        name: "Chicken Biryani",
        price: 299,
        image: "https://cdn.dummyjson.com/recipe-images/11.webp",
        description: "Hyderabadi Dum Biryani",
      },
      {
        id: 502,
        name: "Mutton Biryani",
        price: 399,
        image: "https://cdn.dummyjson.com/recipe-images/11.webp",
        description: "Spicy and juicy",
      },
      {
        id: 503,
        name: "Veg Biryani",
        price: 249,
        image: "https://cdn.dummyjson.com/recipe-images/11.webp",
        description: "Loaded with vegetables",
      },
    ],

    reviews: [
      {
        user: "Shivam",
        rating: 5,
        comment: "Best biryani ever.",
      },
      {
        user: "Sneha",
        rating: 5,
        comment: "Highly recommended.",
      },
    ],
  },

  {
    id: 6,
    name: "Healthy Bowl",
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    rating: 4.5,
    description: "Healthy salads and bowls.",
    priceForTwo: "₹449",
    deliveryTime: "22 mins",
    offers: ["10% OFF", "Free Juice"],
    address: "Jankipuram, Lucknow",

    menu: [
      {
        id: 601,
        name: "Quinoa Salad",
        price: 249,
        image: "https://cdn.dummyjson.com/recipe-images/6.webp",
        description: "Protein rich quinoa",
      },
      {
        id: 602,
        name: "Avocado Bowl",
        price: 299,
        image: "https://cdn.dummyjson.com/recipe-images/6.webp",
        description: "Healthy avocado bowl",
      },
      {
        id: 603,
        name: "Fruit Smoothie",
        price: 199,
        image: "https://cdn.dummyjson.com/recipe-images/25.webp",
        description: "Mixed fruit smoothie",
      },
    ],

    reviews: [
      {
        user: "Aisha",
        rating: 4,
        comment: "Very healthy meals.",
      },
      {
        user: "Varun",
        rating: 5,
        comment: "Loved the smoothie.",
      },
    ],
  },

  {
    id: 7,
    name: "Chinese Wok",
    image: "https://cdn.dummyjson.com/recipe-images/8.webp",
    rating: 4.7,
    description: "Authentic Chinese and Asian dishes.",
    priceForTwo: "₹499",
    deliveryTime: "25 mins",
    offers: ["20% OFF", "Free Spring Rolls"],
    address: "Gomti Nagar, Lucknow",

    menu: [
      {
        id: 701,
        name: "Hakka Noodles",
        price: 199,
        image: "https://cdn.dummyjson.com/recipe-images/8.webp",
        description: "Veg noodles with sauces",
      },
      {
        id: 702,
        name: "Manchurian",
        price: 249,
        image: "https://cdn.dummyjson.com/recipe-images/8.webp",
        description: "Spicy veg manchurian",
      },
      {
        id: 703,
        name: "Fried Rice",
        price: 219,
        image: "https://cdn.dummyjson.com/recipe-images/8.webp",
        description: "Classic fried rice",
      },
    ],

    reviews: [
      {
        user: "Ankit",
        rating: 5,
        comment: "Very tasty noodles.",
      },
      {
        user: "Riya",
        rating: 4,
        comment: "Loved the manchurian.",
      },
    ],
  },

  {
    id: 8,
    name: "South Indian Corner",
    image: "https://cdn.dummyjson.com/recipe-images/28.webp",
    rating: 4.6,
    description: "Authentic South Indian food.",
    priceForTwo: "₹349",
    deliveryTime: "18 mins",
    offers: ["Flat ₹75 OFF"],
    address: "Alambagh, Lucknow",

    menu: [
      {
        id: 801,
        name: "Masala Dosa",
        price: 149,
        image: "https://cdn.dummyjson.com/recipe-images/28.webp",
        description: "Crispy dosa with masala",
      },
      {
        id: 802,
        name: "Idli Sambhar",
        price: 99,
        image: "https://cdn.dummyjson.com/recipe-images/28.webp",
        description: "Soft idli",
      },
      {
        id: 803,
        name: "Vada",
        price: 89,
        image: "https://cdn.dummyjson.com/recipe-images/28.webp",
        description: "Crispy medu vada",
      },
    ],

    reviews: [
      {
        user: "Karan",
        rating: 5,
        comment: "Best dosa in town.",
      },
      {
        user: "Pooja",
        rating: 4,
        comment: "Good sambhar.",
      },
    ],
  },

  {
    id: 9,
    name: "Burger Hub",
    image: "https://cdn.dummyjson.com/recipe-images/24.webp",
    rating: 4.5,
    description: "Juicy burgers and fries.",
    priceForTwo: "₹399",
    deliveryTime: "20 mins",
    offers: ["Buy 1 Get 1 Burger"],
    address: "Indira Nagar, Lucknow",

    menu: [
      {
        id: 901,
        name: "Cheese Burger",
        price: 199,
        image: "https://cdn.dummyjson.com/recipe-images/24.webp",
        description: "Loaded with cheese",
      },
      {
        id: 902,
        name: "Chicken Burger",
        price: 249,
        image: "https://cdn.dummyjson.com/recipe-images/24.webp",
        description: "Crispy chicken patty",
      },
      {
        id: 903,
        name: "French Fries",
        price: 99,
        image: "https://cdn.dummyjson.com/recipe-images/24.webp",
        description: "Crispy fries",
      },
    ],

    reviews: [
      {
        user: "Arjun",
        rating: 5,
        comment: "Amazing burgers.",
      },
      {
        user: "Sara",
        rating: 4,
        comment: "Fries were awesome.",
      },
    ],
  },

  {
    id: 10,
    name: "Cafe Coffee Spot",
    image: "https://cdn.dummyjson.com/recipe-images/25.webp",
    rating: 4.8,
    description: "Coffee, snacks and desserts.",
    priceForTwo: "₹599",
    deliveryTime: "15 mins",
    offers: ["Free Coffee on orders above ₹500"],
    address: "Hazratganj, Lucknow",

    menu: [
      {
        id: 1001,
        name: "Cold Coffee",
        price: 179,
        image: "https://cdn.dummyjson.com/recipe-images/25.webp",
        description: "Creamy cold coffee",
      },
      {
        id: 1002,
        name: "Cappuccino",
        price: 149,
        image: "https://cdn.dummyjson.com/recipe-images/25.webp",
        description: "Hot coffee",
      },
      {
        id: 1003,
        name: "Brownie",
        price: 199,
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
        description: "Chocolate brownie",
      },
    ],

    reviews: [
      {
        user: "Aman",
        rating: 5,
        comment: "Excellent coffee.",
      },
      {
        user: "Nisha",
        rating: 5,
        comment: "Loved the ambience.",
      },
    ],
  },

  {
    id: 11,
    name: "Royal Kebabs",
    image: "https://cdn.dummyjson.com/recipe-images/14.webp",
    rating: 4.9,
    description: "Mughlai and kebab specialties.",
    priceForTwo: "₹799",
    deliveryTime: "30 mins",
    offers: ["25% OFF"],
    address: "Chowk, Lucknow",

    menu: [
      {
        id: 1101,
        name: "Seekh Kebab",
        price: 299,
        image: "https://cdn.dummyjson.com/recipe-images/14.webp",
        description: "Juicy seekh kebab",
      },
      {
        id: 1102,
        name: "Galouti Kebab",
        price: 349,
        image: "https://cdn.dummyjson.com/recipe-images/14.webp",
        description: "Lucknow special",
      },
      {
        id: 1103,
        name: "Rumali Roti",
        price: 49,
        image: "https://cdn.dummyjson.com/recipe-images/14.webp",
        description: "Soft rumali roti",
      },
    ],

    reviews: [
      {
        user: "Faizan",
        rating: 5,
        comment: "Authentic kebabs.",
      },
      {
        user: "Ali",
        rating: 5,
        comment: "Must try.",
      },
    ],
  },
];

export default restoMenu;
