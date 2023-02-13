
const APIKEY = "vf9ICCGbLNLJRy3N5wmXQto18nUTjbUj";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.querySelector("#button").addEventListener("click", (ev) => {

    getgiphys();
  });
}

async function getgiphys() {
  const search = document.querySelector("#search").value;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=${APIKEY}`;
  const response = await fetch(url);
  const JavaScriptObject = await response.json();
    // console.table(JavaScriptObject)

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  image.src = JavaScriptObject.data[0].images.downsized.url;
  figcaption.textContent = JavaScriptObject.data[0].title;
  figure.appendChild(image);
  figure.appendChild(figcaption);
  const divcontent = document.querySelector("#content");
  divcontent.insertAdjacentElement("afterbegin", figure);
  document.querySelector("#search").value = "";
}

getgiphys();
