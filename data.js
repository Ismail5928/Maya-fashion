const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 2999,
        salePrice: 1999,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
        onSale: true,
        description: "Ultra-soft premium cotton t-shirt with a comfortable fit and breathable fabric, perfect for everyday wear.",
        category: "Fashion",
        likes: 45,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            {
                name: "White",
                code: "#FFFFFF",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format"
            },
            {
                name: "Black",
                code: "#000000",
                image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format"
            },
            {
                name: "Navy Blue",
                code: "#000080",
                image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=500&auto=format"
            }
        ]
    },
    {
        id: 2,
        name: "Slim Fit Denim Jeans",
        price: 5999,
        salePrice: 3999,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format",
        onSale: true,
        description: "Classic slim-fit denim jeans with stretch comfort technology and premium stitching details.",
        category: "Fashion",
        likes: 89,
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: [
            {
                name: "Light Blue",
                code: "#ADD8E6",
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format"
            },
            {
                name: "Dark Blue",
                code: "#00008B",
                image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&auto=format"
            },
            {
                name: "Black",
                code: "#000000",
                image: "https://images.unsplash.com/photo-1541085388148-a30647cab28f?w=500&auto=format"
            }
        ]
    },
    {
        id: 3,
        name: "Running Sneakers",
        price: 8999,
        salePrice: 6999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format",
        onSale: true,
        description: "Lightweight performance running shoes with advanced cushioning and breathable mesh upper.",
        category: "Footwear"
    },
    {
        id: 4,
        name: "Smart Watch Pro",
        price: 19999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format",
        onSale: false,
        description: "Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration.",
        category: "Electronics"
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        price: 12999,
        salePrice: 9999,
        image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500&auto=format",
        onSale: true,
        description: "True wireless earbuds with active noise cancellation and crystal-clear sound quality.",
        category: "Electronics"
    },
    {
        id: 6,
        name: "Diamond Pendant",
        price: 29999,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format",
        onSale: false,
        description: "Elegant diamond pendant crafted in 18K gold with brilliant-cut natural diamonds.",
        category: "Jewelry"
    },
    {
        id: 7,
        name: "Leather Boots",
        price: 14999,
        salePrice: 11999,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format",
        onSale: true,
        description: "Premium leather boots with durable construction and classic design, perfect for any occasion.",
        category: "Footwear"
    },
    {
        id: 8,
        name: "Designer Sunglasses",
        price: 15999,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format",
        onSale: false,
        description: "Stylish designer sunglasses with UV protection and premium polarized lenses.",
        category: "Fashion"
    },
    {
        id: 9,
        name: "Smartphone Pro Max",
        price: 99999,
        salePrice: 89999,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format",
        onSale: true,
        description: "Flagship smartphone with advanced camera system, powerful processor, and all-day battery life.",
        category: "Electronics"
    },
    {
        id: 10,
        name: "Classic Leather Wallet",
        price: 4999,
        salePrice: 3999,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format",
        onSale: true,
        description: "Genuine leather wallet with multiple card slots and RFID protection technology.",
        category: "Fashion"
    },
    {
        id: 11,
        name: "Wireless Gaming Headset",
        price: 17999,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format",
        onSale: false,
        description: "Professional gaming headset with surround sound, noise-canceling mic, and comfortable design.",
        category: "Electronics"
    },
    {
        id: 12,
        name: "Gold Ring Set",
        price: 39999,
        salePrice: 29999,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format",
        onSale: true,
        description: "Beautiful gold ring set featuring intricate designs and premium craftsmanship.",
        category: "Jewelry"
    }
];

// Array to track liked products
let likedProducts = [];

