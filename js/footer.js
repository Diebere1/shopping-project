const createFooter = () => {
    let footer = document.getElementById('foot');

    footeer.innerHTML = `
    <div class="col">
            <h4>CONTACT INFORMATION</h4>
            <strong>Address:</strong>
            <p>190 - 205 Imo Housing Estate Owerri, <br> Nigeria</p>

            <strong>Phone:</strong>
            <p>+123 (0) 7061126730</p>

            <strong>Email:</strong>
            <p>masarati-ladies20@outlook.com</p>

            <strong>Work Days/Hours:</strong>
            <p>Tipicaly 24 hours <br><br> <span class="open">Open now</span></p>
        </div>

        <div class="col">
            <h4>MENU</h4>
            <a href="#">About us</a>
            <a href="#">My Account</a>
            <a href="#">Order History</a>
            <a href="#">Advanced Search</a>
        </div>

        <div class="col">
            <h4>CUSTOMER SUPPORT</h4>
            <a href="#">Frequent questions</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Contact Us</a>
        </div>

        <div class="col">
            <h4>LEGAL WARNING</h4>
            <a href="#">Terms of use</a>
            <a href="#">Conditions of contract</a>
            <a href="#">Cookies Policy</a>
        </div>

        <div class="col">
            <h4>FOLLOW US</h4>
            <div class="icon">
                <i class="fab fa-twitter tweet"></i>
                <i class="fab fa-instagram insta"></i>
                <i class="fa-brands fa-youtube you"></i>                    
                <i class="fab fa-facebook-f face"></i>
                <i class="fa-brands fa-linkedin-in link"></i>
            </div>
            <strong class="secure">SAFE & SECURE PAYMENT</strong>
            <img src="img/pay1-removebg-preview.png" id="pym">
        </div>
    `
}
createFooter();