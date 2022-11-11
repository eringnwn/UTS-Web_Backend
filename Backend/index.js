const express = require("express");
const cors = require("cors");

const app = express();
const host = "localhost";
const port = 3000;

let movies = require(__dirname + "/tmdbMovies.json");

app.use(express.json(), cors());
app.use(express.urlencoded({ extended: false }));

// Mengembalikan semua data movies dalam format JSON (array object)
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

// Mengembalikan data sesuai id movie dalam format JSON (object)
app.get("/api/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const getMovie = movies.find((movie) => movie.id == id);

  if (getMovie) {
    res.json(getMovie);
  } else {
    res.status(404).json({ message: "Movie is not found" });
  }
});

// Mengubah data sesuai id movie
app.put("/api/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = req.body;

  const getMovie = movies.find((movie) => movie.id == id);
  if (getMovie) {
    const idx = movies.indexOf(getMovie);
    const updatedMovie = { ...getMovie, ...movie };
    movies[idx] = updatedMovie;
    res.send({ id: updatedMovie.id });
  } else {
    res.status(404).send({ message: "Movie is not found" });
  }
});

// Menghapus data sesuai id movie
app.delete("/api/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const remainingMovies = movies.filter((movie) => movie.id != id);
  if (remainingMovies.length != movies.length) {
    res.send({ message: "Movie deleted successfully" });
  } else {
    res.status(404).send({ message: "Movie is not found" });
  }
  movies = remainingMovies;
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
