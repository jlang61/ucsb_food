const diningMenu = [
{
"date": "2025-03-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "Sausage Patty", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread", "Cranberry Almond Biscotti (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Chicken Biryani", "Stir Fry Noodles with Vegetables", "Thai Peanut Sauce (w/nuts)", "Caldo de Marisco", "Cactus Taco", "Corn with Red Peppers", "Black Beans", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Lentil Soup", "Grilled Chicken Taco", "Grilled Turkey & Swiss on Sourdough", "Black Bean Burger", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Ginger Basmati Rice", "Focaccia Bread", "Chocolate Cupcake w/Choc Icing", "Sweet Rice Cake (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Chicken & Vegetable Stir Fry", "Vegetable & Tofu Stir Fry", "Tortilla Chicken Soup", "Creamy Polenta w/Parmesan Cheese", "Braised Lamb Ragu", "Steamed Crookneck Squash", "Italian Grilled Eggplant", "Mediterranian Couscous (w/nuts)", "Whole Wheat Penne Pasta", "Fresh Basil Pesto", "Spaghetti Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Whole Wheat French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Cinnamon Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Noodle Soup", "Grilled Tilapia with Lemon Pepper", "Green Beans Almondine (w/nuts)", "Baked Potato", "Baked Sweet Potato", "Pork Chile Verde Burrito", "Grilled Vegetable Soft Taco", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomatillo Guajillo Salsa", "Hawaiian Pizza", "Thai Pizza (w/nuts)", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Penne Pasta", "Pesto Sauce", "Long Grain Rice", "Brown Rice", "Grilled Chicken Burger", "Black Bean Burger", "Grilled Swiss on Whole Wheat", "Krinkle Cut French Fries", "Kale Caesar Salad", "Sesame Roll", "Mexican Wedding Cookie (w/nuts)"],
"Dinner": ["Curried Chicken Soup", "Turkey Lasagna", "Mushroom Stroganoff", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Beef & Bean Chimichanga", "Potato Gorda with Black Beans", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomatillo Guajillo Salsa", "Hawaiian Pizza", "Thai Pizza (w/nuts)", "Herb Breadsticks", "Chicken Chop Suey", "Vegetable Chop Suey", "Brown Rice", "Jasmine Rice", "Cucumber & Onion Salad", "Garlic Roll", "French Crumb Apple Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Sugar Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Sugar Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Honeydew Melon", "Sliced Pineapple", "Fresh Strawberry", "Make Your Own Waffle", "Quinoa Breakfast Bowl (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Bread", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Migas with Tomato Chipotle Coulis", "Black Beans", "Western Hash Brown", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Thai Chicken Peanut Wrap (w/nuts)", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Chicken Florentine Pizza w/White Sauce", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Pasta Primavera", "Thick Focaccia Bread", "Toll House Bar", "Mocha Cupcake", "Pork Chile Verde Taco", "Spanish Rice w/Roasted Corn", "Fire Roasted Tomato Salsa", "Cilantro & Onion Mix", "Pinto Beans", "Sauteed Zucchini with Garlic", "Vietnamese Beef Sub (Banh Mi)", "Sesame Asian Slaw Salad", "Sticky Rice", "Stir Fried Bok Choy", "Vegetable Roll", "Spicy Tuna Roll", "Hot Chicken Philly Cheese Steak Sandwich", "Mushroom Tofu Veggie Slider (w/nuts)", "Migas with Tomato Chipotle Coulis", "Shoestring Fries", "Pico De Gallo", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Chicken Florentine Pizza w/White Sauce", "Pasta Primavera", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Spice & Walnut Cake (w/nuts)", "Thick Focaccia Bread", "Vegetable Black Bean Chili", "Pot Roast", "Mashed Red Potatoes w/ Garlic", "Roasted Carrots", "Honey Sriracha Glaze Brussel Sprouts", "Korean Beef Bulgogi", "Sticky Rice", "Mashed Yams", "Kimchi", "Bok Choy & Nappa Cabbage w/Sesame", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-03-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Apple Cinnamon Pancake", "Beefy Eggs Machaca", "Cottage Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Pumpkin & Walnut Muffin (w/nuts)", "Pinch Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Smoked Gouda", "Sliced Swiss Cheese", "Sticky Rice", "Beef Stir Fry with Spicy Sauce", "Tofu Peanut Veggie Kung Pao(w/nut)", "Colorful Coleslaw", "Crunchy Fruit Salad (w/nuts)", "Chicken Tikka Masala", "Sauteed Yellow Squash with Herbs", "Couscous", "Onion & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Assorted Meat Pizza", "Turkey Noodle Soup", "Grass Fed Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Sweet Potato", "Baked Potato", "Pinto Beans", "Brown Rice", "Classic French Napoleon", "Pesto Roll", "Nut and Seed Bar (w/nuts)"],
"Dinner": ["Garden Wild Rice Salad", "Antipasto Salad", "Sticky Rice", "Pork Chow Mein", "Five Spice Vegetable Stir Fry", "Cream of Broccoli Soup", "Caesar Salad", "Beef and Bean Tostada", "Fresh Broccoli Spears", "Fresh Vegetable Medley", "Ratatouille with White Beans", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Fettucine Alfredo", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Olive Whole Wheat Bread", "Riccotta Cheesecake w/Berry Compote"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Quesadilla", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Cranberry Orange Muffin", "Lemon Scone"],
"Lunch": ["Turkey Rice Soup", "Chipotle Chicken Wrap", "Roasted Cauliflower w/Garlic", "Baked Potato", "Huevos Rancheros", "Bean & Rice Tostada", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Buffalo Chicken Pizza", "Tomato Pesto Pizza on Wheat Crust", "Herb Breadsticks", "Pork Fried Rice", "Vegetable Fried Rice", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Steak Fries", "Potato Salad", "Jalapeno Roll", "Oatmeal Lace Cookie"],
"Dinner": ["Spicy Navy Bean Soup", "Grilled Chicken with Ginger", "Ratatouille with White Beans", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Carnitas Burrito", "Chipotle Tempeh & Veggie Tacos", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Buffalo Chicken Pizza", "Tomato Pesto Pizza on Wheat Crust", "Herb Breadsticks", "Cellentaini Pasta", "Creamy Rosemary Sauce", "Marinara Sauce", "Wheat Penne Pasta", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Onion Bread", "Boston Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Sugar Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Sugar Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Cantalope", "Honeydew Melon", "Pineapple", "Fluffy Whole Wheat Waffles", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Orange Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Home Fried Potatos", "Bacon", "Sauteed Kale"],
"Lunch": ["Pear & Gorgonzola Salad (w/nuts)", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Sliced Ham", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Potato", "Basmati Rice", "Classic French Onion Soup with Croutons", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Chicken Artichoke Pesto Flatbread", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Penne Pasta", "Whole Wheat French Bread", "Butterscotch Bar (w/nuts)", "Baklava Cookie (w/nuts)", "Turkey Benedict", "Roasted Red Potato Wedges", "Spinach Quiche", "Pinto Beans", "Sauteed Zucchini with Garlic", "Vindaloo Chicken", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "Lentil Dahl w/Coconut Milk (w/nuts)", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "White Bean & Red Lentil Patty", "Pilpelchuma Sauce", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Wild Rice", "Baked Potato", "Sweet Potato Soup (w/nuts)", "Jamaican Braised Oxtails", "Creole Shrimp Mofongo", "Jamaican Rasta Pasta", "Watermelon Salad", "Cremasse (w/nuts)", "Rum & Pecan Pudding Cake", "Guava & Cream Cheese Pastelitos", "Caribbean Coco Bread (w/nuts)", "Pork Spare Ribs", "Guava Rum BBQ Sauce", "Habichuelas Guisadas", "Black Beans", "Carrot Curry (w/nuts)", "Grilled Jerk Chicken", "Avocado Lime Shrimp Salad", "Cuban Style Black Beans & Rice", "Jamaican Curry Goat Empanada", "Jamaican Vegetable Empanada (w/nuts)", "Caribbean Callaloo Vegetable(w/nuts)(vgn"],
}
},
],
},
{
"date": "2025-03-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Bacon and Cheese Omelet", "Western Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cypriot Tyropita", "Assorted Bagels & Condiments"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Gazpacho Salad", "French Potato Salad", "Irish Shepherd's Beef Pie", "Fresh Spinach with Garlic", "Steamed Zucchini", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "New England Clam Chowder", "Cheeseburger", "Grilled Vegetable Burger", "Fish Sandwich on Brioche Bun", "Sweet Potato Fries", "Baked Sweet Potato", "Baked Potato", "Long Grain Rice", "Cheese Onion Roll", "Toll House Pie (w/nuts)", "Snickerdoodle"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Common Thresher Shark w/Chermoula Sauce", "Sauteed Kale", "Fire Roasted Tomato Salsa", "Vegetable Noodle Soup", "French Potato Salad", "Rotisserie Chicken", "Potato Gorda", "Kale with Fresh Garlic", "Sauteed Vegetables Rice and Beans", "Fettuccine", "Chicken Marinara Sauce", "Pasta Shells w/Eggplant & Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Ricotta Pepper Bread", "Key Lime Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Scrambled Eggs with Ham & Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Banana Coffee Cake (w/nuts)"],
"Lunch": ["Manhattan Clam Chowder", "Italian Sub", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Bean & Cheese Nachos", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon Pizza", "Pineapple Pizza", "Herb Breadsticks", "Scallops & Mushroom Pasta", "Alburro Sauce", "Wild Rice Blend", "Long Grain Rice", "Char Burger", "Black Bean Burger", "Grilled Turkey Burger on Wheat Bun", "Shoestring French Fries", "Pasta Salad with Spinach & Feta", "Sour Cream & Chive Roll", "Sweet Salvadorian Bread"],
"Dinner": ["Tortilla Soup", "Lemon Baked Ono", "Four Bean Stew", "Jasmine Rice", "Sauteed Zucchini with Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Potato Chorizo Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon Pizza", "Pineapple Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry", "Dragon Noodles", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Yeast Bread", "Toll House Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Sugar Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "Sugar Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Cantaloupe", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Pineapple Ham Fried Rice", "Potatoes O'Brien", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Chicken Cobb Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Wild Rice Blend", "Tortilla Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Broccolini & Salami Stromboli", "Mushroom & Sage Flatbread", "Roasted Vegetable Marinara Sauce", "Cellentani Pasta", "Hawaiian Sweet Roll", "Shortbread Cookie", "Lemon Pie", "Char Grilled Cajun Chicken Sandwich", "House Made Baked Beans", "Tangy Apple Cabbage Slaw", "Sauteed Kale & Collard Greens", "Street Style Fish Taco", "Avocado Salsa", "Cilantro & Onion Mix", "Grilled Zucchini & Tomatoes", "Spicy Tuna Bowl", "Cucumber & Avocado Roll", "Bacon Cheeseburger", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Pilpelchuma Sauce", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Broccolini & Salami Stromboli", "Linguini & Bacon/Tomato Cream Sauce", "Roasted Vegetable Marinara Sauce", "Cellentani Pasta", "Hawaiian Sweet Roll", "Blueberry Lemon Cake", "Rotisserie Chicken with BBQ Sauce", "Macaroni & Cheese", "Pinto Beans", "Fresh Mashed Potatoes", "Steamed Broccoli & Cauliflower", "Tilapia with Red Curry Sauce (w/nuts)", "Basmati Rice", "Moo Shu Vegetables with Tofu", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-03-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Eggs Turkey Benedict", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Scone"],
"Brunch": ["Sliced Turkey Pastrami", "Sliced Genoa Salami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Tomato Soup w/Fresh Vegetables", "Chicken Enchilada", "Corn with Red Peppers", "Refried Beans", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Oatmeal", "Banana Pancake", "Cage Free Scrambled Eggs with Cheese", "Grilled Ham with Honey Glaze", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "White Navy Beans", "Fluffy Whole Wheat Waffles", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Sticky Rice", "Stir Fry Pork with Vegetables", "Vegetable & Tofu Stir Fry", "Ham & Navy Bean Soup", "Caesar Salad", "Roast Beef", "Au Jus", "Polenta with Marinara Sauce", "Peas", "Sauteed Button Mushrooms", "Whole Wheat Pasta Rigate", "Chicken Sausage & Mushroom Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Pineapple Upside Down Cake", "Bagels-Breads & Cereals- See for Choices"],
"Brunch": ["Minestrone Soup", "Patty Melt", "Vegetable Medley", "Baked Potato", "Tomato Basil Pizza w/ White Sauce", "Veggie Jalapeno Pesto Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Multi-Grain Waffle", "Waffle", "Quinoa Black Bean Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Pineapple Upside Down Cake"],
"Dinner": ["Cream of Mushroom Soup", "Sweet & Sour Pot Roast", "Vegetable Risotto", "Garlic Mashed Red Potatoes", "French Cut Green Beans", "Baked Potato", "Chicken and Rice Tostada", "Bean & Cheese Sope", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Tomato Basil Pizza w/ White Sauce", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Fettuccine Pasta", "Sausage Marinara Sauce", "Whole Grain Rotini", "Sun Dried Tomato Sauce", "Long Grain Rice", "Brown Rice", "French Potato Salad", "Sourdough Rounds", "Carrot Cake w/Cream Cheese (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Honeydew Melon", "Sliced Pineapple", "Watermelon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "8 Grain Hot Cereal", "Flour Tortilla", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Pancakes", "Sausage Links", "Roasted Breakfast Potato"],
"Brunch": ["Grapefruit Halves", "Watermelon", "Seedless Red Grape", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Pickled Red Onion", "Baby Spinach", "Lemon Mint Quinoa (w/nuts)", "Three Cheese Pizza on White", "Fresh Tomato Basil Garlic Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti", "Whole Wheat Banana Bread", "Flour Tortilla", "Chilaquiles (No Egg)", "Fried Eggs", "Potato Rajas Mole Enchilada", "Black Beans", "Roasted Yam w/Rosemary & Chile", "Chicken Noodle Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Bread Sourdough", "Pork Loin Roast Rosemary Scented", "Apple Chutney", "Pinto Beans", "Garlic Mashed Potatoes", "Steamed Fresh Broccoli", "Asian Beef Bowl", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Brown Rice Calamari Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-03-16",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Caesar Salad", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Apple Cinnamon Pancake", "Chorizo and Eggs", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Black Beans", "Make Your Own Waffle", "Blueberry Muffin", "Banana Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Summer Vegetables", "Handmade Vegetable Egg Roll", "Beef Albondigas Soup", "Blue Cheese Spinach Bacon Salad (w/nuts)", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Cauliflower", "Rice with Cilantro & Onions", "Rotini Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Ham & Cheese Pizza", "Cheese Pizza on White", "Pesto and Vegetable Pizza on Wheat", "Jalapeno Cornbread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Soup", "BBQ Chicken Sandwich", "Italian Mixed Vegetables", "Baked Potato", "Salami Pizza", "Olive Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Parmesan Pasta Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Glazed Raisin Bread", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Cream of Sweet Potato Soup", "Char Grilled Pork Chop", "Roasted Potato Wedges", "Fresh Broccoli Spears", "Baked Potato", "Beef Chili Colorado Burrito", "Black Bean and Rice Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Salami Pizza", "Olive Pizza", "Herb Breadsticks", "Chicken Stir Fry w/Polynesian BBQ Sauce", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Macaroni Salad", "Onion Walnut Bread (w/nuts)", "German Apple Cake w/Crm Chse (w/nuts) (v"],
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
"Brunch": ["Pineapple", "Cantalope", "Organic Fresh Strawberry", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Grits", "Long Grain Rice", "Make Your Own Waffle", "Watermelon", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "Italian Sausage Tomato Frittata", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Bacon Egg & Sweet Potato Hash", "Grilled Cheese on Sourdough", "Pinto Beans", "Kale with Fresh Garlic", "Bean & Barley Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Buttermilk Pancakes", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Bean & Barley Soup", "Watermelon Salad", "Pickled Red Onion", "Lemon Mint Quinoa (w/nuts)", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "Rigatoni Mozzarella", "Peach Crumb Pie (w/nuts)", "Ciabatta Roll", "Red Beans and Rice", "Rosemary Roasted Chicken Quarters", "Roasted Potato Wedges", "Roasted Broccoli", "Pork Balchao", "Sticky Rice", "Thai Vegetable & Peanut Noodle(w/nut)", "Steamed Broccoli & Cauliflower", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-03-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Brown Rice", "Chicken & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Guinness Beef Stew", "Mashed Potatoes", "Stir Fry Vegetables", "Greek Pasta Salad", "Pork Tonnato Salad", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu (w/nuts)", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Couscous", "Pesto Roll", "Special Day Rice Krispie Treat", "Celebration Day Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Sauteed Kale", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Greek Pasta Salad", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cracked Wheat Bread", "St. Patrick's Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scramble Eggs with Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Gumbo Soup", "Tuna Wrap", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Shredded Beef Tostada", "Bean and Rice Burrito", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Jack on Sourdough", "Krinkle Cut French Fries", "Southwestern Chopped Salad", "Hawaiian Sweet Roll", "Oatmeal Choc Chip Cookie (w/nuts)"],
"Dinner": ["Potato Cheese Soup", "Roast Beef", "Vegetable Rice Pilaf", "Roasted Potato Halves", "Carrots with Tarragon", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Roasted Vegetable Quesadilla", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne Pasta", "Chicken Marinara", "Wheat Penne Primavera", "Long Grain Rice", "Brown Rice", "Chickpea Salad", "Whole Wheat Sunflower Roll", "Marble Cake w/Chocolate Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "St. Pattys Treat", "Ginger Cookie", "Lemon Crinkle Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "St. Pattys Treat", "Ginger Cookie", "Lemon Crinkle Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Cantaloupe", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Buckwheat Parfait (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Maple Pecan Scone (w/nuts)", "Applesauce Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Sausage Links", "Western Hash Brown", "Roasted Broccoli"],
"Lunch": ["Kale & Quinoa Salad w/Ricotta (w/nuts)", "Panini Pizza", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Potato Leek Soup", "Edamame & Pea Pod Salad", "Pickled Red Onion", "Pearl Barley", "Mushroom & Sage Flatbread", "Taco Pizza", "Marinara Sauce with Sausage", "Linguini Pasta", "Hawaiian Sweet Bread", "Chocolate Cupcake w/Fudge Icing", "Snickerdoodle Cookie", "Vietnamese BBQ Beef Sub", "Vegetable Wrap", "Pinto Beans", "French Potato Salad", "Roasted Carrots", "Shrimp & Chicken Creole Cajun", "Steamed Broccoli & Cauliflower", "Calamari Roll", "Cucumber & Avocado Roll", "Cheeseburger", "Banana Wheat Pancakes", "Grilled Mediterranean Sandwich", "Crinkle Cut French Fries", "Caramelized Onion", "Housemade Ketchup", "Spicy Mustard Sauce"],
"Dinner": ["Baked Sweet Potato", "Quinoa", "Potato Leek Soup", "Taco Pizza", "Penne w/Butternut Squash Sauce", "Sausage Marinara Sauce", "Linguini Pasta", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Hawaiian Sweet Roll", "Lemon Pie", "Chicken and Black Bean Burrito", "Bean Rice & Cheese Burrito", "Roasted Tomato Salsa", "Pinto Beans", "Fresh Cauliflower & Carrots", "Pork Spare Ribs", "Spicy Ginger BBQ Sauce", "Sticky Rice", "Stir Fried Chinese Greens", "Spicy Hunan Cauliflower", "Salmon Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-03-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Turkey", "Egg Salad", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Cucumber & Onion Salad", "Yogurt Potato Salad", "Turkey Club Wrap", "Steamed Vegetables & Brown Rice", "Green Bean Almondine (w/nuts)", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Refried Beans", "Classic Miso Soup", "Char Burger", "Black Bean Burger", "Quesadilla", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Tsoureki (Greek Easter Bread)", "Pecan Pie Bar (w/nuts)", "Cowboy Cookie Bar"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Yogurt Potato Salad", "Rockfish Piccata", "Fresh Corn on the Cob", "Sauteed Zucchini with Garlic", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Arabiata Sauce (w/nuts)", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Cream Cheese Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Pumpkin & Walnut Muffin (w/nuts)", "Cranberry Orange Bread (w/nuts)"],
"Lunch": ["Coconut Carrot Soup (w/nuts)", "Asian Beef Lettuce Wrap", "Mixed Vegetables", "Baked Potato", "Beef Birria", "Black Bean Tostada", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Spicy Pepper Sausage & Kale Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Penne with Chicken & Mushrooms", "Herbed Penne/Olive Oil/Garlic", "Brown Rice", "Long Grain Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese &Tomato on Wheat", "Shoestring French Fries", "Taco Salad", "Banana Chocolate Chip Bar", "Cheese Roll"],
"Dinner": ["Minestrone Soup", "Baked Ono with Garlic & Herb", "Vegetable Turnover", "Savory Rice", "Vegetable Medley", "Baked Potato", "Beef Quesadilla", "Black Bean and Rice Burrito", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Spicy Pepper Sausage & Kale Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Pork Stir Fry with Green Beans", "Cashew Tofu Stir Fry (w/nuts)", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Rosemary Bread", "Poppyseed Cake w/Sour Cream Filling"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "St. Pattys Treat", "Ginger Cookie", "Lemon Crinkle Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Peri Peri Chicken w/Spoon Bread", "Pasta Bolognese", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Blueberry Mango Spinach Salad", "Baked Pesto Pasta with Chicken", "Ham and Swiss Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Spicy Yellow Curry w/Tofu (w/nuts)", "House Salad", "Hummus with Celery & Carrots", "Split Pea Soup w/Smokey Tofu", "Sautee Spinach & Onions w/Garlic", "Steamed Zucchini & Crookneck Squash", "Fries", "Potato Chip", "St. Pattys Treat", "Ginger Cookie", "Lemon Crinkle Cookie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Honeydew Melon", "Cantaloupe", "Seedless Red Grape", "Make Your Own Waffle", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Baby Spinach", "Cream of Wheat", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Whole Wheat Banana Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Huevos Rancheros", "Refried Beans", "Roasted Tomato Salsa", "Fall Vegetable Hash"],
"Lunch": ["Vegetarian Taco Salad", "Chicken Chipotle Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Turkey Rice Soup", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Three Cheese Flatbread", "Chicken Florentine Pizza w/White Sauce", "Fettuccine Carolina", "Challah Bread", "Walnut Orange Cake (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Chicken Caesar Salad", "Garlic French Bread", "Mushroom Mozzerella Melt", "Pinto Beans", "Fresh Cauliflower", "Mongolian Beef with Rice", "Long Grain Rice", "Stir Fried Bok Choy", "Spicy Scallop Sushi Roll", "Daikon Roll", "Grilled Turkey Burger", "Grilled Swiss & Tomato on WW", "Sourdough French Toast", "Steak Fries", "Caramelized Onion", "Spicy Mustard Sauce", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Rice Soup", "Chicken Florentine Pizza w/White Sauce", "Fettuccine Alfredo", "Roasted Red Pepper Sauce", "Chickpea Pasta", "Edamame & Pea Pod Salad", "Umami Sauce", "Pearl Barley", "Chocolate Chocolate Chip Bar", "Challah Bread", "Beef Bourguignon with Noodles", "Seasoned Sweet Potato Halves", "Pinto Beans", "Sauteed Cabbage & Carrots", "Chicken with Chermoula & Lemon", "Couscous", "Vegetable Tagine", "Orange Infused Green Beans", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
