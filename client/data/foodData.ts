const diningMenu = [
{
"date": "2024-04-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Denver Omelet", "Western Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Strawberry Cream Coffee Cake (w/nuts)", "Assorted Bagels & Condiments"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Gazpacho Salad", "French Potato Salad", "Chicken Caesar Sandwich", "Steamed Zucchini", "Marinated Italian Vegetable Salad", "Bacon Tomato Basil", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Classic French Onion Soup with Croutons", "Cheeseburger", "Grilled Vegetable Burger", "Grilled Ham & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Cheese Onion Roll", "Nut and Seed Bar (w/nuts)", "Galaktoboureko (Greek Pudding)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cakes", "Coriander Lime Aioli", "Sauteed Kale", "French Potato Salad", "Buttermilk Chicken Fried", "Carrots with Lemon Butter", "Mashed Potatoes", "Fresh Corn on the Cob", "Cabbage Soup", "Fettuccine", "Gnocchi Mushroom Corn & Sage Butter", "Pasta Shells w/Eggplant & Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Bacon Tomato Basil", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Ricotta Pepper Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Mexican Style Cage Free Scrambled Egg", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Banana Coffee Cake (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Fish Cake", "Lemon Beurre Blanc", "Steamed Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Black Bean and Rice Burrito", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Salami Pizza", "Roasted Tomato & Basil Pizza", "Herb Breadsticks", "Meat Sauce", "Penne Pasta", "Farfalle with Roasted Vegetables", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Roast Beef & Jack on Sourdough", "Shoestring French Fries", "Chicken Sesame Noodle Salad", "Zebra Bar (w/nuts)", "Wheat Germ Roll"],
"Dinner": ["Gumbo Soup", "Grilled Chicken w/ Ginger", "Stuffed Green Bell Peppers", "Bok Choy w/Fresh Garlic & Ginger", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean & Rice Tostada", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Salami Pizza", "Roasted Tomato & Basil Pizza", "Herb Breadsticks", "Chicken Pad Thai (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Wild Rice Blend", "Long Grain Rice", "Greek Salad", "Cracked Wheat Bread", "Fresh Strawberry Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Lays Potato Chip", "Cowboy Cookie Bar", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Greek Chicken with Orzo & Baked Tomatoes", "Black Bean Chili Rice & Garlic Chip", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese/Tom Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Garlic Spinach", "Fries", "Potato Chip", "Cowboy Cookie Bar", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Fresh Strawberry", "Honeydew Melon", "Buckwheat Granola (w/nuts)", "Granola Black & Blue Parfait (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Yogurt Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Sausage Patty", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Lunch": ["Hawaiian Sweet Bread", "Potato Salad w/Fennel & Salsa Verde (vgn", "Roasted Vegetable Panini", "Sliced Turkey Pastrami", "Sliced Genoa Salami", "Sliced Turkey", "Sliced Roast Beef", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Penne Arrabiata with Chicken (w/nuts)", "Hawaiian Sweet Bread", "Chocolate Pudding", "Mocha Cupcake", "Chicken Mole Enchiladas", "Taco Rajas", "Spanish Rice w/Roasted Corn", "Tortilla Chips and Salsa", "Refried Beans", "Seafood Creole", "Long Grain Rice", "Steamed Fresh Broccoli", "Creole Beans and Rice", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi", "Char Burger", "Vegetarian Cuban Sandwich", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chipotle Aioli", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Miso Broth Soup with Spinach", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Marinara Sauce with Sausage", "Spaghetti", "Rhubarb Stacking Cake", "Hawaiian Sweet Bread", "Chile Verde with Pork & Corn Tortillias", "Quesadilla w/Roasted Poblano Chiles", "Salsa", "Refried Beans", "Lettuce/Cheese/Tomatoes", "Grilled Tilapia", "Chermoula Sauce", "Harissa Lentils w/Pickled Onion", "Couscous", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-04-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey Pastrami", "Sliced Genoa Salami", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Tomato Soup w/Fresh Vegetables", "Chicken Enchilada", "Corn with Red Peppers", "Refried Beans", "Spanish Rice", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Oatmeal", "Cage Free Scrambled Eggs with Cheese", "Grilled Ham with Honey Glaze", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Stir Fry Pork with Vegetables", "Stir Fry Vegetables with Tofu", "Caesar Salad", "Ginger Beef Pepper Steak", "Polenta with Marinara Sauce", "Roasted Vegetables", "Peas", "Long Grain Rice", "Ham & Navy Bean Soup", "Spaghetti Pasta", "Chicken Sausage & Mushroom Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Assorted Meat Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chili Style Lentil Soup", "Reuben Sandwich", "Steamed Cauliflower and Broccoli", "Baked Potato", "Baked Sweet Potato", "Granola Parfait", "Long Grain Rice", "Sausage Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Arroz con Leche", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chorizo Breakfast Burrito", "Chicken Sausage Patty", "Hash Browns", "Strawberry Sauce", "Chocolate Sauce", "Waffle", "Multi-Grain Waffle", "Chickpea Pasta & Arugula Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Bagels-Breads & Cereals- See for Choices", "Banana Chocolate Chip Muffin", "Chocolate Bread"],
"Dinner": ["Danish Cauliflower Cheese Soup", "Roast Beef", "Zucchini and Crookneck Squash", "Wild Rice Pilaf", "Baked Potato", "Chicken Soft Taco", "Potato Chorizo Burrito", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Pork Stir Fry", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Lemon Herb Quinoa Salad", "Sundried Tomato Roll", "Mexican Chocolate Cake"],
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
"Brunch": ["Grapefruit Halves", "Pineapple", "Seedless Red Grape", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Raita Sauce", "Watermelon", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Chilaquiles (No Egg)", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Flour Tortilla", "Blueberry Bread", "Egg Ham & Cheese English Muffin Sandwich", "Sweet Potato Hash", "Pinto Beans", "Gaucho Chili", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancakes", "Roasted Cauliflower with Cumin"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Gaucho Chili", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Apple Crisp", "Pesto Bread", "Chicken & Dumplings", "Fresh Green Beans with Garlic", "Pinto Beans", "Roasted Potato Wedges", "Shredded Beef Enchiladas", "Vegetarian Tostada", "Lettuce/Cheese/Tomatoes", "Sauteed Cabbage & Carrots", "Yam & Avocado Sushi Roll", "Salmon Bowl with Brown Rice"],
}
},
],
},
{
"date": "2024-04-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Caesar Salad", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Whole Wheat Pancake (Housemade)", "Chorizo and Eggs", "Black Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Blueberry Muffin", "Banana Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Summer Vegetables", "Vegetable Egg Roll", "Caesar Salad", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Broccoli Spears", "Fresh Cauliflower", "Rice with Cilantro & Onions", "Albondigas Soup", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Ham & Cheese Pizza", "Pesto and Vegetable Pizza on Wheat", "Cheese Pizza on White", "Jalapeno Cornbread", "Toll House Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chickpea Vegetable Soup", "Italian Sub", "Broccoli Florette", "Baked Potato", "Long Grain Rice", "Ham Pizza", "Three Cheese & Olive Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Jicama Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Scone", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Mushroom Barley Soup", "Char Grilled Pork Chop", "Fresh Sauteed Carrots", "Steamed Red Potatoes with Parsley", "Baked Potato", "Turkey Chorizo Quesadilla", "Bean and Cheese Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham Pizza", "Three Cheese & Olive Pizza", "Herb Breadsticks", "Penne with Rosemary Cream Sauce", "Wheat Penne Pasta", "Pesto Sauce", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Rosemary Bread", "French Crumb Apple Pie"],
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
"Brunch": ["Grapefruit Halves", "Cantaloupe", "Honeydew Melon", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Steamed White Rice", "Make Your Own Waffle", "Baby Spinach", "Raita Sauce", "Watermelon", "Bulgur Wheat", "Tomato Basil Pizza on White", "Meat Sauce", "Spaghetti", "Penne Pasta with Pesto", "Flour Tortilla", "Blueberry Scone", "Beef and Bean Tostada", "Vegetable Fajita", "Refried Beans", "Creamy Chipotle Salsa", "Vietnamese Chicken Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Whole Wheat French Toast", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Vietnamese Chicken Soup", "Tomato Basil Pizza on White", "White Wine Garlic and Shrimp Sauce", "Spaghetti", "Penne Pasta with Pesto", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Meatloaf with Beef Gravy", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Roasted Broccoli and Red Onion", "Sauteed Cabbage & Carrots", "Vietnamese Turkey Banh Mi", "Vegetable Fried Rice", "Stir Fry Brocoli Spinach Bok Choy", "Calamari Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-04-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Breakfast Burrito", "Whole Wheat Pancake (Housemade)", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Greek Salad", "Waldorf Salad (w/nuts)", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Chicken Florentine Pizza w/White Sauce", "Olive Mushroom Pizza on White", "Traditional Cheese Pizza on Wheat", "Thai Tom Ka Soup w/Tofu (w/nuts)", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Black Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Potato Roll", "Brownie (w/nuts)", "Cookies 'n Cream Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Greek Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Whole Baby Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Spirals with Marinara Sauce", "Pasta Carbonara", "Long Grain Rice", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Chicken Florentine Pizza w/White Sauce", "Olive Mushroom Pizza on White", "Cheese Pizza on White", "Cracked Wheat Bread", "Pineapple Upside Down Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs Vegetables", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hearty Vegetable Soup", "Shaved Turkey on Wheat", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Chicken and Black Bean Burrito", "Tofu Mole Enchilada", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Tortellini with Creamy Pesto Sauce", "Wheat Penne Pasta", "Tomato Leek Marinara", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Pastrami & Mozzarella", "Krinkle Cut French Fries", "Spinach Salad", "Garlic Roll", "Confetti Cake w/Butter Cream Icing"],
"Dinner": ["Lentil Soup", "Tri Tip Roast", "Roasted Potato Wedges", "Carrots with Tarragon", "Vegetable Turnover", "Baked Potato", "Baked Sweet Potato", "Chicken Entomatadas", "Grilled Vegetable Soft Taco", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Beef & Vegetables Stir Fry w/Brown Rice", "Vegetable Tagine", "Brown Rice", "Long Grain Rice", "Gazpacho Salad", "Whole Wheat Sourdough Bread", "Banana Cream Pie"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Ruby Flame Grapes", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Honeydew Parfait", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Irish Soda Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Banana Wheat Pancakes", "Cottage Fried Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Kale & Quinoa Salad w/Ricotta (w/nuts)", "Panini Pizza", "Sliced Turkey", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Artichoke Pesto Flatbread", "Tomato Basil Pizza on White", "Penne w/Butternut Squash Sauce", "Hawaiian Sweet Bread", "Chocolate Mint Cupcake", "Fluffy Sugar Cookie (w/nuts)", "Chicken Parmigiana Sandwich", "Spicy Marinara Sauce", "Black Beans", "Large Mixed Green Salad", "Hunan Noodles with Spicy Pork Sauce", "Brussel Sprouts Honey Sriracha Glaze", "Calamari Roll", "Cucumber & Avocado Roll", "Grilled Turkey Burger", "Banana Wheat Pancakes", "Grilled Mediterranean Sandwich", "Crinkle Cut French Fries", "Pickled Red Onion", "Housemade Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Vegetarian Taco Pizza on Wheat", "Penne w/Butternut Squash Sauce", "Fresh Tomato Basil Sauce", "Linguini Pasta", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Hawaiian Sweet Bread", "Chocolate Chocolate Chip Bar", "Ground Beef and Bean Tostada", "Bean Rice and Cheese Burrito", "Fire Roasted Tomato Salsa", "Refried Black Beans", "Fresh Cauliflower & Carrots", "Shanghai Noodles & Chix w/Bean Sauce", "Sauteed Vegetables Rice and Beans", "Stir Fried Chinese Greens", "Calamari Roll", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-04-16",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Turkey", "Egg Salad", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Sticky Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Cucumber & Onion Salad", "Yogurt Potato Salad", "Turkey Club Wrap", "Steamed Vegetables & Brown Rice", "Green Bean Almondine (w/nuts)", "Taco Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Classic Miso Soup", "Cheeseburger", "Black Bean Burger", "Quesadilla", "Shoestring Fries", "Refried Beans", "Baked Potato", "Baked Sweet Potato", "Couscous", "Tsoureki (Greek Easter Bread)", "Rice Krispie Treat", "Strawberry Cheese Cupcake"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Grilled Ono with Pesto Butter", "Corn on the Cob", "Sauteed Zucchini with Garlic", "Potatoes Au Gratin", "Penne Pasta", "Garlic & Caper Butter Sauce", "Pasta Primavera", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Taco Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Onion Bread", "Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Pumpkin Muffin (w/nuts)"],
"Lunch": ["White Bean Basque Soup", "Fish Sandwich on Wheat Bun w/Tartar Sauc", "Roasted Cauliflower w/Garlic", "Baked Potato", "Chicken Sope", "Vegetable Hard Shell Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chorizo Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Turkey Burger w/Jack & BBQ Sauce", "Shoestring French Fries", "Israeli Couscous Salad", "Cornbread", "Ginger Cookie"],
"Dinner": ["Curried Chicken Soup", "Buttermilk Fried Chicken", "Fresh Corn on the Cob", "Mashed Red Potatoes", "Chicken Gravy", "Baked Potato", "Ground Beef Soft Taco", "Vegetable Corn Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chorizo Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Spicy Basil Beef", "Chinese Vegetable Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Caesar Salad", "Pesto Bread", "Spice Cake (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Fresh Strawberry", "Pineapple", "Grapefruit Halves", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Black & Blue Parfait (w/nuts)", "Sustainable Baby Spinach", "Cream of Wheat", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Assorted Bagels & Condiments", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat French Toast", "Huevos Rancheros", "Refried Beans", "Brussel Hash"],
"Lunch": ["Vegetarian Taco Salad", "Grilled Cajun Chicken Wrap", "Sliced Genoa Salami", "Sliced Turkey", "Jack Cheese", "Provolone Cheese", "Baked Potato", "Long Grain Rice", "Spicy Black Bean Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Florentine Pizza w/White Sauce", "Tomato Basil Cream Sauce", "Penne Pasta", "Fettucine Alfredo", "Challah Bread", "Granola Bar (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Chili Macaroni", "Shredded Cheddar Cheese", "Black Beans", "Vegetable Wrap", "Ranch Potato Salad", "Lemon Ginger Chicken Stir Fry", "Sticky Rice", "Stir Fried Bok Choy", "Spicy Scallop Sushi Roll", "Daikon Roll", "Grilled BBQ Chicken Sandwich", "Grilled Swiss & Tomato on Wheat", "Whole Wheat French Toast", "Steak Fries", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Spicy Black Bean Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Florentine Pizza w/White Sauce", "Fettucine Alfredo", "Tomato Basil Cream Sauce", "Whole Wheat Penne Pasta", "Mango Cake", "Challah Bread", "Shredded Braised Beef", "Rice Pilaf", "Spinach Quiche", "Black Beans", "Sauteed Cabbage & Carrots", "Chicken Chow Mein", "Bok Choy & Nappa Cabbage w/Sesame", "Orange Infused Green Beans", "Daikon Roll", "Spicy Scallop Sushi Roll"],
}
},
],
},
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
];
export default diningMenu
