var url = "https://servermarca.duckdns.org/drink/data.php?action=random&number=20";
fetch(url)
  .then(response => response.json())
  .then(data => {
    var list = document.getElementById("listDrink");
    for (var i = 0; i < data.length; i++) {
      var li = list.appendChild(document.createElement("li"));
      const cardTemplate = `
          <span class="drink--is-name"><a href="page-drink.html?${data[i].id}">${data[i].strDrink}</a></span>
          </br>
          <span class="drink--is-category">${data[i].strCategory}</span>
        <figure>
          <figcaption class="drink--is-image-is-container">
            <img class="drink--is-image" src="assets/images/drink-webp/${data[i].id}.webp" alt="Image of: ${data[i].strDrink}"></img>
          </figcaption>
        </figure>
    `;
      li.innerHTML = cardTemplate;
      li.setAttribute("class", "drink");
    }
  });
