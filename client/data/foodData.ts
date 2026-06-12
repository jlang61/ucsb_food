const diningMenu = [
{
"date": "2026-06-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Arroz con Leche", "Denver Omelet", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Caramel Apple Scones"],
"Lunch": ["Sliced Turkey", "Sliced Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "BBQ Chicken Drumstick", "Sticky Rice", "Vegetable Yakisoba", "Jicama Pico De Gallo", "Tabouli Salad", "Memphis Style Pork Ribs", "Roasted Potato Wedges", "Sauteed Yellow Squash with Herbs", "Green Beans", "Buffalo Chicken Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza", "New England Clam Chowder", "Charburger", "Gardenburger", "Potato Taquito", "Sweet Potato Fries", "White Navy Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Whole Wheat Cheese Onion Roll", "Green Tea Soy Pudding", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Tabouli Salad", "Crispy Salmon Roll", "Long Grain Rice", "Vegetable Pad Thai w/Peanut(w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Rigatoni Pasta", "Roasted Pepper Tomato Sausage Sauce", "Fettucine Alfredo", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Buffalo Chicken Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza", "Garlic Roll", "Carrot Cake with Walnuts (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread"],
"Lunch": ["New England Clam Chowder", "Spinach & Feta Turnover", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Chicken Fried Taco", "Grilled Vegetable Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Spicy Turkey Citrus Stir Fry", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Mozzarella & Tomato on Wheat", "Krinkle Cut French Fries", "Wild Rice Garden Salad", "Banana Chocolate Chip Cookie"],
"Dinner": ["Hearty Vegetable Soup", "Blackened Hoki", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Turkey Hard Taco", "Vegetable Corn Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Orange Chicken Stir Fry", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Asian Spinach Salad", "Devil's Food Cake with Mocha Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Fried Fish Sandwich", "Creamy Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Cheese Ravioli w/Marinara Sauce", "Bacon Fried Rice", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Club Sub Sandwich", "Steak Burrito", "Classic Burger", "Veggie Burger", ""Creamy" Tomato Basil Pasta", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Blueberry Yogurt", "Cantaloupe", "Pineapple", "Honeydew Melon", "Buckwheat Almond Granola (w/nuts)", "Black & Blue Granola Parfait", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Yogurt Muffin", "Cinnamon Coffee Cake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Sausage Patty", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Lunch": ["Ranch Potato Salad", "Grilled Cajun Chicken Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Basmati Rice", "Split Pea Soup with Ham", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Farro", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Linguini Pasta", "Roasted Pepper Tomato Sausage Sauce", "Hawaiian Sweet Bread", "Chocolate Pudding", "Mocha Cupcake", "Chicken Enchiladas", "Taco Rajas", "Mexican Rice", "Tortilla Chips & Salsa", "Refried Beans", "Chinese Meatball Soup", "Steamed Fresh Broccoli", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi Plate", "Hamburger", "Grilled Cheese Sandwich", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chipotle Aioli", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Split Pea Soup with Ham", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Farro", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Banana Cake&Peanut Butter Icing(w/nut)(v", "Hawaiian Sweet Bread", "Chile Verde w/Pork & Corn Tortillas", "Quesadilla w/Roasted Poblano Chiles", "Salsa", "Refried Beans", "Lettuce/Cheese/Tomatoes", "Lemon Baked Salmon", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2026-06-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2026-06-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2026-06-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2026-06-16",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2026-06-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2026-06-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
];
export default diningMenu
