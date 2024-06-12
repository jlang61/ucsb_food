const diningMenu = [
{
"date": "2024-06-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Jack Cheese", "Sticky Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Arni Psito", "Spanakopita Triangles (V)", "Steamed Fresh Carrots", "Buffalo Chicken Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Reuben Sandwich", "Shoestring Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Raisin Bread with Glaze", "Pumpkin Crisp", "Oatmeal Raisin Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Veggie Pad Thai w/Peanuts(w/nut)", "Lentil & Brown Rice Soup", "Pasta Salad with Spinach & Feta", "Chicken Marsala", "Polenta with Marinara Sauce", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Whole Wheat Spaghetti", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Buffalo Chicken Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Key Lime Pie", "Sourdough Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Noodle Soup", "Chipotle Beef Wrap", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Vegetable Empanada", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Sausage Pizza", "Mac and Cheese Pizza", "Herb Breadsticks", "Chicken Fried Rice", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Black Bean Burger", "Grilled Tuna Melt on Sourdough", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Olive Roll", "Tres Leches Cake"],
"Dinner": ["Spicy Black Bean Soup", "Chicken Madeira", "Vegetable Rice Pilaf", "Spinach with Fresh Garlic & Ginger", "Baked Potato", "Baked Sweet Potato", "Beef Fajita", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Sausage Pizza", "Mac and Cheese Pizza", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Whole Grain Rotini", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Brown Rice", "Southwestern Chopped Salad (w/nuts)", "Sesame Bread", "Lemon Yogurt Pound Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Cantaloupe", "Ruby Flame Grapes", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Homemade Cinnamon Rolls", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs w/Chile/Jack/Tomato", "Apple Cinnamon Oatmeal Pancake", "Hash Browns", "Fresh Cauliflower & Carrots"],
"Lunch": ["Spicy Kale Caesar", "Tuna Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Buffalo Chicken Pizza", "Chef's Salmon Pasta", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Homemade Bread", "Sugar Cookies", "Cream Cheese Brownie Pie", "Chicken Chile Verde Burrito", "Fresh Tortilla Chips", "Black Beans", "Lettuce/Cheese/Tomatoes", "Sauteed Zucchini with Garlic", "Beef Pho", "Miso Ramen", "Vegetable Sushi Roll", "Spicy Tuna Roll", "Hamburger", "Grilled Cheese /Tom & Herbs on Wheat", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Housemade Spicy Ketchup", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Buffalo Chicken Pizza", "Pasta Primavera", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Chocolate Flourless Cake", "Homemade Bread", "Beef Stew", "Mashed Red Potatoes w/ Garlic", "Black Beans", "Brussel Sprouts Honey Sriracha Glaze", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice w/Tofu", "Bang Bang Broccoli", "Vegetable Roll with Brown Rice", "Spicy Tuna Roll"],
}
},
],
},
{
"date": "2024-06-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Benedict", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cherry Chocolate Scone", "Cinnamon Roll"],
"Lunch": ["Sliced Ham", "Argentinian Grilled Vegetable", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Sticky Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Taco Salad", "Kale & Arugula Salad w/Cranberries", "Rockfish Veracruz", "Lemon Garlic Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Salami Pizza", "Assorted Bell Pepper Pizza on Wheat", "Cheese Pizza on White", "Pozole with Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Classic French Napoleon", "Olive Whole Wheat Bread", "Zebra Bar (w/nuts)"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Vegetables with Tofu", "Greens and Beans Soup", "Caesar Salad", "Honey Baked Halal Chicken Quarters", "Steamed Whole Baby Carrots", "Roasted Beets", "Three Bean Pilaf", "Buttered Noodles", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Salami Pizza", "Assorted Bell Pepper Pizza on Wheat", "Cheese Pizza on White", "Sour Cream & Chives Roll", "New York Style Crumb Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Egg and Cheese Biscuit", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle"],
"Lunch": ["Broccoli Cheese Soup", "Chicken Club Sub", "Vegetable Medley", "Baked Potato", "Al Pastor Pork Tacos", "Bean & Cheese Sope", "Spanish Rice w/Roasted Corn", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Bacon Tomato Basil Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Creamy Bolognese Sauce", "Spaghetti Pasta", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Black Bean Burger", "Grilled Roast Beef & Jack Sandwich", "Shoestring French Fries", "Kale Arugula Salad with Cranberry", "Peanut Butter Bar (w/nuts)"],
"Dinner": ["Tomato Basil Soup", "Char Grilled Pork Chop", "Mushroom Stroganoff", "Roasted Potato Wedges", "Sauteed Zucchini with Garlic", "Baked Potato", "Chili Lime Grilled Chicken Taco", "Bean and Rice Burrito", "Spanish Rice w/Roasted Corn", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Bacon Tomato Basil Pizza", "Three Cheese Pizza on Wheat", "Herb Breadsticks", "Korean Beef Stir Fry with Rice", "Vegetable Fried Rice", "Long Grain Rice", "Wild Rice Blend", "Mediterranean Orzo Pasta Salad", "Cream Cheese Strudel"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Watermelon", "Cantaloupe", "Whole Wheat Waffles", "Crunchy Fruit Salad (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Home Fried Potatos", "Grilled Ham", "Sauteed Kale"],
"Lunch": ["Veg & Quinoa Salad w/Asian Vin", "Turkey Provolone & Garlic Aoli Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Basmati Rice", "Minestrone Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Three Cheese Flatbread", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettucine", "Crusty French Bread", "Red Velvet Cupcake", "Baklava Cookie (w/nuts)", "Huli Huli Chicken", "Pineapple Fried Rice", "Fresh Tomato Quiche", "Black Beans", "Fresh Green Beans with Garlic", "Santa Barbara Tri-Tip Sandwich", "Vegetable Black Bean Chili", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Yam & Avocado Sushi Roll", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "Malibu Burger", "Chipotle Aioli", "Housemade Spicy Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Minestrone Soup", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Tomato Basil & Garlic Sauce", "Farfalle Pasta", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Crusty French Bread", "Chocolate Chip Banana Bread Pudding", "Lasagna Bolognese", "Baked Rigatoni", "Black Beans", "Carrot & Zucchini with Lemon Butter", "Fresh Spinach with Garlic", "Tandoori Spiced Chicken", "Mujaddara Lentils and Rice", "Roasted Broccoli & Red Onion", "Calamari Roll", "Yam & Avocado Sushi Roll"],
}
},
],
},
{
"date": "2024-06-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Carnitas Tortas", "Jicama Pico De Gallo", "Tabouli Salad", "Vietnamese Pork Banh Mi", "Potato Chip", "Sauteed Summer Squash with Herbs", "Green Beans", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "New England Clam Chowder", "Charburger", "Gardenburger", "Potato Taquito", "Krinkle Cut Fries", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Tabouli Salad", "Crispy Salmon Roll", "Long Grain Rice", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Garlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Vietnamese Beef Sub (Banh Mi)", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish and Shrimp Enchilada", "Grilled Vegetable Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Spicy Turkey Citrus Stir Fry w/Br. Rice", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Mozzarella & Tomato on Wheat", "Krinkle Cut French Fries", "Wild Rice Garden Salad", "Banana Chocolate Chip Cookie"],
"Dinner": ["Hearty Vegetable Soup", "Tri Tip Roast", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Turkey Hard Taco", "Vegetable Corn Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Buffalo Chicken Pizza", "Mexican Pizza", "Herb Breadsticks", "Orange Chicken Stir Fry", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Asian Spinach Salad", "Devil's Food Cake with Mocha Icing"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Honeydew Melon", "Cantaloupe", "Watermelon", "Make Your Own Waffle", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Fried Eggs", "Vegetable Fried Rice", "Potatoes O'Brien", "Mixed Greens Side Salad"],
"Lunch": ["Dragon Noodles", "Chinese Chicken Salad Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Caprese Flatbread w/Balsamic Reduction(v", "Three Cheese Pizza on White", "Fusilli Buscatti Pasta", "Roasted Vegetable Marinara Sauce", "Homemade Onion Bread", "Shortbread Espresso Cookie", "Lemon Pie", "Turkey Melt", "Red Beans and Rice", "Fresh Green Beans", "Tangy Apple Cabbage Slaw", "Grilled Chicken Taco", "Roasted Tomato Salsa", "Cilantro & Onion Mixture", "Refried Beans", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Blended Burger with Brioche Bun", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Chipotle Aioli", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Mushroom Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Pesto Pizza", "Penne with Chicken and Mushrooms", "Marinara Primavera Sauce", "Fusilli Buscatti Pasta", "Homemade Onion Bread", "Blueberry Lemon Cake", "Mediterranean Spiced Rotisserie Chicken", "Butternut Squash Risotto", "Black Beans", "Fresh Mashed Potatoes", "Steamed Zucchini & Crookneck Squash", "Fried Fish Taco", "Salsa", "Black Beans w/Brown Rice & Cilantro", "Lettuce/Cheese/Tomatoes", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-06-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2024-06-16",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2024-06-17",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
{
"date": "2024-06-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
}
},
{
"name": "De La Guerra",
"meals": {
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
}
},
],
},
];
export default diningMenu
