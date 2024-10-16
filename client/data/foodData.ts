const diningMenu = [
{
"date": "2024-10-16",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Nut Pancake (w/nuts)", "Huevos Rancheros", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Cranberry Orange Bread (w/nuts)", "Carrot Muffin"],
"Lunch": ["Sliced Roast Beef", "Roasted Vegetables", "Sliced Pepper Jack Cheese", "Sliced Smoked Mozzarella", "Sticky Rice", "General Tso's Chicken", "Sweet & Sour Tofu & Veggies(w/nuts)", "Chinese Broccoli Salad", "Tossed Antipasta Salad", "Smoked Turkey Club Sandwich", "Vegetable Fried Rice", "Peas", "Pepperoni Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Classic French Onion Soup with Croutons", "Charburger", "Gardenburger", "Corn Quesadilla", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Quinoa", "Bread Olive", "Black and White Brownie", "White Choc Macadamia Cookie (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Beef Fajita", "Vegetable Fajita", "Refried Beans", "Mexican Rice", "Turkey Rice Soup", "Chinese Broccoli Salad", "Roast Leg of Pork", "Chili and Noodles", "Steamed Fresh Carrots", "Fresh Corn on the Cob", "Chipotle Cream", "Roasted Potato Wedges", "Whole Wheat Spaghetti", "Meat Sauce", "Penne with Sun Dried Tomato", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Roasted Garlic Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Morning Glory Muffin (w/nuts)"],
"Lunch": ["Spicy Navy Bean Soup", "Spinach & Feta Turnover", "Steamed Zucchini", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Bean & Rice Tostada", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Beef Taco Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Chicken Fried Rice", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Black Bean Burger", "Grilled Ham & Swiss on 100% Wheat", "Shoestring French Fries", "Red Potato Salad with Dill", "Egg Bread", "Mint Chocolate Chip Cookie"],
"Dinner": ["Vegetable Soup", "Grilled Chicken Breast", "Vegetable Cutlet", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Potato Rajas Mole Taco", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Beef Taco Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Spaghetti Pasta", "Meat Sauce", "Wheat Penne Pasta", "Marinara Sauce", "Wild Rice Blend", "Long Grain Rice", "Caesar Salad", "Three Grain Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Orange Glazed Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Orange Glazed Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Green Thompson Seedless Grape", "Grapefruit Halves", "Cantaloupe", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Applesauce Coffee Cake", "Banana Oat Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Apple Cinnamon Oatmeal Pancake", "Sausage Links", "Fried Potato with Onion", "Seasoned Vegetable Medley"],
"Lunch": ["Shredded Carrot & Beet Salad", "Turkey Club Panini", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Vegetable Noodle Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pineapple & Jalapeno Pizza on Wheat", "Tomato Basil Flatbread", "Marinara Sauce with Sausage", "Farfalle Pasta", "Crusty French Bread", "M&M Bar (w/nuts)", "Chocolate Cupcake w/Fudge Icing", "Vegetable Tofu Stir Fry", "Paella", "Moroccan Carrot w/Chickpeas & Tomato", "Pinto Beans", "Fresh Green Beans with Garlic", "Pollo a la Brasa with Aji Verde Sauce", "Vegetable Empanada", "Sauteed Kale", "Steamed White Rice", "Vegetable Roll", "Salmon Roll", "Char Grilled ChickenTeriyaki Sandwich", "Green Vegetable Burger", "Buttermilk Pancake", "Shoestring Fries", "Chipotle Aioli", "Red Chimichurri Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Vegetable Noodle Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pineapple & Jalapeno Pizza on Wheat", "Wheat Pasta with Cauliflower (w/nuts)", "Farfalle Pasta", "Marinara Sauce with Sausage", "Banana Cake & Penut Butter Icing(w/nut)v", "Cheese Bread", "Herb Marinated Rotisserie Chicken", "Mashed Red Potatoes", "Pinto Beans", "Bean and Rice Wet Burrito", "Fresh Cauliflower & Broccoli Mix", "Tandoori Spiced Chicken", "Basmati Rice", "Indian Lentils and Brown Rice", "Seasoned Vegetable Medley", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-10-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Egg Turkey Swiss English Muffin Sandwich", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Nut Muffin (w/nuts)"],
"Lunch": ["Sliced Pastrami", "Tuna Salad", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Pork Sisig", "Long Grain Rice", "Pinakbet - Veggie Stew", "Sauteed Zucchini", "Three Bean Salad", "Arugula Salad with Goat Cheese", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Carrot and Ginger Soup", "Grass Fed Burger", "Gardenburger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding (w/nuts)", "Baba au Rum"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu Vegetable Stir Fry", "Spicy Black Bean Soup", "Turkey Pastitsio", "Fresh Green Beans", "Stuffed Zucchini", "Vegetable Fried Rice", "Arugula Salad with Goat Cheese", "Bowtie Pasta", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Pesto Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil and Brown Rice Soup", "Macaroni & Cheese w/Bacon & Jalapeno", "Corn", "Baked Potato", "Carnitas Taco", "Bean and Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon & Olive Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Spicy Basil Beef", "Spicy Tofu Noodle Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Burger", "Grilled Roast Beef & Jack on Sourdough", "Krinkle Cut French Fries", "Cucumber & Onion Salad", "Jalapeno Roll", "Toll House Bar (w/nuts)"],
"Dinner": ["Onion Soup", "Tri Tip Roast", "Roasted Potato Wedges", "Fresh Cauliflower", "Baked Potato", "Beef Nachos", "Vegetable Empanada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon & Olive Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Tofu Chinese Stir Fry w/Brown Rice", "Brown Rice", "Long Grain Rice", "Pasta Salad with Spinach & Feta", "Sundried Tomato Bread", "Peach Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Orange Glazed Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Orange Glazed Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Watermelon", "Sliced Cantalope", "Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Buttermilk Coffee Cake (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Sourdough French Toast", "Cottage Fried Potatoes", "Sauteed Kale"],
"Lunch": ["Noodle Salad w/Roasted Broccoli &Kale", "Asian Influenced Vegetable Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Chicken White Bean Chili", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pepperoni Pizza", "Fresh Tomato Basil Garlic Pasta", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Wheat Germ Bread", "Salted Caramel Cupcake", "Chai Spice Sugar Cookie", "Chicken Parmigiana Sandwich", "Grilled Cheddar On Wheat", "White Beans", "Yogurt Potato Salad", "Seasoned Vegetable Medley", "Spicy Korean Pork Bowl", "Steamed Fresh Broccoli", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Shoestring Fries", "Sourdough French Toast", "Falafel Sandwich", "Red Chimichurri Sauce", "Chipotle Aioli", "Cucumber Tzatziki"],
"Dinner": ["Baked Potato", "Wild Rice", "Chicken White Bean Chili", "Pepperoni Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pesto Bread", "Tres Leches Cake", "Chicken Spinach & Mushroom Lasagna", "Spicy Marinara Sauce", "Fresh Herb Polenta with Marinara", "White Beans", "Fresh Green Beans with Garlic", "Thai Chicken Taco", "Grilled Pineapple/Mango Salsa", "Ten Spice Fried Rice", "Sauteed Zucchini with Garlic", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-10-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Grilled Hoki Fish with Chermoula Sauce", "African Spiced Seitan", "Couscous", "Pasta Salad with Smoked Salmon", "Crunchy Fruit Salad (w/nuts)", "Beef and Bean Tostada", "Vegetable Tostada", "Corn with Red Peppers", "Sausage Pizza", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Roasted Butternut Soup w/Pepitas", "Cheeseburger", "Gardenburger", "Grilled Swiss & Tomato on Wheat", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Jalapeno Cheddar Roll", "Pumpkin Crisp", "Cowboy Cookie Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Thai Beef Noodle w Peanut Sauce(w/nuts)", "Stir Fry Noodles with Vegetables", "Far East Vegetable Soup", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Pizza", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Whole Wheat Sourdough Bread", "Black Forest Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Blueberry Pancake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Sticky Bun (w/nuts)"],
"Lunch": ["Manhattan Clam Chowder", "BBQ Chicken Sandwich", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean Tostada", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Herb Breadsticks", "Cellentani Pasta", "Tomato Cream Sauce", "Wheat Pasta w/Tomato & Basil", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Chicken Corn Dog", "Steak Fries", "Tortellini Pasta Salad (w/nuts)", "Garlic Roll", "Cranberry Almond Bar (w/nuts)"],
"Dinner": ["Minestrone Soup", "Blackened Catfish", "Vegetable Risotto", "Sauteed Green Beans with Garlic", "Baked Potato", "Baked Sweet Potato", "Beef and Bean Burrito", "Chipotle Tempeh Tacos", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Herb Breadsticks", "Shrimp & Peanut Pad Thai (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Brown Rice", "Long Grain Rice", "Taco Salad", "Cheese Roll", "Brownie & Walnut Pie (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Orange Glazed Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Orange Glazed Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Cantaloupe", "Sliced Honeydew", "Watermelon Salad", "Maple Quinoa Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Orange Cranberry Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Strawberry Pancake", "Sausage Patty", "Roasted Breakfast Potatoes", "Steamed Broccoli & Cauliflower"],
"Lunch": ["Pork Fusion Salad", "Chicken Caesar Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Basmati Rice", "Dilled Vegetable Barley Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Mushroom Ragout over Polenta", "Sourdough Bread", "Chocolate Pudding", "Almond Biscotti (w/nuts)", "Chicken Enchiladas", "Spinach Enchilada", "Spanish Rice w/Roasted Corn", "Lettuce/Cheese/Tomatoes", "Refried Beans", "Teriyaki Chicken Stir Fry", "Tofu Teriyaki Rice Bowl", "Sticky Rice", "Bok Choy & Nappa Cabbage w/Sesame", "Cucumber & Avoocado Sushi Plate", "Spicy Shrimp Sushi", "Hamburger", "Vegetarian Cuban Sandwich", "Strawberry Pancakes", "Crinkle Cut French Fries", "Chipotle Aioli", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Dilled Vegetable Barley Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Vegetable Stromboli", "Creamy Pesto Sauce", "Fettuccine Pasta", "Mushroom Ragout over Polenta", "Hawaiian Sweet Bread", "Pumpkin Pie", "Chicken Cacciatore", "Buttered Noodles", "White Beans", "Steamed Broccoli & Cauliflower", "Grilled Mahi Mahi with Chermoula Sauce", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-10-19",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "White Bean Basque Soup", "BBQ Chicken Sandwich", "Stir Fry Vegetables", "Roasted Potato Wedges", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Arroz con Leche", "Buttermilk Pancake", "Cage Free Scrambled Eggs w/Vegetables", "Beefy Eggs Machaca", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Banana Coffee Cake (w/nuts)", "Strawberry Bread"],
"Dinner": ["Sticky Rice", "Pork Fried Rice", "Vegetable Chow Mein", "Vegetable Beef Soup", "Caesar Salad", "Ginger Beef Pepper Steak", "Fresh Vegetable Medley", "French Cut Green Beans", "Risotto with Fresh Vegetables", "Jasmine Rice", "Penne Pasta", "Marinara Sauce with Sausage", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Black Olive Pizza on Wheat", "Cornbread with Honey Butter", "Devil's Food Cake with Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Tortilla Soup", "Italian Sub", "Vegetable Medley", "Baked Potato", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "7 Grain Hot Cereal", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Sausage Link", "Multi-Grain Waffle", "Waffle", "French Potato Salad", "Sliced Honeydew", "Sliced Cantalope", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Chocolate Chip Scone"],
"Dinner": ["Miso Soup", "Sweet & Sour Glazed Chicken", "Pineapple Rice", "Bok Choy with Garlic & Ginger", "Baked Potato", "Pork Chile Verde Tostada", "Grilled Vegetable Tostada", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Sesame Beef with Broccoli", "Vegetable Noodle Stir Fry", "Wild Rice Blend", "Long Grain Rice", "Japanese Noodle Salad", "Whole Wheat French Bread", "Marble Cake w/Chocolate Icing"],
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
"Brunch": ["Grapefruit Halves", "Cantaloupe", "Seedless Red Grape", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Three Cheese Pizza on White", "Chilaquiles (No Egg)", "Tomato Basil & Garlic Sauce", "Farfalle Pasta", "Flour Tortilla", "Applesauce Coffee Cake", "Breakfast Quesadilla", "Fried Eggs", "Potato Gorda with Black Beans", "Black Beans", "Roasted Broccoli and Red Onion", "Lentil Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancakes", "Apple Cranberry Pancake Topping", "Steamed Fresh Broccoli"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Lentil Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Three Cheese Pizza on White", "Tomato Basil & Garlic Sauce", "Farfalle Pasta", "Arabiata (w/nuts)", "Apple Crisp", "Pesto Bread", "Roast Turkey Breast", "Turkey Gravy", "Fresh Mashed Potatoes", "Fresh Cranberry Sauce", "Sauteed Cabbage & Carrots", "Cajun Cornbread Casserole", "Asian Beef Bowl", "Moo Shu Vegetables with Tofu", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-10-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Dilled Veggie Barley Soup", "Beef Meatloaf", "Mixed Vegetables", "Creole Beans and Rice", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Oatmeal", "Breakfast Quesadilla", "Sausage Biscuits & Gravy", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Pinto Beans", "Make Your Own Waffle", "Raspberry Muffin", "Zucchini Bread (w/nuts)"],
"Dinner": ["Brown Rice", "Kung Pao Beef with Peanuts (w/nuts)", "Tofu Teriyaki Rice Bowl", "Ham & Navy Bean Soup", "Caesar Salad", "Pork Chile Verde and Rice Burrito", "Swiss Chard with Fresh Garlic", "Baked Acorn Squash", "Black Beans", "Penne Pasta", "Cajun Shrimp Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Cheese Pizza on White", "Garlic Pizza Sticks with Marinara", "Hawaiian Sweet Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Hearty Vegetable Soup", "Vietnamese Beef Sub (Banh Mi)", "Fresh Carrots with Thyme", "Baked Potato", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Grilled Ham", "Tater Tots", "Multi-Grain Waffle", "Waffle", "Coleslaw", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Blueberry Muffin"],
"Dinner": ["Chicken Rice Soup", "Turkey Meatloaf", "Fresh Vegetable Medley", "Mashed Red Potatoes", "Turkey Gravy", "Baked Potato", "Beef Hard Shell Taco", "Potato Gorda with Black Beans", "Mexican Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Penne Pasta", "Chicken Marinara", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Israeli Couscous Salad", "Poppyseed Cheese Onion Bread", "Lemon Cake with Raspberry Filling"],
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
"Brunch": ["Cantaloupe", "Sliced Pineapple", "Grapefruit Halves", "Fresh Strawberry", "Chicken Congee", "Oatmeal", "Steamed White Rice", "Make Your Own Waffle", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Cheeseburger Pizza", "Light Tomato Sauce", "Angel Hair Pasta", "Tomato Sausage Frittata", "Flour Tortilla", "Blueberry Scone", "Chicken Fajitas", "Vegetable Fajita", "Refried Beans", "Kale with Fresh Garlic", "Spicy Black Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Bacon &Cheese", "Whole Wheat French Toast", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Black Bean Soup", "Cheeseburger Pizza", "Turkey Tettrazini", "Light Tomato Sauce", "Spaghetti", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Pork Loin Roast w/Balsamic Glaze", "Scalloped Potatoes", "Pinto Beans", "Baked Acorn Squash", "Roasted Cauliflower w/Garlic", "Chicken Chow Mein", "Sweet & Sour Tofu & Veggies(w/nuts)", "Sticky Rice", "Bok Choy & Nappa Cabbage w/Sesame", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-10-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Thick French Toast", "Chicken Sausage Patty", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Strawberry White Chocolate Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Smoked Gouda", "Sticky Rice", "Vietnamese Vermicelli Pork", "Vegetable Stir Fry", "Greek Calamari Scallop Salad", "Coleslaw w/ Vinaigrette Dressing", "Chicken Enchilada", "Mixed Vegetables", "Refried Beans", "Mexican Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Spinach Lentil Soup", "Charburger", "Gardenburger", "Reuben Sandwich", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Quinoa", "Garlic Roll", "Chocolate Cupcake w/Choc Icing", "Butterscotch Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Teriyaki Chicken Stir Fry", "Vegetable Stir Fry", "Teriyaki Sauce", "Hearty Vegetable Soup", "Coleslaw w/ Vinaigrette Dressing", "Roast Beef", "Steamed Crookneck Squash", "Fresh Cauliflower", "Oven Roasted Red Potatoes", "Whole Wheat Spaghetti", "Meat Sauce", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Basmati Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Onion Walnut Bread (w/nuts)", "White Cake with Raspberry"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Yogurt Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Spicy Navy Bean Soup", "Sicilian Sandwich", "Carrots & Broccoli", "Baked Sweet Potato", "Baked Potato", "Chicken Sope", "Vegetable Soft Taco", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Sesame Beef with Broccoli", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Krinkle Cut French Fries", "Black Bean Salad", "Yeast Roll", "Lemon Cookie"],
"Dinner": ["Spicy Black Bean Soup", "Pork Loin Roast", "Vegetable Saute", "Scalloped Potatoes", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Spaghetti Pasta", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "Mediterranean Orzo Pasta Salad", "Focaccia Bread", "Chocolate Chip Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Teriyaki Chicken Rice Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Chicken Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Spicy Tomato Orzo Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Rice Krispie Treat Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Pasta Bolognese", "Teriyaki Chicken Rice Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Broccoli Soup", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Chicken Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Rice Krispie Treat Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Honeydew Melon", "Sliced Pineapple", "Watermelon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Baked Oatmeal with Peach & Blueberry", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Muffin", "Assorted Bagels & Condiments", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sourdough French Toast", "Sausage Patty", "Western Hash Brown", "Steamed Fresh Broccoli"],
"Lunch": ["Harissa Chicken Bulgur Apricot Salad", "Greek Chicken Wrap", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Mushroom & Sage Flatbread", "Chicken Empanada w/Aji Amarillo", "White Clam Sauce", "Linguini Pasta", "Potato Roll", "Oatmeal Craisin Cookie", "Peach Crumb Pie (w/nuts)", "Pulled Pork Buffalo Style Sandwich", "Ranch Potato Salad", "Pinto Beans", "Bleu Cheese Dressing", "Celery Stick", "Honey Lime BBQ Chicken Thigh", "Sticky Rice", "Stir Fried Chinese Greens", "Calamari Roll", "Cucumber & Avocado Roll", "Grilled Turkey Burger", "Sourdough French Toast", "Falafel Sandwich", "Sweet Potato Shoestring Fries", "Tahini Sauce", "Raita Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Roasted Garlic Onion & Pepper Pizza", "Penne with Cherry Tomato/Herb", "Creamy Rosemary Sauce", "Linguini Pasta", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Banana Cream Pie", "Hawaiian Sweet Bread", "Grilled Lemon Herb Pork Chop", "Fried Potatoes and Onions", "Fresh Cauliflower & Carrots", "Pinto Beans", "Fresh Green Beans with Garlic", "Chicken Char Siu", "Sticky Rice", "Vegetable Chow Mein", "Spinach Stir Fried with Garlic", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-10-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Apple Crepe w/Caramel Sauce", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Fiesta Vegetable Salad", "Japanese Noodle Salad", "Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Chicken Noodle Soup", "Char Burger", "Black Bean Burger", "Krinkle Cut Fries", "Grilled Turkey & Swiss on Sourdough", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Panna Cotta", "Cheese Roll", "Chocolate Chip Cookie"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Coconut & Peanut Curry (w/nuts)", "Tofu Vegetable Coconut Curry (w/nut)(vgn", "Cream of Broccoli Soup", "Caesar Salad", "Turkey Breast", "Turkey Gravy", "Herb Stuffing", "Peas", "Stir Fry Vegetables", "Garlic Red Mashed Potato", "Linguini Pasta", "White Clam Sauce", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Donut Muffin", "Blueberry Coffee Cake"],
"Lunch": ["Turkey Noodle Soup", "Ginger Peanut Tofu Wrap (w/nuts)", "Sauteed Zucchini with Garlic", "Baked Potato", "Ground Beef Soft Corn Taco", "Roasted Vegetable Quesadilla", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Penne with Rosemary Cream Sauce", "Linguini Pasta", "Mushroom Pepper Marinara", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Tuna Melt on Sourdough", "Shoestring French Fries", "Jicama Salad", "Roasted Garlic Roll", "Toll House Bar"],
"Dinner": ["Potato Leek Soup", "Blackened Catfish", "Stuffed Zucchini", "Savory Rice", "Vegetable Medley", "Baked Potato", "Chicken Mole Taco", "Bean and Cheese Hard Shell Taco", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry w/Polynesian BBQ Sauce", "Vegetable Tagine", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Cornbread", "German Apple Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Teriyaki Chicken Rice Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Chicken Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Spicy Tomato Orzo Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Rice Krispie Treat Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Pasta Bolognese", "Teriyaki Chicken Rice Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Broccoli Soup", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Chicken Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Rice Krispie Treat Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Watermelon", "Sliced Pineapple", "Grapefruit Halves", "Buckwheat Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Raspberry White Chocolate Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Potatoes O'Brien", "Buttermilk Pancake", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Pepperoni Pizza", "Penne Pasta", "Tomato Cream Sauce", "Whole Wheat French Bread", "Lemon Bar", "Peanut Butter Fudge Cupcake (w/nuts)", "Grilled Chicken Taco", "Cilantro & Onion Mix", "Fire Roasted Tomato Salsa", "Fresh Tortilla Chips", "Pinto Beans", "Vietnamese Beef Sub (Banh Mi)", "Sesame Asian Slaw Salad", "Stir Fried Bok Choy", "Salmon Roll", "Daikon Roll", "Hamburger", "Grilled Swiss & Tomato on WW", "Buttermilk Pancake", "Steak Fries", "Sriracha Mayonnaise", "Tahini Sauce", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Pepperoni Pizza", "Tomato Cream Sauce", "Fettuccine Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Apple Crisp", "Sourdough Bread", "Spiced Beef Taco", "Mexican Rice", "Cheese Enchilada", "Pinto Beans", "Honey Sriracha Glaze Brussel Sprouts", "Teriyaki Chicken Stir Fry", "Long Grain Rice", "Braised Bok Choy", "Steamed Fresh Broccoli", "Salmon Sushi Plate"],
}
},
],
},
];
export default diningMenu
