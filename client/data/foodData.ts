const diningMenu = [
{
"date": "2024-05-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Egg Ham & Cheese English Muffin Sandwich", "Whole Wheat French Toast", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Raspberry Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Sticky Rice", "General Tso's Chicken", "Sweet & Sour Tofu & Veggies(w/nuts)", "Vietnamese Pork Banh Mi", "Swiss Chard with Fresh Garlic", "Sticky Rice", "Potato Chip", "Italian Chunk Salad", "Wild Arugula Romaine Salad", "Sausage Olive Pizza", "Khachapuri", "Cheese Pizza on White", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Pinto Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie (w/nuts)", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Greek Salad", "Sticky Rice", "Pork Stir Fry with Veggies", "Stir Fry Noodles with Vegetables", "Tortilla Soup", "Halal Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Caesar Salad", "Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Pesto Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Olive Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Bread Olive", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Scone"],
"Lunch": ["Hot and Sour Soup", "Patty Melt", "Fresh Broccoli Spears", "Baked Potato", "Huevos Rancheros", "Grilled Vegetable Tostada", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Buffalo Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry w/Blk Bean Sce/Br. Rice", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Malibu Burger", "Grilled Ham & Cheddar on Wheat", "Krinkle Cut French Fries", "Greek Salad", "Sourdough Roll", "Oatmeal Raisin Cookie (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Pork Loin Roast with Garlic & Ginger", "Pineapple Rice", "Steamed Green Beans", "Baked Potato", "BBQ Chicken Quesadilla", "Vegetable Soft Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Buffalo Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Kung Pao Pork (w/nuts)", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Olive Roll", "Toll House Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Grapefruit Halves", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Cornbread", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Kale"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing (v", "Goat Cheese & Tomato Panini", "Sliced Ham", "Meatloaf", "Provolone Cheese", "Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on Wheat", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Creamy Pesto Sauce", "Fettucine", "Three Grain Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Chicken Mole", "Mexican Rice", "Lettuce/Cheese/Tomatoes", "Refried Black Beans", "Roasted Cauliflower with Cumin", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Roasted Red Onion &  Zucchini", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Focaccia with Vegetables & Pesto", "Pickled Red Onion", "Sriracha Mayonnaise", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on Wheat", "Fettucine Alfredo", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Marble Cake", "Three Grain Bread", "Arroz con Pollo", "Bean & Rice Burrito", "Chili de Arbol and Tomato Salsa", "White Beans", "Cauliflower Au Gratin", "Korean Style Pork Ribs", "Korean BBQ Sauce", "Vegetable Fried Rice", "Fresh Spinach with Garlic", "Calamari Roll", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-05-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Chicken Machaca with Scrambled Eggs", "Blueberry Pancake", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Cucumber Tzatziki", "Garlic Shawarma Sauce", "Armenian Mint Yogurt Sauce", "Middle Eastern Pickled Turnips", "Chicken Caesar Salad", "Fresh Garden Pasta Salad", "Chicken Pot Pie", "Eggplant Parmigiano", "Pasta Pronto", "Steamed Crookneck Squash", "Pepperoni Pizza", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Beef Noodle Soup", "Charburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Beans Navy White", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "Red Curry Soup (w/nuts)", "Arugula Salad with Goat Cheese", "Pastitsio", "Sauteed Fresh Carrots", "Steamed Zucchini", "Oven Roasted Red Potatoes", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Fresh Tomato Basil Garlic Pasta", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Pepperoni Pizza", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Onion Roll", "Chocolate Chip Kahlua Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Banana Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Donut Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "BBQ Beef on Bun", "Roasted Carrots with Garlic", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Pasta w/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Burger on Wheat Bun", "Shoestring French Fries", "Tabouli Salad", "Roasted Garlic Roll", "Pecan Pie Bar (w/nuts)"],
"Dinner": ["Chicken Noodle Soup", "Baked Ono with Garlic & Herb", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Fried Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Three Cheese Pizza", "Herb Breadsticks", "Chicken & Veggie Stir Fry & Brown Rice", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "German Potato Salad", "Pizza Bread", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Black & Blue Parfait (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat French Toast", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Roasted Vegetable Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Potato", "Minestrone Soup", "Brown Rice", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Broccolini & Salami Stromboli", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Alburro Sauce", "Spaghetti", "Crusty French Bread", "M&M Bar (w/nuts)", "Raisin Rum Rice Pudding", "Rockfish with Lemon Pepper", "Creamy Pesto Sauce", "Parsley Potatoes", "White Beans", "Grilled Cheese and Tomato on Wheat", "Sauteed Kale Carrot & Snow Peas", "Chicken Pad Thai (w/nuts)", "Sticky Rice", "Roasted Mixed Vegetables", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Grilled BBQ Chicken Sandwich", "Whole Wheat French Toast", "Cheese Quesadilla", "Crinkle Cut French Fries", "Fire Roasted Tomato Chipotle Salsa", "Classic BBQ Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Brown Rice", "Minestrone Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Broccolini & Salami Stromboli", "Alburro Sauce", "Spaghetti Pasta", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Boston Cream Pie", "Crusty French Bread", "Chicken Piccata", "Farfalle Pasta", "White Beans", "Baked Rigatoni", "Steamed Broccoli & Cauliflower", "Fried Fish Taco", "Spanish Rice with Cilantro", "Lettuce/Cheese/Tomatoes", "Grilled Zucchini & Tomatoes", "Refried Black Beans", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-05-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Chicken Congee", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Pinto Beans", "Sausage Patty", "Chilaquiles (No Egg)", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Lemon Scone", "Banana Nut Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Italian Bread Salad", "Rotisserie Pork Loin", "Mushroom Gravy", "Carrots with Fresh Thyme", "Green Beans", "Mashed Potatoes", "Italian Quinoa", "Fettuccine with Chicken, Olives & Garlic", "Spaghetti Pasta", "Garden Vegetable Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Taco Pizza", "Mushroom Pizza on Wheat", "Cheese Pizza on White", "Pizza Bread", "Chocolate Flourless Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Chicken Philly Sandwich", "Vegetable Medley", "Baked Potato", "Long Grain Rice", "Pepperoni Pizza", "Olive Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Santa Fe Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Nut Bread  (w/nuts)", "Chocolate Chip Scone"],
"Dinner": ["Spicy Black Bean Soup", "Grilled Chicken w/ Ginger", "Fresh Broccoli Spears", "Cheesy Pasta Casserole", "Roasted Potato Wedges", "Baked Potato", "Chicken Chile Verde Tostada", "Quesadilla w/Roasted Poblano Chile", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Pepperoni Pizza", "Olive Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Chinese Vegetable Stir Fry", "Brown Rice", "Long Grain Rice", "Spinach Salad", "Sourdough Bread", "Kahlua Chocolate Cake"],
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
"Brunch": ["Grapefruit Halves", "Ruby Flame Grapes", "Watermelon", "Sliced Pineapple", "Cantaloupe", "Honeydew Melon", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "White Pizza w/Bacon & Caramelized Onion", "Pesto and Vegetable Pizza on Wheat", "Pasta Carbonara", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Pinto Beans", "Black Bean & Rice Quesadilla", "Roasted Cauliflower with Cumin", "Sweet Potato Soup w/Corn & Chipotle", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Sauteed Veggies", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Sauteed Zucchini with Garlic"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Sweet Potato Soup w/Corn & Chipotle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Tomato Basil Pizza on Wheat", "Fusilli w/Roasted Veg/Herb/Asiago", "White Wine Garlic Sauce with Chicken", "Rotini Pasta", "Mexican Chocolate Cake", "Cheese Bread", "Rotisserie Pork Loin", "Black Magic Plum Sauce", "Oven Browned Potatoes", "White Beans", "Steamed Fresh Broccoli", "Thai Style Chicken Drumstick", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Sushi Brown Rice Grilled Ahi Tuna Bowl", "Vegetable Roll with Brown Rice"],
}
},
],
},
{
"date": "2024-05-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Spanish Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Mardi Gras Eggs with Ham", "Peach Chunk Pancake", "Beans Navy White", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Double Chocolate Bread", "Coconut Raisin Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Beef Chow Mein", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Spicy Kale Caesar Salad", "Turkey Meatloaf", "Turkey Gravy", "Peas", "Stir Fry Vegetables", "Roasted Potato Wedges", "Fettucine Alfredo", "Baked Rigatoni", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Assorted Meat Pizza", "Tomato Pesto Pizza on Wheat", "Cheese Pizza on White", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Lentil and Brown Rice Soup", "Grilled Turkey & Jack on Sourdough", "Sauteed Crookneck Squash", "Baked Potato", "Long Grain Rice", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Beet & Tomato Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Bagels-Breads & Cereals- See for Choices", "Pinch Bread"],
"Dinner": ["Curried Chicken Soup", "Roast Beef", "Mashed Potatoes", "Beef Gravy", "Fresh Steamed Carrots", "Baked Potato", "Chicken Sope", "Bean and Rice Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "White Clam Sauce", "Pasta Primavera", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Graham Bread", "French Crumb Apple Pie"],
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
"Brunch": ["Watermelon", "Fresh Strawberry", "Sliced Pineapple", "Grapefruit Halves", "Cantaloupe", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Chicken Chilaquiles", "Mushroom Cream Sauce", "Whole Wheat Penne Pasta", "Blueberry Scone", "Flour Tortilla", "Meatloaf Sandwich", "Mashed Yams", "Grilled Cheese on Sourdough", "White Beans", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham and Cheese", "Buttermilk Pancakes", "Cauliflower w/Sugar Snap Peas", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Bolognese Sauce with Pancetta", "Spaghetti", "Mushroom Cream Sauce", "Whole Wheat Penne Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Chile Verde and Corn Tortillas", "Tortilla Chips & Salsa", "Refried Beans", "Grilled Onion", "Lettuce/Cheese/Tomatoes", "Hoisin Chicken", "Sticky Rice", "Spicy Eggplant & Broc w/Ginger Sauce(vgn", "Steamed Broccoli & Cauliflower", "Yam & Avocado Sushi Roll", "California Club Roll"],
}
},
],
},
{
"date": "2024-05-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Pepper Jack Cheese", "Sticky Rice", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Penne Arrabiata with Chicken (w/nuts)", "Steamed Fresh Carrots", "Green Beans", "Festive Rice Fruit Salad (w/nuts)", "Italian Tossed Greens", "Salami Pizza", "Onion & Jalapeno Pizza", "Cheese Pizza on White", "Potato Cheese Soup", "Grilled Turkey Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Black Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Garlic French Bread", "Toll House Bar", "Karidopita (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Blackened Mahi Mahi", "Creole Beans And Rice", "Sauteed Kale & Collard Greens", "Caesar Salad", "Whole Wheat Spaghetti", "White Wine Garlic Sauce with Chicken", "Pinto Beans", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Onion & Jalapeno Pizza", "Cheese Pizza on White", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Cream of Mushroom Soup", "Spicy Meatball Sandwich", "Fresh Steamed Carrots", "Baked Potato", "Baked Sweet Potato", "Beef Chili Colorado Burrito", "Potato Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Tomato Basil Pizza", "Herb Breadsticks", "Beef Broccoli Teriyaki StirFry Brn. Rice", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Egg Salad", "Three Grain Roll", "Killer Brownie"],
"Dinner": ["Tortilla Soup", "Pork Loin Roast with Garlic & Ginger", "Pineapple Rice", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Grilled Vegetable Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Tomato Basil Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Marinated Green Beans Salad", "Hawaiian Sweet Bread", "French Peach Crumb Pie (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Watermelon", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Buckwheat Black & Blue Parfait (w/nuts(v", "Buckwheat Granola (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Ham & Egg Breakfast Sandwich", "Potatoes O'Brien", "Sourdough French Toast", "Fresh Sauteed Spinach"],
"Lunch": ["Cherry Tomato & White Bean Salad", "Chipotle Hummus & Quinoa Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti Pasta", "Herb Focaccia Bread", "Apple Kuchen (w/nuts)", "Oatmeal Raisin Bar (w/nuts)", "Pulled Pork Buffalo Style Sandwich", "Classic BBQ Sauce", "Egg/Arugula/Herb Tartine", "Pinto Beans", "Cabbage Cilantro Slaw", "Teriyaki Chicken Stir Fry", "Sticky Rice", "Stir Fried Chinese Greens", "California Roll", "Daikon Sushi Roll", "Hamburger", "Sourdough French Toast", "Grilled Cheese and Tomato on Wheat", "Shoestring Fries", "Sriracha Mayonnaise", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti Pasta", "Brownie Pie", "Russian Bread", "Pork Chinese BBQ", "Pinto Beans", "Red Potatoes with Rosemary", "Steamed Vegetables & Brown Rice", "Brussel Sprouts", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Daikon Roll", "California Roll"],
}
},
],
},
{
"date": "2024-05-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Canadian Bacon", "Strawberry Pancake", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Genoa Salami", "Sliced Roast Beef", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Sweet & Sour Pork", "Asian Vegetable Stir Fry", "Ambrosia Salad (w/nuts)", "Pasta Salad with Grilled Veggies", "Roast Beef Sandwich with Gravy", "Chili and Noodles", "Corn on the Cob", "Fresh Spinach with Garlic", "Smoked Barbeque Chicken Pizza", "Traditional Cheese Pizza on Wheat", "Cheese Pizza on White", "Chicken Rice Soup", "Grilled Chicken Taco", "Grilled Vegetable Burger", "Hot Dog", "Beans Navy White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Whole Wheat Sourdough Bread", "Mexican Wedding Cookie (w/nuts)", "Brownie w/Chocolate Icing"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Brown Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Pasta Salad with Grilled Veggies", "Chicken Piccata", "Steamed Crookneck Squash", "Sauteed Zucchini", "Steamed Vegetables & Brown Rice", "Rice Pilaf with Mushrooms", "Bolognaise Sauce", "Pasta Pronto", "Sun Dried Tomato Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Traditional Cheese Pizza on Wheat", "Cheese Pizza on White", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Mexican Style Cage Free Scrambled Egg", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Muffin"],
"Lunch": ["Pozole Soup with Condiments", "Shaved Turkey on Wheat", "Sauteed Zucchini with Garlic", "Baked Potato", "Chicken Mole Taco", "Chipotle Tempeh Tacos", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Cheese Tortellini with Marinara", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheddar on White", "Steak Fries", "Caponata Salad", "Garlic French Bread", "Cheesecake Cookie"],
"Dinner": ["Miso Soup", "Buttermilk Fried Chicken", "Mashed Potatoes", "Fresh Corn on the Cob", "Chicken Gravy", "Baked Potato", "Turkey Hard Taco", "Black Bean & Rice Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Goan Beef Curry w/Coconut Milk (w/nuts)", "Panfried Noodles with Vegetables", "Long Grain Rice", "Brown Rice", "Arugula Salad with Almond (w/nuts)", "Whole Wheat Bread", "German Apple Cake w/Crm Chse (w/nuts) (v"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Sliced Honeydew", "Ruby Flame Grapes", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Granola Cantaloupe Parfait (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Carribean Coconut Bread (w/nuts)", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Apple Sausage Links", "Huevos Rancheros", "Refried Beans", "Sweet Potato Hash"],
"Lunch": ["Italian Bread Salad", "Chicken Caesar Wrap", "Sliced Turkey", "Egg Salad", "Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Pinto Beans", "Roasted Celery Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Garlic Pizza on Wheat", "Chicken Artichoke Pesto Flatbread", "Fettucine", "Alburro Sauce", "Parmesan Herb Bread", "Chocolate Crinkle Cookie", "Esprosso Coffee Cupcake", "Turkey Pot Pie", "Pita Sandwich w/Hummus & Tabouli", "Pinto Beans", "Fresh Green Beans with Garlic", "Roasted Red Onion &  Zucchini", "Cuban Sandwich", "Seasoned Sweet Potato Halves", "Orange Infused Green Beans", "Calamari Roll", "Tempura Onion Sushi Roll", "BBQ Chicken Sandwich", "Black Bean Burger", "Banana Pancakes", "Shoestring Fries", "Classic BBQ Sauce", "Housemade Spicy Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Roasted Celery Soup", "Garlic Pizza on Wheat", "Risotto with Fresh Vegetables", "Tomato and Roasted Garlic Sauce", "Spaghetti", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Toll House Bar", "Herb Focaccia Bread", "Grilled Chicken Taco", "Chorizo Spiced Potato Quesadilla", "Tortilla Chips and Salsa", "Pinto Beans", "Lettuce/Cheese/Tomatoes", "Beef Pad Thai (w/nuts)", "Tofu Vegetable Pad Thai (w/nuts)", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-05-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Chicken Sausage Sandwich", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Banana Bread", "Granola Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Noodles with Vegetables", "Thai Peanut Sauce (w/nuts)", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Cactus Taco", "Asian Fish Taco", "Corn with Red Peppers", "Black Beans", "Sausage Mushroom Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Lentil Soup", "Cheeseburger", "Black Bean Burger", "Grilled Cheese Chile & Veggie on Sour(v", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Ginger Basmati Rice", "Focaccia Bread", "Sweet Rice Cake (w/nuts)", "Lemon Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Vegetables with Tofu", "Tortilla Soup", "Mediterranian Couscous (w/nuts)", "Indian Chicken Curry (w/nuts)", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Penne Pasta", "Fresh Pesto Sauce", "Spaghetti Pasta", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Mushroom Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hearty Vegetable Soup", "Herb & Garlic Crusted Tilapia", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Chimichanga", "Bean and Cheese Hard Shell Taco", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Mushroom Pizza", "Pineapple Pizza", "Herb Breadsticks", "Korean Spicy Chicken Stew", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Cheddar on Wheat", "Krinkle Cut French Fries", "Black Bean Salad", "Whole Wheat Roll", "Mint Chocolate Chip Cookie"],
"Dinner": ["Split Pea Soup", "Cacciatora Chicken", "Spinach Rice Casserole", "Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef And Bean Burrito", "Chile Relleno Casserole", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Mushroom Pizza", "Pineapple Pizza", "Herb Breadsticks", "Alfredo Sauce w/Chicken/Vegetables", "Fettuccine Pasta", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Kale Arugula Salad with Cranberry", "Garlic Roll", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Pineapple", "Cantaloupe", "Grapefruit Halves", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Strawberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Wheat Pancakes", "Sausage Links", "Potatoes O'Brien", "Sauteed Zucchini with Garlic"],
"Lunch": ["Green Bean & Cucumber w/Miso", "Roasted Vegetable Panini", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Sopa de Marisco", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Sausage & Mushroom Pizza", "Linguini with Pesto", "Pasta with Grilled Vegetables", "Crusty French Bread", "Vanilla Cupcake w/Strawberry Icing", "M&M Bar (w/nuts)", "Shrimp & Grits w/Fennel & Sausage", "Smokey Tomato Relish", "Pita Chips", "Pinto Beans", "Butternut Squash Hummus", "Hot & Sour Pork Ribbons", "Sauteed Kale", "Crispy Salmon Roll", "Vegetable Roll", "Grilled Turkey Burger", "Grilled Vegetable and Bean Burrito", "Whole Wheat Pancake", "Steak Fries", "Spicy Mustard Sauce", "Sriracha Mayonnaise", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Sopa de Marisco", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Sausage & Mushroom Pizza", "Cellentani w/Roasted Vegetables & Asiago", "Fettuccine Alfredo", "Very Chocolate Cake w/Choc Icing", "Cheese Bread", "Lasagna Bolognese", "Vegetarian Rigatoni", "Pinto Beans", "Sauteed Zucchini with Garlic", "Jerk Chicken", "Red Beans and Rice", "Mashed Yams", "Fresh Vegetable Medley w/Spinach", "Vegetable Roll", "Salmon Roll"],
}
},
],
},
];
export default diningMenu