// Function to toggle like status
function toggleLike(productId, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const index = likedProducts.indexOf(productId);
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    if (index === -1) {
        // Add to liked products
        likedProducts.push(productId);
        // Initialize likes if undefined
        if (!product.likes) product.likes = 0;
        // Increment like count
        product.likes += 1;
        showNotification('Added to favorites!');
    } else {
        // Remove from liked products
        likedProducts.splice(index, 1);
        // Decrement like count
        if (product.likes > 0) {
            product.likes -= 1;
        }
        showNotification('Removed from favorites');
    }
    
    // Update like button appearance
    const likeButtons = document.querySelectorAll(`.like-btn[onclick*="toggleLike(${productId}"]`);
    likeButtons.forEach(button => {
        button.classList.toggle('liked');
        const likeCount = button.querySelector('.like-count');
        if (likeCount) {
            likeCount.textContent = product.likes;
        }
    });
    
    // Save liked products to localStorage
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    
    // Update products in localStorage to persist like counts
    localStorage.setItem('products', JSON.stringify(products));
    
    // If we're on the wishlist page, refresh the view
    if (document.getElementById('wishlist-page').classList.contains('active')) {
        renderLikedProducts();
    }
}

// Add these variables at the top with other state variables
let currentCategory = null;

// Update the renderProducts function to handle category filtering
function renderProducts() {
    const container = document.querySelector('.products-container');
    let filteredProducts = products;
    
    // Filter products by category if one is selected
    if (currentCategory) {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            ${product.onSale ? `
                <span class="discount-badge">
                    -${Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                </span>
            ` : ''}
            <div class="like-btn ${likedProducts.includes(product.id) ? 'liked' : ''}" onclick="toggleLike(${product.id}, event)">
                <i class="fas fa-heart"></i>
                <span class="like-count">${product.likes || 0}</span>
            </div>
            <img src="${product.image}" alt="${product.name}" onclick="showProductModal(${product.id})">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${product.onSale ? `
                        <span class="original-price">${formatPrice(product.price)}</span>
                        <span class="current-price">${formatPrice(product.salePrice)}</span>
                    ` : `
                        <span class="current-price">${formatPrice(product.price)}</span>
                    `}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, event)">
                    <i class="fas fa-shopping-cart"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Function to generate rating stars
function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Cart functionality
let cart = [];

let currentQuantity = 1;

// Function to show product modal
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.style.display = 'flex';
    
    const colorOptions = product.colors ? `
        <div class="color-options">
            <h4>Select Color</h4>
            <div class="color-selector">
                ${product.colors.map((color, index) => `
                    <div class="color-option ${index === 0 ? 'selected' : ''}" 
                         onclick="changeProductColor(${productId}, '${color.name}')"
                         data-color="${color.name}"
                         style="background-color: ${color.code}">
                        <div class="color-preview" style="background-color: ${color.code}"></div>
                        <span>${color.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    const sizeOptions = product.sizes ? `
        <div class="size-options">
            <h4>Select Size</h4>
            <div class="size-selector">
                ${product.sizes.map(size => `
                    <div class="size-option" onclick="selectSize(this)">
                        ${size}
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    const productImages = product.colors ? `
        <div class="product-images">
            <div class="main-image">
                <img src="${product.colors[0].image}" alt="${product.name}" id="main-product-image">
            </div>
            <div class="image-thumbnails">
                ${product.colors.map(color => `
                    <img src="${color.image}" 
                         alt="${color.name}" 
                         onclick="updateMainImage(this.src)"
                         class="thumbnail">
                `).join('')}
            </div>
        </div>
    ` : `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
    `;
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal(this)">&times;</span>
            <div class="product-details">
                ${productImages}
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        ${product.onSale ? `
                            <span class="original-price">${formatPrice(product.price)}</span>
                            <span class="current-price">${formatPrice(product.salePrice)}</span>
                        ` : `
                            <span class="current-price">${formatPrice(product.price)}</span>
                        `}
                    </div>
                    ${colorOptions}
                    ${sizeOptions}
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" max="10" 
                            onchange="updateQuantityInput(this.value)">
                        <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart" onclick="addToCartFromModal(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                        <div class="like-btn ${likedProducts.includes(product.id) ? 'liked' : ''}" 
                             onclick="toggleLike(${product.id}, event)">
                            <i class="fas fa-heart"></i>
                            <span class="like-count">${product.likes || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);

    // Add click event listener to close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal(modal.querySelector('.modal-close'));
        }
    });

    // Prevent clicks inside modal content from closing the modal
    modal.querySelector('.modal-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

function closeModal(element) {
    const modal = element.closest('.product-modal');
    modal.remove();
    document.body.style.overflow = '';
}

function updateQuantity(change) {
    const input = document.querySelector('.quantity-input');
    currentQuantity = Math.max(1, Math.min(10, currentQuantity + change));
    input.value = currentQuantity;
}

function updateQuantityInput(value) {
    currentQuantity = Math.max(1, Math.min(10, parseInt(value) || 1));
    const input = document.querySelector('.quantity-input');
    input.value = currentQuantity;
}

function addToCartFromModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += currentQuantity;
        } else {
            cart.push({
                ...product,
                quantity: currentQuantity
            });
        }
        
        updateCartIcon();
        showNotification(`Added ${currentQuantity} ${product.name} to cart!`);
        closeModal(document.querySelector('.modal-close'));
    }
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.fa-shopping-cart');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
        cartIcon.setAttribute('data-count', totalItems);
    }
}

