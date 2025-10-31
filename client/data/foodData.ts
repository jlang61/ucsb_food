const diningMenu = [
{
"date": "2025-10-31",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Banana Pancake", "Bacon and Cheese Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cypriot Tyropita", "Assorted Bagels & Condiments"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Greek Salad", "French Potato Salad", "Arni Psito (Roasted Lamb)", "Steamed Zucchini", "Spanakopita w/ Phyllo", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "New England Clam Chowder", "Cheeseburger", "Grilled Vegetable Burger", "Grilled Ham & Swiss on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Baklava (w/nuts)", "Cheese Onion Roll", "Snickerdoodle"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cake", "Sauteed Kale", "Coriander Lime Aioli", "Pesto Zucchini Soup", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda", "Carrots with Lemon Butter", "Sauteed Vegetables Rice and Beans", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Pasta Shells w/Eggplant & Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Ricotta Pepper Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Banana Coffee Cake (w/nuts)"],
"Lunch": ["New England Clam Chowder", "Pulled Pork Buffalo Style Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Bean & Cheese Wet Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Pork Stir Fry w/Vegetables & Brown Rice", "Vegetable Noodle Stir Fry", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Black Bean Burger", "Grilled Cheese &Tomato on Wheat", "Krinkle Cut French Fries", "Caponata Salad", "Sour Cream & Chive Roll", "Ginger Cookie"],
"Dinner": ["Tomato Rice Soup", "Fish Cake", "Lemon Dill Sauce", "Bok Choy with Garlic & Ginger", "Mushroom Risotto", "Baked Potato", "Baked Potato", "Carnitas Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Penne Mostacioli", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "Israeli Couscous Salad", "Pesto Bread", "Cherry Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Double Chocolate Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Double Chocolate Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Sliced Cantalope", "Sliced Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola", "Make Your Own Waffle", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Cream Cheese Strudel", "Carrot Walnut Bread (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Sausage Patty", "Roasted Breakfast Potato", "Mixed Greens Side Salad"],
"Lunch": ["Thai & Peanut Coleslaw (w/nuts)", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Tuna Salad", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "New England Clam Chowder", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Mushroom Pizza on White", "Tomato Basil & Garlic Sauce", "Penne Pasta", "Pasta Carbonara", "Potato Bread", "Shortbread Cookie", "Peanut Butter Bar (w/nuts)", "Italian Wrap", "Grilled Corn Relish", "Black Beans", "Fresh Tomato Quiche", "Creamed Spinach", "Blackened Catfish", "Red Beans and Rice", "Steamed Veggies", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "Tofu Saltado with Green Aji Sauce", "Crinkle Cut French Fries", "Sausage Biscuits & Gravy", "Chipotle Aioli", "Housemade Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Sticky Rice", "New England Clam Chowder", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Potato Bread", "Cookies and Cream Cake", "Pork Chile Verde Taco", "Calabaza con Queso", "Avocado Crema", "Cilantro & Onion Mix", "Refried Beans", "Chicken with Chermoula & Lemon", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-11-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Genoa Salami", "Sliced Turkey Pastrami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "White Bean Basque Soup", "Japanese Chicken Curry", "Japanese Curry", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Oatmeal", "Cage Free Scrambled Eggs with Cheese", "Char Grilled Ham", "Tater Tots", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Ginger Beef Stir Fry", "Vegetable & Tofu Stir Fry", "Ham & Navy Bean Soup", "Caesar Salad", "Roast Beef", "Au Jus", "Polenta with Marinara Sauce", "Peas", "Sauteed Button Mushrooms", "Whole Wheat Spaghetti", "Red Clam Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chickpea Vegetable Soup", "Buffalo Chicken Drumstick", "Mixed Vegetables", "Baked Potato", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chinese Chicken Salad (w/nuts)", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Lemon Scone"],
"Dinner": ["Pasta Fazool Soup", "Honey Baked Chicken", "Steamed Green Beans", "Rice Pilaf", "Baked Potato", "Ground Beef Soft Taco", "Black Bean & Rice Quesadilla", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Lemon Ginger Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Arugula Salad with Almond (w/nuts)", "Whole Wheat Roll", "Brownie & Walnut Pie (w/nuts)"],
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
"Brunch": ["Watermelon", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Baby Spinach", "Brown Rice", "Salami Pizza", "Chilaquiles (No Egg)", "Linguini Pasta", "Greek Tomato Sauce", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Apple Crisp", "Thick Focaccia Bread", "Char Grilled Chicken Thigh", "Four Bean Stew", "Black Beans", "Steamed Fresh Broccoli", "Roasted Potato Wedges", "Beef Enchilada", "Lettuce/Cheese/Tomatoes", "Vegetarian Tostada", "Fire Roasted Tomato Salsa", "Sauteed Cabbage & Carrots", "Tempura Onion Sushi Plate"],
}
},
],
},
{
"date": "2025-11-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Caesar Salad", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Apple Cinnamon Pancake", "Chorizo and Eggs", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Blueberry Muffin", "Banana Choc Chip Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Summer Vegetables", "Vegetable Egg Roll", "Beef Albondigas Soup", "Caesar Salad", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Cauliflower & Broccoli Mix", "Rice with Cilantro & Onions", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Pearl Barley", "Ham & Cheese Pizza", "Cheese Pizza on White", "Pesto and Vegetable Pizza on Wheat", "Key Lime Pie", "Jalapeno Cornbread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Far East Vegetable Soup", "Grilled Roast Beef & Jack Sandwich", "Corn", "Baked Potato", "Baked Sweet Potato", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Macaroni Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Blueberry Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Potato Cheese Soup", "Pork Loin Roast with Garlic & Ginger", "Carrots & Broccoli", "Roasted Potato Wedges", "Baked Potato", "Chicken Bean & Rice Burrito", "Grilled Vegetable Tostada", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomato & Roasted Corn Salsa", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Spicy Basil Beef", "Teriyaki Tofu Stir Fry", "Wild Rice Blend", "Long Grain Rice", "Tangy Cool Noodle Salad", "Pesto Rolls", "Boston Cream Pie"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Cinnamon Maple Granola", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Tortilla Soup", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Sweet and Spicy Tofu", "Three Cheese Pizza on White", "Apple Cranberry Pancake Topping", "Fluffy Whole Wheat Waffles", "Linguini & Bacon/Tomato Cream Sauce", "Flour Tortilla", "Chocolate Chip Coffee Chip", "Tuna Melt", "Pita Sandwich w/Hummus & Tabouli", "Mashed Yams", "Black Beans", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Steamed Fresh Broccoli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Tortilla Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Tomato Basil Pizza on White", "White Clam Sauce", "Linguini Pasta", "Penne Pasta with Pesto", "Cornmeal Berry Cake", "Crusty French Bread", "Turkey and Bean Tostada", "Avocado Cream", "Mexican Rice", "Black Beans", "Sauteed Cabbage & Carrots", "Vietnamese Chix BBQ Sub (Banh Mi)", "Vegetable Fried Rice", "Broccoli Spinach Bok Choy Stir Fry", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-11-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Pork with Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Cucumber & Onion Salad", "Waldorf Walnut Salad (w/nuts)", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Potato Roll", "Killer Walnut Brownie (w/nuts)", "Cookies 'n Cream Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Marmite Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cream Cheese Pie", "Cracked Wheat Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Bagels-Breads & Cereals- See for Choices", "Banana Nut Bread  (w/nuts)"],
"Lunch": ["Tortilla Soup", "Veggie Sandwich w/Tomato Spread", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Vegetable Burrito", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Creamy Bolognese Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Grilled Chicken Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Shoestring French Fries", "Asian Slaw", "Ricotta Pepper Roll", "Chocolate Volcano Cupcake"],
"Dinner": ["Tomato Rice Soup", "Roast Beef", "Orzo Pasta with Vegetables", "Fresh Sauteed Spinach", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Roasted Vegetable Quesadilla", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Thai Chicken & Vegetable Curry", "Vegetable Curry", "Wild Rice Blend", "Long Grain Rice", "Jicama Salad", "Potato Bread", "Pumpkin Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Chorizo Breakfast Burrito", "Creamy Chicken Marsala with Pasta", "Spaghetti with Pork Marinara & Cheese", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "Classic Miso Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Chorizo Breakfast Burrito", "Creamy Chicken Marsala with Pasta", "Spaghetti with Pork Marinara & Cheese", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Black Bean Chili Rice & Garlic Chip", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu", "Classic Miso Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Garlic Spinach", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Honeydew Melon", "Pineapple", "Cantaloupe", "Make Your Own Waffle", "Granola Parfait", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Lemon Yogurt Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Turkey Melt", "Grilled Chicken Breast", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Greek Tomato Sauce", "Farfalle Pasta", "White Wine Garlic Sauce with Chicken", "Linguini Pasta", "Hawaiian Sweet Bread", "Peanut Butter Cookie (w/nuts)", "Butterscotch Pecan Bar (w/nuts)", "BBQ Pork Sandwich", "Mid Western Coleslaw", "French Potato Salad", "Black Beans", "Bleu Cheese Dressing", "Celery Stick", "Roast Pork Loin with Spiced Apples", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Salmon Roll", "Crunchy Onion Roll", "Tuna Melt", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Raita Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Pineapple & Jalapeno Pizza on Wheat", "Marinara Sauce with Meatballs", "Spaghetti", "Greek Tomato Sauce", "Farfalle Pasta", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Cheese Quesadilla with Chiles", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Chicken Shoyu", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Crunchy Onion Roll"],
}
},
],
},
{
"date": "2025-11-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Turkey", "Hummus", "Pita Chips", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Greek Salad", "Yogurt Potato Salad", "Grilled Ono with Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Thai Chicken Curry Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Classic Miso Soup", "Char Burger", "Black Bean Burger", "Chicken Gyro", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Refried Beans", "Couscous", "Tsoureki (Greek Easter Bread)", "Pecan Pie Bar (w/nuts)", "Banana Chocolate Bar"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Fresh Corn on the Cob", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Medley", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Coconut Tofu Curry", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese Sandwich on WW", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Killer Brownie"],
"Dinner": ["Fresh Vegetable Soup", "Chicken Mushroom Picatta Pasta", "Vegetable Cutlet", "Sauteed Swiss Chard with Garlic", "Rice Pilaf", "Baked Potato", "Beef Sope", "Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce(w/nut)", "Veggie Stir Fry w/Peanut Sauce(w/nuts)(v", "Long Grain Rice", "Brown Rice", "Quinoa Black Bean Salad", "Sourdough Rounds", "Cream Cheese Pie"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Cantaloupe", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Cantaloupe Parfait", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Roll", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie", "Grilled Chicken Taco", "Cilantro Lime Crema", "Fall Vegetable Medley", "Cilantro & Onion Mix", "Refried Beans", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Potato Roll", "New York Style Crumb Cake", "Chicken Tetrazzini", "Pasta Shells w/Eggplant & Marinara", "Carrots with Fresh Thyme", "Steamed Fresh Broccoli", "Pork Loin Roast With Garlic and Ginger", "Teriyaki Sauce", "Vegetable Fried Rice", "Braised Bok Choy", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-11-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable & Tofu Stir Fry", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Chicken Parmigiana", "Mixed Vegetables", "Green Bean Almondine (w/nuts)", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Spicy Navy Bean Soup", "Grilled Turkey Burger", "Grilled Vegetable Burger", "Grilled Cheese on White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Brown Butter PB Choc Chip Cookie(w/nut(v", "Caramel Flan"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Coconut Curry", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Salad Arugula & Sweet Potato (w/nuts)", "Chicken Marsala", "Wild Mushroom Turnover", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Garden Vegetable Marinara", "Spaghetti Pasta", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Sourdough Bread", "Coconut Poke Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Pinch Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hot and Sour Soup", "Fish Po Boy Wrap", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Carnitas Taco", "Potato "Chorizo" Burrito", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Margherita Pizza", "Cheese Pizza with Chard", "Herb Breadsticks", "Sesame Pork with Broccoli", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Grilled Turkey Burger on Wheat w/Jack", "Malibu Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Pasta Salad w/Chicken & Sundried Tomato", "Graham Roll", "Rice Krispie Treat"],
"Dinner": ["Hearty Vegetable Soup", "Turkey Meatloaf", "Steamed Green Beans", "Garlic Mashed Potatoes", "Beef Gravy", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Potato Gorda with Black Beans", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Margherita Pizza", "Cheese Pizza with Chard", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Penne Pasta", "Garden Vegetable Marinara Sauce", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Onion Bread", "German Apple Cake w/Crm Chse (w/nuts) (v"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Honeydew", "Watermelon", "Pineapple", "Granola Raspberry Parfait", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cornbread with Honeybutter", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Chicken Chipotle Wrap", "Tuna Salad", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Moroccan Lentil Soup", "Baked Potato", "Brown Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Flatbread", "Antipasto Pizza", "Light Tomato Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Walnut Cupcakes (w/nuts)", "Sweet & Sour Pork", "Sticky Rice", "Black Beans", "Steamed Broccoli & Cauliflower", "Vegetable Tofu Stir Fry", "Teriyaki Chicken Stir Fry", "Long Grain Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Plate", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Whole Wheat Banana Pancake", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Moroccan Lentil Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Antipasto Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Light Tomato Sauce", "Penne Pasta", "Marble Cake", "Thick Focaccia Bread", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Roasted Potato Wedges", "Pinto Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Tempura Fish w/Tamari Ginger Sauce", "Sticky Rice", "Sesame Asian Slaw Salad", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-11-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Turkey Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cinnamon Roll", "Raspberry Scone"],
"Lunch": ["Sliced Ham", "Hummus", "Pita Chips", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Honey Baked Chicken Quarters", "Steamed Fresh Carrots", "Spinach Quiche", "Roasted  Red Potato Wedges", "Taco Salad", "Jicama Pico De Gallo", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Chocolate Caramel Swiss Cupcake", "Olive Whole Wheat Bread", "Galaktoboureko (Greek Pudding)"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken General Tso's", "Vegetable & Tofu Stir Fry", "Greens and Beans Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Steamed Carrots", "Swiss Chard with Fresh Garlic", "Jicama Pico De Gallo", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Rosemary Asiago Sourdough Bread", "Chocolate Flourless Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["Minestrone Soup", "Roasted Pork Loin Sandwich w/Gouda", "Italian Green Beans", "Baked Potato", "Chicken Mole Taco", "Italian Zucchini Taco", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Creamy Chipotle Salsa", "Chicken Garlic Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "Creamy Beef Ragu & Pasta", "Spaghetti Cacio e Pepe", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Chicken Burger", "Shoestring French Fries", "Citrus Caprese Salad", "Italian Butter Walnut Cookie (w/nuts)", "Olive Roll"],
"Dinner": ["Split Pea Soup", "Grilled Chicken Quarters", "Yukon Gold Mashed Potatoes", "Chicken Gravy", "Orange Glaze Carrots w/Herbs", "Baked Potato", "Braised Brisket Taco", "Cheese Pizza", "Enchilada Cheese Casserole", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean & Avocado Salsa", "Chicken Garlic Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne with Chicken & Mushrooms", "Baked Ziti", "Long Grain Rice", "Brown Rice", "Red Potato Salad with Dill", "Jalapeno Cornbread", "Choc Sweet Potato Cake w/Mocha Icing"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Quinoa Breakfast Bowl (w/nuts)", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Cabbage & Carrots"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing", "Hummus & Avocado Lettuce Wrap", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Tuna Salad", "Sliced Turkey Pastrami", "Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Grilled BBQ Chicken Pizza", "Tomato Basil & Garlic Sauce", "Spaghetti", "Penne Pasta with Pesto", "Crusty French Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Grilled Achiote Chicken Thigh", "Roasted Potato Wedges", "Pinto Beans", "Fresh Green Beans with Garlic", "Chicken Tikka Masala", "Basmati Rice", "Roasted Red Onion &  Zucchini", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Grilled Cheese Chile & Veggie on Sour(v", "Chipotle Aioli", "Sweet &Tangy Pickled Red Onion", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Smoked Barbeque Chicken Pizza", "Alburro Sauce", "Pasta Spaghetti", "Pumpkin Seed Pesto", "Penne Pasta", "Orange Walnut Olive Oil Cake (w/nuts)", "Crusty French Bread", "Meatloaf", "Classic BBQ Sauce", "Mashed Red Potatoes w/ Garlic", "Black Beans", "Mushroom Rajas & Corn", "Fresh Spinach with Garlic", "Burmese Chicken Coconut Stew", "Latin Bowl", "Sticky Rice", "Roasted Cauliflower with Cumin", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
