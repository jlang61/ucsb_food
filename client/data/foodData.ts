const diningMenu = [
{
"date": "2024-04-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Croissant with Ham & Cheese", "Fried Potatoes with Onions", "Matzo Brei", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Nut Muffin (w/nuts)"],
"Lunch": ["Argentinian Grilled Vegetable", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Three Bean Salad", "Confetti Pasta Salad", "Chicken Salad Sandwich on Pita", "Spinach Lasagna (w/nuts)", "Sauteed Zucchini", "Steamed Crookneck Squash", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Cream of Parsley Soup w/Horseradish", "Grass Fed Burger", "Gardenburger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding (w/nuts)", "Baba au Rum"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Cream of Parsley Soup w/Horseradish", "Orange Tofu", "Caesar Salad", "Grilled Ham with Honey Glaze", "Stuffed Zucchini", "Baked Acorn Squash", "Fresh Spinach with Garlic", "Scalloped Potatoes", "Rotelli Pasta", "Roasted Pepper Tomato Sausage Sauce", "Rigatoni Pasta", "Marinara Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Pesto Bread", "White Cake with Raspberry Filling"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei w/Apples", "Bread Pudding with Whiskey Sauce", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread"],
"Lunch": ["Vegetable Beef Soup", "Roasted Pork Loin Sandwich w/Gouda", "Fresh Broccoli Spears", "Baked Potato", "Braised Brisket Taco", "Bean and Rice Wet Burrito", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Sesame Chicken Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Black Bean Burger", "Hot Dog", "Krinkle Cut French Fries", "Quinoa Salad", "Sourdough Roll", "Brownie (w/nuts)"],
"Dinner": ["Vegetable Beef Soup", "Herbed Rotisserie Chicken w/Beet Dip", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "BBQ Chicken Quesadilla", "Bean & Cheese Sope", "Green Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Alfredo Sauce w/Chicken/Vegetables", "Whole Grain Rotini", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Brown Rice", "Greek Salad", "Crusty French Bread", "Rocky Road Tart (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie (w/nuts)", "Chocolate Pudding", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie (w/nuts)", "Chocolate Pudding", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Cantaloupe", "Fresh Strawberry", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Homemade Cinnamon Rolls", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei", "Scrambled Eggs w/Chile/Jack/Tomato", "Apple Cinnamon Oatmeal Pancake", "Potatoes O'Brien", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Buffalo Chicken Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Haroset (w/nuts)", "Cabbage Cilantro Slaw", "Pearl Barley", "Cheeseburger Pizza", "Chef's Salmon Pasta", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Homemade Bread", "Sugar Cookies", "Red Velvet Cupcake", "Chicken Chile Verde Burrito", "Fresh Tortilla Chips", "Pinto Beans", "Lettuce/Cheese/Tomatoes", "Sauteed Zucchini with Garlic", "Beef Pho", "Miso Ramen", "Yam & Avocado Roll with Brown Rice", "Spicy Tuna Roll", "Grass Fed Burger", "Grilled Cheese /Tom & Herbs on Wheat", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Housemade Spicy Ketchup", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Haroset (w/nuts)", "Cabbage Cilantro Slaw", "Pearl Barley", "Cheeseburger Pizza", "Pasta with Grilled Vegetables", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Chocolate Flourless Cake", "Homemade Bread", "Beef Stew", "Mashed Red Potatoes w/ Garlic", "Eggplant Parmesan Casserole", "Pinto Beans", "Brussel Sprouts Honey Sriracha Glaze", "Chicken Shoyu", "Sticky Rice", "Pineapple Fried Rice w/Tofu", "Bang Bang Broccoli", "Spicy Tuna Bowl", "Yam & Avocado Roll with Brown Rice"],
}
},
],
},
{
"date": "2024-04-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Hash Browns", "Matzo Brei", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Beans", "Spanish Rice", "Beef and Bean Tostada", "Vegetable Tostada", "Corn with Red Peppers", "Quinoa Salad", "Crunchy Fruit Salad (w/nuts)", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Chicken Vegetable Soup", "Cheeseburger", "Black Bean Burger", "Grilled Swiss & Tomato on Wheat", "Black Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Jalapeno Cheddar Roll", "Baklava (w/nuts)", "Cowboy Cookie Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Noodles", "Ginger Beef Stir Fry", "Stir Fry Noodles with Vegetables", "Chicken Vegetable Soup", "Halal Rotisserie Chicken", "Potato Gorda with Corn", "Chili Black Bean", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Quinoa Salad", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Housemade Whole Wheat Pasta", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Whole Wheat Sourdough Bread", "Chocolate Flourless Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Greek Eggs", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei w/Raisins", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "BBQ Chicken Sandwich", "Spinach and Matzo Lasagna (w/nuts)", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean Tostada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Vegetable Pizza", "Herb Breadsticks", "Penne Pasta", "Creamy Pesto Sauce", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Chicken Corn Dog", "Krinkle Cut French Fries", "Chinese Chicken Salad (w/nuts)", "Onion Roll", "Raisin Rum Rice Pudding"],
"Dinner": ["Vegetable Soup", "Tilapia with Red Curry Sauce (w/nuts)", "Long Grain Rice", "Eggplant Parmesan Casserole", "Steamed Zucchini", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Chipotle Bean Flauta", "Mexican Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "BBQ Chicken Pizza", "Vegetable Pizza", "Herb Breadsticks", "Korean Beef Stir Fry with Rice", "Stir Fry Veg w/Thai Swt Chili Sauce", "Long Grain Rice", "Brown Rice", "Broccoli Almond Salad (w/nuts)", "Coconut Chiffon Cake (w/nuts)", "Cornbread"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie (w/nuts)", "Chocolate Pudding", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie (w/nuts)", "Chocolate Pudding", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Grapefruit Halves", "Cantaloupe", "Whole Wheat Waffles", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei", "Blueberry Pancakes", "Home Fried Potatos", "Grilled Ham", "Sauteed Kale"],
"Lunch": ["Quinoa Salad", "Turkey Provolone & Garlic Aoli Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Basmati Rice", "Caldo de Marisco", "Haroset (w/nuts)", "Cabbage Cilantro Slaw", "Spelt Berry", "Three Cheese Flatbread", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettucine", "Crusty French Bread", "Cream Cheese Brownie Pie (w/nuts)", "Baklava Cookie (w/nuts)", "Chicken Parmigiana Sandwich", "Fresh Tomato Quiche", "Pinto Beans", "Fresh Green Beans with Garlic", "Carnitas Taco", "Rice with Cilantro & Onions", "Lettuce/Cheese/Tomatoes", "Spinach with Fresh Garlic & Ginger", "Tempura Onion Roll", "Calamari Roll", "Hamburger", "Blueberry Pancakes", "Crinkle Cut French Fries", "White Bean & Red Lentil Patty", "Chipotle Aioli", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Caldo de Marisco", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Pasta Primavera w/Tomato Sauce", "Haroset (w/nuts)", "Cabbage Cilantro Slaw", "Spelt Berry", "Crusty French Bread", "Chocolate Chip Banana Bread Pudding", "Lasagna Bolognese", "Baked Rigatoni", "Black Beans", "Carrot & Zucchini with Lemon Butter", "Fresh Spinach with Garlic", "Tandoori Spiced Chicken", "Mujaddara Lentils and Rice", "Smoked Fish Fritters w/Beet Vinaigrette", "Roasted Cauliflower with Cumin", "Calamari Roll", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-04-27",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Matzo Gnocchi Soup", "BBQ Chicken Sandwich", "Stir Fry Vegetables", "Roasted Potato Wedges", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Arroz con Leche", "Buttermilk Pancake", "Grilled Ham with Honey Glaze", "Beans Navy White", "Hash Browns", "Matzo Brei", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Maple Pecan Scone (w/nuts)", "Strawberry Bread"],
"Dinner": ["Sticky Rice", "Pork Fried Rice", "Vegetable Chow Mein", "Matzo Gnocchi Soup", "Caesar Salad", "Brisket and Potato Kugel", "Fresh Vegetable Medley", "French Cut Green Beans", "Risotto with Fresh Vegetables", "Whole Wheat Penne Pasta", "Chicken Sausage & Mushroom Sauce", "Pasta Primavera", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Chicken Florentine Pizza w/White Sauce", "Black Olive Pizza on Wheat", "Cheese Pizza on White", "Cornbread with Honey Butter", "Devil's Food Cake with Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chicken Vegetable Soup", "Grilled Turkey Pastrami & Mozzarella", "Italian Vegetable Stir Fry", "Baked Potato", "Long Grain Rice", "Assorted Meat Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Matzo Brei", "Sausage Patty Chicken", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Asparagus Matzo Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Raisin Buttermilk Scone"],
"Dinner": ["Chicken Vegetable Soup", "Roast Beef", "Fresh Broccoli Spears", "Smoked Fish Fritters w/Beet Vinaigrette", "Roasted Potato Wedges", "Baked Potato", "Beef Tostada", "Chile Corn Zucchini Soft Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Assorted Meat Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Beef Pad Thai (w/nuts)", "Tofu Vegetable Pad Thai (w/nuts)", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Sourdough Bread", "Kahlua Chocolate Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Watermelon", "Cantaloupe", "Seedless Red Grape", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Whole Wheat Waffles", "White Wine Garlic Sauce with Chicken", "Rotini Pasta", "Flour Tortilla", "Pumpkin Bread (w/nuts)", "Black Bean Chilaquiles", "Fried Eggs", "Roasted Yam w/Rosemary & Chile", "Pinto Beans", "Vegetable Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Vegetable Soup", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "Baked Pesto Pasta w/Chicken", "Spinach and Matzo Lasagna (w/nuts)", "Pinto Beans", "Roasted Vegetables", "Steamed Fresh Broccoli", "Asian Beef Bowl", "Sticky Rice", "Thai Tofu Curry w/ Vegetables", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Roll with Brown Rice", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-04-28",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Matzo Ball Soup", "Chicken Pot Pie", "Creole Beans And Rice", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Oatmeal", "Breakfast Quesadilla", "Sausage Biscuits & Gravy", "Black Beans", "Fried Potatoes with Onions", "Matzo Brei", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Raspberry Muffin", "Zucchini Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Tofu Teriyaki Rice Bowl", "Matzo Ball Soup", "Caesar Salad", "Turkey Meatloaf", "Roasted Potato Wedges", "Baked Acorn Squash", "Peas", "Penne Pasta", "Meat Sauce", "Linguini Pasta", "Fresh Basil Pesto", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Garlic Pizza Sticks with Marinara", "Cheese Pizza on White", "Hawaiian Sweet Bread", "Macaroon (w/nuts)", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Soup", "Turkey Sub Sandwich", "Baby Carrots with Tarragon", "Baked Potato", "Long Grain Rice", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei w/Apples", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Spinach Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Pumpkin Muffin (w/nuts)", "Matzo Meal Muffins"],
"Dinner": ["Vegetable Beef Soup", "Char Grilled Pork Chop", "Potato Latkes", "French Cut Green Beans", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean & Rice Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne with Chicken & Mushrooms", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Salsa Salad", "Graham Bread", "Italian Cream Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Banana Bar", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["zOrganic Watermelon", "Cantalope", "Grapefruit Halves", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Penne Pasta", "Chilaquiles (No Egg)", "Flour Tortilla", "Blueberry Scone", "Breakfast Burrito", "Tortilla Chips & Salsa", "Pinto Beans", "Kale with Fresh Garlic", "Matzo Ball Chicken Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Sauteed Veggies", "Matzo Brie", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Matzo Ball Chicken Soup", "Italian Sausage & Basil Stromboli", "Fettuccine with Ham and Peas", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Cream Cheese Pie", "Whole Wheat French Bread", "Chicken Piccata", "Roasted Potato Wedges", "Potato Vegetable Kugel", "Pinto Beans", "Roasted Broccoli", "Vindaloo Chicken", "Sticky Rice", "Thai Vegetable Fried Noodles(w/nuts)", "Steamed Broccoli & Cauliflower", "Daikon Roll", "California Club Roll"],
}
},
],
},
{
"date": "2024-04-29",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Chile Verde with Pork & Corn Tortillias", "Diced Potatoes", "Matzo Brei", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Blueberry Buttermilk Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Jack Cheese", "Smoked Gouda", "Brown Rice", "Vietnamese Vermicelli Pork", "Vegetable Stir Fry", "Tossed Italian Salad", "Roasted Potato Salad w/Goat Cheese", "Herb Chicken Quarters", "Roasted Butternut Squash", "Peas", "Smoked Barbeque Chicken Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Vegetable Soup", "Charburger", "Gardenburger", "Quesadilla", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Date and Cashew Bar (w/nuts)", "Chocolate Cupcake w/Choc Icing", "Garlic Roll"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Teriyaki Chicken Stir Fry", "Vegetable Stir Fry", "Teriyaki Sauce", "Vegetable Soup", "Caesar Salad", "Roast Beef", "Fresh Cauliflower", "Steamed Crookneck Squash", "Passover Potato Latkes", "Whole Wheat Spaghetti", "Meat Sauce", "Spirals with Marinara Sauce", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Basmati Rice", "Smoked Barbeque Chicken Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Onion Walnut Bread (w/nuts)", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Blueberry Pancake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei w/Raisins", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Lemon Yogurt Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Matzo Ball Soup", "Asian Beef Lettuce Wrap", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Potato Vegetable Soft Taco", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Chorizo Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Chicken Chop Suey", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Mozzarella & Basil on Sour", "Shoestring French Fries", "Quinoa Salad", "Biscuit", "Brownie (w/nuts)"],
"Dinner": ["Matzo Ball Soup", "Baked Chicken", "Garlic Mashed Potatoes", "Eggplant Parmesan Casserole", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Potato Taquito", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Chorizo Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Hawaiian Chicken Stir Fry (w/nuts)", "Stir Fry Tofu w/ Peanut Sauce (w/nuts)(v", "Long Grain Rice", "Brown Rice", "Coleslaw with Vinaigrette", "Crusty French Bread", "Devil's Food Cake w/Cream Chz Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Ruby Flame Grapes", "Watermelon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Honeydew Parfait", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Irish Soda Bread", "Sticky Buns (Scratch)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Matzo Brei", "Banana Wheat Pancakes", "Western Hash Brown", "Spinach Stir Fried with Garlic"],
"Lunch": ["Kale & Quinoa Salad w/Ricotta (w/nuts)", "Panini Pizza", "Sliced Turkey", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Haroset (w/nuts)", "Couscous", "Cabbage Cilantro Slaw", "Chicken Artichoke Pesto Flatbread", "Tomato Basil Pizza on White", "Penne w/Butternut Squash Sauce", "Hawaiian Sweet Bread", "Chocolate Mint Cupcake", "Fluffy Sugar Cookie (w/nuts)", "Chicken Philly Cheese Sandwich", "Brisket and Potato Kugel", "Black Beans", "Large Mixed Green Salad", "Kimchi Udon Noodles with Scallion", "Corn and Mushroom Congee", "Steamed Broccoli & Cauliflower", "Calamari Roll", "Cucumber & Avocado Roll", "Loco Moco", "Banana Wheat Pancakes", "Grilled Mediterranean Sandwich", "Crinkle Cut French Fries", "Caramelized Onion", "Housemade Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Vegetarian Taco Pizza on Wheat", "Penne w/Butternut Squash Sauce", "Fresh Tomato Basil Sauce", "Linguini Pasta", "Haroset (w/nuts)", "Cabbage Cilantro Slaw", "Spelt Berry", "Hawaiian Sweet Bread", "Chocolate Chocolate Chip Bar", "Ground Beef and Bean Tostada", "Bean Rice and Cheese Burrito", "Fire Roasted Tomato Salsa", "Refried Black Beans", "Fresh Cauliflower & Carrots", "Chicken Stir Fry with Green Beans", "Sticky Brown Rice", "Turkey Meatloaf", "Stir Fried Chinese Greens", "Calamari Roll", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-04-30",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Bacon", "Apple Crepe w/Caramel Sauce", "Hash Browns", "Matzo Brei", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Valenciana Paella", "Kale & Arugula Salad w/Cranberries", "Asparagus w/Lemon & Matzo Salad", "Philly Cheese Steak Sandwich", "Potato Vegetable Kugel", "Corn", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Vegetable Beef Soup (w/nuts)", "Cheeseburger", "Black Bean Burger", "Grilled Turkey & Swiss on Sourdough", "Krinkle Cut Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Panna Cotta", "Cheese Roll", "Chocolate Macaroon (w/nuts)"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Curry (w/nuts)", "Curry Tofu & Vegetables (w/nuts)", "Vegetable Beef Soup (w/nuts)", "Caesar Salad", "Boneless Breaded Cajun Pork Chop", "Country Gravy", "Steamed Fresh Carrots", "Fresh Vegetables Saute with Garlic", "Mashed Potatoes with Herbs", "Linguini Pasta", "Red Clam Sauce", "Pasta Primavera", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Sausage & Cheese Biscuit", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["Turkey Vegetable Soup", "Ham Sandwich on Whole Wheat", "Kale/Peppers and Garlic", "Baked Potato", "Beef Tostada", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Pasta Carbonara", "Garden Vegetable Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Hot Dog", "Krinkle Cut French Fries", "Dandelion Greens w/Matzo Crumbles", "Strawberry Radicchio Salad (w/nuts)", "Garlic French Bread", "Chocolate Flan Cake", "Macaroon (w/nuts)"],
"Dinner": ["Turkey Vegetable Soup", "Tri Tip Roast", "Spinach and Matzo Lasagna (w/nuts)", "Rice Pilaf", "Sauteed Squash with Herbs", "Baked Potato", "Chicken Fajitas", "Bean and Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Turkey Stir Fry with Brown Rice", "Pineapple Fried Rice with Tofu", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Matzo Bread", "White Cake with Chocolate Frosting"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Grapefruit Halves", "Watermelon", "Whole Wheat Waffles", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brei", "Blueberry Pancakes", "Home Fried Potatos", "Grilled Ham", "Sauteed Kale"],
"Lunch": ["Quinoa Salad", "Turkey Provolone & Garlic Aoli Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Basmati Rice", "Caldo de Marisco", "Haroset (w/nuts)", "Couscous", "Cabbage Cilantro Slaw", "Three Cheese Flatbread", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettucine", "Crusty French Bread", "Cream Cheese Brownie Pie (w/nuts)", "Baklava Cookie (w/nuts)", "Chicken Parmigiana Sandwich", "Fresh Tomato Quiche", "Black Beans", "Fresh Green Beans with Garlic", "Carnitas Taco", "Rice with Cilantro & Onions", "Lettuce/Cheese/Tomatoes", "Spinach with Fresh Garlic & Ginger", "California Roll", "Tempura Onion Roll", "Philly Cheese Steak Sandwich", "Blueberry Pancakes", "Crinkle Cut French Fries", "White Bean & Red Lentil Patty", "Chipotle Aioli", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Caldo de Marisco", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Greek Tomato Sauce", "Linguini Pasta", "Haroset (w/nuts)", "Cabbage Cilantro Slaw", "Spelt Berry", "Crusty French Bread", "Walnut Orange Cake (w/nuts)", "Lasagna Bolognese", "Baked Rigatoni", "Black Beans", "Carrot & Zucchini with Lemon Butter", "Fresh Spinach with Garlic", "Tandoori Spiced Chicken", "Mujaddara Lentils and Rice", "Smoked Fish Fritters w/Beet Vinaigrette", "Roasted Cauliflower with Cumin", "California Roll", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-05-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chorizo and Eggs", "Pancake", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Whole Wheat Banana Bread"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Quinoa Salad w/Lemon Herb Veggies", "Spinach Salad Pecan Bacon & Cranb(w/nut)", "Herb Marinated Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Ham & Pineapple", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Whole Wheat Bread", "Cheesecake Bar (w/nuts)", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Beef  Broccoli and Mushroom Stir Fry", "Stir Fry Vegetables with Tofu", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Rockfish with Red Curry Sauce (w/nuts)", "Polenta with Vegetables", "Fresh Vegetable Medley", "Peas with Onions", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Ham & Pineapple", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Parmesan Herb Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Ham & Egg Breakfast Sandwich", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil and Brown Rice Soup", "Grilled Chicken Vincenza Sandwich", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Chicken Fried Taco", "Bean & Cheese Sope", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Ginger Beef Stir Fry", "Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Taco Salad", "zPesto Rolls", "Chocolate Chocolate Chip Bar"],
"Dinner": ["Hearty Vegetable Soup", "Turkey Meatloaf", "Spinach Rice Casserole", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Mushroom Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Chickpea Salad", "Whole Wheat Sourdough Bread", "Zucchini Cake w/Cr Chz Icing (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Sesame Beef with Broccoli", "Harissa Tofu Quinoa Bowl", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Kung Pao Chicken (w/nuts)", "Harissa Tofu Quinoa Bowl", "Sesame Beef with Broccoli", "Classic Miso Soup", "Grilled Turkey Cheddar Sandwich", "Jalapeno Popper Grilled Cheese Sandwich", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Asparagus Spinach Pasta Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Garlic Spinach", "Sauteed  Zucchini & Yellow Squash", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Snickerdoodle Cookie", "Cream Cheese Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Fresh Strawberry", "Buckwheat Black & Blue Parfait (w/nuts(v", "Buckwheat Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Chicken Caesar Salad", "Turkey Club Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Monterey Jack Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Sage & Sweet Potato Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Sweet Potato Chicken Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Cupcakes (w/nuts)", "Vietnamese BBQ Beef Sub", "White Beans", "Housemade Potato Chips", "Hawaiian Coleslaw", "Cajun Chicken Jambalaya", "Red Beans and Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Roll", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Sage & Sweet Potato Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Antipasto Pizza", "Butternut Squash Risotto", "Creamy Rosemary Sauce", "Whole Wheat Penne Pasta", "Sticky Toffee Pudding (w/nuts)", "Thick Focaccia Bread", "Lemon Pepper Rotisserie Chicken", "Chipotle Roasted Potatoes", "White Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Teriyaki Broccoli Beef Stir Fry", "Stir Fry Brocoli Spinach Bok Choy", "Tofu Teriyaki Bowl", "Vegetable Roll", "Spicy Tuna Roll"],
}
},
],
},
];
export default diningMenu
