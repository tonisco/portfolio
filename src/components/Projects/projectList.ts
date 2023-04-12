// eslint-disable-next-line import/prefer-default-export
export const projects = [
  {
    id: 2,
    name: "loftyshop",
    githubLink: "https://github.com/tonisco/LoftyShop",
    liveLink: "https://lofty-shop.onrender.com/",
    image: "/images/loftyshop.jpeg",
    image_alt: "loftyshop",
    description: `A production ready eCommerce with paypal and paystack integration as a payment medium.
    It can host many vendors selling clothing items of different categories with a simple admin dashboard to add, edit and remove products.
    Logged in users can make purchases and make payment for items and also make comment on all the available products. Users can also see all the orders they have made.
    The platform is fully controlled by an admin user who delete a user or vendor,make another admin user and mark orders as delivered and mark orders as paid if order is payment on delivery`,
    short_description:
      "A complete eCommerce platform built with the MERN stack & Redux with payment integration",
    majorLibraries: [
      "express",
      "mongodb",
      "javascript",
      "docker",
      "react",
      "redux",
      "paystack",
      "paypal",
      "css",
    ],
  },
  {
    id: 3,
    name: "movie spot",
    githubLink: "https://github.com/tonisco/movie-spot",
    liveLink: "https://moviespot.vercel.app/",
    image: "/images/movie_spot.jpeg",
    image_alt: "movie_spot",
    description: `A movie site with all the trending movies and tv shows. It makes use of the use of the tmdb api for its data.
    It provides all details of the details the movies with a search bar to find any movie of your choice
    You can store your wishlist of movies and series you would like to see later.`,
    short_description:
      "A movie site filled with details of the latest movies and tv series available using the tmdb api",
    majorLibraries: ["next js", "react", "javascript", "styled components"],
  },
  {
    id: 5,
    name: "peoplebook",
    githubLink: "https://github.com/tonisco/facebook_clone",
    liveLink: "https://peoplebook-app.vercel.app/",
    image: "/images/peoplebook.jpeg",
    image_alt: "peoplebook",
    description: `A facebook clone with the basic functionality of the facebook.
    To view the full features of the app, a user must be logged in use their google mail account.
    The features include creating a post with and without images, liking a post, creating comment on a post and also creating comment on someone's comment.
    With the feature of adding a story`,
    short_description:
      "A facebook clone made with next js, with the basic functionality of the facebook app",
    majorLibraries: [
      "next js",
      "react",
      "javascript",
      "firebase",
      "tailwind",
      "next-auth",
    ],
  },
]
