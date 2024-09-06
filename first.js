//Increasing and decreasing quantity & update total price 

let counts = [0, 0, 0];
let quantities = document.getElementsByClassName("quantity");
let totalPriceElement = document.querySelector(".total"); 
let prices = [100, 20, 50];  
let total = 0;


function increaseQuantity(index) {
    counts[index]++;
    quantities[index].textContent = counts[index];  
    updateTotalPrice();
    console.log(`Product ${index + 1} count: `, counts[index]);
}

function decreaseQuantity(index) {
    if (counts[index] > 0) {
        counts[index]--;
    }
    quantities[index].textContent = counts[index];  
    updateTotalPrice();
    console.log(`Product ${index + 1} count: `, counts[index]);
}

function updateTotalPrice() {
total = 0;
    for (let i = 0; i < counts.length; i++) {
        total += counts[i] * prices[i];
    }

    totalPriceElement.textContent = `${total} $`;  
}

//Changing like button color on click

let likeButtons = document.getElementsByClassName("fa-heart");
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function() {
        if (likeButtons[i].style.color === "red") {
            likeButtons[i].style.color = "black";
        } else {
            likeButtons[i].style.color = "red";
        }
    });
}

//Deleting Product

let deleteButtons = document.getElementsByClassName("fa-trash-alt");
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
        deleteButtons[i].parentNode.parentNode.parentNode.remove();
        counts[i] = 0;
        updateTotalPrice();
    });
}
 