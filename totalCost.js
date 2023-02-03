
function totalCost(products) {
    let numOfObjects = products.length;
    let total = 0;
    for (let i = 0; i < numOfObjects; i++) {
        total += products[i].price;
    }
    return total;
}
var getTotal = totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200 }, { name: 'Fresh Sugar', price: 300 }]);
console.log(getTotal);