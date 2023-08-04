http("https://servermarca.duckdns.org/drink/data.php?action=count", "total");
var a, b, total, lasta, body, lastr = 1,
  lastrs = 40,
  dataa
a = parseInt(1);
b = parseInt(0);
total = parseInt(0);
//function of http request, action is whats the function do with data
function http(url, action) {
  //inizialize data variable
  var data;
  //if the action is total get the total row of complete table
  if (action == "total") {
    fetch(url) //fetch url
      .then(response => response.json()) //decode response
      .then(data => {
        total = data;
      }) //assign data array to data
      .then(p => {
        add()
      }); //after fetch and assign run add function
  } else if (action == "all") {
    fetch(url) //fetch url
      .then(response => response.json()) //decode respons
      .then(p => {
        dataa = p;
      });
  } else if (action == "find") {
    fetch(url) //fetch url
      .then(response => response.json()) //decode response
      .then(data => {
        print(data)
      });
  } else {
    fetch(url) //fetch url
      .then(response => response.json())
      .then(data => {
        print(data)
      });
  }
}
//add create start and end value of index
function add() {
  //get the user step
  var step = 40

  if (lasta != a) {
    a = b + 1;
    b = b + step;
  } else {
    a = lasta;
    b = b + step;
  }
  lasta = b + 1;
  lastrs = step;
  lastr = a;
  //assign the maximum value of b if b goes upp to total row
  if (b >= total) {
    b = total + 1;
    http("https://servermarca.duckdns.org/drink/data.php?action=all&start=" + a + "&end=" + b, "table");
  } else {
    http("https://servermarca.duckdns.org/drink/data.php?action=all&start=" + a + "&end=" + b, "table");
  }
  //check btn
  checkbtn();
}

function remove() {
  //get the user step
  var step = 40
  if (step != lastrs) {
    a = a - step;
    b = lastr;
  } else {
    a = a - step;
    b = b - step;
  }
  lasta = b + 1;
  lastr = a;
  lastrs = step;

  //assign the minimum value of a if a goes under 1 and b the total count of user step
  if (a <= 1) {
    a = 1;
    b = step;
    http("https://servermarca.duckdns.org/drink/data.php?action=all&start=" + a + "&end=" + b, "table");
  } else {
    http("https://servermarca.duckdns.org/drink/data.php?action=all&start=" + a + "&end=" + b, "table");
  }
  //check btn
  checkbtn();
}
//disable button of + and -
function checkbtn() {
  if (a == 1) {
    document.getElementById("button-").disabled = true;
    document.getElementById("button+").disabled = false;
  } else if (b > total) {
    document.getElementById("button+").disabled = true;
    document.getElementById("button-").disabled = false;
  } else {
    document.getElementById("button+").disabled = false;
    document.getElementById("button-").disabled = false;
  }
}

function finde() {
  var term = document.getElementById("term").value;
  http("https://servermarca.duckdns.org/drink/data.php?action=search&item=drink&filter=" + term, "find");
}

function print(data) {
  var list = document.getElementById("listDrink");
  list.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var li = list.appendChild(document.createElement("li"));
    const cardTemplate = `
        <span class="drink--is-name"><a href="page-drink.html?${data[i].id}">${data[i].strDrink}</a></span>
        </br>
        <span class="drink--is-category">${data[i].strCategory}</span>
      <figure>
        <figcaption class="drink--is-image-is-container">
          <img class="drink--is-image"  src="assets/images/drink-webp/${data[i].id}.webp" alt="Image of: ${data[i].strDrink}"></img>
        </figcaption>
      </figure>
    `;
    li.innerHTML = cardTemplate;
    li.setAttribute("class", "drink");
  }
}
