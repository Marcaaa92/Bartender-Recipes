var a=window.location.search,url="https://servermarca.duckdns.org/drink/data.php?action=byid&id="+a.substr(1,a.length);fetch(url).then(r=>r.json()).then(r=>{var e=[r[0].strMeasure1,r[0].strMeasure2,r[0].strMeasure3,r[0].strMeasure4,r[0].strMeasure5,r[0].strMeasure6,r[0].strMeasure7,r[0].strMeasure8,r[0].strMeasure9,r[0].strMeasure10,r[0].strMeasure11,r[0].strMeasure12,r[0].strMeasure13,r[0].strMeasure14],s=[r[0].strIngredient1,r[0].strIngredient2,r[0].strIngredient3,r[0].strIngredient4,r[0].strIngredient5,r[0].strIngredient6,r[0].strIngredient7,r[0].strIngredient8,r[0].strIngredient9,r[0].strIngredient10,r[0].strIngredient11,r[0].strIngredient12,r[0].strIngredient13,r[0].strIngredient14],t=document.getElementById("container").appendChild(document.createElement("div")),i=`
        <ul class="drinkr--is-list">
          <li class="drinkr--is-element">
            <h1 class="drinkr--is-main-title"><a>${r[0].strDrink}</a></h1>
            </br>
            <h2 class="drinkr--is-subtitle-half">Category: ${r[0].strCategory}</h2>
            <br>
            <h2 class="drinkr--is-subtitle-half">Glass type: ${r[0].strGlass}</h2>
            <br>
            <br>
            <br>
            <h3 class="drinkr--is-subtitle">Ingredients:</h3>
            <ul class="drinkr--is-procedure-description">
            `;for(let r=0;r<e.length;r++)(" "!=e[r]&&""!=e[r]||" "!=s[r]&&""!=s[r])&&(i+=`<li>${e[r]}  ${s[r]}</li>`);i+=`
            </ul>
            <br>
            <br>
            <h3 class="drinkr--is-subtitle">Procedure:</h3>
            <br>
            <p class="drinkr--is-procedure-description">${r[0].strInstructions}</p>
          </li>
          <li class="drinkr--is-element">
            <figure>
              <figcaption class="drinr--is-image-is-container">
                <img class="drinkr--is-image" src="./assets/images/drink-webp/${r[0].id}.webp" alt="Image of: ${r[0].strDrink}"></img>
              </figcaption>
            </figure>
          </li>
        <ul>
    `,t.innerHTML=i});