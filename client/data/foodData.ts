const diningMenu = [
{
"date": "2024-11-11",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Mixed Vegetables", "Grilled Pork Chops", "Country Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Chicken Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Banana Coffee Cake (w/nuts)", "Ginger with Cardamom Scone"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Spicy Kale Caesar Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Classic Miso Soup", "Fettucine Alfredo", "Whole Wheat Penne Pasta", "Tomato and Leek Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Bread", "Boston Cream Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Lentil Soup", "Turkey Wrap", "Kale/Peppers and Garlic", "Baked Potato", "Baked Sweet Potato", "Sausage Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Pasilla Chile Scramble Eggs", "Cage Free Scrambled Eggs", "Scrambled Egg Whites", "Sausage Patty", "Tater Tots", "Multi-Grain Waffle", "Waffle", "Lemon Herb Quinoa Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Granola Parfait", "Bagels-Breads & Cereals- See for Choices", "Sticky Bun (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Ono with Red Curry Sauce & Rice (w/nuts)", "Eggplant Parmesan Casserole", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Bean & Cheese Entomatadas", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Stir Fry with Black Bean Sauce", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Arugula Salad with Almond (w/nuts)", "Sesame Bread", "Banana Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Watermelon", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Pickled Asian Mushroom", "Baby Spinach", "Bulgur Wheat", "Onion Pizza", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Linguini Pasta", "Greek Tomato Sauce", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Turkey Vegetable Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Apple Cranberry Pancake Topping", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Turkey Vegetable Soup", "Pesto and Vegetable Pizza on Wheat", "Chili Macaroni", "Garden Vegetable Marinara", "Linguini Pasta", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Brownie Pie", "Hawaiian Sweet Bread", "Pork Chinese BBQ", "Vegetable Fried Rice", "White Beans", "Braised Bok Choy", "Jerk Chicken", "Long Grain Rice", "Red Beans & Rice", "Sauteed Kale", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-11-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Croissant with Scrm Egg/Ham/Cheese", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread Pudding", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Santa Fe Salad", "Ambrosia Salad (w/nuts)", "Chicken Spinach & Mushroom Lasagna", "Fresh Herb Polenta with Marinara", "Green Beans", "Brown Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Egg Drop Soup", "Char Burger", "Grilled Vegetable Burger", "Hot Dog", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Zebra Bar (w/nuts)", "Mandarin Orange Cake", "Pao de Queijo"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable & Tofu Stir Fry", "Caesar Salad", "Lemon Baked Salmon", "Black Bean Enchilada", "Spanish Corn", "Steamed Zucchini", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Broccoli Garlic Soup", "Fettuccine with Chicken, Olives & Garlic", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Pumpkin Cheesecake Pie", "Graham Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Scone", "Cinnamon Bread"],
"Lunch": ["Tomato Rice Soup", "Herb & Garlic Crusted Tilapia", "Fresh Steamed Carrots", "Baked Potato", "Chicken Soft Taco", "Vegetable Enchilada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Chicken", "Pasta Primavera", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheese with Tomato and Bacon", "Krinkle Cut French Fries", "Tomato and Mozzarella Salad", "Whole Wheat Roll", "Mexican Wedding Cookie (w/nuts)"],
"Dinner": ["Potato Leek Soup", "Char Grilled Pork Chop", "Three Bean Pilaf", "Vegetable Medley", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean & Cheese Sope", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Beef Teriyaki Stir Fry & Brown Rice", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Tossed Italian Greens", "Swirled Herb Bread", "Cream Cheese Strudel"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Grapefruit Halves", "Sliced Pineapple", "Cantaloupe", "Granola Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Whole Wheat Banana Bread", "Strawberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Machaca with Scrambled Eggs", "Whole Wheat Pancake", "Potatoes O'Brien", "Sauteed Zucchini with Garlic"],
"Lunch": ["Farro Salad w/Roasted Mushroom &Parm", "Chicken Caesar Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Baked Potato", "Long Grain Rice", "Chickpea Vegetable Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Arugula & Artichoke Pizza on White", "Sweet Potato Chicken Flatbread", "Fettuccine Pasta", "Alburro Sauce", "Jalapeno Cheddar Roll", "Shortbread Espresso Cookie", "Carrot Walnut Cupcakes (w/nuts)", "Chicken Gyro", "Walnut Lentil Gyro w/Yogurt (w/nuts)", "Pinto Beans", "Roasted Red Onion &  Zucchini", "Cuban Sandwich", "Seasoned Sweet Potato Halves", "Sauteed Kale", "Tempura Onion Roll", "Spicy Scallop Sushi Roll", "Grilled Turkey Burger", "Black Bean and Vegetable Burrito", "Whole Wheat Pancake", "Steak Fries", "Spicy Mustard Sauce", "Chipotle Aioli", "Red Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chickpea Vegetable Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Alburro Sauce", "Fettuccine Pasta", "Grilled Salmon Pasta w/Roma Tomato", "Rhubarb Stacking Cake", "Herb Focaccia Bread", "Shredded Beef Enchiladas", "Cheese Quesadilla", "Pinto Beans", "Sauteed Cabbage & Carrots", "Rice with Cilantro and Lime", "Lettuce/Cheese/Tomatoes", "Indian Chicken Coconut Curry (w/nuts)", "Basmati Rice", "Indian Style Stew w/ButternutSquash", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-11-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Nut Pancake (w/nuts)", "Huevos Rancheros", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Cranberry Orange Bread (w/nuts)", "Carrot Muffin"],
"Lunch": ["Sliced Roast Beef", "Roasted Vegetables", "Sliced Pepper Jack Cheese", "Sliced Smoked Mozzarella", "Sticky Rice", "Chicken General Tso's", "Sweet & Sour Tofu & Veggies(w/nuts)", "Chinese Broccoli Salad", "Tossed Antipasta Salad", "Smoked Turkey Club Sandwich", "Vegetable Fried Rice", "Peas", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Classic French Onion Soup with Croutons", "Charburger", "Gardenburger", "Corn Quesadilla", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Quinoa", "Bread Olive", "Black and White Brownie", "White Choc Macadamia Cookie (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Beef Fajita", "Vegetable Fajita", "Refried Beans", "Mexican Rice", "Chinese Broccoli Salad", "Roast Leg of Pork", "Chili and Noodles", "Steamed Fresh Carrots", "Fresh Corn on the Cob", "Chipotle Cream", "Roasted Potato Wedges", "Turkey Rice Soup", "Whole Wheat Spaghetti", "Meat Sauce", "Penne with Sun Dried Tomato", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Roasted Garlic Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Morning Glory Muffin (w/nuts)"],
"Lunch": ["Spicy Navy Bean Soup", "Spinach & Feta Turnover", "Sauteed Zucchini with Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Bean & Rice Tostada", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Beef Taco Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Chicken Fried Rice", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Black Bean Burger", "Grilled Ham & Swiss on 100% Wheat", "Shoestring French Fries", "Red Potato Salad with Dill", "Egg Bread", "Mint Chocolate Chip Cookie"],
"Dinner": ["Vegetable Soup", "Grilled Chicken Breast", "Vegetable Cutlet", "Zucchini and Crookneck Squash", "Couscous", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Raja Taco", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Beef Taco Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Spaghetti Pasta", "Meat Sauce", "Wheat Penne Pasta", "Marinara Sauce", "Long Grain Rice", "Wild Rice Blend", "Caesar Salad", "Three Grain Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Green Thompson Seedless Grape", "R Citrus Grapefruit Red CA 36's", "Cantaloupe", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Applesauce Coffee Cake", "Banana Oat Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Oatmeal Apple Cinnamon Pancake", "Sausage Links", "Fried Potato with Onion", "Seasoned Vegetable Medley"],
"Lunch": ["Shredded Carrot & Beet Salad", "Turkey Club Panini", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Vegetable Noodle Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pineapple & Jalapeno Pizza on Wheat", "Tomato Basil Flatbread", "Sausage Marinara Sauce", "Farfalle Pasta", "Crusty French Bread", "M&M Bar (w/nuts)", "Chocolate Cupcake w/Fudge Icing", "Paella", "Moroccan Carrot w/Chickpeas & Tomato", "Pinto Beans", "Fresh Green Beans with Garlic", "Pollo a la Brasa with Aji Verde Sauce", "Vegetable Empanada", "Sauteed Kale", "Steamed White Rice", "Vegetable Roll", "Salmon Roll", "Char Grilled ChickenTeriyaki Sandwich", "Green Vegetable Burger", "Buttermilk Pancake", "Shoestring Fries", "Chipotle Aioli", "Red Chimichurri Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Vegetable Noodle Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pineapple & Jalapeno Pizza on Wheat", "Wheat Pasta with Cauliflower (w/nuts)", "Farfalle Pasta", "Sausage Marinara Sauce", "Banana Cake & Penut Butter Icing(w/nut)v", "Cheese Bread", "Herb Marinated Rotisserie Chicken", "Mashed Red Potatoes", "Pinto Beans", "Bean and Rice Wet Burrito", "Fresh Cauliflower & Broccoli Mix", "Tandoori Spiced Chicken", "Basmati Rice", "Indian Lentils and Brown Rice", "Seasoned Vegetable Medley", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-11-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Egg Turkey Swiss English Muffin Sandwich", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Nut Muffin (w/nuts)"],
"Lunch": ["Sliced Pastrami", "Tuna Salad", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Pork Sisig", "Long Grain Rice", "Pinakbet - Veggie Stew", "Sauteed Zucchini", "Three Bean Salad", "Arugula Salad with Goat Cheese", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on White", "Carrot and Ginger Soup", "Grass Fed Burger", "Gardenburger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding (w/nuts)", "Caramel Flan"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu Vegetable Stir Fry", "Turkey Pastitsio", "Fresh Green Beans", "Stuffed Zucchini", "Vegetable Fried Rice", "Arugula Salad with Goat Cheese", "Spicy Black Bean Soup", "Bowtie Pasta", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on White", "Pesto Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil and Brown Rice Soup", "Macaroni & Cheese w/Bacon & Jalapeno", "Corn", "Baked Potato", "Carnitas Taco", "Bean and Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Canadian Bacon & Olive Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Spicy Basil Beef", "Spicy Tofu Noodle Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Roast Beef & Jack on Sourdough", "Krinkle Cut French Fries", "Cucumber & Onion Salad", "Jalapeno Roll", "Toll House Bar"],
"Dinner": ["Onion Soup", "Tri Tip Roast", "Roasted Potato Wedges", "Fresh Cauliflower", "Baked Potato", "Beef Nachos", "Vegetable Empanada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Refried Beans", "Canadian Bacon & Olive Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Tofu Chinese Stir Fry w/Brown Rice", "Long Grain Rice", "Brown Rice", "Pasta Salad with Spinach & Feta", "Sundried Tomato Bread", "Peach Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Watermelon", "Sliced Cantalope", "Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Fluffy Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Banana Nut Cake (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Sourdough French Toast", "Cottage Fried Potatoes", "Sauteed Kale"],
"Lunch": ["Noodle Salad w/Roasted Broccoli &Kale", "Asian Influenced Vegetable Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Chicken White Bean Chili", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pepperoni Pizza", "Fresh Tomato Basil Garlic Pasta", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Wheat Germ Bread", "Salted Caramel Cupcake", "Chocolate Chip Cookie", "Chicken Parmigiana Sandwich", "Grilled Cheddar On Wheat", "White Beans", "Yogurt Potato Salad", "Seasoned Vegetable Medley", "Spicy Korean Pork Bowl", "Steamed Fresh Broccoli", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Shoestring Fries", "Sourdough French Toast", "Falafel Sandwich", "Red Chimichurri Sauce", "Chipotle Aioli", "Cucumber Tzatziki"],
"Dinner": ["Baked Potato", "Wild Rice", "Chicken White Bean Chili", "Pepperoni Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Pesto Bread", "Tres Leches Cake", "Chicken Spinach & Mushroom Lasagna", "Spicy Marinara Sauce", "Fresh Herb Polenta with Marinara", "White Beans", "Fresh Green Beans with Garlic", "Thai Chicken Taco", "Grilled Pineapple/Mango Salsa", "Ten Spice Fried Rice", "Sauteed Zucchini with Garlic", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-11-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Grilled Hoki Fish with Chermoula Sauce", "African Spiced Seitan", "Couscous", "Pasta Salad with Smoked Salmon", "Crunchy Fruit Salad (w/nuts)", "Beef and Bean Tostada", "Vegetable Tostada", "Corn with Red Peppers", "Pepperoni Pizza", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Roasted Butternut Soup w/Pepitas", "Cheeseburger", "Gardenburger", "Grilled Swiss & Tomato on Wheat", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Jalapeno Cheddar Roll", "Pumpkin Crisp", "Cowboy Cookie Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Thai Beef Noodle w Peanut Sauce(w/nuts)", "Stir Fry Noodles with Vegetables", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda with Black Beans", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Far East Vegetable Soup", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Whole Wheat Sourdough Bread", "Black Forest Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Blueberry Pancake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Sticky Bun (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Manhattan Clam Chowder", "BBQ Chicken Sandwich", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean Tostada", "Rice with Corn & Roasted Chiles", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Herb Breadsticks", "Cellentani Pasta", "Tomato Cream Sauce", "Wheat Pasta w/Tomato & Basil", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Chicken Corn Dog", "Steak Fries", "Italian Tortellini Pasta Salad", "Garlic Roll", "Cranberry Almond Bar (w/nuts)"],
"Dinner": ["Minestrone Soup", "Fish Cake", "Vegetable Risotto", "Sauteed Green Beans with Garlic", "Baked Potato", "Baked Sweet Potato", "Beef and Bean Burrito", "Chipotle Tempeh Tacos", "Rice with Corn & Roasted Chiles", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Herb Breadsticks", "Shrimp & Peanut Pad Thai (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Long Grain Rice", "Brown Rice", "Taco Salad", "Cheese Roll", "Brownie & Walnut Pie (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Sesame Beef with Broccoli", "Buttermilk Fried Chicken Sandwich", "Black Bean Chili Rice & Garlic Chip", "Chicken Sausage Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Baked Pesto Pasta with Chicken", "Mediterranean Turkey Wrap", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Broccoli Soup", "Garlic Spinach", "Roasted Carrots", "Fries", "Potato Chip", "Chocolate Pudding", "Snickerdoodle Cookie", "Banana Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Cantaloupe", "Sliced Honeydew", "Watermelon Salad", "Maple Quinoa Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Orange Cranberry Muffin", "New York Style Crumb Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Strawberry Pancakes", "Sausage Patty", "Roasted Breakfast Potatoes", "Steamed Broccoli & Cauliflower"],
"Lunch": ["Pork Fusion Salad", "Chicken Caesar Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Basmati Rice", "Dilled Vegetable Barley Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Mushroom Ragout over Polenta", "Sourdough Bread", "Cowboy Cookie Bar", "Almond Biscotti (w/nuts)", "Chicken Enchiladas", "Spinach Enchilada", "Spanish Rice w/Roasted Corn", "Lettuce/Cheese/Tomatoes", "Refried Beans", "Teriyaki Chicken Stir Fry", "Tofu Teriyaki Rice Bowl", "Bok Choy & Nappa Cabbage w/Sesame", "Cucumber & Avoocado Sushi Plate", "Spicy Shrimp Sushi", "Hamburger", "Vegetarian Cuban Sandwich", "Strawberry Pancakes", "Crinkle Cut French Fries", "Chipotle Aioli", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Dilled Vegetable Barley Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Vegetable Stromboli", "Creamy Pesto Sauce", "Fettuccine Pasta", "Mushroom Ragout over Polenta", "Hawaiian Sweet Bread", "Pumpkin Pie", "Chicken Cacciatore", "Buttered Noodles", "White Beans", "Steamed Broccoli & Cauliflower", "Grilled Mahi Mahi with Chermoula Sauce", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-11-16",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "White Bean Basque Soup", "BBQ Chicken Sandwich", "Stir Fry Vegetables", "Roasted Potato Wedges", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Arroz con Leche", "Buttermilk Pancake", "Beefy Eggs Machaca", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Banana Coffee Cake (w/nuts)", "Strawberry Bread"],
"Dinner": ["Sticky Rice", "Pork Fried Rice", "Vegetable Chow Mein", "Caesar Salad", "Ginger Beef Pepper Steak", "Fresh Vegetable Medley", "French Cut Green Beans", "Risotto with Fresh Vegetables", "Jasmine Rice", "Vegetable Beef Soup", "Penne Pasta", "Marinara Sauce with Sausage", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Black Olive Pizza on Wheat", "Cornbread with Honey Butter", "Devil's Food Cake with Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Mushroom Barley Soup", "Italian Sub", "Vegetable Medley", "Baked Potato", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "7 Grain Hot Cereal", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Sausage Link", "Multi-Grain Waffle", "Waffle", "French Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Chocolate Chip Scone"],
"Dinner": ["Miso Soup", "Sweet & Sour Glazed Chicken", "Pineapple Rice", "Bok Choy with Garlic & Ginger", "Baked Potato", "Pork Chile Verde Tostada", "Grilled Vegetable Tostada", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Sesame Beef with Broccoli", "Vegetable Noodle Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Kale Caesar Salad", "Whole Wheat French Bread", "Marble Cake w/Chocolate Icing"],
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
"Brunch": ["Grapefruit Halves", "Cantaloupe", "Seedless Red Grape", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Quattro Formaggio Pizza on Wheat", "Chilaquiles (No Egg)", "Tomato Basil & Garlic Sauce", "Farfalle Pasta", "Flour Tortilla", "Applesauce Coffee Cake", "Breakfast Quesadilla", "Fried Eggs", "Potato Gorda with Black Beans", "Black Beans", "Roasted Broccoli and Red Onion", "Lentil Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancakes", "Apple Cranberry Pancake Topping", "Steamed Fresh Broccoli"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Lentil Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Three Cheese Pizza on White", "Tomato Basil & Garlic Sauce", "Farfalle Pasta", "Arabiata (w/nuts)", "Apple Crisp", "Crusty French Bread", "Roast Turkey Breast", "Turkey Gravy", "Fresh Mashed Potatoes", "Fresh Cranberry Sauce", "Sauteed Cabbage & Carrots", "Cajun Cornbread Casserole", "Asian Beef Bowl", "Moo Shu Vegetables with Tofu", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-11-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Dilled Veggie Barley Soup", "Beef Meatloaf", "Mixed Vegetables", "Creole Beans and Rice", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Oatmeal", "Breakfast Quesadilla", "Sausage Biscuits & Gravy", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Pinto Beans", "Make Your Own Waffle", "Raspberry Muffin", "Zucchini Bread (w/nuts)"],
"Dinner": ["Brown Rice", "Kung Pao Beef with Peanuts (w/nuts)", "Tofu Teriyaki Rice Bowl", "Caesar Salad", "Pork Chile Verde and Rice Burrito", "Swiss Chard with Fresh Garlic", "Baked Acorn Squash", "Black Beans", "Ham & Navy Bean Soup", "Penne Pasta", "Cajun Shrimp Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Cheese Pizza on White", "Garlic Pizza Sticks with Marinara", "Hawaiian Sweet Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Hearty Vegetable Soup", "Vietnamese Beef Sub (Banh Mi)", "Fresh Carrots with Thyme", "Baked Potato", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Grilled Ham", "Tater Tots", "Multi-Grain Waffle", "Waffle", "Tuna Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Blueberry Muffin"],
"Dinner": ["Chicken Rice Soup", "Turkey Meatloaf", "Fresh Vegetable Medley", "Mashed Red Potatoes", "Turkey Gravy", "Baked Potato", "Beef Hard Shell Taco", "Potato Gorda with Black Beans", "Mexican Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Chicken Marinara", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Israeli Couscous Salad", "Poppyseed Cheese Onion Bread", "Pumpkin Pie"],
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
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Black Bean Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Cheeseburger Pizza", "Turkey Tettrazini", "Light Tomato Sauce", "Spaghetti", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Pork Loin Roast w/Balsamic Glaze", "Scalloped Potatoes", "Pinto Beans", "Baked Acorn Squash", "Roasted Cauliflower w/Garlic", "Chicken Chow Mein", "Sweet & Sour Tofu w/Almonds(w/nuts)", "Sticky Rice", "Bok Choy & Nappa Cabbage w/Sesame", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
