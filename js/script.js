// ============================================
// PRODUCT DATA
// ============================================
const PRODUCTS = [
  { id: 1, name: "VOLT Air Runner", cat: "running", price: 4499, badge: "NEW", image: "volt_air_runner.png" },
  { id: 2, name: "Cyan Strike Low", cat: "street", price: 3899, badge: null, image: "cyan_strike_low.png" },
  { id: 3, name: "Pink Riot High", cat: "high-top", price: 5299, badge: "HOT", image: "pink_riot_high.png" },
  { id: 4, name: "Lime Bolt Runner", cat: "running", price: 4199, badge: null, image: "lime_bolt_runner.png" },
  { id: 5, name: "Street Ghost", cat: "street", price: 3599, badge: null, image: "street_ghost.png" },
  { id: 6, name: "Neon Curb High", cat: "high-top", price: 5599, badge: "NEW", image: "neon_curb_high.png" },
  { id: 7, name: "VOLT Trainer 2", cat: "running", price: 4699, badge: null, image: "volt_trainer_2.png" },
  { id: 8, name: "Blackout Low", cat: "street", price: 3299, badge: null, image: "blackout_low.png" }
];

let cart = [];

function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  grid.innerHTML = items.map(p => `
    <div class="product-card">
      <div class="product-thumb">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <img src="assets/images/${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="product-body">
        <p class="product-cat">${p.cat.replace("-", " ")}</p>
        <h3>${p.name}</h3>
        <div class="product-footer">
          <span class="product-price">₹${p.price.toLocaleString("en-IN")}</span>
          <button class="add-btn" data-id="${p.id}" aria-label="Add to cart">+</button>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id, 10)));
  });
}

function initCatTabs() {
  const tabs = document.querySelectorAll(".cat-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderProducts(tab.dataset.cat);
    });
  });
}

// ============================================
// CART
// ============================================
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  renderCart();
  openCart();
}

function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0);

  countEl.textContent = totalQty;
  totalEl.textContent = `₹${totalPrice.toLocaleString("en-IN")}`;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">Your cart is empty. Add something loud.</p>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span>${item.name} <span class="cart-item-qty">×${item.qty}</span></span>
      <span>₹${(item.price * item.qty).toLocaleString("en-IN")}</span>
    </div>
  `).join("");
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

function initCart() {
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
}

// ============================================
// NEWSLETTER
// ============================================
function initNewsletter() {
  const form = document.getElementById("newsForm");
  const note = document.getElementById("newsNote");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "You're on the list — see you Friday.";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initCatTabs();
  renderCart();
  initCart();
  initNewsletter();
});
