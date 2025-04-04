const diningMenu = [
{
"date": "2025-04-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Chicken Machaca with Scrambled Eggs", "Blueberry Pancake", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Cucumber Tzatziki", "Garlic Shawarma Sauce", "Armenian Mint Yogurt Sauce", "Middle Eastern Pickled Turnips", "Chicken Quarters with BBQ Sauce", "Eggplant Parmigiano", "Pasta Pronto", "Steamed Crookneck Squash", "Chicken Caesar Salad", "Fresh Garden Pasta Salad", "Ham & Pineapple", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Beef Noodle Soup", "Charburger", "Black Bean Burger", "Fish & Chips w/Tartar Sauce", "White Navy Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Mahi Mahi Veracruz", "Vegetable Fried Rice", "Red Curry Coconut Cashew Soup(w/nut)(vgn", "Boneless Breaded Cajun Pork Chop", "Country Gravy", "Steamed Fresh Carrots", "Fresh Vegetables Saute with Garlic", "Mashed Potatoes with Herbs", "Arugula Salad with Goat Cheese", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Fresh Tomato Basil Garlic Pasta", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Ham & Pineapple", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Pandesal", "Marble Cake with Chocolate Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Donut Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["White Bean Basque Soup", "BBQ Beef on Bun", "Fresh Steamed Carrots", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomatillo Guajillo Salsa", "Chicken Florentine Pizza w/White Sauce", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Burger on Wheat Bun", "Shoestring French Fries", "Apple Blu Cheese Walnut Salad(w/nuts)", "Garlic Roll", "Congo Bar (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Baked Cod with Garlic & Herb", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Fried Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomatillo Guajillo Salsa", "Chicken Florentine Pizza w/White Sauce", "Three Cheese Pizza", "Herb Breadsticks", "Kung Pao Pork with Peanuts (w/nuts)", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "German Potato Salad", "Pizza Bread", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Oatmeal Trail Mix Cookie", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Oatmeal Trail Mix Cookie", "Cream Cheese Brownie", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola", "Granola Black & Blue Parfait (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat French Toast", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Italian Tomato Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Baked Potato", "Brown Rice", "Vegetable Minestrone Soup", "Sugar Snap Peas", "Sweet and Spicy Tofu", "Couscous", "Broccolini & Salami Stromboli", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Alburro Sauce", "Spaghetti", "Crusty French Bread", "M&M Bar (w/nuts)", "Cream Cheese Brownie Pie", "Grilled Rockfish with Italian Spice", "Creamy Pesto Sauce", "Steamed Red Potatoes w/Parsley", "White Beans", "Sauteed Kale Carrot & Snow Peas", "Chicken Pad Thai with Peanut (w/nuts)", "Sticky Rice", "Sauteed Kale Carrot & Snow Peas", "Roasted Mixed Vegetables", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Grilled BBQ Chicken Sandwich", "Whole Wheat French Toast", "Cheese Quesadilla", "Crinkle Cut French Fries", "Sriracha Mayonnaise", "Fire Roasted Tomato Chipotle Salsa", "Classic BBQ Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Vegetable Minestrone Soup", "Sugar Snap Peas", "Sweet and Spicy Tofu", "Couscous", "Broccolini & Salami Stromboli", "Alburro Sauce", "Spaghetti", "Sausage Marinara Sauce", "Whole Wheat Penne Pasta", "Boston Cream Pie", "Crusty French Bread", "Chicken Piccata", "Farfalle Pasta", "White Beans", "Baked Rigatoni", "Steamed Broccoli & Cauliflower", "Fish Taco", "Street Style Fish Taco", "Spanish Rice with Cilantro", "Fire Roasted Tomato Salsa", "Cilantro & Onion Mix", "Grilled Zucchini & Tomatoes", "Refried Black Beans", "Cucumber & Avocado Roll", "Spicy Scallop Sushi Bowl"],
}
},
],
},
{
"date": "2025-04-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Chicken Congee", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Pinto Beans", "Sausage Patty", "Chilaquiles (No Egg)", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Lemon Scone", "Banana Nut Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Beef Chow Mein", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Italian Bread Salad", "Roast Pork Loin", "Mushroom Gravy", "Carrots with Fresh Thyme", "Green Beans", "Roasted  Red Potato Wedges", "Potatoes Au Gratin", "Italian Quinoa", "Fettuccine with Chicken Olives & Garlic", "Spaghetti Pasta", "Garden Vegetable Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Thai Chicken Curry Pizza", "Mushroom Pizza on Wheat", "Cheese Pizza on White", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Coconut Carrot Soup", "Chicken Philly Sandwich", "Fresh Vegetable Medley", "Baked Potato", "Pepperoni Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Caesar Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Nut Bread  (w/nuts)", "Chocolate Chip Scone"],
"Dinner": ["Spicy Black Bean Soup", "Salisbury Steaks", "Mushroom Gravy", "Fresh Broccoli Spears", "Roasted Potato Wedges", "Baked Potato", "Chicken Chile Verde Tostada", "Quesadilla w/Roasted Poblano Chile", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Pepperoni Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Chinese Vegetable Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Spinach Salad", "Sourdough Rounds", "Kahlua Chocolate Cake"],
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
"Brunch": ["Grapefruit Halves", "Watermelon", "Cantaloupe", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "White Pizza w/Bacon & Caramelized Onion", "Fresh Tomato Basil Garlic Pasta", "Pasta Carbonara", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Pinto Beans", "Salsa", "Black Bean & Rice Quesadilla", "Roasted Cauliflower with Cumin", "Greens and Beans Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs w/Vegetables", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Sauteed Zucchini with Garlic"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Greens and Beans Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Tomato Basil Pizza on Wheat", "Fusilli w/Roasted Vegetable & Asiago", "White Wine Garlic Sauce with Chicken", "Mexican Chocolate Cake", "Cheese Bread", "Rotisserie Pork Loin", "Black Magic Plum Sauce", "Oven Browned Potatoes", "White Beans", "Steamed Fresh Broccoli", "Thai Style Chicken Drumstick", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Garlic & Ginger", "Grilled Ahi Tuna Bowl with Brown Rice", "Vegetable Roll with Brown Rice"],
}
},
],
},
{
"date": "2025-04-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Mardi Gras Eggs with Ham", "Peach Chunk Pancake", "White Navy Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Double Chocolate Bread", "Maple Pecan Scone (w/nuts)"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Spicy Kale Caesar Salad", "Turkey Meatloaf", "Turkey Gravy", "Peas", "Stir Fry Vegetables", "Roasted Potato Wedges", "Fettucine Alfredo", "Baked Rigatoni", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Assorted Meat Pizza", "Tomato Pesto Pizza on Wheat", "Cheese Pizza on White", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Hearty Vegetable Soup", "Grilled Turkey & Jack on Sourdough", "Sauteed Crookneck Squash", "Baked Potato", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Coleslaw", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Pinch Bread"],
"Dinner": ["Split Pea Soup", "Roast Beef", "Mashed Potatoes", "Fresh Steamed Carrots", "Baked Potato", "Chicken Sope", "Bean and Rice Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "White Clam Sauce", "Pasta Primavera", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Graham Bread", "Boston Cream Pie"],
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
"Brunch": ["Watermelon", "Fresh Strawberry", "Cantaloupe", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Chicken Chilaquiles", "Mushroom Cream Sauce", "Chickpea Pasta", "Blueberry Scone", "Flour Tortilla", "Meatloaf Sandwich", "Grilled Cheese on Sourdough", "White Beans", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Buttermilk Pancakes", "Cauliflower w/Sugar Snap Peas", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Bolognese Sauce with Pancetta", "Spaghetti", "Mushroom Cream Sauce", "Chickpea Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Chile Verde with Corn Tortillas", "Tortilla Chips & Salsa", "Cilantro & Onion Mix", "Refried Beans", "Lettuce & Cheese &Tomatoes", "Hoisin Chicken", "Sticky Rice", "Spicy Eggplant Broc w/Ginger Sauce", "Steamed Broccoli & Cauliflower", "California Club Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2025-04-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Pepper Jack Cheese", "Sticky Rice", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Penne Arrabiata with Chicken", "Steamed Fresh Carrots", "Green Beans", "Festive Rice Fruit Salad (w/nuts)", "Italian Tossed Greens", "Salami Pizza", "Onion & Jalapeno Pizza", "Cheese Pizza on White", "Potato Cheese Soup", "Grilled Turkey Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Black Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Garlic French Bread", "Toll House Bar", "Magic Walnut Cookie Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Blackened Mahi Mahi", "Creole Beans and Rice", "Sauteed Kale & Collard Greens", "Caesar Salad", "Whole Wheat Spaghetti", "White Wine Garlic Sauce with Chicken", "Pinto Beans", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Onion & Jalapeno Pizza", "Cheese Pizza on White", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Potato Leek Soup", "Italian Chopped Sandwich", "Fresh Steamed Carrots", "Baked Potato", "Baked Potato", "Beef Chili Colorado Burrito", "Potato Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Tomato Basil Pizza", "Herb Breadsticks", "Beef Broccoli Teriyaki StirFry Brn. Rice", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Cheese on Wheat", "Shoestring French Fries", "Tabouli Salad", "Three Grain Roll", "Killer Brownie"],
"Dinner": ["Miso Soup", "Sweet & Sour Glazed Chicken", "Vegetable Medley", "Pineapple Rice", "Baked Potato", "Baked Potato", "Pork Morisqueta", "Grilled Vegetable Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Tomato Basil Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Marinated Green Beans Salad", "Hawaiian Sweet Bread", "Black Forest Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Watermelon", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola", "Granola Black & Blue Parfait (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Potatoes O'Brien", "Sourdough French Toast", "Fresh Sauteed Spinach"],
"Lunch": ["Cherry Tomato White Bean Salad", "Chipotle Hummus & Quinoa Wrap", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti", "Herb Focaccia Bread", "Apple Kuchen", "Oatmeal Raisin Bar (w/nuts)", "Pulled Pork Buffalo Style Sandwich", "Classic BBQ Sauce", "Egg & Arugula & Herb Tartine", "Pinto Beans", "Cabbage Cilantro Slaw", "Teriyaki Chicken Stir Fry", "Sticky Rice", "Stir Fried Chinese Greens", "Calamari Roll", "Hamburger", "Sourdough French Toast", "Grilled Cheese and Tomato on Wheat", "Shoestring Fries", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti", "Brownie Pie", "Russian Bread", "Pork Chinese BBQ", "Pinto Beans", "Red Potatoes with Rosemary", "Vegetables Steamed Brown Rice", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Daikon Roll", "California Sushi Plate"],
}
},
],
},
{
"date": "2025-04-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Canadian Bacon", "Strawberry Pancake", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Genoa Salami", "Sliced Roast Beef", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Chicken & Vegetable Stir Fry", "Asian Vegetable Stir Fry", "Ambrosia Salad", "Pasta Salad with Grilled Veggies", "Roast Beef Sandwich with Gravy", "Chili and Noodles", "Fresh Corn on the Cob", "Fresh Spinach with Garlic", "Smoked Barbeque Chicken Pizza", "Olive Mushroom Pizza on Wheat", "Cheese Pizza on White", "Egg Drop Soup", "Grilled Chicken Taco", "Grilled Vegetable Burger", "Hot Dog", "White Navy Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Whole Wheat Sourdough Bread", "Mexican Wedding Cookie (w/nuts)", "Brownie w/Chocolate Icing"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Brown Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Pasta Salad with Grilled Veggies", "Chicken Piccata", "Steamed Crookneck Squash", "Sauteed Zucchini", "Steamed Vegetables & Brown Rice", "Rice Pilaf with Mushrooms", "Linguini Pasta", "Bolognaise Sauce", "Pasta Pronto", "Sun Dried Tomato Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Olive Mushroom Pizza on Wheat", "Cheese Pizza on White", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Muffin"],
"Lunch": ["Chili Style Lentil Soup", "Shaved Turkey on a French Roll", "Sauteed Zucchini with Garlic", "Baked Potato", "Chicken Mole Taco", "Potato Rajas Mole Taco", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Mushroom Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Cheese Tortellini with Marinara", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Ham & Cheddar on Wheat", "Steak Fries", "Caponata Salad", "Yeast Roll", "Mint Chocolate Chip Cookie"],
"Dinner": ["Curried Chicken Soup", "Meatloaf", "Garlic Roasted Red Poatoes", "Beef Gravy", "Fresh Broccoli Spears", "Baked Potato", "Carnitas Taco", "Chipotle Tempeh Tacos", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Mushroom Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Goan Beef Curry w/Coconut Milk", "Panfried Noodles with Vegetables", "Long Grain Rice", "Brown Rice", "Arugula Salad with Almond (w/nuts)", "Whole Wheat Bread", "German Apple Cake w/Crm Chse (w/nuts) (v"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Fresh Strawberry", "Seedless Red Grape", "Cinnamon Maple Granola", "Make Your Own Waffle", "Granola Cantaloupe Parfait (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Carribean Coconut Bread", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Huevos Rancheros", "Refried Beans", "Sweet Potato Hash"],
"Lunch": ["Italian Bread Salad", "Chicken Caesar Wrap", "Sliced Turkey", "Egg Salad", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Jasmine Rice", "Roasted Celery Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Garlic Pizza on Wheat", "Chicken Artichoke Pesto Flatbread", "Spaghetti", "Alburro Sauce", "Sun Dried Tomato Bread", "Chocolate Crinkle Cookie", "Espresso Coffee Cupcake", "Turkey Pot Pie", "Pita Sandwich w/Hummus & Tabouli", "Pinto Beans", "Roasted Red Onion &  Zucchini", "Cuban Sandwich", "Seasoned Sweet Potato Halves", "Orange Infused Green Beans", "Tempura Onion Roll", "Calamari Roll", "Grilled BBQ Chicken Sandwich", "Black Bean Burger", "Banana Pancakes", "Shoestring Fries", "Classic BBQ Sauce", "Sriracha Mayonnaise", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Roasted Celery Soup", "Garlic Pizza on Wheat", "Risotto with Fresh Vegetables", "Tomato and Roasted Garlic Sauce", "Spaghetti", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Toll House Bar", "Herb Focaccia Bread", "Grilled Chicken Taco", "Chorizo Spiced Potato Quesadilla", "Cilantro & Onion Mix", "Tortilla Chips & Salsa", "Pinto Beans", "Beef Pad Thai with Peanuts (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Spinach with Garlic & Ginger", "Calamari Sushi Plate", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2025-04-09",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Chicken Sausage Sandwich", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Banana Bread", "Cranberry Almond Biscotti (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Sticky Rice", "Sweet and Sour Pork", "Vegetable Yakisoba", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Cactus Taco", "Asian Fish Taco", "Corn with Red Peppers", "Black Beans", "Pepperoni Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Lentil Soup", "Cheeseburger", "Black Bean Burger", "Grilled Cheese Chile & Veggie on Sour(v", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Ginger Basmati Rice", "Focaccia Bread", "Sweet Rice Cake (w/nuts)", "Lemon Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Pork Chow Mein", "Five Spice Vegetable Stir Fry", "Tortilla Chicken Soup", "Mediterranian Couscous (w/nuts)", "Indian Chicken Coconut Curry", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Penne Pasta", "Fresh Basil Sauce", "Spaghetti Pasta", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Pepperoni Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Whole Wheat French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Dilled Vegetable Barley Soup", "Herb & Garlic Crusted Tilapia", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Chimichanga", "Bean and Cheese Hard Shell Taco", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Bacon Jalapeno Pizza", "Pineapple Pizza", "Herb Breadsticks", "Korean Spicy Chicken Stew", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheddar on White", "Krinkle Cut French Fries", "Black Bean Salad", "Whole Wheat Roll", "Toll House Bar"],
"Dinner": ["Minestrone Soup", "Chicken Lasagna with Spinach", "Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef and Bean Burrito", "Sweet Corn Tamale Casserole", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Bacon Jalapeno Pizza", "Pineapple Pizza", "Herb Breadsticks", "Stir Fry Shrimp and Vegetables", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Wild Rice Blend", "Kale Strawberry & Walnut Salad(w/nut(vgn", "Garlic Roll", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Pineapple", "Cantaloupe", "Grapefruit Halves", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Strawberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Sausage Links", "Potatoes O'Brien", "Sauteed Zucchini with Garlic"],
"Lunch": ["Green Bean & Cucumber w/Miso", "Roasted Vegetable Panini", "Sliced Turkey Pastrami", "Sliced Roast Beef", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Sopa de Marisco (gf)", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Sausage Mushroom Pizza", "Linguini with Pesto", "Pasta with Grilled Vegetables", "Crusty French Bread", "Vanilla Cupcake w/Strawberry Icing", "M&M Bar (w/nuts)", "Salmon & Quinoa Cakes w/Salad & Relish", "Smokey Tomato Relish", "Pita Chips", "Pinto Beans", "Butternut Squash Hummus", "Hot & Sour Pork Ribbons", "Fried Noodles", "Sauteed Kale", "Vegetable Roll", "Salmon Roll", "Grilled Turkey Burger", "Grilled Vegetable and Bean Burrito", "Whole Wheat Pancake", "Steak Fries", "Sriracha Mayonnaise", "Spicy Mustard Sauce", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Sopa de Marisco (gf)", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Sausage Mushroom Pizza", "Pasta with Grilled Vegetables", "Fettuccine Alfredo", "Pecan Butterscotch Brownie (w/nuts)", "Cheese Bread", "Lasagna Bolognese", "Vegetarian Rigatoni", "Pinto Beans", "Sauteed Zucchini with Garlic", "Jerk Chicken", "Red Beans and Rice", "Mashed Yams", "Fresh Vegetable Medley w/Spinach", "Vegetable Roll", "Salmon Sushi Plate"],
}
},
],
},
{
"date": "2025-04-10",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancake (Housemade)", "Machaca de Jalisco Eggs", "Cottage Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Pinch Bread", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Smoked Gouda", "Sliced Swiss Cheese", "Sticky Rice", "Beef Stir Fry with Spicy Sauce", "Tofu Peanut Veggie Kung Pao(w/nut)", "Colorful Coleslaw", "Crunchy Fruit Salad (w/nuts)", "Chicken Tikka Masala", "Sauteed Yellow Squash with Herbs", "Couscous", "Sausage Mushroom Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Greek Avgolemono Soup", "Grass Fed Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Pinto Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pesto Roll", "Classic French Napoleon", "Nut & Seed Bar (w/nuts)"],
"Dinner": ["Garden Wild Rice Salad", "Antipasto Salad", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable & Tofu Stir Fry", "Cream of Broccoli Soup", "Caesar Salad", "Beef and Bean Tostada", "Fresh Broccoli Spears", "Fresh Vegetable Medley", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Fettucine Alfredo", "Pasta Primavera", "White Navy Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Mushroom Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Olive Whole Wheat Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Ham and Cheese Crepe", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Cranberry Orange Muffin"],
"Lunch": ["Vegetable Soup", "Sicilian Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Beef Nachos", "Chile Relleno Casserole", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Hawaiian Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Thai Chicken Stir Fry w/Peanut (w/nuts)", "Spicy Veg. Stir Fry w/Brown Rice", "Long Grain Rice", "Wild Rice Blend", "Grass Fed Burger", "Black Bean Burger", "Chicken Corn Dog", "Steak Fries", "Chinese Chicken Salad (w/nuts)", "Sourdough Roll", "Chocolate Macaroons (w/nuts)"],
"Dinner": ["French Onion Soup", "BBQ Babyback Pork Ribs", "Fresh Corn on the Cob", "Macaroni and Cheese", "Roasted Potato Halves", "Baked Potato", "Turkey Taco", "Roasted Vegetable Quesadilla", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Hawaiian Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Fettuccine Pasta", "Alfredo Sauce w/Chicken/Vegetables", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Three Bean Salad", "Focaccia Bread", "Chocolate Chip Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken & Rice w/Pickled Cuke", "Spicy Thai Basil Beef", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Strawberry Barley Spinach Salad", "Creamy Spicy Chicken Pasta", "Roast Beef & Cheddar Sub", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Sweet & Sour Tofu Stir Fry", "House Salad", "Hummus with Celery & Carrots", "Lentil & Wild Rice Soup", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Orange Glazed Cookie", "Oatmeal Raisin Bar", "Apple", "Navel Orange", "Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Pineapple", "Watermelon", "Cantaloupe", "Baked Oatmeal with Apple & Cinnamon", "Cinnamon Maple Granola", "Fluffy Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Pumpkin Muffins (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chinese Stir-Fried Tomatoes & Eggs", "Strawberry Pancakes", "Hash Browns", "Sauteed Kale"],
"Lunch": ["Jicama Pico de Gallo Salad", "Pita Sandwich w/Hummus & Tabouli", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Potato", "Quinoa", "Tomato Basil Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Pepperoni Pizza", "Greek Pasta w/Feta/Tom &Spinach", "Mustard Chicken Sauce", "Linguini Pasta", "Three Grain Bread", "Snickerdoodle Cookie", "Strawberry Cheese Bread Pudding(w/nuts(v", "Chicken Gyro", "Cucumber Tzatziki", "Roasted Potato Salad w/Goat Cheese", "Pinto Beans", "Seasoned Vegetable Medley", "Asian Beef Bowl", "Sticky Rice", "Steamed Broccoli & Cauliflower", "California Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Shoestring Fries", "Sourdough French Toast", "Grilled Cheddar On Wheat", "Red Chimichurri Sauce", "Chipotle Aioli", "Caramelized Onion"],
"Dinner": ["Baked Potato", "Wild Rice", "Tomato Basil Soup", "Pepperoni Pizza", "Greek Pasta w/Feta/Tom &Spinach", "Mustard Chicken Sauce", "Linguini Pasta", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Very Chocolate Cake w/Choc Icing", "Everything Naan", "Mojo Roasted Chicken (Pollo Asado)", "Cuban Style Black Beans & Rice", "Chipotle Roasted Potatoes", "Sauteed Kale & Collard Greens", "Thai Chicken Taco", "Grilled Pineapple/Mango Salsa", "Vegetable Fried Rice", "Bang Bang Broccoli", "Asparagus & Egg Roll", "California Club Roll with Brown Rice"],
}
},
],
},
];
export default diningMenu
