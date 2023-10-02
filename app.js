// Create a constructor function that creates an object associated with each product
function Product(name, src, imgCount) {
  this.name = name;
  this.src = src;
  this.imgCount = imgCount;
}

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
function renderProducts() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();
}

// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.

// function to choose a random product
function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

// function to render 2 random products
function renderProducts() {
  // get 2 rnadom indexes from our product array
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();

  // prevent the two images being the same product
  while (product1Index === product2Index) {
    product2Index = getRandomIndex();
  }

  image1.src = allProducts[product1Index].src;
  image2.src = allProducts[product2Index].src;
  image1.alt = allProducts[product1Index].name;
  image2.alt = allProducts[product2Index].name;

  allProducts[product1Index].views++;
  allProducts[product2Index].views++;
}

function handleProductClick(event) {
  let clickedProduct = event.target.alt;

  // check if the click is on an image
  if (event.target === ProductContainer) {
    alert("Please click on an image");
  } else {
    renderProducts();
  }

  // increase the clicks of the product
  // loop through allProducts
  for (let i = 0; i < allProducts.length; i++) {
    // check if the name of the product in the array, matches the alt tag of our image
    if (clickedProduct === allProducts[i].name) {
      // increase the number of clicks
      allProducts[i].clicks++;
      // stop the for loop because we found the product
      break;
    }
  }
}

// make the products
const allProducts = [
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
  new Product("bag", "./images/bag.jpg"),
];

productContainer.addEventListener("click", handleProductClick);

renderProducts();
