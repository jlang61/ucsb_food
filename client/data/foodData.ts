const diningMenu = [
{
"date": "2025-12-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin", "Organic Nonfat Milk", "Honey", "Banana", "Chunky Peanut Butter"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Pork with Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Roasted Tomato Salsa", "Cucumber & Onion Salad", "Waldorf Walnut Salad (w/nuts)", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu", "Grilled Turkey Burger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Potato Roll", "Killer Walnut Brownie (w/nuts)", "Cookies 'n Cream Cake", "Water", "Fuji Apple", "Split Pea Soup", "Cracked Wheat Bread", "Balsamic Vinegar", "Extra Virgin Olive Oil", "Red Beet", "Cherry Tomato", "Shredded Carrot", "Canned Black Bean", "Garbanzo Bean", "Daikon Sprout", "Shredded Carrot", "Swiss Chard with Fresh Garlic"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Chicken Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Pork Chile Verde and Rice Burrito", "Corn", "Steamed Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Marmite Caesar Salad", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cream Cheese Pie", "Cracked Wheat Bread", "Organic Nonfat Milk", "Navel Orange", "Tortilla Chicken Soup", "Couscous Salad with Tomato & Herb", "Baked Sweet Potato", "Steamed Zucchini"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Banana Nut Bread  (w/nuts)"],
"Lunch": ["Chickpea Vegetable Soup", "Veggie Sandwich with Tomato Spread", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Vegetable Burrito", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Creamy Bolognese Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Shoestring French Fries", "Asian Slaw", "Ricotta Pepper Roll", "Ginger Cookie"],
"Dinner": ["Minestrone Soup", "Roast Beef", "Vegetable Rice Pilaf", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Grilled Vegetable Quesadilla", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Indian Chicken Coconut Curry", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Potato Bread", "Pumpkin Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Honeydew Melon", "Pineapple", "Cantaloupe", "Make Your Own Waffle", "Granola Parfait", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Lemon Yogurt Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Turkey Melt", "Grilled Chicken Breast", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Greek Tomato Sauce", "Farfalle Pasta", "Chicken with White Wine Garlic Sauce", "Linguini Pasta", "Hawaiian Sweet Bread", "Peanut Butter Cookie (w/nuts)", "Butterscotch Pecan Bar (w/nuts)", "BBQ Pork Sandwich", "Mid Western Coleslaw", "French Potato Salad", "Black Beans", "Bleu Cheese Dressing", "Celery Stick", "Roast Pork Loin with Spiced Apples", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Salmon Roll", "Crunchy Onion Roll", "Tuna Melt", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Raita Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Pineapple & Jalapeno Pizza on Wheat", "Marinara Sauce with Meatballs", "Spaghetti", "Greek Tomato Sauce", "Farfalle Pasta", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Cheese Quesadilla with Chiles", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Chicken Shoyu", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Crunchy Onion Roll"],
}
},
],
},
{
"date": "2025-12-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin", "Organic Nonfat Milk", "Fuji Apple", "Raisin", "Granulated Peanut", "Oatmeal"],
"Lunch": ["Sliced Turkey", "Hummus", "Pita Chips", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Greek Salad", "Yogurt Potato Salad", "Common Thresher Shark w/Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Thai Chicken Curry Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Classic Miso Soup", "Char Burger", "Black Bean Burger", "Quesadilla", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Refried Beans", "Couscous", "Tsoureki (Greek Easter Bread)", "Pecan Pie Bar (w/nuts)", "Banana Chocolate Bar", "Organic Soy Milk", "Fuji Apple", "Whole Plain Greek Yogurt", "Sliced Almond", "Fresh Garden Pasta Salad", "Steamed Crookneck Squash"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Fresh Corn on the Cob", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Confetti Cake", "Organic Nonfat Milk", "Mandarin Orange", "Broccoli Stuffed Tomato", "Baked Sweet Potato", "Apricot Chutney", "Rotisserie Pork Loin"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Medley", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Coconut Tofu Curry", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese on Wheat", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Killer Brownie"],
"Dinner": ["Vegetable Noodle Soup", "Chicken Mushroom Picatta Pasta", "Vegetable Cutlet", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Beef Sope", "Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce(w/nut)", "Veggie Stir Fry w/Peanut Sauce(w/nuts)(v", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Sourdough Rounds", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Cantaloupe", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Cantaloupe Parfait", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Organic Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Roll", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie", "Grilled Chicken Taco", "Cilantro Lime Crema", "Fall Vegetable Medley", "Cilantro & Onion Mix", "Refried Beans", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Whole Wheat Penne Pasta", "Chicken with White Wine Garlic Sauce", "Potato Roll", "New York Style Crumb Cake", "Chicken Tetrazzini", "Pasta Shells w/Eggplant & Marinara", "Carrots with Fresh Thyme", "Steamed Fresh Broccoli", "Pork Loin Roast With Garlic and Ginger", "Teriyaki Sauce", "Vegetable Fried Rice", "Braised Bok Choy", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-12-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Brunch": ["Organic Soy Milk", "Banana", "Chunky Peanut Butter", "Grape Jelly"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable & Tofu Stir Fry", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Tonkatsu", "Mixed Vegetables", "Green Bean Almondine (w/nuts)", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Brown Butter PB Choc Chip Cookie(w/nut(v", "Caramel Flan"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Salad Arugula & Sweet Potato (w/nuts)", "Chicken Marsala", "Wild Mushroom Turnover", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Spaghetti Pasta", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Sourdough Bread", "Coconut Poke Cake", "Organic Nonfat Milk", "Fuji Apple", "Green Beans", "Brown Rice", "Grilled Tilapia w/Italian Spice"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Pinch Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Noodle Soup", "Chicken Caesar Wrap", "Orange Glaze Carrots w/Herbs", "Baked Potato", "Baked Sweet Potato", "Chili Lime Grilled Chicken Taco", "Potato Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard", "Herb Breadsticks", "Chicken Tikka Masala", "Tortellini with Creamy Pesto Sauce", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Malibu Burger", "Chili Dog", "Steak Fries", "Chinese Chicken Salad (w/nuts)", "Pesto Rolls", "Brownie & Walnut Pie (w/nuts)"],
"Dinner": ["Hearty Vegetable Soup", "Meatloaf", "Steamed Green Beans", "Garlic Mashed Potatoes", "Beef Gravy", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Potato Gorda with Black Beans", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Penne Pasta", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Onion Bread", "German Apple Cake w/Crm Chse (w/nuts) (v"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Honeydew", "Watermelon", "Pineapple", "Granola Raspberry Parfait", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cornbread with Honeybutter", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Chicken Chipotle Wrap", "Tuna Salad", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Moroccan Lentil Soup", "Baked Potato", "Brown Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Flatbread", "Antipasto Pizza", "Light Tomato Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Walnut Cupcakes (w/nuts)", "Sweet & Sour Pork", "Sticky Rice", "Black Beans", "Steamed Broccoli & Cauliflower", "Vegetable Tofu Stir Fry", "Teriyaki Chicken Stir Fry", "Long Grain Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Plate", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Whole Wheat Banana Pancake", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Moroccan Lentil Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Antipasto Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Creamy Rosemary Sauce", "Penne Pasta", "Marble Cake", "Thick Focaccia Bread", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Roasted Potato Wedges", "Pinto Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Tempura Fish w/Tamari Ginger Sauce", "Sticky Rice", "Sesame Asian Slaw Salad", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-12-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Turkey Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cinnamon Roll", "Raspberry Scone"],
"Brunch": ["Water", "Navel Orange", "Cabbage Soup", "Baked Sweet Potato", "Carnitas Taco"],
"Lunch": ["Sliced Ham", "Hummus", "Pita Chips", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Honey Baked Chicken Quarters", "Steamed Fresh Carrots", "Spinach Quiche", "Roasted  Red Potato Wedges", "Taco Salad", "Jicama Pico De Gallo", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Snickerdoodle", "Olive Whole Wheat Bread", "Galaktoboureko (Greek Pudding)"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken General Tso's", "Vegetable & Tofu Stir Fry", "Greens and Beans Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Steamed Carrots", "Swiss Chard with Fresh Garlic", "Jicama Pico De Gallo", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Rosemary Asiago Sourdough Bread", "Chocolate Flourless Cake", "Water", "Fuji Apple", "Vegetable Stir Fry", "Long Grain Rice", "Turkey Breast"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Banana Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Cranberry Orange Muffin"],
"Lunch": ["Tomato Rice Soup", "Roasted Pork Loin Sandwich w/Gouda", "Vegetable Medley", "Baked Potato", "Chicken Mole Taco", "Chipotle Bean Flauta", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Kung Pao Chicken with Peanuts (w/nuts)", "Tofu Stir Fry with Black Bean Sauce", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Cheese on Sourdough", "Shoestring French Fries", "Tabouli Salad", "Olive Roll", "Yellow Cupcake with Buttercream"],
"Dinner": ["Curried Chicken Soup", "Grilled Chicken Quarters", "Orzo Pasta with Vegetables", "Zucchini and Crookneck Squash", "Baked Potato", "Chicken & Bean Chimichanga", "Black Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Beef Chop Suey", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Cornbread", "Fresh Orange Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Quinoa Breakfast Bowl (w/nuts)", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Cabbage & Carrots"],
"Lunch": ["Greek Salad", "Halloumi Sandwich w/Veggies & Pesto", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Sliced Turkey", "Sliced Turkey Pastrami", "Baked Sweet Potato", "Basmati Rice", "Greek Avgolemono Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Siciliana Pizza", "Pasta Cacio e Pepe", "Linguine Alle Vongole (Pasta w/Clams)", "Rosemary Olive Bread", "Walnut and Pistachio Baklava (w/nuts)", "Salted Chocolate Chip Tahini Cookie", "Chicken Provencal w/Olives & Tomatoes", "French Style Pilaf Rice", "Vegetable Tian From Provence", "White Beans", "Spanish Seafood Paella", "Tortilla Espanola", "Gazpacho", "Moroccan Kefta with Herb Yogurt Sauce", "Moroccan Basmati Rice", "Moroccan Vegetable Tagine", "Couscous", "Moroccan Zaalouk", "Pita Chips", "Chipotle Aioli", "Harissa Sauce", "Sweet &Tangy Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Smoked Barbeque Chicken Pizza", "Alburro Sauce", "Pasta Spaghetti", "Pumpkin Seed Pesto", "Penne Pasta", "Orange Walnut Olive Oil Cake (w/nuts)", "Crusty French Bread", "Meatloaf", "Classic BBQ Sauce", "Mashed Red Potatoes w/ Garlic", "Black Beans", "Mushroom Rajas & Corn", "Fresh Spinach with Garlic", "Burmese Chicken Coconut Stew", "Latin Bowl", "Sticky Rice", "Roasted Cauliflower with Cumin", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2025-12-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Chicken Sausage Link", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Caramel Apple Scones", "Organic Italian Dark Roast Coffee", "Banana", "Diced Potatoes", "Scrambled Egg Whites", "Oatmeal", "Sliced Almond", "Brown Sugar"],
"Lunch": ["Sliced Ham", "Sliced Pepper Jack Cheese", "Hummus", "Tortilla Chip", "Tacos Al Pastor", "Cactus Taco", "Pinto Beans", "Bulgogi - Korean Grilled Beef Taco", "Mango Habanero Kimchi", "Sigeumchi Namul", "Kongnamul Muchim", "Egyptian Watermelon Feta Salad", "Roasted Fall Vegetable Kale Salad", "French Bread Peperoni Pizza", "Quattro Formaggio Pizza on Wheat", "Red Curry Coconut Cashew Soup(w/nut)(vgn", "Pork Sisig Taco", "Chicken Gyro with Fries", "Gardenburger", "Shoestring Fries", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Crepes Bar", "Water", "Fuji Apple", "Festive Rice Fruit Salad (w/nuts)", "Whole Green Beans", "Baked Sweet Potato", "Spicy Tofu w/Vegetables & Noodles"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Blackened Mahi Mahi", "Vegetable Pad Thai w/Peanut(w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Spinach Pecan Bacon & Cran Salad (w/nut)", "Rigatoni Pasta", "Sausage and Mushroom Sauce", "Fettucine Alfredo", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "Garlic Roll", "Carrot Cake (w/nuts)", "Water", "Banana", "Fasolada Soup", "Corn", "Brown Rice", "Fish Herb & Garlic Crusted Tilapia"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cheese Blintz", "Strawberry Sauce", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Fish Cake", "Lemon Beurre Blanc", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Bean & Rice Burrito", "Potato Vegetable Taco", "Rice with Corn & Roasted Chiles", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Pork Stir Fry with Orange Sauce", "Vegetable Chow Mein", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Swiss Cheese on Wheat", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Sundried Tomato Roll", "Toll House Bar"],
"Dinner": ["Vegetable Rice Soup", "Char Grilled Pork Chop", "Herb Polenta with Mushroom Ragout", "Bok Choy with Garlic & Ginger", "Oven Browned Potatoes", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Wet Burrito", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Green Bean Provencal Salad", "Garlic Roll", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pineapple Fried Rice", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Teriyaki Tofu Stir Fry", "Split Pea Soup w/Smokey Tofu", "House Salad", "Roasted Broccoli", "Sauteed  Zucchini & Yellow Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Pineapple", "Cantaloupe", "Honeydew Melon", "Make Your Own Waffle", "Honeydew & Berry Parfait", "Cinnamon Maple Granola", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Italian Tomato Panini", "Sliced Turkey", "Sliced Ham", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Potato", "Beef and Barley Soup", "Wild Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sausage Mushroom Pizza", "Spicy Marinara Sauce", "Penne Pasta", "Alburro Sauce", "Pasta Spaghetti", "Whole Wheat French Bread", "Oatmeal Craisin Cookie", "Cream Cheese Brownie Pie", "Arroz con Pollo", "Black Beans", "Vegetable Black Bean Chili", "Sauteed Kale & Collard Greens", "Chicken General Tso's", "Sticky Rice", "Fresh Vegetable Medley", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Patty Melt Sandwich", "Malibu Burger", "Whole Wheat Pancake", "Crinkle Cut French Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Beef and Barley Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sausage Mushroom Pizza", "Penne Pasta", "Roasted Vegetable Marinara Sauce", "Fettuccine Alfredo", "Banana Nut Cake (w/nuts)", "Whole Wheat French Bread", "Pork Loin Roast w/Balsamic Glaze", "Roasted Potato Wedges", "Pinto Beans", "Baked Rigatoni", "Steamed Broccoli & Cauliflower", "Grilled Chicken Taco", "Salsa", "Enchilada Rajas", "Spanish Rice with Cilantro", "Refried Black Beans", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-12-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancake", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Brunch Coffee Cake", "Banana Choc Chip Muffin", "Organic Nonfat Milk", "Raisin Bran Cereal", "Unsalted Butter", "Fuji Apple"],
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Mixed Vegetables", "Grilled Pork Chops", "Country Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Lunch": ["Organic Soy Milk", "Navel Orange", "Grilled Chicken Taco", "Shredded Carrot", "Fresh Spinach with Garlic", "Chili and Noodles"],
"Dinner": ["Sticky Rice", "Chicken & Vegetable Stir Fry", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Sauteed Zucchini Sticks", "Ratatouille with White Beans", "Oven Browned Potatoes", "Rotini Pasta", "Chicken Marinara Sauce", "Whole Wheat Spaghetti", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Rosemary Roll", "Very Chocolate Cake w/Chocolate Icing", "Organic Nonfat Milk", "Fuji Apple", "Brazilian Black Bean Salad", "Steamed Crookneck Squash", "Traditional Cheese Pizza on Wheat"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Brunch": ["Soup Potato Cheese & Chile", "Patty Melt", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Sausage Pizza", "Pineapple Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Greek Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Chocolate Chip Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Corn Chowder", "Roasted Petite Tender", "Vegetable Medley", "Mashed Red Potatoes", "Beef Gravy", "Baked Potato", "Turkey Hard Taco", "Black Bean Tostada", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage Pizza", "Pineapple Pizza", "Herb Breadsticks", "Sweet & Sour Pork Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Kale Caesar Salad", "Crusty French Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
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
"Brunch": ["Watermelon", "Grapefruit Halves", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl (w/nuts)", "Brown Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Daikon Radish", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Linguine w/Chicken/Leeks/Tom", "Penne Pasta with Pesto", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Pinto Beans", "Beef Empanada wtih Aji Amarillo", "Roasted Cauliflower w/Garlic", "Cream of Broccoli Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Steamed Zucchini & Crookneck Squash"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Vegetable Empanada", "Penne Pasta with Pesto", "Pasta Carbonara", "Confetti Cake with Buttercream", "Cheese Bread", "Chicken and Black Bean Burrito", "Macaroni & Cheese", "Chili Bean", "Steamed Fresh Broccoli", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Garlic & Ginger", "Spicy Scallop Sushi Bowl", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-12-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Organic Breakfast Blend Tea", "Water", "Unsalted Butter", "Banana", "Granulated Peanut", "Honey", "Cheerios Cereal", "Whole Plain Greek Yogurt"],
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Chicken Vindaloo", "Basmati Rice", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "Cage Free Egg Scrambled w/Cheese/Mush", "French Toast", "Char Grilled Ham", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "White Navy Beans", "Make Your Own Waffle", "Churro Coffee Cake", "Chocolate Pistachio Biscotti (w/nuts)"],
"Lunch": ["Water", "Navel Orange", "Lentil Soup", "Cactus Taco", "Shredded Carrot", "Black Beans"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Stir Fry Noodles with Vegetables", "Tomato Rice Soup", "Caesar Salad", "Chicken Pot Pie", "Baby Carrots with Tarragon", "Corn", "Risotto with Fresh Vegetables", "Linguini Pasta", "White Clam Sauce", "Penne Pasta", "Arabiata Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)", "Organic Nonfat Milk", "Fuji Apple", "Sauteed Fresh Cauliflower", "Whole Green Beans", "Long Grain Rice", "Indian Chicken Coconut Curry"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Gumbo Soup", "Chicken Caesar Wrap", "Fresh Steamed Carrots", "Baked Potato", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Apple Cinnamon Pancake", "Sausage Patty", "Sliced Potato with Onions", "Multi-Grain Waffle", "Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Chocolate Bread"],
"Dinner": ["Spinach Lentil Soup", "Herb Chicken Quarters", "Sauteed Green Beans with Garlic", "Roasted Potato Halves", "Baked Potato", "Chicken Soft Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Spaghetti Pasta", "Marinara with Meatballs", "Scallion Cream Sauce", "Bowtie Pasta", "Long Grain Rice", "Brown Rice", "Three Bean Salad", "Whole Wheat Bread", "French Peach Crumb Pie"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Honey Butter", "Cornmeal Waffle", "Flour Tortilla", "Raspberry Swirl Coffee Cake(w/nuts)", "Chicken Chile Verde & Black Bean Burrito", "Pinto Beans", "Grilled Cheese on Sourdough", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs w/Vegetables", "Buttermilk Pancakes", "Sauteed Zucchini with Garlic", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Mushroom Cream Sauce", "Farfalle Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Mole", "Mexican Rice", "Refried Beans", "Cilantro & Onion Mix", "Fresh Sauteed Spinach", "Lettuce & Cheese &Tomatoes", "Chicken Parmigiana", "Basmati Rice", "Steamed Broccoli & Cauliflower", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
