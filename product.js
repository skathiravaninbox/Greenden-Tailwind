// Selecting Side Navbar, MenuIcon

const sidenav= document.getElementById("sidenav")
const menuicon= document.getElementById("menuicon")
const closenav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0;
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%";
})

//Product Search Functionality
var productContainer=document.getElementById("product-container")
var search=document.getElementById("search")
var productList= productContainer.querySelectorAll("div")

console.log(productList)

search.addEventListener("keyup",function(){
    let enteredValue=event.target.value.toUpperCase()
    
    for(count=0;count<productList.length;count++){
        let productName=productList[count].querySelector("h1").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})