const diningMenu = [
{
"date": "2024-06-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Carnitas Tortas", "Jicama Pico De Gallo", "Tabouli Salad", "Vietnamese Pork Banh Mi", "Potato Chip", "Sauteed Summer Squash with Herbs", "Green Beans", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "New England Clam Chowder", "Charburger", "Gardenburger", "Potato Taquito", "Krinkle Cut Fries", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Tabouli Salad", "Crispy Salmon Roll", "Long Grain Rice", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "zGarlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Vietnamese Beef Sub (Banh Mi)", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish and Shrimp Enchilada", "Grilled Vegetable Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Spicy Turkey Citrus Stir Fry w/Br. Rice", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Mozzarella & Tomato on Wheat", "Krinkle Cut French Fries", "Wild Rice Garden Salad", "Banana Chocolate Chip Cookie"],
"Dinner": ["Hearty Vegetable Soup", "Tri Tip Roast", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Turkey Hard Taco", "Vegetable Corn Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Orange Chicken Stir Fry", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Asian Spinach Salad", "Devil's Food Cake with Mocha Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Honeydew Melon", "Cantaloupe", "Watermelon", "Make Your Own Waffle", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Fried Eggs", "Vegetable Fried Rice", "Potatoes O'Brien", "Mixed Greens Side Salad"],
"Lunch": ["Dragon Noodles", "Chinese Chicken Salad Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Caprese Flatbread w/Balsamic Reduction(v", "Three Cheese Pizza on White", "Fusilli Buscatti Pasta", "Roasted Vegetable Marinara Sauce", "Homemade Onion Bread", "Shortbread Espresso Cookie", "Lemon Pie", "Turkey Melt", "Red Beans and Rice", "Fresh Green Beans", "Tangy Apple Cabbage Slaw", "General Tso's Chicken", "Sticky Rice", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Blended Burger with Brioche Bun", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Chipotle Aioli", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Pesto Pizza", "Penne with Chicken and Mushrooms", "Marinara Primavera Sauce", "Fusilli Buscatti Pasta", "Homemade Onion Bread", "Blueberry Lemon Cake", "Mediterranean Spiced Rotisserie Chicken", "Butternut Squash Risotto", "Black Beans", "Fresh Mashed Potatoes", "Steamed Zucchini & Crookneck Squash", "Fried Fish Taco", "Salsa", "Black Beans w/Brown Rice & Cilantro", "Lettuce/Cheese/Tomatoes", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-06-15",
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
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
"date": "2024-06-16",
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
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
"date": "2024-06-17",
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
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
"date": "2024-06-18",
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
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
"date": "2024-06-19",
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
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
"date": "2024-06-20",
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
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
