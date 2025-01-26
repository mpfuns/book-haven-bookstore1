



//Newsletter form 
const newsletterForm =document.getElementById("newsletter-form")

newsletterForm.addEventListener("submit", (e)=> {
e.preventDefault();
alert("Thank you for subscribing");
document.getElementById("newsletter-email").value= "";

})

//Contact form

document.getElementById("contact-form")?.addEventListener("submit", (e)=>{
    e.preventDefault(); 
    let customerForm={ name: "", email: "", phone: "", order: "", message: ""};
    console.log(localStorage);
    customerForm.name = document.getElementById("name-input").value;
    customerForm.email = document.getElementById("email-input").value;
    customerForm.phone = document.getElementById("phone-input").value;
    customerForm.order = document.getElementById("order-input").value;
    customerForm.message = document.getElementById("message-input").value;
    localStorage.setItem('customerForm', JSON.stringify(customerForm));
    console.log(localStorage);
    alert("Thank you for your message");
    document.getElementById("name-input").value= "";
    document.getElementById("email-input").value= "";
    document.getElementById("phone-input").value= "";
    document.getElementById("order-input").value= "";
    document.getElementById("message-input").value= "";


})
   

// add to  cart 
 const cartButton =  document.getElementsByClassName("cart-button");
 
 let cartItems = JSON.parse(sessionStorage.getItem('cartItems'))? JSON.parse(sessionStorage.getItem('cartItems')) :[];


 if(cartItems.length > 0 && document.getElementById("cart-items-group")){
    document.getElementById("cart-items-group").innerHTML = cartItems.map(item => cartItemRender(item)).join('')
 }


  for (let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click', ()=>{
        cartItems.push(cartButton[i].value)
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        
        document.getElementById("cart-items-group").innerHTML = cartItems.map(item => cartItemRender(item)).join('')
        
        return alert("Item added to the cart")
    })
  };

   function cartItemRender(title){
        return `
        <div class="cart-item">
              <h4>${title}</h4>
              <button type="button" onclick="removeFromCart('${title}')" value="${title}" >Remove</button>
            </div>`

   }

   function removeFromCart (title){
    cartItems = cartItems.filter(item => item !== title)
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  
    document.getElementById("cart-items-group").innerHTML = cartItems.map(item => cartItemRender(item)).join('')
    
    return alert("Item removed from the cart")
   }


    //view cart
  function viewCart() {
    document.getElementById('cart-display').style.display = 'block';
}
function closeCart() {
    document.getElementById('cart-display').style.display = 'none';
}

//clear cart
if(document.getElementById("clear-all_button")){
document.getElementById("clear-all_button").addEventListener("click", ()=>{
    if(cartItems.length === 0){
        alert("No items to clear")}
    else{
         sessionStorage.clear();
         cartItems = [];
         document.getElementById("cart-items-group").innerHTML =""
        
        alert("Cart cleared")}
})
}
//checkout
if(document.getElementById("checkout_button")){


document.getElementById("checkout_button").addEventListener("click", ()=>{
    if(cartItems.length === 0){
        alert("Cart is empty")}
    else{
         sessionStorage.clear();
         cartItems = [];
         document.getElementById("cart-items-group").innerHTML ="";
         
        alert("Thank you for your order")}
})

}

document.getElementById("menu-open")?.addEventListener("click", ()=>{
    document.getElementById("menu").style.display = 'block';
})
document.getElementById("menu-close")?.addEventListener("click", ()=>{
    document.getElementById("menu").style.display = 'none';
})



