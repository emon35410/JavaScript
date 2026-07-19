function OrderTea(cups = 1 , type = "milk tea"){
    return `${cups} cup(s) of ${type}`
}

console.log(OrderTea());
console.log(OrderTea(3, "Green Tea"))