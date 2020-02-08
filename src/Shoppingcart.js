class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(item, quantity, price) {
    this.items.push({
      name: "Apple",
      quantity: 9,
      pricePerUnit: 9.99,

      name: "Orange",
      quantity: 1,
      pricePerUnit: 1.5,

      name: "Pineapple",
      quantity: 1,
      pricePerUnit: 4
    });
  }
  cartClear() {
    this.items = [];
  }
  total() {
    return this.items.reduce((acc, currentValue) => {
      return acc + currentValue.pricePerUnit * currentValue.quantity;
    }, 0);
  }
}

module.exports = ShoppingCart;
