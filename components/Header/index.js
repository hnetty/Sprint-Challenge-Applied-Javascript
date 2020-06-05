// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    let mainDiv = document.createElement('div');
    let dateSpan = document.createElement('span');
    let heading = document.createElement('h1');
    let tempSpan = document.createElement('span');
    
    mainDiv.appendChild(dateSpan);
    mainDiv.appendChild(heading);
    mainDiv.appendChild(tempSpan);

    mainDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent = 'MARCH 28, 2019';
    heading.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    return mainDiv;
}

let parentDiv = document.querySelector('.header-container');

parentDiv.appendChild(Header());