function showNotification(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);

    // Remove notification after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add click events to navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Add category click handlers
document.querySelectorAll('.category-item').forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.querySelector('span').textContent;
        
        // Remove active class from all categories
        document.querySelectorAll('.category-item').forEach(cat => {
            cat.classList.remove('active');
        });
        
        // If clicking the same category, clear the filter
        if (currentCategory === categoryName) {
            currentCategory = null;
            category.classList.remove('active');
        } else {
            // Set new category and add active class
            currentCategory = categoryName;
            category.classList.add('active');
        }
        
        // Re-render products with the filter
        renderProducts();
        
        // Show notification
        showNotification(currentCategory ? 
            `Showing ${currentCategory} products` : 
            'Showing all products'
        );
    });
});

// Add these functions to handle navigation

function navigateToPage(pageId) {
    // If coming from order confirmation, clean up first
    const confirmationModal = document.querySelector('.fullscreen-confirmation');
    if (confirmationModal) {
        cart = [];
        sessionStorage.removeItem('deliveryInfo');
        updateCartIcon();
        confirmationModal.remove();
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });

    // Render cart if navigating to cart page
    if (pageId === 'cart-page') {
        renderCart();
    }
}

// Update the cart rendering function
function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    
    if (!cartContainer || !cartSummary) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <button class="shop-now-btn" onclick="navigateToPage('home-page')">
                    <i class="fas fa-shopping-bag"></i>
                    Continue Shopping
                </button>
            </div>
        `;
        cartSummary.style.display = 'none';
        return;
    }

    cartSummary.style.display = 'block';
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-delete" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </div>
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">$${(item.onSale ? item.salePrice : item.price).toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button onclick="updateCartQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update cart summary
    const subtotal = cart.reduce((sum, item) => {
        const price = item.onSale ? item.salePrice : item.price;
        return sum + (price * item.quantity);
    }, 0);

    const shipping = subtotal > 10000 ? 0 : 1000;
    const total = subtotal + shipping;

    cartSummary.innerHTML = `
        <div class="cart-summary-details">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        </div>
        <button class="checkout-btn" onclick="showDeliveryForm()">
            <i class="fas fa-lock"></i>
            Proceed to Checkout
        </button>
    `;
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCart();
        updateCartIcon();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
    updateCartIcon();
}

// Add search functionality
function searchProducts(query) {
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    const resultsContainer = document.querySelector('.search-results');
    resultsContainer.innerHTML = searchResults.length ? 
        searchResults.map(product => `
            <div class="product-card">
                ${renderProductCard(product)}
            </div>
        `).join('') :
        '<div class="empty-search">No products found</div>';
}

// Function to render liked products
function renderLikedProducts() {
    const container = document.querySelector('#wishlist-page .products-container');
    const likedProductsList = products.filter(product => likedProducts.includes(product.id));
    
    if (likedProductsList.length === 0) {
        container.innerHTML = `
            <div class="empty-wishlist">
                <i class="fas fa-heart-broken"></i>
                <p>Your wishlist is empty</p>
                <button class="shop-now-btn" onclick="navigateToPage('home-page')">
                    <i class="fas fa-shopping-bag"></i>
                    Continue Shopping
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = likedProductsList.map(product => `
        <div class="product-card">
            ${renderProductCard(product)}
        </div>
    `).join('');
}

