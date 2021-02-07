const initMovies = [
  {
    "title": "10,000 BC",
    "genreNames": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "History"
    ],
    "year": 2008,
    "runtime": "109 min",
    "plot": "In the prehistoric past, D'Leh is a mammoth hunter who bonds with the beautiful Evolet. When warriors on horseback capture Evolet and the tribesmen, D'Leh must embark on an odyssey to save his true love.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzc2NDMzNDY4Ml5BMl5BanBnXkFtZTYwNzM2Njk3._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=P9fkOu2xgsk"
  },
  {
    "title": "Adventures in Zambezia",
    "genreNames": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "year": 2012,
    "runtime": "83 min",
    "plot": "Set in a bustling bird city on the edge of the majestic Victoria Falls, \"Zambezia\" is the story of Kai, a naïve, but high-spirited young falcon who travels to the bird city of \"Zambezia\", ...",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTEyNzE5MDc3NF5BMl5BanBnXkFtZTcwNjA3MzAxOA@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=hDgdA1RIcFk"
  },
  {
    "title": "Avatar",
    "genreNames": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "year": 2009,
    "runtime": "162 min",
    "plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=9MEnSM55TwY"
  },
  {
    "title": "Charlie and the Chocolate Factory",
    "genreNames": [
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Musical"
    ],
    "year": 2005,
    "runtime": "115 min",
    "plot": "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=fJNs4rCCcK4"
  },
  {
    "title": "Deep",
    "genreNames": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "year": 2017,
    "runtime": "92 min",
    "plot": "In 2100, when humanity has abandoned the earth, a colony of extravagant creatures still thrives in the deepest abyss of the ocean. Deep, an adventurous \"dumbo\" octopus and the last one of ...",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmQ0MWYzZjYtNGFiNS00MjE4LTliODUtMTFhOGIwMzY0ZWFmXkEyXkFqcGdeQXVyNjcwODQ2Nzc@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=ZgGeCDabgGY"
  },
  {
    "title": "Divergent",
    "genreNames": [
      "Action",
      "Adventure",
      "Mystery",
      "Sci-Fi"
    ],
    "year": 2014,
    "runtime": "139 min",
    "plot": "In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=uqESY2CbVt0"
  },
  {
    "title": "Green Street Hooligans",
    "genreNames": [
      "Crime",
      "Drama",
      "Sport",
      "War"
    ],
    "year": 2005,
    "runtime": "109 min",
    "plot": "A wrongfully expelled Harvard undergrad moves to London, where he is introduced to the violent underworld of football hooliganism.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjExNTg3NzYwMV5BMl5BanBnXkFtZTcwMzcxMTEzMQ@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=tRz7tFm28OE"
  },
  {
    "title": "Home",
    "genreNames": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Sci-Fi"
    ],
    "year": 2015,
    "runtime": "94 min",
    "plot": "An alien on the run from his own people makes friends with a girl. He tries to help her on her quest, but can be an interference.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=M38Q1RiYhQw"
  },
  {
    "title": "Lucy",
    "genreNames": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "year": 2014,
    "runtime": "89 min",
    "plot": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=7NUO161j32o"
  },
  {
    "title": "Next Gen",
    "genreNames": [
      "Animation",
      "Action",
      "Adventure",
      "Comedy",
      "Family",
      "Sci-Fi"
    ],
    "year": 2018,
    "runtime": "106 min",
    "plot": "A friendship with a top-secret robot turns a lonely girl's life into a thrilling adventure as they take on bullies, evil bots and a scheming madman.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=M2NuYezYsyw"
  },
  {
    "title": "Passengers",
    "genreNames": [
      "Drama",
      "Romance",
      "Sci-Fi",
      "Thriller"
    ],
    "year": 2016,
    "runtime": "116 min",
    "plot": "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=PWSyRtyPYXM"
  },
  {
    "title": "Pretty Woman",
    "genreNames": [
      "Comedy",
      "Romance"
    ],
    "year": 1990,
    "runtime": "119 min",
    "plot": "A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjk2ODQzNDYxNV5BMl5BanBnXkFtZTgwMTcyNDg4NjE@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=r05Yea1EXns"
  },
  {
    "title": "Princess of Thieves",
    "genreNames": [
      "Action",
      "Adventure",
      "Family"
    ],
    "year": 2001,
    "runtime": "88 min",
    "plot": "When her father is captured by The Sheriff of Nottingham and Prince John, Robin Hood's daughter sets out to help the son and rightful heir of King Richard the Lionheart sit on the throne as well as rescue her captive father.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTIzODM0NDI4N15BMl5BanBnXkFtZTcwNjQxNTUyMQ@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=vmbJTFM4yG8"
  },
  {
    "title": "Ratatouille",
    "genreNames": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "year": 2007,
    "runtime": "111 min",
    "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=AirZz-Pl6JI"
  },
  {
    "title": "Sinbad and the War of the Furies",
    "genreNames": [
      "Action",
      "Adventure"
    ],
    "year": 2016,
    "runtime": "90 min",
    "plot": "On a treasure hunt gone wrong, modern-day adventurer Sinbad accidentally releases the Furies, three beautiful but terrible ancient beings powerful enough to threaten life on Earth.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTM2OTQ0Y2YtM2FmMi00ZTZjLWJlNmEtMjFkMmU2OTJhMmZhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTUwMTIyODg@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=LUpPRBkLQoc"
  },
  {
    "title": "The Adventures of Sharkboy and Lavagirl 3-D",
    "genreNames": [
      "Action",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Sci-Fi"
    ],
    "year": 2005,
    "runtime": "93 min",
    "plot": "A young boy is recruited by his imaginary friends Sharkboy and Lavagirl to help save their planet.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjY5NGNhNDMtNDM3OC00YTc0LWFiMzYtNWQ1NWYyYzFjOTk0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=js-bPzCzxQo"
  },
  {
    "title": "The Incredible Hulk",
    "genreNames": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "year": 2008,
    "runtime": "112 min",
    "plot": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=M0JVskHMxXY"
  },
  {
    "title": "The Jurassic Games",
    "genreNames": [
      "Action",
      "Adventure",
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "year": 2018,
    "runtime": "86 min",
    "plot": "In the near future, 10 death row convicts are forced to compete in a virtual reality game that pits them against dinosaurs and each other.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZWJkMzE4ZTAtOTY1ZS00YmZjLWI2MzQtZTg4MzdiN2U4NmUyXkEyXkFqcGdeQXVyMTUwMzY1MDM@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=D0924l7Dxmg"
  },
  {
    "title": "Wonder Park",
    "genreNames": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "year": 2019,
    "runtime": "85 min",
    "plot": "Wonder Park tells the story of an amusement park where the imagination of a wildly creative girl named June comes alive.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjI5MTQ5NzE4Nl5BMl5BanBnXkFtZTgwNTk2MDA5NjM@._V1_SX300.jpg",
    "movieUrl": "https://www.youtube.com/watch?v=_XlMOOArTUM"
  }
];

module.exports = initMovies;