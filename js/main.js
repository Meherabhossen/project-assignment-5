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

//////storage

document.getElementById('storage-256GB')
