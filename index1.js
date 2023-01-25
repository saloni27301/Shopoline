let carts = document.querySelectorAll(".Add-cart");
let products=[
    {
        image:"19.jpg",
        price:90,
        tag:'ROADSTER-SKIRTS',
        inCart:0
    },
    {
        image:"16.jpg",
        price:50,
        tag:'MISS CAHSE-SKIRTS',
        inCart:0
    },
    {
        image:"15.jpg",
        price:70,
        tag:'LOUNGE PANTS',
        inCart:0
    },
    {
        image:"17.jpg",
        price:10,
        tag:'BROWN SHIRT',
        inCart:0
    },
    {
        image:"20.jpg",
        price:80,
        tag:'DENIM JACKET',
        inCart:0
    },
    {
        image:"18.jpg",
        price:12,
        tag:'DENIM TROUSERS',
        inCart:0
    }
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  });
}
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart1 span').textContent=productNumbers;
    }
}
function cartNumbers(product){
    console.log(product)
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.querySelector('.cart1 span').textContent=productNumbers+1 ;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart1 span').textContent=1 
    }
    setItem(product);
}

function setItem(product){
    console.log(product)
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart+=1
    }else{
        product.inCart=1;
        cartItems={
        [product.tag]: product
    }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
    
}

function totalCost(product){
     
    let cartCost=localStorage.getItem('totalCost');
    
    console.log("my cartCost is",cartCost);
    console.log(typeof cartCost)
    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
}
function displayCart(){
    let cartItems=localStorage.getItem("productsInCart")
    cartItems=JSON.parse(cartItems)
    let productContainer=document.querySelector(".products");
    let cartCost=localStorage.getItem('totalCost');
    // console.log(cartItems)
    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
        //    console.log(item)
            productContainer.innerHTML +=`
            <div class="product">
                <ion-icon name="close-circle-outline" onclick="deletedItemfromCart(${item.image})" class="cross")"></ion-icon>
                <img src="${item.image}" /> 
                <span>${item.tag}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon name="add-circle-outline"></ion-icon>
            </div
            <div class="total">
            $${item.inCart * item.price},00
            </div>
            `
        });  
        productContainer.innerHTML+=   `
            <div class="basketTotalContainer">
            <h4 class="basketTotal">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                ${cartCost},00
            </h4>
        `;
        
}
else{
    console.log("cart is empty")
    productContainer.innerHTML +=`
            <h1 style="color:orange; text-align:center; padding:100px;" class"Noitems">OOPS!.......Your Cart does not have any items!....</h1>
            `
        ;  
}
}
onLoadCartNumbers()
displayCart();



function deletedItemfromCart(image){
    
    let cartItems=localStorage.getItem('productsInCart');
    let newCart=cartItems.filter((item1)=>item1.image!=image)
    console.log(newCart)
    localStorage.setItem('cartItems',JSON.stringify(newCart))
    onLoadCartNumbers()
}













// let Deleteitem=document.getElementsByClassName("cross");
//         Deleteitem.addEventListener('onclick',deleted())
//     function deleted(){
    
//         console.log("Deleted item")

//         let cartItems=localStorage.getItem('productsInCart');
//         console.log(cartItems)
//         // let productContainer=document.querySelector(".products");
//         if(cartItems ){
            
//             Object.values(cartItems).map(item =>{
//                 console.log(item.tag)
//                 // cartItems=JSON.parse(item) 
//         //delete
//         // removeItem(item)
//         localStorage.setItem('productsInCart',JSON.stringify(item));
//             });
//     }
//     onLoadCartNumbers()
// }

// function deleted(ItemIndex){
    
//     console.log("Deleted item",ItemIndex)
//     let cartItems=localStorage.getItem('productsInCart');
//     itemJsonArray=JSON.parse(itemJsonArraystr)
//     //delete
//     itemJsonArray.splice(ItemIndex,1)
//     localStorage.setItem('itemJson',JSON.stringify(cartItems));
// }