// Update event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Navigation click handlers for both top and bottom nav
    document.querySelectorAll('.nav-icons i, .nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            if (pageId) {
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked nav item and its corresponding item
                const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
                if (navItem) {
                    navItem.classList.add('active');
                }
                
                // Render liked products if navigating to wishlist page
                if (pageId === 'wishlist-page') {
                    renderLikedProducts();
                }
                
                navigateToPage(pageId);
            }
        });
    });

    // Search input handler
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
    }

    // Initialize the app
    renderProducts();

    // Check for dark mode preference on load
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', savedDarkMode);
    
    // Initialize profile features
    renderOrderHistory();
    setupProfileForms();
    setupDarkMode();

    // Load liked products from localStorage
    const savedLikes = localStorage.getItem('likedProducts');
    if (savedLikes) {
        likedProducts = JSON.parse(savedLikes);
    }

    // Load saved product like counts
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        const savedProductsData = JSON.parse(savedProducts);
        // Update only the likes count from saved data
        products.forEach(product => {
            const savedProduct = savedProductsData.find(p => p.id === product.id);
            if (savedProduct) {
                product.likes = savedProduct.likes || 0;
            }
        });
    }

    // Initialize banner auto-scroll
    initializeBanner();
});

// Update the renderProductCard function for search results
function renderProductCard(product) {
    const isLiked = likedProducts.includes(product.id);
    return `
        ${product.onSale ? `
            <span class="discount-badge">
                -${Math.round(((product.price - product.salePrice) / product.price) * 100)}%
            </span>
        ` : ''}
        <div class="like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike(${product.id}, event)">
            <i class="fas fa-heart"></i>
            <span class="like-count">${product.likes || 0}</span>
        </div>
        <img src="${product.image}" alt="${product.name}" onclick="showProductModal(${product.id})">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${product.onSale ? `
                    <span class="original-price">${formatPrice(product.price)}</span>
                    <span class="current-price">${formatPrice(product.salePrice)}</span>
                ` : `
                    <span class="current-price">${formatPrice(product.price)}</span>
                `}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}, event)">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    `;
}

// Add these functions for profile functionality

// Sample order history data
const orderHistory = [
    {
        orderId: "ORD-2024-001",
        date: "2024-03-15",
        status: "Delivered",
        items: [
            { name: "Premium Cotton T-Shirt", quantity: 2, price: 1999 },
            { name: "Slim Fit Denim Jeans", quantity: 1, price: 3999 }
        ],
        total: 7997
    },
    {
        orderId: "ORD-2024-002",
        date: "2024-03-10",
        status: "Processing",
        items: [
            { name: "Smart Watch Pro", quantity: 1, price: 19999 }
        ],
        total: 19999
    }
];

