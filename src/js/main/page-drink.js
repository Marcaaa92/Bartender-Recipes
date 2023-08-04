var a = window.location.search;
var url = "https://servermarca.duckdns.org/drink/data.php?action=byid&id=" + a.substr(1, a.length);
fetch(url)
  .then(response => response.json())
  .then(data => {
    let strMeasure = [data[0].strMeasure1, data[0].strMeasure2, data[0].strMeasure3, data[0].strMeasure4, data[0].strMeasure5, data[0].strMeasure6, data[0].strMeasure7, data[0].strMeasure8, data[0].strMeasure9, data[0].strMeasure10, data[0].strMeasure11, data[0].strMeasure12, data[0].strMeasure13, data[0].strMeasure14];
    let strIngredients = [data[0].strIngredient1, data[0].strIngredient2, data[0].strIngredient3, data[0].strIngredient4, data[0].strIngredient5, data[0].strIngredient6, data[0].strIngredient7, data[0].strIngredient8, data[0].strIngredient9, data[0].strIngredient10, data[0].strIngredient11, data[0].strIngredient12, data[0].strIngredient13, data[0].strIngredient14];
    var container = document.getElementById("container");
    var div = container.appendChild(document.createElement("div"));
    var cardTemplate = `
        <ul class="drinkr--is-list">
          <li class="drinkr--is-element">
            <h1 class="drinkr--is-main-title"><a>${data[0].strDrink}</a></h1>
            </br>
            <h2 class="drinkr--is-subtitle-half">Category: ${data[0].strCategory}</h2>
            <br>
            <h2 class="drinkr--is-subtitle-half">Glass type: ${data[0].strGlass}</h2>
            <br>
            <br>
            <br>
            <h3 class="drinkr--is-subtitle">Ingredients:</h3>
            <ul class="drinkr--is-procedure-description">
            `;
    for (let i = 0; i < strMeasure.length; i++) {
      if (strMeasure[i] != " " && strMeasure[i] != ""||strIngredients[i] != " " && strIngredients[i] != "")
        cardTemplate = cardTemplate + `<li>${strMeasure[i]}  ${strIngredients[i]}</li>`;
    }
    cardTemplate = cardTemplate + `
            </ul>
            <br>
            <br>
            <h3 class="drinkr--is-subtitle">Procedure:</h3>
            <br>
            <p class="drinkr--is-procedure-description">${data[0].strInstructions}</p>
          </li>
          <li class="drinkr--is-element">
            <figure>
              <figcaption class="drinr--is-image-is-container">
                <img class="drinkr--is-image" src="./assets/images/drink-webp/${data[0].id}.webp" alt="Image of: ${data[0].strDrink}"></img>
              </figcaption>
            </figure>
          </li>
        <ul>
    `;
    div.innerHTML = cardTemplate;
  });
