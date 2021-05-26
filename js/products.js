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

let p1 = new product(
  "Colorful bouquet",
  "Flower",
  25,
  5,
  "https://do5ctr7j643mo.cloudfront.net/wp-content/uploads/2017/02/06095857/Maison-des-Fleurs-Box-of-Flowers.jpg"
);
let p2 = new product(
  "Red roses",
  "Flower",
  30,
  4,
  "https://maisondesfleurs.com/media/catalog/product/cache/625187da366490656fb834f81d8b48fe/a/w/aw3a0378_1.jpg"
);
let p3 = new product(
  "Red roses",
  "Flower",
  15,
  3,
  "http://theluxediary.com/wp-content/uploads/2018/01/Maison-Des-Fleurs_Valentine%C2%B4s-Day_Gift-Idea_6.jpg"
);
let p4 = new product(
  "White orchid",
  "Flower",
  15,
  5,
  "https://nanzandkraft.imgix.net/images/itemVariation/WaterfallOrchidPlant287W-20041714952.jpg"
);
let p5 = new product(
  "Blue orchid",
  "Flower",
  15,
  5,
  "https://www.avasflowers.net/img/prod_img/avasflowers-lavender-orchid-plant.jpg"
);
let p6 = new product(
  "Candy Cake",
  "Candy",
  20,
  4,
  "https://fyf.tac-cdn.net/images/products/small/C-100.jpg?auto=webp&quality=60"
);
let p7 = new product(
  "Chocolate bouquet",
  "Chocolate",
  20,
  3,
  "http://artchocolat.com/wp-content/uploads/2013/08/Chocolate-Bouquets-4-360x360.jpg"
);
let p8 = new product(
  "Candy bouquet",
  "Candy",
  20,
  5,
  "https://www.en.1800flowers.co.il/images/itempics/bc555_large.jpg"
);
let p9 = new product(
  "Unicorn pinata",
  "Pinata",
  35,
  5,
  "https://cdn.shopify.com/s/files/1/0254/2030/0362/products/27720-Pink-Unicorn-Pinata_f15246fc-7fce-42d1-bd58-ed42fe81ede2_1024x.jpg?v=1571308984"
);
let p10 = new product(
  "Pikachu pinata",
  "Pinata",
  25,
  4,
  "https://m.media-amazon.com/images/I/61Osaj0FO1L.jpg"
);
let p11 = new product(
  "Chocolate box",
  "Chocolate",
  25,
  3,
  "https://www.puyricard.fr/140-large_default/square-box-of-chocolates-300-g.jpg"
);
let p12 = new product(
  "Candy Box",
  "Candy",
  20,
  5,
  "https://cdn03.ciceksepeti.com/cicek/kc52097-1/XL/turuncu-ruya-seker-sepeti-kc52097-1-1.jpg"
);
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