function renderOrderHistory() {
    const orderContainer = document.querySelector('.order-history');
    if (!orderContainer) return;

    orderContainer.innerHTML = orderHistory.map(order => `
        <div class="order-item">
            <div class="order-header">
                <span class="order-number">${order.orderId}</span>
                <span class="order-date">${formatDate(order.date)}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item-detail">
                        <span>${item.quantity}x ${item.name}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <span class="order-status status-${order.status.toLowerCase()}">
                    ${order.status}
                </span>
                <span class="order-total">Total: $${order.total.toFixed(2)}</span>
            </div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Profile form handling
function setupProfileForms() {
    document.querySelectorAll('.save-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Changes saved successfully!');
        });
    });
}

// Dark mode toggle
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        // Check for saved dark mode preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        // Apply saved preference
        document.body.classList.toggle('dark-mode', isDarkMode);
        darkModeToggle.checked = isDarkMode;

        // Add change event listener
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
            // Save preference
            localStorage.setItem('darkMode', this.checked);
            showNotification(this.checked ? 'Dark mode enabled' : 'Dark mode disabled');
        });
    }
}

// Update the addToCart function
function addToCart(productId, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartIcon();
        
        // Only render cart if we're on the cart page
        if (document.getElementById('cart-page').classList.contains('active')) {
            renderCart();
        }
        
        // Add button animation
        let button;
        if (event) {
            button = event.target.closest('.add-to-cart');
        } else {
            button = document.querySelector(`button[onclick*="addToCart(${productId}"]`);
        }
        
        if (button) {
            button.classList.add('success');
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
            
            setTimeout(() => {
                button.classList.remove('success');
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }, 2000);
        }
        
        showNotification(`Added ${product.name} to cart!`);
    }
}

// Add a currency formatter function
function formatPrice(price) {
    return `৳${price.toLocaleString('en-IN')}`;  // This will add proper thousand separators
}

// Add these variables at the top of the file
let currentBannerIndex = 0;
let bannerInterval;

// Add these functions for banner navigation
function initializeBanner() {
    const bannerContainer = document.querySelector('.banner-container');
    const banners = document.querySelectorAll('.banner');
    
    if (!bannerContainer || !banners.length) return;
    
    // Since we only have one banner, we don't need navigation buttons or dots
    if (banners.length === 1) {
        // Center the single banner
        banners[0].style.transform = 'translateX(0)';
        return;
    }
    
    // Rest of the banner navigation code remains unchanged for cases with multiple banners
    // Add navigation buttons
    bannerContainer.parentElement.insertAdjacentHTML('beforeend', `
        <button class="banner-nav-button banner-prev" onclick="navigateBanner('prev')">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="banner-nav-button banner-next" onclick="navigateBanner('next')">
            <i class="fas fa-chevron-right"></i>
        </button>
    `);
    
    // Create navigation dots
    const navigation = document.createElement('div');
    navigation.className = 'banner-navigation';
    
    banners.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `banner-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => scrollToBanner(index));
        navigation.appendChild(dot);
    });
    
    bannerContainer.parentElement.appendChild(navigation);
    
    // Set initial positions
    banners.forEach((banner, index) => {
        banner.style.transform = `translateX(${index * 100}%)`;
    });
    
    // Start auto-scrolling only if we have multiple banners
    if (banners.length > 1) {
        startBannerInterval();
        
        // Pause auto-scroll on hover or touch
        bannerContainer.addEventListener('mouseenter', stopBannerInterval);
        bannerContainer.addEventListener('mouseleave', startBannerInterval);
        bannerContainer.addEventListener('touchstart', stopBannerInterval);
        bannerContainer.addEventListener('touchend', startBannerInterval);
    }
}

function navigateBanner(direction) {
    const banners = document.querySelectorAll('.banner');
    if (!banners.length) return;
    
    stopBannerInterval();
    
    if (direction === 'prev') {
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
    } else {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    }
    
    scrollToBanner(currentBannerIndex);
    startBannerInterval();
}

function scrollToBanner(index) {
    const banners = document.querySelectorAll('.banner');
    const dots = document.querySelectorAll('.banner-dot');
    
    if (!banners.length) return;
    
    // Update banner positions
    banners.forEach((banner, i) => {
        banner.style.transform = `translateX(${(i - index) * 100}%)`;
        banner.style.transition = 'transform 0.5s ease';
    });
    
    // Update navigation dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentBannerIndex = index;
}

function startBannerInterval() {
    if (bannerInterval) return;
    
    bannerInterval = setInterval(() => {
        const banners = document.querySelectorAll('.banner');
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        scrollToBanner(currentBannerIndex);
    }, 5000); // Change banner every 5 seconds
}

function stopBannerInterval() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }
}

