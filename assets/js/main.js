let images = "width:<800";
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

let records = [
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
];

const carousel = document.getElementById("carousel-container");

/* fetch(`https://api.harvardartmuseums.org/image?q=${images}&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`)
  .then((response) => response.json())
  .then((data) => { */
 
    console.log(records)

    //for (i = 0; i < data.records.length; i++) {
      for (i = 0; i < records.length; i++) {
      if (i < 10) {
        if (i == 0) {
          //set active
          carousel.innerHTML += `<div class="carousel-item active"><img class="d-block w-100" src="${records[i].baseimageurl}" alt="${slides[i]}"></div>`;
        } else {
          carousel.innerHTML += `<div class="carousel-item"><img class="d-block w-100" src="${records[i].baseimageurl}" alt="${slides[i]}"></div>`;
        }
      }
    }

    carousel.innerHTML += `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>`;
  //});