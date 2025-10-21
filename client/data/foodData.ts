const diningMenu = [
{
"date": "2025-10-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Fiesta Vegetable Salad", "Asian Noodle Salad", "Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Chicken Noodle Soup", "Char Burger", "Black Bean Burger", "Krinkle Cut Fries", "Grilled Turkey & Swiss on Sourdough", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Panna Cotta", "Cheese Roll", "Chocolate Chip Cookie"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Coconut Curry", "Tofu Vegetable Coconut Curry", "Cream of Broccoli Soup", "Caesar Salad", "Turkey Breast", "Turkey Gravy", "Herb Stuffing", "Peas", "Stir Fry Vegetables", "Garlic Red Mashed Potato", "Linguini Pasta", "White Clam Sauce", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Donut Muffin", "Blueberry Coffee Cake"],
"Lunch": ["Turkey Noodle Soup", "Ginger Peanut Tofu Wrap (w/nuts)", "Sauteed Zucchini with Garlic", "Baked Potato", "Ground Beef Soft Corn Taco", "Roasted Vegetable Quesadilla", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Penne with Rosemary Cream Sauce", "Linguini Pasta", "Mushroom Pepper Marinara", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Tuna Melt on Sourdough", "Shoestring French Fries", "Jicama Salad", "Roasted Garlic Roll", "Toll House Bar"],
"Dinner": ["Potato Leek Soup", "Pork Loin Roast", "Stuffed Zucchini", "Savory Rice", "Vegetable Medley", "Baked Potato", "Chicken Mole Taco", "Bean and Cheese Hard Shell Taco", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry w/Polynesian BBQ Sauce", "Vegetable Tagine", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Cornbread", "German Apple Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Pork Dan Dan Noodle", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Peach Yogurt", "Whole Plain Greek Yogurt", "Cantaloupe", "Sliced Pineapple", "Honeydew Melon", "Granola Parfait", "Cinnamon Maple Granola", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Raspberry White Chocolate Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Potatoes O'Brien", "Buttermilk Pancake", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Pepperoni Pizza", "Penne Pasta", "Tomato Cream Sauce", "Whole Wheat French Bread", "Lemon Bar", "Peanut Butter Fudge Cupcake (w/nuts)", "Grilled Chicken Taco", "Cilantro & Onion Mix", "Fire Roasted Tomato Salsa", "Fresh Tortilla Chips", "Pinto Beans", "Vietnamese Turkey Banh Mi", "Sesame Asian Slaw Salad", "Stir Fried Bok Choy", "Salmon Roll", "Daikon Roll", "Hamburger", "Grilled Swiss & Tomato on WW", "Buttermilk Pancake", "Steak Fries", "Sriracha Mayonnaise", "Tahini Sauce", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Pepperoni Pizza", "Tomato Cream Sauce", "Fettuccine Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Apple Crisp", "Sourdough Bread", "Beef Soft Tacos", "Mexican Rice", "Cheese Enchilada", "Pinto Beans", "Honey Sriracha Glaze Brussel Sprouts", "Teriyaki Chicken Stir Fry", "Long Grain Rice", "Braised Bok Choy", "Steamed Fresh Broccoli", "Salmon Sushi Plate"],
}
},
],
},
{
"date": "2025-10-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chorizo and Eggs", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Strawberry White Chocolate Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Valenciana Paella", "Quinoa Salad w/Lemon Herb Veggies", "Salsa Salad", "Philly Cheese Steak Sandwich", "Spanakopita Triangles (V)", "Corn", "Indian Lentils w/Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Swiss & Tomato on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Black Beans", "Rice Krispie Treat", "Blueberry Earl Grey Cake", "Whole Wheat Roll"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Beef Broccoli & Mushroom Stir Fry", "Vegetable & Tofu Stir Fry", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Mahi Mahi Veracruz", "Steamed Zucchini", "Sauteed Fresh Carrots", "Oven Roasted Red Potatoes", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Parmesan Herb Bread", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Cream of Mushroom Soup", "Cod w/Red Curry Sauce & Rice", "Long Grain Rice", "Bok Choy with Garlic & Ginger", "Baked Sweet Potato", "Baked Potato", "Pork Chile Verde Tostada", "Chipotle Tempeh Tacos", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Madras", "Lentil & Bean Madras", "Long Grain Rice", "Wild Rice Blend", "Grilled Chicken Burger", "Black Bean Burger", "Grilled Swiss & Tomato on Wheat", "Steak Fries", "Tabouli Salad", "Cheese Onion Roll", "Yellow Cupcake with Buttercream"],
"Dinner": ["Chicken Noodle Soup", "Herb Chicken Quarters", "Spinach Rice Casserole", "Green Beans", "Baked Sweet Potato", "Baked Potato", "Turkey Hard Taco", "Calabacitas Taco", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Cellentaini Pasta", "Pesto Sauce", "Long Grain Rice", "Brown Rice", "Kale Caesar Salad", "Sourdough Rounds", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Pork Dan Dan Noodle", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Sliced Honeydew", "Cantaloupe", "Seedless Red Grape", "Make Your Own Waffle", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cream Cheese Strudel", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Scrambled Eggs w/Cheese & Mushroom", "Roasted Breakfast Potatoes", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Thai Chicken Peanut Wrap (w/nuts)", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Sausage Marinara Sauce", "Penne Pasta", "Pasta Primavera", "Herb Focaccia Bread", "Toll House Bar", "Mocha Cupcake", "Chicken Chile Verde & Black Bean Burrito", "Roasted Tomato Salsa", "Grilled Vegetable Taco", "Pinto Beans", "Latin Bowl with Chicken", "Latin Bowl", "Spinach with Garlic & Ginger", "Spicy Scallop Sushi Roll", "Vegetable Roll", "Herb Marinated Chicken Breast Sandwich", "Mushroom Tofu Veggie Slider (w/nuts)", "Crinkle Cut French Fries", "Whole Wheat Pancake", "Housemade Spicy Ketchup", "Red Chimichurri Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Pasta Primavera", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Pecan Butterscotch Brownie (w/nuts)", "Herb Focaccia Bread", "Chicken Marsala", "Pasta with Olive Oil", "Pinto Beans", "Risotto with Fresh Vegetables", "Sauteed Zucchini with Garlic", "Baked Cod", "Red Curry Sauce", "Basmati Rice", "Spicy Noodles w/Tofu & Cucumber", "Steamed Broccoli & Cauliflower", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-10-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Blintz", "Eggs Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Bacon Cheddar Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Italian Chunk Salad", "Macaroni Salad", "Pulled Pork Sandwich with Coleslaw", "Swiss Chard with Fresh Garlic", "House Made Baked Beans", "Potato Chip", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Santa Fe Salad", "Sticky Rice", "Pork with Vegetable Stir Fry", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Italian Chunk Salad", "Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Pumpkin Cheesecake Pie", "Bread Olive"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Raisin Buttermilk Scone", "Pinch Bread"],
"Lunch": ["Tortilla Soup", "Chipotle Chicken Wrap", "Italian Mixed Vegetables", "Baked Potato", "Beef Birria", "Raja Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham and Pineapple Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Cheese Ravioli with Marinara", "Wheat Penne Pasta", "Sun Dried Tomato Sauce", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Burger on Wheat Bun", "Krinkle Cut French Fries", "Red Potato Salad with Dill", "Garlic French Bread", "Snickerdoodle"],
"Dinner": ["Lentil Soup", "Salisbury Steaks", "Mushroom Gravy", "Vegetable Medley", "Mashed Potatoes", "Baked Potato", "Chicken Nachos", "Bean & Rice Tostada", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham and Pineapple Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Whole Wheat Bread", "Apple Strudel with Caramel Sauce"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Pork Dan Dan Noodle", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Cantalope", "Sliced Honeydew", "Pineapple", "Fluffy Whole Wheat Waffles", "Baked Oatmeal with Peach & Blueberry", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Bacon", "Diced Potatoes with Onions", "Sauteed Kale"],
"Lunch": ["Chicken Provolone & Garlic Aioli Panini", "Pear & Gorgonzola Walnut Salad(w/nut)", "Sliced Roast Beef", "Sliced Genoa Salami", "Sliced Swiss Cheese", "Sliced Jack Cheese", "Baked Potato", "Basmati Rice", "Greens and Beans Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Greek Tomato Sauce", "Linguini Pasta", "Creamy Pesto Sauce", "Fettuccine Pasta", "Parmesan Herb Bread", "Butterscotch Pecan Bar (w/nuts)", "Baklava Cookie (w/nuts)", "Turkey Benedict", "Roasted Red Potato Wedges", "Pinto Beans", "Steamed Veggies", "Vindaloo Chicken", "Sticky Rice", "Spinach with Garlic & Ginger", "Spicy Tuna Roll", "Tempura Onion Roll", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "White Bean & Red Lentil Patty", "Sriracha Mayonnaise", "Housemade Spicy Ketchup", "Red Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Greens and Beans Soup", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Greek Tomato Sauce", "Linguini Pasta", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Everything Naan", "Spice & Walnut Cake (w/nuts)", "Roast Leg of Pork", "Apple Chutney", "Roasted Red Potato Wedges", "Pinto Beans", "Fresh Vegetable Medley", "Tandoori Chicken", "Basmati Rice with Peas", "Seasoned Vegetable Medley", "Roasted Cauliflower with Cumin", "Spicy Tuna Bowl"],
}
},
],
},
{
"date": "2025-10-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Banana Pecan Baked Oatmeal (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Tahini Sauce", "Cucumber Tzatziki", "Chamorro BBQ Chicken", "Long Grain Rice", "Roasted Root Vegetables", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Spicy Kale Caesar Salad", "Ham & Cheese Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Rosemary Asiago Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Roast Pork Loin", "Apricot Chutney", "Broccoli Stuffed Tomato", "Peas with Onions", "Mashed Potatoes", "Spicy Kale Caesar Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Cheese Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Marble Cake with Chocolate Frosting", "Pandesal"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Swiss Chard & Herb Tart", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Mushroom Pizza", "Mexican Pizza", "Herb Breadsticks", "Kung Pao Beef & Peanuts (w/nuts)", "Kung Pao Tofu & Peanuts (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Pasta Salad with Spinach & Feta", "Cracked Wheat Roll", "Jelly Bar Spritz"],
"Dinner": ["Vegetable Soup", "Honey Baked Chicken", "Garlic Mushroom Turnover", "Carrots & Broccoli", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Sope", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Chicken Mushroom Pizza", "Mexican Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Wild Rice Blend", "Coleslaw with Vinaigrette", "Rosemary Bread", "Tres Leches Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Pork Dan Dan Noodle", "Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Roasted Vegetable Pasta", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Steamed Zucchini & Crookneck Squash", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Cantalope", "Honeydew Melon", "Sliced Pineapple", "Make Your Own Waffle", "Granola Parfait", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Chocolate Chip Scone", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Pineapple Ham Fried Rice", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Roasted Vegetable Panini", "Rainbow Peanut Noodles w/Chicken(w/nuts)", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Wild Rice Blend", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Cellentani Pasta", "Roasted Vegetable Marinara Sauce", "Ciabatta Roll", "Almond Biscotti (w/nuts)", "Lemon Pie", "BBQ Chicken Thigh", "Homemade Baked Beans", "Fresh Tomato Quiche", "Sauteed Kale & Collard Greens", "Street Style Fish Taco", "Pico De Gallo", "Refried Beans", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Fire Roasted Tomato Salsa", "Housemade Spicy Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Roasted Vegetable Marinara Sauce", "Cellentani Pasta", "Onion Walnut Bread (w/nuts)", "Blueberry Lemon Cake", "Turkey A La King", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Steamed Broccoli & Cauliflower", "Thai Chicken Bowl", "Sticky Rice", "Kimchi", "Miso Broth Soup with Spinach", "Bok Choy & Nappa Cabbage w/Sesame", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-10-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Pesto Zucchini Soup", "Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Pinto Beans", "Make Your Own Waffle", "Banana Nut Bread (w/nuts)", "Lemon Scone"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai w/Peanut(w/nuts)", "Potato Leek Soup", "Caesar Salad", "Cilantro Lime Salmon", "Carrots with Fresh Thyme", "Green Beans", "Rice Pilaf with Mushrooms", "Pasta Carbonara", "Rotini Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Thai Chicken Curry Pizza", "Cheese Pizza on White", "Mushroom Pizza on Wheat", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Spicy Navy Bean Soup", "Grilled Turkey & Provolone on Sourdough", "Mixed Vegetables", "Baked Potato", "Tomato Pesto Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Patty", "Diced Potatoes with Onions", "Multi-Grain Waffle", "Waffle", "Carrot & Raisin Salad", "Sliced Cantalope", "Grapefruit Halves", "Sliced Honeydew", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Beef Noodle Soup", "Tri Tip Roast", "Sauteed Spinach w/ Onion & Garlic", "Potato Lyonnaise", "Baked Potato", "Beef Chili Colorado Burrito", "Potato Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Tomato Pesto Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Sweet & Sour Pork Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Wheat Germ Roll", "Banana Walnut Cake (w/nuts)"],
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
"Brunch": ["Grapefruit Halves", "Seedless Red Grape", "Watermelon", "Cinnamon Maple Granola", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Chicken Noodle Soup", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Sausage Mushroom Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Flour Tortilla", "Whole Wheat Banana Bread", "Black Bean Chilaquiles", "Fried Eggs", "Sweet Potato Hash", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "Ground Beef and Bean Tostada", "Mexican Rice", "Refried Beans", "Black Bean Tostada", "Fire Roasted Tomato Salsa", "Lettuce/Cheese/Tomatoes", "Indian Chicken Coconut Curry", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Garlic & Ginger", "Calamari Sushi Plate"],
}
},
],
},
{
"date": "2025-10-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "White Navy Beans", "Make Your Own Waffle", "Double Chocolate Bread", "Maple Pecan Scone (w/nuts)"],
"Dinner": ["Sticky Rice", "Mongolian Beef", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Caesar Salad", "Turkey Meatloaf", "Stir Fry Vegetables", "Peas", "Potato Garlic Mashed", "Gnocchi Mushroom Corn & Sage Butter", "Baked Rigatoni", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Tomato Pesto Pizza on Wheat", "Sourdough Bread", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Cream of Tomato Soup", "Philly Cheese Steak Sandwich", "Sauteed Swiss Chard with Garlic", "Baked Potato", "Chorizo Pizza", "Cheese Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Brazilian Black Bean Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Cinnamon Bread"],
"Dinner": ["Split Pea Soup", "Char Grilled Pork Chop", "Fresh Vegetables Saute with Garlic", "Oven Browned Potatoes", "Baked Potato", "Chicken Tostada", "Potato Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomatillo Salsa", "Chorizo Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne Mostacioli", "Meat Sauce", "Whole Grain Rotini", "Garden Vegetable Marinara Sauce", "Wild Rice Blend", "Long Grain Rice", "Caesar Salad", "Herb Roll", "Peach Cobbler"],
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
"Brunch": ["Pineapple", "Honeydew Melon", "Sliced Cantalope", "Cinnamon Maple Granola", "Peanut Butter & Banana Oats (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Spicy Navy Bean Soup", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Quattro Formaggio Pizza on Wheat", "Rigatoni Mozzarella", "Fresh Basil Pesto", "Penne Pasta", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Breakfast Quesadilla", "Grilled Cheese on Sourdough", "Pinto Beans", "Fresh Spinach with Garlic", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Quattro Formaggio Pizza on Wheat", "Fresh Basil Pesto", "Penne Pasta", "Rigatoni Mozzarella", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Cream Cheese Pie", "Whole Wheat French Bread", "Pollo a la Brasa with Aji Verde Sauce", "Creole Beans and Rice", "Roasted Potato Wedges", "Roasted Broccoli", "Pork Char Siu", "Sticky Rice", "Thai Vegetable & Peanut Noodle(w/nut)", "Steamed Broccoli & Cauliflower", "Daikon Roll"],
}
},
],
},
{
"date": "2025-10-27",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Pepper Jack Cheese", "Orange Hoki Fish", "Asian Vegetable Stir Fry", "Sticky Rice", "Italian Tossed Greens", "Tomato And Mozzarella Salad", "Penne Arrabiata with Chicken", "Green Beans", "Steamed Fresh Carrots", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Potato Cheese Soup", "Gardenburger", "Corn Quesadilla", "Grilled Turkey Burger", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Pearl Barley", "Garlic French Bread", "Toll House Bar", "Magic Walnut Cookie Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Walnut Kale Salad w/Cranberry(w/nut)(vgn", "Fish & Chips w/Tartar Sauce", "Corn", "Stir Fry Vegetables", "Mushroom Stroganoff", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Blueberry Scone"],
"Lunch": ["Miso Soup", "Sicilian Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Potato "Chorizo" Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "BBQ Pulled Pork Pizza", "Cheese Pizza", "Herb Breadsticks", "Sesame Beef with Broccoli", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Char Burger", "Black Bean Burger", "Grilled Swiss on Sourdough", "Shoestring French Fries", "Apple Blu Cheese Walnut Salad(w/nuts)", "Potato Roll", "Lemon Bar"],
"Dinner": ["Vegetable Barley Soup", "Lemon Baked Ono", "Brown Rice Artichoke Casserole", "Fresh Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Sope", "Black Bean & Rice Tostada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "BBQ Pulled Pork Pizza", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Chicken Mushroom Marinara", "Wheat Penne Pasta", "Tomato Leek Marinara", "Brown Rice", "Long Grain Rice", "Marinated Green Beans Salad", "Cheese Bread", "Blueberry Crumb Pie"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Berry Parfait", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Bread", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Sausage Biscuits & Gravy", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spring Mix Salad w/Feta & Craisins", "Greek Chicken Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Sausage Mushroom Pizza", "Meat Sauce", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Wheat Germ Bread", "Oatmeal Raisin Quinoa Cookie", "Gingerbread Cake", "Char Grilled Cajun Chicken Sandwich", "Ranch Potato Salad", "Vegetables Steamed Brown Rice", "Black Beans", "Tandoori Spiced Chicken", "Basmati Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Vegetable Roll", "Grilled Turkey Burger", "Grilled Swiss & Tomato on WW", "Banana Pancakes", "Shoestring Fries", "Housemade Ketchup", "Chipotle Aioli", "Roasted Tomato Salsa"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Chocolate Peanut Butter Cake (w/nuts)", "Crusty French Bread", "Pueblo Pork Roast", "Papaya Cilantro Lime Salsa", "Red Potatoes with Rosemary", "Black Beans", "Mushroom Ragout over Polenta", "Pork Dan Dan Noodle", "Stir Fried Bok Choy", "Seasoned Vegetable Medley", "Brown Rice Calamari Sushi Plate", "Vegetable Roll"],
}
},
],
},
];
export default diningMenu
