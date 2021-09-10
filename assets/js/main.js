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

const containerCaroussel = document.getElementById("containerCaroussel");

fetch(
  `https://api.harvardartmuseums.org/image?q=width:<600&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`
)
  .then((response) => response.json())
  .then((data) => {
    containerCaroussel.innerHTML = `<p>${data.records[2].date}</p>`
    containerCaroussel.innerHTML += '<img id="galleryImg" src="" alt="">'
    galleryImg.setAttribute("src", data.records[2].baseimageurl);
  });

async function next() {
  let rnd = (Math.random() * 10).toFixed();
  await fetch(
    `https://api.harvardartmuseums.org/image?q=width:<600&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`
  )
    .then((response) => response.json())
    .then((data) => {
      containerCaroussel.innerHTML = `<p>${data.records[rnd].date}</p>`
      containerCaroussel.innerHTML += '<img id="galleryImg" src="" alt="">'
      galleryImg.setAttribute("src", data.records[rnd].baseimageurl);
    });
}

async function previous() {
  let rnd = (Math.random() * 10).toFixed();
  await fetch(
    `https://api.harvardartmuseums.org/image?q=width:<600&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`
  )
    .then((response) => response.json())
    .then((data) => {
      containerCaroussel.innerHTML = `<p>${data.records[rnd].date}</p>`
      containerCaroussel.innerHTML += '<img id="galleryImg" src="" alt="">'
      galleryImg.setAttribute("src", data.records[rnd].baseimageurl);
    });
}

function searchArt() {

document.getElementById("containerGallery").style.display = "inline-block";

let person = "displayname:" + document.getElementById("inputArtist").value;
//let year = "displayyear:" + document.getElementById("inputYear").value

fetch(
  `https://api.harvardartmuseums.org/person?q=${person}&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`
)
  .then((response) => response.json())
  .then((data) => {
    if (data.records.length > 0) {
      document.getElementById("displayname").innerHTML =
        data.records[0].displayname;
      document.getElementById("culture").innerHTML = data.records[0].culture;
      document.getElementById("birth").innerHTML = data.records[0].datebegin;
      document.getElementById("death").innerHTML = data.records[0].dateend;
      document.getElementById("birthplace").innerHTML =
        data.records[0].birthplace;
      document
        .getElementById("galleryURL")
        .setAttribute("href", data.records[0].url);
      document
        .getElementById("wikidataURL")
        .setAttribute(
          "href",
          "https://www.wikidata.org/wiki/" + data.records[0].wikidata_id
        );
    } else {
    }
  });
}
