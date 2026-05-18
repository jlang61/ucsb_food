const diningMenu = [
{
"date": "2026-05-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Whole Wheat Pancake (Housemade)", "Chilaquiles Green Salsa", "Home Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Chocolate Raspberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Chicken Stir Fry with Green Beans", "Vegetable Yakisoba", "Bermuda Salad", "Asian Noodle Salad", "Smoked Pork Loin and Gouda Sandwich", "Fresh Cauliflower", "Fresh Broccoli Spears", "Chili Black Bean", "Tomato Basil Pizza on White", "Salami Pizza", "Cheese Pizza", "Gumbo Soup", "Charburger", "Black Bean Burger", "Falafel on Pita with Raita Sauce", "Pinto Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Quinoa", "Irish Soda Bread", "Oatmeal Cranberry White Choc Cookie", "Chocolate Peanut Butter Cupcake(w/nut)(v"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Cashew Tofu & Veggies (w/nuts)", "Traditional Teriyaki Sauce", "Miso Broth with Udon Noodles", "Bermuda Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Carrots", "Basmati Rice", "Fettucine Alfredo", "Penne Pasta", "Tomato and Leek Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Tomato Basil Pizza on White", "Cheese Pizza", "Whole Wheat Bread", "Boston Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Chorizo Breakfast Burrito", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Cranberry Orange Walnut Bread (w/nut)"],
"Lunch": ["Tortilla Soup", "Spicy Asian Vegetable Wrap", "Kale Peppers and Garlic", "Baked Sweet Potato", "Baked Potato", "Chicken Bean & Rice Burrito", "Sweet Corn Tamale Casserole", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Chicken Garlic Pesto Pizza", "Pesto Artichoke Pizza", "Herb Breadsticks", "Greek Pasta w/Feta Tomato & Spinach", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Grilled Chicken Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheese with Tomatoes & Chiles", "Steak Fries", "Strawberry Walnut Salad (w/nuts)", "Garlic French Bread", "Chocolate Chocolate Chip Cookie"],
"Dinner": ["French Onion Soup", "Grilled Cajun Chicken Breast", "Steamed Vegetables & Rice", "Organic Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Vegetarian Morisqueta", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Chicken Garlic Pesto Pizza", "Pesto Artichoke Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry & Brown Rice", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Lemon Herb Quinoa Salad", "Three Grain Bread", "Strawberry Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Honeydew Melon", "Grapefruit Halves", "Watermelon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola", "Granola Honeydew Parfait", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Raspberry White Choc Muffin", "Irish Soda Bread", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Whole Wheat Banana Pancake", "Cottage Fried Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Kale & Quinoa Salad w/Almonds (w/nuts)", "Turkey Club Panini", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Taco Pizza", "Marinara Sauce", "Farfalle Pasta", "Penne w/Butternut Squash Sauce", "Hawaiian Sweet Bread", "Chocolate Mint Cupcake", "Zebra Walnut Bar (w/nuts)", "Huli Huli Chicken", "Yellow Rice", "Thai & Peanut Coleslaw (w/nuts)", "Black Beans", "Hunan Noodles with Spicy Pork Sauce", "Honey Sriracha Glaze Brussel Sprouts", "Calamari Roll", "Cucumber & Avocado Roll", "Grilled Turkey Burger", "Whole Wheat Banana Pancake", "Grilled Cheese Chile & Veggie on Sour(v", "Crinkle Cut French Fries", "Pickled Red Onion", "Housemade Ketchup"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Taco Pizza", "Penne w/Butternut Squash Sauce", "Tomato Basil & Garlic Sauce", "Linguini Pasta", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Hawaiian Sweet Bread", "Carrot Cake with Walnuts (w/nuts)", "Beef Enchilada", "Avocado Salsa", "Mexican Rice", "Refried Black Beans", "Fresh Cauliflower & Carrots", "Shanghai Noodles & Chix w/Bean Sauce", "Vegetable Fried Rice", "Stir Fried Chinese Greens", "Calamari Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2026-05-19",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Bacon", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread Pudding", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Japanese Potato Salad", "Ambrosia Salad", "Chicken Spinach & Mushroom Lasagna", "Fresh Herb Polenta with Marinara", "Green Beans", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza", "Chickpea Vegetable Soup", "Charburger", "Grilled Vegetable Burger", "Hot Dog", "White Navy Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pao de Queijo", "Zebra Walnut Bar (w/nuts)", "Mandarin Orange Cake"],
"Dinner": ["Coleslaw", "Japanese Potato Salad", "Brown Rice", "Kung Pao Beef with Peanuts (w/nuts)", "Tofu & Vegetable Stir Fry", "Broccoli Garlic Soup", "Caesar Salad", "Cilantro Lime Salmon", "Fire Roasted Tomato Chipotle Salsa", "Black Bean Enchilada", "Steamed Zucchini", "Spanish Corn", "Mexican Rice", "Fettuccine with Chicken Olives & Garlic", "Fusilli with Roasted Vegetables", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza", "Chocolate Walnut Sourdough (w/nuts)", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Wheat French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Raspberry Almond Coffee Cake (w/nuts)"],
"Lunch": ["Cream of Mushroom Soup", "Chicken Caesar Wrap", "Vegetable Medley", "Baked Potato", "Chile Verde with Chicken", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Asian Pork w/Green Bean & Brown Rice", "Lemon Ginger Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Ham & Swiss on Wheat", "Krinkle Cut French Fries", "Apple Blu Cheese Walnut Salad(w/nuts)", "Whole Wheat Roll", "Toll House Bar"],
"Dinner": ["Vegetable Beef Soup", "Fish Cake", "Lemon Beurre Blanc", "Spinach Rice Casserole", "Crookneck Squash & Herbs", "Baked Potato", "Beef Enchilada", "Potato Taquito", "Refried Beans", "Mexican Rice", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Beef and Vegetable Stir Fry", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Tossed Italian Greens", "Cornbread", "Pumpkin Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Raspberry Yogurt", "Watermelon", "Pineapple", "Seedless Red Grape", "Grapefruit Halves", "Make Your Own Waffle", "Cinnamon Maple Granola", "Black & Blue Granola Parfait", "Cream of Wheat", "Honeydew Melon", "Organic Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Wheat French Toast", "Huevos Rancheros", "Refried Beans", "Brussels Hash"],
"Lunch": ["Curried Chicken Almond Salad (w/nuts)", "Asian Influenced Vegetable Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Potato", "Long Grain Rice", "Miso Broth Soup with Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Canadian Bacon and Pineapple Pizza", "Sausage Marinara Sauce", "Penne Pasta", "Tomato Basil & Garlic Sauce", "Angel Hair Pasta", "Challah Bread", "Energy Bar (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Shredded Beef Soft Taco", "Fire Roasted Tomato Salsa", "Lettuce/Cheese/Tomatoes", "Black Beans", "Steamed Fresh Broccoli", "Lemon Ginger Chicken", "Sticky Rice", "Fresh Green Beans Sauteed w/Garlic", "Spicy Scallop Sushi Roll", "Daikon Roll", "Chicken Philly Cheese Sandwich", "Grilled Swiss & Tomato on Wheat", "Wheat French Toast", "Steak Fries", "Pickled Red Onion", "Housemade Ketchup", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Miso Broth Soup with Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Canadian Bacon and Pineapple Pizza", "Sausage Marinara Sauce", "Penne Pasta", "Tomato Basil & Garlic Sauce", "Angel Hair Pasta", "Mango Cake", "Challah Bread", "Mediterranean Spiced Rotisserie Chicken", "Mashed Yams", "Spinach Quiche", "Black Beans", "Sauteed Cabbage & Carrots", "Pork Chow Mein", "Bok Choy & Nappa Cabbage w/Sesame", "Orange Infused Green Beans", "Daikon Roll", "Spicy Scallop Sushi Plate"],
}
},
],
},
{
"date": "2026-05-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Cage Free Scrambled Eggs w/Ham & Cheese", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cranberry Orange Bread (w/nuts)", "Apple Banana & Carrot Muffin"],
"Lunch": ["Sliced Roast Beef", "Roasted Vegetables", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "African Spiced Seitan", "Couscous", "Common Thresher Shark w/Chermoula Sauce", "Chinese Broccoli Salad", "Tossed Antipasta Salad", "Tonkatsu", "Peas", "Vegetable Fried Rice", "Neapolitan Pepperoni Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza", "Classic French Onion Soup with Croutons", "Charburger", "Gardenburger", "Corn Quesadilla", "Steak Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Sticky Rice", "Cornbread with Honey Butter", "Black and White Brownie", "White Choc Macadamia Cookie (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Beef Fajita", "Vegetable Fajita", "Refried Beans", "Mexican Rice", "Chicken Rice Soup", "Chinese Broccoli Salad", "Roast Leg of Pork", "Chili and Noodles", "Corn on the Cob", "Steamed Carrots", "Roasted Potato Wedges", "Whole Wheat Spaghetti", "Meat Sauce", "Fresh Tomato Basil Garlic Pasta", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Pepperoni Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza", "Roasted Garlic Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Chilaquiles de Queso (No Egg)", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sticky Bun with Pecans (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Tomato Rice Soup", "Pulled Pork Buffalo Style Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Bean & Rice Wet Burrito", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham and Pineapple Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry & Brown Rice", "Ma Po Tofu", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheddar on White", "Shoestring French Fries", "Marinated Italian Vegetable Salad", "Wheat Germ Roll", "Pecan Pie Bar (w/nuts)"],
"Dinner": ["Carrot and Ginger Soup", "Lasagna", "Brown Rice Artichoke Casserole", "Carrots with Tarragon", "Baked Potato", "Baked Sweet Potato", "Chili Lime Grilled Chicken Taco", "Chipotle Tempeh Tacos", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham and Pineapple Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Sweet & Sour Chicken", "Vegetable Lo Mein", "Long Grain Rice", "Brown Rice", "Pasta Salad with Spinach & Feta", "Pizza Bread", "Fresh Orange Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Seedless Red Grape", "Grapefruit Halves", "Cantaloupe", "Sliced Pineapple", "Fresh Strawberry", "Make Your Own Waffle", "Cinnamon Maple Granola", "Peanut Butter & Banana Oats (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Homemade Cinnamon Rolls", "Blueberry Coffee Cake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Oatmeal Apple Cinnamon Pancake", "Hash Browns", "Fresh Cauliflower & Carrots"],
"Lunch": ["Spicy Kale Caesar", "Chicken Chipotle Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Arugula & Artichoke Pizza on White", "Bolognese Sauce with Pancetta", "Linguini Pasta", "Tomato Basil Garlic Pasta", "Homemade Bread", "Chocolate Chip Cookie", "Salted Caramel Cupcake", "Chicken Chile Verde Burrito", "Tortilla Chips & Salsa", "Pinto Beans", "Sauteed Zucchini with Garlic", "Hoki Fish with Chermoula Sauce", "Sticky Rice", "Fresh Vegetable Medley", "Vegetable Roll", "Spicy Tuna Roll", "Hamburger", "Spicy Grilled Cheese on Sourdough", "Oatmeal Apple Cinnamon Pancake", "Shoestring Fries", "Housemade Spicy Ketchup", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Pepperoni Pizza", "Tomato Basil Garlic Pasta", "Roasted Chicken & Zucchini Marinara", "Whole Wheat Penne Pasta", "Cookies and Cream Cake", "Homemade Bread", "Moroccan Braised Beef", "Couscous", "Black Beans", "Green Beans w/Shallot & Lemon Zest", "Roasted Cauliflower", "Chicken Teriyaki Rice Bowl", "Pineapple Fried Rice w/Tofu", "Bang Bang Broccoli", "Vegetable Roll with Brown Rice", "Spicy Tuna Sushi Plate"],
}
},
],
},
{
"date": "2026-05-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Croissant with Ham & Cheese", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Walnut Muffin (w/nuts)"],
"Lunch": ["Argentinian Grilled Vegetable", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Chicken Shoyu", "Sticky Rice", "Sauteed Zucchini and Red Pepper", "Steamed Crookneck Squash", "Three Bean Salad", "Confetti Pasta Salad", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza", "Carrot and Ginger Soup", "Grass Fed Burger", "Gardenburger", "Pork Sisig", "Krinkle Cut Fries", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding", "Baba au Rum"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu & Vegetable Stir Fry", "Spicy Black Bean Soup", "Turkey Breast", "Turkey Gravy", "Herb Stuffing", "Peas", "Vegetable Stir Fry", "Garlic Mashed Potatoes", "Caesar Salad", "Rotini Pasta", "Roasted Pepper Tomato Sausage Sauce", "Rigatoni Pasta", "Marinara Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza", "Pesto Bread", "Riccotta Cheesecake w/Berry Compote"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bread Pudding with Whiskey Sauce", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread"],
"Lunch": ["Coconut Carrot Soup", "Roasted Pork Loin Sandwich w/Gouda", "Fresh Broccoli Spears", "Baked Potato", "Chicken Mole Enchiladas", "Potato Taco", "Green Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Sesame Chicken Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Black Bean Burger", "Grilled Turkey & Jack on Sourdough", "Krinkle Cut French Fries", "Chinese Chicken Salad (w/nuts)", "Sourdough Roll", "Oatmeal Raisin Walnut Cookie (w/nuts)"],
"Dinner": ["Argentina Locro Stew", "Lomo Saltado with Green Aji Sauce", "Papa a la Huancaina", "Haricot Vert Green Bean", "Baked Potato", "Colombian Arroz con Pollo", "Ceviche con Cancha", "White Spanish Rice", "Navy White Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Beef Empanada", "Cheese Pizza", "Herb Breadsticks", "Peruvian Arroz Chaufa", "Brazilian Tofu Moqueca", "Long Grain Rice", "Brown Rice", "Solterito Peruvian Quinoa Salad", "Cheese Roll", "Chocotorta"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Organic Vanilla Yogurt", "Honeydew Melon", "Watermelon", "Cantaloupe", "Waffle", "Crunchy Fruit Salad", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Walnut Coffee Cake (w/nuts)", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Home Fried Potatos", "Grilled Ham", "Sauteed Kale"],
"Lunch": ["Vegetable & Quinoa Salad", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Sliced Roast Beef", "Baked Potato", "Basmati Rice", "Vegetable Minestrone Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Three Cheese Flatbread", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Penne Pasta", "Crusty French Bread", "Pecan Pie Bar (w/nuts)", "Oatmeal Craisin Cookie", "Sweet and Sour Pork", "Sticky Rice", "Black Beans", "Fresh Green Beans with Garlic", "Pollo a la Brasa with Aji Verde Sauce", "Steamed Red Potatoes w/Parsley", "Spinach with Garlic & Ginger", "Asparagus & Egg Roll", "Salmon Roll", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "Malibu Burger", "Chipotle Aioli", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Vegetable Minestrone Soup", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Greek Tomato Sauce", "Linguini Pasta", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Crusty French Bread", "Yellow Cake with Chocolate Icing", "Chicken Marsala", "French Style Pilaf Rice", "Black Beans", "Carrot & Zucchini with Lemon Butter", "Spinach with Garlic", "Spicy Thai Basil Beef (Pad Krapow)", "Thai Tofu Curry w/ Vegetables", "Roasted Broccoli and Red Onion", "Daikon Roll", "Calamari Sushi Plate"],
}
},
],
},
{
"date": "2026-05-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chicken Sausage Link", "Strawberry Pancake", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Beans", "Mexican Rice", "Pasta Salad with Smoked Salmon", "Crunchy Fruit Salad (w/nuts)", "BBQ Pork Spare Ribs", "Guava Rum BBQ Sauce", "Garlic Mashed Potatoes", "Corn on the Cob", "Sausage Mushroom Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza", "Danish Cauliflower Cheese Soup", "Cheeseburger", "Black Bean Burger", "Grilled Swiss & Tomato on Wheat", "Black Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Jalapeno Cheddar Roll", "Mint Chocolate Cookies", "Bibingka Filipino Coconut Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable & Noodle Stir Fry", "Far East Vegetable Soup", "Pasta Salad with Smoked Salmon", "Rotisserie Chicken", "Potato Gorda with Corn", "Chili Black Bean", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Fettuccine", "Chicken with White Wine Garlic Sauce", "Whole Wheat Pasta Rigate", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Mushroom Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza", "Cheese Bread", "Black Forest Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Greek Eggs", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Orange Cinnamon Swirl Bread"],
"Lunch": ["New England Clam Chowder", "BBQ Chicken Sandwich", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Grilled Pizza w/Pesto/Mozz/Arugula", "Herb Breadsticks", "Penne Pasta", "Creamy Pesto Sauce", "Whole Grain Rotini w/Tomato & Garlic(vgn", "Long Grain Rice", "Brown Rice", "Char Burger", "Grilled Mozzerrella Tomato on Wheat", "Malibu Burger", "Shoestring French Fries", "Pear Gorgonzola & Walnut Salad(w/nuts)(v", "Buttermilk Biscuit", "Raisin Rum Rice Pudding"],
"Dinner": ["Chicken Vegetable Soup", "Hoki Fish w/Red Curry & Rice", "Steamed Zucchini", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Chipotle Bean Flauta", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "BBQ Chicken Pizza", "Grilled Pizza w/Pesto/Mozz/Arugula", "Herb Breadsticks", "Korean Beef Stir Fry with Brown Rice", "Vegetable Noodle Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Chicken & Sundried Tomato Pasta Salad", "Cornbread", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Pasta with Chicken", "Chorizo Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Ham and Swiss Sub", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Chipotle Chowder Corn", "House Salad", "Steamed Zucchini & Crookneck Squash", "Sautee Spinach & Onions w/Garlic", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Organic Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Honeydew Melon", "Cantaloupe", "Watermelon", "Organic Fresh Strawberry", "Make Your Own Waffle", "Cinnamon Maple Granola", "Granola Parfait", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Muffin", "Strawberry Cream Coffee Cake (w/nuts)", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Bacon", "Potatoes O'Brien", "Fresh Sauteed Spinach"],
"Lunch": ["Dragon Noodles", "Italian Wrap", "Sliced Turkey", "Sliced Ham", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Artichoke Pesto Flatbread", "Three Cheese Pizza on Wheat", "Spaghetti", "Roasted Vegetable Marinara Sauce", "Homemade Onion Bread", "Shortbread Espresso Cookie", "Lemon Pie", "Turkey Melt", "Red Beans and Rice", "Fresh Green Beans", "Tangy Apple Cabbage Slaw", "Grilled Chicken Taco", "Roasted Tomato Salsa", "Cilantro & Onion Mix", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Cheeseburger", "Buttermilk Pancakes", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Chipotle Aioli", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Pesto Pizza", "Pasta Penne with Chicken & Mushrooms", "Pasta Primavera w/Tomato Sauce", "Homemade Onion Bread", "Blueberry Crumb Pie", "BBQ Chicken Thigh", "Butternut Squash Risotto", "Black Beans", "Steamed Zucchini & Crookneck Squash", "Street Style Fish Taco", "Salsa", "Black Beans w/Brown Rice & Cilantro", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi Plate"],
}
},
],
},
{
"date": "2026-05-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "White Bean Basque Soup", "BBQ Chicken Sandwich", "Stir Fry Vegetables", "Roasted Potato Wedges", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Arroz con Leche", "Buttermilk Pancake", "Char Grilled Ham", "White Navy Beans", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Banana Walnut Coffee Cake (w/nuts)", "Strawberry Bread"],
"Dinner": ["Sticky Rice", "Pork Fried Rice", "Vegetable Chow Mein", "Vegetable Beef Soup", "Caesar Salad", "Beef Meatloaf", "Fresh Vegetable Medley", "Green Beans", "Risotto with Fresh Vegetables", "Mashed Potatoes", "Whole Wheat Penne Pasta", "Sausage and Mushroom Sauce", "Pasta Primavera", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Chicken Florentine Pizza w/White Sauce", "Black Olive Pizza on Wheat", "Cheese Pizza", "Bread Olive", "Devil's Food Cake with Icing"],
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
"Brunch": ["Pineapple", "Green Seedless Grape", "Watermelon", "Cinnamon Maple Granola", "Granola Cantaloupe Parfait", "Long Grain Rice", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Bacon Tomato Basil Pizza w/White Sauce", "Pasta with Grilled Vegetables", "Chicken with White Wine Garlic Sauce", "Whole Wheat Penne Pasta", "Flour Tortilla", "Orange Cranberry Muffin", "Bacon Egg & Sweet Potato Hash", "Breakfast Quesadilla", "Creamed Spinach", "Black Beans", "Tomato Rice Soup", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Pancakes", "Banana Pancakes", "Sausage Patty", "Roasted Breakfast Potatoes", "Roasted Vegetables"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Tomato Rice Soup", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Bacon Tomato Basil Pizza w/White Sauce", "Pasta with Grilled Vegetables", "Chicken with White Wine Garlic Sauce", "Penne Pasta", "Tres Leches Cake", "Wheat Germ Bread", "Cheese Enchilada", "Tamale Pie", "Mexican Rice", "Black Beans", "Grilled Zucchini & Tomatoes", "Chicken with Chermoula & Lemon", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Garlic & Ginger", "Grilled Ahi Tuna Bowl with Brown Rice", "Crunchy Onion Roll"],
}
},
],
},
{
"date": "2026-05-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Dilled Veggie Barley Soup", "Chicken Pot Pie", "Creole Beans and Rice", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Oatmeal", "Breakfast Quesadilla", "Sausage Biscuits & Gravy", "Black Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Raspberry Muffin", "Zucchini Walnut Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Tofu Teriyaki Rice Bowl", "Ham & Navy Bean Soup", "Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Mexican Rice", "Baked Acorn Squash", "Peas", "Pasta Carbonara", "Linguini Pasta", "Fresh Basil Pesto", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Garlic Pizza Sticks with Marinara", "Cheese Pizza", "Hawaiian Sweet Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Hearty Vegetable Soup", "Turkey Sub Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Spinach Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Raisin Buttermilk Scone", "Pumpkin & Walnut Muffin (w/nuts)"],
"Dinner": ["Miso Soup", "Char Grilled Pork Chop", "Steamed Vegetables & Rice", "Green Beans", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean and Rice Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne with Chicken & Mushrooms", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Broccoli Almond Salad (w/nuts)", "Graham Bread", "Italian Cream Cake"],
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
"Brunch": ["Organic Fresh Strawberry", "Watermelon", "Pineapple", "Honeydew Melon", "Cinnamon Maple Granola", "Honeydew & Berry Parfait", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Cheese Pizza", "Fluffy Whole Wheat Waffles", "Apple Cranberry Pancake Topping", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Flour Tortilla", "Cinnamon Coffee Cake", "Breakfast Burrito", "Refried Beans", "Fire Roasted Tomato Chipotle Salsa", "Ham & Cheddar Quiche", "Corn Chowder", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Machaca with Scrambled Eggs", "Roasted Breakfast Potatoes", "Thick Egg Bread French Toast", "Steamed Broccoli & Cauliflower"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Corn Chowder", "Cheese Pizza", "Bolognese Sauce with Pancetta", "Farfalle Pasta", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Sweet and Spicy Tofu", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Toll House Pie", "Whole Wheat French Bread", "Grilled Pork Taco", "Radish and Jalapeno Slaw", "Salsa de Tomatillo Verde", "Fresh Sauteed Spinach", "Black Beans", "Lettuce & Cheese &Tomatoes", "Korean Chicken Bulgogi", "Sticky Rice", "Indian Style Stew w/ButternutSquash", "Steamed Broccoli & Cauliflower", "Vegetable Roll", "California Club Sushi Plate"],
}
},
],
},
];
export default diningMenu
