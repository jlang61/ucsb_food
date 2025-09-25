const diningMenu = [
{
"date": "2025-09-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "French Toast", "Eggs Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Bacon Cheddar Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Italian Chunk Salad", "Macaroni Salad", "Pulled Pork Sandwich with Coleslaw", "Swiss Chard with Fresh Garlic", "House Made Baked Beans", "Potato Chip", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Santa Fe Salad", "Sticky Rice", "Pork with Vegetable Stir Fry", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Italian Chunk Salad", "Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Pumpkin Cheesecake Pie", "Bread Olive"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Pinch Bread"],
"Lunch": ["Tortilla Soup", "Chicken Caesar Wrap", "Fresh Broccoli Spears", "Baked Potato", "Beef Birria", "Raja Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham and Pineapple Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Spaghetti Pasta", "Marinara with Meatballs", "Wheat Penne Pasta", "Sun Dried Tomato Sauce", "Wild Rice Blend", "Long Grain Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Hot Dog", "Krinkle Cut French Fries", "Red Potato Salad with Dill", "Garlic French Bread", "Snickerdoodle"],
"Dinner": ["Lentil Soup", "Salisbury Steaks", "Mushroom Gravy", "Vegetable Medley", "Mashed Potatoes", "Baked Potato", "Chicken Nachos", "Bean & Rice Tostada", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham and Pineapple Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Whole Wheat Bread", "Apple Strudel with Caramel Sauce"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
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
"date": "2025-09-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Banana Pecan Baked Oatmeal (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Tahini Sauce", "Cucumber Tzatziki", "Chamorro BBQ Chicken", "Long Grain Rice", "Roasted Root Vegetables", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Spicy Kale Caesar Salad", "Ham & Cheese Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Brown Rice", "Rosemary Asiago Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Pumpkin Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Roast Pork Loin", "Apricot Chutney", "Broccoli Stuffed Tomato", "Peas with Onions", "Mashed Potatoes", "Spicy Kale Caesar Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Ham & Cheese Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Marble Cake with Chocolate Frosting", "Pandesal"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Blueberry Coffee Cake"],
"Lunch": ["New England Clam Chowder", "Spinach Quiche", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Mexican Pizza", "Herb Breadsticks", "Kung Pao Beef & Peanuts (w/nuts)", "Kung Pao Tofu & Peanuts (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Pasta Salad with Spinach & Feta", "Cracked Wheat Roll", "Jelly Bar Spritz"],
"Dinner": ["Vegetable Soup", "Honey Baked Chicken", "Spinach & Feta Turnover", "Carrots & Broccoli", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Sope", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Taco Pizza", "Mexican Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Wild Rice Blend", "Coleslaw with Vinaigrette", "Rosemary Bread", "Tres Leches Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Cantalope", "Honeydew Melon", "Sliced Pineapple", "Make Your Own Waffle", "Granola Parfait", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Chocolate Chip Scone", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Pineapple Ham Fried Rice", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Roasted Vegetable Panini", "Rainbow Peanut Noodles w/Chicken(w/nuts)", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Sweet Potato", "Wild Rice Blend", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Cellentani Pasta", "Roasted Vegetable Marinara Sauce", "Ciabatta Roll", "Almond Biscotti (w/nuts)", "Lemon Pie", "Grilled BBQ Chicken Sandwich", "Fresh Tomato Quiche", "Pinto Beans", "Sauteed Kale & Collard Greens", "Street Style Fish Taco", "Pico De Gallo", "Refried Beans", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Fire Roasted Tomato Salsa", "Housemade Spicy Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Roasted Vegetable Marinara Sauce", "Cellentani Pasta", "Onion Walnut Bread (w/nuts)", "Blueberry Lemon Cake", "Turkey A La King", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Steamed Broccoli & Cauliflower", "Thai Chicken Bowl", "Sticky Rice", "Kimchi", "Miso Broth Soup with Spinach", "Bok Choy & Nappa Cabbage w/Sesame", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2025-09-27",
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
"Brunch": ["Grapefruit Halves", "Seedless Red Grape", "Watermelon", "Cinnamon Maple Granola", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Chicken Noodle Soup", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Sausage Mushroom Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Flour Tortilla", "Whole Wheat Banana Bread", "Black Bean Chilaquiles", "Fried Eggs", "Sweet Potato Hash", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "Ground Beef and Bean Tostada", "Mexican Rice", "Refried Beans", "Black Bean Tostada", "Fire Roasted Tomato Salsa", "Lettuce/Cheese/Tomatoes", "Indian Chicken Coconut Curry", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Garlic & Ginger", "Calamari Sushi Plate"],
}
},
],
},
{
"date": "2025-09-28",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "White Navy Beans", "Make Your Own Waffle", "Double Chocolate Bread", "Maple Pecan Scone (w/nuts)"],
"Dinner": ["Sticky Rice", "Mongolian Beef", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Caesar Salad", "Turkey Meatloaf", "Stir Fry Vegetables", "Peas", "Potato Garlic Mashed", "Gnocchi Mushroom Corn & Sage Butter", "Baked Rigatoni", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Tomato Pesto Pizza on Wheat", "Rosemary Asiago Sourdough Bread", "Cookies 'n Cream Cake"],
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
"Brunch": ["Pineapple", "Honeydew Melon", "Sliced Cantalope", "Cinnamon Maple Granola", "Peanut Butter & Banana Oats (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Spicy Navy Bean Soup", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Quattro Formaggio Pizza on Wheat", "Rigatoni Mozzarella", "Fresh Basil Pesto", "Penne Pasta", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Breakfast Quesadilla", "Grilled Cheese on Sourdough", "Pinto Beans", "Fresh Spinach with Garlic", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Quattro Formaggio Pizza on Wheat", "Fresh Basil Pesto", "Penne Pasta", "Rigatoni Mozzarella", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Cream Cheese Pie", "Whole Wheat French Bread", "Pollo a la Brasa with Aji Verde Sauce", "Creole Beans and Rice", "Roasted Potato Wedges", "Roasted Broccoli", "Pork Char Siu", "Sticky Rice", "Thai Vegetable & Peanut Noodle(w/nut)", "Steamed Broccoli & Cauliflower", "Daikon Roll"],
}
},
],
},
{
"date": "2025-09-29",
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
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Scone"],
"Lunch": ["Miso Soup", "Reuben Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Black Bean Burger", "Grilled Swiss on Sourdough", "Shoestring French Fries", "Italian Vegetable Spinach Salad", "Potato Roll", "Lemon Bar"],
"Dinner": ["Vegetable Barley Soup", "Teriyaki Chicken", "Bok Choy with Garlic & Ginger", "Pineapple Rice", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Black Bean & Rice Tostada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Vegetables", "Wheat Penne Pasta", "Tomato Leek Marinara", "Brown Rice", "Long Grain Rice", "Marinated Green Beans Salad", "Cheese Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Diced Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Diced Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Berry Parfait", "Cinnamon Maple Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Bread", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Sausage Biscuits & Gravy", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spring Mix Salad w/Feta & Craisins", "Greek Chicken Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Sausage Mushroom Pizza", "Meat Sauce", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Wheat Germ Bread", "Oatmeal Raisin Quinoa Cookie", "Gingerbread Cake", "Basmati Rice", "Char Grilled Cajun Chicken Sandwich", "Ranch Potato Salad", "Vegetables Steamed Brown Rice", "Black Beans", "Tandoori Spiced Chicken", "Basmati Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Vegetable Roll", "Grilled Turkey Burger", "Grilled Swiss & Tomato on WW", "Banana Pancakes", "Shoestring Fries", "Housemade Ketchup", "Chipotle Aioli", "Roasted Tomato Salsa"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Chocolate Peanut Butter Cake (w/nuts)", "Crusty French Bread", "Pueblo Pork Roast", "Papaya Cilantro Lime Salsa", "Red Potatoes with Rosemary", "Black Beans", "Mushroom Ragout over Polenta", "Pork Dan Dan Noodle", "Stir Fried Bok Choy", "Seasoned Vegetable Medley", "Brown Rice Calamari Sushi Plate", "Vegetable Roll"],
}
},
],
},
{
"date": "2025-09-30",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancake", "Canadian Bacon", "Roasted Red Breakfast Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Roast Beef", "Tuna Salad", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Brown Rice", "Ambrosia Salad", "Pasta Salad with Grilled Veggies", "Vietnamese Pork Banh Mi", "Vegetable Fried Rice", "Fresh Corn on the Cob", "Fresh Spinach with Garlic", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Chicken Rice Soup", "Grilled Chicken Taco", "Grilled Vegetable Burger", "Char Burger", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Whole Wheat Sourdough Bread", "zMexican Wedding Cookie (w/nuts)", "Brownie w/Chocolate Icing"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Sticky Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Caesar Salad", "Chicken Piccata", "Steamed Crookneck Squash", "Sauteed Zucchini with Garlic", "Rice Pilaf with Mushrooms", "Linguini Pasta", "Bolognaise Sauce", "Pasta Pronto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Traditional Cheese Pizza on Wheat", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Strawberry Muffin", "Brown Molasses Bread"],
"Lunch": ["Roasted Butternut Squash Soup", "Chicken Broccoli Bake", "Steamed Zucchini", "Baked Potato", "Beef Hard Shell Taco", "Bean & Cheese Sope", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Four Cheese Pesto Pizza on Wheat", "Herb Breadsticks", "Fettuccine with Chicken Olives & Garlic", "Cellentani with Vegetable Marinara", "Wild Rice Blend", "Long Grain Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Cheese on Sourdough", "Krinkle Cut French Fries", "Strawberry Radicchio Salad (w/nuts)", "Cracked Wheat Bread", "Oatmeal Chocolate Chip Cookie"],
"Dinner": ["Vegetable Noodle Soup", "Roast Beef", "Fresh Broccoli Spears", "Garlic Mashed Potatoes", "Steamed Vegetables & Rice", "Baked Potato", "Pork Chile Verde Burrito", "Chipotle Bean Flauta", "Green Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Four Cheese Pesto Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Tofu Vegetable Stir Fry", "Brown Rice", "Long Grain Rice", "Southwestern Chopped Salad", "Jalapeno Cornbread", "Mexican Chocolate Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Diced Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Diced Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Watermelon", "Cantaloupe", "Make Your Own Waffle", "Cinnamon Maple Granola", "Baked Oatmeal with Apple & Cinnamon", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Sourdough French Toast", "Huevos Rancheros", "Fall Vegetable Hash"],
"Lunch": ["Vegetarian Taco Salad", "Chicken Chipotle Wrap", "Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Three Cheese Flatbread", "Greek Pasta w/Feta/Tom &Spinach", "Gnocchi w/Creamy Pesto Sauce", "Oatmeal Bread", "Granola Bar (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Mojo Roasted Chicken (Pollo Asado)", "Red Chimichurri Sauce", "Cheese Quesadilla with Chiles", "Ranchero Beans", "Steamed Fresh Broccoli", "Ginger Pepper Steak", "Brown Rice", "Stir Fried Bok Choy", "Spicy Scallop Sushi Roll", "Tempura Onion Roll", "Cheeseburger", "Grilled Cheddar On Wheat", "Sourdough French Toast", "Steak Fries", "Chipotle Aioli", "Roasted Tomato Salsa", "Housemade Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Garlic Pizza on Wheat", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Tomato and Roasted Garlic Sauce", "Brownie Pie", "Oatmeal Bread", "Grilled Chicken Taco", "Cheese Quesadilla", "Fire Roasted Tomato Salsa", "Roasted Broccoli and Red Onion", "Black Beans", "Cilantro & Onion Mix", "Thai Chicken Bowl", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Spinach with Garlic & Ginger", "Turmeric Roasted Cauliflower", "Spicy Scallop Sushi Plate"],
}
},
],
},
{
"date": "2025-10-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Chicken Sausage Sandwich", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread", "Cranberry Almond Biscotti (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable Yakisoba", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Asian Fish Taco", "Cactus Taco", "Corn with Red Peppers", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Lentil Soup", "Chili Dog", "Black Bean Burger", "Grilled Cheese Chile & Veggie on Sour(v", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Ginger Basmati Rice", "Focaccia Bread", "Sweet Rice Cake (w/nuts)", "Lemon Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Pork Chow Mein", "Five Spice Vegetable Stir Fry", "Tortilla Chicken Soup", "Spinach Salad with Honey Dressing", "Indian Chicken Coconut Curry", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Spaghetti Pasta", "Garden Vegetable Marinara", "Whole Wheat Penne Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
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
"Lunch": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Diced Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Bacon Breakfast Burrito", "Creamy Pesto Pasta with Diced Chicken", "Macaroni & Cheese", "Chicken Caesar Salad", "Beet & Quinoa Salad", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "Tomato Basil Soup", "House Salad", "Roasted Broccoli", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Pineapple", "Cantaloupe", "Watermelon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Orange Scone", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Grilled Ham", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Focaccia with Vegetables & Pesto", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Sausage Marinara Sauce", "Farfalle Pasta", "Herb Focaccia Bread", "Apple Cider Donut Cake", "Dark Chocolate Chip Mint Cookie", "Baked Hawaiian Ham & Turkey Sandwich", "Black Beans", "Spinach Stir Fried with Garlic", "Carrot & Zucchini with Lemon Sauce", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Stir Fried Bok Choy", "Cucumber & Avocado Roll", "Spicy Tuna Roll", "Grilled BBQ Chicken Sandwich", "Bean and Cheese Burrito", "Strawberry Blintz", "Whole Wheat Banana Pancake", "Shoestring Fries", "Chipotle Aioli", "Classic BBQ Sauce", "Spicy Mustard Sauce"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Fettuccine Alfredo", "Rhubarb Stacking Cake", "Herb Focaccia Bread", "Meat Sauce", "Tomato Basil Cream Sauce", "Buttered Noodles", "Black Beans", "Sauteed Zucchini with Garlic", "Teriyaki Chicken Stir Fry", "Vegetable Empanada", "Aji Verde", "Fresh Vegetable Medley w/Spinach", "Cucumber & Avocado Roll"],
}
},
],
},
];
export default diningMenu
