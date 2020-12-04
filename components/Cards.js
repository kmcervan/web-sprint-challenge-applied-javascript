// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios");

const title = document.querySelector('.title');

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) => {
    console.log(res.data.articles);
    const nameOne = res.data.articles;
    const nameTwo = functionTwo(nameOne);
})

function functionTwo({data}){
    
    // data.forEach((one) => {
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let author = document.createElement('div');
        let imgCon = document.createElement('div');
        let img = document.createElement('img');
        let span = document.createElement('span');

        title.appendChild(card);
        card.appendChild(headline);
        card.appendChild(author);
        card.appendChild(imgCon);
        card.appendChild(img);
        card.appendChild(span);

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgCon.classList.add('img-container');
        
        headline.textContent = `${data[0].authorName}`;
        span.textContent = `${data[0].authorName}`;
        img.src = `${data[0].authorPhoto}`;
    // })
    return card;
}