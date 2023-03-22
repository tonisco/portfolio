// eslint-disable-next-line import/prefer-default-export
export const projects = [
  {
    id: 1,
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
    id: 2,
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
