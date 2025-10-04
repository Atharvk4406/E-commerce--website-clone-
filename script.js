document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const cartIcon = document.querySelector('.nav-cart');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const subtotalPriceElement = document.getElementById('subtotal-price');
    const cartCountElement = document.querySelector('.cart-count');
    const overlay = document.getElementById('overlay');

    // --- Cart State ---
    let cart = [];

    // --- Functions ---
    const openCartDrawer = () => {
        cartDrawer.classList.add('open');
        overlay.classList.add('active');
    };

    const closeCartDrawer = () => {
        cartDrawer.classList.remove('open');
        overlay.classList.remove('active');
    };
    
    const updateCart = () => {
        // Clear previous items
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        } else {
             // Add each item to the cart drawer
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                        <div class="quantity-controls">
                            <button class="quantity-btn decrease-qty" data-id="${item.id}">-</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <a href="#" class="remove-item-btn" data-id="${item.id}">Remove</a>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
        }
       
        // Update subtotal
        const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        subtotalPriceElement.textContent = `$${subtotal.toFixed(2)}`;
        
        // Update cart count icon
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    };

    const handleAddToCart = (e) => {
        const productBox = e.target.closest('.box');
        const id = productBox.dataset.id;
        const name = productBox.dataset.name;
        const price = parseFloat(productBox.dataset.price);
        const image = productBox.dataset.image;

        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, image, quantity: 1 });
        }
        
        updateCart();
        openCartDrawer();
    };
    
    const handleCartActions = (e) => {
        const target = e.target;
        const id = target.dataset.id;
        
        if (target.classList.contains('increase-qty')) {
            const item = cart.find(i => i.id === id);
            if (item) item.quantity++;
        }
        
        if (target.classList.contains('decrease-qty')) {
            const item = cart.find(i => i.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else {
                // Remove item if quantity becomes 0
                cart = cart.filter(i => i.id !== id);
            }
        }
        
        if (target.classList.contains('remove-item-btn')) {
            cart = cart.filter(i => i.id !== id);
        }
        
        updateCart();
    };

    // --- Event Listeners ---
    cartIcon.addEventListener('click', openCartDrawer);
    closeCartBtn.addEventListener('click', closeCartDrawer);
    overlay.addEventListener('click', closeCartDrawer);
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
    
    cartItemsContainer.addEventListener('click', handleCartActions);
    
    // Initialize cart view
    updateCart();
    
});
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const prevBtn = document.querySelector(".hero-btn.prev");
  const nextBtn = document.querySelector(".hero-btn.next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 7000);
});
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const loginInfo = document.querySelector('.info-text.login');
const registerInfo = document.querySelector('.info-text.register');

registerLink.onclick = (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    loginInfo.style.display = "none";
    registerForm.style.display = "flex";
    registerInfo.style.display = "flex";
};

loginLink.onclick = (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    registerInfo.style.display = "none";
    loginForm.style.display = "flex";
    loginInfo.style.display = "flex";
};
// Redirect after Register form submit
registerForm.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add validation here if needed
    window.location.href = "amazon.html";  // Change to your clone page
});

// Redirect after Login form submit
loginForm.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add validation here if needed
    window.location.href = "amazon.html";  // Change to your clone page
});
