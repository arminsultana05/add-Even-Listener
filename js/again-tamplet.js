const detailButton = document.getElementById('detail-submit-btn').addEventListener('click', function() {
    const byerDetails = document.getElementById('buyer-details-input');

    const byerInfo = document.getElementById('buyer-info');
    byerInfo.innerText = byerDetails.value;
    byerDetails.value = '';

})
const addButton = document.getElementById('add-details-btn').addEventListener('click', function() {


    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');
    console.log(itemName.value);

    const totalAmount = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);


    // creat table and add 3 input value.....
    const tableRaw = document.createElement('tr');

    tableRaw.innerHTML = `<th>${itemName.value}</th>
    <td>${itemPrice.value}</td>
    <td>${itemQuantity.value}</td>
    <td class ="item-total">${totalAmount}</td>

    `
    infoTable.appendChild(tableRaw);
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';

    totalCalculation();


})

function totalCalculation() {
    const calculate = calculation();
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = calculate;
    const tax = calculate * .2;
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('grand-total').innerText = tax + calculate;
    document.getElementById('grand-total-2').innerText = tax + calculate;



}

function calculation() {

    let sum = 0;
    const itemTotal = document.getElementsByClassName('item-total');

    for (const cost of itemTotal) {
        const price = parseFloat(cost.innerText);
        sum = sum + price;
    }
    return sum;
}