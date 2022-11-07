fetch("tmdbMovies.json")
  .then((response) => response.json())
  .then((movies) =>
    movies.map((list_view) => {
      let container = document.querySelector(".container");
      let div_img = document.createElement("div");
      div_img.className = "img";
      div_img.innerHTML = `<img src = "http://image.tmdb.org/t/p/w600_and_h900_bestv2/${list_view.poster_path}"/>`;

      let div_content = document.createElement("div");
      div_content.className = "content";
      div_content.innerHTML = `
      <span> ${list_view.title}</span>
      <br>
      <small> ${list_view.tagline} </small>
      <hr>
      `;

      let div_panah = document.createElement("div");
      div_panah.className = "icon";
      div_panah.innerHTML = `<img src = "icon panah.png" />`;
      console.log(div_panah);
      container.appendChild(div_img);
      container.appendChild(div_content);
      container.appendChild(div_panah);
    })
  );
