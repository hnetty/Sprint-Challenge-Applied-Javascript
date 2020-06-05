// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  console.log(response.data.articles);
  createArticles(response.data.articles);
})
.catch(error => {
  console.log(error)
},[])




function createArticles(information){

    console.log(Object.keys(information));
    
    let parentDiv = document.querySelector('.tabs');
    debugger

    for (let i = 0; i < information.length; i++){
        debugger
        console.log(information[i]);
        parentDiv.appendChild(newArticle(information[i]));

    }

    return parentDiv;

}


function newArticle(position){

    let sectionDiv = document.createElement('div');

    for (let i = 0; i < 4; i++){
        debugger;
        
        let articleCard = document.createElement('div');
        let articleHeadline = document.createElement('div');
        let author = document.createElement('div');
        let imageHolder = document.createElement('div');
        let image = document.createElement('img');
        let name = document.createElement('span');

        articleCard.classList.add('.card');
        articleHeadline.classList.add('.headline');
        author.classList.add('.author');
        imageHolder.classList.add('.img-container');

        articleHeadline.textContent = position.headline;
        name.textContent = position.authorName;
        image.src = position.authorPhoto;

        sectionDiv.appendChild(articleCard);
    }

    return sectionDiv;

}