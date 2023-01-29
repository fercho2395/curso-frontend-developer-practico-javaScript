const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")



navEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
shoppingCar.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu(){
    const isShoppingMenuClosed = productDetail.classList.contains("inactive");
    if(!isShoppingMenuClosed){
        productDetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isShoppingMenuClosed = productDetail.classList.contains("inactive");
    if(!isShoppingMenuClosed){
        productDetail.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail(){
    const isMobileMenuClosed = menuBurger.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    productDetail.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "bycicle",
    price: "120",
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "pantalla",
    price: "200",
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "pc",
    price: "600",
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        // product  = {name, price, image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.Image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
} 

renderProducts(productList)