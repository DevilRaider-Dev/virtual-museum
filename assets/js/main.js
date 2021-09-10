let slides = [
  "first slide",
  "second slide",
  "third slide",
  "fourth slide",
  "fifth slide",
  "sixth slide",
  "seventh slide",
  "eighth slide",
  "ninth slide",
  "tenth slide",
];

/* let records = [
  { baseimageurl: "https://unsplash.it/600" },
  { baseimageurl: "https://unsplash.it/601" },
  { baseimageurl: "https://unsplash.it/602" },
  { baseimageurl: "https://unsplash.it/603" },
  { baseimageurl: "https://unsplash.it/604" },
  { baseimageurl: "https://unsplash.it/605" },
  { baseimageurl: "https://unsplash.it/606" },
  { baseimageurl: "https://unsplash.it/606" },
  { baseimageurl: "https://unsplash.it/607" },
  { baseimageurl: "https://unsplash.it/608" },
  { baseimageurl: "https://unsplash.it/609" },
]; */

fetch(
  `https://api.harvardartmuseums.org/image?q=width:<800&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`
)
  .then((response) => response.json())
  .then((data) => {
    /* document.getElementById("containerCaroussel").innerHTML = `
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
    <div id="carousel-container" class="carousel-inner">
    </div>
  </div>`; */

    for (i = 0; i < data.records.length; i++) {
      //for (i = 0; i < records.length; i++) {
      if (i < 10) {
        if (i == 0) {
          //set active
          //document.getElementById("carousel-container").innerHTML += `<div class="carousel-item active"><img class="d-block w-100" src="${data.records[i].baseimageurl}" alt="${slides[i]}"></div>`;
        } else {
          //document.getElementById("carousel-container").innerHTML += `<div class="carousel-item"><img class="d-block w-100" src="${data.records[i].baseimageurl}" alt="${slides[i]}"></div>`;
        }
      }
    }

    /* document.getElementById("carousel-container").innerHTML += `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>`; */
  });

function searchArt() {
  let person = "displayname:" + document.getElementById("inputArtist").value;
  //let year = "displayyear:" + document.getElementById("inputYear").value

  fetch(
    `https://api.harvardartmuseums.org/person?q=${person}&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.records.length > 0) {
        document.getElementById("displayname").innerHTML =
          "Name: " + data.records[0].displayname;
        document.getElementById("culture").innerHTML =
          "Culture: " + data.records[0].culture;
        document.getElementById("birth").innerHTML =
          "Birth: " + data.records[0].datebegin;
        document.getElementById("death").innerHTML =
          "Death:" + data.records[0].dateend;
        document.getElementById("birthplace").innerHTML =
          "Birthplace: " + data.records[0].birthplace;
        document
          .getElementById("galleryURL")
          .setAttribute("href", data.records[0].url);
        document.getElementById("galleryURL").innerHTML = "Gallery";
        document
          .getElementById("wikidataURL")
          .setAttribute(
            "href",
            "https://www.wikidata.org/wiki/" + data.records[0].url
          );
        document.getElementById("wikidataURL").innerHTML = "WikiData";
      } else {
      }
    });
}
