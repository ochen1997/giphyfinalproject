// Declare avariable to hold the APIKEY.
const APIKEY = "vf9ICCGbLNLJRy3N5wmXQto18nUTjbUj";
// Add an EventListener to the Domcontent.
document.addEventListener("DOMContentLoaded", init);
// Create Function that will load the fectched data when called by the user and with the function do the following
function init() {
  // Add an EventListener to the button in the HTLM with an ID of button, in the eventlistener add an arrow function that will do the following.
  document.querySelector("#button").addEventListener("click", (ev) => {
    // prevent the form form loading
    ev.preventDefault();
    //  Call the getGiphys function where our fetched data resides
    getgiphys();
  });
}
// Create getGiphys function with as async and do the following
async function getgiphys() {
  // Declare and intantiate avariable to hold an element with and ID of search and add a value syntax at the end
  const search = document.querySelector("#search").value;
  //Declare a varaible to hold the API
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=${APIKEY}`;
  // Fetch data using await
  const response = await fetch(url);
  const JavaScriptObject = await response.json();
  // console.table(JavaScriptObject)
  //Create figure element
  const figure = document.createElement("figure");
  //Create an image element
  const image = document.createElement("img");
  // create a figcaption element
  const figcaption = document.createElement("figcaption");
  // Add an image src to the image element
  image.src = JavaScriptObject.data[0].images.downsized.url;
  //Add the title to the figcaption element
  figcaption.textContent = JavaScriptObject.data[0].title;
  //AppendChild image element to the figure element
  figure.appendChild(image);
  //ApendChild figcaption element to the figure element
  figure.appendChild(figcaption);
  // Declare a variable and to hold the content
  const divcontent = document.querySelector("#content");
  // Insert the figure Element in the content area.
  divcontent.insertAdjacentElement("afterbegin", figure);
  //Clear the search field after content is displayed.
  document.querySelector("#search").value = "";
}
//Call the getGiphy function and make sure everything works great.

getgiphys();
