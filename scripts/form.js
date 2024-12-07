// const productName = document.querySelector("#products");
// const products = [
//     {
//       id: "fc-1888",
//       name: "flux capacitor",
//       averagerating: 4.5
//     },
//     {
//       id: "fc-2050",
//       name: "power laces",
//       averagerating: 4.7
//     },
//     {
//       id: "fs-1987",
//       name: "time circuits",
//       averagerating: 3.5
//     },
//     {
//       id: "ac-2000",
//       name: "low voltage reactor",
//       averagerating: 3.9
//     },
//     {
//       id: "jj-1969",
//       name: "warp equalizer",
//       averagerating: 5.0
//     }
//   ];



// function namesOfProducts(name) {
//     name.forEach(products => {
//         // Create elements
//         const options = document.createElement("option"); 
        
        
//         options.innerHTML = products.name;
// });
// }

// const option =namesOfProducts;

// productName.appendChild(option);



const productName = document.querySelector("#products");
const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

function namesOfProducts(products) {
    products.forEach(product => {
        // Create elements
        const option = document.createElement("option");
        option.value = product.id;
        option.innerHTML = product.name;

        // Append the option to the select element
        productName.appendChild(option);
    });
}

// Call the function to populate the select element
namesOfProducts(products);



// ..... localstorage......//

document.addEventListener("DOMContentLoaded", () => {
    // Function to initialize the counter
    function initializeCounter() {
        if (localStorage.getItem("reviewCount") === null) {
            localStorage.setItem("reviewCount", 0);
        }
    }

    // Function to update the counter
    function updateCounter() {
        let reviewCount = parseInt(localStorage.getItem("reviewCount"));
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
    }

    // Function to display the counter
    function displayCounter() {
        let reviewCount = localStorage.getItem("reviewCount");
        alert(`You have submitted ${reviewCount} reviews.`);
    }

    // Initialize the counter when the page loads
    initializeCounter();

    // Handle form submission
    document.querySelector("form").addEventListener("submit", (event) => {
        // Update the counter
        updateCounter();
        // Optionally, display the updated counter
        displayCounter();
        // Let the form submit normally
    });
});
