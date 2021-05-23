function product(pNmae, pCategory, pPrice, pRait, pImgPath) {
  this.pNmae = pNmae;
  this.pCategory = pCategory;
  this.pPrice = pPrice;
  this.pRait = pRait;
  this.pImgPath = pImgPath;
  this.render();
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
  //   let hoverDiv = document.createElement("div");
  //   hoverDiv.className = "black";
  //   productDiv.appendChild(hoverDiv);
  //   allProducts.appendChild(productDiv);

  let div = document.createElement("div");

  let productCategory = document.createElement("span");
  productCategory.className = "product-category";
  productCategory.textContent = this.pCategory;
  div.appendChild(productCategory);

  let productName = document.createElement("span");
  productName.className = "product-name";
  productName.textContent = this.pNmae;
  div.appendChild(productName);

  let productPrice = document.createElement("span");
  productPrice.className = "product-price";
  productPrice.textContent = `${this.pPrice} JD`;
  div.appendChild(productPrice);

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

  let addButton = document.createElement("button");
  addButton.textContent = "Add to Cart";
  addButton.className = "addToCart";
  productDiv.appendChild(addButton);
};

let test1 = new product("KopiKo", "Candy", 1, 5, "img/p1.jpg");
let test2 = new product("Flower Bucket", "Gift", 2, 4, "img/p3.jpeg");
let test3 = new product("Air Heads", "Candy", 2, 3, "img/p2.webp");
let test4 = new product("Happy Box", "Gift", 20, 5, "img/p4.jpg");
let test11 = new product("KopiKo", "Candy", 1, 5, "img/p1.jpg");
let test21 = new product("Flower Bucket", "Gift", 2, 4, "img/p3.jpeg");
let test31 = new product("Air Heads", "Candy", 2, 5, "img/p2.webp");
let test41 = new product("Happy Box", "Gift", 20, 5, "img/p4.jpg");
