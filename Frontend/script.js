// Task No 1
fetch("tmdbMovies.json")
  .then((response) => response.json())
  .then((movies) =>
    movies.map((list_view) => {
      let container = document.querySelector(".index");
      let div_img = document.createElement("div");
      div_img.className = "img";
      div_img.innerHTML = `<img src = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/${list_view.poster_path}"/>`;

      let div_content = document.createElement("div");
      div_content.className = "content";
      div_content.innerHTML = `
      ${list_view.title.length >= 29 ? `<span> ${list_view.title.slice(0, 29)} ... </span>` : `<span> ${list_view.title}</span>`}
      <br>
      <small> ${list_view.tagline} </small>
      <br>
      <br>`;

      let div_icon = document.createElement("div");
      div_icon.className = "icon";

      div_icon.innerHTML = "<img src='panah_kanan.png' />";
      container.appendChild(div_img);
      container.appendChild(div_content);
      container.appendChild(div_icon);
    })
  );

// TASK NO 2
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
        
        <div class = "overview">
          <h3> Overview </h3>
        </div>
                
        <div class = "isi_txt">
            <p> ${tom_jerry.overview} </p>
          
            <p class = "director"> ${tom_jerry.directors[0].name}
            <br>
            <span> Director </span>
            </p>
            
            <div class = "writer"> 
              <div class = "col" 
                <p> ${tom_jerry.writers[0].name} 
                <br>
                <span> Writers </span>
                </p>
      
                <p> ${tom_jerry.writers[1].name} 
                <br>
                <span> Writers </span>
                </p>
              </div>
      
              <div class = "col"
                <p> ${tom_jerry.writers[2].name} 
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
      
                <p> ${tom_jerry.cast[1].name} 
                <br>
                <span> Casts </span>
              </div>
              
              <div class = "col">
                <p> ${tom_jerry.cast[2].name} 
                <br>
                <span> Casts </span>
              </div>
          </div>
        </div>
      </div>     
      `;
    });
  });
