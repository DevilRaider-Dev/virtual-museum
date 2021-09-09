

/*
fetch(`https://newsapi.org/v2/everything?${search}${date}${lang}sortBy=popularity&pageSize=5&apiKey=e04c883960964f798c33f40649f2b4b9`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let articles = data.articles

        articles.forEach(e => {

        let mainNews = new News(e.title, e.description, e.publishedAt, e.urlToImage, e.url)

        mainNews.pushNews()
    })
})
}
*/


//https://api.harvardartmuseums.org/person?q=culture:english
//29730
//${}
fetch(`https://api.harvardartmuseums.org/object?q=29730&apikey=2cf58dfc-f8e1-42b2-84af-24cda9d00b73`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });