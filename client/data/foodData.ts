const diningMenu = [
{
"date": "2025-05-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Beans", "Mexican Rice", "Pasta Salad with Smoked Salmon", "Crunchy Fruit Salad", "BBQ Pork Spare Ribs", "Guava Rum BBQ Sauce", "Potato Garlic Mashed", "Fresh Corn on the Cob", "Sausage Mushroom Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Danish Cauliflower Cheese Soup", "Cheeseburger", "Black Bean Burger", "Grilled Swiss & Tomato on Wheat", "Black Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Jalapeno Cheddar Roll", "Pumpkin Crisp", "Bibingka Filipino Coconut Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Stir Fry Noodles with Vegetables", "Far East Vegetable Soup", "Pasta Salad with Smoked Salmon", "Rotisserie Chicken", "Potato Gorda with Corn", "Chili Black Bean", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Whole Wheat Pasta Rigate", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Mushroom Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Whole Wheat Sourdough Bread", "Black Forest Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Greek Eggs", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Orange Cinnamon Swirl Bread"],
"Lunch": ["New England Clam Chowder", "BBQ Chicken Sandwich", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Grilled Pizza w/Pesto/Mozz/Arugula", "Herb Breadsticks", "Penne Pasta", "Creamy Pesto Sauce", "Whole Grain Rotini w/Tomato & Garlic(vgn", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Chicken Corn Dog", "Shoestring French Fries", "Pear Gorgonzola & Walnut Salad(w/nuts)(v", "Buttermilk Biscuit", "Raisin Rum Rice Pudding"],
"Dinner": ["Chicken Vegetable Soup", "Hoki Fish w/Red Curry & Rice", "Steamed Zucchini", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Chipotle Bean Flauta", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "BBQ Chicken Pizza", "Grilled Pizza w/Pesto/Mozz/Arugula", "Herb Breadsticks", "Korean Beef Stir Fry with Brown Rice", "Vegetable Noodle Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Pasta Salad w/Chicken & Sundried Tomato", "Cornbread", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Ginger Cookie", "Toll House Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Chicken Rice Bowl", "Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Ginger Cookie", "Toll House Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Honeydew Melon", "Cantaloupe", "Watermelon", "Make Your Own Waffle", "Cinnamon Maple Granola", "Granola Parfait", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Apple Oat Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Vegetable Fried Rice", "Potatoes O'Brien", "Mixed Greens Side Salad"],
"Lunch": ["Dragon Noodles", "Chinese Chicken Salad Wrap", "Sliced Turkey", "Sliced Ham", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Caprese Flatbread w/Balsamic Reduction(v", "Three Cheese Pizza on Wheat", "Spaghetti", "Alburro Sauce", "Roasted Vegetable Marinara Sauce", "Homemade Onion Bread", "Shortbread Espresso Cookie", "Lemon Pie", "Turkey Melt", "Red Beans and Rice", "Fresh Green Beans", "Tangy Apple Cabbage Slaw", "Grilled Chicken Taco", "Roasted Tomato Salsa", "Cilantro & Onion Mix", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Blended Burger with Brioche Bun", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Chipotle Aioli", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Pesto Pizza", "Pasta Penne with Chicken & Mushrooms", "Pasta Primavera w/Tomato Sauce", "Homemade Onion Bread", "Blueberry Lemon Cake", "BBQ Chicken Thigh", "Butternut Squash Risotto", "Black Beans", "Fresh Mashed Potatoes", "Steamed Zucchini & Crookneck Squash", "Mini Street Style Fish Taco", "Salsa", "Black Beans w/Brown Rice & Cilantro", "Lettuce/Cheese/Tomatoes", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi Plate"],
}
},
],
},
{
"date": "2025-05-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "White Bean Basque Soup", "BBQ Chicken Sandwich", "Stir Fry Vegetables", "Roasted Potato Wedges", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Arroz con Leche", "Buttermilk Pancake", "Grilled Ham with Honey Glaze", "White Navy Beans", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Banana Coffee Cake (w/nuts)", "Strawberry Bread"],
"Dinner": ["Sticky Rice", "Pork Fried Rice", "Vegetable Chow Mein", "Vegetable Beef Soup", "Caesar Salad", "Beef Meatloaf", "Fresh Vegetable Medley", "French Cut Green Beans", "Risotto with Fresh Vegetables", "Mashed Potatoes", "Whole Wheat Penne Pasta", "Chicken Sausage & Mushroom Sauce", "Pasta Primavera", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Chicken Florentine Pizza w/White Sauce", "Black Olive Pizza on Wheat", "Cheese Pizza on White", "Cornbread with Honey Butter", "Devil's Food Cake with Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Gumbo Soup", "Grilled Pastrami Mozzerella on Sourdough", "Steamed Carrot & Corn & Peas", "Baked Potato", "Assorted Meat Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Santa Fe Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Minestrone Soup", "Roast Beef", "Fresh Broccoli Spears", "Couscous with Vegetables", "Baked Potato", "Ground Beef and Bean Tostada", "Chile Corn Zucchini Soft Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Assorted Meat Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Beef Pad Thai with Peanuts (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Sourdough Rounds", "Apple Cobbler"],
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
"Brunch": ["Pineapple", "Flame Seedlesss Grape", "Watermelon", "Cinnamon Maple Granola", "Granola Cantaloupe Parfait", "Long Grain Rice", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Bacon Tomato Basil", "Pasta with Grilled Vegetables", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Flour Tortilla", "Raspberry White Choc Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Breakfast Quesadilla", "Creamed Spinach", "Black Beans", "Tomato Rice Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Pancakes", "Turkey Bacon", "Roasted Breakfast Potatoes", "Roasted Vegetables"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Tomato Rice Soup", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Three Cheese Pizza on White", "Pasta with Grilled Vegetables", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "German Chocolate Cake (w/nuts)", "Wheat Germ Bread", "Cheese Enchilada", "Tamale Pie Vegetarian", "Mexican Rice", "Black Beans", "Grilled Zucchini & Tomatoes", "Hoisin Chicken", "Sticky Rice", "Vegetable Fried Rice", "Spinach with Garlic & Ginger", "Grilled Ahi Tuna Bowl with Brown Rice", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2025-05-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Dilled Veggie Barley Soup", "Chicken Pot Pie", "Creole Beans and Rice", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Oatmeal", "Breakfast Quesadilla", "Sausage Biscuits & Gravy", "Black Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Raspberry Muffin", "Zucchini Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Tofu Teriyaki Rice Bowl", "Ham & Navy Bean Soup", "Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Mexican Rice", "Baked Acorn Squash", "Peas", "Pasta Carbonara", "Linguini Pasta", "Fresh Basil Pesto", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Garlic Pizza Sticks with Marinara", "Cheese Pizza on White", "Hawaiian Sweet Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Hearty Vegetable Soup", "Turkey Sub Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Spinach Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Raisin Buttermilk Scone", "Pumpkin & Walnut Muffin (w/nuts)"],
"Dinner": ["Miso Soup", "Char Grilled Pork Chop", "Steamed Vegetables & Rice", "French Cut Green Beans", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean and Rice Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne with Chicken & Mushrooms", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Broccoli Almond Salad (w/nuts)", "Graham Bread", "Italian Cream Cake"],
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
"Brunch": ["Organic Fresh Strawberry", "Pineapple", "Honeydew Melon", "Cinnamon Maple Granola", "Honeydew & Berry Parfait", "Brown Rice", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Cheese Pizza on White", "Fluffy Whole Wheat Waffles", "Apple Cranberry Pancake Topping", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Flour Tortilla", "Apple Oat Coffee Cake", "Breakfast Burrito", "Refried Beans", "Fire Roasted Tomato Chipotle Salsa", "Ham & Cheddar Quiche", "Corn Chowder", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Steamed Broccoli & Cauliflower"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Corn Chowder", "Cheese Pizza on White", "Bolognese Sauce with Pancetta", "Farfalle Pasta", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Sweet and Spicy Tofu", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Killer Brownie (w/nuts)", "Whole Wheat French Bread", "Grilled Pork Taco", "Radish and Jalapeno Slaw", "Fire Roasted Tomato Chipotle Salsa", "Fresh Sauteed Spinach", "Black Beans", "Lettuce & Cheese &Tomatoes", "Vindaloo Chicken", "Basmati Rice", "Indian Style Stew w/ButternutSquash", "Steamed Broccoli & Cauliflower", "Daikon Roll", "California Club Sushi Plate"],
}
},
],
},
{
"date": "2025-05-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Chili Colorado w/Pork & Corn Tortilla", "Quesadilla", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Sausage Patty", "Black Beans", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Teriyaki Chicken Stir Fry", "Vegetable Stir Fry", "Traditional Teriyaki Sauce", "Hearty Vegetable Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Steamed Crookneck Squash", "Oven Roasted Red Potatoes", "Whole Wheat Spaghetti", "Meat Sauce", "Spirals with Marinara Sauce", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Basmati Rice", "Smoked Barbeque Chicken Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Onion Walnut Bread (w/nuts)", "White Cake with Raspberry"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Cream of Broccoli Soup", "Asian Beef Lettuce Wrap", "Zucchini and Crookneck Squash", "Baked Sweet Potato", "Baked Potato", "Pepperoni Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Sausage Patty", "Waffle", "Multi-Grain Waffle", "Mediterranean Orzo Pasta Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Chocolate Chip Scone", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Cream of Mushroom Soup", "Baked Chicken", "Garlic Mashed Potatoes", "Herb Polenta with Mushroom Ragout", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Potato Taquito", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Turkey Stir Fry with Brown Rice", "Pineapple & Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Coleslaw with Vinaigrette", "Crusty French Bread", "Devil's Food Cake w/Cream Chz Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Chicken Rice Bowl", "Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Pineapple", "Cantaloupe", "Honeydew Melon", "Cinnamon Maple Granola", "Baked Oatmeal with Peach & Blueberry", "Oatmeal", "Steamed White Rice", "Make Your Own Waffle", "Baby Spinach", "Ginger Sesame Tofu", "Watermelon", "Couscous", "Tomato Basil Pizza on White", "Bolognaise Sauce", "Spaghetti", "Penne Pasta with Pesto", "Flour Tortilla", "Blueberry Scone", "Ground Beef and Bean Tostada", "Vegetable Fajita", "Refried Beans", "Creamy Chipotle Salsa", "Vietnamese Chicken Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Whole Wheat French Toast", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Dinner": ["Baked Potato", "Brown Rice", "Vietnamese Chicken Soup", "Tomato Basil Pizza on White", "White Wine Garlic Sauce with Chicken", "Linguini Pasta", "Greek Tomato Sauce", "Farfalle Pasta", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Confetti Cake with Buttercream", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Roasted Tomato Salsa", "White Beans", "Rice with Cilantro and Lime", "Fresh Cauliflower & Carrots", "Mongolian Beef with Rice", "Sticky Rice", "Stir Fried Bok Choy", "Brussel Sprout w/Soy & Garlic", "Cucumber & Avocado Roll", "California Club Sushi Plate"],
}
},
],
},
{
"date": "2025-05-27",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Bacon", "Apple Crepe w/Caramel Sauce", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Tofu Vegetable Coconut Curry", "Chicken Coconut & Peanut Curry (w/nuts)", "Philly Cheese Steak Sandwich", "Garlic Mushroom Turnover", "Corn", "Indian Lentils w/Long Grain Rice", "Kale & Arugula Salad w/Cranberries", "Asian Noodle Salad", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Chicken Noodle Soup", "Cheeseburger", "Black Bean Burger", "Grilled Turkey & Swiss on Sourdough", "Krinkle Cut Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Cheese Roll", "Panna Cotta", "Chocolate Chip Cookie"],
"Dinner": ["Ensalada Rusa", "Spinach Salad with Honey Dressing", "Spanish Seafood Paella", "Cream of Broccoli Soup", "Boneless Breaded Cajun Pork Chop", "Country Gravy", "Steamed Fresh Carrots", "Fresh Vegetables Saute with Garlic", "Spanish Tortilla", "Caesar Salad", "Linguini Pasta", "Red Clam Sauce", "Pasta Primavera", "White Navy Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Pizza", "Pan Con Tomate", "Cheese Pizza on White", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Egg and Cheese Biscuit", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["Minestrone Soup", "Ham Sandwich on Whole Wheat", "Kale Peppers and Garlic", "Baked Potato", "Beef Tostada", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Pasta Carbonara", "Garden Vegetable Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tuna Melt on Wheat", "Krinkle Cut French Fries", "Strawberry Radicchio Salad (w/nuts)", "Garlic French Bread", "Chocolate Flan Cake"],
"Dinner": ["Vegetable Beef Soup", "Roasted Petite Tender", "Orzo Pasta with Vegetables", "Rice Pilaf", "Sauteed Squash with Herbs", "Baked Potato", "Chicken Fajitas", "Bean & Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Hawaiian Chicken Stir Fry w/Brown Rice", "Stir Fry Tofu w/ Peanut Sauce (w/nuts)(v", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Whole Wheat Sunflower Roll", "White Cake with Chocolate Frosting"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Chicken Rice Bowl", "Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Sliced Pineapple", "Cantaloupe", "Make Your Own Waffle", "Granola Raspberry Parfait", "Cinnamon Maple Granola", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Banana Muffin", "Raspberry White Chocolate Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Breakfast Burrito", "Sausage Patty", "Cottage Fried Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Genoa Salami", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Roasted Tomato Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Bread", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie", "Grilled Chicken Taco", "Refried Beans", "Salsa de Tomatillo Verde", "Carrots with Fresh Thyme", "Cilantro & Onion Mix", "Pork Mu Shu", "Moo Shu Vegetables with Tofu", "Sticky Rice", "Spinach Stir Fried with Garlic", "Spicy Scallop Sushi Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Breakfast Burrito", "Steak Fries", "Chimichurri Sauce", "Chipotle Aioli", "Pumpkin Seed Pesto"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Roasted Tomato Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Three Cheese Pizza on White", "Tomato Cream Sauce", "Linguini Pasta", "Pasta Penne with Chicken & Mushrooms", "New York Style Crumb Cake", "Potato Bread", "Peri Peri Chicken", "Roasted Red Pepper Sauce", "Pasta Shells w/Eggplant & Marinara", "Spanish Rice w/Roasted Corn", "White Beans", "Steamed Fresh Broccoli", "Pho Broth for Soup", "Miso Ramen", "Braised Bok Choy", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-05-28",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chorizo and Eggs", "Pancake", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Strawberry White Chocolate Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Quinoa Salad w/Lemon Herb Veggies", "Spinach Pecan Bacon & Cran Salad (w/nut)", "Herb Marinated Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Pepperoni Pizza", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Whole Wheat Roll", "Chocoflan", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Beef Broccoli & Mushroom Stir Fry", "Vegetable & Tofu Stir Fry", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Rockfish with Red Curry Sauce", "Polenta with Vegetables", "Fresh Vegetable Medley", "Peas with Onions", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Parmesan Herb Bread", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Ham & Egg Breakfast Sandwich", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil and Brown Rice Soup", "Grilled Chicken Vincenza Sandwich", "Cauliflower & Red Bell Pepper", "Baked Potato", "Baked Sweet Potato", "Chicken Fried Taco", "Bean & Cheese Sope", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Ginger Beef Stir Fry", "Tofu Vegetable Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Taco Salad", "Pesto Rolls", "Chocolate Chocolate Chip Bar"],
"Dinner": ["Hearty Vegetable Soup", "Turkey Meatloaf", "Spinach Rice Casserole", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Mushroom Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Chickpea Salad", "Whole Wheat Sourdough Bread", "Zucchini Cake w/Cr Chz Icing (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Chicken Rice Bowl", "Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Seedless Red Grape", "Granola Black & Blue Parfait", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Chocolate Chip Scone", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Chicken Caesar Salad", "Turkey Club Wrap", "Sliced Turkey", "Sliced Ham", "Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Sweet Potato Corn & Chipotle Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Sweet Potato Chicken Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Walnut Cupcakes (w/nuts)", "Vietnamese Beef BBQ Sub Sandwich", "White Beans", "Chili Mango Bok Choy Slaw", "Sauteed Kale", "Cajun Chicken Jambalaya", "Red Beans and Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Roll", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Sweet Potato Corn & Chipotle Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Antipasto Pizza", "Butternut Squash Risotto", "Creamy Rosemary Sauce", "Whole Wheat Penne Pasta", "Sticky Toffee Pudding", "Thick Focaccia Bread", "Rosemary Roasted Chicken Quarters", "Chipotle Roasted Potatoes", "White Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Teriyaki Broccoli Beef Stir Fry", "Broccoli Spinach Bok Choy Stir Fry", "Tofu Teriyaki Bowl", "Vegetable Roll", "Spicy Tuna Sushi Plate"],
}
},
],
},
{
"date": "2025-05-29",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Egg Ham & Cheese English Muffin Sandwich", "Whole Wheat French Toast", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Bacon Cheddar Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Sticky Rice", "Hawaiian Chicken Stir Fry", "Sweet & Sour Tofu & Veggies(w/nuts)", "Vietnamese Pork Banh Mi", "Pasta Pronto", "Swiss Chard with Fresh Garlic", "Sunomono Salad", "Wild Arugula Romaine Salad", "Sausage Olive Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Pinto Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Greek Salad", "Sticky Rice", "Pork & Veggie Stir Fry", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Caesar Salad", "Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Olive Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Bread Olive", "Pumpkin Cheesecake Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Scone"],
"Lunch": ["Hot and Sour Soup", "Hoki w/Ginger Lime Sauce & Rice", "Fresh Broccoli Spears", "Baked Potato", "Huevos Rancheros", "Grilled Vegetable Tostada", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Buffalo Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry Black Bean Sauce & Rice", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Malibu Burger", "Grilled Ham & Cheddar on Wheat", "Krinkle Cut French Fries", "Greek Salad", "Sourdough Roll", "Oatmeal Raisin Walnut Cookie (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Pork Loin Roast with Garlic & Ginger", "Pineapple Rice", "Steamed Green Beans", "Baked Potato", "BBQ Chicken Quesadilla", "Vegetable Soft Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Buffalo Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Kung Pao Pork with Peanuts (w/nuts)", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Olive Roll", "Toll House Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Chicken Rice Bowl", "Roasted Vegetable Pasta", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Creamy Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "House Salad", "Hummus with Celery & Carrots", "Classic Miso Soup", "Steamed Zucchini & Crookneck Squash", "Swiss Chard with Garlic", "Fries", "Potato Chip", "Sugar Cookie", "Orange Glazed Cookie", "Cowboy Cookie Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Kale"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing", "Italian Panini", "Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on Wheat", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Creamy Pesto Sauce", "Penne Pasta", "Three Grain Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Chicken Mole", "Mexican Rice", "Radish and Jalapeno Slaw", "Refried Black Beans", "Roasted Cauliflower with Cumin", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Roasted Red Onion &  Zucchini", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Focaccia with Vegetables & Pesto", "Pickled Red Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on White", "Fettuccine Alfredo", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Marble Cake", "Three Grain Bread", "Arroz con Pollo", "Bean Rice & Cheese Burrito", "Fire Roasted Tomato Chipotle Salsa", "White Beans", "Cauliflower Au Gratin", "Korean Style Pork Ribs", "Korean BBQ Sauce", "Vegetable Fried Rice", "Fresh Spinach with Garlic", "Calamari Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
