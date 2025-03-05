const diningMenu = [
{
"date": "2025-03-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Chorizo and Eggs", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Morning Glory Muffins (w/nuts)"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Herb Marinated Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Quinoa Salad w/Lemon Herb Veggies", "Salsa Salad", "Pepperoni Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Whole Wheat Roll", "Lemon Bar", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Beef Broccoli & Mushroom Stir Fry", "Vegetable & Tofu Stir Fry", "Minestrone Soup", "Turkey Lasagna", "Fresh Green Beans", "Fresh Broccoli Spears", "Oven Roasted Red Potatoes", "Quinoa Salad w/Lemon Herb Veggies", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Baked Potato", "Pinto Beans", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Parmesan Herb Bread", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Mexican Style Cage Free Scrambled Egg", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Tortilla Soup", "Fish Cake", "Fruit Relish", "Cauliflower & Red Bell Pepper", "Baked Potato", "Baked Sweet Potato", "Carnitas Taco", "Bean and Rice Wet Burrito", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Ham and Pineapple Pizza", "Mexican Pizza", "Herb Breadsticks", "Cheese Tortellini with Marinara", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Tuna Melt on Wheat", "Shoestring French Fries", "Tabouli Salad", "Pesto Rolls", "Black and White Brownie"],
"Dinner": ["Miso Soup", "Turkey Lasagna", "Roasted Vegetable Lasagna", "Kale/Peppers and Garlic", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Chipotle Bean Flauta", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Ham and Pineapple Pizza", "Mexican Pizza", "Herb Breadsticks", "Orange Chicken Stir Fry", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Kale Caesar Salad", "Whole Wheat Sourdough Bread", "Devil's Food Cake with Buttercream"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Ginger Cookie", "Banana Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Ginger Cookie", "Banana Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Seedless Red Grape", "Cantaloupe", "Watermelon", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Whole Wheat Banana Bread", "Orange Cranberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Sausage Links", "Potato Pancakes", "Seasoned Vegetable Medley"],
"Lunch": ["Green Bean & Cucumber w/Miso", "Italian Panini", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Vietnamese Chicken Soup", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Three Cheese Flatbread", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Pasta with Grilled Vegetables", "Whole Wheat French Bread", "Shortbread Cookie", "Chocolate Cupcake w/Fudge Icing", "Fish Po' Boy Sandwich", "Black Beans", "Smokey Tomato Relish", "Pita Chips", "Butternut Squash Hummus", "Quesa Birria Taco", "Mexican Rice", "Cilantro & Onion Mix", "Sauteed Kale", "Vegetable Roll", "Salmon Roll", "Char Grilled ChickenTeriyaki Sandwich", "Green Vegetable Burger", "Whole Wheat Banana Pancake", "Shoestring Fries", "Spicy Mustard Sauce", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Vietnamese Chicken Soup", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Three Cheese Pizza on Wheat", "Pasta with Grilled Vegetables", "Sausage Marinara Sauce", "Farfalle Pasta", "Banana Cake & Penut Butter Icing(w/nut)v", "Whole Wheat French Bread", "Herb Marinated Rotisserie Chicken", "Mashed Red Potatoes", "Cuban Style Black Beans & Rice", "Black Beans", "Fresh Spinach with Garlic", "Grilled Tilapia", "Korma Sauce (w/nuts)", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-03-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Whole Wheat French Toast", "Egg Ham & Cheese English Muffin Sandwich", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Bacon Cheddar Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Lemon Ginger Chicken", "Brown Rice", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Pulled Pork Sandwich with Coleslaw", "Swiss Chard with Fresh Garlic", "House Made Baked Beans", "Potato Chip", "Italian Chunk Salad", "Macaroni Salad", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Santa Fe Salad", "Sticky Rice", "Pork & Veggie Stir Fry", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Rotisserie Chicken", "Steamed Zucchini", "Sauteed Fresh Carrots", "Risotto with Fresh Vegetables", "Macaroni Salad", "Whole Wheat Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Bread Olive", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Banana Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Brown Molasses Bread"],
"Lunch": ["Hot and Sour Soup", "Vietnamese Beef Sub (Banh Mi)", "Fresh Vegetables Saute with Garlic", "Baked Potato", "Chicken Fried Taco", "Black Bean Enchilada", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Mac and Cheese Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Vegetable Pad Thai with Peanut(w/nut)", "Chicken Pad Thai with Peanut (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Chili Dog", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Garlic French Bread", "Oatmeal Bar (w/nuts)"],
"Dinner": ["Pasta Fazool Soup", "BBQ Pork Spare Ribs", "Mashed Red Potatoes", "Vegetable Medley", "Baked Potato", "Beef Birria", "Bean and Cheese Hard Shell Taco", "White Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Mac and Cheese Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Bowtie Pasta", "Mushroom Marinara Sauce", "Long Grain Rice", "Brown Rice", "Chickpea Salad", "Honey Bread", "Chocolate Roll"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Ginger Cookie", "Banana Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Ginger Cookie", "Banana Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Honeydew Melon", "Watermelon", "Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Buckwheat Granola (w/nuts)", "Fluffy Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Pumpkin Muffins (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Roasted Tomato Tartine", "Cottage Fried Potatoes", "Sauteed Kale"],
"Lunch": ["Golden Beet Salad w/Orange Miso", "Pita Sandwich w/Hummus & Tabouli", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Potato", "Quinoa", "Mushroom Barley Soup", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Pepperoni Pizza", "Pasta with Winter Greens", "Roasted Chicken & Zucchini Marinara", "Penne Pasta", "Three Grain Bread", "Raisin Rum Rice Pudding", "Banana Chocolate Chip Cookie", "Roasted Potato Salad w/Goat Cheese", "Chicken Gyro", "Spicy Grilled Cheese Sandwich on SD", "Seasoned Vegetable Medley", "Chinese Meatball Soup", "Vegetable Fried Rice", "Steamed Fresh Broccoli", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Shoestring Fries", "Sourdough French Toast", "Falafel Sandwich", "Red Chimichurri Sauce", "Housemade Spicy Ketchup", "Cucumber Tzatziki"],
"Dinner": ["Baked Potato", "Wild Rice", "Mushroom Barley Soup", "Pepperoni Pizza", "Pasta with Winter Greens", "Roasted Chicken & Zucchini Marinara", "Penne Pasta", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Russian Bread", "Carrot Olive Oil Cake (w/nuts)", "Honey Lime BBQ Chicken Thigh", "Spanish Rice w/Roasted Corn", "Spinach And Feta Turnover", "Black Beans", "Sauteed Zucchini with Garlic", "Taco Rajas", "Tacos Campechanos", "Cilantro & Onion Mix", "Fire Roasted Tomato Salsa", "Steamed Fresh Broccoli", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2025-03-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Rice with Cilantro & Onions", "Seitan Shawarma", "Garlic Shawarma Sauce", "Middle Eastern Pickled Turnips", "Lamb Greek Gyro", "Cucumber Tzatziki", "Filipino Style Barbecue Chicken", "Sticky Rice", "Steamed Crookneck Squash", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Fresh Garden Pasta Salad", "Ham & Pineapple", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Fish & Chips w/Tartar Sauce", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Mahi Mahi Veracruz", "Sticky Rice", "Vegetable Fried Rice", "Egg Drop Soup", "Pork and Chicken Adobo", "Sinangag - Garlic Fried Rice", "Peas", "Caesar Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fettuccini Caponata", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Pandesal", "Marble Cake with Chocolate Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["New England Clam Chowder", "Cod Veracruz", "Roasted Carrots with Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Calabacitas Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "BBQ Chicken Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Tikka Masala", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Turkey & Swiss on Sourdough", "Shoestring French Fries", "Asparagus Mushroom Pasta Salad", "Irish Soda Bread", "Toll House Bar"],
"Dinner": ["Vegetable Soup", "Tilapia with Red Curry Sauce (w/nuts)", "Jasmine Rice", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Nachos", "Potato Vegetable Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "BBQ Chicken Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Beef Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Wild Rice Blend", "Kale Arugula Salad with Cranberry", "Swirled Herb Bread", "Zucchini Cake w/Cr Chz Icing (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Ginger Cookie", "Banana Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Ginger Cookie", "Banana Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Honeydew Melon", "Cantaloupe", "Buckwheat Granola (w/nuts)", "Baked Oatmeal with Apple & Cinnamon", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Yogurt Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Sausage Patty", "Potatoes O'Brien", "Fresh Sauteed Spinach"],
"Lunch": ["Spicy Kale Caesar", "Roasted Vegetable Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Long Grain Rice", "Miso Broth Soup with Spinach", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Shrimp Butternut Squash Risotto", "Swirled Herb Bread", "Chocolate Pudding", "Carrot Walnut Cupcakes (w/nuts)", "Chicken Enchiladas", "Enchilada Rajas", "Spanish Rice w/Roasted Corn", "Lettuce/Cheese/Tomatoes", "Refried Beans", "Grilled Ono Fish", "Teriyaki Sauce", "Spicy Hunan Cauliflower", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi", "Hamburger", "Vegetarian Cuban Sandwich", "Crinkle Cut French Fries", "Housemade Spicy Ketchup", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Miso Broth Soup with Spinach", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Pepperoni Stromboli with Provolone", "Creamy Pesto Sauce", "Penne Pasta", "Tomato Basil & Garlic Sauce", "Linguini Pasta", "Hawaiian Sweet Bread", "Banana Cream Pie", "Roasted Root Vegetables", "Beef Bourguignon with Noodles", "Black Beans", "Sauteed Winter Greens", "Lemon Baked Salmon", "Spanish Spiced Lentils", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-03-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Chicken Congee", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Chilaquiles (No Egg)", "Chicken Sausage Patty", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Pinto Beans", "Fluffy Whole Wheat Waffles", "Lemon Scone", "Banana Nut Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Spinach Pecan Bacon & Cran Salad (w/nut)", "Lemon Baked Salmon", "Carrots with Fresh Thyme", "Green Beans", "Italian Quinoa", "Rice Pilaf with Mushrooms", "Pasta Carbonara", "Whole Wheat Spaghetti", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Mushroom Pizza on Wheat", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Italian Wrap", "Vegetable Medley", "Baked Potato", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Tomato and Mozzarella Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Lemon Scone", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Cream of Tomato Soup", "Lemon Chicken Quarter", "Rice Pilaf", "Bok Choy with Garlic & Ginger", "Baked Potato", "Chicken Bean & Rice Burrito", "Vegetable Soft Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Spaghetti Pasta", "Meat Sauce", "Herb Spirals w/Olive Oil and Garlic (vgn", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Pizza Bread", "French Peach Crumb Pie (w/nuts)"],
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
"Brunch": ["Grapefruit Halves", "Watermelon", "Seedless Red Grape", "Buckwheat Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Chilaquiles (No Egg)", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Flour Tortilla", "Applesauce Coffee Cake", "Egg Ham & Cheese English Muffin Sandwich", "Fall Vegetable Hash", "Black Beans", "Fresh Spinach with Garlic", "Chicken White Bean Chili", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancakes", "Roasted Broccoli"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken White Bean Chili", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Asparagus & Ricotta Sauce", "Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Apple Crisp", "Pesto Bread", "Roast Pork Loin with Spiced Apples", "Garlic Red Mashed Potato", "Fresh Tomato Quiche", "Steamed Broccoli & Cauliflower", "Black Beans", "Beef Soft Tacos", "Chile Salsa", "Mexican Rice", "Sauteed Cabbage & Carrots", "Calamari Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-03-09",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "White Navy Beans", "Make Your Own Waffle", "Double Chocolate Bread", "Maple Pecan Scone (w/nuts)"],
"Dinner": ["Sticky Rice", "Beef Chow Mein", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Caesar Salad", "Grilled Pork Chops", "Peas", "Stir Fry Vegetables", "Mashed Red Potatoes w/ Garlic", "Fettucine Alfredo", "Long Grain Rice", "Baked Rigatoni", "Baked Sweet Potato", "Pinto Beans", "Baked Potato", "Assorted Meat Pizza", "Cheese Pizza on White", "Tomato Pesto Pizza on Wheat", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chicken Brown Rice Soup", "Grilled Swiss/Bacon on Sourdough", "Cauliflower and Broccoli", "Baked Potato", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Macaroni Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Chocolate Chip Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Split Pea Soup", "Roast Beef", "Roasted Potato Wedges", "Fresh Vegetable Medley", "Baked Potato", "Chicken Soft Taco", "Black Bean Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Sweet & Sour Pork Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Tossed Italian Greens", "Crusty French Bread", "Brownie & Walnut Pie (w/nuts)"],
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
"Brunch": ["Honeydew Melon", "Cantaloupe", "Fresh Strawberry", "Chicken Congee", "Oatmeal", "Steamed White Rice", "Baby Spinach", "Make Your Own Waffle", "Roasted Cauliflower w/Garlic", "Kimchi", "Watermelon", "Sweet and Spicy Tofu", "Three Cheese Pizza on White", "Bolognaise Sauce", "Pasta Spaghetti", "Yukon Potato Frittata w/ Artichoke", "Flour Tortilla", "Chocolate Chip Banana Bread", "Ground Beef and Bean Tostada", "Vegetable Fajita", "Fire Roasted Tomato Salsa", "Refried Beans", "New England Clam Chowder", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Bacon &Cheese", "Whole Wheat French Toast", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "New England Clam Chowder", "Three Cheese Pizza on White", "Tomato Basil Cream Sauce", "Farfalle Pasta", "Penne Pasta with Pesto", "Roasted Cauliflower w/Garlic", "Kimchi", "Bulgur Wheat", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Pot Roast", "Steamed Red Potatoes w/Parsley", "Risotto with Fresh Vegetables", "Refried Beans", "Sauteed Cabbage & Carrots", "Vietnamese Pork BBQ Sub Sandwich", "Vegetable Fried Rice", "Stir Fry Broccoli Spinach Bok Choy", "California Club Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2025-03-10",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Pepper Jack Cheese", "Brown Rice", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Waldorf Walnut Salad (w/nuts)", "Tomato And Mozzarella Salad", "Penne Arrabiata with Chicken (w/nuts)", "Steamed Fresh Carrots", "Green Beans", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Potato Cheese Soup", "Quesadilla w/Roasted Poblano Chiles", "Gardenburger", "Grilled Turkey Burger", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Garlic French Bread", "Toll House Bar", "Magic Walnut Cookie Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Caesar Salad", "Char Grilled Rock Fish w/Lemon Thyme", "Stir Fry Vegetables", "Corn", "Mashed Potatoes", "Mushroom Stroganoff", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Miso Soup", "Beef Strogonoff", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Chorizo Burrito", "Enchilada Rajas", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Chicken Stir Fry with Black Bean Sauce", "Tofu Szechwan", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Mozzarella & Tomato on Wheat", "Krinkle Cut French Fries", "Chinese Chicken Salad (w/nuts)", "Onion Roll", "Killer Brownie"],
"Dinner": ["Tomato Basil Soup", "Cacciatora Chicken", "Herb Polenta with Mushroom Ragout", "Cauliflower and Broccoli", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Shredded Beef Tostada", "Vegetable Empanada", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Sausage Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Penne Pasta", "Alfredo Sauce w/Chicken/Vegetables", "Linguini Pasta", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Brown Rice", "Greek Salad", "Whole Wheat Sourdough Bread", "Italian Cream Cake (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Pineapple", "Honeydew Melon", "Cantaloupe", "Make Your Own Waffle", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread", "Applesauce Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Black Bean Chilaquiles", "Diced Potatoes with Onions", "Braised Cabbage"],
"Lunch": ["Chicken Sesame Noodle Salad", "Chipotle Hummus & Quinoa Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Watermelon Salad", "Lemon Mint Quinoa (w/nuts)", "Pickled Red Onion", "Italian Sausage & Basil Stromboli", "Penne Pasta with Pesto", "Marinara Sauce with Chicken", "Linguini Pasta", "Thick Focaccia Bread", "Apple Kuchen (w/nuts)", "Oatmeal Raisin Bar (w/nuts)", "BBQ Pork Sandwich", "Cheese Quesadilla", "Ranchero Beans", "Mid Western Coleslaw", "Green Curry Chicken w/Thai Basil(w/nuts)", "Sticky Rice", "Spinach with Fresh Garlic & Ginger", "Salmon Roll", "Vegetable Roll", "Hamburger", "Apple Cinnamon Pancakes", "Spicy Grilled Cheese Sandwich on SD", "Crinkle Cut French Fries", "Red Chimichurri Sauce", "Spicy Mustard Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Swiss Chard & Lentil Soup", "Salami Pizza", "Penne w/Butternut Squash Sauce", "Bolognese Sauce with Pancetta", "Spaghetti", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Orange Walnut Olive Oil Cake (w/nuts)", "Thick Focaccia Bread", "Pueblo Pork Roast", "Authentic Mole Sauce with Pepitas", "Spanish Rice with Cilantro", "Pinto Beans", "Fresh Green Beans with Garlic", "Chicken Char Siu", "Sticky Rice", "Stir Fried Chinese Greens", "Spicy Hunan Cauliflower", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-03-11",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancake (Housemade)", "Canadian Bacon", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Roast Beef", "Tuna Salad", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Sweet & Sour Pork", "Asian Vegetable Stir Fry", "BBQ Beef Sandwich", "Spinach Quiche", "Fresh Corn on the Cob", "Swiss Chard with Fresh Garlic", "Ambrosia Salad (w/nuts)", "Pasta Salad with Grilled Veggies", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Chicken Rice Soup", "Char Burger", "Grilled Vegetable Burger", "Grilled Beef Onion & Cheddar On Sour", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Whole Wheat Sourdough Bread", "Brownie w/Chocolate Icing", "Mexican Wedding Cookie (w/nuts)"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Sticky Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Indian Chicken Coconut Curry (w/nuts)", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice", "Pasta Salad with Grilled Veggies", "Linguini Pasta", "Bolognaise Sauce", "Pasta Pronto", "Sun Dried Tomato Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Egg and Cheese Biscuit", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Muffin", "Cranberry Orange Bread (w/nuts)"],
"Lunch": ["Pozole Soup with Condiments", "Veggie Sandwich w/Tomato Spread", "Roasted Potato Medley w/Kale & Bacon", "Baked Potato", "Chicken Black Bean Tostada", "Vegetable Chimichanga", "Spanish Rice w/Roasted Corn", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Tomato Basil Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Chicken Chow Mein", "Lemon Ginger Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Ham & Swiss Sandwich", "Shoestring French Fries", "Asian Spinach Salad", "Cracked Wheat Roll", "Mint Stick"],
"Dinner": ["Hearty Vegetable Soup", "Roasted Petite Tender", "Couscous with Vegetables", "Carrots with Tarragon", "Roasted Red Potato Wedges", "Baked Potato", "Grilled Turkey Taco", "Vegetable Fajita", "Spanish Rice w/Roasted Corn", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Tomato Basil Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Sesame Chicken Stir Fry", "Japanese Noodles w/Tofu & Bok Choy", "Long Grain Rice", "Brown Rice", "Marinated Green Beans Salad", "Three Grain Roll", "Mexican Chocolate Cake"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Pineapple", "Honeydew Melon", "Cantaloupe", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Make Your Own Waffle", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Orange Cranberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Roasted Tomato Tartine", "Sausage Links", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Long Grain Rice", "Baked Potato", "Danish Cauliflower Cheese Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Spinach & Ricotta Flatbread", "Pepperoni Pizza", "Tomato Cream Sauce", "Fettuccine Pasta", "Whole Wheat French Bread", "Lemon Bar", "Peanut Butter Fudge Cupcake (w/nuts)", "Shredded Beef Soft Taco", "Fire Roasted Tomato Salsa", "Lettuce & Cheese &Tomatoes", "Fresh Tortilla Chips", "Pinto Beans", "Jamaican Chicken Bowl (w/nuts)", "Long Grain Rice", "Collard Greens with Smoked Ham Hock", "Seasoned Sweet Potato Halves", "Spicy Scallop Sushi Roll", "Daikon Roll", "Patty Melt Sandwich", "Roasted Tomato Tartine", "Cornmeal Waffle", "Steak Fries", "Spicy Mustard Sauce", "Chipotle Aioli", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Danish Cauliflower Cheese Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Pepperoni Pizza", "Tomato Cream Sauce", "Fettuccine Pasta", "White Wine Garlic Sauce with Chicken", "Farfalle Pasta", "Apple Crisp", "Whole Wheat French Bread", "Creamy Italian Mushroom Risotto", "Chicken Marsala", "Pasta with Olive Oil", "Pinto Beans", "Steamed Broccoli", "Bacon & Egg Ramen", "Miso Ramen", "Braised Bok Choy", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
