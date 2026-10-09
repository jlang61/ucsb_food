const diningMenu = [
{
"date": "2026-10-09",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Olive Oil Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Caramel Apple Scones"],
"Lunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Black Beans", "Mexican Rice", "Steak Ranchero", "Arroz Blanco", "Calabacitas", "Arugula Olio e Limone Salad", "Poached Pear Pecan Salad (w/nuts)", "Buffalo Chicken Pizza", "Cheese Pizza", "Garlic Pizza on Wheat", "New England Clam Chowder", "Charburger", "Veggie Sweet Potato Burger", "Chicken Taquito", "Potato Taquito", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Cilantro Lime Salmon", "Vegetable Pad Thai w/Peanut(w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Spinach Pecan Bacon & Cran Salad (w/nut)", "Rigatoni Pasta", "Sausage and Mushroom Sauce", "Fettucine Alfredo", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Buffalo Chicken Pizza", "Cheese Pizza", "Garlic Pizza on Wheat", "Garlic Roll", "Carrot Cake with Walnuts (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Whole Wheat Banana Bread"],
"Lunch": ["New England Clam Chowder", "Fish Cake", "Lemon Beurre Blanc", "Steamed Green Beans", "Baked Potato", "Baked Sweet Potato", "Chicken Bean & Rice Burrito", "Potato Vegetable Soft Taco", "Rice with Corn & Roasted Chiles", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Garlic Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "Pork Stir Fry with Orange Sauce", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Sundried Tomato Roll", "M & M Bar (w/nuts)"],
"Dinner": ["Vegetable Rice Soup", "Char Grilled Pork Chop", "Herb Polenta with Mushroom Ragout", "Bok Choy with Garlic & Ginger", "Oven Browned Potatoes", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Vegetable Fajita", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Chicken Garlic Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Green Bean Provencal Salad", "Rustic Italian Crusty Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Blueberry Yogurt", "Pineapple", "Cantaloupe", "Honeydew Melon", "Make Your Own Waffle", "Honeydew & Berry Parfait", "Cinnamon Maple Granola", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Energy Bar (w/nuts)", "Banana Chocolate Chip Muffin", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Sausage Patty", "Roasted Breakfast Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Italian Tomato Panini", "Sliced Turkey", "Sliced Ham", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Potato", "Beef and Barley Soup", "Wild Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sausage Mushroom Pizza", "Spaghetti", "Spicy Marinara Sauce", "Penne Pasta with Pesto", "Whole Wheat French Bread", "Canadian Tea Cookie", "Cream Cheese Brownie Pie", "Char Grilled Rock Fish w/Lemon Thyme", "French Style Pilaf Rice", "Black Beans", "Sauteed Kale & Collard Greens", "Chicken General Tso's", "Sticky Rice", "Fresh Vegetable Medley", "California Sushi Plate", "Asparagus & Egg Sushi Plate", "Patty Melt Sandwich", "Malibu Burger", "Whole Wheat Pancake", "Crinkle Cut French Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Beef and Barley Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sausage Mushroom Pizza", "Penne Pasta with Pesto", "Fettuccine Alfredo", "Banana Walnut Cake (w/nuts)", "Whole Wheat French Bread", "Pork Loin Roast w/Balsamic Glaze", "Roasted Potato Wedges", "Pinto Beans", "Vegetable Black Bean Chili", "Steamed Broccoli & Cauliflower", "Thai Style Chicken Drumstick", "Sticky Rice", "Bok Choy Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2026-10-10",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Mixed Vegetables", "Grilled Pork Chops", "Country Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Chicken Sausage Link", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Sticky Rice", "Chicken & Vegetable Stir Fry", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Sauteed Zucchini", "Ratatouille with White Beans", "Oven Browned Potatoes", "Rotini Pasta", "Chicken Marinara Sauce", "Whole Wheat Spaghetti", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Pineapple", "Cheese Pizza", "Artichoke Pizza with Pesto on Wheat", "Rosemary Roll", "Toll House Walnut Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Soup Potato Cheese & Chile", "Turkey Sub Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs w/Cheese & Mushroom", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Greek Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Thai Sticky Rice with Mango", "Banana Chocolate Chip Muffin"],
"Dinner": ["Corn Chowder", "Tri Tip Roast", "Vegetable Medley", "Mashed Red Potatoes", "Beef Gravy", "Baked Potato", "Turkey Hard Taco", "Black Bean Tostada", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Kale Caesar Salad", "Cherry Cheesecake", "Crusty French Bread"],
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
"Brunch": ["Watermelon", "Seedless Red Grape", "Grapefruit Halves", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl", "Brown Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Daikon Radish", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza", "Linguine w/Chicken/Leeks/Tom", "Fettuccine Alfredo", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Fall Vegetable Hash", "Pinto Beans", "Roasted Cauliflower w/Garlic", "Cream of Broccoli Soup", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Steamed Zucchini & Crookneck Squash"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza", "Pasta Primavera w/Tomato Sauce", "Pasta Carbonara", "Coconut Poke Cake", "Cheese Bread", "Chicken Tetrazzini", "Pasta Shells w/Eggplant & Marinara", "White Navy Beans", "Sauteed Zucchini with Garlic", "Steamed Fresh Broccoli", "Beef Stir Fry with Vegetables", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Garlic & Ginger", "Spicy Scallop Sushi Bowl", "Vegetable Roll"],
}
},
],
},
{
"date": "2026-10-11",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Chicken Vindaloo", "Basmati Rice", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "Cage Free Egg Scrambled w/Cheese/Mush", "French Toast", "Char Grilled Ham", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "White Navy Beans", "Make Your Own Waffle", "Churro Coffee Cake", "Chocolate Pistachio Biscotti (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Vegetable & Noodle Stir Fry", "Tomato Rice Soup", "Caesar Salad", "Turkey Pot Pie", "Sauteed Carrots with Tarragon", "Corn", "Risotto with Fresh Vegetables", "Linguini Pasta", "White Clam Sauce", "Penne Pasta", "Arabiata Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Gumbo Soup", "Chicken Caesar Wrap", "Fresh Sauteed Carrots", "Baked Potato", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Cream of Wheat w/Flaxseed", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Apple Cinnamon Pancake", "Grilled Ham", "Sliced Potato with Onions", "Multi-Grain Waffle", "Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Chocolate Bread"],
"Dinner": ["Spinach Lentil Soup", "Baked Chicken", "Corn", "Roasted Potatoes w/Carrot and Onion", "Baked Potato", "Chicken Soft Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Spaghetti Pasta", "Turkey Marinara", "Scallion Cream Sauce", "Bowtie Pasta", "Long Grain Rice", "Wild Rice Blend", "Three Bean Salad", "Whole Wheat Bread", "French Peach Crumb Pie"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Honeydew Melon", "Quinoa Breakfast Bowl", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Honey Butter", "Cornmeal Waffle", "Flour Tortilla", "Raspberry Coffee Cake", "Chicken Chile Verde & Black Bean Burrito", "Pinto Beans", "Grilled Cheese on Sourdough", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Buttermilk Pancakes", "Kale with Fresh Garlic", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Mushroom Cream Sauce", "Farfalle Pasta", "Confetti Cake with Buttercream", "Whole Wheat French Bread", "Chicken Chile Verde with Corn Tortillas", "Mexican Rice", "Refried Beans", "Cilantro & Onion Mix", "Avocado Salsa", "Fresh Sauteed Spinach", "Indian Butter Chicken", "Basmati Rice", "Steamed Broccoli & Cauliflower", "California Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2026-10-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Pancake", "Chilaquiles (No Egg)", "Home Fried Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Chocolate Raspberry Scone"],
"Lunch": ["Sliced Turkey", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Smoked Gouda", "Sticky Rice", "Chicken General Tso's", "Sweet & Sour Almond & Tofu (w/nuts)", "Bermuda Salad", "Asian Noodle Salad", "Tri Tip", "Red Salsa", "Chili Black Bean", "Fresh Cauliflower", "Fresh Broccoli Spears", "Salami Pizza", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Beet Soup", "Charburger", "Black Bean Burger", "Hoki Fish Sandwich on Brioche Bun", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Irish Soda Bread", "Oatmeal Cranberry White Choc Cookie", "Chocolate Peanut Butter Cupcake(w/nut)(v"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Cashew Chicken (w/nuts)", "Cashew Tofu & Veggies (w/nuts)", "Traditional Teriyaki Sauce", "Classic Miso Soup", "Spicy Kale Caesar Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Carrots", "Basmati Rice", "Fettucine Alfredo", "Whole Wheat Penne Pasta", "Tomato and Leek Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Whole Wheat Bread", "Boston Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pasilla Chile Scramble Eggs", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Banana Chocolate Chip Muffin"],
"Lunch": ["Lentil Soup", "Turkey Wrap", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Vegetable Corn Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami & Chile Pizza with Honey", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Cashew Tofu Stir Fry (w/nuts)", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Malibu Burger", "Grilled Mozzarella & Basil Sandwich", "Shoestring French Fries", "Lemon Herb Quinoa Salad", "Rosemary Roll", "Cupcake with German Chocolate Icing"],
"Dinner": ["Bean & Barley Soup", "Chicken Cacciatore", "Eggplant Parmesan Casserole", "Spinach with Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Bean & Cheese Entomatadas", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami & Chile Pizza with Honey", "Three Cheese Pizza", "Herb Breadsticks", "Chicken with Black Bean Sauce", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Arugula & Onion Salad", "Sesame Bread", "Banana Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Honeydew Melon", "Seedless Red Grape", "Make Your Own Waffle", "Granola Raspberry Parfait", "Cinnamon Maple Granola", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Cream Cheese Strudel", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sweet Potato Gorda with Corn", "Black Beans", "Hash Browns", "Fall Vegetable Medley"],
"Lunch": ["Asian Chicken Salad (w/nuts)", "Chipotle Hummus & Quinoa Wrap", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Penne Pasta with Pesto", "Roasted Chicken & Zucchini Marinara", "Linguini Pasta", "Herb Focaccia Bread", "Blonde Brownie", "Peanut Butter Cookie (w/nuts)", "Chicken Caesar Salad", "Garlic French Bread", "Mushroom Mozzerella Melt", "Black Beans", "Sauteed Fresh Cauliflower", "Lemon Ginger Chicken", "Steamed Fresh Broccoli", "Carrot & Zucchini with Lemon Butter", "Daikon Roll", "Calamari Roll", "Cheeseburger", "Buttermilk Pancakes", "Spicy Grilled Cheese on Wheat", "Shoestring Fries", "Red Chimichurri Sauce", "Spicy Mustard Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Pesto and Vegetable Pizza on Wheat", "Chili Macaroni", "Garden Vegetable Marinara", "Linguini Pasta", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Brownie Pie", "Hawaiian Sweet Bread", "Pork Chinese BBQ", "Sticky Rice", "Vegetable Fried Rice", "White Beans", "Braised Bok Choy", "Tandoori Chicken", "Basmati Rice", "Indian Lentils and Brown Rice", "Sauteed Kale", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2026-10-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Croissant with Scrm Egg/Ham/Cheese", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Zucchini Walnut Bread (w/nuts)", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Santa Fe Salad", "Ambrosia Salad", "Braised Lamb Ragu", "Creamy Polenta w/Parmesan Cheese", "Italian Grilled Eggplant", "Assorted Meat Pizza", "Cheese Pizza", "Quattro Formaggio Pizza on Wheat", "Egg Drop Soup", "Char Burger", "Veggie Sweet Potato Burger", "Hot Dog", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Zebra Walnut Bar (w/nuts)", "Mandarin Orange Cake", "Pao de Queijo"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Rice", "Ginger Beef Stir Fry", "Tofu & Vegetable Stir Fry", "Broccoli Garlic Soup", "Caesar Salad", "Lemon Baked Salmon", "Black Bean Enchilada", "Spanish Corn", "Steamed Zucchini", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Fettuccine with Chicken Olives & Garlic", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Assorted Meat Pizza", "Cheese Pizza", "Quattro Formaggio Pizza on Wheat", "Chocolate Walnut Sourdough (w/nuts)", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Chocolate Bread", "Blueberry Scone"],
"Lunch": ["Tomato Rice Soup", "Hoki w/Ginger Lime Sauce & Rice", "Steamed Carrots", "Baked Potato", "Chicken Soft Taco", "Vegetable Enchilada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Chicken", "Pasta Primavera", "Wild Rice Blend", "Long Grain Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheddar Cheese w/Tomato & Bacon", "Krinkle Cut French Fries", "Tomato and Mozzarella Salad", "Whole Wheat Roll", "Mexican Wedding Cookie"],
"Dinner": ["Potato Leek Soup", "Breaded Pork Chop", "Three Bean Pilaf", "Vegetable Medley", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean & Cheese Sope", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Teriyaki Beef Stir Fry & Brown Rice", "Vegetable Fried Rice", "Brown Rice", "Long Grain Rice", "Yogurt Potato Salad", "Swirled Herb Bread", "Cream Cheese Strudel"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Watermelon", "Sliced Pineapple", "Cantaloupe", "Granola Parfait", "Cinnamon Maple Granola", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Whole Wheat Banana Bread", "Strawberry Muffin", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Machaca de Jalisco Eggs", "Whole Wheat Pancake", "Potatoes O'Brien", "Sauteed Zucchini with Garlic"],
"Lunch": ["Chickpea & Farro Salad", "Chicken Caesar Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Baked Potato", "Long Grain Rice", "Chickpea Vegetable Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Chicken Artichoke Pesto Flatbread", "Meat Sauce", "Cellentani Pasta", "Fettuccine Pasta", "Alburro Sauce", "Jalapeno Cheddar Roll", "Shortbread Espresso Cookie", "Carrot Walnut Cupcake (w/nuts)", "Ground Beef Taco", "Rice with Cilantro & Onions", "Pinto Beans", "Lettuce/Cheese/Tomatoes", "Avocado Salsa", "Chinese Meatball Soup", "Sauteed Kale", "Crunchy Onion Roll", "Spicy Scallop Sushi Roll", "Grilled Turkey Burger", "Black Bean and Vegetable Burrito", "Whole Wheat Pancake", "Steak Fries", "Spicy Mustard Sauce", "Chipotle Aioli", "Red Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Chickpea Vegetable Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Buffalo Chicken Pizza", "Alburro Sauce", "Rigatoni Pasta", "Mustard Chicken Sauce", "Fettuccine Pasta", "Blueberry Lemon Cake", "Herb Focaccia Bread", "Lasagna Bolognese", "Fresh Herb Polenta with Marinara", "Pinto Beans", "Fresh Green Beans with Garlic", "Sauteed Cabbage & Carrots", "Indian Chicken Coconut Curry", "Basmati Rice", "Indian Style Stew w/ButternutSquash", "Spinach with Garlic & Ginger", "Spicy Scallop Sushi Plate", "Crunchy Onion Roll"],
}
},
],
},
{
"date": "2026-10-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Walnut Pancake (w/nuts)", "Huevos Rancheros", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Cranberry Orange Bread (w/nuts)", "Apple Banana & Carrot Muffin"],
"Lunch": ["Sliced Roast Beef", "Roasted Vegetables", "Sliced Pepper Jack Cheese", "Sliced Smoked Mozzarella", "Brown Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Smoked Turkey Club Sandwich", "Vegetable Fried Rice", "Peas", "Chinese Broccoli Salad", "Tossed Antipasta Salad", "Neapolitan Pepperoni Pizza", "Cheese Pizza", "Roasted Garlic Onion & Pepper Pizza", "Classic French Onion Soup with Croutons", "Charburger", "Gardenburger", "Corn Quesadilla", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Quinoa", "Cornbread with Honey Butter", "Black and White Brownie", "White Choc Macadamia Cookie (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Beef Fajita", "Vegetable Fajita", "Refried Beans", "Mexican Rice", "Turkey Rice Soup", "Memphis Style Pork Ribs", "Steamed Carrots", "Corn on the Cob", "Chipotle Cream", "Mashed Potatoes", "Chinese Broccoli Salad", "Whole Wheat Spaghetti", "Meat Sauce", "Penne with Sun Dried Tomato", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Pepperoni Pizza", "Cheese Pizza", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Chocolate Chip Kahlua Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Strawberry Banana Pancake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Link", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Bran Muffin", "Morning Glory Muffin"],
"Lunch": ["Spicy Navy Bean Soup", "Spinach & Feta Turnover", "Steamed Zucchini", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Bean & Rice Tostada", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Beef Taco Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Chicken Fried Rice", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Black Bean Burger", "Turkey Corn Dog", "Shoestring French Fries", "Red Potato Salad with Dill", "Egg Bread", "Mint Chocolate Chip Cookie"],
"Dinner": ["Vegetable Soup", "Herb Chicken Quarters", "Vegetable Cutlet", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Potato Rajas Mole Taco", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Beef Taco Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Spaghetti Pasta", "Meat Sauce", "Wheat Penne Pasta", "Marinara Sauce", "Wild Rice Blend", "Long Grain Rice", "Caesar Salad", "Three Grain Bread", "Carrot Walnut Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Peach Yogurt", "Green Seedless Grape", "Grapefruit Halves", "Honeydew Melon", "Cantaloupe", "Crunchy Fruit Salad", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Applesauce Coffee Cake", "Banana Oat Bread", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Oatmeal Apple Cinnamon Pancake", "Sausage Links", "Fried Potato with Onion", "Seasoned Vegetable Medley"],
"Lunch": ["Shredded Carrot & Beet Salad", "Italian Panini", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Vegetable Noodle Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pineapple & Jalapeno Pizza on Wheat", "Tomato Basil Flatbread", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Crusty French Bread", "M&M Bar (w/nuts)", "Chocolate Cupcake w/Fudge Icing", "Penne Arrabiata with Chicken", "Moroccan Carrot w/Chickpeas & Tomato", "Pinto Beans", "Seasoned Vegetable Medley", "Carnitas Taco", "Mexican Rice", "Cilantro & Onion Mix", "Vegetable Roll", "Salmon Roll", "Chicken Philly Cheese Sandwich", "Green Vegetable Burger", "Buttermilk Pancake", "Shoestring Fries", "Chipotle Aioli", "Red Chimichurri Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Vegetable Noodle Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pineapple & Jalapeno Pizza on Wheat", "Bowtie Pasta with Summer Vegetables", "Farfalle Pasta", "Sausage Marinara Sauce", "Banana Cake&Peanut Butter Icing(w/nut)(v", "Cheese Bread", "Herb Marinated Chicken Quarter", "Mashed Red Potatoes", "White Beans", "Bean and Rice Wet Burrito", "Fresh Cauliflower & Broccoli Mix", "Mongolian Beef with Rice", "Spicy Hunan Cauliflower", "Seasoned Vegetable Medley", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2026-10-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Egg Turkey Swiss English Muffin Sandwich", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Walnut Muffin (w/nuts)"],
"Lunch": ["Sliced Pastrami", "Tuna Salad", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Carnitas Tortas", "Chicken Puttanesca", "Buttered Noodles", "Spinach with Garlic", "Sauteed Zucchini and Red Pepper", "Three Bean Salad", "Arugula Salad with Goat Cheese", "Smoked Barbeque Chicken Pizza", "Cheese Pizza", "Pineapple & Jalapeno Pizza on White", "Carrot and Ginger Soup", "Grass Fed Burger", "Veggie Sweet Potato Burger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding", "Baba au Rum"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu & Vegetable Stir Fry", "Spicy Black Bean Soup", "Turkey Pastitsio", "Fresh Green Beans", "Stuffed Zucchini", "Vegetable Fried Rice", "Arugula Salad with Goat Cheese", "Bowtie Pasta", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza", "Pineapple & Jalapeno Pizza on White", "Riccotta Cheesecake w/Berry Compote", "Pesto Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread", "Chia Seed Pudding"],
"Lunch": ["Split Pea Soup", "Macaroni & Cheese w/Bacon & Jalapeno", "Corn", "Baked Potato", "Carnitas Taco", "Bean & Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon & Olive Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Spicy Basil Beef", "Spicy Tofu Noodle Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Sweet Potato Burger", "Grilled Roast Beef & Jack on Sourdough", "Krinkle Cut French Fries", "Cucumber & Onion Salad", "Jalapeno Roll", "Toll House Bar"],
"Dinner": ["Onion Soup", "Tri Tip Roast", "Roasted Potato Wedges", "Fresh Cauliflower", "Baked Potato", "Beef Nachos", "Vegetable Empanada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon & Olive Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Tofu Chinese Stir Fry w/Brown Rice", "Brown Rice", "Long Grain Rice", "Pasta Salad with Spinach & Feta", "Sundried Tomato Bread", "Peach Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Creamy Pesto Penne Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Bacon Fried Rice", "Pulled Pork Buffalo Style Sandwich", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Ham and Swiss Sub", "Steak Burrito", "Classic Burger", "Veggie Sweet Potato Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Black Bean Chili Rice & Garlic Chip", "Teriyaki Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Cauliflower", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Kentucky Mocha Butter Cake Cookie", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Blueberry Yogurt", "Watermelon", "Grapefruit Halves", "Sliced Cantalope", "Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Maple Quinoa Granola", "Fluffy Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Banana Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Sourdough French Toast", "Cottage Fried Potatoes", "Sauteed Kale"],
"Lunch": ["Pork Fusion Salad", "Asian Influenced Vegetable Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Chicken White Bean Chili", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pepperoni Pizza", "Tomato Basil Garlic Pasta", "Chicken with White Wine Garlic Sauce", "Whole Wheat Penne Pasta", "Wheat Germ Bread", "Salted Caramel Cupcake", "Snickerdoodle Cookie", "Meatloaf Sandwich", "Grilled Cheddar Cheese On Wheat", "White Beans", "Yogurt Potato Salad", "Chicken Chilaquiles", "Orange Infused Green Beans", "Steamed Fresh Broccoli", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Shoestring Fries", "Sourdough French Toast", "Veggie Sweet Potato Burger", "Red Chimichurri Sauce", "Chipotle Aioli", "Raita Sauce"],
"Dinner": ["Baked Potato", "Quinoa", "Chicken White Bean Chili", "Pepperoni Pizza", "Tomato Basil Garlic Pasta", "Penne Pasta", "Chicken with White Wine Garlic Sauce", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Wheat Germ Bread", "Tres Leches Cake", "Chile Colorado Burrito", "Bean and Rice Wet Burrito", "Pinto Beans", "Calabaza con Queso", "Thai Chicken Taco", "Grilled Pineapple & Mango Salsa", "Ten Spice Fried Rice", "Sauteed Zucchini with Garlic", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
