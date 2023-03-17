
const prodotti = document.querySelector("#homeShop .row");
const prodotti_URL = "https://striveschool-api.herokuapp.com/api/product/";

const getProducts = async function () {
  try {
    let response = await fetch(prodotti_URL, {
      method: "GET",
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYTExNWM1NmIzNjAwMTMzZmU1NWYiLCJpYXQiOjE2NzkwNTA5OTgsImV4cCI6MTY4MDI2MDU5OH0.8EyoT3H_hc4kzdLB_ZdSAc6IlkuonmhZeRrvfDwBKck" },
    });

    console.log(response);
    
    if (response.ok) {
      let products = await response.json();
      products.forEach((prod) => {
        cardHome( prod.imageUrl, prod.name, prod.description, prod.price, prod._id);
      });

      console.log(products);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
getProducts();

let cardHome = (prodImg, prodName, prodDespt, prodPrice, prodId) => {
  let newCard = document.createElement("div");
  newCard.classList.add("col-3");
  newCard.classList.add("m-4");
  newCard.classList.add("mt-1");
  newCard.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${prodImg}" class="card-img-top" alt="">
  <div class="card-body">
  <h3 class="card-title fs-1">${prodName}</h3>
  <p class="card-text fs-4">${prodDespt}</p>
  <p class="card-text fs-6">${prodPrice}</p>
  <a href="./backoffice.html?prodId=${prodId}" id="btnModify" class="btn btn-success">Modifica</a>
  </div>
  </div>`;
  prodotti.appendChild(newCard);
};