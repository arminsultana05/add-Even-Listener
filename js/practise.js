 document.getElementById('detail-submit-btn').addEventListener('click', function() {

     const buyerDetails = document.getElementById('buyer-details-input');
     const buyerInfo = document.getElementById('buyer-info');
     buyerInfo.innerText = buyerDetails.value;
     buyerDetails.value = '';
 })

 //  Use Click method  for name,price,quantity input.....

 document.getElementById('add-details-btn').addEventListener('click', function() {
     const tableInfo = document.getElementById('info-table')

     const itemName = document.getElementById('item-name-input');
     const itemPrice = document.getElementById('item-price-input');
     const itemQuantity = document.getElementById('item-quantity-input')


     const totalPrice = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);

     //  When Click add button with itenmane,price, quantity creat e dynamic New table.......
     const tr = document.createElement('tr');
     const th = document.createElement('th')
     const td1 = document.createElement('th')
     const td2 = document.createElement('th')
     const td3 = document.createElement('th')


     td3.classList.add("item-total");
     th.innerText = itemName.value;
     td1.innerText = itemPrice.value;
     td2.innerText = itemQuantity.value;
     td3.innerText = totalPrice;



     tr.appendChild(th);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tableInfo.appendChild(tr);
     itemName.value = '';
     itemPrice.value = '';
     itemQuantity.value = '';
     totalCulate();



 })

 function totalCulate() {

     const sum = calculation();

     const sub = document.getElementById('sub-total');
     sub.innerText = sum;
     const taxt = sum * 0.2;
     document.getElementById('tax').innerText = taxt.toFixed(2);
     document.getElementById('grand-total').innerText = sum + taxt;
     document.getElementById('grand-total-2').innerText = sum + taxt;



 }




 function calculation() {
     let sum = 0;
     const cost = document.getElementsByClassName('item-total');
     for (let i = 0; i < cost.length; i++) {
         const element = cost[i];
         const price = parseFloat(element.innerText);
         sum = sum + price;
     }
     return sum;
 }