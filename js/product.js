// // document.addEventListener("DOMContentLoaded", productLoader);

import { body, productsWrapper, footerInfoAppsLi1 } from "./wrap";
import { localStorage_set, get } from "./localStorage.js";

const productUrl = "https://6437f3b7c1565cdd4d623862.mockapi.io/product";


const outputDiv = document.createElement("div");
outputDiv.classList.add("output");
productsWrapper.appendChild(outputDiv);

function Korzina(id, avatar, createdAt, cost, lastCost, title) {
  this.id = id;
  this.avatar = avatar;
  this.createdAt = createdAt;
  this.cost = cost;
  this.lastCost = lastCost;
  this.title = title;
}

const korzina = [];
const search = []

fetch("https://6437f3b7c1565cdd4d623862.mockapi.io/product")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("product");
      postDiv.innerHTML = `<div class="primer" id='${post.id}'>
      <div class="img"><img class = "imgProduct" src="${post.avatar}" alt="Product Image">
      <div class="skidca">-${post.createdAt}</div>
      <button class ="korzina"></button>
      </div>
      <div class="cena">
  <div class="cenatovara"><b>${post.cost} BYN.</b></div>
  <div class="lastCost">${post.lastCost}</div>
  <div class="nazvanie">${post.title}</div>
      </div>
    </div> `;
      korzina.push(
        new Korzina(
          post.id,
          post.avatar,
          post.createdAt,
          post.cost,
          post.lastCost,
          post.title
        )
      );
      search.push(post)
      outputDiv.appendChild(postDiv);
    });
  })
  .catch((error) => console.error(error));

fetch("https://6437f3b7c1565cdd4d623862.mockapi.io/product")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      function productClick(event) {
        const target = event.target;
        if (
          target.classList.contains("imgProduct") &&
          target.parentElement.parentElement.id == post.id
        ) {
          const modal = document.createElement("div");
          modal.classList.add("modal");
          modal.innerHTML = `
            <div class="modal-content">
              <img src="${post.avatar}" width="550px" alt="Enlarged Product Image">
              <span class="close-modal">&times;</span>
            </div>
          `;
          body.classList.add("overflow");
          document.body.appendChild(modal);
        }
      }
      outputDiv.addEventListener("click", productClick);
    });
  });

function deleteProductClick(event) {
  const target = event.target;
  if (target.classList.contains("modal")) {
    target.remove();
    body.classList.remove("overflow");
  }
}

body.addEventListener("click", deleteProductClick);


const shoppingCartArr = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  if (get("shoppingCart")) {
    shoppingCartArr.push(...get("shoppingCart"));
  }
}

function shoppingCart(event) {
  const target = event.target;
  if (target.classList.contains("korzina")) {
    korzina.forEach((el) => {
      if (target.parentElement.parentElement.id === el.id) {
        shoppingCartArr.push(el);
      }
    });
  }
  localStorage_set("shoppingCart", shoppingCartArr);
}

outputDiv.addEventListener("click", shoppingCart);

export { shoppingCartArr, search, productUrl, outputDiv };

// localStorage.clear()
