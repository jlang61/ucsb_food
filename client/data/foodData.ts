const diningMenu = [
{
"date": "2024-05-31",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Chicken Machaca with Scrambled Eggs", "Blueberry Pancake", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "Sticky Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Chicken Caesar Salad", "Fresh Garden Pasta Salad", "Chicken Pot Pie", "Eggplant Parmigiano", "Pasta Pronto", "Steamed Crookneck Squash", "Pepperoni Pizza", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Beef Noodle Soup", "Charburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Beans Navy White", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Toll House Bar", "Peanut Butter Cookie (w/nuts)", "Butterscotch Bar (w/nuts)", "Cowboy Cookie Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "Red Curry Soup (w/nuts)", "Arugula Salad with Goat Cheese", "Pastitsio", "Sauteed Fresh Carrots", "Steamed Zucchini", "Oven Roasted Red Potatoes", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Fresh Tomato Basil Garlic Pasta", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Pepperoni Pizza", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Onion Bread", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Banana Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Donut Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "BBQ Beef on Bun", "Roasted Carrots with Garlic", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Three Cheese Pizza", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Wheat Pasta w/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Burger on Wheat Bun", "Shoestring French Fries", "Tabouli Salad", "Roasted Garlic Roll", "Pecan Pie Bar (w/nuts)"],
"Dinner": ["Chicken Noodle Soup", "Herb & Garlic Crusted Catfish", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Fried Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Three Cheese Pizza", "Herb Breadsticks", "Chicken & Veggie Stir Fry & Brown Rice", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "German Potato Salad", "Pizza Bread", "Cream Cheese Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Black & Blue Parfait (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat French Toast", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Roasted Vegetable Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Potato", "Minestrone Soup", "Brown Rice", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Pepperoni Stromboli with Provolone", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Alburro Sauce", "Spaghetti", "Crusty French Bread", "M&M Bar (w/nuts)", "Cream Cheese Brownie Pie", "Rockfish with Lemon Pepper", "Creamy Pesto Sauce", "Parsley Potatoes", "White Beans", "Grilled Cheese and Tomato on Wheat", "Sauteed Kale Carrot & Snow Peas", "Chicken Pad Thai with Peanut (w/nuts)", "Sticky Rice", "Roasted Mixed Vegetables", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Grilled BBQ Chicken Sandwich", "Whole Wheat French Toast", "Cheese Quesadilla", "Crinkle Cut French Fries", "Fire Roasted Tomato Chipotle Salsa", "Classic BBQ Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Brown Rice", "Minestrone Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Pepperoni Stromboli with Provolone", "Alburro Sauce", "Spaghetti Pasta", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Boston Cream Pie", "Crusty French Bread", "Chicken Piccata", "Farfalle Pasta", "White Beans", "Baked Rigatoni", "Steamed Broccoli & Cauliflower", "Fried Fish Taco", "Spanish Rice with Cilantro", "Lettuce/Cheese/Tomatoes", "Grilled Zucchini & Tomatoes", "Refried Black Beans", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-06-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Chicken Congee", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Pinto Beans", "Sausage Patty", "Chilaquiles (No Egg)", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Lemon Scone", "Banana Nut Bread (w/nuts)"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Caesar Salad", "Rotisserie Pork Loin", "Mushroom Gravy", "Carrots with Fresh Thyme", "Green Beans", "Mashed Potatoes", "Italian Quinoa", "Fettuccine with Chicken, Olives & Garlic", "Spaghetti Pasta", "Garden Vegetable Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Mushroom Pizza on Wheat", "Cheese Pizza on White", "Pizza Bread", "Chocolate Flourless Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Chicken Philly Sandwich", "Vegetable Medley", "Baked Potato", "Long Grain Rice", "Pepperoni Pizza", "Olive Pizza", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Santa Fe Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Nut Bread  (w/nuts)", "Chocolate Chip Scone"],
"Dinner": ["Spicy Black Bean Soup", "Salisbury Steaks", "Mushroom Gravy", "Fresh Broccoli Spears", "Roasted Potato Wedges", "Baked Potato", "Chicken Chile Verde Tostada", "Quesadilla w/Roasted Poblano Chile", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Pepperoni Pizza", "Olive Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Chinese Vegetable Stir Fry", "Brown Rice", "Long Grain Rice", "Spinach Salad", "Sourdough Bread", "Kahlua Chocolate Cake"],
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
"Brunch": ["Ruby Flame Grapes", "Watermelon", "Cantaloupe", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "White Pizza w/Bacon & Caramelized Onion", "Pesto and Vegetable Pizza on Wheat", "Pasta Carbonara", "Flour Tortilla", "Applesauce Coffee Cake", "Huevos Rancheros", "Pinto Beans", "Black Bean & Rice Quesadilla", "Roasted Cauliflower with Cumin", "Sweet Potato Soup w/Corn & Chipotle", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Sauteed Veggies", "Banana Chocolate Chip Pancakes", "Sausage Links", "Roasted Breakfast Potatoes", "Sauteed Zucchini with Garlic"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Sweet Potato Soup w/Corn & Chipotle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Tomato Basil Pizza on Wheat", "Fusilli w/Roasted Veg/Herb/Asiago", "White Wine Garlic Sauce with Chicken", "Rotini Pasta", "Mexican Chocolate Cake", "Cheese Bread", "Rotisserie Pork Loin", "Black Magic Plum Sauce", "Oven Browned Potatoes", "White Beans", "Steamed Fresh Broccoli", "Thai Style Chicken Drumstick", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Sushi Brown Rice Grilled Ahi Tuna Bowl", "Vegetable Roll with Brown Rice"],
}
},
],
},
{
"date": "2024-06-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Spanish Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Mardi Gras Eggs with Ham", "Peach Chunk Pancake", "Beans Navy White", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Double Chocolate Bread", "Coconut Raisin Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Beef Chow Mein", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Spicy Kale Caesar Salad", "Turkey Meatloaf", "Turkey Gravy", "Peas", "Stir Fry Vegetables", "Roasted Potato Wedges", "Fettucine Alfredo", "Baked Rigatoni", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Assorted Meat Pizza", "Tomato Pesto Pizza on Wheat", "Cheese Pizza on White", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Lentil and Brown Rice Soup", "Grilled Turkey & Jack on Sourdough", "Sauteed Crookneck Squash", "Baked Potato", "Long Grain Rice", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Beet & Tomato Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Bagels-Breads & Cereals- See for Choices", "Pinch Bread"],
"Dinner": ["Curried Chicken Soup", "Roast Beef", "Mashed Potatoes", "Beef Gravy", "Fresh Steamed Carrots", "Baked Potato", "Chicken Sope", "Bean and Rice Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Black Bean Salsa", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "White Clam Sauce", "Pasta Primavera", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Graham Bread", "French Crumb Apple Pie"],
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
"Brunch": ["Fresh Strawberry", "Sliced Pineapple", "Cantaloupe", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Chicken Chilaquiles", "Mushroom Cream Sauce", "Whole Wheat Penne Pasta", "Blueberry Scone", "Flour Tortilla", "Meatloaf Sandwich", "Mashed Yams", "Grilled Cheese on Sourdough", "White Beans", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham and Cheese", "Buttermilk Pancakes", "Cauliflower w/Sugar Snap Peas", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Bolognese Sauce with Pancetta", "Spaghetti", "Mushroom Cream Sauce", "Whole Wheat Penne Pasta", "Chocolate Chocolate Chip Bar", "Whole Wheat French Bread", "Chicken Chile Verde and Corn Tortillas", "Tortilla Chips & Salsa", "Refried Beans", "Grilled Onion", "Lettuce/Cheese/Tomatoes", "Hoisin Chicken", "Sticky Rice", "Spicy Eggplant & Broc w/Ginger Sauce(vgn", "Steamed Broccoli & Cauliflower", "Yam & Avocado Sushi Roll", "California Club Roll"],
}
},
],
},
{
"date": "2024-06-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Pepper Jack Cheese", "Sticky Rice", "Beef Chop Suey", "Spicy Tofu w/Vegetables & Noodles", "Penne Arrabiata with Chicken (w/nuts)", "Steamed Fresh Carrots", "Green Beans", "Festive Rice Fruit Salad (w/nuts)", "Italian Tossed Greens", "Salami Pizza", "Onion & Jalapeno Pizza", "Cheese Pizza on White", "Potato Cheese Soup", "Grilled Turkey Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Black Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Garlic French Bread", "Toll House Bar", "Karidopita (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Blackened Mahi Mahi", "Creole Beans And Rice", "Sauteed Kale & Collard Greens", "Caesar Salad", "Whole Wheat Spaghetti", "White Wine Garlic Sauce with Chicken", "Pinto Beans", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Onion & Jalapeno Pizza", "Cheese Pizza on White", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Chocolate Chip Scone", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Cream of Mushroom Soup", "Asian Beef Lettuce Wrap", "Fresh Steamed Carrots", "Baked Potato", "Baked Sweet Potato", "Beef Chili Colorado Burrito", "Potato Taco", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Tomato Basil Pizza", "Herb Breadsticks", "Beef Broccoli Teriyaki StirFry Brn. Rice", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Egg Salad", "Three Grain Roll", "Killer Brownie"],
"Dinner": ["Tortilla Soup", "Pork Loin Roast with Garlic & Ginger", "Pineapple Rice", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Grilled Vegetable Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Chorizo Pizza", "Tomato Basil Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Brown Rice", "Marinated Green Beans Salad", "Hawaiian Sweet Bread", "French Peach Crumb Pie (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Buckwheat Black & Blue Parfait (w/nuts(v", "Buckwheat Granola (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Ham & Egg Breakfast Sandwich", "Potatoes O'Brien", "Sourdough French Toast", "Fresh Sauteed Spinach"],
"Lunch": ["Cherry Tomato & White Bean Salad", "Chipotle Hummus & Quinoa Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Pepper Mushroom Garlic Pizza", "Pizza con Chorizo/Corn/Avo/Cilantro", "White Wine Garlic Sauce with Chicken", "Spaghetti Pasta", "Herb Focaccia Bread", "Apple Kuchen (w/nuts)", "Oatmeal Raisin Bar (w/nuts)", "Pulled Pork Buffalo Style Sandwich", "Classic BBQ Sauce", "Egg/Arugula/Herb Tartine", "Pinto Beans", "Cabbage Cilantro Slaw", "Teriyaki Chicken Stir Fry", "Sticky Rice", "Stir Fried Chinese Greens", "California Roll", "Daikon Sushi Roll", "Hamburger", "Sourdough French Toast", "Grilled Cheese and Tomato on Wheat", "Shoestring Fries", "Sriracha Mayonnaise", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Fettuccine Pasta", "White Wine Garlic Sauce with Chicken", "Whole Wheat Penne Pasta", "Brownie Pie", "Herb Focaccia Bread", "Balsamic Roasted Pork Loin", "Pinto Beans", "Red Potatoes with Rosemary", "Steamed Vegetables & Brown Rice", "Brussel Sprouts", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Daikon Roll", "California Roll"],
}
},
],
},
{
"date": "2024-06-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Canadian Bacon", "Strawberry Pancake", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Raspberry Swirl Coffee Cake (w/nuts)(vgn"],
"Lunch": ["Sliced Genoa Salami", "Sliced Roast Beef", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Sweet & Sour Pork", "Asian Vegetable Stir Fry", "Ambrosia Salad (w/nuts)", "Pasta Salad with Grilled Veggies", "Roast Beef Sandwich with Gravy", "Chili and Noodles", "Corn on the Cob", "Fresh Spinach with Garlic", "Smoked Barbeque Chicken Pizza", "Traditional Cheese Pizza on Wheat", "Cheese Pizza on White", "Chicken Rice Soup", "Grilled Chicken Taco", "Grilled Vegetable Burger", "Hot Dog", "Beans Navy White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Whole Wheat Sourdough Bread", "Mexican Wedding Cookie (w/nuts)", "Brownie w/Chocolate Icing"],
"Dinner": ["Brazilian Black Bean Salad", "Red Potato Salad with Dill", "Brown Rice", "Sesame Beef with Broccoli", "Orange Tofu", "Hearty Vegetable Soup", "Pasta Salad with Grilled Veggies", "Chicken Piccata", "Steamed Crookneck Squash", "Sauteed Zucchini", "Steamed Vegetables & Brown Rice", "Rice Pilaf with Mushrooms", "Bolognaise Sauce", "Pasta Pronto", "Sun Dried Tomato Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Smoked Barbeque Chicken Pizza", "Traditional Cheese Pizza on Wheat", "Cheese Pizza on White", "Cheese Bread", "Tres Leches Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Muffin"],
"Lunch": ["Pozole Soup with Condiments", "Shaved Turkey on Wheat", "Sauteed Zucchini with Garlic", "Baked Potato", "Chicken Mole Taco", "Chipotle Tempeh Tacos", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Cheese Tortellini with Marinara", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheddar on White", "Steak Fries", "Caponata Salad", "Garlic French Bread", "Cheesecake Cookie"],
"Dinner": ["Miso Soup", "Buttermilk Fried Chicken", "Mashed Potatoes", "Fresh Corn on the Cob", "Chicken Gravy", "Baked Potato", "Carnitas Taco", "Black Bean & Rice Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Goan Beef Curry w/Coconut Milk (w/nuts)", "Panfried Noodles with Vegetables", "Long Grain Rice", "Brown Rice", "Arugula Salad with Almond (w/nuts)", "Whole Wheat Bread", "German Apple Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Sliced Honeydew", "Pineapple", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Granola Cantaloupe Parfait (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Carribean Coconut Bread (w/nuts)", "Chocolate Chip Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Turkey Bacon", "Huevos Rancheros", "Refried Beans", "Sweet Potato Hash"],
"Lunch": ["Italian Bread Salad", "Chicken Caesar Wrap", "Sliced Turkey", "Egg Salad", "Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Pinto Beans", "Roasted Celery Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Garlic Pizza on Wheat", "Chicken Artichoke Pesto Flatbread", "Fettucine", "Alburro Sauce", "Parmesan Herb Bread", "Chocolate Crinkle Cookie", "Esprosso Coffee Cupcake", "Turkey Pot Pie", "Pita Sandwich w/Hummus & Tabouli", "Pinto Beans", "Fresh Green Beans with Garlic", "Roasted Red Onion &  Zucchini", "Cuban Sandwich", "Seasoned Sweet Potato Halves", "Orange Infused Green Beans", "Calamari Roll", "Tempura Onion Sushi Roll", "BBQ Chicken Sandwich", "Black Bean Burger", "Banana Pancakes", "Shoestring Fries", "Classic BBQ Sauce", "Housemade Spicy Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Roasted Celery Soup", "Garlic Pizza on Wheat", "Risotto with Fresh Vegetables", "Tomato and Roasted Garlic Sauce", "Spaghetti", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Toll House Bar", "Herb Focaccia Bread", "Grilled Chicken Taco", "Chorizo Spiced Potato Quesadilla", "Cilantro & Onion Mixture", "Tomato & Roasted Corn Salsa", "Tortilla Chips and Salsa", "Pinto Beans", "Beef Pad Thai (w/nuts)", "Tofu Vegetable Pad Thai (w/nuts)", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-06-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Chicken Sausage Sandwich", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Banana Bread", "Granola Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Noodles with Vegetables", "Thai Peanut Sauce (w/nuts)", "Mediterranian Couscous (w/nuts)", "Spinach Salad with Honey Dressing", "Cactus Taco", "Asian Fish Taco", "Corn with Red Peppers", "Black Beans", "Sausage Mushroom Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Beet Soup", "Cheeseburger", "Black Bean Burger", "Grilled Cheese Chile & Veggie on Sour(v", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Ginger Basmati Rice", "Focaccia Bread", "Sweet Rice Cake (w/nuts)", "Lemon Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Pork Chow Mein", "Five Spice Vegetable Stir Fry", "Tortilla Soup", "Mediterranian Couscous (w/nuts)", "Indian Chicken Curry (w/nuts)", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Penne Pasta", "Fresh Pesto Sauce", "Spaghetti Pasta", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Mushroom Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hearty Vegetable Soup", "Herb & Garlic Crusted Tilapia", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Chimichanga", "Bean and Cheese Hard Shell Taco", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Mushroom Pizza", "Pineapple Pizza", "Herb Breadsticks", "Korean Spicy Chicken Stew", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Cheddar on Wheat", "Krinkle Cut French Fries", "Black Bean Salad", "Whole Wheat Roll", "Mint Chocolate Chip Cookie"],
"Dinner": ["Split Pea Soup", "Cacciatora Chicken", "Spinach Rice Casserole", "Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef And Bean Burrito", "Chile Relleno Casserole", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Mushroom Pizza", "Pineapple Pizza", "Herb Breadsticks", "Alfredo Sauce w/Chicken/Vegetables", "Fettuccine Pasta", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Kale Arugula Salad with Cranberry", "Roasted Garlic Bread", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Pineapple", "Cantaloupe", "Ruby Flame Grapes", "Honeydew & Berry Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Strawberry Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Wheat Pancakes", "Sausage Links", "Potatoes O'Brien", "Sauteed Zucchini with Garlic"],
"Lunch": ["Green Bean & Cucumber w/Miso", "Roasted Vegetable Panini", "Sliced Roast Beef", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Sopa de Marisco", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Sausage & Mushroom Pizza", "Linguini with Pesto", "Pasta with Grilled Vegetables", "Crusty French Bread", "Vanilla Cupcake w/Strawberry Icing", "M&M Bar (w/nuts)", "Shrimp & Grits w/Fennel & Sausage", "Smokey Tomato Relish", "Pita Chips", "Pinto Beans", "Butternut Squash Hummus", "Hot & Sour Pork Ribbons", "Sauteed Kale", "Cauliflower w/Sugar Snap Peas", "Salmon Roll", "Vegetable Roll", "Grilled Turkey Burger", "Grilled Vegetable and Bean Burrito", "Whole Wheat Pancake", "Steak Fries", "Spicy Mustard Sauce", "Sriracha Mayonnaise", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Sopa de Marisco", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Sausage & Mushroom Pizza", "Cellentani w/Roasted Vegetables & Asiago", "Fettuccine Alfredo", "Butterscotch Brownie w/Fudge (w/nuts)", "Cheese Bread", "Lasagna Bolognese", "Vegetarian Rigatoni", "Pinto Beans", "Sauteed Zucchini with Garlic", "Jerk Chicken", "Red Beans and Rice", "Mashed Yams", "Fresh Vegetable Medley w/Spinach", "Vegetable Roll", "Salmon Roll"],
}
},
],
},
{
"date": "2024-06-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancake (Housemade)", "Machaca de Jalisco Eggs", "Cottage Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Pinch Bread", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["Sliced Ham", "Egg Salad", "Smoked Gouda", "Sliced Natural Swiss Cheese", "Sticky Rice", "Beef Stir Fry with Spicy Sauce", "Tofu Vegetable Kung Pao (w/nuts)", "Colorful Coleslaw", "Crunchy Fruit Salad (w/nuts)", "Chicken Tikka Masala", "Sauteed Summer Squash with Herbs", "Couscous", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Greek Avgolemono Soup", "Grass Fed Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Pinto Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pesto Roll", "Caramel Flan", "Nut and Seed Bar (w/nuts)"],
"Dinner": ["Garden Wild Rice Salad", "Antipasto Salad", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Stir Fry Vegetables with Tofu", "Cream of Broccoli Soup", "Caesar Salad", "Beef and Bean Tostada", "Fresh Broccoli Spears", "Fresh Vegetable Medley", "Mexican Rice", "Fire Roasted Tomato Chipotle Salsa", "Fettucine Alfredo", "Pasta Primavera", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Olive Whole Wheat Bread", "Ginger Cheesecake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Ham and Cheese Crepe", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Cranberry Orange Muffin", "Blueberry Scone"],
"Lunch": ["Turkey Noodle Soup", "Chicken Caesar Sandwich on Focaccia", "Fresh Broccoli Spears", "Baked Potato", "Beef Nachos", "Bean & Cheese Sope", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Hawaiian Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Thai Chicken Stir Fry w/Peanut (w/nuts)", "Spicy Veg. Stir Fry w/Brown Rice", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Black Bean Burger", "Grilled Hot Dog", "Steak Fries", "Couscous Salad with Tomato & Herb", "Pesto Rolls", "Yellow Cupcake w/Chocolate Ganache"],
"Dinner": ["French Onion Soup", "Grilled Chicken w/ Ginger", "Roasted Potato Halves", "Bok Choy w/Fresh Garlic & Ginger", "Baked Potato", "Turkey Taco", "Roasted Vegetable Quesadilla", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "Hawaiian Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Stir Fry Shrimp and Vegetables", "Indonesian Tofu Fried Rice", "Long Grain Rice", "Brown Rice", "Three Bean Salad", "Focaccia Bread", "Chocolate Chip Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Watermelon", "Cantaloupe", "Baked Oatmeal with Apple & Cinnamon", "Buckwheat Granola (w/nuts)", "Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Pumpkin Muffins (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chinese Stir-Fried Tomatoes & Eggs", "Strawberry Pancakes", "Hash Browns", "Sauteed Kale"],
"Lunch": ["Ensalada de Fruta con Tajin", "Crispy Fried Tomato & Bacon Sandwich", "Sliced Turkey", "Sliced Genoa Salami", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Quinoa", "Soup Gazpacho", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Seafood Ceviche", "Macaroni & Cheese", "Grilled Asparagus", "Garlic French Bread", "Cornbread Jalapeno Muffin", "Honey Butter", "Rocky Road Tart (w/nuts)", "Red White & Blueberry Shortcake", "Pork Spare Ribs", "Habanero Peach Guava BBQ Sauce", "Ranchero Beans", "Tangy Apple Cabbage Slaw", "Soup Gazpacho", "Elote Salad Bowl", "Grilled Achiote Chicken", "Fiery Spiced Potatoes", "Grilled Zucchini & Tomatoes w/Pesto", "Grilled Ahi Tuna Roll", "Corn & Plantain Sushi Bowl", "Tri Tip Sandwich with Chimichurri Sauce", "Bacon Hot Dogs", "Sweet Potato Fries", "Nutella & Banana Crepe (w/nuts)", "Chipotle Mayo", "Chimichurri Sauce", "Caramelized Onion"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Tomato Basil Soup", "Pepperoni Pizza", "Greek Pasta w/Feta/Tom &Spinach", "Mustard Chicken Sauce", "Penne Pasta", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Very Chocolate Cake w/Choc Icing", "Hawaiian Sweet Bread", "Mojo Roasted Chicken (Pollo Asado)", "Cuban Style Black Beans & Rice", "Chipotle Roasted Potatoes", "Sauteed Kale & Collard Greens", "Thai Chicken Taco", "Grilled Pineapple/Mango Salsa", "Vegetable Fried Rice", "Bang Bang Broccoli", "Asparagus & Egg Roll", "California Club Roll with Brown Rice"],
}
},
],
},
];
export default diningMenu
