let productsList = [];
function product(pNmae, pCategory, pPrice, pRait, pImgPath) {
  this.pNmae = pNmae;
  this.pCategory = pCategory;
  this.pPrice = pPrice;
  this.pRait = pRait;
  this.pImgPath = pImgPath;
  productsList.push(this);
  this.render();
}
function getLocalStorage() {
  let local = JSON.parse(localStorage.getItem("products"));
  productsList = [];
  if (local != null) {
    for (let i = 0; i < local.length; i++) {
      new product(
        local[i].pNmae,
        local[i].pCategory,
        local[i].pPrice,
        local[i].pRait,
        local[i].pImgPath
      );
    }
  }
}
function setLocalStorage() {
  localStorage.removeItem("products");
  localStorage.setItem("products", JSON.stringify(productsList));
}
function dleteProduct(elemnt) {
  let local = [];
  for (let i = 0; i < productsList.length; i++) {
    if (i != elemnt) {
      local.push(productsList[i]);
    }
  }
  productsList = local;

  let TotalPrice = document.getElementById("TotalPrice");
  TotalPrice.textContent = "";
  setLocalStorage();
  let pList = document.getElementsByClassName("plist")[0];
  pList.textContent = "";
  getLocalStorage();
  if (productsList.length == 0) {
    let counter = document.getElementById("CartCounter");
    counter.textContent = 0;
    TotalPrice.textContent = 0;
  }
}

product.prototype.render = function () {
  let Index = productsList.length - 1;
  let pList = document.getElementsByClassName("plist")[0];
  let product = document.createElement("div");
  product.className = "product";
  let productimgDiv = document.createElement("div");
  productimgDiv.className = "product-img";
  let productIMG = document.createElement("img");
  productIMG.setAttribute("src", this.pImgPath);
  productimgDiv.appendChild(productIMG);
  product.appendChild(productimgDiv);

  let productinfo = document.createElement("div");
  productinfo.className = "product-info";

  let h1 = document.createElement("h1");
  h1.textContent = this.pNmae;
  let h2 = document.createElement("h2");
  h2.textContent = this.pCategory;
  productinfo.appendChild(h1);
  productinfo.appendChild(h2);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", `isGift${Index}`);
  checkbox.setAttribute("id", `isGift${Index}`);
  productinfo.appendChild(checkbox);

  let checkboxLable = document.createElement("label");
  checkboxLable.textContent = "This is a gift ";
  checkboxLable.setAttribute("for", `isGift${Index}`);
  productinfo.appendChild(checkboxLable);

  productinfo.appendChild(document.createElement("br"));

  // let quantity = document.createElement("select");
  // quantity.setAttribute("id", `quantity${Index}`);
  // quantity.setAttribute("name", `quantity${Index}`);
  // quantity.setAttribute("onchange", `updateQuantity(this)`);

  // let option;
  // for (let i = 1; i <= 10; i++) {
  //   option = document.createElement("option");
  //   option.textContent = i;
  //   option.setAttribute("value", i);
  //   quantity.appendChild(option);
  // }
  // productinfo.appendChild(quantity);

  let deleteButton = document.createElement("button");
  deleteButton.className = "deletButton";
  deleteButton.textContent = "remove item";
  deleteButton.setAttribute("onclick", `dleteProduct(${Index})`);
  productinfo.appendChild(deleteButton);

  let productPrice = document.createElement("div");
  productPrice.className = "product-price";
  let priceSpan = document.createElement("span");
  priceSpan.textContent = this.pPrice;
  productPrice.appendChild(priceSpan);
  let priceSign = document.createElement("span");
  priceSign.textContent = " JD";
  productPrice.appendChild(priceSign);

  product.appendChild(productinfo);

  product.appendChild(productPrice);

  pList.appendChild(product);
  let hr = document.createElement("hr");
  pList.appendChild(hr);
  let counter = document.getElementById("CartCounter");
  counter.textContent = Index + 1;
  let TotalPrice = document.getElementById("TotalPrice");
  TotalPrice.textContent = Number(TotalPrice.textContent) + this.pPrice;
};

getLocalStorage();
