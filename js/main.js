
//bonous work use 3 function

function getValue(item) {
    return parseFloat(document.getElementById(item).innerText);
}
function setValue(item, ItemValue) {
    document.getElementById(item).innerText = ItemValue;
    updateTotal();
}

function updateTotal() {
    const bestPrice = getValue('best-price');
    const memoryCost = getValue('memory-cost');
    const storageCost = getValue('storage-cost')
    const deliveryCost = getValue('delivery-cost');
    document.getElementById('total-price').innerText = bestPrice + memoryCost + deliveryCost + storageCost;
    document.getElementById('Total').innerText = bestPrice + memoryCost + deliveryCost + storageCost;
}

// Add memory cost 

document.getElementById('memory-field').addEventListener('click', function (event) {

    const memoryType = event.target.innerText;

    if (memoryType.indexOf('8GB') != -1 && getValue('memory-cost') == 180) {
        setValue('memory-cost', 0);

    }
    else if (memoryType.indexOf('16GB') != -1 && getValue('memory-cost') == 0) {
        setValue('memory-cost', 180);
    }
})

// add storage cost 

document.getElementById('storage-field').addEventListener('click', function (event) {

    const storageType = event.target.innerText;

    if (storageType.indexOf('256GB') != -1 && getValue('storage-cost') != 0) {
        setValue('storage-cost', 0);
    }
    else if (storageType.indexOf('512GB') != -1 && getValue('storage-cost') != 100) {
        setValue('storage-cost', 100);
    }
    else if (storageType.indexOf('1TB') != -1 && getValue('storage-cost') != 180) {
        setValue('storage-cost', 180);
    }
})


// add delivery cost 

document.getElementById('delivery-field').addEventListener('click', function (event) {
    const deliveryType = event.target.innerText;
    if (deliveryType.indexOf('FREE') != -1 && getValue('delivery-cost') == 20) {
        setValue('delivery-cost', 0);
    }
    else if (deliveryType.indexOf('20') != -1 && getValue('delivery-cost') == 0) {
        setValue('delivery-cost', 20);
    }

})


//bonous work use pomo code get 20% discount

document.querySelector("#btn-apply").addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code');
    if (pomoCode.value == 'stevekaku') {
        const totalPrice = getValue('total-price');
        document.getElementById('Total').innerText = (totalPrice * 80) / 100;
        pomoCode.value = '';
    }
    else {
        console.log('please enter the correct pomo');
    }
})