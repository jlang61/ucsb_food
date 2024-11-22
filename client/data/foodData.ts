const diningMenu = [
{
"date": "2024-11-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Tahini Sauce", "Cucumber Tzatziki", "Chamorro BBQ Chicken", "Long Grain Rice", "Roasted Root Vegetables", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Broccoli Slaw Salad", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Roast Pork Loin", "Apricot Chutney", "Broccoli Stuffed Tomato", "Peas with Onions", "Mashed Potatoes", "Broccoli Slaw Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Onion Roll", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Swiss Chard & Herb Tart", "Fresh Spinach with Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Mushroom Pizza", "Mexican Pizza", "Herb Breadsticks", "Kung Pao Beef & Peanuts (w/nuts)", "Kung Pao Tofu & Peanuts (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Pasta Salad with Spinach & Feta", "Cracked Wheat Roll", "Jelly Bar Spritz"],
"Dinner": ["Vegetable Soup", "Honey Baked Chicken", "Garlic Mushroom Turnover", "Fresh Carrots with Thyme", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Sope", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Chicken Mushroom Pizza", "Mexican Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Wild Rice Blend", "Coleslaw with Vinaigrette", "Rosemary Bread", "Tres Leches Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Cantalope", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Chocolate Chip Coffee Chip", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Roasted Vegetable Panini", "Baked Sweet Potato", "Wild Rice Blend", "Chicken Kale & Brown Rice Soup", "Watermelon", "Waffle", "Apple Cranberry Pancake Topping", "Bolognaise Sauce", "Cellentani Pasta", "Cheese Bread", "Carrot Walnut Cupcakes (w/nuts)", "Shrimp & Grits w/Fennel & Sausage", "Red Beans and Rice", "Roasted Potato Wedges", "Grilled BBQ Chicken Sandwich", "Pinto Beans", "Fresh Sauteed Spinach", "Char Burger", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Classic BBQ Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Chicken Kale & Brown Rice Soup", "Watermelon", "Bolognaise Sauce", "Penne Pasta", "Roasted Vegetable Marinara Sauce", "Cellentani Pasta", "Herb Focaccia Bread", "Walnut Orange Cake (w/nuts)", "Turkey Meatloaf with Chipotle Glaze", "Garlic Roasted Red Potatoes", "Pinto Beans", "Steamed Fresh Broccoli", "Chicken Adobo", "Long Grain Rice", "Miso Broth Soup with Spinach", "Spinach with Fresh Garlic & Ginger"],
}
},
],
},
{
"date": "2024-11-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Pesto Zucchini Soup", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Pinto Beans", "Make Your Own Waffle", "Banana Nut Bread (w/nuts)", "Lemon Scone"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Caesar Salad", "Cilantro Lime Salmon", "Carrots with Fresh Thyme", "Green Beans", "Rice Pilaf with Mushrooms", "Pasta Carbonara", "Rotini Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Mushroom Pizza on Wheat", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Bean & Barley Soup", "Grilled Turkey & Provolone on Sourdough", "Mixed Vegetables", "Baked Potato", "Tomato Pesto Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Patty", "Diced Potatoes with Onions", "Multi-Grain Waffle", "Waffle", "Carrot & Raisin Salad", "Sliced Cantalope", "Grapefruit Halves", "Sliced Honeydew", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Beef Noodle Soup", "Tri Tip Roast", "Carrots & Broccoli", "Potato Lyonnaise", "Baked Potato", "Beef Chili Colorado Burrito", "Potato Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Tomato Pesto Pizza", "Pineapple Pizza on Wheat", "Herb Breadsticks", "Sweet & Sour Pork Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Wheat Germ Roll", "Banana Walnut Cake (w/nuts)"],
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
"Brunch": ["Pineapple", "Seedless Red Grape", "Cantalope", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Sausage Mushroom Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Flour Tortilla", "Whole Wheat Banana Bread", "Black Bean Chilaquiles", "Fried Eggs", "Roasted Yam w/Rosemary & Chile", "Chicken Noodle Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "Vegetarian Rigatoni", "BBQ Chicken Thigh", "Baby Red Oven Roasted Potatoes", "Tangy Apple Cabbage Slaw", "Chili Bean", "Fresh Sauteed Spinach", "Coconut Beef Curry Potatoes&Rice(w/nuts)", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Vegetable Roll", "Calamari Sushi Plate"],
}
},
],
},
{
"date": "2024-11-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "White Navy Beans", "Make Your Own Waffle", "Double Chocolate Bread", "Maple Pecan Scone (w/nuts)"],
"Dinner": ["Sticky Rice", "Mongolian Beef", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Caesar Salad", "Turkey Meatloaf", "Stir Fry Vegetables", "Peas", "Potato Garlic Mashed", "Spaghetti Soup", "Gnocchi Mushroom Corn & Sage Butter", "Baked Rigatoni", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Tomato Pesto Pizza on Wheat", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Cream of Tomato Soup", "Philly Cheese Steak Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Chorizo Pizza", "Cheese Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Brazilian Black Bean Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Cinnamon Bread"],
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
"Brunch": ["Pineapple", "Cantaloupe", "Fresh Strawberry", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Baked Pesto Pasta w/Chicken", "Tomato and Roasted Garlic Sauce", "Spaghetti", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Bacon Egg & Sweet Potato Hash", "Grilled Cheese on Sourdough", "Pinto Beans", "Kale with Fresh Garlic", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Penne Pasta", "Vegetarian Rigatoni", "Cream Cheese Pie", "Whole Wheat French Bread", "Pollo a la Brasa with Aji Verde Sauce", "Creole Beans and Rice", "Roasted Potato Wedges", "Roasted Broccoli", "Pork Char Siu", "Long Grain Rice", "Thai Vegetable & Peanut Noodle(w/nut)", "Steamed Broccoli & Cauliflower", "California Club Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2024-11-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Pepper Jack Cheese", "Orange Hoki Fish", "Asian Vegetable Stir Fry", "Sticky Rice", "Italian Tossed Greens", "Tomato And Mozzarella Salad", "Penne Arrabiata with Chicken (w/nuts)", "Green Beans", "Steamed Fresh Carrots", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Potato Cheese Soup", "Gardenburger", "Corn Quesadilla", "Grilled Turkey Burger", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Pearl Barley", "Garlic French Bread", "Toll House Bar", "Magic Walnut Cookie Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Garlic Red Mashed Potato", "Turkey Breast", "Turkey Gravy", "Herb Stuffing", "Peas", "Stir Fry Vegetables", "Walnut Kale Salad w/Cranberry(w/nut)(vgn", "Mushroom Stroganoff", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Oatmeal Bread", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Blueberry Scone", "Bran Muffin"],
"Lunch": ["Miso Soup", "Reuben Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Black Bean Burger", "Grilled Swiss on Sourdough", "Shoestring French Fries", "Japanese Noodle Salad", "Potato Roll", "Lemon Bar"],
"Dinner": ["Vegetable Barley Soup", "Teriyaki Chicken", "Bok Choy with Garlic & Ginger", "Pineapple Rice", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Black Bean & Rice Tostada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Vegetables", "Wheat Penne Pasta", "Tomato Leek Marinara", "Brown Rice", "Long Grain Rice", "Marinated Green Beans Salad", "Cheese Bread", "Pie Apple"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Red Velvet Crinkle Cookie", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Red Velvet Crinkle Cookie", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Seedless Red Grape", "Honeydew Melon", "Make Your Own Waffle", "Granola Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Bread", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Bacon", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spring Mix Salad w/Feta & Craisins", "Greek Chicken Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Sausage Mushroom Pizza", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Wheat Germ Bread", "Oatmeal Raisin Quinoa Cookie", "Spice & Walnut Cake (w/nuts)", "Char Grilled Cajun Chicken Sandwich", "Ranch Potato Salad", "Black Beans", "Bleu Cheese Dressing", "Celery Stick", "Pork Balchao", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Vegetable Roll", "Smoked Turkey Club Sandwich", "Grilled Swiss & Tomato on WW", "Banana Pancakes", "Shoestring Fries", "Housemade Ketchup", "Chipotle Aioli", "Roasted Tomato Salsa"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Canadian Bacon and Pineapple Pizza", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Strawberry Shortcake", "Crusty French Bread", "Pueblo Pork Roast", "Papaya Cilantro Lime Salsa", "Red Potatoes with Rosemary", "Black Beans", "Mushroom Ragout over Polenta", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Brown Rice Calamari Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-11-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancake", "Canadian Bacon", "Roasted Red Breakfast Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Roast Beef", "Tuna Salad", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Brown Rice", "Ambrosia Salad (w/nuts)", "Pasta Salad with Grilled Veggies", "Vietnamese Pork Banh Mi", "Chili and Noodles", "Fresh Corn on the Cob", "Fresh Spinach with Garlic", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Chicken Rice Soup", "Grilled Chicken Taco", "Grilled Vegetable Burger", "Char Burger", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Whole Wheat Sourdough Bread", "Mexican Wedding Cookie (w/nuts)", "Brownie w/Chocolate Icing"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Sticky Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Caesar Salad", "Chicken Piccata", "Steamed Crookneck Squash", "Sauteed Zucchini with Garlic", "Rice Pilaf with Mushrooms", "Linguini Pasta", "Bolognaise Sauce", "Pasta Pronto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Muffin", "Brown Molasses Bread"],
"Lunch": ["Roasted Butternut Squash Soup", "Chicken Broccoli Bake", "Steamed Zucchini", "Baked Potato", "Beef Hard Shell Taco", "Bean & Cheese Sope", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Four Cheese Pesto Pizza on Wheat", "Herb Breadsticks", "Fettuccine w/Chicken/Olives & Garlic", "Cellentani with Vegetable Marinara", "Wild Rice Blend", "Long Grain Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Cheese on Sourdough", "Krinkle Cut French Fries", "Strawberry Radicchio Salad (w/nuts)", "Cracked Wheat Bread", "Oatmeal Chocolate Chip Cookie"],
"Dinner": ["Vegetable Soup", "Roast Beef", "Fresh Broccoli Spears", "Garlic Mashed Potatoes", "Steamed Vegetables & Rice", "Baked Potato", "Pork Chile Verde Burrito", "Chipotle Bean Flauta", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Four Cheese Pesto Pizza on Wheat", "Herb Breadsticks", "Beef Ginger Stir Fry with Brown Rice", "Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Southwestern Chopped Salad", "Jalapeno Cornbread", "Mexican Chocolate Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Red Velvet Crinkle Cookie", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Red Velvet Crinkle Cookie", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Grapefruit Halves", "Cantaloupe", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Baked Oatmeal with Apple & Cinnamon", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Sourdough French Toast", "Huevos Rancheros", "Fall Vegetable Hash"],
"Lunch": ["Vegetarian Taco Salad", "Chicken Chipotle Wrap", "Sliced Ham", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Three Cheese Flatbread", "Greek Pasta w/Feta/Tom &Spinach", "Fettuccine Alfredo", "Oatmeal Bread", "Granola Bar (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Mojo Roasted Chicken (Pollo Asado)", "Red Chimichurri Sauce", "Cheese Quesadilla with Chiles", "Ranchero Beans", "Steamed Fresh Broccoli", "Ginger Pepper Steak", "Brown Rice", "Stir Fried Bok Choy", "Spicy Scallop Sushi Roll", "Tempura Onion Roll", "Cheeseburger", "Grilled Cheddar On Wheat", "Sourdough French Toast", "Steak Fries", "Chipotle Aioli", "Roasted Tomato Salsa", "Housemade Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Garlic Pizza on Wheat", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Tomato and Roasted Garlic Sauce", "Brownie Pie", "Oatmeal Bread", "Grilled Chicken Taco", "Cheese Quesadilla", "Fire Roasted Tomato Salsa", "Roasted Broccoli and Red Onion", "Black Beans", "Cilantro & Onion Mix", "Thai Chicken Bowl (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-11-27",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Chicken Sausage Sandwich", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread", "Cranberry Almond Biscotti (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Noodles with Vegetables", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Asian Fish Taco", "Cactus Taco", "Corn with Red Peppers", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Lentil Soup", "Chili Dog", "Black Bean Burger", "Grilled Cheese Chile & Veggie on Sour(v", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Ginger Basmati Rice", "Focaccia Bread", "Sweet Rice Cake (w/nuts)", "Lemon Bar"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Breakfast Quesadilla", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Pumpkin Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Gumbo Soup", "Open Face Grilled Eggplant Sandwich", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Chorizo Burrito", "Bean & Cheese Entomatadas", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage and Mushroom Pizza", "Thai Pizza (w/nuts)", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Grilled Cheese on Wheat", "Steak Fries", "Lemon Herb Quinoa Salad", "Herb Biscuit", "Banana Chocolate Chip Bar"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans with Garlic", "Zucchini with Garlic", "Fries", "Potato Chip", "Cream Cheese Brownie", "Red Velvet Crinkle Cookie", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Cantaloupe", "Watermelon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Orange Scone", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blintz with Strawberry", "Grilled Ham", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Focaccia with Vegetables & Pesto", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Caldo de Marisco (gf)", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Sausage Marinara Sauce", "Farfalle Pasta", "Herb Focaccia Bread", "Apple Cider Donut Cake", "Dark Chocolate Chip Mint Cookie", "Baked Hawaiian Ham & Turkey Sandwich", "Black Beans", "Spinach Stir Fried with Garlic", "Carrot & Zucchini with Lemon Sauce", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Stir Fried Bok Choy", "Cucumber & Avocado Roll", "Spicy Tuna Roll", "Grilled BBQ Chicken Sandwich", "Bean and Cheese Burrito", "Strawberry Blintz", "Shoestring Fries", "Chipotle Aioli", "Classic BBQ Sauce", "Spicy Mustard Sauce"],
}
},
],
},
{
"date": "2024-11-28",
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
