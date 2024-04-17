const diningMenu = [
{
"date": "2024-04-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Jack Cheese", "Sticky Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Arni Psito", "Spanakopita Triangles (V)", "Steamed Fresh Carrots", "Buffalo Chicken Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Reuben Sandwich", "Shoestring Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Whole Wheat Cheese Onion Roll", "Pumpkin Crisp", "Oatmeal Raisin Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Vegetable Pad Thai (w/nuts)", "Lentil & Brown Rice Soup", "Pasta Salad with Spinach & Feta", "Chicken Marsala", "Polenta with Marinara Sauce", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Whole Wheat Spaghetti", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Buffalo Chicken Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Key Lime Pie", "Sourdough Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Vegetable Breakfast Burrito", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Noodle Soup", "Chipotle Beef Wrap", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Vegetable Empanada", "Rice with Cilantro & Lime", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Mushroom Pizza", "Herb Breadsticks", "Chicken Fried Rice", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Black Bean Burger", "Grilled Tuna Melt on Sourdough", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Olive Roll", "Tres Leches Cake"],
"Dinner": ["Potato Leek Soup", "Chicken Madeira", "Creole Beans and Rice", "Spinach with Fresh Garlic & Ginger", "Baked Potato", "Baked Sweet Potato", "Beef Fajita", "Roasted Vegetable Quesadilla", "Rice with Cilantro & Lime", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Mushroom Pizza", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Whole Grain Rotini", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Brown Rice", "Southwestern Chopped Salad (w/nuts)", "Sesame Bread", "Lemon Yogurt Pound Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Toll House Bar", "Butterscotch Bar", "Lemon Crinkle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Toll House Bar", "Butterscotch Bar", "Lemon Crinkle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Cantaloupe", "Fresh Strawberry", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Homemade Cinnamon Rolls", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs w/Chile/Jack/Tomato", "Apple Cinnamon Oatmeal Pancake", "Hash Browns", "Fresh Cauliflower & Carrots"],
"Lunch": ["Spicy Kale Caesar", "Buffalo Chicken Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Cheeseburger Pizza", "Chef's Salmon Pasta", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Homemade Bread", "Sugar Cookies", "Red Velvet Cupcake", "Chicken Chile Verde Burrito", "Fresh Tortilla Chips", "Black Beans", "Lettuce/Cheese/Tomatoes", "Sauteed Zucchini with Garlic", "Pho Soup w/Condiments", "Miso Ramen", "Vegetable Sushi Roll", "Spicy Tuna Roll", "Hamburger", "Grilled Cheese /Tom & Herbs on Wheat", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Housemade Spicy Ketchup", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Cheeseburger Pizza", "Pasta Primavera", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Chocolate Flourless Cake", "Homemade Bread", "Beef Stew", "Mashed Red Potatoes w/ Garlic", "Black Beans", "Brussel Sprouts Honey Sriracha Glaze", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice w/Tofu", "Bang Bang Broccoli", "Vegetable Roll with Brown Rice", "Spicy Tuna Roll"],
}
},
],
},
{
"date": "2024-04-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Benedict", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cherry Chocolate Scone", "Cinnamon Roll"],
"Lunch": ["Sliced Ham", "Argentinian Grilled Vegetable", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Sticky Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Taco Salad", "Spinach Pasta Salad", "Mahi Mahi Veracruz", "Lemon Garlic Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Salami Pizza", "Assorted Bell Pepper Pizza on Wheat", "Cheese Pizza on White", "Pozole with Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Classic French Napoleon", "Olive Whole Wheat Bread", "Zebra Bar (w/nuts)"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Vegetables with Tofu", "Greens and Beans Soup", "Caesar Salad", "Honey Baked Halal Chicken Quarters", "Steamed Whole Baby Carrots", "Roasted Beets", "Three Bean Pilaf", "Buttered Noodles", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Salami Pizza", "Assorted Bell Pepper Pizza on Wheat", "Cheese Pizza on White", "Sour Cream & Chives Roll", "New York Style Crumb Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Sausage Biscuit with Cheese & Egg", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Scone"],
"Lunch": ["Broccoli Cheese Soup", "Peruvian Ham Butifarra Sandwich", "Fresh Spinach with Garlic", "Baked Potato", "Chicken Quesadilla", "Bean & Cheese Sope", "Spanish Rice w/Roasted Corn", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Creamy Bolognese Sauce", "Spaghetti Pasta", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Malibu Burger", "Grilled Jack on Sourdough", "Shoestring French Fries", "Kale Salad w/Cranberries (w/nuts)", "Whole Wheat Roll", "Peanut Butter Bar (w/nuts)"],
"Dinner": ["Tomato Basil Soup", "Pork Loin Roast", "Mushroom Stroganoff", "Roasted Potato Wedges", "Sauteed Zucchini with Garlic", "Baked Potato", "Chicken Nachos", "Bean and Rice Burrito", "Spanish Rice w/Roasted Corn", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Orange Chicken Stir Fry", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Mediterranean Orzo Pasta Salad", "Cheese Bread", "Cream Cheese Strudel"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Toll House Bar", "Butterscotch Bar", "Lemon Crinkle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Toll House Bar", "Butterscotch Bar", "Lemon Crinkle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Grapefruit Halves", "Cantaloupe", "Whole Wheat Waffles", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Home Fried Potatos", "Grilled Ham", "Sauteed Kale"],
"Lunch": ["Veg & Quinoa Salad w/Asian Vin", "Turkey Provolone & Garlic Aoli Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Basmati Rice", "Minestrone Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Three Cheese Flatbread", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettucine", "Crusty French Bread", "Cream Cheese Brownie Pie (w/nuts)", "Baklava Cookie (w/nuts)", "Huli Huli Chicken", "Pineapple Fried Rice", "Fresh Tomato Quiche", "Black Beans", "Fresh Green Beans with Garlic", "Carnitas Taco", "Roasted Tomato Salsa", "Taco Rajas", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Yam & Avocado Sushi Roll", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "Malibu Burger", "Chipotle Aioli", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Minestrone Soup", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Greek Tomato Sauce", "Linguini Pasta", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Crusty French Bread", "Chocolate Chip Banana Bread Pudding", "Lasagna Bolognese", "Baked Rigatoni", "Black Beans", "Carrot & Zucchini with Lemon Butter", "Fresh Spinach with Garlic", "Tandoori Spiced Chicken", "Mujaddara Lentils and Rice", "Roasted Broccoli & Red Onion", "Calamari Roll", "Yam & Avocado Sushi Roll"],
}
},
],
},
{
"date": "2024-04-19",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Carnitas Tortas", "Jicama Pico De Gallo", "Tabouli Salad", "Beef Milanesa", "Sauteed Summer Squash with Herbs", "Italian Green Beans", "Mashed Potatoes", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "New England Clam Chowder", "Charburger", "Gardenburger", "Chicken Taquito", "Potato Taquito", "Krinkle Cut Fries", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Tabouli Salad", "Crispy Salmon Roll", "Long Grain Rice", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Garlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread"],
"Lunch": ["Manhattan Clam Chowder", "Open Face Grilled Eggplant Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Grilled Vegetable Tostada", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Spicy Turkey Citrus Stir Fry w/Br. Rice", "Dragon Noodles", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Mozzarella/Tom on 100% Wheat", "Krinkle Cut French Fries", "Wild Rice Garden Salad", "Potato Roll", "Banana Chocolate Chip Cookie"],
"Dinner": ["French Onion Soup", "Fish Cake", "Lemon Beurre Blanc", "Vegetable Rice Pilaf", "Kale/Peppers and Garlic", "Baked Potato", "Baked Sweet Potato", "Turkey Hard Taco", "Black Bean & Rice Quesadilla", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Chicken Fried Rice", "Tofu Stir Fry w/Black Bean Sauce/B. Rice", "Long Grain Rice", "Brown Rice", "Asian Spinach Salad", "Onion Bread", "Devil's Food Cake with Mocha Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Toll House Bar", "Butterscotch Bar", "Lemon Crinkle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice (w/nuts)", "Danish Cauliflower Cheese Soup", "Jalapeno Popper Grilled Cheese Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spinach Power Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Toll House Bar", "Butterscotch Bar", "Lemon Crinkle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Pineapple", "Cantaloupe", "Grapefruit Halves", "Make Your Own Waffle", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Vegetable Fried Rice", "Potatoes O'Brien", "Mixed Greens Side Salad"],
"Lunch": ["Dragon Noodles", "Chinese Chicken Salad Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Caprese Flatbread w/Balsamic Redux", "Three Cheese Pizza on White", "Fusilli Buscatti Pasta", "Roasted Vegetable Marinara Sauce", "Homemade Onion Bread", "Shortbread Espresso Cookie", "Lemon Pie", "Turkey Melt", "Red Beans and Rice", "Fresh Green Beans", "Tangy Apple Cabbage Slaw", "Grilled Chicken Taco", "Lettuce/Cheese/Tomatoes", "Mexican Rice", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Blended Burger with Brioche Bun", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Chipotle Aioli", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Pesto Pizza", "Penne with Chicken and Mushrooms", "Marinara Primavera Sauce", "Fusilli Buscatti Pasta", "Homemade Onion Bread", "Blueberry Lemon Cake", "Mediterranean Spiced Rotisserie Chicken", "Butternut Squash Risotto", "Black Beans", "Fresh Mashed Potatoes", "Steamed Zucchini & Crookneck Squash", "Fried Fish Taco", "Salsa", "Black Beans w/Brown Rice & Cilantro", "Lettuce/Cheese/Tomatoes", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-04-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Rotisserie Pork Loin", "Mushroom Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Sausage Patty", "Black Beans", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Sticky Rice", "General Tso's Chicken", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Sauteed Zucchini Sticks", "Ratatouille with White Beans", "Oven Browned Potatoes", "Rotelli Pasta", "Chicken Marinara Sauce", "Bowtie Pasta", "Fresh Pesto Sauce", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Ham & Pineapple", "Artichoke Pizza with Pesto on Wheat", "Cheese Pizza on White", "Rosemary Roll", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Fresh Vegetable Soup", "Buffalo Chicken Drumstick", "Vegetable Medley", "Baked Potato", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Cream of Wheat", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs", "Texas French Toast", "Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Bagels-Breads & Cereals- See for Choices", "Pinch Bread"],
"Dinner": ["Far East Vegetable Soup", "Herb Chicken Quarters", "Orzo Pasta with Vegetables", "Fresh Vegetable Medley w/Spinach", "Rice Pilaf", "Baked Potato", "Beef Enchilada", "Black Bean & Rice Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Assorted Meat Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Sesame Beef with Broccoli", "Spicy Veg Stir Fry w/Peanut (w/nuts)", "Long Grain Rice", "Brown Rice", "Green Bean Provencal Salad", "Pizza Bread", "Cherry Cobbler"],
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
"Brunch": ["Grapefruit Halves", "Pineapple", "Ruby Flame Grapes", "Cinnamon Maple Granola (w/nuts)", "Granola Cantaloupe Parfait (w/nuts)", "Oatmeal", "Long Grain Rice", "Make Your Own Waffle", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Tomato Basil & Bacon Pizza", "Pasta with Grilled Vegetables", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Flour Tortilla", "Raspberry White Choc Muffin", "Egg English Muffin Sandwich", "Breakfast Quesadilla", "Creamed Spinach", "Black Beans", "Tomato Rice Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Pancake", "Turkey Bacon", "Roasted Breakfast Potatoes", "Roasted Vegetables"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Tomato Rice Soup", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Three Cheese Pizza on White", "Pasta with Grilled Vegetables", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "German Chocolate Cake (w/nuts)", "Wheat Germ Bread", "Cheese Enchilada", "Tamale Pie Vegetarian", "Mexican Rice", "Black Beans", "Grilled Zucchini & Tomatoes", "Hoisin Chicken", "Sticky Rice", "Vegetable Fried Rice", "Spinach with Fresh Garlic & Ginger", "Sushi Brown Rice Grilled Ahi Tuna Bowl", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-04-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Philly Cheese Steak Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "French Toast", "Cage Free Scrambled Eggs w/Ham & Cheese", "Pinto Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cinnamon Coffee Cake", "Orange Cranberry Muffin"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Stir Fry Noodles with Vegetables", "Caesar Salad", "Turkey Meatloaf", "Baby Carrots with Tarragon", "Corn", "Risotto with Fresh Vegetables", "Tomato Rice Soup", "Linguini Pasta", "Tomato Basil & Garlic Sauce", "Whole Wheat Penne Pasta", "Creamy Rosemary Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Dilled Vegetable Barley Soup", "Chicken Philly Sandwich", "Roasted Carrots with Garlic", "Baked Potato", "Long Grain Rice", "Vegetable & Jalapeno Pizza", "Cheese Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs", "Pancakes", "Diced Potatoes with Onions", "Chicken Sausage Patty", "Waffle", "Multi-Grain Waffle", "Pasta Salad w/Chicken & Sundried Tomato", "Sliced Pineapple", "Grapefruit Halves", "Sliced Honeydew", "Sliced Cantalope", "Bagels-Breads & Cereals- See for Choices", "Strawberry Muffin"],
"Dinner": ["Chicken Brown Rice Soup", "Roast Beef", "Steamed Red Potatoes with Parsley", "French Cut Green Beans", "Baked Potato", "Chicken and Rice Tostada", "Potato Vegetable Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Vegetable & Jalapeno Pizza", "Cheese Pizza", "Herb Breadsticks", "Turkey Marinara", "Spaghetti Pasta", "Tomato Leek Marinara", "Wheat Penne Pasta", "Long Grain Rice", "Brown Rice", "Macaroni Salad", "Swirled Herb Bread", "German Apple Cake (w/nuts)"],
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
"Brunch": ["Watermelon", "Pineapple", "Honeydew Melon", "Cinnamon Maple Granola (w/nuts)", "Cinnamon Apple Granola (w/nuts)", "Honeydew & Berry Parfait (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Cheese Pizza on White", "Whole Wheat Waffles", "Whipped Cream", "Apple Cranberry Pancake Topping", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Flour Tortilla", "Apple Oat Coffee Cake", "Breakfast Burrito", "Refried Beans", "Fire Roasted Tomato Chipotle Salsa", "Ham & Cheddar Quiche", "Corn Chowder", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Steamed Broccoli & Cauliflower"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Corn Chowder", "Cheese Pizza on White", "Bolognese Sauce with Pancetta", "Farfalle Pasta", "Creamy Rosemary Sauce", "Fettuccine Pasta", "Spicy Watermelon Salad", "Cabbage Cilantro Slaw", "Pearl Barley", "Killer Brownie (w/nuts)", "Whole Wheat French Bread", "Grilled Pork Taco", "Radish and Jalapeno Slaw", "Fire Roasted Tomato Chipotle Salsa", "Roasted Cauliflower", "Black Beans", "Lettuce/Cheese/Tomatoes", "Vindaloo Chicken", "Basmati Rice", "Indian Style Stew w/ButternutSquash", "Steamed Broccoli & Cauliflower", "Daikon Roll", "California Club Roll"],
}
},
],
},
{
"date": "2024-04-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Whole Wheat Pancake (Housemade)", "Chilaquiles (No Egg)", "Chicken Sausage Patty", "Home Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Ginger with Cardamom Scone", "Organic Nonfat Milk", "Banana", "Light Cream Cheese", "Whole Wheat Bagel"],
"Lunch": ["Tuna Salad", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Chicken Stir Fry with Green Beans", "Spicy Tofu w/Vegetables & Noodles", "Chicken Spinach & Mushroom Lasagna", "Fresh Cauliflower", "Fresh Broccoli Spears", "Chili Black Bean", "Bermuda Salad", "Japanese Noodle Salad", "Tomato Basil Pizza on White", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Gumbo Soup", "Grilled Chicken Burger", "Black Bean Burger", "Falafel on Pita with Raita Sauce", "Pinto Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Quinoa", "Irish Soda Bread", "Jelly Bar Spritz", "Peanut Butter Fudge Cupcake (w/nuts)", "Water", "Fuji Apple", "Granulated Peanut", "Raisin", "Whole Plain Greek Yogurt", "Fresh Cauliflower", "Quinoa", "Chicken Stir Fry with Green Beans"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Chicken Vegetable Soup", "Cilantro Lime Salmon", "Fire Roasted Tomato Chipotle Salsa", "Black Bean Enchilada", "Steamed Zucchini", "Spanish Corn", "Spanish Rice", "Quinoa Salad w/Lemon Herb Veggies", "Fettucine Alfredo", "Penne Pasta", "Tomato and Leek Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Buffalo Chicken Pizza", "Tomato Basil Pizza on White", "Cheese Pizza on White", "Whole Wheat Bread", "Apple Matzo Kugel (w/nuts)", "Organic Nonfat Milk", "Navel Orange", "Sauteed Fresh Carrots", "Baked Sweet Potato", "Long Grain Rice"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Chorizo Breakfast Burrito", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Spicy Black Bean Soup", "Spicy Asian Vegetable Wrap", "Cauliflower and Red Bell Pepper", "Baked Potato", "Baked Sweet Potato", "Turkey Hard Taco", "Bean and Cheese Tostada", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Pesto Artchoke Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chinese Chicken w/Spring Vegetables", "Tofu Vegetable Pad Thai (w/nuts)", "Long Grain Rice", "Brown Rice", "Grilled Chicken Burger", "Black Bean Burger", "Grilled Cheese/Tomatoes/Chiles", "Shoestring French Fries", "Strawberry Radicchio Salad (w/nuts)", "Cheese Roll", "Chocolate Chocolate Chip Bar"],
"Dinner": ["Vegetable Soup", "Blackened Catfish", "Vegetable Medley", "Potato Latkes", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Chile Relleno Casserole", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Pesto Artchoke Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Spicy Turkey Citrus Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "zCountry Wild Rice Blend", "Carrot & Raisin Salad", "Marble Cake w/Chocolate Icing", "Cracked Wheat Bread"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Grapefruit Halves", "Honeydew Melon", "Watermelon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Turkey Bacon", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Greek Chicken Wrap", "Sliced Roast Beef", "Sliced Turkey", "Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur", "Cherry Tomato Goat Cheese Herb Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Mushroom Carbonara", "Herb Focaccia Bread", "Mint Chocolate Chip Cookie", "Coconut Cake (w/nuts)", "Coconut Chiffon Cake (w/nuts)", "Baked Ham & Turkey Hawaiian Sandwich", "Potato Vegetable Kugel", "Pineapple Fried Rice w/Tofu", "Pinto Beans", "Carrot & Zucchini with Lemon Sauce", "Chicken with Red Curry Sauce (w/nuts)", "Sticky Rice", "Vegetable Medley Stir Fry", "Vegetable Sushi Roll", "Spicy Tuna Roll", "Cheeseburger", "Bean and Cheese Burrito", "Buttermilk Pancakes", "Shoestring Fries", "Fire Roasted Tomato Chipotle Salsa", "Sriracha Mayonnaise", "Classic BBQ Sauce"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur", "Cherry Tomato Goat Cheese Herb Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Mushroom Carbonara", "Banana Cake & Penut Butter Icing(w/nut)v", "Herb Focaccia Bread", "Coconut Chiffon Cake (w/nuts)", "Grilled Tuscan Chicken", "Garlic French Bread", "Buttered Noodles", "Pinto Beans", "Sauteed Zucchini with Garlic", "Cajun Chicken Jambalaya", "Long Grain Rice", "Eggplant Parmesan Casserole", "Roasted Mixed Vegetables", "Vegetable Roll", "Spicy Tuna Roll"],
}
},
],
},
{
"date": "2024-04-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Bacon", "Hash Browns", "Matzo Brei", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread Pudding", "Bran Muffin", "Organic Nonfat Milk", "Banana", "Raisin", "Granulated Peanut", "Oatmeal"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Smoked Pork Loin and Gouda Sandwich", "Matzo Pie (w/nuts)", "Green Beans", "Santa Fe Salad", "Asparagus w/Lemon & Matzo Salad", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Vegetable Soup", "Charburger", "Grilled Vegetable Burger", "Hot Dog", "Beans Navy White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Chocolate Macaroon (w/nuts)", "Pao de Queijo", "Mandarin Orange Cake", "Water", "Fuji Apple", "Granulated Peanut", "Whole Plain Greek Yogurt", "Red Wine Vinegar", "Lemon", "Pea", "Whole Kernel Corn", "Red Kidney Bean", "Garbanzo Bean", "Red Cabbage", "Shredded Carrot", "Celery", "Cauliflower Florette", "Cherry Tomato", "Broccoli Florette", "Shoestring Beet", "zOrganic Spinach", "Green Beans", "Rice Noodles with Black Bean Sauce"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Brown Rice", "Kung Pao Beef (w/nuts)", "Stir Fry Vegetables with Tofu", "Vegetable Soup", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Asparagus w/Lemon & Matzo Salad", "Fettuccine with Chicken, Olives & Garlic", "Fusilli with Roasted Vegetables", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Pumpkin Cheesecake Pie", "Graham Bread", "Organic Nonfat Milk", "Navel Orange", "Steamed Zucchini", "Brown Rice", "Baked Sweet Potato", "Grilled Tilapia with Lemon Pepper"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Matzo Brei w/Raisins", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Raspberry Cream Coffee Cake (w/nuts)", "Matzo Meal Muffins"],
"Lunch": ["Matzo Ball Soup", "Chicken Caesar Wrap", "Steamed Carrots & Zucchini", "Baked Potato", "Chicken and Bean Burrito", "Sweet Corn Tamale Casserole", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Penne Arrabiata with Chicken", "Greek Pasta w/Feta Tomato & Spinach", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheddar on Wheat", "Krinkle Cut French Fries", "Asparagus Matzo Salad", "Garlic French Bread", "Macaroon (w/nuts)"],
"Dinner": ["Matzo Ball Soup", "Turkey Meatloaf", "Spinach Rice Casserole", "Mashed Potatoes", "Crookneck Squash & Herbs", "Baked Potato", "Chili Lime Grilled Chicken Taco", "Chipotle Tempeh Tacos", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry & Brown Rice", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Tossed Italian Greens", "Cracked Wheat Roll", "Lemon Sponge Cake (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Orange Apricot Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Matzo Brie", "Egg White and Vegetable Omelet", "Sourdough French Toast", "Fried Potatoes & Onion", "Sauteed Fresh Cauliflower"],
"Lunch": ["Zucchini Quinoa Green Bean Salad", "Queso with Roasted Chiles Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Wild Rice Country Blend", "Chicken Vegetable Soup", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Caprese Flatbread w/Balsamic Redux", "Penne with Chicken and Mushrooms", "Greek Tomato Sauce", "Linguini Pasta", "Potato Bread", "Chocolate Crinkle Cookie", "Lime Bar", "Tacos Al Pastor", "Pinto Beans", "Rice with Cilantro & Onions", "Lettuce/Cheese/Tomatoes", "Roasted Cauliflower with Cumin", "Chicken Tikka Masala", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Asparagus & Egg Roll", "Grilled Turkey Burger", "Sourdough French Toast", "Shoestring Fries", "Mushroom Lentil Burger", "Caramelized Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Chicken Vegetable Soup", "Pepperoni Pizza", "Alburro Sauce", "Fettuccine Pasta", "Penne with Chicken and Mushrooms", "Haroset (w/nuts)", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Brioche", "Brownie Matzo (w/nuts)", "White Cupcake with Buttercream Icing", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Quinoa Salad", "Chipotle Roasted Potatoes", "Pinto Beans", "Sauteed Kale", "Chile Colorado Burrito", "Refried Beans", "Rice with Cilantro & Onions", "Steamed Fresh Broccoli", "Calamari Roll", "Asparagus & Egg Roll"],
}
},
],
},
];
export default diningMenu
