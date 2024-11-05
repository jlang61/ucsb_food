const diningMenu = [
{
"date": "2024-11-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Ham", "Tuna Salad", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Satsuma Age (Japanese Fried Fish Cake)", "Tofu Agedashi", "Tonkotsu Ramen", "Tonkatsu", "Japanese Curry", "Pickled Scallions - Rakkyo Zuke", "Pickled Radish - Fukujin Zuke", "Spinach Goma Ae", "Oven Roasted Shishito Peppers", "Sunomono Salad", "Japanese Potato Salad", "Kyuri Jiman - Pickled Cucumber", "Shiba Zuke - Pickled Cucumber", "Japanese Sesame Dressing", "Soy Edamame Bean", "Japanese Teriyaki Chicken Pizza", "Okonomiyaki Pizza", "Cheese Pizza on White", "Classic Miso Soup", "Karaage Chicken", "Takoyaki (Octopus)", "Hambagu", "Oyakodon (Chicken and Egg Rice Bowl)", "Baked Potato", "Baked Sweet Potato", "Gomoku-mame (Simmered Soybeans)", "Brown Rice", "Japanese Strawberry Shortcake", "Melon-pan", "Mizu Yokan (Red Bean Pudding)"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Fresh Corn on the Cob", "Potatoes Au Gratin", "Caesar Salad", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Medley", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Coconut Tofu Curry (w/nuts)", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese Sandwich on WW", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Killer Brownie"],
"Dinner": ["Fresh Vegetable Soup", "Cod Veracruz", "Vegetable Cutlet", "Sauteed Swiss Chard with Garlic", "Rice Pilaf", "Baked Potato", "Beef Sope", "Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce(w/nut)", "Veggie Stir Fry w/Peanut Sauce(w/nuts)(v", "Long Grain Rice", "Brown Rice", "Quinoa Black Bean Salad", "Sourdough Rounds", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Seedless Red Grape", "Watermelon", "Honeydew Melon", "Make Your Own Waffle", "Granola Cantaloupe Parfait (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Organic Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chilaquiles (No Egg)", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Roll", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie (w/nuts)", "Grilled Chicken Taco", "Chile Salsa", "Cilantro Lime Crema", "Cilantro & Onion Mix", "Refried Beans", "Pork Balchao", "Moroccan Carrot w/Chickpeas & Tomato", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Potato Roll", "New York Style Crumb Cake", "Chicken Tetrazzini", "Pasta Shells w/Eggplant & Marinara", "Carrots with Fresh Thyme", "Steamed Fresh Broccoli", "Pork Loin Roast With Garlic and Ginger", "Teriyaki Sauce", "Vegetable Fried Rice", "Braised Bok Choy", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-11-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Stir Fry Pork with Vegetables", "Vegetable &Tofu Stir Fry", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Common Thresher Shark w/Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Chocolate Caramel Swiss Cupcake", "Magic Walnut Cookie Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Salad Arugula & Sweet Potato (w/nuts)", "Chicken Marsala", "Wild Mushroom Turnover", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Spaghetti Pasta", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Sourdough Bread", "Devil's Food Cake with Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Pinch Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hot and Sour Soup", "Blackened Hoki", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Carnitas Taco", "Potato Chorizo Burrito", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard (w/nuts)", "Thai Pizza (w/nuts)", "Herb Breadsticks", "Sesame Pork with Broccoli", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Malibu Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Pasta Salad w/Chicken & Sundried Tomato", "Graham Roll", "Rice Krispie Treat"],
"Dinner": ["Hearty Vegetable Soup", "Meatloaf", "Steamed Green Beans", "Garlic Mashed Potatoes", "Beef Gravy", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Potato Gorda with Black Beans", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard (w/nuts)", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Penne Pasta", "Garden Vegetable Marinara Sauce", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Onion Bread", "German Apple Cake w/Crm Chse (w/nuts) (v"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Honeydew", "Watermelon", "Grapefruit Halves", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cornbread with Honeybutter", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Chicken Chipotle Wrap", "Tuna Salad", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Moroccan Lentil Soup", "Baked Potato", "Brown Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Cupcakes (w/nuts)", "Sweet & Sour Pork", "Sticky Rice", "Pinto Beans", "Vegetable Tofu Stir Fry", "Chicken Cajun Stir Fry", "Long Grain Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Plate", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Moroccan Lentil Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Antipasto Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Creamy Rosemary Sauce", "Penne Pasta", "Marble Cake", "Thick Focaccia Bread", "Shredded Braised Beef", "Roasted Potato Wedges", "Pinto Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Tempura Tilapia Fish", "Sticky Rice", "Teriyaki Sauce", "Sesame Asian Slaw Salad", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-11-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Turkey Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cherry Chocolate Scone", "Cinnamon Roll"],
"Lunch": ["Sliced Ham", "Hummus", "Pita Chips", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Honey Baked Chicken Quarters", "Roasted Cauliflower", "Steamed Fresh Carrots", "Spinach Quiche", "Roasted  Red Potato Wedges", "Taco Salad", "Jicama Pico De Gallo", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Olive Whole Wheat Bread", "Banana Chocolate Bar", "Oatmeal Raisin Cookie"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken & Vegetable Stir Fry", "Vegetable &Tofu Stir Fry", "Greens and Beans Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Steamed Whole Baby Carrots", "Swiss Chard with Fresh Garlic", "Jicama Pico De Gallo", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Sour Cream & Chives Roll", "Chocolate Flourless Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["Minestrone Soup", "Chopped Sandwich", "Italian Green Beans", "Baked Potato", "Italian Fish Taco", "Italian Zucchini Taco", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Creamy Chipotle Salsa", "Chicken Garlic Pesto Pizza", "Salami & Chiles Pizza with Honey", "Herb Breadsticks", "Italian Creamy Beef Ragu & Pasta", "Spaghetti Cacio e Pepe", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Pastrami & Mozzarella", "Shoestring French Fries", "Chicken Caponata Salad", "Citrus Caprese Salad", "Italian Three Layer", "Italian Butter Cookie (w/nuts)", "Rosemary Focaccoa Bread"],
"Dinner": ["Curried Chicken Soup", "Grilled Chicken Quarters", "Orzo Pasta with Vegetables", "Zucchini and Crookneck Squash", "Baked Potato", "Chicken Chimichanga", "Calabacitas Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Beef Chop Suey", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Cornbread", "Fresh Orange Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Quinoa Breakfast Bowl (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Cabbage & Carrots"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing (v", "Hummus & Avocado Lettuce Wrap", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Tuna Salad", "Sliced Turkey Pastrami", "Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Grilled BBQ Chicken Pizza", "Tomato Basil & Garlic Sauce", "Spaghetti", "Penne Pasta with Pesto", "Crusty French Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Shredded Braised Beef", "Long Grain Rice", "Cuban Style Black Beans & Rice", "Fresh Green Beans with Garlic", "Chicken Tikka Masala", "Basmati Rice", "Roasted Red Onion &  Zucchini", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Grilled Cheese Chile & Veggie on Sour(v", "Chipotle Aioli", "Sweet &Tangy Pickled Red Onion", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Smoked Barbeque Chicken Pizza", "Alburro Sauce", "Pasta Spaghetti", "Pumpkin Seed Pesto", "Penne Pasta", "Orange Walnut Olive Oil Cake (w/nuts)", "Crusty French Bread", "Meatloaf", "Classic BBQ Sauce", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Mushroom Rajas & Corn", "Fresh Spinach with Garlic", "Burmese Chicken Stew w/Coconut (w/nuts)", "Latin Bowl", "Sticky Rice", "Roasted Cauliflower with Cumin", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-11-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Black Beans", "Mexican Rice", "Beef Milanesa", "Beef Gravy", "Sauteed Summer Squash with Herbs", "Steamed Vegetables & Brown Rice", "Mashed Potatoes", "Arugula Olio e Limone Salad", "Poached Pear Salad (w/nuts)", "Pepperoni Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "New England Clam Chowder", "Charburger", "Gardenburger", "Hot Dog", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Cilantro Lime Salmon", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Spinach Pecan Bacon & Cranb Salad(w/nut)", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "Garlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Fish Cake", "Lemon Beurre Blanc", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Bean & Rice Burrito", "Potato Vegetable Soft Taco", "Rice with Corn & Roasted Chiles", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Pork Stir Fry with Orange Sauce", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Swiss on Whole Wheat", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Sundried Tomato Roll", "M & M Bar (w/nuts)"],
"Dinner": ["Vegetable Rice Soup", "Pork Loin Roast", "Herb Polenta with Mushroom Ragout", "Bok Choy with Garlic & Ginger", "Oven Browned Potatoes", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Vegetable Fajita", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Green Bean Provencal Salad", "Garlic Roll", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Trail Mix Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Pineapple", "Cantaloupe", "Honeydew Melon", "Make Your Own Waffle", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Italian Tomato Panini", "Sliced Turkey", "Sliced Ham", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Potato", "Beef and Barley Soup", "Wild Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sausage Mushroom Pizza", "Spicy Marinara Sauce", "Penne Pasta", "Alburro Sauce", "Pasta Spaghetti", "Whole Wheat French Bread", "Oatmeal Craisin Cookie", "Cream Cheese Brownie Pie", "Grilled Achiote Chicken Thigh", "Papaya Cilantro Lime Salsa", "Pinto Beans", "Vegetable Black Bean Chili", "Sauteed Kale & Collard Greens", "Chicken General Tso's", "Sticky Rice", "Fresh Vegetable Medley", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Patty Melt Sandwich", "Malibu Burger", "Whole Wheat Pancake", "Crinkle Cut French Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Beef and Barley Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sausage Mushroom Pizza", "Penne Pasta with Pesto", "Fettuccine Alfredo", "Banana Nut Cake (w/nuts)", "Whole Wheat French Bread", "Pork Loin Roast w/Balsamic Glaze", "Roasted Potato Wedges", "Pinto Beans", "Baked Rigatoni", "Steamed Broccoli & Cauliflower", "Grilled Chicken Taco", "Salsa", "Enchilada Rajas", "Spanish Rice with Cilantro", "Refried Black Beans", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-11-09",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Mixed Vegetables", "Grilled Pork Chops", "Country Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Chicken Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Sticky Rice", "Chicken General Tso's", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Sauteed Zucchini Sticks", "Ratatouille with White Beans", "Oven Browned Potatoes", "Rotini Pasta", "Chicken Marinara Sauce", "Whole Wheat Spaghetti", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Rosemary Roll", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Soup Potato Cheese & Chile", "Turkey Sub Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Vegetable Frittata", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Greek Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Chocolate Chip Muffin"],
"Dinner": ["Corn Chowder", "Roasted Petite Tender", "Vegetable Medley", "Mashed Red Potatoes", "Beef Gravy", "Baked Potato", "Turkey Hard Taco", "Black Bean Tostada", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Kale Caesar Salad", "Crusty French Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
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
"Brunch": ["Fresh Strawberry", "Pineapple", "Sliced Honeydew", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Brown Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Daikon Radish", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Linguine w/Chicken/Leeks/Tom", "Penne Pasta with Pesto", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Pinto Beans", "Black Bean & Rice Quesadilla", "Roasted Cauliflower with Cumin", "Cream of Broccoli Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Steamed Zucchini & Crookneck Squash"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Penne Pasta with Pesto", "Linguine w/Chicken/Leeks/Tom", "Confetti Cake with Buttercream", "Cheese Bread", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Chili Bean", "Oven Browned Potatoes", "Steamed Fresh Broccoli", "Zesty Orange Beef", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Bowl", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-11-10",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Chicken Vindaloo", "Basmati Rice", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "Cage Free Egg Scrambled w/Cheese/Mush", "French Toast", "Grilled Ham with Honey Glaze", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Beans Navy White", "Make Your Own Waffle", "Cinnamon Coffee Cake", "Chocolate Pistachio Biscotti (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Stir Fry Noodles with Vegetables", "Tomato Rice Soup", "Caesar Salad", "Chicken Pot Pie", "Baby Carrots with Tarragon", "Corn", "Risotto with Fresh Vegetables", "Linguini Pasta", "White Clam Sauce", "Penne Pasta", "Arabiata Sauce (w/nuts)", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Gumbo Soup", "Chicken Caesar Wrap", "Fresh Steamed Carrots", "Baked Potato", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Apple Cinnamon Pancake", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Chocolate Bread"],
"Dinner": ["Spinach Lentil Soup", "Jerk Chicken Quarter", "Sauteed Green Beans with Garlic", "Roasted Potatoes w/Carrot and Onion", "Baked Potato", "Chicken Soft Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham Pizza", "Mushroom & Black Olive Pizza", "Cheese Pizza", "Herb Breadsticks", "Spaghetti Pasta", "Turkey Marinara", "Scallion Cream Sauce", "Bowtie Pasta", "Long Grain Rice", "Brown Rice", "Three Bean Salad", "Whole Wheat Bread", "French Peach Crumb Pie (w/nuts)"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Honey Butter", "Cornmeal Waffle", "Flour Tortilla", "Raspberry Swirl Coffee Cake(w/nuts)", "Char Grilled ChickenTeriyaki Sandwich", "Pinto Beans", "Grilled Cheese on Sourdough", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs w/Vegetables", "Buttermilk Pancakes", "Sauteed Zucchini with Garlic", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Mushroom Cream Sauce", "Farfalle Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Chile Verde and Corn Tortillas", "Mexican Rice", "Refried Beans", "Cilantro & Onion Mix", "Fresh Sauteed Spinach", "Lettuce & Cheese &Tomatoes", "Pork Vindaloo", "Basmati Rice", "Steamed Broccoli & Cauliflower", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-11-11",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Organic Nonfat Milk", "Oatmeal", "Raisin", "Whole Plain Greek Yogurt", "Banana"],
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Mixed Vegetables", "Grilled Pork Chops", "Country Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Chicken Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Lunch": ["Water", "Crunchy Fruit Salad (w/nuts)", "Sauteed Summer Squash with Herbs", "Baked Sweet Potato", "Assorted Bell Pepper Pizza on Wheat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Spicy Kale Caesar Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Classic Miso Soup", "Fettucine Alfredo", "Whole Wheat Penne Pasta", "Tomato and Leek Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Bread", "Boston Cream Pie (w/nuts)", "Organic Nonfat Milk", "Fuji Apple", "Raisin", "Granulated Peanut", "Whole Plain Greek Yogurt", "Garden Wild Rice Salad", "Fresh Broccoli Spears", "Ratatouille with White Beans"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Lentil Soup", "Turkey Wrap", "Kale/Peppers and Garlic", "Baked Potato", "Baked Sweet Potato", "Sausage Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Pasilla Chile Scramble Eggs", "Cage Free Scrambled Eggs", "Scrambled Egg Whites", "Sausage Patty", "Tater Tots", "Multi-Grain Waffle", "Waffle", "Lemon Herb Quinoa Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Granola Parfait", "Bagels-Breads & Cereals- See for Choices", "Sticky Bun (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Ono with Red Curry Sauce & Rice (w/nuts)", "Eggplant Parmesan Casserole", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Bean & Cheese Entomatadas", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Stir Fry with Black Bean Sauce", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Arugula Salad with Almond (w/nuts)", "Sesame Bread", "Banana Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Watermelon", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Pickled Asian Mushroom", "Baby Spinach", "Bulgur Wheat", "Onion Pizza", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Linguini Pasta", "Greek Tomato Sauce", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Turkey Vegetable Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Apple Cranberry Pancake Topping", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Turkey Vegetable Soup", "Pesto and Vegetable Pizza on Wheat", "Chili Macaroni", "Garden Vegetable Marinara", "Linguini Pasta", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Brownie Pie", "Hawaiian Sweet Bread", "Pork Chinese BBQ", "Vegetable Fried Rice", "White Beans", "Braised Bok Choy", "Jerk Chicken", "Long Grain Rice", "Red Beans & Rice", "Sauteed Kale", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
