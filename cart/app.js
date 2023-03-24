// Products
const products = [
    {id: 1, name: "Tal", price: "150.00"},
    {id: 2, name: "Saban", price: "200.00"},
    {id: 3, name: "Pawder", price: "30.00"},
    {id: 4, name: "Wheel er gura", price: "150.00"},
    {id: 5, name: "Shampoo", price: "5.00"},
    {id: 6, name: "Chanachur", price: "30.00"},
    {id: 7, name: "Muri adha kg", price: "50.00"},
    {id: 8, name: "Biskut", price: "15.00"},
    {id: 9, name: "Kofi", price: "15.00"},
    {id: 10, name: "Noodles", price: "20.00"},
];
let cart = [];

// Setup products into html
const productsDiv = document.getElementById("products");
let productHtml = '';

products.forEach(product => {
    productHtml += `<div>
        <h2 class="uppercase font-bold">${product.name}</h2>
        <span class="block mb-2">BDT ${product.price}</span>
        <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-block" onclick="addToCart(${product.id})">Add to cart</a>
    </div>`;
});

productsDiv.innerHTML = productHtml;

function addToCart(id) {
    products.forEach((product) => {
        if(product.id == id) {
            cart.push(product);
        }
    });

    cartHTMLBuilder();
    console.log(cart);
}

// Cart HTML builder
const cartTable = document.getElementById("tbody");

function cartHTMLBuilder() {
    let cartHTML = "";
    
    cart.forEach((item) => {
        cartHTML += `<tr>
            <td>${item.name}</td>
            <td class="text-right">1</td>
            <td class="text-right">${item.price}</td>
            <td class="text-right">${1 * item.price}</td>
        </tr>`;
    });
    
    cartTable.innerHTML = cartHTML;
}
