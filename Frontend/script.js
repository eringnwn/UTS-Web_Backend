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
      ${list_view.title.length >= 29 ? `<span> ${list_view.title.slice(0, 29)} ... </span>` : `<span> ${list_view.title}</span>`}
      <br>
      <small> ${list_view.tagline} </small> 
      <br>
      <br>`;

      let div_icon = document.createElement("div");
      div_icon.className = "icon";

      div_icon.innerHTML = "<img src='icon panah.png' />";
      container.appendChild(div_img);
      container.appendChild(div_content);
      container.appendChild(div_icon);
    })
  );
