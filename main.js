const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail")


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
