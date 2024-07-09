import foods from "./foods.mjs";

const allCategories=[...new Set(foods.map(food => food.category))];

console.log(allCategories)


function categoryExists(category){
    const allCategories=[...new Set(foods.map(food => food.category))];
    return allCategories.includes(category)
}
console.log(categoryExists("japan"))
console.log(categoryExists("Japanese"))




function findCategory(category1){
    const filtered = foods.filter(food => (food.category == category1))
    console.log(filtered)
}

findCategory("Japanese")


const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
// Expected output: Total of the ticket: ["🥜","🌮","🥗","🍕","🍣","🧀"] is $52.48 

const result=[...foods.filter(food => (food.icon. ticket.map(food => food.icon)))]
console.log(result);


