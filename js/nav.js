const createNav = () => {
    let nav = document.getElementById('header');

    nav.innerHTML = `
    <a href="#" ><img src="img/images1.png" alt="" width="50%"></a>

    <div>
        <ul id="navbar">
        <li><a class="active" href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li id="shop-bag"><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
        <i id="close" class="fa-sharp fa-solid fa-xmark"  onclick="closemenu()"></i>
        </ul>
    </div>
    <div id="mobile">
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        <i id="bar" class="fa-sharp fa-solid fa-bars" onclick="openmenu()"></i>
    </div>`;
}
createNav();