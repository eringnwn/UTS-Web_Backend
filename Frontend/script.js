// Task No 1
fetch("tmdbMovies.json")
  .then((response) => response.json())
  .then((movies) => {
    let movieList = '';
    movies.map((movie) => {
      movieList += `
        <div class="card">
          <img class="poster-image" src="http://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}" alt="${movie.title}">
          <div class="wrapper">
            <div class="description">
              <h2>${movie.title.length >= 29 ? movie.title.slice(0, 29) + '...' : movie.title}</h2>
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
    let container = document.querySelector(".movie");
    movie.map((tom_jerry) => {
      container.innerHTML = `
      <div class = "head"> 
        <div class = "icon_head">
          <img src = "panah_kiri.png" />
          <span> Back </span>
        </div>
        
        <div class = "text_head">
          <h3> ${tom_jerry.title} </h3>
        </div>
      
      </div>

      <div class = "main">
        <div class = "thumbnail">
          <img src = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/${tom_jerry.poster_path}"/>
          <h3> ${tom_jerry.title} (${tom_jerry.release_date.slice(0, 4)})
          <br>
          <span>  ${tom_jerry.certification} | ${tom_jerry.release_date} | ${tom_jerry.original_language} </span>     
          </h3>
        </div>
        
        <span> <h3> Overview </h3> </span>
                        
        <div class = "isi_txt">
          <div class = "director">
            <p> ${tom_jerry.overview} </p>
            <p> ${tom_jerry.directors[0].name}
            <br>
            <span> Director </span>
            </p>

          </div>
           
            
            <div class = "writer"> 
              <div class = "col" 
                <p> ${tom_jerry.writers[0].name} 
                <br>
                <span> Writers </span>
                </p>
      
                <p> ${tom_jerry.writers[2].name} 
                <br>
                <span> Writers </span>
                </p>
              </div>
      
              <div class = "col"
                <p> ${tom_jerry.writers[1].name} 
                <br>
                <span> Writers </span>
                </p>
              </div>
            </div> 
      
          <div class = "cast">
              <div class = "col">
                <p> ${tom_jerry.cast[0].name} 
                <br>
                <span> Casts </span>
      
                <p> ${tom_jerry.cast[2].name} 
                <br>
                <span> Casts </span>
              </div>
              
              <div class = "col">
                <p> ${tom_jerry.cast[1].name} 
                <br>
                <span> Casts </span>
              </div>
          </div>
        </div>
      </div>     
      `;
    });
  });
