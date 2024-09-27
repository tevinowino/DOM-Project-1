// Product Class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem Class
  class ShoppingCartItem {
    constructor(product, quantity = 1) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate total price for the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  
    // Method to increase quantity
    increaseQuantity() {
      this.quantity++;
    }
  
    // Method to decrease quantity
    decreaseQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    }
  }
  
  // ShoppingCart Class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get total price of all items in the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to add a product to the cart
    addItem(product) {
      let cartItem = this.items.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.increaseQuantity();
      } else {
        this.items.push(new ShoppingCartItem(product));
      }
      this.updateCartDisplay();
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
      this.updateCartDisplay();
    }
  
    // Method to update total price and quantities displayed
    updateCartDisplay() {
      const quantities = document.querySelectorAll('.quantity');
      const totalPriceElement = document.querySelector('.total');
  
      this.items.forEach((item, index) => {
        quantities[index].textContent = item.quantity;
      });
  
      totalPriceElement.textContent = `${this.getTotal()} $`;
    }
  }
  
  // Create products
  const product1 = new Product(1, 'Baskets', 100);
  const product2 = new Product(2, 'Socks', 20);
  const product3 = new Product(3, 'Bag', 50);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Function to handle increase quantity
  function increaseQuantity(index) {
    const products = [product1, product2, product3];
    cart.addItem(products[index]);
  }
  
  // Function to handle decrease quantity
  function decreaseQuantity(index) {
    const products = [product1, product2, product3];
    let cartItem = cart.items.find(item => item.product.id === products[index].id);
  
    if (cartItem && cartItem.quantity > 0) {
      cartItem.decreaseQuantity();
      if (cartItem.quantity === 0) {
        cart.removeItem(products[index].id);  // Remove if quantity is 0
      }
      cart.updateCartDisplay();
    }
  }
  
  // Toggle like button color on click
  let likeButtons = document.getElementsByClassName("fa-heart");
  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function () {
      if (likeButtons[i].style.color === "red") {
        likeButtons[i].style.color = "black";
      } else {
        likeButtons[i].style.color = "red";
      }
    });
  }
  
  // Deleting Product
  let deleteButtons = document.getElementsByClassName("fa-trash-alt");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
      deleteButtons[i].parentNode.parentNode.parentNode.remove();
      const products = [product1, product2, product3];
      cart.removeItem(products[i].id);
    });
  }
  