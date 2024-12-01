const products = [
    { name: "PS6", price: 7500, category: "Electronics" },
    { name: "Phone", price: 3000, category: "Electronics" },
    { name: "GooglePhone", price: 5555, category: "Electronics" },
    { name: "Hoodie", price: 269, category: "Clothing" },
    { name: "Funny Hat", price: 25, category: "Clothing" },
    { name: "Not Funny Hat", price: 2500, category: "Clothing" },
    { name: "Shoe 1", price: 155, category: "Clothing" },
    { name: "Shoe 2", price: 155, category: "Clothing" },
    { name: "Shirt", price: 200, category: "Clothing" },
    { name: "Red Apple", price: 2, category: "Food" },
    { name: "Green Apple", price: 2, category: "Food" },
    { name: "Blue Apple", price: 4, category: "Food" },
    { name: "Dog Food", price: 25, category: "Food" },
    { name: "Not Dog Food", price: 29, category: "Food" },
    { name: "Meat", price: 15, category: "Food" },
    { name: "Serek", price: 8, category: "Food" },
];

function filterProducts(products, category, minPrice, maxPrice){
    return products.filter(product =>
        (category ? product.category === category : true) &&
        (minPrice !== undefined ? product.price >= minPrice : true) &&
        (maxPrice !== undefined ? product.price <= maxPrice : true)
    );
}

function displayFilteredProducts(products, category, minPrice, maxPrice){
    const filteredProducts = filterProducts(products, category, minPrice, maxPrice);
    
    if (filteredProducts.length === 0){
        console.log("No Products.");
    } else {
        console.log("Found Products:");
        filteredProducts.forEach(product => {
            console.log(`- ${product.name} || Price: ${product.price} zł || Category: ${product.category}`);
        });
    }
}

const selectedCategory = "Clothing";
const minPrice = 100;
const maxPrice = 500;

displayFilteredProducts(products, selectedCategory, minPrice, maxPrice);