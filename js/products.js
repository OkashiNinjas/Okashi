let productsArr = [];
let productsInCart = [];

function product(pNmae, pCategory, pPrice, pRait, pImgPath) {
  this.pNmae = pNmae;
  this.pCategory = pCategory;
  this.pPrice = pPrice;
  this.pRait = pRait;
  this.pImgPath = pImgPath;

  productsArr.push(this);
  this.render();
}

function setLocalStorage() {
  localStorage.setItem("products", JSON.stringify(productsInCart));
}
function getLocalStorage() {
  let local = JSON.parse(localStorage.getItem("products"));
  if (local != null) {
    productsInCart = local;
    let counter = document.getElementById("cart");
    counter.textContent = productsInCart.length;
  }
}

product.prototype.render = function () {
  let allProducts = document.getElementById("all-products");

  let productDiv = document.createElement("div");
  productDiv.className = "product";

  let productIMG = document.createElement("img");
  productIMG.className = "product-img";
  productIMG.src = this.pImgPath;
  productDiv.appendChild(productIMG);
  allProducts.appendChild(productDiv);

  let div = document.createElement("div");

  let productCategory = document.createElement("span");
  productCategory.className = "product-category";
  productCategory.textContent = this.pCategory;
  div.appendChild(productCategory);

  let productName = document.createElement("span");
  productName.className = "product-name";
  productName.textContent = this.pNmae;
  div.appendChild(productName);

  let raitingDiv = document.createElement("div");
  raitingDiv.className = "product-rating";

  let star;
  for (let i = 1; i <= 5; i++) {
    star = document.createElement("span");
    if (i <= this.pRait) {
      star.className = "fa fa-star checked";
    } else {
      star.className = "fa fa-star ";
    }
    raitingDiv.appendChild(star);
  }

  div.appendChild(raitingDiv);
  productDiv.appendChild(div);

  let elwrapper = document.createElement("div");
  elwrapper.className = "el-wrapper";
  elwrapper.setAttribute(
    "onclick",
    `addProductToCart(${productsArr.length - 1})`
  );
  let boxdown = document.createElement("div");
  boxdown.className = "box-down";
  let hbg = document.createElement("div");
  hbg.className = "h-bg";
  let hbginner = document.createElement("div");
  hbginner.className = "h-bg-inner";
  hbg.appendChild(hbginner);
  boxdown.appendChild(hbg);

  let a = document.createElement("a");
  a.className = "cart";
  a.style.cursor = "pointer";
  let priceSpan = document.createElement("span");
  priceSpan.className = "price";
  priceSpan.textContent = `${this.pPrice} JD`;
  let addtocartSpan = document.createElement("span");
  addtocartSpan.className = "add-to-cart";
  let textSpan = document.createElement("span");
  textSpan.className = "txt";
  textSpan.textContent = "Add in cart";

  a.appendChild(priceSpan);
  addtocartSpan.appendChild(textSpan);
  a.appendChild(addtocartSpan);
  boxdown.appendChild(a);
  elwrapper.appendChild(boxdown);
  productDiv.appendChild(elwrapper);
};

let test1 = new product("KopiKo", "Candy", 1, 5, "../img/p1.jpg");
let test2 = new product("Flower Bucket", "Gift", 2, 4, "../img/p3.jpeg");
let test3 = new product("Air Heads", "Candy", 2, 3, "../img/p2.webp");
let test4 = new product("Happy Box", "Gift", 20, 5, "../img/p4.jpg");

function addProductToCart(index) {
  for (let i = 0; i < productsArr.length; i++) {
    if (i == index) {
      productsInCart.push(productsArr[index]);
      break;
    }
  }
  let counter = document.getElementById("cart");
  counter.textContent = productsInCart.length;
  setLocalStorage();
}
getLocalStorage();
