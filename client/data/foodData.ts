const diningMenu = [
{
"date": "2024-05-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Carnitas Tortas", "Jicama Pico De Gallo", "Tabouli Salad", "Beef Milanesa", "Sauteed Summer Squash with Herbs", "Italian Green Beans", "Beef Gravy", "Mashed Potatoes", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "New England Clam Chowder", "Charburger", "Gardenburger", "Potato Taquito", "Krinkle Cut Fries", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Tabouli Salad", "Crispy Salmon Roll", "Long Grain Rice", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Garlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cheese Blintz", "Strawberry Sauce", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Vietnamese Beef Sub (Banh Mi)", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Grilled Vegetable Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Spicy Turkey Citrus Stir Fry w/Br. Rice", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Mozzarella & Tomato on Wheat", "Krinkle Cut French Fries", "Wild Rice Garden Salad", "Potato Roll", "Banana Chocolate Chip Cookie"],
"Dinner": ["Hearty Vegetable Soup", "Blackened Hoki", "Tartar Sauce", "Creole Beans and Rice", "Kale/Peppers and Garlic", "Baked Potato", "Baked Sweet Potato", "Turkey Hard Taco", "Vegetable Corn Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Orange Chicken Stir Fry", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Asian Spinach Salad", "Onion Bread", "Devil's Food Cake with Mocha Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pork Dan Dan Noodle (w/nuts)", "Fusilli with Garlic Cream Sauce", "Spicy Tomato Orzo Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Garlic Spinach", "Fries", "Lays Potato Chip", "Snickerdoodle Cookie", "Oatmeal Raisin Bar", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Pork Dan Dan Noodle (w/nuts)", "Fusilli with Garlic Cream Sauce", "Spicy Tomato Orzo Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Garlic Spinach", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Oatmeal Raisin Bar", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Honeydew Melon", "Cantaloupe", "Organic Fresh Strawberry", "Make Your Own Waffle", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Fried Eggs", "Vegetable Fried Rice", "Potatoes O'Brien", "Mixed Greens Side Salad"],
"Lunch": ["Dragon Noodles", "Chinese Chicken Salad Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Caprese Flatbread w/Balsamic Redux", "Three Cheese Pizza on White", "Fusilli Buscatti Pasta", "Roasted Vegetable Marinara Sauce", "Homemade Onion Bread", "Shortbread Espresso Cookie", "Lemon Pie", "Turkey Melt", "Red Beans and Rice", "Fresh Green Beans", "Tangy Apple Cabbage Slaw", "Grilled Chicken Taco", "Roasted Tomato Salsa", "Cilantro & Onion Mixture", "Refried Beans", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Blended Burger with Brioche Bun", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Chipotle Aioli", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Pesto Pizza", "Penne with Chicken and Mushrooms", "Marinara Primavera Sauce", "Fusilli Buscatti Pasta", "Homemade Onion Bread", "Blueberry Lemon Cake", "Mediterranean Spiced Rotisserie Chicken", "Butternut Squash Risotto", "Black Beans", "Fresh Mashed Potatoes", "Steamed Zucchini & Crookneck Squash", "Fried Fish Taco", "Salsa", "Black Beans w/Brown Rice & Cilantro", "Lettuce/Cheese/Tomatoes", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-05-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Rotisserie Pork Loin", "Mushroom Gravy", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Sausage Patty", "Black Beans", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Sticky Rice", "General Tso's Chicken", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Sauteed Zucchini Sticks", "Ratatouille with White Beans", "Oven Browned Potatoes", "Rotelli Pasta", "Chicken Marinara Sauce", "Bowtie Pasta", "Fresh Pesto Sauce", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Ham & Pineapple", "Artichoke Pizza with Pesto on Wheat", "Cheese Pizza on White", "Rosemary Roll", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Lentil and Brown Rice Soup", "Hot Chicken Philly Cheese Steak Sandwich", "Vegetable Medley", "Baked Potato", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs", "Texas French Toast", "Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Pinch Bread", "Cinnamon and  Sugar Muffin"],
"Dinner": ["Chicken Vegetable Soup", "Lemon Chicken Quarter", "Orzo Pasta with Vegetables", "Fresh Vegetable Medley w/Spinach", "Baked Potato", "Beef Enchilada", "Black Bean & Rice Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Assorted Meat Pizza", "Cheese Pizza", "Herb Breadsticks", "Thai Chicken & Vegetable Curry (w/nuts)", "Thai Curry Tofu (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Green Bean Provencal Salad", "Pizza Bread", "French Crumb Apple Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Grapefruit Halves", "Pineapple", "Watermelon", "Ruby Flame Grapes", "Cinnamon Maple Granola (w/nuts)", "Granola Cantaloupe Parfait (w/nuts)", "Oatmeal", "Long Grain Rice", "Make Your Own Waffle", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Tomato Basil & Bacon Pizza", "Pasta with Grilled Vegetables", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Flour Tortilla", "Raspberry White Choc Muffin", "Egg English Muffin Sandwich", "Breakfast Quesadilla", "Creamed Spinach", "Black Beans", "Tomato Rice Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Pancake", "Turkey Bacon", "Roasted Breakfast Potatoes", "Roasted Vegetables"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Tomato Rice Soup", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Three Cheese Pizza on White", "Pasta with Grilled Vegetables", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "German Chocolate Cake (w/nuts)", "Wheat Germ Bread", "Cheese Enchilada", "Tamale Pie Vegetarian", "Mexican Rice", "Black Beans", "Grilled Zucchini & Tomatoes", "Hoisin Chicken", "Sticky Rice", "Vegetable Fried Rice", "Spinach with Fresh Garlic & Ginger", "Sushi Brown Rice Grilled Ahi Tuna Bowl", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-05-19",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Philly Cheese Steak Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "French Toast", "Cage Free Scrambled Eggs w/Ham & Cheese", "Pinto Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cinnamon Coffee Cake", "Orange Cranberry Muffin"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Stir Fry Noodles with Vegetables", "Tomato Rice Soup", "Caesar Salad", "Turkey Meatloaf", "Baby Carrots with Tarragon", "Corn", "Risotto with Fresh Vegetables", "Linguini Pasta", "Tomato Basil & Garlic Sauce", "Whole Wheat Penne Pasta", "Creamy Rosemary Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Dilled Vegetable Barley Soup", "Buffalo Chicken Drumstick", "Sauteed Swiss Chard with Garlic", "Baked Potato", "Long Grain Rice", "Vegetable & Jalapeno Pizza", "Mushroom & Rstd Onion Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Diced Potatoes with Onions", "Chicken Sausage Patty", "Waffle", "Multi-Grain Waffle", "Pasta Salad w/Chicken & Sundried Tomato", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Strawberry Muffin"],
"Dinner": ["Split Pea Soup", "Roast Beef", "Steamed Red Potatoes with Parsley", "French Cut Green Beans", "Baked Potato", "Chicken and Rice Tostada", "Potato Vegetable Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Vegetable & Jalapeno Pizza", "Mushroom & Rstd Onion Pizza on Wheat", "Herb Breadsticks", "Turkey Marinara", "Spaghetti Pasta", "Tomato Leek Marinara", "Wheat Penne Pasta", "Long Grain Rice", "Brown Rice", "Macaroni Salad", "Swirled Herb Bread", "German Apple Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Watermelon", "Pineapple", "Honeydew Melon", "Cinnamon Maple Granola (w/nuts)", "Cinnamon Apple Granola (w/nuts)", "Honeydew & Berry Parfait (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Cheese Pizza on White", "Whole Wheat Waffles", "Apple Cranberry Pancake Topping", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Flour Tortilla", "Apple Oat Coffee Cake", "Breakfast Burrito", "Refried Beans", "Fire Roasted Tomato Chipotle Salsa", "Ham & Cheddar Quiche", "Corn Chowder", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Steamed Broccoli & Cauliflower"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Corn Chowder", "Cheese Pizza on White", "Bolognese Sauce with Pancetta", "Farfalle Pasta", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Killer Brownie (w/nuts)", "Whole Wheat French Bread", "Grilled Pork Taco", "Radish and Jalapeno Slaw", "Fire Roasted Tomato Chipotle Salsa", "Roasted Cauliflower", "Black Beans", "Lettuce/Cheese/Tomatoes", "Vindaloo Chicken", "Basmati Rice", "Indian Style Stew w/ButternutSquash", "Steamed Broccoli & Cauliflower", "Daikon Roll", "California Club Roll"],
}
},
],
},
{
"date": "2024-05-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Whole Wheat Pancake (Housemade)", "Chilaquiles (No Egg)", "Sausage Patty", "Home Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Ginger with Cardamom Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Chicken Stir Fry with Green Beans", "Spicy Tofu w/Vegetables & Noodles", "Bermuda Salad", "Japanese Noodle Salad", "Smoked Pork Loin and Gouda Sandwich", "Red Salsa", "Fresh Cauliflower", "Fresh Broccoli Spears", "Chili Black Bean", "Tomato Basil Pizza on White", "Salami Pizza", "Cheese Pizza on White", "Gumbo Soup", "Charburger", "Black Bean Burger", "Falafel on Pita with Raita Sauce", "Pinto Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Quinoa", "Irish Soda Bread", "Jelly Bar Spritz", "Peanut Butter Fudge Cupcake (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Miso Broth with Udon Noodles", "Bermuda Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Fettucine Alfredo", "Penne Pasta", "Tomato and Leek Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Tomato Basil Pizza on White", "Cheese Pizza on White", "Whole Wheat Bread", "Boston Cream Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Chorizo Breakfast Burrito", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Tortilla Soup", "Spicy Asian Vegetable Wrap", "Kale/Peppers and Garlic", "Baked Sweet Potato", "Baked Potato", "Pork Chile Verde", "Sweet Corn Tamale Casserole", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pesto Artichoke Pizza", "Margherita Pizza", "Herb Breadsticks", "Greek Pasta w/Feta Tomato & Spinach", "Wheat Pasta w/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Grilled Chicken Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheese/Tomatoes/Chiles", "Steak Fries", "Strawberry Radicchio Salad (w/nuts)", "Garlic French Bread", "Chocolate Chocolate Chip Cookie (w/nut(v"],
"Dinner": ["French Onion Soup", "Herb Chicken Quarters", "Orzo Pasta with Vegetables", "Organic Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Bean & Cheese Nachos", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pesto Artichoke Pizza", "Margherita Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry & Brown Rice", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Lemon Herb Quinoa Salad", "Three Grain Bread", "Fresh Strawberry Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Fresh Strawberry", "Honeydew Melon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Muffin", "Assorted Bagels & Condiments", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Thick Egg Bread French Toast", "Sausage Patty", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spicy Carrot Salad", "Italian Tomato Panini", "Sliced Turkey", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Black Beans", "Swiss Chard & Lentil Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Pepperoni Pizza", "Penne Pasta with Pesto", "Risotto with Fresh Vegetables", "Three Grain Bread", "Apple Crisp", "Pound Cake", "Grilled BBQ Chicken Sandwich", "Classic BBQ Sauce", "Coleslaw with Vinagrette", "Fresh Sauteed Spinach", "Pinto Beans", "Homestyle Pozole with Condiments", "Pozole with Condiments", "Spicy Scallop Sushi Roll", "Vegetable Roll", "Hamburger", "Thick Egg Bread French Toast", "Tomato Bruschetta Crostini", "Shoestring Fries", "Housemade Ketchup", "Sriracha Mayonnaise", "Roasted Tomato Salsa"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Swiss Chard & Lentil Soup", "Pepperoni Pizza", "Penne w/Butternut Squash Sauce", "Fettuccini Caponata", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Orange Cake with Orange Icing", "Hawaiian Sweet Bread", "Grilled Chicken Taco", "Cilantro & Onion Mixture", "Thick Chile Salsa", "Rice with Cilantro & Onions", "Fresh Cauliflower & Carrots", "Pinto Beans", "Sweet & Sour Pork", "Sweet & Sour Tofu & Vegetables", "Sticky Rice", "Fresh Green Beans with Garlic", "Spicy Scallop Sushi Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-05-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Bacon", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread Pudding", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Santa Fe Salad", "Ambrosia Salad (w/nuts)", "Chicken Spinach & Mushroom Lasagna", "Fresh Herb Polenta with Marinara", "Green Beans", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Chickpea Vegetable Soup", "Charburger", "Grilled Vegetable Burger", "Hot Dog", "Beans Navy White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Banana Chocolate Bar", "Pao de Queijo", "Mandarin Orange Cake"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Brown Rice", "Kung Pao Beef (w/nuts)", "Stir Fry Vegetables with Tofu", "Broccoli Garlic Soup", "Caesar Salad", "Cilantro Lime Salmon", "Fire Roasted Tomato Chipotle Salsa", "Black Bean Enchilada", "Steamed Zucchini", "Spanish Corn", "Spanish Rice", "Fettuccine with Chicken, Olives & Garlic", "Fusilli with Roasted Vegetables", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Pumpkin Cheesecake Pie", "Graham Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Raspberry Cream Coffee Cake (w/nuts)"],
"Lunch": ["Cream of Mushroom Soup", "Chicken Caesar Wrap", "Steamed Carrots & Zucchini", "Baked Potato", "Chicken and Bean Burrito", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Asian Pork w/Green Bean & Brown Rice", "Lemon Ginger Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheddar on Wheat", "Krinkle Cut French Fries", "Apple Blu Cheese Walnut Salad(w/nuts)", "Whole Wheat Roll", "Toll House Bar"],
"Dinner": ["Vegetable Beef Soup", "Fish Cake", "Lemon Beurre Blanc", "Spinach Rice Casserole", "Crookneck Squash & Herbs", "Baked Potato", "Grilled Chicken & Bean Burrito", "Chipotle Tempeh Tacos", "Refried Beans (for Pizza)", "Mexican Rice", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Stir Fry Beef and Vegetables", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Tossed Italian Greens", "Cornbread", "Pumpkin Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Vanilla Yogurt", "Whole Plain Greek Yogurt", "Honeydew Melon", "Cantaloupe", "Fresh Strawberry", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Make Your Own Waffle", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Irish Soda Bread", "Morning Glory Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Tuscan Scrambled Eggs", "Sausage Biscuits & Gravy", "Diced Potatoes with Onions", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chipotle Chicken Wrap", "Egg Salad", "Sliced Genoa Salami", "Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Chicken Gumbo Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Red Onion & White Bean Flatbread", "Sausage Mushroom Pizza", "Fettucine", "Tomato Cream Sauce", "Whole Wheat Roll", "Cornmeal Berry Cake", "Lemon Bar", "Beef Soft Tacos", "Roasted Tomato Salsa", "Veggies for Gordas", "Fresh Tortilla Chips", "Pinto Beans", "Latin Bowl", "Sauteed Kale", "Seasoned Sweet Potato Halves", "Calamari Roll", "Daikon Roll", "Grilled Turkey Burger", "Grilled Swiss on Sourdough", "Sausage Biscuits & Gravy", "Steak Fries", "Spicy Mustard Sauce", "Chipotle Aioli", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Gumbo Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Garlic Pizza on Wheat", "Macaroni & Cheese", "Banana Cake & Penut Butter Icing(w/nut)v", "Sourdough Bread", "Chicken Marsala", "Rice Pilaf", "Pinto Beans", "Carrot & Zucchini with Lemon Butter", "Roasted Mixed Vegetables", "Drunken Noodles with Chicken", "Miso Broth with Udon Noodles", "Braised Bok Choy", "Calamari Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-05-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Cage Free Scrambled Eggs w/Ham & Cheese", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cranberry Orange Bread (w/nuts)", "Carrot Muffin"],
"Lunch": ["Sliced Roast Beef", "Roasted Vegetables", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "African Spiced Seitan", "Couscous", "Grilled Rockfish with Chermoula Sauce", "Grilled Hoki Fish with Chermoula Sauce", "Chinese Broccoli Salad", "Tossed Antipasta Salad", "Chicken Club Wrap", "Peas", "Vegetable Fried Rice", "Sausage Mushroom Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Classic French Onion Soup with Croutons", "Charburger", "Gardenburger", "Corn Quesadilla", "Steak Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Bread Olive", "Black and White Brownie", "White Choc Macadamia Cookie (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Ground Beef Fajita", "Vegetable Fajita", "Refried Beans", "Spanish Rice", "Chicken Rice Soup", "Chinese Broccoli Salad", "Roast Leg of Pork", "Chili and Noodles", "Corn On The Cob", "Steamed Fresh Carrots", "Roasted Potato Wedges", "Whole Wheat Spaghetti", "Meat Sauce", "Fresh Tomato Basil Garlic Pasta", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Mushroom Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Roasted Garlic Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Chilaquiles de Queso (No Egg)", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sticky Bun (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Tomato Rice Soup", "Pulled Pork Buffalo Style Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Bean and Rice Wet Burrito", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Beef Teriyaki Stir Fry & Brown Rice", "Ma Po Tofu", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Swiss Sandwich", "Shoestring French Fries", "Marinated Italian Vegetable Salad", "Wheat Germ Roll", "Pecan Pie Bar (w/nuts)"],
"Dinner": ["Carrot and Ginger Soup", "Lasagna", "Brown Rice Artichoke Casserole", "Carrots with Tarragon", "Baked Potato", "Baked Sweet Potato", "Beef Enchilada", "Potato Taquito", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Sweet & Sour Chicken", "Vegetable Lo Mein", "Long Grain Rice", "Brown Rice", "Pasta Salad with Spinach & Feta", "Pizza Bread", "Fresh Orange Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Honeydew Melon", "Fresh Strawberry", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Turkey Bacon", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Greek Chicken Wrap", "Sliced Turkey", "Sliced Roast Beef", "Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur", "Cherry Tomato Goat Cheese Herb Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Mushroom Carbonara", "Herb Focaccia Bread", "Pound Cake", "Mint Chocolate Chip Cookie", "Baked Ham & Turkey Hawaiian Sandwich", "Pineapple Fried Rice w/Tofu", "Pinto Beans", "Carrot & Zucchini with Lemon Sauce", "Sweet and Sour Chicken", "Sticky Rice", "Vegetable Medley Stir Fry", "Yam & Avocado Sushi Roll", "Spicy Tuna Roll", "Cheeseburger", "Bean and Cheese Burrito", "Buttermilk Pancakes", "Shoestring Fries", "Fire Roasted Tomato Chipotle Salsa", "Sriracha Mayonnaise", "Classic BBQ Sauce"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur", "Cherry Tomato Goat Cheese Herb Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Mushroom Carbonara", "Herb Focaccia Bread", "Rocky Road Tart (w/nuts)", "Grilled Tuscan Chicken", "Garlic French Bread", "Pasta with Olive Oil", "Pinto Beans", "Sauteed Zucchini with Garlic", "Cajun Chicken Jambalaya", "Long Grain Rice", "Red Beans & Rice", "Roasted Mixed Vegetables", "Yam & Avocado Sushi Roll", "Spicy Tuna Roll"],
}
},
],
},
{
"date": "2024-05-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Croissant with Ham & Cheese", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Nut Muffin (w/nuts)"],
"Lunch": ["Argentinian Grilled Vegetable", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Three Bean Salad", "Confetti Pasta Salad", "Chicken Salad Sandwich on Pita", "Chili and Noodles", "Sauteed Zucchini", "Steamed Crookneck Squash", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Carrot and Ginger Soup", "Grass Fed Burger", "Gardenburger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding (w/nuts)", "Baba au Rum"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu Vegetable Stir Fry", "Spicy Black Bean Soup", "Caesar Salad", "Grilled Ham with Honey Glaze", "Stuffed Zucchini", "Baked Acorn Squash", "Fresh Spinach with Garlic", "Scalloped Potatoes", "Rotelli Pasta", "Roasted Pepper Tomato Sausage Sauce", "Rigatoni Pasta", "Marinara Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Pesto Bread", "White Cake with Raspberry Filling"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bread Pudding with Whiskey Sauce", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread"],
"Lunch": ["Coconut Carrot Soup (w/nuts)", "Roasted Pork Loin Sandwich w/Gouda", "Fresh Broccoli Spears", "Baked Potato", "Chicken Mole Enchiladas", "Potato Taco", "Green Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Sesame Chicken Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Black Bean Burger", "Grilled Turkey & Jack on Sourdough", "Krinkle Cut French Fries", "Chinese Chicken Salad (w/nuts)", "Sourdough Roll", "Oatmeal Raisin Cookie (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Grilled Cajun Chicken Breast", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "BBQ Chicken Quesadilla", "Bean & Cheese Sope", "Green Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Penne Arrabiata with Chicken", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Greek Salad", "Crusty French Bread", "Chocolate Espresso Torte"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Orange Apricot Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Apple Cinnamon Oatmeal Pancake", "Fried Potatoes & Onion", "Sauteed Fresh Cauliflower"],
"Lunch": ["Zucchini Quinoa Green Bean Salad", "Queso with Roasted Chiles Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Wild Rice Country Blend", "Chicken Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Caprese Flatbread w/Balsamic Redux", "Penne with Chicken and Mushrooms", "Greek Tomato Sauce", "Linguini Pasta", "Potato Bread", "Oatmeal Craisin Cookie", "Lime Bar", "Tacos Al Pastor", "Pinto Beans", "Cilantro & Onion Mixture", "Avocado Salsa", "Rice with Corn & Roasted Chiles", "Chicken Tikka Masala", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Mushroom Lentil Burger", "Caramelized Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Wild Rice Country Blend", "Chicken Rice Soup", "Pepperoni Pizza", "Alburro Sauce", "Fettuccine Pasta", "Penne with Chicken and Mushrooms", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Potato Bread", "White Cupcake with Buttercream Icing", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Chipotle Bean Taquito", "Quinoa Salad", "Chipotle Roasted Potatoes", "Sauteed Kale", "Chile Colorado Burrito", "Refried Beans", "Rice with Cilantro & Onions", "Steamed Fresh Broccoli", "Calamari Roll", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
