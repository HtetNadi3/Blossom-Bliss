//search by color
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//search by name
function searchByName() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show1')) {
        openDropdown.classList.remove('show1');
      }
    }
  }
}

//scroll up / scroll down
let lastScrollTop = 0;
  const dropdown = document.getElementById("dropdown");
  const dropdown1 = document.getElementById("dropdown1");


  window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      dropdown.style.top = "-1000px"; // Hide the navbar
      dropdown1.style.top = "-1000px";
    } else {
      // Scrolling up
      dropdown.style.top = "0"; // Show the navbar
      dropdown1.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });



    // topArrow
    let mybutton = document.getElementById("myBtn");


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }


    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    

    
    //cart

    document.addEventListener("DOMContentLoaded", function () {
      var carts = [];
      var cartBadge = document.getElementById('badge');

      document.querySelectorAll('.addToCartBtn').forEach(item => {
          item.addEventListener('click', function (event) {
              event.preventDefault();
              var itemName = this.closest('.content').querySelector('h3').textContent;
              var itemPrice = this.closest('.content').querySelector('.price').textContent;
              var itemSrc = this.closest('.box').querySelector('.image img').getAttribute('src');

              carts.push({
                  name: itemName,
                  price: itemPrice,
                  src: itemSrc
              });
              console.log('Item added to cart:', carts); 
          });
      });

      // Delete function
      function delElement(index) {
          carts.splice(index, 1);
          displayCart();
      }


      

      function displayCart() {
        const cart = document.getElementById("cart");

        if (carts.length === 0) {
            cart.innerHTML = "<p style='font-size:2rem;'>Nothing in your cart</p>";
        } else {
          let totalPrice = 0;
            cart.innerHTML = carts.map((item, index) => {
              totalPrice += parseFloat(item.price);
                return `
                    <div>
                        <img src="${item.src}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <span>${item.price}</span>
                        <i class='fas fa-trash deleteBtn' data-index="${index}" style="color:red;"></i>
                    </div>
                `;
            }).join('');
                //show totalPrice
              cart.innerHTML += `<p style="font-size:2rem;">Total Price: ${totalPrice}mmk</p>`;
              cart.innerHTML += 
              `
              <div class="form">
              <h2>Order Flowers</h2>
              <form>
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required>
                  
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required>
                  
          
                  <label for="address">Address</label>
                  <input type="text" id="address" name="address" required>

                  <h2>Select a Payment Method:</h2>
                  <label for="kpay">
                  <img src="needed/payment/kbzpay.png" width="50" style="padding-top:20px">
                  </label>
                  <input type="radio" id="kpay" name="payment_method" value="kpay" style="cursor:pointer">

                  <label for="wave_money">
                  <img src="needed/payment/Wavelogo.png" width="50" style="margin-left: 35px;padding-top:20px">
                  </label>
                  <input type="radio" id="wave_money" name="payment_method" value="wave_money" style="cursor:pointer">

                  <label for="cb_pay">
                  <img src="needed/payment/cb.png" width="50" style="margin-left: 35px;padding-top:20px">
                  </label>
                  <input type="radio" id="cb_pay" name="payment_method" value="cb_pay" style="cursor:pointer">
                  <br><br>
          
                  <input type="submit" class="btn" value="Confirm Order" id="confirmButton">
              </form>
          </div>
              `
        }  
        cartBadge.textContent = carts.length;
    }
    
    
      // Event listener for opening cart
      document.querySelector(".cartBtn").addEventListener("click", () => {
          displayCart();
          const bgCart = document.querySelector(".bgCart");
          bgCart.style.display = "block";
      });

      // Event delegation for delete button
      document.addEventListener("click", (event) => {
          if (event.target.classList.contains("deleteBtn")) {
              const index = event.target.dataset.index;
              delElement(index);
          }
      });

     

      // Event listener for closing cart
      const bgCart = document.querySelector(".bgCart");
      bgCart.addEventListener("click", (event) => {
          if (event.target === bgCart || event.target.classList.contains("popupCloseButton")) {
              bgCart.style.display = "none";
          }
      });

      
  });

  // Listen for the form submit event
document.addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.querySelector("#name").value;
  const phone = form.querySelector("#phone").value;
  const address = form.querySelector("#address").value;

  if (name.trim() !== "" && phone.trim() !== "" && address.trim() !== "") {
      alert("Order confirmed successfully");
  } else {
      alert("Please fill in all required fields");
  }
});

// Click count
let clickCount = 0;
const addBadges = document.querySelectorAll(".addToCartBtn");
const badge = document.getElementById("badge");

// Adding event listener to each button
addBadges.forEach(function(addBadge) {
    addBadge.addEventListener("click", function() {
        clickCount++;
        badge.innerText = clickCount.toString();
    });
});







  


  


  

    
  

  