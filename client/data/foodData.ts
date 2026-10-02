const diningMenu = [
{
"date": "2026-10-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Bacon and Cheese Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cypriot Tyropita", "Assorted Bagels & Condiments"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Greek Salad", "Jalapeno Popper Roasted Potato Salad", "Arni Psito (Roasted Lamb)", "Steamed Zucchini", "Spanakopita", "Bacon Tomato Basil", "Cheese Pizza", "Quattro Formaggio Pizza on Wheat", "New England Clam Chowder", "Cheeseburger", "Veggie Sweet Potato Burger", "Grilled Ham & Swiss on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Walnut Baklava (w/nuts)", "Cheese Onion Roll", "Pumpkin Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cake", "Sauteed Kale", "Coriander Lime Aioli", "Pesto Zucchini Soup", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda", "Carrots with Lemon Butter", "Sauteed Vegetables Rice and Beans", "Fettuccine", "Chicken with White Wine Garlic Sauce", "Eggplant & Marinara with Pasta", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Bacon Tomato Basil", "Cheese Pizza", "Quattro Formaggio Pizza on Wheat", "Ricotta Pepper Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat w/Flaxseed", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Chicken Sausage Link", "Potatoes O'Brien", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Banana Coffee Cake", "Bran Muffin"],
"Lunch": ["New England Clam Chowder", "Pulled Pork Buffalo Style Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Bean & Cheese Wet Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Pork Stir Fry w/Vegetables & Brown Rice", "Vegetable Noodle Stir Fry", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Grilled Cheese & Tomato on Wheat", "Krinkle Cut French Fries", "Caponata Salad", "Sour Cream & Chive Roll", "Blonde Walnut Brownie (w/nuts)"],
"Dinner": ["Tomato Rice Soup", "Herb & Garlic Crusted Catfish", "Sauteed Squash with Herbs", "Mushroom Risotto", "Baked Sweet Potato", "Baked Potato", "Carnitas Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Penne Mostacioli", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "French Bistro Salad with Pepitas", "Pesto Bread", "Cherry Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Sliced Cantalope", "Sliced Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola", "Make Your Own Waffle", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Orange Cranberry Muffin", "Blueberry Scone", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Sausage Patty", "Roasted Breakfast Potato", "Steamed Carrots & Zucchini"],
"Lunch": ["Thai Coleslaw", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Tuna Salad", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "Broccoli Cheese Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Mushroom Pizza on White", "Tomato Basil & Garlic Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Crusty French Bread", "Shortbread Cookie", "Peanut Butter Bar (w/nuts)", "Italian Wrap", "Grilled Corn Relish", "Black Beans", "Fresh Tomato Quiche", "Creamed Spinach", "Blackened Catfish", "Red Beans and Rice", "Steamed Veggies", "Spicy Shrimp Sushi", "Asparagus & Egg Roll", "Hamburger", "Tofu Saltado with Green Aji Sauce", "Crinkle Cut French Fries", "Buttermilk Pancakes", "Sausage Biscuits & Gravy", "Chipotle Aioli", "Housemade Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Sticky Rice", "Broccoli Cheese Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Crusty French Bread", "Coconut Cream Pie", "Pork Chile Verde Taco", "Calabaza con Queso", "Avocado Crema", "Cilantro & Onion Mix", "Refried Beans", "Chicken with Chermoula & Lemon", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2026-10-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Genoa Salami", "Sliced Turkey Pastrami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "White Bean Basque Soup", "Japanese Chicken Curry", "Japanese Curry", "Pickled Radish - Fukujin Zuke", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Caesar Salad", "Oatmeal", "Banana Pancake", "Char Grilled Ham", "Tater Tots", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Ginger Beef Stir Fry", "Tofu & Vegetable Stir Fry", "Ham & Navy Bean Soup", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Cauliflower & Broccoli Mix", "Sinangag - Garlic Fried Rice", "Caesar Salad", "Whole Wheat Spaghetti", "Red Clam Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza", "Vegetable Pizza on Wheat", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Buffalo Chicken Drumstick", "Mixed Vegetables", "Baked Potato", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Texas French Toast", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chinese Chicken Salad", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Lemon Scone"],
"Dinner": ["Pasta Fazool Soup", "Honey Baked Chicken", "Steamed Green Beans", "Rice Pilaf", "Baked Potato", "Ground Beef Taco", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Lemon Ginger Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Whole Wheat Roll", "Cream Cheese Brownie Pie"],
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
"Brunch": ["Watermelon", "Seedless Red Grape", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola", "Oatmeal", "Quinoa", "Make Your Own Waffle", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Baby Spinach", "Brown Rice", "Onion Pizza", "Chilaquiles (No Egg)", "Linguini Pasta", "Greek Tomato Sauce", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Apple Cranberry Pancake Topping", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Peach Crumb Pie", "Hawaiian Sweet Roll", "Char Grilled Chicken Thigh", "Four Bean Stew", "Black Beans", "Steamed Fresh Broccoli", "Roasted Potato Wedges", "Beef Enchilada", "Lettuce/Cheese/Tomatoes", "Vegetarian Tostada", "Fire Roasted Tomato Salsa", "Sauteed Cabbage & Carrots", "Tempura Onion Sushi Plate"],
}
},
],
},
{
"date": "2026-10-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Caesar Salad", "Oatmeal", "Apple Cinnamon Pancake", "Chorizo and Eggs", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Blueberry Muffin", "Banana Walnut Choc Coffee Cake(w/nut)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Vegetables", "Vegetable Egg Roll", "Beef Albondigas Soup", "Roast Beef", "Au Jus", "Polenta with Marinara Sauce", "Peas", "Sauteed Button Mushrooms", "Caesar Salad", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Pearl Barley", "Ham & Cheese Pizza", "Cheese Pizza", "Pesto and Vegetable Pizza on Wheat", "Key Lime Pie", "Jalapeno Cornbread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Far East Vegetable Soup", "Grilled Roast Beef & Jack Sandwich", "Fresh Cauliflower", "Baked Potato", "Tomato Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Macaroni Salad", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Potato Cheese Soup", "Pork Loin Roast with Garlic & Ginger", "Carrots & Broccoli", "Roasted Potato Wedges", "Baked Potato", "Chicken Bean & Rice Burrito", "Grilled Vegetable Tostada", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomato & Roasted Corn Salsa", "Tomato Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "Spicy Basil Beef", "Teriyaki Tofu Stir Fry", "Wild Rice Blend", "Long Grain Rice", "Tangy Cool Noodle Salad", "Pesto Rolls", "Boston Cream Pie"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Cinnamon Maple Granola", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Tortilla Soup", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Sweet and Spicy Tofu", "Three Cheese Pizza", "Apple Cranberry Pancake Topping", "Fluffy Whole Wheat Waffles", "Linguini & Bacon/Tomato Cream Sauce", "Flour Tortilla", "Chocolate Chip Coffee Cake", "Tuna Melt", "Pita Sandwich w/Hummus & Tabouli", "Mashed Yams", "Black Beans", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Steamed Fresh Broccoli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Tortilla Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Tomato Basil Pizza on White", "White Clam Sauce", "Linguini Pasta", "Penne Pasta with Pesto", "Cornmeal Berry Cake", "Crusty French Bread", "Beef Stew", "Mushroom Risotto", "Baked Acorn Squash", "Sauteed Cabbage & Carrots", "Hoisin Chicken", "Sticky Rice", "Vegetable Fried Rice", "Broccoli Spinach Bok Choy Stir Fry", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2026-10-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Pork & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Cucumber & Onion Salad", "Waldorf Walnut Salad (w/nuts)", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Potato Roll", "Dark Chocolate Walnut Brownie(w/nuts)", "Cookies 'n Cream Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Marmite Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Cream Cheese Pie", "Cracked Wheat Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Cranberry Orange Muffin", "Banana Bread", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple"],
"Lunch": ["Chickpea Vegetable Soup", "Veggie Sandwich with Tomato Spread", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Potato Taco", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Creamy Bolognese Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Shoestring French Fries", "Asian Slaw", "Ricotta Pepper Roll", "Chocolate Volcano Cupcake"],
"Dinner": ["Minestrone Soup", "Roast Beef", "Broccoli Mushroom Noodle Casserole", "Fresh Sauteed Spinach", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Grilled Vegetable Quesadilla", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Thai Chicken & Vegetable Curry", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Jicama Salad", "Potato Bread", "Pumpkin Pie"],
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
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Peach Yogurt", "Watermelon", "Honeydew Melon", "Pineapple", "Seedless Red Grape", "Cantaloupe", "Make Your Own Waffle", "Granola Parfait", "Maple Quinoa Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Bran Muffin", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Turkey Melt", "Grilled Chicken Breast", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Greek Tomato Sauce", "Farfalle Pasta", "Chicken with White Wine Garlic Sauce", "Linguini Pasta", "Hawaiian Sweet Bread", "Chocolate Chip Cookie", "Lemon Bar", "BBQ Beef Sandwich", "French Potato Salad", "Black Beans", "Steamed Carrots & Zucchini", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Salmon Roll", "Crunchy Onion Roll", "Hamburger", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Raita Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Pineapple & Jalapeno Pizza on Wheat", "Sausage Marinara Sauce", "Spaghetti", "Greek Tomato Sauce", "Farfalle Pasta", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Cheese Quesadilla with Chiles", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Chicken Shoyu", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Crunchy Onion Roll"],
}
},
],
},
{
"date": "2026-10-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Turkey", "Hummus", "Pita Chips", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Greek Salad", "Yogurt Potato Salad", "Common Thresher Shark w/Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Thai Chicken Curry Pizza", "Cheese Pizza", "Roasted Garlic Onion & Pepper Pizza", "Classic Miso Soup", "Char Burger", "Black Bean Burger", "Chicken Gyro", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Refried Beans", "Couscous", "Tsoureki (Greek Easter Bread)", "Pecan Pie Bar (w/nuts)", "Banana Chocolate Bar"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Corn on the Cob", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza", "Cheese Pizza", "Roasted Garlic Onion & Pepper Pizza", "Roasted Garlic Bread", "Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Pumpkin Muffin"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Saute", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Tofu Coconut Curry", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheddar Cheese On Wheat", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Killer Brownie"],
"Dinner": ["Vegetable Noodle Soup", "Chicken Mushroom Picatta Pasta", "Vegetable Cutlet", "Vegetable Medley", "Rice Pilaf", "Baked Potato", "Beef Sope", "Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce(w/nut)", "Veggie Stir Fry w/Peanut Sauce(w/nuts)(v", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Sourdough Bread", "Cream Cheese Pie"],
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
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Vanilla Yogurt", "Fresh Strawberry", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Cantaloupe Parfait", "Cinnamon Maple Granola", "Oatmeal", "Organic Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Chocolate Chip Scone", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza", "Fettuccine Pasta", "Tomato Cream Sauce", "Cheese Bread", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie", "Grilled Chicken Taco", "Cilantro Lime Crema", "Fall Vegetable Medley", "Cilantro & Onion Mix", "Refried Beans", "Roast Pork Loin with Spiced Apples", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza", "Fettuccine Pasta", "Tomato Cream Sauce", "Whole Wheat Penne Pasta", "Chicken with White Wine Garlic Sauce", "Cheese Bread", "New York Style Crumb Cake", "Pot Roast", "Garlic Mashed Potatoes", "Carrots with Fresh Thyme", "Steamed Fresh Broccoli", "Pork Chow Mein", "Vegetable Fried Rice", "Braised Bok Choy", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2026-10-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Brunch": ["Organic Unsweetened Soy Milk", "Banana", "Chunky Peanut Butter (w/nuts)", "Grape Jelly"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Tofu & Vegetable Stir Fry", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Tonkatsu", "Mixed Vegetables", "Green Bean Almondine (w/nuts)", "Neapolitan Pepperoni Pizza", "Cheese Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Spicy Navy Bean Soup", "Charburger", "Veggie Sweet Potato Burger", "Grilled Cheese on White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Brown Butter Peanut ButterCookie(w/nut(v", "Caramel Flan"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Arugula Walnut & Potato Salad(w/nuts)", "Chicken Marsala", "Mushroom Turnover", "Fresh Broccoli Spears", "Spinach with Garlic", "Oven Roasted Red Potatoes", "Spaghetti Pasta", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Sourdough Bread", "Coconut Poke Cake", "Organic Nonfat Milk", "Fuji Apple", "Green Beans", "Brown Rice", "Grilled Tilapia w/Italian Spice"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Pinch Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hot and Sour Soup", "Fish Po Boy Wrap", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Ground Beef Soft Corn Taco", "Black Bean Tostada", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard", "Herb Breadsticks", "Sesame Pork with Broccoli", "Vegetable Lo Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Malibu Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Chicken & Sundried Tomato Pasta Salad", "Graham Roll", "Rice Krispie Treat"],
"Dinner": ["Hearty Vegetable Soup", "Meatloaf", "Garlic Mashed Potatoes", "Beef Gravy", "Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Potato Gorda with Black Beans", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Penne Pasta", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Wild Rice Blend", "Caesar Salad", "Onion Bread", "German Apple Cake w/Cream Cheese Icing(v"],
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
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Blueberry Yogurt", "Seedless Red Grape", "Sliced Honeydew", "Watermelon", "Pineapple", "Granola Raspberry Parfait", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cornbread with Honeybutter", "Pumpkin Muffin", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Chicken Chipotle Wrap", "Tuna Salad", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Moroccan Lentil Soup", "Baked Potato", "Brown Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Walnut Cupcakes (w/nuts)", "Pork Adobo", "Sticky Rice", "Black Beans", "Steamed Broccoli & Cauliflower", "Vegetable Tofu Stir Fry", "Chicken Tikka Masala", "Basmati Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Plate", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom and Tofu Slider", "Whole Wheat Banana Pancake", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Moroccan Lentil Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Antipasto Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Creamy Rosemary Sauce", "Penne Pasta", "Marble Cake", "Thick Focaccia Bread", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Macaroni & Cheese", "Pinto Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Tempura Fish w/Tamari Ginger Sauce", "Sticky Rice", "Sesame Asian Slaw Salad", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2026-10-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Turkey Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cinnamon Roll", "Raspberry Scone"],
"Brunch": ["Water", "Navel Orange", "Cabbage Soup", "Baked Sweet Potato", "Carnitas Taco"],
"Lunch": ["Sliced Ham", "Hummus", "Pita Chips", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Honey Baked Chicken Quarters", "Steamed Carrots", "Spinach Quiche", "Roasted  Red Potato Wedges", "Taco Salad", "Jicama Pico De Gallo", "Salami Pizza", "Cheese Pizza", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Chocolate Caramel Swiss Cupcake", "Olive Wheat Bread", "Galaktoboureko (Greek Pudding)"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken General Tso's", "Tofu & Vegetable Stir Fry", "Greens and Beans Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Steamed Carrots", "Swiss Chard with Fresh Garlic", "Jicama Pico De Gallo", "Chicken & Mushrooms with Pasta", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza", "Assorted Bell Pepper Pizza on Wheat", "Whole Wheat Sourdough Bread", "Chocolate Flourless Cake", "Water", "Fuji Apple", "Vegetable Stir Fry", "Long Grain Rice", "Turkey Breast"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat w/Flax & Wheat Berry", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Blueberry Coffee Cake"],
"Lunch": ["Tomato Rice Soup", "Roasted Pork Loin Sandwich w/Gouda", "Vegetable Medley", "Baked Potato", "Chicken Mole Taco", "Chipotle Bean Flauta", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Turkey w/Penne Pasta & Ancho Cream Sauce", "Farfalle with French Pistou Sauce", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Sweet Potato Burger", "Chili Dog", "Shoestring French Fries", "Tabouli Salad", "Olive Roll", "Yellow Cupcake with Buttercream"],
"Dinner": ["Curried Chicken Soup", "Grilled Chicken Quarters", "Orzo Pasta with Vegetables", "Zucchini and Crookneck Squash", "Baked Potato", "Chicken & Bean Chimichanga", "Calabacitas Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Beef Chop Suey", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Cornbread", "Fresh Orange Cake"],
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
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Quinoa Breakfast Bowl", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Pecan Sour Cream Coffee Cake (w/nuts)", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Cabbage & Carrots"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing", "Pita Sandwich w/Hummus & Tabouli", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Tuna Salad", "Sliced Turkey Pastrami", "Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Grilled BBQ Chicken Pizza", "Penne Pasta", "Tomato Basil & Garlic Sauce", "Spaghetti", "Alburro Sauce", "Crusty French Bread", "Lemon Cookie", "Walnut Brownie (w/nuts)", "Grilled Achiote Chicken Thigh", "Roasted Potato Wedges", "Pinto Beans", "Roasted Broccoli and Red Onion", "Pork Stir Fry with Veggies (gf)", "Sticky Rice", "Roasted Red Onion &  Zucchini", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Grilled Cheese Chile & Veggie on Sour(v", "Chipotle Aioli", "Sweet &Tangy Pickled Red Onion", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Grilled BBQ Chicken Pizza", "Alburro Sauce", "Pasta Spaghetti", "Marinara Sauce with Chicken", "Penne Pasta", "Orange Olive Oil Cake", "Crusty French Bread", "Meatloaf", "Classic BBQ Sauce", "Mashed Red Potatoes w/ Garlic", "Black Beans", "Mushroom Rajas & Corn", "Spinach with Garlic", "Burmese Chicken Coconut Stew", "Latin Bowl", "Sticky Rice", "Roasted Cauliflower with Cumin", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
