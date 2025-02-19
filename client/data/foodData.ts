const diningMenu = [
{
"date": "2025-02-19",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Chicken General Tso's", "Sweet & Sour Tofu & Veggies(w/nuts)", "Beef Milanesa", "Beef Gravy", "Sauteed Yellow Squash with Herbs", "Steamed Vegetables & Brown Rice", "Mashed Potatoes", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Pepperoni Pizza", "Margherita Pizza", "Cheese Pizza on White", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Pork Sisig", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Caramel Flan", "Chocolate Caramel Swiss Cupcake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Caesar Salad", "Chicken Marsala", "Wild Mushroom Turnover", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Spaghetti Pasta", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Pepperoni Pizza", "Margherita Pizza", "Cheese Pizza on White", "Sourdough Bread", "Coconut Poke Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Tater Tots", "Grilled Ham", "Waffle", "Multi-Grain Waffle", "Donut Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Split Pea Soup", "Chipotle Chicken Wrap", "Sauteed Swiss Chard with Garlic", "Baked Potato", "Baked Sweet Potato", "Turkey Chorizo Quesadilla", "Calabacitas Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pork Chile Verde Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Hawaiian Chicken Stir Fry (w/nuts)", "Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Malibu Burger", "Grilled Turkey & Cheddar on Sourdough", "Krinkle Cut French Fries", "Rice Shrimp & Pea Salad", "Wheat Germ Roll", "Mint Stick"],
"Dinner": ["Corn Chowder", "Baked Chicken", "Vegetable Turnover", "Savory Rice", "Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Potato Vegetable Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pork Chile Verde Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Fettuccine Pasta", "Alfredo Sauce w/Chicken/Vegetables", "Bowtie Pasta", "Pesto Sauce", "Long Grain Rice", "Wild Rice Blend", "Parmesan Pasta Salad", "Rosemary Bread", "Banana Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Tomato Basil Soup", "Roasted Potato Medley with Kale", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Raisin Bar", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Tomato Basil Soup", "Roasted Potato Medley with Kale", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Raisin Bar", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Pineapple", "Watermelon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grits w/Kale and Fried Egg", "Bacon", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Greek Chicken Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Assorted Bell Pepper Pizza on Wheat", "Penne Pasta with Pesto", "Sausage Marinara Sauce", "Farfalle Pasta", "Herb Focaccia Bread", "Mint Chocolate Chip Cookie", "Devil's Food Cupcake", "Baked Hawaiian Ham & Turkey Sandwich", "Pineapple Fried Rice", "Pinto Beans", "Carrot & Zucchini with Lemon Sauce", "Grilled Ono Fish", "Curry Green Sauce (w/nuts)", "Sticky Rice", "Stir Fried Bok Choy", "Vegetable Roll", "Spicy Tuna Roll", "Grilled BBQ Chicken Sandwich", "Bean and Cheese Burrito", "Shoestring Fries", "Black Bean Chilaquiles", "Fire Roasted Tomato Salsa", "Classic BBQ Sauce", "Spicy Mustard Sauce"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Assorted Bell Pepper Pizza on Wheat", "White Wine Garlic Sauce with Shrimp", "Fettuccine Pasta", "Penne Pasta with Pesto", "Carrot Cake w/Cream Cheese (w/nuts)", "Crusty French Bread", "Chicken Piccata", "Buttered Noodles", "Fresh Mushroom Quiche", "Pinto Beans", "Sauteed Zucchini with Garlic", "Blackened Catfish", "Cajun Remoulade Sauce", "Long Grain Rice", "Roasted Crimini Mushroom", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-02-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Eggs Turkey Benedict", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Raspberry Scone", "Cinnamon Roll"],
"Lunch": ["Sliced Ham", "Tuna Salad", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Lomo Saltado with Green Aji Sauce", "Tofu Saltado with Green Aji Sauce", "Arni Psito (Roasted Lamb)", "Spanakopita w/ Phyllo", "Steamed Fresh Carrots", "Taco Salad", "Greek Salad", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Shoestring Fries", "Baked Sweet Potato", "Baked Potato", "Black Beans", "Brown Rice", "Olive Whole Wheat Bread", "Galaktoboureko (Greek Pudding)", "Banana Chocolate Bar"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken & Vegetable Stir Fry", "Vegetable & Tofu Stir Fry", "Greens and Beans Soup", "Rotisserie Chicken", "Steamed Carrots", "Fresh Cauliflower", "Three Bean Pilaf", "Buttered Noodles", "Spinach Pasta Salad", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Pinto Beans", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Sour Cream & Chives Roll", "Riccotta Cheesecake w/Berry Compote"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Bacon Breakfast Burrito", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chocolate Swirl Bread", "Morning Glory Muffin (w/nuts)"],
"Lunch": ["Chicken Rice Soup", "Peruvian Ham Butifarra Sandwich", "Fresh Steamed Carrots", "Baked Potato", "Chicken and Bean Burrito", "Bean and Cheese Burrito", "Rice with Corn & Roasted Chiles", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "BBQ Chicken Pizza", "Mushroom & Rstd Onion Pizza on Wheat", "Herb Breadsticks", "Sesame Beef with Broccoli", "Thai Coconut Tofu Curry (w/nuts)", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Hot Dog", "Steak Fries", "Tomato Dijon Salad", "Pesto Rolls", "Black and White Brownie"],
"Dinner": ["Spicy Black Bean Soup", "BBQ Pork Spare Ribs", "Stuffed Peppers", "Mashed Potatoes", "Sauteed Squash with Herbs", "Baked Potato", "Carnitas Taco", "Bean & Cheese Entomatadas", "Rice with Corn & Roasted Chiles", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "BBQ Chicken Pizza", "Mushroom & Rstd Onion Pizza on Wheat", "Herb Breadsticks", "Kung Pao Beef & Peanuts (w/nuts)", "Kung Pao Tofu & Peanuts (w/nuts)", "Long Grain Rice", "Brown Rice", "Red Potato Salad with Dill", "Chocolate Chip Cake", "Sundried Tomato Bread"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Tomato Basil Soup", "Roasted Potato Medley with Kale", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Raisin Bar", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Tomato Basil Soup", "Roasted Potato Medley with Kale", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Raisin Bar", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Cantaloupe", "Watermelon", "Pineapple", "Make Your Own Waffle", "Quinoa Breakfast Bowl (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Muffin", "Zucchini Bread (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Oatmeal Apple Cinnamon Pancake", "Fried Potato with Onion", "Sauteed Fresh Cauliflower"],
"Lunch": ["Zucchini Quinoa Green Bean Salad", "Eggplant Marinara Panini", "Grilled Chicken Breast", "Sliced Ham", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Potato", "Long Grain Rice", "White Bean Basque Soup", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Goat Cheese and Onion Flatbread", "Pasta Carbonara", "Greek Tomato Sauce", "Linguini Pasta", "Potato Bread", "Chocolate Crinkle Cookie", "Lime Bar", "Tacos Al Pastor", "Rice with Cilantro & Onions", "Cilantro & Onion Mix", "Pinto Beans", "Fire Roasted Tomato Chipotle Salsa", "Roasted Cauliflower with Cumin", "Chicken Tikka Masala", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Oatmeal Apple Cinnamon Pancake", "Shoestring Fries", "Mushroom Lentil Burger", "Caramelized Onion", "Housemade Ketchup", "Chimichurri Sauce"],
"Dinner": ["Long Grain Rice", "Baked Potato", "White Bean Basque Soup", "Black Olive Pizza on Wheat", "Alburro Sauce", "Fettuccine Pasta", "Drunken Noodles with Chicken", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Potato Bread", "Cookies and Cream Cake", "Pork Chow Mein", "Ten Spice Fried Rice", "Braised Bok Choy", "Pinto Beans", "Sauteed Cabbage & Carrots", "Burmese Chicken Stew w/Coconut (w/nuts)", "Vegetable Coconut Curry (w/nuts)", "Basmati Rice", "Steamed Fresh Broccoli", "Asparagus & Egg Roll", "Calamari Sushi Plate"],
}
},
],
},
{
"date": "2025-02-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Carnitas Tortas", "Char Grilled Rock Fish w/Lemon Thyme", "Lemon Garlic Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Poached Pear Pecan Salad (w/nuts)", "Pasta Salad with Spinach & Feta", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "New England Clam Chowder", "Charburger", "Gardenburger", "Chicken Taquito", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Cilantro Lime Salmon", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Caesar Salad", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "Garlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Greek Pita Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Sweet Corn Tamale Casserole", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham and Pineapple Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Linguini Pasta", "Garlic Cream Sauce with Shrimp", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Jack on Sourdough", "Shoestring French Fries", "Beet Orange & Fennel Salad", "Olive Roll", "Peanut Butter Cookie (w/nuts)"],
"Dinner": ["Chicken Noodle Soup", "Hoki Fish w/Red Curry & Rice (w/nuts)", "Lemon Beurre Blanc", "Creole Beans and Rice", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Nachos", "Bean & Rice Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham and Pineapple Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce(w/nut)", "Vegetables with Peanut Sauce (w/nuts)", "Long Grain Rice", "Brown Rice", "Japanese Noodle Salad", "Crusty French Bread", "Cherry Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Tomato Basil Soup", "Roasted Potato Medley with Kale", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Raisin Bar", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Tomato Basil Soup", "Roasted Potato Medley with Kale", "Roasted Carrots", "Fries", "Potato Chip", "Lemon Crinkle Cookie", "Oatmeal Raisin Bar", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Watermelon", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs w/Vegetables", "Whole Wheat Pancake", "Sausage Patty", "Potatoes O'Brien", "Spicy Roasted Acorn Squash"],
"Lunch": ["Veg & Quinoa Salad w/Asian Vin", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Brown Rice", "New England Clam Chowder", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Pepperoni Stromboli with Provolone", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Mustard Chicken Sauce", "Fettuccine Pasta", "Whole Wheat French Bread", "Mint Sticks", "Cream Cheese Brownie Pie", "Smoked Turkey Club Sandwich", "Grilled Cheese and Tomato on Wheat", "Roasted Potato Wedges", "Pinto Beans", "Sauteed Kale & Collard Greens", "Blackened Catfish", "Cajun Rice", "Fresh Vegetable Medley", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Cheeseburger", "Whole Wheat Pancake", "Cheese Quesadilla", "Crinkle Cut French Fries", "Pico De Gallo", "Housemade Ketchup", "Caramelized Onion Compote"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "New England Clam Chowder", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Pepperoni Stromboli with Provolone", "Marinara Sauce with Meatballs", "Spaghetti", "Mustard Chicken Sauce", "Fettuccine Pasta", "Whole Wheat French Bread", "Mango Cake", "Herb Marinated Rotisserie Chicken", "Baby Red Oven Roasted Potatoes", "Pinto Beans", "Southwest Quinoa & Black Bean Bake", "Steamed Broccoli & Cauliflower", "Lemon Baked Salmon", "Rice with Cilantro & Onions", "Dragon Noodles", "Seasoned Vegetable Medley", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-02-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Grilled Pork Chops", "Country Gravy", "Sauteed Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Chicken Sausage Patty", "Tater Tots", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Black Beans", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Sticky Rice", "Chicken General Tso's", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Kale & Arugula Salad w/Cranberries", "Roast Beef", "Beef Gravy", "Sauteed Zucchini Sticks", "Baby Carrots with Tarragon", "Ratatouille with White Beans", "Oven Browned Potatoes", "Whole Wheat Spaghetti", "Chicken Marinara Sauce", "Bowtie Pasta", "Fresh Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Rosemary Roll", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["White Bean Basque Soup", "Chicken Philly Sandwich", "Corn", "Baked Potato", "Chorizo Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Patty", "Grilled Ham", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Pasta Salad w/Chicken & Sundried Tomato", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Lemon Yogurt Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Vegetable Soup", "BBQ Chicken", "Sauteed Spinach w/ Onion & Garlic", "Steamed Red Potatoes with Parsley", "Baked Potato", "Ground Beef Soft Taco", "Bean and Cheese Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Chorizo Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Teriyaki Chicken Stir Fry", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Kale Caesar Salad", "Parmesan Herb Bread", "Brownie & Walnut Pie (w/nuts)"],
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
"Brunch": ["Honeydew Melon", "Seedless Red Grape", "Watermelon", "Granola Cantaloupe Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Quinoa", "Oatmeal", "Make Your Own Waffle", "Baby Spinach", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Roasted Garlic Onion & Pepper Pizza", "Pasta Primavera", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Flour Tortilla", "Banana Nut Bread (w/nuts)", "Ham & Egg Breakfast Sandwich", "Strawberry Blintz", "Pinto Beans", "Creamed Spinach", "Spicy Black Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Turkey Bacon", "Roasted Breakfast Potato", "Whole Wheat Banana Pancake", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Spicy Black Bean Soup", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Roasted Garlic Onion & Pepper Pizza", "Pasta Primavera", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Gingerbread Cake", "Wheat Germ Bread", "Roast Turkey Breast", "Turkey Gravy", "Fresh Mashed Potatoes", "Honey Spiced Sweet Potato", "Pinto Beans", "Roasted Broccoli", "Hoisin Chicken", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Brown Rice Calamari Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-02-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Philly Cheese Steak Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "French Toast", "Sausage Links", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "White Navy Beans", "Make Your Own Waffle", "Cinnamon Coffee Cake", "Chocolate Pistachio Biscotti (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Stir Fry Noodles with Vegetables", "Tomato Rice Soup", "Caesar Salad", "Turkey Meatloaf", "Fresh Cauliflower", "Corn", "Risotto with Fresh Vegetables", "Linguini Pasta", "Red Clam Sauce", "Pasta Primavera with Tomato Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Turkey Sub Sandwich", "Zucchini & Crookneck Saute ( vgn)", "Baked Potato", "Salami Pizza", "Assorted Bell Pepper Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Vegetable Frittata", "Chicken Sausage Patty", "Sliced Potato with Onions", "Multi-Grain Waffle", "Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Sticky Bun (w/nuts)"],
"Dinner": ["Pasta Fazool Soup", "Fish Cake", "Lemon Dill Sauce", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Chicken Chile Verde Tostada", "Vegetable Corn Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Salami Pizza", "Assorted Bell Pepper Pizza", "Herb Breadsticks", "Penne Pasta", "Creamy Bolognese Sauce", "Whole Grain Rotini", "Tomato Leek Marinara", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Focaccia Bread", "Devil's Food Cake with Mocha Icing"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Honeydew Melon", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Quinoa", "Make Your Own Waffle", "Baby Spinach", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Quattro Formaggio Pizza on Wheat", "Spicy Tomato Sauce", "Farfalle Pasta", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Flour Tortilla", "Orange Scone", "Breakfast Burrito", "Refried Beans", "Fire Roasted Tomato Chipotle Salsa", "Ham & Cheddar Quiche", "Quinoa Vegetable Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Roasted Breakfast Potato", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Broccoli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Quinoa Vegetable Soup", "Quattro Formaggio Pizza on Wheat", "Spicy Marinara Sauce", "Farfalle Pasta", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Killer Brownie (w/nuts)", "Whole Wheat French Bread", "Tacos Al Pastor", "Cilantro & Onion Mix", "Fire Roasted Tomato Chipotle Salsa", "Mexican Rice", "Refried Beans", "Lettuce & Cheese &Tomatoes", "Vindaloo Chicken", "Basmati Rice", "Moroccan Tagine with Harissa", "Steamed Broccoli & Cauliflower", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-02-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Chicken Sausage Patty", "Home Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Ginger with Cardamom Scone"],
"Lunch": ["Tuna Salad", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Smoked Gouda", "Brown Rice", "Chicken Stir Fry with Green Beans", "Spicy Tofu w/Vegetables & Noodles", "Fish Sandwich on Brioche Bun", "Roasted Potato Wedges", "Fresh Spinach with Garlic", "Steamed Zucchini", "Bermuda Salad", "Japanese Noodle Salad", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Gumbo Soup", "Grilled Chicken Burger", "Black Bean Burger", "Egyptian Fava Bean Falafel on Pita", "Tahini Sauce", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Irish Soda Bread", "Oatmeal Raisin Cookie", "Peanut Butter Fudge Cupcake (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Miso Broth with Udon Noodles", "Grilled Rockfish", "Black Bean Enchilada", "Steamed Zucchini", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Japanese Noodle Salad", "Fettuccine with Chicken, Olives & Garlic", "Penne Pasta", "Tomato and Leek Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Bread", "Boston Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Wheat Pancakes", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Sweet Salvadorian Bread"],
"Lunch": ["Lentil Soup", "Grilled Vegetable Wrap", "Sauteed Swiss Chard with Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Bean & Cheese Sope", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Sausage and Mushroom Pizza", "Cheese Pizza", "Herb Breadsticks", "Pineapple Chicken with Rice", "Pineapple Fried Rice with Tofu", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheese and Tomato on Wheat", "Krinkle Cut Fries", "Santa Fe Salad", "Buttermilk Biscuit", "Confetti Cake w/Butter Cream Icing"],
"Dinner": ["Broccoli Cheese Soup", "Turkey Meatloaf", "Macaroni and Cheese", "French Cut Green Beans", "Mashed Potatoes", "Turkey Gravy", "Baked Potato", "Baked Sweet Potato", "Pork Soft Taco", "Bean and Rice Wet Burrito", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Sausage and Mushroom Pizza", "Cheese Pizza", "Herb Breadsticks", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Stir Fry with Brown Rice", "Wild Rice Blend", "Long Grain Rice", "Cucumber & Onion Salad", "Hawaiian Sweet Bread", "Apple Crisp"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Banana Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Pineapple", "Watermelon", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Parfait (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Yogurt Muffin", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Greek Chicken Wrap", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Chicken Noodle Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Spicy Marinara Sauce", "Farfalle Pasta", "White Wine Garlic Sauce with Chicken", "Linguini Pasta", "Hawaiian Sweet Bread", "Peanut Butter Cookie (w/nuts)", "M&M Bar (w/nuts)", "Turkey Melt", "French Potato Salad", "White Navy Beans", "Bleu Cheese Dressing", "Celery Stick", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Salmon Roll", "Tempura Onion Roll", "Shrimp Quesadilla", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Fire Roasted Tomato Salsa", "Chipotle Aioli", "Cucumber Tzatziki"],
"Dinner": ["Quinoa", "Baked Potato", "Chicken Noodle Soup", "Pineapple & Jalapeno Pizza on Wheat", "White Wine Garlic Sauce with Shrimp", "Linguini Pasta", "Spicy Marinara Sauce", "Farfalle Pasta", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Mongolian Beef with Rice", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2025-02-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Croissant with Scrm Egg/Ham/Cheese", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Banana Bread Pudding", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Beef Chow Mein", "Vegetable Chow Mein", "Chicken Tostada", "Vegetable Tostada", "Corn with Red Peppers", "Santa Fe Salad", "Ambrosia Salad (w/nuts)", "Assorted Meat Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Roasted Butternut Soup w/Pepitas", "Char Burger", "Grilled Vegetable Burger", "Grilled Ham and Swiss on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Pao de Queijo", "Zebra Bar (w/nuts)", "Mandarin Orange Cake"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable & Tofu Stir Fry", "Broccoli Garlic Soup", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Caesar Salad", "Fettucine Alfredo", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Pumpkin Cheesecake Pie", "Graham Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Raspberry Cream Coffee Cake (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Roasted Butternut Squash Soup", "Grilled Chicken Vincenza Sandwich", "Fresh Carrots with Thyme", "Baked Potato", "Chicken Mole Taco", "Vegetable Taco", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Bacon Jalapeno Pizza", "Tomato Pesto Pizza on Wheat Crust", "Herb Breadsticks", "Cheese Ravioli with Marinara", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Roast Beef & Jack Sandwich", "Steak Fries", "Mediterranean Orzo Pasta Salad", "Sour Cream & Chive Roll", "Toll House Bar"],
"Dinner": ["Mulligatawny Soup", "Tandoori Style Baked Chicken", "Roasted Indian Cauliflower", "Indian Lentils w/Long Grain Rice", "Baked Potato", "Pork Vindaloo", "Potato Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Bacon Jalapeno Pizza", "Samosas w/Curried Potatoes & Chutney", "Tomato Pesto Pizza on Wheat Crust", "Herb Breadsticks", "Chicken Madras", "Vegan Madras", "Shrimp Chow Mein", "Cashew Tofu Stir Fry (w/nuts)", "Basmati Rice", "Brown Rice", "Green Papaya Salad", "Garlic Naan Bread", "Indian Bread Pudding (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Watermelon", "Pineapple", "Sliced Cantalope", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Raspberry Parfait (w/nuts)", "Buckwheat Raspberry Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Orange Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Breakfast Burrito", "Hash Browns", "Sausage Patty", "Sauteed Kale & Collard Greens"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Vegetable Minestrone Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Tomato Cream Sauce", "Fettuccine Pasta", "Potato Bread", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie (w/nuts)", "Grilled Chicken Taco", "Fire Roasted Tomato Salsa", "Cilantro & Onion Mix", "Refried Beans", "Sauteed Zucchini with Garlic", "Pork Loin with Green Curry (w/nuts)", "Sticky Rice", "Spinach Stir Fried with Garlic", "Spicy Scallop Sushi Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Breakfast Burrito", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Housemade Ketchup"],
"Dinner": ["Baked Sweet Potato", "Vegetable Minestrone Soup", "Long Grain Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Tomato Cream Sauce", "Fettuccine Pasta", "Chicken & Wild Mushroom Risotto", "New York Style Crumb Cake", "Everything Naan", "Chicken Tetrazzini", "Pasta Shells w/Eggplant & Marinara", "White Navy Beans", "Carrots with Fresh Thyme", "Fresh Green Beans with Garlic", "Beef Pho", "Miso Ramen", "Braised Bok Choy", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
