const TMDB_IMAGE_URL = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/";
const API_URL = "http://localhost:3000/";

// List View - index.html
const loadListView = () => {
  fetch(API_URL + "api/movies")
    .then((response) => response.json())
    .then((movies) => {
      let movieList = "";
      movies.map((movie) => {
        movieList += `
          <div class="card">
            <div><img class="poster-image" src="${TMDB_IMAGE_URL + movie.poster_path}" alt="${movie.title}"></div>
            <div class="wrapper">
              <div class="description">
                <h2>${movie.title.length >= 29 ? movie.title.slice(0, 29) + "..." : movie.title}</h2>
                <p>${movie.tagline}</p>
              </div>
              <a href="movie.html#${movie.id}">
                <img class="detail-view-arrow" src="assets/img/panah-kanan.png" alt="Detail Arrow">
              </a>
            </div>
          </div>
        `;
      });

      document.querySelector(".container").innerHTML = `
        <header><h1>Popular Movies</h1></header>
        <main>${movieList}</main>
      `;
    });
};

// Detail View - movie.html
const loadDetailView = (id) => {
  fetch(API_URL + "api/movie/" + id)
    .then((response) => response.json())
    .then((movie) => {
      let directors = "";
      movie.directors.map((director) => {
        directors += `
          <div class="grid-item">
            <p class="name">${director.name}</p>
            <p class="position">Directors</p>
          </div>
        `;
      });

      let writers = "";
      movie.writers.map((writer) => {
        writers += `
          <div class="grid-item">
            <p class="name">${writer.name}</p>
            <p class="position">Writers</p>
          </div>
        `;
      });

      let pemain = "";
      movie.cast.map((cast) => {
        pemain += `
          <div class="grid-item">
            <p class="name">${cast.name}</p>
            <p class="position">Casts</p>
          </div>
        `;
      });

      document.querySelector(".container").innerHTML = `
        <header>
          <a class="icon" href="index.html">
            <img src="assets/img/panah-kiri.png" alt="Back Arrow">
            <span>Back</span>
          </a>
          <h1 class="title">${movie.title}</h1>
        </header>
        
        <main>
          <section class="thumbnail">
            <img src="${TMDB_IMAGE_URL + movie.poster_path}" alt="${movie.title}">
            <h2 class="title"><b>${movie.title}</b> (${movie.release_date.slice(0, 4)})</h2>
            <p>${movie.certification} | ${movie.release_date} | ${movie.original_language}</p>
          </section>
  
          <h3 class="overview">Overview</h3>
  
          <section class="content">
            <p class="overview-text">${movie.overview}</p>
            <div class="grid">${directors}</div>
            <div class="grid">${writers}</div>
            <div class="grid">${pemain}</div>
          </section>
        </main>
      `;
    });
}

// Change the HTML content dynamically based on URL
const router = () => {
  const path = window.location.pathname.split('/');
  const filename = path[path.length - 1];
  
  if (filename === 'movie.html') {
    const id = window.location.hash.slice(1);
    loadDetailView(id);
  } else {
    loadListView();
  }
}
window.addEventListener('load', router);
window.addEventListener('hashchange', router);