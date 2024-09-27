const diningMenu = [
{
"date": "2024-09-27",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Tahini Sauce", "Cucumber Tzatziki", "Chamorro BBQ Chicken", "Long Grain Rice", "Roasted Root Vegetables", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Spicy Kale Caesar Salad", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Coney Hot Dog", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Roast Pork Loin", "Apricot Chutney", "Broccoli Stuffed Tomato", "Peas with Onions", "Mashed Potatoes", "Spicy Kale Caesar Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Onion Roll", "Marble Cake with Chocolate Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Cinnamon Roll"],
"Lunch": ["New England Clam Chowder", "Spinach Quiche", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Mexican Pizza", "Herb Breadsticks", "Kung Pao Beef & Peanuts (w/nuts)", "Kung Pao Tofu & Peanuts (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Pasta Salad with Spinach & Feta", "Cracked Wheat Roll", "Jelly Bar Spritz"],
"Dinner": ["Vegetable Soup", "Honey Baked Chicken", "Spinach & Feta Turnover", "Carrots & Broccoli", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Sope", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Taco Pizza", "Mexican Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Wild Rice Blend", "Coleslaw with Vinaigrette", "Rosemary Bread", "Tres Leches Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Banana", "Organic Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Cantalope", "Honeydew Melon", "Watermelon", "Make Your Own Waffle", "Granola Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Bran Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Pineapple Ham Fried Rice", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Roasted Vegetable Panini", "Rainbow Peanut Noodles w/Chicken(w/nuts)", "Sliced Turkey", "Sliced Turkey Pastrami", "Cheddar Cheese", "Swiss Cheese", "Baked Sweet Potato", "Wild Rice Blend", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Cellentaini Pasta", "Roasted Vegetable Marinara Sauce", "Ciabatta Roll", "Almond Biscotti (w/nuts)", "Lemon Pie", "BBQ Chicken Sandwich", "Fresh Tomato Quiche", "Pinto Beans", "Sauteed Kale & Collard Greens", "Street Style Fish Taco", "Pico De Gallo", "Refried Beans", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Fire Roasted Tomato Salsa", "Housemade Spicy Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Roasted Vegetable Marinara Sauce", "Cellentaini Pasta", "Onion Walnut Bread (w/nuts)", "Blueberry Lemon Cake", "Turkey Meatloaf with Chipotle Glaze", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Steamed Broccoli & Cauliflower", "Korean Chicken Bulgogi", "Sticky Rice", "Kimchi", "Bok Choy & Nappa Cabbage w/Sesame", "Spicy Shrimp Bowl with Brown Rice", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-09-28",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Swiss Cheese", "Cheddar Cheese", "Caesar Salad", "Pesto Zucchini Soup", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Pinto Beans", "Make Your Own Waffle", "Banana Nut Bread (w/nuts)", "Lemon Scone"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Caesar Salad", "Cilantro Lime Salmon", "Carrots with Fresh Thyme", "Green Beans", "Rice Pilaf with Mushrooms", "Pasta Carbonara", "Rotini Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Mushroom Pizza on Wheat", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Bean & Barley Soup", "Grilled Turkey & Jack on Sourdough", "Mixed Vegetables", "Baked Potato", "Tomato Pesto Pizza on Wheat Crust", "Pineapple Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Tossed Italian Greens", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Beef Noodle Soup", "Roast Beef", "Sauteed Spinach w/ Onion & Garlic", "Potato Lyonnaise", "Baked Potato", "Chili Colorado Beef", "Potato Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Tomato Pesto Pizza on Wheat Crust", "Pineapple Pizza", "Herb Breadsticks", "Sweet & Sour Pork Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Spinach Salad", "Wheat Germ Roll", "Banana Walnut Cake (w/nuts)"],
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
"Brunch": ["Pineapple", "Seedless Red Grape", "Cantalope", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Sausage and Mushroom Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Flour Tortilla", "Whole Wheat Banana Bread", "Black Bean Chilaquiles", "Fried Eggs", "Roasted Yam w/Rosemary & Chile", "Chicken Noodle Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "BBQ Chicken Thigh", "Macaroni & Cheese", "Tangy Apple Cabbage Slaw", "Chili Bean", "Fresh Sauteed Spinach", "Asian Beef Bowl", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-09-29",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Cheddar Cheese", "Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Beans Navy White", "Make Your Own Waffle", "Double Chocolate Bread", "Coconut Raisin Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Mongolian Beef", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Caesar Salad", "Turkey Meatloaf", "Stir Fry Vegetables", "Peas", "Potato Garlic Mashed", "Gnocchi Mushroom Corn & Sage Butter", "Baked Rigatoni", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Tomato Pesto Pizza on Wheat", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Cream of Tomato Soup", "Philly Cheese Steak Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Chorizo Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Brazilian Black Bean Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Strawberry Bread"],
"Dinner": ["Split Pea Soup", "Char Grilled Pork Chop", "Fresh Vegetables Saute with Garlic", "Oven Browned Potatoes", "Baked Potato", "Chicken Tostada", "Potato Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomatillo Salsa", "Chorizo Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne Mostacioli", "Meat Sauce", "Whole Grain Rotini", "Garden Vegetable Marinara Sauce", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Herb Roll", "Peach Cobbler"],
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
"Brunch": ["Pineapple", "Cantaloupe", "Fresh Strawberry", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Baked Rigatoni", "Fresh Basil Pesto", "Penne Pasta", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Bacon Egg & Sweet Potato Hash", "Grilled Cheese on Sourdough", "Pinto Beans", "Kale with Fresh Garlic", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Mexican Scrambled Eggs", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Penne Pasta", "Rigatoni Mozzerella", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Cream Cheese Pie", "Whole Wheat French Bread", "Pollo a la Brasa with Aji Verde Sauce", "Creole Beans And Rice", "Roasted Potato Wedges", "Roasted Broccoli", "Pork Balchao", "Basmati Rice", "Thai Vegetable & Peanut Noodle(w/nut)", "Steamed Broccoli & Cauliflower", "California Club Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-09-30",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Provolone Cheese", "Sliced Pepper Jack Cheese", "Orange Hoki Fish", "Asian Vegetable Stir Fry", "Sticky Rice", "Italian Tossed Greens", "Tomato And Mozzarella Salad", "Penne Arrabiata with Chicken (w/nuts)", "Green Beans", "Steamed Fresh Carrots", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Potato Cheese Soup", "Gardenburger", "Corn Quesadilla", "Grilled Turkey Burger", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Pearl Barley", "Garlic French Bread", "Toll House Bar", "Karidopita (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Walnut Kale Salad w/Cranberry(w/nut)(vgn", "Fish & Chips w/Tartar Sauce", "Corn", "Stir Fry Vegetables", "Mushroom Stroganoff", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Scone", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Miso Soup", "Reuben Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Black Bean Burger", "Grilled Swiss on Sourdough", "Shoestring French Fries", "Italian Vegetable Spinach Salad", "Potato Roll", "Lemon Bar"],
"Dinner": ["Vegetable Barley Soup", "Teriyaki Chicken", "Bok Choy with Garlic & Ginger", "Pineapple Rice", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Black Bean & Rice Tostada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Vegetables", "Wheat Penne Pasta", "Tomato Leek Marinara", "Brown Rice", "Long Grain Rice", "Marinated Green Beans Salad", "Cheese Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Snickerdoodle Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Chocolate Chunk Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Pineapple", "Grapefruit Halves", "Make Your Own Waffle", "Granola Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Bread", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Bacon", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spring Mix Salad w/Feta & Craisins", "Greek Chicken Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Swiss Cheese", "Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Sausage Mushroom Pizza", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Wheat Germ Bread", "Oatmeal Raisin Quinoa Cookie", "Cherry Pie (w/nuts)", "Char Grilled Cajun Chicken Sandwich", "Ranch Potato Salad", "Black Beans", "Bleu Cheese Dressing", "Celery Stick", "Pork Balchao", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Vegetable Roll", "Turkey Melt", "Grilled Swiss & Tomato on WW", "Banana Pancakes", "Shoestring Fries", "Housemade Ketchup", "Chipotle Aioli", "Roasted Tomato Salsa"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Canadian Bacon and Pineapple Pizza", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti Pasta", "Strawberry Shortcake", "Russian Bread", "Pueblo Pork Roast", "Red Potatoes with Rosemary", "Black Beans", "Mushroom Ragout over Polenta", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Calamari Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-10-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancake", "Canadian Bacon", "Roasted Red Breakfast Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Roast Beef", "Tuna Salad", "Swiss Cheese", "Cheddar Cheese", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Brown Rice", "Ambrosia Salad (w/nuts)", "Pasta Salad with Grilled Veggies", "Vietnamese Pork Banh Mi", "Chili and Noodles", "Fresh Corn on the Cob", "Fresh Spinach with Garlic", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Chicken Rice Soup", "Grilled Chicken Taco", "Grilled Vegetable Burger", "Char Burger", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Whole Wheat Sourdough Bread", "Mexican Wedding Cookie (w/nuts)", "Brownie w/Chocolate Icing"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Sticky Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Caesar Salad", "Chicken Piccata", "Steamed Crookneck Squash", "Sauteed Zucchini with Garlic", "Rice Pilaf with Mushrooms", "Linguini Pasta", "Bolognaise Sauce", "Pasta Pronto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Brown Molasses Bread", "Strawberry Muffin"],
"Lunch": ["Roasted Butternut Squash Soup", "Chicken Broccoli Bake", "Steamed Zucchini", "Baked Potato", "Beef Hard Shell Taco", "Bean & Cheese Sope", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Four Cheese Pesto Pizza on Wheat", "Herb Breadsticks", "Fettuccine w/Chicken/Olives & Garlic", "Cellentani with Vegetable Marinara", "Wild Rice Blend", "Long Grain Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Cheese on Sourdough", "Krinkle Cut French Fries", "Strawberry Radicchio Salad (w/nuts)", "Cracked Wheat Bread", "Oatmeal Chocolate Chip Cookie"],
"Dinner": ["Vegetable Noodle Soup", "Roast Beef", "Fresh Broccoli Spears", "Garlic Mashed Potatoes", "Steamed Vegetables & Rice", "Baked Potato", "Pork Chile Verde Burrito", "Chipotle Bean Flauta", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Four Cheese Pesto Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Southwestern Chopped Salad", "Jalapeno Cornbread", "Mexican Chocolate Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Snickerdoodle Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Chocolate Chunk Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Watermelon", "Cantaloupe", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Baked Oatmeal with Apple & Cinnamon", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Huevos Rancheros", "Fall Vegetable Hash"],
"Lunch": ["Vegetarian Taco Salad", "Chipotle Chicken Wrap", "Sliced Ham", "Sliced Roast Beef", "Provolone Cheese", "Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Three Cheese Flatbread", "Greek Pasta w/Feta Tomato & Spinach", "Fettucine Alfredo", "Oatmeal Bread", "Granola Bar (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Mojo Roasted Chicken (Pollo Asado)", "Red Chimichurri Sauce", "Cheese Quesadilla with Chiles", "Ranchero Beans", "Steamed Fresh Broccoli", "Ginger Pepper Steak", "Brown Rice", "Stir Fried Bok Choy", "Spicy Scallop Sushi Roll", "Tempura Onion Roll", "Cheeseburger", "Grilled Swiss & Tomato on Wheat", "Sourdough French Toast", "Steak Fries", "Caramelized Onion", "Chipotle Aioli", "Roasted Tomato Salsa", "Housemade Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Garlic Pizza on Wheat", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Tomato and Roasted Garlic Sauce", "Brownie Pie", "Oatmeal Bread", "Grilled Chicken Taco", "Cheese Quesadilla", "Fire Roasted Tomato Salsa", "Roasted Broccoli and Red Onion", "Black Beans", "Cilantro & Onion Mix", "Thai Chicken Bowl (w/nuts)", "Tofu Vegetable Pad Thai (w/nuts)", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Roll", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-10-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Chicken Sausage Sandwich", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread", "Cranberry Almond Biscotti (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Provolone Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Noodles with Vegetables", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Asian Fish Taco", "Cactus Taco", "Corn with Red Peppers", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Lentil Soup", "Chili Dog", "Black Bean Burger", "Grilled Cheese Chile & Veggie on Sour(v", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Ginger Basmati Rice", "Focaccia Bread", "Sweet Rice Cake (w/nuts)", "Lemon Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Lemon Ginger Turkey Stir Fry", "Stir Fry Vegetables with Tofu", "Tortilla Chicken Soup", "Spinach Salad with Honey Dressing", "Indian Chicken Curry (w/nuts)", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Spaghetti Pasta", "Garden Vegetable Marinara", "Whole Wheat Penne Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Breakfast Quesadilla", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Pumpkin Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Gumbo Soup", "Open Face Grilled Eggplant Sandwich", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Chorizo Burrito", "Bean & Cheese Entomatadas", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage and Mushroom Pizza", "Thai Pizza (w/nuts)", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Grilled Cheese on Wheat", "Steak Fries", "Lemon Herb Quinoa Salad", "Herb Biscuit", "Banana Chocolate Chip Bar"],
"Dinner": ["Spicy Navy Bean Soup", "Fish Cake", "Lemon Dill Sauce", "Vegetable Rice Pilaf", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Beef Fajita", "Chipotle Tempeh Tacos", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage and Mushroom Pizza", "Thai Pizza (w/nuts)", "Herb Breadsticks", "Spaghetti Pasta", "Meat Sauce", "Penne Pasta", "Marinara Sauce", "Brown Rice", "Long Grain Rice", "Curried Chicken Almond Salad (w/nuts)", "Crusty French Bread", "Banana Walnut Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Snickerdoodle Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Chocolate Chunk Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Cantaloupe", "Grapefruit Halves", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Orange Scone", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Strawberry Blintz", "Grilled Ham", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Focaccia with Vegetables & Pesto", "Sliced Turkey Pastrami", "Sliced Turkey", "Swiss Cheese", "Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Marinara Sauce with Sausage", "Farfalle Pasta", "Herb Focaccia Bread", "Apple Cider Donut Cake", "Dark Chocolate Chip Mint Cookie", "Baked Ham & Turkey Hawaiian Sandwich", "Black Beans", "Spinach Stir Fried with Garlic", "Carrot & Zucchini with Lemon Sauce", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Stir Fried Bok Choy", "Cucumber & Avocado Roll", "Spicy Tuna Roll", "Grilled BBQ Chicken Sandwich", "Bean and Cheese Burrito", "Black Bean Chilaquiles", "Shoestring Fries", "Chipotle Aioli", "Classic BBQ Sauce", "Spicy Mustard Sauce"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Fettuccine Alfredo", "Rhubarb Stacking Cake", "Herb Focaccia Bread", "Italian Meatballs", "Tomato Basil Cream Sauce", "Basmati Rice with Peas", "Black Beans", "Sauteed Zucchini with Garlic", "Teriyaki Beef Stir Fry", "Beef Empanadas", "Aji Verde", "Fresh Vegetable Medley w/Spinach", "Spicy Tuna Roll", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-10-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Apple Crepe w/Caramel Sauce", "Beefy Eggs Machaca", "Cottage Fried Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Pumpkin & Walnut Muffin (w/nuts)", "Pinch Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Smoked Gouda", "Swiss Cheese", "Brown Rice", "Beef Stir Fry with Spicy Sauce", "Tofu Vegetable Kung Pao (w/nuts)", "Colorful Coleslaw", "Crunchy Fruit Salad (w/nuts)", "Chicken Tikka Masala", "Sauteed Summer Squash with Herbs", "Couscous", "Pepperoni Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Turkey Rice Soup", "Grass Fed Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Pesto Roll", "Caramel Flan", "Nut and Seed Bar (w/nuts)"],
"Dinner": ["Garden Wild Rice Salad", "Antipasto Salad", "Sticky Rice", "Pork Chow Mein", "Five Spice Vegetable Stir Fry", "Cream of Broccoli Soup", "Salad Wheat Berry", "Beef and Bean Tostada", "Fresh Broccoli Spears", "Fresh Vegetable Medley", "Ratatouille with White Beans", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Fettucine Alfredo", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Riccotta Cheesecake w/Berry Compote", "Olive Whole Wheat Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blueberry Pancake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cranberry Orange Muffin", "Lemon Scone"],
"Lunch": ["Lentil Soup", "Spicy Meatball Sandwich", "Baby Carrots with Tarragon", "Baked Potato", "Chicken Tostada", "Broccoli & Cauliflower Quesadilla", "Spanish Rice w/Roasted Corn", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "zPasta Carbonara", "Whole Grain Rotini", "Creamy Pesto Sauce", "Brown Rice", "Long Grain Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Pastrami & Jack on Wheat", "Shoestring French Fries", "Thai Cucumber Salad", "Graham Bread", "Lemon Cookie", "Peanut Butter Bar (w/nuts)"],
"Dinner": ["Cream of Mushroom Soup", "Char Grilled Pork Chop", "Roasted Red Potato Wedges", "Vegetable Medley", "Baked Potato", "Beef Fried Taco", "Potato Vegetable Taco", "Spanish Rice w/Roasted Corn", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Teriyaki Chicken Stir Fry", "Stir Fry Tofu w/ Peanut Sauce (w/nuts)(v", "Long Grain Rice", "Brown Rice", "French Potato Salad", "Onion Bread", "Chocolate Mint Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Sugar Cookie", "Snickerdoodle Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Chocolate Chunk Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Fresh Strawberry", "Sliced Pineapple", "Sliced Cantalope", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Bran Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Egg Scrambled w/Cheese/Mush", "Apple Cinnamon Oatmeal Pancake", "Cottage Fried Potatoes", "Sauteed Fresh Cauliflower"],
"Lunch": ["Caponata Salad", "Grilled Vegetable Wrap", "Sliced Ham", "Tuna Salad", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Long Grain Rice", "White Bean Basque Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Goat Cheese and Onion Flatbread", "Penne with Cherry Tomato/Herb", "Mustard Chicken Sauce", "Linguini Pasta", "Roasted Garlic Roll", "Snickerdoodle Cookie", "Lime Bar", "Tacos Al Pastor", "Fire Roasted Tomato Chipotle Salsa", "Cilantro & Onion Mix", "Refried Black Beans", "Mexican Rice", "Roasted Cauliflower with Cumin", "Indian Chicken Curry (w/nuts)", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "California Roll", "Daikon Roll with Brown Rice", "Grass Fed Burger", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Malibu Burger", "Chipotle Aioli", "Housemade Ketchup", "Spicy Mustard Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "White Bean Basque Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Pepperoni Pizza", "Pasta Carbonara", "Greek Pasta w/Feta/Tom &Spinach", "Very Chocolate Cake w/Choc Icing", "Roasted Garlic Roll", "Mojo Roasted Chicken (Pollo Asado)", "Aji Amarillo Sauce", "Cuban Style Black Beans & Rice", "Chipotle Roasted Potatoes", "Sauteed Kale & Collard Greens", "Sweet & Sour Pork", "Vegetable Fried Rice", "Bang Bang Broccoli", "California Roll", "Daikon Roll with Brown Rice"],
}
},
],
},
];
export default diningMenu
