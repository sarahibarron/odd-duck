const img1 = document.getElementById(img1)
const img2 = document.getElementById(img2)
const img3 = document.getElementById(img3)

let userClicks = 0;
let maxClicks = 25;

// Create a constructor function that creates an object associated with each product
function Product(name) {
  this.name = name;
  this.src = `./images/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
}

const products = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("bag"),
  new Product("bag"),
  new Product("bag"),
  new Product("bag"),
];

console.log(products);

function randomProdIdx() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let prod1 = randomProdIdx();
  let prod2 = randomProdIdx();
  let prod3 = randomProdIdx();
}

while (prod1 === prod2 || prod1 === prod3 || prod2 === prod3) {
  prod2 = randomProdIdx();
  prod3 = randomProdIdx();
}

img1.src = products[prod1].src;
img2.src = products[prod2].src;
img3.src = products[prod3].src;
img1.alt = products[prod1].name;
img2.alt = products[prod2].name;
img3.alt products[prod3].name;

products[prod1].views++;
products[prod2].views++;
products[prod3].views++;

renderProducts();

function handleImgClick(event) {
  let clickedProduct = event.target.alt;
  for(let i = 0; i < products.length; i++){
    if(clickedProduct === products[i].name){
      products[i].clicks++ ;
      break 
    }
  }
  renderProducts();

  if(userClicks === maxClicks){
    console.log ("Maximum Clicks");
  }

}

img1.addEventListener("click" , handleImgClick);
img2.addEventListener("click" , handleImgClick);
img3.addEventListener("click" , handleImgClick);