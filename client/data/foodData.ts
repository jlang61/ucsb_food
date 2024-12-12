const diningMenu = [
{
"date": "2024-12-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Egg Turkey Swiss English Muffin Sandwich", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Nut Muffin (w/nuts)"],
"Lunch": ["Sliced Pastrami", "Tuna Salad", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Chicken Stir Fry with Green Beans", "Spicy Tofu w/Vegetables & Noodles", "Pork Sisig", "Long Grain Rice", "Pinakbet - Veggie Stew", "Sauteed Zucchini", "Three Bean Salad", "Arugula Salad with Goat Cheese", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Carrot and Ginger Soup", "Grass Fed Burger", "Gardenburger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding (w/nuts)", "Caramel Flan"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu Vegetable Stir Fry", "Spicy Black Bean Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Fresh Green Beans", "Stuffed Zucchini", "Arugula Salad with Goat Cheese", "Bowtie Pasta", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Pesto Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread", "Morning Glory Muffin (w/nuts)"],
"Lunch": ["Turkey Rice Soup", "Macaroni & Cheese w/Bacon & Jalapeno", "Bok Choy with Garlic & Ginger", "Baked Potato", "Carnitas Taco", "Bean and Rice Wet Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Hawaiian Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Spicy Basil Beef", "Spicy Tofu Noodle Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Roast Beef & Jack on Sourdough", "Krinkle Cut French Fries", "Cucumber & Onion Salad", "Chocolate Chocolate Chip Bar (w/nuts)"],
"Dinner": ["French Onion Soup", "BBQ Pork Spare Ribs", "Roasted Potato Wedges", "Vegetable Medley", "Baked Potato", "Chicken Nachos", "Vegetable Empanada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Hawaiian Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Tofu Chinese Stir Fry w/Brown Rice", "Long Grain Rice", "Brown Rice", "Pasta Salad with Spinach & Feta", "Cornbread", "Peach Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Roasted Citrus Thyme Carrots", "Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Snickerdoodle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Roasted Citrus Thyme Carrots", "Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Snickerdoodle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Watermelon", "Sliced Cantalope", "Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Fluffy Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Pecan Sour Cream Coffee Cake (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Sourdough French Toast", "Cottage Fried Potatoes", "Sauteed Kale"],
"Lunch": ["Noodle Salad w/Roasted Broccoli &Kale", "Asian Influenced Vegetable Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Chicken White Bean Chili", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pepperoni Pizza", "Fresh Tomato Basil Garlic Pasta", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Wheat Germ Bread", "Salted Caramel Cupcake", "Chocolate Chip Cookie", "Chicken Parmigiana Sandwich", "White Beans", "Yogurt Potato Salad", "Seasoned Vegetable Medley", "Spicy Korean Pork Bowl", "Steamed Fresh Broccoli", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Shoestring Fries", "Sourdough French Toast", "Falafel Sandwich", "Red Chimichurri Sauce", "Chipotle Aioli", "Cucumber Tzatziki"],
"Dinner": ["Baked Potato", "Wild Rice", "Chicken White Bean Chili", "Pepperoni Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pesto Bread", "Tres Leches Cake", "Chicken Spinach & Mushroom Lasagna", "Spicy Marinara Sauce", "Fresh Herb Polenta with Marinara", "White Beans", "Roasted Mixed Vegetables", "Thai Chicken Taco", "Grilled Pineapple/Mango Salsa", "Ten Spice Fried Rice", "Sauteed Zucchini with Garlic", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-12-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Grilled Hoki Fish with Chermoula Sauce", "African Spiced Seitan", "Couscous", "Pasta Salad with Smoked Salmon", "Crunchy Fruit Salad (w/nuts)", "Beef and Bean Tostada", "Vegetable Tostada", "Corn with Red Peppers", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Roasted Butternut Soup w/Pepitas", "Cheeseburger", "Gardenburger", "Grilled Swiss & Tomato on Wheat", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Jalapeno Cheddar Roll", "Pumpkin Crisp", "Cowboy Cookie Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Thai Beef Noodle w Peanut Sauce(w/nuts)", "Stir Fry Noodles with Vegetables", "Far East Vegetable Soup", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda with Black Beans", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Whole Wheat Sourdough Bread", "Black Forest Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Blueberry Pancake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Sticky Bun (w/nuts)"],
"Lunch": ["New England Clam Chowder", "BBQ Chicken Sandwich", "Vegetable Medley", "Baked Potato", "Fish Taco", "Black Bean Tostada", "Rice with Cilantro & Lime", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "zCellentani Pasta", "Tomato Cream Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Chicken Corn Dog", "Steak Fries", "Tortellini Pasta Salad (w/nuts)", "Cranberry Almond Bar (w/nuts)"],
"Dinner": ["Chicken Rice Soup", "Herb & Garlic Crusted Catfish", "Eggplant Parmigiana", "Fresh Vegetable Medley", "Baked Potato", "Beef Sope", "Chile Corn Zucchini Soft Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Shrimp & Peanut Pad Thai (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Long Grain Rice", "Brown Rice", "Carrot & Raisin Salad", "Marble Cake w/Chocolate Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Roasted Citrus Thyme Carrots", "Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Snickerdoodle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Roasted Citrus Thyme Carrots", "Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Snickerdoodle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Cantaloupe", "Sliced Honeydew", "Peanut Butter & Banana Oats (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Orange Cranberry Muffin", "New York Style Crumb Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Strawberry Pancakes", "Sausage Patty", "Roasted Breakfast Potatoes", "Steamed Broccoli & Cauliflower"],
"Lunch": ["Green Bean & Cucumber w/Miso", "Chicken Caesar Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Basmati Rice", "Dilled Vegetable Barley Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Mushroom Ragout over Polenta", "Sourdough Bread", "Cowboy Cookie Bar", "Almond Biscotti (w/nuts)", "Chicken Enchiladas", "Spinach Enchilada", "Spanish Rice w/Roasted Corn", "Lettuce/Cheese/Tomatoes", "Refried Beans", "Teriyaki Chicken Stir Fry", "Bok Choy & Nappa Cabbage w/Sesame", "Cucumber & Avocado Sushi Plate", "Spicy Shrimp Sushi", "Hamburger", "Vegetarian Cuban Sandwich", "Strawberry Pancakes", "Crinkle Cut French Fries", "Chipotle Aioli", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Dilled Vegetable Barley Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Vegetable Stromboli", "Creamy Pesto Sauce", "Fettuccine Pasta", "Mushroom Ragout over Polenta", "Hawaiian Sweet Bread", "Pumpkin Pie", "Chicken Cacciatore", "Buttered Noodles", "Pinto Beans", "Steamed Broccoli & Cauliflower", "Grilled Mahi Mahi with Chermoula Sauce", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-12-14",
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
"date": "2024-12-15",
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
"date": "2024-12-16",
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
"date": "2024-12-17",
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
"date": "2024-12-18",
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
