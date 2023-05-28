import {
  shoppingCartHeaderImg,
  shoppingCartHeader,
  shoppingCartHeaderText,
  body,
  productsWrapper,
} from "./wrap.js";
import { get, localStorage_set } from "./localStorage.js";
import { shoppingCartArr } from "./product.js";

function cart() {
  const modal1 = document.createElement("div");
  modal1.classList.add("modal");

  const modulWrapper = document.createElement("div");
  modulWrapper.classList.add("modulWrapper");
  modal1.appendChild(modulWrapper);

  const modulHeader = document.createElement("div");
  modulHeader.classList.add("modulHeader");
  modulWrapper.appendChild(modulHeader);

  const moduleLogo = document.createElement("div");
  moduleLogo.classList.add("moduleLogo");
  modulHeader.appendChild(moduleLogo);
  moduleLogo.textContent = `WIELDBERRIES`;

  const modulBody = document.createElement("div");
  modulBody.classList.add("modulBody");
  modulWrapper.appendChild(modulBody);

  const modulProduct = document.createElement("div");
  modulProduct.classList.add("modulProduct");
  modulBody.appendChild(modulProduct);

  const modulCost = document.createElement("div");
  modulCost.classList.add("modulCost");
  modulBody.appendChild(modulCost);

  const footerModal = document.createElement("div");
  footerModal.classList.add("footerModal");
  modulWrapper.appendChild(footerModal);



  const counts = new Map();

shoppingCartArr.forEach(el =>{
    counts.set(el.id, (counts.get(el.id) || 0) + 1);



})


  shoppingCartArr.forEach((el) => {



 
            const shoppingWrap = document.createElement("div");
            shoppingWrap.classList.add("shoppingWrap");
            shoppingWrap.id = el.id;

            
            modulProduct.appendChild(shoppingWrap);
        
        
        
            shoppingWrap.innerHTML = `<div class="primerModal" id='${el.id}'>
              <div class="imgModal"><img class = "imgProductModal" src="${el.avatar}" alt="Product Image">
              <div class="skidcaModal">-${el.createdAt}</div>
              </div>
              <div class="cenaModal">
          <div class="cenatovaraModal"><b>${el.cost} BYN.</b></div>
          <div class="lastCostModal">${el.lastCost}</div>
          <div class="nazvanieModal">${el.title}</div>
          <button class ="deleteModal">Delete</button>
              </div>
            </div> 
              <div class="valuesProductWrapper id = "${el.id}">
              <div class = "valuesProduct">
              <button class = "valuesProductMinus" id = "${el.id}">-</button>
              <input class = "valuesProductCalk" id = "${el.id}" placeholder = "${counts.get(el.id)}">
              <button class = "valuesProductPlus" id = "${el.id}">+</button>
              </div>
            </div>`;
  });


  body.classList.add("overflow");
  document.body.appendChild(modal1);
  modulProduct.addEventListener("click", deleteShoppingCart);
}

shoppingCartHeader.addEventListener("click", cart);

function deleteShoppingCart(event) {
  const target = event.target;
  if (target.classList.contains("deleteModal")) {
    shoppingCartArr.forEach((el) => {
      if (target.parentElement.parentElement.id == el.id) {
        shoppingCartArr.splice(el, 1);
      } else return;
    });
    target.parentElement.parentElement.parentElement.remove();
  }
  localStorage_set("shoppingCart", shoppingCartArr);
}
