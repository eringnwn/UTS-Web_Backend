// Task No 1
fetch("tmdbMovies.json")
  .then((response) => response.json())
  .then((movies) => {
    let movieList = "";
    movies.map((movie) => {
      movieList += `
        <div class="card">
          <img class="poster-image" src="http://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}" alt="${movie.title}">
          <div class="wrapper">
            <div class="description">
              <h2>${movie.title.length >= 29 ? movie.title.slice(0, 29) + "..." : movie.title}</h2>
              <p>${movie.tagline}</p>
            </div>
            <a href="movie.html">
              <img class="detail-view-arrow" src="panah_kanan.png" alt="Arrow">
            </a>
          </div>
        </div>
      `;
    });
    document.querySelector("#movie-list").innerHTML = movieList;
  });

// Task No 2
fetch("tmdbMovies.json")
  .then((response) => response.json())
  .then((movies) => {
    let movie = movies.slice(4, 5);
    let container_movie = document.querySelector(".container");
    movie.map((tom_jerry) => {
      container_movie.innerHTML = `<header class ="header" >
          <div class = "icon_head">
          <a href = "index.html">
            <img src = "panah_kiri.png" />
            <span> Back</span>
          </a>            
          </div>

          <div class = "text_head">
            <h3> ${tom_jerry.title} </h3>
          </div>
        </header>
      
      <main class = "main">
        <section class = "thumbnail">
          <img src = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/${tom_jerry.poster_path}"/>
          <h3> ${tom_jerry.title} (${tom_jerry.release_date.slice(0, 4)})
          <br>
          <span>  ${tom_jerry.certification} | ${tom_jerry.release_date} | ${tom_jerry.original_language} </span>
          </h3>
        </section>

        <section class = "overview"> <h3> Overview </h3> </section>

        <section class = "isi_txt">
          <div class = "director">
            <p> ${tom_jerry.overview} </p>
            <p> ${tom_jerry.directors[0].name}
            <br>
            <span> Director </span>
            </p>
          </div>

          <div class = "writer"></div>
          <div class = "cast"></div>
        </section>
      </main>`;

      let penulis = tom_jerry.writers;
      let writers = "";
      penulis.map((writer) => {
        writers += `
             <p> ${writer.name}
             <br>
             <span> Writers </span>
             </p>          
          `;
      });
      document.querySelector(".writer").innerHTML = writers;

      let casts = tom_jerry.cast;
      let pemain = "";

      casts.map((cast) => {
        pemain += `
          <p> ${cast.name}
          <br>
          <span> Casts </span>`;
      });
      document.querySelector(".cast").innerHTML = pemain;
    });
  });
