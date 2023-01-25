console.log("Check javascript");

function changeImage(){
    let currenImage1=document.getElementById('image1')

    if(currenImage1.src.match('./6.jpg')){
        currenImage1.src='./13.jpg'
    }else{
        currenImage1.src='./6.jpg'
    }

}
function changeImage2(){
    let currenImage2=document.getElementById('image2')
    if(currenImage2.src.match('./7.jpg')){
        currenImage2.src='./12.jpg'
    }
    else{
        currenImage2.src='./7.jpg'
    }
}
function changeImage3(){
    let currenImage3=document.getElementById('image3')
    if(currenImage3.src.match('./8.jpg')){
        currenImage3.src='./11.jpg'
    }
    else{
        currenImage3.src='./8.jpg'
    }
}

let flag=0
function controller(x)
{
    flag=flag+x
    slideshow(flag)
}
slideshow(flag)

function slideshow(num){
    let slides= document.getElementsByClassName('item')
    console.log(slides)

    if(num==slides.length){
        flag=0
        num=0
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1
    }
    for(let y of slides){
        y.style.display="none"
    }
    slides[num].style.display="block"
 }

 function first(){
    document.getElementById("slideImage").src="./11.jpg";
 }

 function second(){
    document.getElementById("slideImage").src="./22.jpg";
 }
 function third(){
    document.getElementById("slideImage").src="./23.jpg";
 }
 setInterval(first,2000)
 setInterval(second,4000)
 setInterval(third,6000)



// let carts = document.querySelectorAll(".Add-cart");
// let products=[
//     {
//         price:90,
//         tag:'ROADSTER-SKIRTS',
//         inCart:0
//     },
//     {
//         price:50,
//         tag:'MISS CAHSE-SKIRTS',
//         inCart:0
//     },
//     {
//         price:70,
//         tag:'LOUNGE PANTS',
//         inCart:0
//     },
//     {
//         price:10,
//         tag:'BROWN SHIRT',
//         inCart:0
//     },
//     {
//         price:80,
//         tag:'DENIM JACKET',
//         inCart:0
//     },
//     {
//         price:12,
//         tag:'DENIM TROUSERS',
//         inCart:0
//     }
// ];
// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener("click", () => {
//     cartNumbers(products[i]);
//     totalCost(products[i])
//   });
// }
// function cartNumbers(product){
//     let productNumbers=localStorage.getItem('cartNumbers');
//     productNumbers=parseInt(productNumbers);
//     if(productNumbers){
//     localStorage.setItem('cartNumbers', productNumbers+1);
//     document.querySelector('.cart1 span').textContent=productNumbers+1 ;
//     }else{
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart1 span').textContent=1 
//     }
//     setItem(product);
// }
// function setItem(product){
//     let cartItems=localStorage.getItem('productsInCart');
//     cartItems=JSON.parse(cartItems);
//     if(cartItems!=null){
//         if(cartItems[product.tag]==undefined){
//             cartItems={
//                 ...cartItems,
//                 [product.tag]:product
//             }
//         }
//         cartItems[product.tag].inCart+=1
//     }else{
//         product.inCart=1;
//         cartItems={
//         [product.tag]: product
//     }
//     }
//     localStorage.setItem("productsInCart",JSON.stringify(cartItems));
// }

// function totalCost(product){
     
//     let cartCost=localStorage.getItem('totalCost');
    
//     console.log("my cartCost is",cartCost);
//     console.log(typeof cartCost)
//     if(cartCost!=null){
//         cartCost=parseInt(cartCost);
//         localStorage.setItem("totalCost",cartCost + product.price);
//     }else{
//         localStorage.setItem("totalCost",product.price);
//     }
// }
// function displayCart(){
//     let cartItems=localStorage.getItem("productsInCart")
//     cartItems=JSON.parse(cartItems)
//     let productContainer=document.querySelector(".products");
//     let cartCost=localStorage.getItem('totalCost');
//     console.log(cartItems)
//     if(cartItems && productContainer){
//         productContainer.innerHTML='';
//         Object.values(cartItems).map(item =>{
//             console.log(item.tag)
//             productContainer.innerHTML +=`
//             <div class="product">
//                 <ion-icon name="close-circle-outline"></ion-icon>
//                 <img src="${item.tag}.jpg">  
//                 <span>${item.tag}</span>
//             </div>
//             <div class="price">${item.price}</div>
//             <div class="quantity">
//             <ion-icon name="remove-circle-outline"></ion-icon>
//             <span>${item.inCart}</span>
//             <ion-icon name="add-circle-outline"></ion-icon>
//             </div
//             <div class="total">
//             $${item.inCart * item.price},00
//             </div>
//             `
//         });  
//         productContainer.innerHTML+=   `
//             <div class="basketTotalContainer">
//             <h4 class="basketTotal">
//                 Basket Total
//             </h4>
//             <h4 class="basketTotal">
//                 ${cartCost},00
//             </h4>
//         `;
//     }
// }
// displayCart();