            /*
             <!-- TO CART  -->
    <section id="cart" class="section-p1">
        <div id="empty-cart">
            <h1>Your Cart is Empty...</h1>
        </div>
            
            
            <tbody>
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/gold.png" alt=""></td>
                    <td> Gold hang top</td>
                    <td>$100</td>
                    <td><input type="number" value="1"></td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/show-back.png" alt=""></td>
                    <td> Gold hang top</td>
                    <td>$100</td>
                    <td><input type="number" value="1"></td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/slim.png" alt=""></td>
                    <td> Gold hang top</td>
                    <td>$100</td>
                    <td><input type="number" value="1"></td>
                    <td>$100</td>
                </tr>
            </tbody>  */

// table js code 
/*
function displayCart(){
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems)

    let table = document.querySelector('tbody')
    console.log(cartItems)
    if (cartItems && table) {
        table.innerHTML=  '';
        Object.values(cartItems).map(item => {
            table.innerHTML += `
            <tbody>
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src="img/blue.png"></td>
                    <td>${item.name}</td>
                    <td>$${item.price}00</td>
                    <td><input type="number" value="${item.inCart}"></td>
                    <td>$${item.inCart * item.price}.00</td>
                </tr>
            </tbody>`
        });
    }
}
    }
*/