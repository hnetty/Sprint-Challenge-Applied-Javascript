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
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(response => {
//   console.log(response.data.articles);
//   const items = Object.keys(response.data);
//   console.log(items);
//   debugger
//   items.forEach(element => {
//     createArticles(element);
//   });
  
// })
// .catch(error => {
//   console.log(error)
// },[])

const data = Object.keys({"articles":{"javascript":[{"headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"},{"headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"},{"headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"}],"bootstrap":[{"headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},{"headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}],"technology":[{"headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"},{"headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"./assets/max.jpg","authorName":"MAX GOODBOYE"}],"jquery":[{"headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"},{"headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"./assets/fido.jpg","authorName":"FIDO WALKSALOT"}],"node":[{"headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUF"},{"headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"}]}});

data.forEach(element => {
    createArticles(element);
});


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