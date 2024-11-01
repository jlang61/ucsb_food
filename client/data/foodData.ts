const diningMenu = [
{
"date": "2024-11-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blintz", "Bacon and Cheese Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Strawberry Cream Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Greek Salad", "French Potato Salad", "Arni Psito (Roasted Lamb)", "Steamed Zucchini", "Spanakopita w/ Phyllo", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "New England Clam Chowder", "Cheeseburger", "Grilled Vegetable Burger", "Grilled Ham & Swiss on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Cheese Onion Roll", "Galaktoboureko (Greek Pudding)", "Snickerdoodle"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cake", "Sauteed Kale", "Coriander Lime Aioli", "Pesto Zucchini Soup", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda", "Carrots with Lemon Butter", "Sauteed Vegetables Rice and Beans", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Pasta Shells w/Eggplant & Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Ricotta Pepper Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Banana Coffee Cake (w/nuts)"],
"Lunch": ["New England Clam Chowder", "Pulled Pork Buffalo Style Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Wet Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Pork Stir Fry w/Vegetables & Brown Rice", "Vegetable Noodle Stir Fry", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Black Bean Burger", "Grilled Cheese &Tomato on Wheat", "Krinkle Cut French Fries", "Caponata Salad", "Sour Cream & Chive Roll", "Ginger Cookie"],
"Dinner": ["Tomato Rice Soup", "Fish Cake", "Lemon Dill Sauce", "Bok Choy with Garlic & Ginger", "Mushroom Risotto", "Baked Potato", "Baked Potato", "Carnitas Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Penne Mostacioli", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "Israeli Couscous Salad", "Pesto Bread", "Cherry Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Teriyaki Chicken Rice Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Chicken Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Spicy Tomato Orzo Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Sugar Cookie", "Red Velvet Crinkle Cookie", "Double Chocolate Brownie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Pasta Bolognese", "Teriyaki Chicken Rice Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Broccoli Soup", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Chicken Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Sugar Cookie", "Red Velvet Crinkle Cookie", "Double Chocolate Brownie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Honeydew Melon", "Sliced Cantalope", "Watermelon", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Blueberry Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Sausage Patty", "Roasted Breakfast Potato", "Mixed Greens Side Salad"],
"Lunch": ["Thai & Peanut Coleslaw (w/nuts)", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Tuna Salad", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "New England Clam Chowder", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Mushroom Pizza on White", "Tomato Basil & Garlic Sauce", "Penne Pasta", "Pasta Carbonara", "Potato Roll", "Shortbread Cookie", "Peanut Butter Bar (w/nuts)", "Italian Wrap", "Grilled Corn Relish", "Black Beans", "Fresh Tomato Quiche", "Baked Sweet Potato", "Fish Taco", "Salsa de Tomatillo Verde", "Lettuce & Cheese &Tomatoes", "Mushroom Rajas & Corn", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "Tofu Saltado with Green Aji Sauce", "Crinkle Cut French Fries", "Sausage Biscuits & Gravy", "Chipotle Aioli", "Housemade Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Sticky Rice", "New England Clam Chowder", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Hawaiian Sweet Bread", "Coconut Cream Pie (w/nuts)", "Pork Chile Verde Taco", "Calabaza con Queso", "Avocado Crema", "Cilantro & Onion Mix", "Refried Beans", "Cabo Shrimp Quinoa Bowl", "Harissa Lentils w/Pickled Onion", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-11-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Genoa Salami", "Sliced Turkey Pastrami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Chicken Congee Soup", "Chicken Enchilada", "Corn with Red Peppers", "Refried Beans", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Oatmeal", "Cage Free Scrambled Eggs with Cheese", "Grilled Ham with Honey Glaze", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Ginger Beef Stir Fry", "Stir Fry Vegetables with Tofu", "Ham & Navy Bean Soup", "Caesar Salad", "Roast Beef", "Au Jus", "Polenta with Marinara Sauce", "Peas", "Sauteed Button Mushrooms", "Whole Wheat Spaghetti", "Red Clam Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chickpea Vegetable Soup", "Buffalo Chicken Drumstick", "Mixed Vegetables", "Baked Potato", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chinese Chicken Salad (w/nuts)", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Lemon Scone"],
"Dinner": ["Pasta Fazool Soup", "Honey Baked Chicken", "Steamed Green Beans", "Rice Pilaf", "Baked Potato", "Ground Beef Soft Taco", "Black Bean & Rice Quesadilla", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Lemon Ginger Tofu Stir Fry w/Brn Rice (v", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Whole Wheat Roll", "Brownie & Walnut Pie (w/nuts)"],
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
"Brunch": ["Watermelon", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Brown Rice", "Onion Pizza", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Linguini Pasta", "Greek Tomato Sauce", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Turkey Vegetable Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Apple Cranberry Pancake Topping", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Apple Crisp", "Homemade Bread", "Herb Roasted Rotisserie Chicken", "Four Bean Stew", "Black Beans", "Steamed Fresh Broccoli", "Roasted Potato Wedges", "Shredded Beef Enchiladas", "Lettuce/Cheese/Tomatoes", "Vegetarian Tostada", "Fire Roasted Tomato Salsa", "Sauteed Cabbage & Carrots", "Tempura Onion Sushi Plate"],
}
},
],
},
{
"date": "2024-11-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Caesar Salad", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Apple Cinnamon Pancake", "Chorizo and Eggs", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Blueberry Muffin", "Banana Choc Chip Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Summer Vegetables", "Vegetable Egg Roll", "Beef Albondigas Soup", "Caesar Salad", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Cauliflower & Broccoli Mix", "Rice with Cilantro & Onions", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Pearl Barley", "Ham & Cheese Pizza", "Cheese Pizza on White", "Pesto and Vegetable Pizza on Wheat", "Jalapeno Cornbread", "Toll House Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Far East Vegetable Soup", "Grilled Roast Beef & Jack Sandwich", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Macaroni Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Blueberry Muffin", "Bagels-Breads & Cereals- See for Choices"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Sweet and Spicy Tofu", "Three Cheese Pizza on White", "Apple Cranberry Pancake Topping", "Fluffy Whole Wheat Waffles", "Fluffy Whole Wheat Waffles", "Linguini & Bacon/Tomato Cream Sauce", "Flour Tortilla", "Chocolate Chip Coffee Chip", "Tuna Melt", "Pita Sandwich w/Hummus & Tabouli", "Mashed Yams", "Black Beans", "Tortilla Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Broccoli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Tortilla Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Tomato Basil Pizza on White", "White Clam Sauce", "Linguini Pasta", "Penne Pasta with Pesto", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Turkey and Bean Tostada", "Avocado Cream", "Mexican Rice", "Black Beans", "Sauteed Cabbage & Carrots", "Vietnamese Beef BBQ Sub Sandwich", "Vegetable Fried Rice", "Stir Fry Brocoli Spinach Bok Choy", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-11-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin", "Organic Nonfat Milk", "Honey", "Banana", "Chunky Peanut Butter"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Cucumber & Onion Salad", "Waldorf Salad (w/nuts)", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu (w/nuts)", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Potato Roll", "Brownie (w/nuts)", "Cookies 'n Cream Cake", "Water", "Fuji Apple", "Split Pea Soup", "Cracked Wheat Bread", "Balsamic Vinegar", "Extra Virgin Olive Oil", "Red Beet", "Cherry Tomato", "Cucumber", "Shredded Carrot", "Canned Black Bean", "Garbanzo Bean", "Daikon Sprout", "Shredded Carrot", "Swiss Chard with Fresh Garlic"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Marmite Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Whole Baby Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Coconut Poke Cake (w/nuts)", "Cracked Wheat Bread", "Organic Nonfat Milk", "Navel Orange", "Tortilla Chicken Soup", "Couscous Salad with Tomato & Herb", "Baked Sweet Potato", "Steamed Zucchini"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Bagels-Breads & Cereals- See for Choices", "Banana Nut Bread  (w/nuts)"],
"Lunch": ["Tortilla Soup", "Veggie Sandwich w/Tomato Spread", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Vegetable Burrito", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Creamy Bolognese Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Shoestring French Fries", "Asian Slaw", "Ricotta Pepper Roll", "Chocolate Volcano Cupcake"],
"Dinner": ["Tomato Rice Soup", "Roast Beef", "Orzo Pasta with Vegetables", "Fresh Sauteed Spinach", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Roasted Vegetable Quesadilla", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Thai Chicken & Vegetable Curry (w/nuts)", "Vegetable Curry", "Wild Rice Blend", "Long Grain Rice", "Jicama Salad", "Potato Bread", "Pumpkin Pie"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Seedless Red Grape", "Cantaloupe", "Make Your Own Waffle", "Granola Parfait (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Lemon Yogurt Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon Egg & Sweet Potato Hash", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Turkey Melt", "Grilled Chicken Breast", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Greek Tomato Sauce", "Farfalle Pasta", "White Clam Sauce", "Linguini Pasta", "Hawaiian Sweet Bread", "Peanut Butter Cookie (w/nuts)", "Butterscotch Bar (w/nuts)", "BBQ Pork Sandwich", "French Potato Salad", "Pinto Beans", "Bleu Cheese Dressing", "Celery Stick", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Salmon Roll", "Tempura Onion Roll", "Tuna Melt", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Cucumber Tzatziki"],
"Dinner": ["Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Pineapple & Jalapeno Pizza on Wheat", "Marinara Sauce with Meatballs", "Spaghetti", "Greek Tomato Sauce", "Farfalle Pasta", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Cheese Quesadilla with Chiles", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Chicken Shoyu", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-11-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin", "Organic Nonfat Milk", "Fuji Apple", "Raisin", "Granulated Peanut", "Oatmeal"],
"Lunch": ["Sliced Ham", "Tuna Salad", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Satsuma Age (Japanese Fried Fish Cake)", "Tofu Agedashi", "Tonkotsu Ramen", "Tonkatsu", "Japanese Curry", "Pickled Scallions - Rakkyo Zuke", "Pickled Radish - Fukujin Zuke", "Spinach Goma Ae", "Oven Roasted Shishito Peppers", "Sunomono Salad", "Japanese Potato Salad", "Kyuri Jiman - Pickled Cucumber", "Shiba Zuke - Pickled Cucumber", "Japanese Sesame Dressing", "Soy Edamame Bean", "Japanese Teriyaki Chicken Pizza", "Okonomiyaki Pizza", "Cheese Pizza on White", "Classic Miso Soup", "Karaage Chicken", "Takoyaki (Octopus)", "Hambagu", "Oyakodon (Chicken and Egg Rice Bowl)", "Baked Potato", "Baked Sweet Potato", "Gomoku-mame (Simmered Soybeans)", "Brown Rice", "Japanese Strawberry Shortcake", "Melon-pan", "Mizu Yokan (Red Bean Pudding)", "Soy Milk", "Fuji Apple", "Whole Plain Greek Yogurt", "Sliced Almond", "Fresh Garden Pasta Salad", "Steamed Crookneck Squash"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Fresh Corn on the Cob", "Potatoes Au Gratin", "Caesar Salad", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Confetti Cake", "Organic Nonfat Milk", "Mandarin Orange", "Broccoli Stuffed Tomato", "Baked Sweet Potato", "Apricot Chutney", "Rotisserie Pork Loin"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Medley", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Coconut Curry Tofu (w/nuts)", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese Sandwich on WW", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Killer Brownie"],
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
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Roll", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie (w/nuts)", "Grilled Chicken Taco", "Thick Chile Salsa", "Cilantro Lime Crema", "Cilantro & Onion Mix", "Refried Beans", "Pork Balchao", "Moroccan Carrot w/Chickpeas & Tomato", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
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
"Brunch": ["Soy Milk", "Banana", "Chunky Peanut Butter", "Grape Jelly"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Stir Fry Pork with Vegetables", "Stir Fry Vegetables with Tofu", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Common Thresher Shark w/Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Chocolate Caramel Swiss Cupcake", "Magic Walnut Cookie Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Salad Arugula & Sweet Potato (w/nuts)", "Chicken Marsala", "Wild Mushroom Turnover", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Spaghetti Pasta", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Sourdough Bread", "Devil's Food Cake with Icing", "Organic Nonfat Milk", "Fuji Apple", "Green Beans", "Brown Rice", "Grilled Tilapia w/Italian Spice"],
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
"Lunch": ["Spicy Kale Caesar", "Chicken Chipotle Wrap", "Tuna Salad", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Moroccan Lentil Soup", "Baked Potato", "Brown Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Cupcakes (w/nuts)", "Sweet & Sour Pork", "Sticky Rice", "Pinto Beans", "Vegetable Tofu Stir Fry", "Steamed Broccoli & Cauliflower", "Chicken Cajun Stir Fry", "Long Grain Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Plate", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
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
"Brunch": ["Water", "Navel Orange", "Cabbage Soup", "Baked Sweet Potato", "Carnitas Taco"],
"Lunch": ["Sliced Ham", "Hummus", "Pita Chips", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Honey Baked Halal Chicken Quarters", "Roasted Cauliflower", "Steamed Fresh Carrots", "Spinach Quiche", "Roasted  Red Potato Wedges", "Taco Salad", "Jicama Pico De Gallo", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Olive Whole Wheat Bread", "Banana Chocolate Bar", "Oatmeal Raisin Cookie"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Vegetables with Tofu", "Greens and Beans Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Steamed Whole Baby Carrots", "Swiss Chard with Fresh Garlic", "Jicama Pico De Gallo", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Sour Cream & Chives Roll", "Chocolate Flourless Cake", "Water", "Fuji Apple", "Vegetable Stir Fry", "Long Grain Rice", "Turkey Breast"],
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
"Lunch": ["Strawberry Salad w/Poppyseed Dressing (v", "Hummus & Avocado Lettuce Wrap", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Tuna Salad", "Sliced Turkey Pastrami", "Baked Sweet Potato", "Basmati Rice", "Miso Broth with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Grilled BBQ Chicken Pizza", "Tomato Basil & Garlic Sauce", "Spaghetti", "Penne Pasta with Pesto", "Crusty French Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Shredded Braised Beef", "Long Grain Rice", "Cuban Style Black Beans & Rice", "Fresh Green Beans with Garlic", "Chicken Tikka Masala", "Basmati Rice", "Roasted Red Onion &  Zucchini", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Grilled Cheese Chile & Veggie on Sour(v", "Chipotle Aioli", "Sweet &Tangy Pickled Red Onion", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Smoked Barbeque Chicken Pizza", "Alburro Sauce", "Pasta Spaghetti", "Pumpkin Seed Pesto", "Penne Pasta", "Orange Walnut Olive Oil Cake (w/nuts)", "Crusty French Bread", "Meatloaf", "Classic BBQ Sauce", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Mushroom Rajas & Corn", "Fresh Spinach with Garlic", "Burmese Chicken Stew w/Coconut (w/nuts)", "Latin Bowl", "Sticky Rice", "Roasted Cauliflower with Cumin", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
