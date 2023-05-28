import {shoppingCartHeaderImg, shoppingCartHeader, shoppingCartHeaderText, body, searhHeader} from "./wrap.js"
import {get, localStorage_set} from "./localStorage.js"
import { search, productUrl, outputDiv} from "./product.js"



const searchh = [];

fetch ('https://6437f3b7c1565cdd4d623862.mockapi.io/product')
.then((res) => res.json())
.then(data => {
    // console.log('data >>>', data)

    data.forEach(el => {
        // console.log(el.title)
        searchh.push(el)
    })
    // console.log(search)

})







function searchProducts(query) {
    return searchh.filter((product) => {
      const name = product.title.toLowerCase();
      const category = product.id.toLowerCase();
      const searchTerm = query.toLowerCase();
      return name.includes(searchTerm) || category.includes(searchTerm);
    });
  }


  const resultsContainer = document.querySelector(".output");

  function renderResults(results) {
    // Очищаем контейнер с результатами
    resultsContainer.innerHTML = "";

    // Если результаты найдены
    if (results.length > 0) {
      // Создаем HTML-элементы для каждого найденного продукта
      const items = results.map((product) => {
        return `<div class = "product"><div class="primer" id='${product.id}'>
        <div class="img "><img class = "imgProduct " src="${product.avatar}" alt="Product Image">
        <div class="skidca ">-${product.createdAt}</div>
        <button class ="korzina "></button>
        </div>
        <div class="cena ">
    <div class="cenatovara "><b>${product.cost} BYN.</b></div>
    <div class="lastCost ">${product.lastCost}</div>
    <div class="nazvanie ">${product.title}</div>
        </div>
      </div>
      </div> `;
      });
      
      // Добавляем HTML-элементы в контейнер с результатами
      resultsContainer.innerHTML = items.join("");
    } else {
      // Если результаты не найдены, показываем сообщение об ошибке
      resultsContainer.innerHTML = "<p>No results found.</p>";
    }
  }


  searhHeader.addEventListener("input", (event) => {
    const query = event.target.value.trim();
    const results = searchProducts(query);
    renderResults(results);
  });

 