const diningMenu = [
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
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
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
"Dinner": ["Corn Chowder", "Roasted Petite Tender", "Vegetable Medley", "Mashed Red Potatoes", "Beef Gravy", "Baked Potato", "Beef Hard Shell Taco", "Black Bean Tostada", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage and Olive Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Kale Caesar Salad", "Crusty French Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
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
"Dinner": ["Baked Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza on White", "Penne Pasta with Pesto", "Linguine with Chicken/Leeks/Tomato", "Confetti Cake with Buttercream", "Italian Cream Cake (w/nuts)", "Cheese Bread", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Chili Bean", "Oven Browned Potatoes", "Steamed Fresh Broccoli", "Zesty Orange Beef", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Bowl", "Linguine with Chicken/Leeks/Tomato", "Vegetable Roll"],
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
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Salami Pizza", "Bolognaise Sauce", "Pasta Spaghetti", "Mushroom Cream Sauce", "Farfalle Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Chile Verde and Corn Tortillas", "Mexican Rice", "Refried Beans", "Cilantro & Onion Mix", "Fresh Sauteed Spinach", "Lettuce & Cheese &Tomatoes", "Pork Vindaloo", "Basmati Rice", "Steamed Broccoli & Cauliflower", "California Club Roll", "Daikon Roll"],
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
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Seedless Red Grape", "Honeydew Melon", "Make Your Own Waffle", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Cream Cheese Strudel", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sweet Potato Gorda with Corn", "Black Beans", "Home Fried Potatos", "Fall Vegetable Medley"],
"Lunch": ["Asian Chicken Salad (w/nuts)", "Chipotle Hummus & Quinoa Wrap", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Penne Pasta with Pesto", "Marinara Sauce with Chicken", "Linguini Pasta", "Herb Focaccia Bread", "Apple Kuchen (w/nuts)", "Oatmeal Raisin Bar (w/nuts)", "Roast Pork", "Classic BBQ Sauce", "Vegetable Chili", "Mid Western Coleslaw", "Roasted Mixed Vegetables", "Latin Bowl with Chicken", "Carrot & Zucchini with Lemon Butter", "Steamed Fresh Broccoli", "Daikon Roll", "Calamari Roll", "Hamburger", "Buttermilk Pancakes", "Spicy Grilled Cheese Sandwich on Wheat(v", "Shoestring Fries", "Red Chimichurri Sauce", "Spicy Mustard Sauce", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Pesto and Vegetable Pizza on Wheat", "Beef Empanadas", "Garden Vegetable Marinara", "Linguini Pasta", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Brownie Pie", "Russian Bread", "Chinese BBQ Pork", "Sticky Rice", "Vegetable Fried Rice", "White Beans", "Braised Bok Choy", "Jerk Chicken", "Long Grain Rice", "Red Beans & Rice", "Sauteed Kale", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-10-15",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Croissant with Scrm Egg/Ham/Cheese", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread Pudding", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Santa Fe Salad", "Ambrosia Salad (w/nuts)", "Chicken Spinach & Mushroom Lasagna", "Fresh Herb Polenta with Marinara", "Green Beans", "Brown Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Egg Drop Soup", "Char Burger", "Grilled Vegetable Burger", "Hot Dog", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Zebra Bar (w/nuts)", "Mandarin Orange Cake", "Pao de Queijo"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Rice", "Ginger Beef Stir Fry", "Stir Fry Vegetables with Tofu", "Broccoli Garlic Soup", "Caesar Salad", "Lemon Baked Salmon", "Black Bean Enchilada", "Spanish Corn", "Steamed Zucchini", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Fettuccine with Chicken, Olives & Garlic", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Pumpkin Cheesecake Pie", "Graham Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chocolate Bread", "Blueberry Scone"],
"Lunch": ["Tomato Rice Soup", "Herb & Garlic Crusted Tilapia", "Fresh Steamed Carrots", "Baked Potato", "Chicken Soft Taco", "Vegetable Enchilada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Chicken", "Pasta Primavera", "Wild Rice Blend", "Long Grain Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheese Tomato Bacon Sandwich", "Krinkle Cut French Fries", "Tomato and Mozzarella Salad", "Whole Wheat Roll", "Mexican Wedding Cookie (w/nuts)"],
"Dinner": ["Potato Leek Soup", "Char Grilled Pork Chop", "Three Bean Pilaf", "Vegetable Medley", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean & Cheese Sope", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Pepperoni Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Beef Teriyaki Stir Fry & Brown Rice", "Vegetable Fried Rice", "Brown Rice", "Long Grain Rice", "Yogurt Potato Salad", "Swirled Herb Bread", "Cream Cheese Strudel"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Grapefruit Halves", "Sliced Pineapple", "Cantaloupe", "Granola Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Whole Wheat Banana Bread", "Strawberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Machaca with Scrambled Eggs", "Whole Wheat Pancake", "Potatoes O'Brien", "Sauteed Zucchini with Garlic"],
"Lunch": ["Farro Salad w/Roasted Mushroom &Parm", "Chicken Caesar Wrap", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Swiss Cheese", "Baked Potato", "Long Grain Rice", "Chickpea Vegetable Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Cuban Sofrito Pizza", "Sweet Potato Chicken Flatbread", "Fettuccine Pasta", "Alburro Sauce", "Jalapeno Cheddar Roll", "Shortbread Espresso Cookie", "Carrot Cupcakes (w/nuts)", "Chicken Gyro", "Walnut Lentil Gyro w/Yogurt (w/nuts)", "Pinto Beans", "Roasted Red Onion &  Zucchini", "Cuban Sandwich", "Seasoned Sweet Potato Halves", "Sauteed Kale", "Tempura Onion Roll", "Spicy Scallop Sushi Roll", "Grilled Turkey Burger", "Black Bean and Vegetable Burrito", "Whole Wheat Pancake", "Steak Fries", "Spicy Mustard Sauce", "Chipotle Aioli", "Red Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chickpea Vegetable Soup", "Roasted Cauliflower w/Garlic", "Pickled Asian Mushroom", "Bulgur Wheat", "Turkey and Swiss Stromboli", "Alburro Sauce", "Fettuccine Pasta", "Grilled Salmon Pasta w/Roma Tomato", "Rhubarb Stacking Cake", "Herb Focaccia Bread", "Shredded Beef Enchiladas", "Cheese Quesadilla", "Pinto Beans", "Sauteed Cabbage & Carrots", "Rice with Cilantro and Lime", "Lettuce/Cheese/Tomatoes", "Indian Chicken Curry (w/nuts)", "Basmati Rice", "Indian Style Stew w/ButternutSquash", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
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
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
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
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Enchiladas Rajas w/Rice Refried Beans", "Spaghetti with Pork Marinara & Cheese", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Grilled Turkey Cheddar Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "Danish Cauliflower Cheese Soup", "House Salad", "Hummus with Celery & Carrots", "Roasted Cauliflower", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Toll House Bar", "Banana Bar", "Red Velvet Crinkle Cookie", "Organic Granny Smith Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
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
];
export default diningMenu
