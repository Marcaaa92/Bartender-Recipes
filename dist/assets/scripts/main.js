var url="https://servermarca.duckdns.org/drink/data.php?action=random&number=20";fetch(url).then(r=>r.json()).then(r=>{for(var i=document.getElementById("listDrink"),a=0;a<r.length;a++){var e=i.appendChild(document.createElement("li")),n=`
          <span class="drink--is-name"><a href="page-drink.html?${r[a].id}">${r[a].strDrink}</a></span>
          </br>
          <span class="drink--is-category">${r[a].strCategory}</span>
        <figure>
          <figcaption class="drink--is-image-is-container">
            <img class="drink--is-image" src="assets/images/drink-webp/${r[a].id}.webp" alt="Image of: ${r[a].strDrink}"></img>
          </figcaption>
        </figure>
    `;e.innerHTML=n,e.setAttribute("class","drink")}});