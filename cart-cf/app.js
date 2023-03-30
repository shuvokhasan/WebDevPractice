// Products
const products = [
    {id: 1, name: "Tal", quantity: 1, price: "150.00"},
    {id: 2, name: "Saban", quantity: 1, price: "200.00"},
    {id: 3, name: "Pawder", quantity: 1, price: "30.00"},
    {id: 4, name: "Wheel er gura", quantity: 1, price: "150.00"},
    {id: 5, name: "Shampoo", quantity: 1, price: "5.00"},
    {id: 6, name: "Chanachur", quantity: 1, price: "30.00"},
    {id: 7, name: "Muri adha kg", quantity: 1, price: "50.00"},
    {id: 8, name: "Biskut", quantity: 1, price: "15.00"},
    {id: 9, name: "Kofi", quantity: 1, price: "15.00"},
    {id: 10, name: "Noodles", quantity: 1, price: "20.00"},
];
let cart = [];
let subtotal = 0.00;
let discountAmount = 0.00;

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
    let total = 0.00;
    
    cart.forEach((item) => {
        let lineTotal = item.quantity * item.price;
        total += lineTotal; // total = total + lineTotal;
        
        cartHTML += `<tr>
            <td><button type="button" class="text-red-500" onclick="removeFromCart(${item.id})">&times;</button></td>
            <td>${item.name}</td>
            <td class="text-right">${item.quantity}</td>
            <td class="text-right">${item.price}</td>
            <td class="text-right">${lineTotal}</td>
        </tr>`;
    });

    subtotalFn(total);

    // Card builder
    cartTable.innerHTML = cartHTML;
}

// Subtotal
const subtotalTh = document.getElementById("subtotal");

function subtotalFn(amount) {
    subtotal = amount;

    // Price calculation
    subtotalTh.innerHTML = subtotal;

    grandTotalFn(0);
}

// calculate grand total
const grandTotalTh = document.getElementById("grandTotal");

function grandTotalFn(e) {
    discountAmount = (typeof e === "number") ? discountAmount : e.value;
    let discount = (subtotal * discountAmount) / 100;
    grandTotalTh.innerHTML = subtotal - discount;
}

// Remove items
function removeFromCart(id) {
    cart.forEach((item, i) => {
        if(item.id == id) {
            cart.splice(i, 1);
        }
    });

    cartHTMLBuilder();
}



