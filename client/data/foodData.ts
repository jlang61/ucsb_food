const diningMenu = [
{
"date": "2024-10-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Turkey", "Hummus", "Pita Chips", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Greek Salad", "Yogurt Potato Salad", "Turkey Club Wrap", "Mixed Vegetables", "Green Bean Almondine (w/nuts)", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Classic Miso Soup", "Char Burger", "Black Bean Burger", "Chicken Gyro", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Refried Beans", "Couscous", "Tsoureki (Greek Easter Bread)", "Pecan Pie Bar (w/nuts)", "Rice Krispie Treat"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Fresh Corn on the Cob", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Roasted Garlic Onion & Pepper Pizza", "Onion Bread", "Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Potatoes O'Brien", "Waffle", "Multi-Grain Waffle", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Saute", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Coconut Curry Tofu (w/nuts)", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese Sandwich on WW", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Chocolate Chip Scone"],
"Dinner": ["Vegetable Noodle Soup", "Cod Veracruz", "Vegetable Cutlet", "Corn", "Rice Pilaf", "Baked Potato", "Beef Sope", "Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce (w/nut", "Veggie Stir Fry w/Peanut Sauce(w/nuts)(v", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Sourdough Rounds", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Seedless Red Grape", "Watermelon", "Honeydew Melon", "Make Your Own Waffle", "Granola Cantaloupe Parfait (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Organic Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettucine", "Tomato Cream Sauce", "Potato Roll", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie (w/nuts)", "Grilled Chicken Taco", "Thick Chile Salsa", "Cilantro Lime Crema", "Cilantro & Onion Mix", "Refried Beans", "Pork Balchao", "Moroccan Carrot w/Chickpeas & Tomato", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Potato Roll", "New York Style Crumb Cake", "Chicken Tetrazzini", "Pasta Shells w/Eggplant & Marinara", "Carrots with Fresh Thyme", "Steamed Fresh Broccoli", "Pork Loin Roast With Garlic and Ginger", "Teriyaki Sauce", "Vegetable Fried Rice", "Braised Bok Choy", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-10-09",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Smoked Gouda", "Sliced Jack Cheese", "Sticky Rice", "Stir Fry Pork with Vegetables", "Stir Fry Vegetables with Tofu", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Common Thresher Shark w/Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Spicy Navy Bean Soup", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Raisin Bread with Glaze", "Chocolate Caramel Swiss Cupcake", "Baklava (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Lentil & Brown Rice Soup", "Salad Arugula & Sweet Potato (w/nuts)", "Chicken Marsala", "Wild Mushroom Turnover", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Spaghetti Pasta", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable & Jalapeno Pizza on Wheat", "Sourdough Bread", "Cream Cheese Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Pinch Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hot and Sour Soup", "Blackened Hoki", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Ground Beef Soft Taco", "Potato Chorizo Burrito", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard (w/nuts)", "Herb Breadsticks", "Sesame Pork with Broccoli", "Vegetable Lo Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Malibu Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Pasta Salad w/Chicken & Sundried Tomato", "Graham Roll", "Rice Krispie Treat"],
"Dinner": ["Hearty Vegetable Soup", "Meatloaf", "Garlic Mashed Potatoes", "Beef Gravy", "French Cut Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Potato Gorda with Black Beans", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pepperoni Pizza", "Cheese Pizza with Chard (w/nuts)", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Penne Pasta", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Wild Rice Blend", "Caesar Salad", "Onion Bread", "German Apple Cake w/Crm Chse (w/nuts) (v"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Honeydew", "Watermelon", "Grapefruit Halves", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cornbread with Honeybutter", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Chipotle Chicken Wrap", "Tuna Salad", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Moroccan Lentil Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Sweet Potato Chicken Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Cupcakes (w/nuts)", "Sweet & Sour Pork", "Sticky Rice", "Pinto Beans", "Tofu Vegetable Stir Fry", "Steamed Broccoli & Cauliflower", "Cajun Chicken Stir Fry", "Long Grain Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Plate", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Moroccan Lentil Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Antipasto Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Creamy Rosemary Sauce", "Penne Pasta", "Marble Cake", "Thick Focaccia Bread", "Shredded Braised Beef", "Roasted Potato Wedges", "Pinto Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Tempura Tilapia Fish", "Sticky Rice", "Teriyaki Sauce", "Sesame Asian Slaw Salad", "Steamed Broccoli & Cauliflower", "Spicy Tuna Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-10-10",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Pancake", "Eggs Turkey Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cherry Chocolate Scone", "Cinnamon Roll"],
"Lunch": ["Sliced Ham", "Hummus", "Pita Chips", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Honey Baked Halal Chicken Quarters", "Roasted Cauliflower", "Steamed Fresh Carrots", "Spinach Quiche", "Roasted  Red Potato Wedges", "Taco Salad", "Jicama Pico De Gallo", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Homestyle Pozole w/Condiments", "Grass Fed Burger", "Gardenburger", "Grilled Cheese on Sourdough", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Olive Whole Wheat Bread", "Banana Chocolate Bar", "Classic French Napoleon"],
"Dinner": ["Nicoise Pasta Salad", "Greek Eggplant Salad", "Brown Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Vegetables with Tofu", "Greens and Beans Soup", "Jerk Lamb Steaks", "Scalloped Potatoes", "Steamed Whole Baby Carrots", "Swiss Chard with Fresh Garlic", "Jicama Pico De Gallo", "Penne with Chicken and Mushrooms", "Angel Hair Pasta", "Tomato Basil & Garlic Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Sour Cream & Chives Roll", "Chocolate Flourless Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["Tomato Rice Soup", "Roasted Pork Loin Sandwich w/Gouda", "Vegetable Medley", "Baked Potato", "Chicken Mole Taco", "Chipotle Bean Flauta", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Kung Pao Chicken with Peanuts (w/nuts)", "Tofu Stir Fry w/Black Bean Sauce/B. Rice", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Chicken Corn Dog", "Shoestring French Fries", "Tabouli Salad", "Olive Roll", "Yellow Cupcake with Buttercream"],
"Dinner": ["Curried Chicken Soup", "Grilled Chicken Quarters", "Orzo Pasta with Vegetables", "Zucchini and Crookneck Squash", "Baked Potato", "Chicken & Bean Chimichanga", "Calabacitas Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Hawaiian Pizza", "Mushroom Pizza on Wheat Crust", "Herb Breadsticks", "Beef Chop Suey", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Cornbread", "Fresh Orange Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Quinoa Breakfast Bowl (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Cabbage & Carrots"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing (v", "Hummus & Avocado Lettuce Wrap", "Sliced Provolone Cheese", "Jack Cheese", "Tuna Salad", "Sliced Turkey Pastrami", "Baked Sweet Potato", "Basmati Rice", "Miso Broth with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Grilled BBQ Chicken Pizza", "Tomato Basil & Garlic Sauce", "Spaghetti", "Pumpkin Seed Pesto", "Penne Pasta", "Three Grain Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Shredded Braised Beef", "Long Grain Rice", "Cuban Style Black Beans & Rice", "Roasted Cauliflower with Cumin", "Chicken Tikka Masala", "Basmati Rice", "Roasted Red Onion &  Zucchini", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Grilled Cheese Chile & Veggie on Sour(v", "Chipotle Aioli", "Sweet &Tangy Pickled Red Onion", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Smoked Barbeque Chicken Pizza", "Alburro Sauce", "Pasta Spaghetti", "Pumpkin Seed Pesto", "Penne Pasta", "Sticky Toffee Pudding (w/nuts)", "Three Grain Bread", "Meatloaf", "Classic BBQ Sauce", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Mushroom Rajas & Corn", "Fresh Spinach with Garlic", "Burmese Chicken Stew w/Coconut (w/nuts)", "Latin Bowl", "Sticky Rice", "Roasted Cauliflower with Cumin", "California Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-10-11",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Buttermilk Pancake", "Denver Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Dried Cranberry Coconut Scone(w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Black Beans", "Mexican Rice", "Beef Milanesa", "Beef Gravy", "Sauteed Summer Squash with Herbs", "Steamed Vegetables & Brown Rice", "Mashed Potatoes", "Arugula Olio e Limone Salad", "Poached Pear Salad (w/nuts)", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "New England Clam Chowder", "Charburger", "Gardenburger", "Chicken Taquito", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Green Tea Soy Pudding", "Whole Wheat Cheese Onion Roll", "Kahlua Espresso Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Cilantro Lime Salmon", "Vegetable Pad Thai (w/nuts)", "Carrots with Fresh Thyme", "Fresh Green Beans", "Spinach Salad Pecan Bacon & Cranb(w/nut)", "Rigatoni Pasta", "Chicken Sausage & Mushroom Sauce", "Fettucine Alfredo", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Buffalo Chicken Pizza", "Cheese Pizza on White", "Garlic Pizza on Wheat", "Garlic Roll", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Whole Wheat Banana Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Fish Cake", "Lemon Beurre Blanc", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Bean & Rice Burrito", "Potato Vegetable Soft Taco", "Rice with Corn & Roasted Chiles", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Pork Stir Fry with Orange Sauce", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Swiss on Whole Wheat", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Sundried Tomato Roll", "M & M Bar (w/nuts)"],
"Dinner": ["Vegetable Rice Soup", "Char Grilled Pork Chop", "Herb Polenta with Mushroom Ragout", "Bok Choy with Garlic & Ginger", "Oven Browned Potatoes", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Vegetable Fajita", "Rice with Corn & Roasted Chiles", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Salami Pizza", "Cheese Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Green Bean Provencal Salad", "Garlic Roll", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Pineapple", "Cantaloupe", "Honeydew Melon", "Make Your Own Waffle", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Italian Tomato Panini", "Sliced Turkey", "Sliced Ham", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Potato", "Beef and Barley Soup", "Wild Rice", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Broccolini & Salami Stromboli", "Baked Rigatoni", "Alburro Sauce", "Pasta Spaghetti", "Whole Wheat French Bread", "Shortbread Cookie", "Cream Cheese Brownie Pie", "Grilled Achiote Chicken Thigh", "Papaya Cilantro Lime Salsa", "Pinto Beans", "Vegetable Black Bean Chili", "Sauteed Kale & Collard Greens", "General Tso's Chicken", "Sticky Rice", "Fresh Vegetable Medley", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Patty Melt Sandwich", "Malibu Burger", "Whole Wheat Pancake", "Crinkle Cut French Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Beef and Barley Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Broccolini & Salami Stromboli", "Penne Pasta with Pesto", "Fettuccine Alfredo", "Banana Nut Cake (w/nuts)", "Whole Wheat French Bread", "Pork Loin Roast w/Balsamic Glaze", "Roasted Potato Wedges", "Pinto Beans", "Baked Rigatoni", "Steamed Broccoli & Cauliflower", "Grilled Chicken Taco", "Enchilada Rajas", "Spanish Rice with Cilantro", "Lettuce/Cheese/Tomatoes", "Refried Black Beans", "Spicy Shrimp Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-10-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Caesar Salad", "Cream of Broccoli Soup", "Mixed Vegetables", "Grilled Pork Chops", "Country Gravy", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Blueberry Pancake", "Chicken Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Brunch Coffee Cake", "Banana Choc Chip Muffin"],
"Dinner": ["Sticky Rice", "General Tso's Chicken", "Chinese Style Tofu & Vegetables", "Split Pea Soup", "Caesar Salad", "Roast Beef", "Beef Gravy", "Fresh Cauliflower", "Sauteed Zucchini Sticks", "Ratatouille with White Beans", "Oven Browned Potatoes", "Rotini Pasta", "Chicken Marinara Sauce", "Whole Wheat Spaghetti", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Artichoke Pizza with Pesto on Wheat", "Rosemary Roll", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Soup Potato Cheese & Chile", "Turkey Sub Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Vegetable Frittata", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Greek Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Chocolate Chip Muffin"],
"Dinner": ["Corn Chowder", "Roasted Petite Tender", "Vegetable Medley", "Mashed Red Potatoes", "Beef Gravy", "Baked Potato", "Turkey Hard Taco", "Black Bean Tostada", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Kale Caesar Salad", "Crusty French Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
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
"Brunch": ["Fresh Strawberry", "Pineapple", "Sliced Honeydew", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Brown Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Daikon Radish", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Linguine with Chicken/Leeks/Tomato", "Penne Pasta with Pesto", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Pinto Beans", "Black Bean & Rice Quesadilla", "Roasted Cauliflower with Cumin", "Cream of Broccoli Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Steamed Zucchini & Crookneck Squash"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Penne Pasta with Pesto", "Linguine with Chicken/Leeks/Tomato", "Italian Cream Cake (w/nuts)", "Cheese Bread", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Chili Bean", "Oven Browned Potatoes", "Steamed Fresh Broccoli", "Zesty Orange Beef", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Bowl", "Linguine with Chicken/Leeks/Tomato", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-10-13",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Vegetable Soup", "Chicken Vindaloo", "Basmati Rice", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Grits", "Cage Free Egg Scrambled w/Cheese/Mush", "French Toast", "Grilled Ham with Honey Glaze", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Beans Navy White", "Make Your Own Waffle", "Cinnamon Coffee Cake", "Chocolate Pistachio Biscotti (w/nuts)"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Stir Fry Noodles with Vegetables", "Tomato Rice Soup", "Caesar Salad", "Chicken Pot Pie", "Baby Carrots with Tarragon", "Corn", "Risotto with Fresh Vegetables", "Linguini Pasta", "White Clam Sauce", "Penne Pasta", "Arabiata Sauce (w/nuts)", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Wild and Long Grain Rice Blend", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Roll", "Banana Macadamia Nut Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Gumbo Soup", "Chicken Caesar Wrap", "Fresh Sauteed Carrots", "Baked Potato", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Apple Cinnamon Pancake", "Chicken Sausage Patty", "Sliced Potato with Onions", "Multi-Grain Waffle", "Waffle", "Yogurt Potato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Chocolate Bread"],
"Dinner": ["Spinach Lentil Soup", "Baked Chicken", "Corn", "Roasted Potatoes w/Carrot and Onion", "Baked Potato", "Chicken Soft Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham Pizza", "Mushroom & Black Olive Pizza", "Herb Breadsticks", "Spaghetti Pasta", "Turkey Marinara", "Scallion Cream Sauce", "Bowtie Pasta", "Long Grain Rice", "Wild Rice Blend", "Three Bean Salad", "Whole Wheat Bread", "French Peach Crumb Pie (w/nuts)"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Baby Spinach", "Daikon Radish", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Honey Butter", "Cornmeal Waffle", "Flour Tortilla", "Raspberry Swirl Coffee Cake (w/nuts)(vgn", "Char Grilled ChickenTeriyaki Sandwich", "Pinto Beans", "Grilled Cheese on Sourdough", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs w/Vegetables", "Buttermilk Pancakes", "Sauteed Zucchini with Garlic", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Mushroom Cream Sauce", "Farfalle Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Chile Verde and Corn Tortillas", "Mexican Rice", "Refried Beans", "Cilantro & Onion Mix", "Fresh Sauteed Spinach", "Lettuce/Cheese/Tomatoes", "Pork Vindaloo", "Basmati Rice", "Steamed Broccoli & Cauliflower", "California Club Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-10-14",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Pancake", "Chilaquiles (No Egg)", "Sausage Patty", "Home Fried Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Ginger with Cardamom Scone"],
"Lunch": ["Sliced Turkey", "Sliced Genoa Salami", "Sliced Jack Cheese", "Sliced Smoked Gouda", "Brown Rice", "Chicken Stir Fry with Green Beans", "Spicy Tofu w/Vegetables & Noodles", "Bermuda Salad", "Japanese Noodle Salad", "Tri Tip", "Red Salsa", "Chili Black Bean", "Fresh Cauliflower", "Fresh Broccoli Spears", "Salami Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Beet Soup", "Charburger", "Black Bean Burger", "Fish Sandwich on Brioche Bun", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Irish Soda Bread", "Oatmeal Raisin Cookie", "Peanut Butter Fudge Cupcake (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Classic Miso Soup", "Spicy Kale Caesar Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Fettucine Alfredo", "Whole Wheat Penne Pasta", "Tomato and Leek Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Whole Wheat Bread", "Boston Cream Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pasilla Chile Scramble Eggs", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil Soup", "Turkey Wrap", "Cauliflower & Red Bell Pepper", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Vegetable Corn Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Cashew Tofu Stir Fry w/Rice(w/nuts)", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Malibu Burger", "Grilled Mozzarella & Basil on Sour", "Shoestring French Fries", "Lemon Herb Quinoa Salad", "Rosemary Roll", "Lemon Jello Cake"],
"Dinner": ["Bean & Barley Soup", "Catfish w/Red Curry Sauce & Rice(w/nuts)", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Bean & Cheese Entomatadas", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Sausage Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Chicken with Black Bean Sauce", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Arugula Salad with Almond (w/nuts)", "Sesame Bread", "Banana Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Seedless Red Grape", "Honeydew Melon", "Make Your Own Waffle", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Cream Cheese Strudel", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sweet Potato Gorda with Corn", "Black Beans", "Home Fried Potatos", "Fall Vegetable Medley"],
"Lunch": ["Asian Chicken Salad (w/nuts)", "Chipotle Hummus & Quinoa Wrap", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Penne Pasta with Pesto", "Chicken Marinara Sauce", "Linguini Pasta", "Herb Focaccia Bread", "Apple Kuchen (w/nuts)", "Oatmeal Raisin Bar (w/nuts)", "Roast Pork", "Classic BBQ Sauce", "Vegetable Chili", "Mid Western Coleslaw", "Roasted Mixed Vegetables", "Latin Bowl with Chicken", "Carrot & Zucchini with Lemon Butter", "Steamed Fresh Broccoli", "Daikon Roll", "Calamari Roll", "Char Burger", "Buttermilk Pancakes", "Spicy Grilled Cheese Sandwich on Wheat(v", "Shoestring Fries", "Red Chimichurri Sauce", "Spicy Mustard Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Pesto and Vegetable Pizza on Wheat", "Beef Empanadas", "Garden Vegetable Marinara", "Linguini Pasta", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Brownie Pie", "Russian Bread", "Chinese BBQ Pork", "Sticky Rice", "Vegetable Fried Rice", "White Beans", "Braised Bok Choy", "Jerk Chicken", "Long Grain Rice", "Red Beans & Rice", "Sauteed Kale", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