// Add this function to handle checkout
function showDeliveryForm() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Create and show delivery page
    const deliveryPage = document.createElement('div');
    deliveryPage.className = 'page active';
    deliveryPage.id = 'delivery-page';
    
    deliveryPage.innerHTML = `
        <div class="delivery-container">
            <div class="delivery-header">
                <button class="back-arrow" onclick="navigateToPage('cart-page')">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <h1>Checkout</h1>
            </div>

            <div class="checkout-steps">
                <div class="step active">
                    <div class="step-number">1</div>
                    <div class="step-label">Delivery</div>
                </div>
                <div class="step-line"></div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-label">Payment</div>
                </div>
            </div>

            <form id="delivery-form" class="delivery-form" onsubmit="handleDeliverySubmit(event)">
                <div class="form-section">
                    <div class="form-section-header">
                        <i class="fas fa-user-circle"></i>
                        <h2>Personal Information</h2>
                    </div>
                    <div class="form-group floating-label">
                        <input type="text" name="fullName" id="fullName" required>
                        <label for="fullName">Full Name</label>
                    </div>
                    <div class="form-row">
                        <div class="form-group floating-label">
                            <input type="email" name="email" id="email" required>
                            <label for="email">Email Address</label>
                        </div>
                        <div class="form-group floating-label">
                            <input type="tel" name="phone" id="phone" required>
                            <label for="phone">Phone Number</label>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <div class="form-section-header">
                        <i class="fas fa-map-marker-alt"></i>
                        <h2>Delivery Address</h2>
                    </div>
                    <div class="form-group floating-label">
                        <textarea name="address" id="address" required></textarea>
                        <label for="address">Street Address</label>
                    </div>
                    <div class="form-row">
                        <div class="form-group floating-label">
                            <input type="text" name="city" id="city" required>
                            <label for="city">City</label>
                        </div>
                        <div class="form-group">
                            <label for="area">Area</label>
                            <select name="area" id="area" required>
                                <option value="">Select your area</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="rajshahi">Rajshahi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-section order-summary">
                    <div class="form-section-header">
                        <i class="fas fa-shopping-bag"></i>
                        <h2>Order Summary</h2>
                    </div>
                    <div class="order-items">
                        ${cart.map(item => `
                            <div class="order-item">
                                <img src="${item.image}" alt="${item.name}">
                                <div class="item-details">
                                    <h4>${item.name}</h4>
                                    <p>Quantity: ${item.quantity}</p>
                                    <p class="item-price">${formatPrice(item.onSale ? item.salePrice : item.price)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-totals">
                        <div class="total-row">
                            <span>Subtotal</span>
                            <span>${formatPrice(calculateSubtotal())}</span>
                        </div>
                        <div class="total-row">
                            <span>Shipping</span>
                            <span>${formatPrice(1000)}</span>
                        </div>
                        <div class="total-row grand-total">
                            <span>Total</span>
                            <span>${formatPrice(calculateSubtotal() + 1000)}</span>
                        </div>
                    </div>
                </div>

                <button type="submit" class="submit-btn">
                    <span>Continue to Payment</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    `;
    
    // Add the delivery page to the container
    document.querySelector('.page-container').appendChild(deliveryPage);
}

// Handle delivery form submission
function handleDeliverySubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Store delivery information
    const deliveryInfo = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        city: formData.get('city'),
        area: formData.get('area')
    };
    
    // Save delivery info to session storage
    sessionStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo));
    
    // Show payment step
    showPaymentStep();
}

function showPaymentStep() {
    // Get the delivery page
    const deliveryPage = document.getElementById('delivery-page');
    
    // Update progress steps
    const steps = deliveryPage.querySelectorAll('.step');
    steps[0].classList.remove('active');
    steps[1].classList.add('active');
    
    // Replace the form with payment section
    const deliveryForm = document.querySelector('.delivery-form');
    deliveryForm.innerHTML = `
        <div class="form-section payment-section">
            <div class="form-section-header">
                <i class="fas fa-credit-card"></i>
                <h2>Payment Method</h2>
            </div>
            
            <div class="payment-options">
                <div class="payment-option" onclick="selectPaymentMethod(this, 'cash')">
                    <div class="option-icon">
                        <i class="fas fa-money-bill-wave"></i>
                    </div>
                    <div class="option-details">
                        <h3>Cash on Delivery</h3>
                        <p>Pay when you receive</p>
                    </div>
                    <div class="check-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                </div>

                <div class="payment-option" onclick="selectPaymentMethod(this, 'bkash')">
                    <div class="option-icon">
                        <img src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="bKash">
                    </div>
                    <div class="option-details">
                        <h3>bKash</h3>
                        <p>Pay with bKash mobile banking</p>
                    </div>
                    <div class="check-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                </div>

                <div class="payment-option" onclick="selectPaymentMethod(this, 'nagad')">
                    <div class="option-icon">
                        <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="Nagad">
                    </div>
                    <div class="option-details">
                        <h3>Nagad</h3>
                        <p>Pay with Nagad mobile banking</p>
                    </div>
                    <div class="check-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                </div>

                <div class="payment-option" onclick="selectPaymentMethod(this, 'rocket')">
                    <div class="option-icon">
                        <img src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png" alt="Rocket">
                    </div>
                    <div class="option-details">
                        <h3>Rocket</h3>
                        <p>Pay with Rocket mobile banking</p>
                    </div>
                    <div class="check-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                </div>
            </div>

            <div id="transaction-details" class="transaction-section" style="display: none;">
                <div class="form-section-header">
                    <i class="fas fa-receipt"></i>
                    <h2>Transaction Details</h2>
                </div>
                <div class="payment-instructions">
                    <div class="instruction-step">
                        <span class="step-number">1</span>
                        <p>Send money to: <strong>01XXXXXXXXX</strong></p>
                    </div>
                    <div class="instruction-step">
                        <span class="step-number">2</span>
                        <p>Amount to send: <strong>${formatPrice(calculateSubtotal() + 1000)}</strong></p>
                    </div>
                    <div class="instruction-step">
                        <span class="step-number">3</span>
                        <p>Enter the Transaction ID received via SMS</p>
                    </div>
                </div>
                <div class="form-group floating-label">
                    <input type="text" id="transaction-id" required>
                    <label for="transaction-id">Transaction ID</label>
                </div>
            </div>
        </div>

        <div class="form-section order-summary">
            <div class="form-section-header">
                <i class="fas fa-shopping-bag"></i>
                <h2>Order Summary</h2>
            </div>
            <div class="order-totals">
                <div class="total-row">
                    <span>Subtotal</span>
                    <span>${formatPrice(calculateSubtotal())}</span>
                </div>
                <div class="total-row">
                    <span>Shipping</span>
                    <span>${formatPrice(1000)}</span>
                </div>
                <div class="total-row grand-total">
                    <span>Total Amount</span>
                    <span>${formatPrice(calculateSubtotal() + 1000)}</span>
                </div>
            </div>
        </div>

        <div class="form-actions">
            <button type="button" class="back-btn" onclick="showDeliveryForm()">
                <i class="fas fa-arrow-left"></i>
                <span>Back to Delivery</span>
            </button>
            <button type="button" class="submit-btn" id="confirm-order-btn" onclick="submitOrder()" disabled>
                <span>Confirm Order</span>
                <i class="fas fa-check"></i>
            </button>
        </div>
    `;
}

function selectPaymentMethod(element, method) {
    // Remove selected class from all methods
    document.querySelectorAll('.payment-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Add selected class to clicked method
    element.classList.add('selected');
    
    // Store selected method
    const form = element.closest('form');
    form.setAttribute('data-payment', method);
    
    // Get transaction details and confirm button elements
    const transactionDetails = document.getElementById('transaction-details');
    const confirmButton = document.getElementById('confirm-order-btn');
    
    // Handle different payment methods
    if (method === 'cash') {
        transactionDetails.style.display = 'none';
        confirmButton.disabled = false;
    } else {
        transactionDetails.style.display = 'block';
        confirmButton.disabled = true;
        
        // Add event listener to transaction ID input
        const transactionInput = document.getElementById('transaction-id');
        transactionInput.addEventListener('input', function() {
            confirmButton.disabled = !this.value.trim();
        });
    }
}

function submitOrder() {
    // Get delivery info from session storage
    const deliveryInfo = JSON.parse(sessionStorage.getItem('deliveryInfo'));
    const form = document.querySelector('.delivery-form');
    const paymentMethod = form.getAttribute('data-payment');
    
    if (!paymentMethod) {
        showNotification('Please select a payment method');
        return;
    }
    
    if (paymentMethod !== 'cash') {
        const transactionId = document.getElementById('transaction-id').value.trim();
        if (!transactionId) {
            showNotification('Please enter transaction ID');
            return;
        }
        deliveryInfo.transactionId = transactionId;
    }
    
    deliveryInfo.paymentMethod = paymentMethod;
    deliveryInfo.items = cart;
    deliveryInfo.total = calculateSubtotal() + 1000; // Including shipping
    
    // Show order confirmation
    showOrderConfirmation(deliveryInfo);
}

function showOrderConfirmation(orderDetails) {
    const modal = document.createElement('div');
    modal.className = 'fullscreen-confirmation';
    
    // Generate random confetti particles
    const confetti = Array(100).fill().map(() => {
        const colors = ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3', '#E91E63', '#9C27B0'];
        const shapes = ['circle', 'square', 'triangle'];
        const size = Math.random() * 12 + 6;
        return `
            <div class="confetti ${shapes[Math.floor(Math.random() * shapes.length)]}" style="
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                top: ${-Math.random() * 40}%;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                animation: confettiFall ${2 + Math.random() * 2}s linear infinite;
                animation-delay: ${Math.random() * 3}s;
            "></div>
        `;
    }).join('');
    
    modal.innerHTML = `
        <div class="fullscreen-content">
            <div class="success-header">
                <div class="confetti-container">
                    ${confetti}
                </div>
                <div class="success-icon">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="white"/>
                        <path class="checkmark__check" fill="none" stroke="white" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                </div>
                <h1 class="success-title">Order Confirmed!</h1>
                <div class="order-number">Order #${generateOrderId()}</div>
                <p class="success-message">Thank you for shopping with us, ${orderDetails.fullName}!</p>
            </div>

            <div class="order-details-container">
                <div class="order-items-section">
                    <h3>Order Items</h3>
                    <div class="order-items-grid">
                        ${orderDetails.items.map(item => `
                            <div class="order-item-card">
                                <img src="${item.image}" alt="${item.name}">
                                <div class="item-info">
                                    <h4>${item.name}</h4>
                                    <p class="quantity">Quantity: ${item.quantity}</p>
                                    <p class="price">${formatPrice(item.onSale ? item.salePrice : item.price)}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-total">
                        <div class="total-row">
                            <span>Total Amount:</span>
                            <span>${formatPrice(orderDetails.total)}</span>
                        </div>
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="continue-button" onclick="navigateToPage('home-page')">
                        <i class="fas fa-shopping-bag"></i>
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);

    // Add animation classes after a small delay
    setTimeout(() => {
        const items = modal.querySelectorAll('.order-item-card');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-in');
            }, index * 200);
        });
    }, 500);
}

// Helper function to generate order ID
function generateOrderId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${year}${month}${day}-${random}`;
}

// Helper function to get payment icon
function getPaymentIcon(method) {
    switch(method) {
        case 'cash': return 'fa-money-bill-wave';
        case 'bkash': return 'fa-mobile-alt';
        case 'nagad': return 'fa-wallet';
        case 'rocket': return 'fa-credit-card';
        default: return 'fa-credit-card';
    }
}

// Helper function to format payment method name
function formatPaymentMethod(method) {
    switch(method) {
        case 'cash': return 'Cash on Delivery';
        case 'bkash': return 'bKash';
        case 'nagad': return 'Nagad';
        case 'rocket': return 'Rocket';
        default: return method;
    }
}

function finishOrder() {
    // Clear the cart and storage
    cart = [];
    sessionStorage.removeItem('deliveryInfo');
    updateCartIcon();
    
    // Close any open modals
    const modals = document.querySelectorAll('.fullscreen-confirmation, .product-modal');
    modals.forEach(modal => modal.remove());
    
    // Navigate to home page
    navigateToPage('home-page');
}

// Helper function to calculate cart subtotal
function calculateSubtotal() {
    return cart.reduce((sum, item) => {
        const price = item.onSale ? item.salePrice : item.price;
        return sum + (price * item.quantity);
    }, 0);
}

// Add these new functions for color and size selection
function changeProductColor(productId, colorName) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.colors) return;

    const color = product.colors.find(c => c.name === colorName);
    if (!color) return;

    // Update main image
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = color.image;
    }

    // Update color selection UI
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.classList.toggle('selected', option.dataset.color === colorName);
    });
}

function selectSize(element) {
    // Remove selected class from all size options
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => option.classList.remove('selected'));
    
    // Add selected class to clicked option
    element.classList.add('selected');
}

function updateMainImage(src) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = src;
    }
} 