const searchButton = document.getElementById("search-button");
let containErrors = false;
const validateForm = (event) => {
    event.preventDefault();
      var petitionInputs = document.getElementById("search-items").elements; 
      const validName = document.getElementById('name');
          if (validName.value.length < 5) {
              validName.classList.add('error');
              containErrors = true;
          } else {
              validName.classList.remove('error');
          
          }


}
searchButton.addEventListener("click", validateForm);




const request = async () => {
const apiKey = 'bnIpw-6MSLihS0noxoMJNu0G4ojJsj7Mak387aBug4L6yDgi';
const keywords = document.getElementById('name').value;
const url = 'https://api.currentsapi.services/v1/search?apiKey=' + apiKey + '&keywords=' + keywords;
  const response = await fetch(url);
  const data = await response.json();
  const news = data.news;
  for (var i = 0; i < 10; i++) {
    const link = document.createElement('a');
    link.classList.add('new-article');
    link.href = news[i].url;
    //let setting = browser.cookies.set(link.href)
    const title = document.createElement('h3');
    title.textContent = news[i].title;
    const description = document.createElement('p');
    description.textContent = news[i].description;
    const article = document.createElement('article');
    link.appendChild(article); article.appendChild(title);
    article.appendChild(description);
    const newsDiv = document.getElementById('search-result');
    newsDiv.append(link); 
  }



}
