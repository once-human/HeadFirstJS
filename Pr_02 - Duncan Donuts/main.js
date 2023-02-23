function updateOrder(){
    const TAXRATE;
    const DONUTPRICE;

    var numCakeDonuts = document.getElementById("cakedonuts").value;
    var numGlazedDonuts = document.getElementById("glazeddonuts").value;
    var subTotal = (numCakeDonuts + numGlazedDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;

    document.getElementById("subtotal").innerHTML = "$" + subTotal.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
};

function placeOrder(){
    // Submit Order to the Server
    form.Submit();
};

// document.getElementById("placeOrderBtn").onclick="placeOrder(document.getElementByID('orderForm').form)";