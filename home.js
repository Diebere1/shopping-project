// Nav Menu bar 
const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    });
}

if (nav) {
    nav.addEventListener('click', () => {
        nav .classList.remove('active');
    });
}
// Cart page  
let carts = document.querySelectorAll(' .add-to-cart');

let product = [
    {
        id: 0,
        name: 'Ladie s Fashion Hang-Top',
        price: 100,
        inCart: 0
    },
    {
        id: 1,
        name: 'Show sexy back',
        price: 100,
        inCart: 0
    },
    {
        id: 2,
        name: 'Black Organza Strapless',
        price: 130,
        inCart: 0
    },
    {
        id: 3,
        name: 'show sexy back',
        price: 120,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        alert('Your item has been added to your cart')
        cartNumbers(product[i]);
        totalCost(product[i]);
    })
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(' #shop-bag span').textContent = productNumbers + 1;
        document.querySelector(' #mobile a span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(' #shop-bag  span').textContent = 1;
        document.querySelector(' #mobile a  span').textContent = 1;
    }
    setItem(product)
}

function setItem (product) {
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse (cartItems)

    if (cartItems !== null) {
        if(cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }
        console.log(cartItems[product.id]);

        cartItems[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.id]: product
        }
    }

    localStorage.setItem('ProductsInCart', JSON.stringify 
    (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price)
    let cartCost = localStorage.getItem('totalCost');

    console.log('The totalCost price  is', cartCost);
    console.log(typeof cartCost)

    if (cartCost != null) {

        cartCost = parseInt (cartCost);

        localStorage.setItem('totalCost', cartCost +  product.price);
    } else {
        localStorage.setItem('totalCost', product.price)
    }

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers'); 

    if (productNumbers) {
        document.querySelector(' #shop-bag span').textContent = productNumbers;
        document.querySelector(' #mobile a span').textContent = productNumbers;
    }
}

var totalAmount;
var totalInCart;

function displayCart(){
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems)

    let productContainer = document.querySelector(' .product')
    console.log(cartItems)
    if (cartItems && productContainer) {
        productContainer.innerHTML=  '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <p><a href="#"><i class="far fa-times-circle"></i></a></p>
                <p><img src="img/${item.id}"></p>
                <p>${item.name}</p>
                <p>$${item.price}.00</p>
                <p><input type="number" value="${item.inCart}"></p>
                <p>$${item.inCart * item.price}.00</p>
            </div>`
        });
    }
}

onLoadCartNumbers();
displayCart();