///// memory
document.getElementById('btn-8GB').addEventListener('click',function(){
    const memoryCostEightGB = document.getElementById('memory-cost');
    memoryCostEightGB.innerText = 0;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299;  
});

document.getElementById('btn-16GB').addEventListener('click',function(){
    const memoryCostSixteenGB = document.getElementById('memory-cost');
    const memoryCost = memoryCostSixteenGB.innerText = 180;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299 + memoryCost;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299 + memoryCost; 
});


//// Storage 

document.getElementById('storage-256GB').addEventListener('click',function(){
    const storage256= document.getElementById('strong-cost');
    storage256.innerText = 0;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299;  
});

document.getElementById('storage-512GB').addEventListener('click',function(){
    const storage512 = document.getElementById('strong-cost');
    const memoryCost = storage512.innerText = 100;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299 + memoryCost;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299 + memoryCost; 
});

document.getElementById('storage-1TbGB').addEventListener('click',function(){
    const storage1TB = document.getElementById('strong-cost');
    const memoryCost = storage1TB.innerText = 180;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299 + memoryCost;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299 + memoryCost; 
});



///// Delivery




document.getElementById('free-delivery').addEventListener('click',function(){
    const deliverWithoutCost = document.getElementById('delivery-cost');
    const delyveryCost = deliverWithoutCost.innerText = 0;

    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299 + delyveryCost;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299 + delyveryCost; 
});

document.getElementById('paid-delivery').addEventListener('click',function(){
    const deliverWithCost = document.getElementById('delivery-cost');
    const delyveryCost = deliverWithCost.innerText = 20;

    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = 1299 + delyveryCost;
    const lastTotal = document.getElementById('last-total');
    lastTotal.innerText = 1299 + delyveryCost; 
});

///// Coupon section

function pomoCode(){
    

        const totalCost =document.getElementById('total-cost');
        const totalValue = totalCost.innerText;

        const lastTotal = document.getElementById('last-total');
        const lastTotalValue = lastTotal.innerText;

        const pomoCode = document.getElementById('pomo-code').value;
        

        if (pomoCode === 'stevekaku') {

            const afterCoupon =  totalValue - (totalValue*0.2);
           totalCost.innerText = parseInt(afterCoupon);

           const afterCouponLast = lastTotalValue-(lastTotalValue*0.2);
           lastTotal.innerText = parseInt(afterCouponLast);


            event.preventDefault();
            document.getElementById('pomo-code').value=" ";
        }

   
}