// formValidation.js
document.getElementById("travelOfferForm").addEventListener("submit", function(event) {
    let form = event.target;
    let isValid = true;
 
    // Title validation (min length 3)
    let title = document.getElementById("title");
    if (title.value.trim().length < 3) {
        title.classList.add("is-invalid");
        isValid = false;
    } else {
        title.classList.remove("is-invalid");
    }

    // Destination validation (only letters and spaces, min 3 chars)
    let destination = document.getElementById("destination");
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    if (!destinationRegex.test(destination.value.trim())) {
        destination.classList.add("is-invalid");
        isValid = false;
    } else {
        destination.classList.remove("is-invalid");
    }

    // Date validation
    let departure = document.getElementById("departure");
    let returnDate = document.getElementById("return");
    if (!departure.value) {
        departure.classList.add("is-invalid");
        isValid = false;
    } else {
        departure.classList.remove("is-invalid");
    }

    if (!returnDate.value) {
        returnDate.classList.add("is-invalid");
        isValid = false;
    } else {
        returnDate.classList.remove("is-invalid");
    }

    // Price validation (positive number)
    let price = document.getElementById("price");
    if (parseFloat(price.value) <= 0 || isNaN(price.value)) {
        price.classList.add("is-invalid");
        isValid = false;
    } else {
        price.classList.remove("is-invalid");
    }

    // Category validation (must be selected)
    let category = document.getElementById("category");
    if (!category.value) {
        category.classList.add("is-invalid");
        isValid = false;
    } else {
        category.classList.remove("is-invalid");
    }

    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
    }
});