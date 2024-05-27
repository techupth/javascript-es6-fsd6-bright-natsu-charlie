let orders = [
  { orderId: "A001", paymentType: "Cash", totalPrice: 2500 },
  { orderId: "A002", paymentType: "Credit Card", totalPrice: 4000 },
  { orderId: "A003", paymentType: "Credit Card", totalPrice: 6000 },
];

let additionalOrders = [
  { orderId: "A004", paymentType: "Credit Card", totalPrice: 611000 },
  { orderId: "A005", paymentType: "Credit Card", totalPrice: 45000 },
];


let updatedOrders = [...orders, ...additionalOrders];

console.log(updatedOrders);

// Start coding here
let newOrders = [...orders, ...additionalOrders];
console.log(newOrders);
