let count =0;
let final_cost =0;
// for first card
document.getElementById("first-cart").addEventListener("click", function(){
    // get the data from the html using id
    count =count+1;
    const foodName =document.getElementById("food-name").innerText
    const foodPrice =document.getElementById("food-price").innerText
    const foodQuantity =document.getElementById("food-quantity").innerText

    const totalPrice1 = parseInt(foodPrice) * parseInt(foodQuantity)
    
// show the data
    // const container =document.getElementById("table-container")

    // const tr = document.createElement("tr")
    // tr.innerHTML =`
    // <td>${count}</td>
    // <td>${foodName}</td>
    // <td>${foodPrice}</td>
    // <td>${foodQuantity}</td>
    // <td>${totalPrice}</td>
    // `
    // container.appendChild(tr)

    displayData(foodName ,foodPrice ,foodQuantity ,totalPrice1)
})

// for second card
document.getElementById("second card").addEventListener("click", function(e){
    count =count+1;
    const foodName =e.target.parentNode.parentNode.children[0].innerText
    const foodPrice =e.target.parentNode.parentNode.children[2].children[0].innerText
    const foodQuantity =e.target.parentNode.parentNode.children[3].children[0].innerText
    const totalPrice2 = parseInt(foodPrice) * parseInt(foodQuantity)
    displayData(foodName ,foodPrice ,foodQuantity ,totalPrice2)

})


// for third card

document.getElementById("third card").addEventListener("click", function(e){
    count =count+1;
    const foodName =e.target.parentNode.parentNode.children[0].innerText
    const foodPrice =e.target.parentNode.parentNode.children[2].children[0].innerText
    const foodQuantity =e.target.parentNode.parentNode.children[3].children[0].innerText
    const totalPrice3 = parseInt(foodPrice) * parseInt(foodQuantity)
    displayData(foodName ,foodPrice ,foodQuantity ,totalPrice3)
})

// for 4th card

document.getElementById("fourth card").addEventListener("click", function(){
    // get the data from the html using id
    count =count+1;
    const foodName =document.getElementById("food4-name").innerText
    const foodPrice =document.getElementById("food4-price").innerText
    const foodQuantity =document.getElementById("food4-quantity").innerText

    const totalPrice4 = parseInt(foodPrice) * parseInt(foodQuantity)
    displayData(foodName ,foodPrice ,foodQuantity ,totalPrice4)
})

// for card fifth
document.getElementById("fifth card").addEventListener("click", function(e){
    count =count+1;
    const foodName =e.target.parentNode.parentNode.children[0].innerText
    const foodPrice =e.target.parentNode.parentNode.children[2].children[0].innerText
    const foodQuantity =e.target.parentNode.parentNode.children[3].children[0].innerText
    const totalPrice5 = parseInt(foodPrice) * parseInt(foodQuantity)
    displayData(foodName ,foodPrice ,foodQuantity ,totalPrice5)
})

// for last card

document.getElementById("last-cart").addEventListener("click", function(){
    count =count+1;
    const foodName =document.getElementById("lastFood-name").innerText
    const foodPrice =document.getElementById("first-input").value
    const foodQuantity =document.getElementById("second-input").value
    const totalPrice6 = parseInt(foodPrice) * parseInt(foodQuantity)
    displayData(foodName ,foodPrice ,foodQuantity ,totalPrice6)
})



// use common function to show display data
function displayData(ourFoodName,ourFoodPrice,ourFoodQuantity,ourTotalPrice){
    const container =document.getElementById("table-container")
    const secondContainer =document.getElementById("table-container-2")

    const tr = document.createElement("tr")
    tr.innerHTML =`
    <td>${count}</td>
    <td>${ourFoodName}</td>
    <td>${ourFoodPrice}</td>
    <td>${ourFoodQuantity}</td>
    <td>${ourTotalPrice}</td>
    `
    container.appendChild(tr)
}
