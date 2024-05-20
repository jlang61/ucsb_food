const diningMenu = [
{
"date": "2024-05-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Whole Wheat Pancake (Housemade)", "Chilaquiles (No Egg)", "Sausage Patty", "Home Fried Potatoes", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Ginger with Cardamom Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Cheddar Cheese", "Sticky Rice", "Chicken Stir Fry with Green Beans", "Spicy Tofu w/Vegetables & Noodles", "Bermuda Salad", "Japanese Noodle Salad", "Smoked Pork Loin and Gouda Sandwich", "Red Salsa", "Fresh Cauliflower", "Fresh Broccoli Spears", "Chili Black Bean", "Tomato Basil Pizza on White", "Salami Pizza", "Cheese Pizza on White", "Gumbo Soup", "Charburger", "Black Bean Burger", "Falafel on Pita with Raita Sauce", "Pinto Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Quinoa", "Irish Soda Bread", "Jelly Bar Spritz", "Peanut Butter Fudge Cupcake (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Cashew Veggie Tofu (w/nuts)", "Teriyaki Sauce", "Miso Broth with Udon Noodles", "Bermuda Salad", "Pork Balchao", "North African Stew", "Fresh Broccoli Spears", "Sauteed Fresh Carrots", "Basmati Rice", "Fettucine Alfredo", "Penne Pasta", "Tomato and Leek Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Salami Pizza", "Tomato Basil Pizza on White", "Cheese Pizza on White", "Whole Wheat Bread", "Boston Cream Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Chorizo Breakfast Burrito", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Tortilla Soup", "Spicy Asian Vegetable Wrap", "Kale/Peppers and Garlic", "Baked Sweet Potato", "Baked Potato", "Pork Chile Verde", "Sweet Corn Tamale Casserole", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pesto Artichoke Pizza", "Margherita Pizza", "Herb Breadsticks", "Greek Pasta w/Feta Tomato & Spinach", "Wheat Pasta w/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Grilled Chicken Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Cheese/Tomatoes/Chiles", "Steak Fries", "Strawberry Radicchio Salad (w/nuts)", "Garlic French Bread", "Chocolate Chocolate Chip Cookie (w/nut(v"],
"Dinner": ["French Onion Soup", "Herb Chicken Quarters", "Orzo Pasta with Vegetables", "Organic Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Bean & Cheese Nachos", "Yellow Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Pesto Artichoke Pizza", "Margherita Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry & Brown Rice", "Dragon Noodles", "Long Grain Rice", "Wild Rice Blend", "Lemon Herb Quinoa Salad", "Three Grain Bread", "Fresh Strawberry Pie"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Fresh Strawberry", "Honeydew Melon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Muffin", "Assorted Bagels & Condiments", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Thick Egg Bread French Toast", "Sausage Patty", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spicy Carrot Salad", "Italian Tomato Panini", "Sliced Turkey", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Black Beans", "Swiss Chard & Lentil Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Pepperoni Pizza", "Penne Pasta with Pesto", "Risotto with Fresh Vegetables", "Three Grain Bread", "Apple Crisp", "Pound Cake", "Grilled BBQ Chicken Sandwich", "Classic BBQ Sauce", "Coleslaw with Vinagrette", "Fresh Sauteed Spinach", "Pinto Beans", "Homestyle Pozole with Condiments", "Pozole with Condiments", "Spicy Scallop Sushi Roll", "Vegetable Roll", "Hamburger", "Thick Egg Bread French Toast", "Tomato Bruschetta Crostini", "Shoestring Fries", "Housemade Ketchup", "Sriracha Mayonnaise", "Roasted Tomato Salsa"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Swiss Chard & Lentil Soup", "Pepperoni Pizza", "Penne w/Butternut Squash Sauce", "Fettuccini Caponata", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Orange Cake with Orange Icing", "Hawaiian Sweet Bread", "Grilled Chicken Taco", "Cilantro & Onion Mixture", "Thick Chile Salsa", "Rice with Cilantro & Onions", "Fresh Cauliflower & Carrots", "Pinto Beans", "Sweet & Sour Pork", "Sweet & Sour Tofu & Vegetables", "Sticky Rice", "Fresh Green Beans with Garlic", "Spicy Scallop Sushi Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-05-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Thick French Toast", "Bacon", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread Pudding", "Bran Muffin"],
"Lunch": ["Sliced Ham", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Vietnamese Vermicelli Pork", "Rice Noodles with Black Bean Sauce", "Santa Fe Salad", "Ambrosia Salad (w/nuts)", "Chicken Spinach & Mushroom Lasagna", "Fresh Herb Polenta with Marinara", "Green Beans", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Chickpea Vegetable Soup", "Charburger", "Grilled Vegetable Burger", "Hot Dog", "Beans Navy White", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Banana Chocolate Bar", "Pao de Queijo", "Mandarin Orange Cake"],
"Dinner": ["Coleslaw", "French Potato Salad", "Sticky Brown Rice", "Kung Pao Beef (w/nuts)", "Stir Fry Vegetables with Tofu", "Broccoli Garlic Soup", "Caesar Salad", "Cilantro Lime Salmon", "Fire Roasted Tomato Chipotle Salsa", "Black Bean Enchilada", "Steamed Zucchini", "Spanish Corn", "Spanish Rice", "Fettuccine with Chicken, Olives & Garlic", "Fusilli with Roasted Vegetables", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Assorted Meat Pizza", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Pumpkin Cheesecake Pie", "Graham Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Raspberry Cream Coffee Cake (w/nuts)"],
"Lunch": ["Cream of Mushroom Soup", "Chicken Caesar Wrap", "Steamed Carrots & Zucchini", "Baked Potato", "Chicken and Bean Burrito", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Asian Pork w/Green Bean & Brown Rice", "Lemon Ginger Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheddar on Wheat", "Krinkle Cut French Fries", "Apple Blu Cheese Walnut Salad(w/nuts)", "Whole Wheat Roll", "Toll House Bar"],
"Dinner": ["Vegetable Beef Soup", "Fish Cake", "Lemon Beurre Blanc", "Spinach Rice Casserole", "Crookneck Squash & Herbs", "Baked Potato", "Grilled Chicken & Bean Burrito", "Chipotle Tempeh Tacos", "Refried Beans (for Pizza)", "Mexican Rice", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Roasted Tomato & Basil Wheat Pizza", "Herb Breadsticks", "Stir Fry Beef and Vegetables", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Tossed Italian Greens", "Cornbread", "Pumpkin Pie"],
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
"Breakfast": ["Vanilla Yogurt", "Whole Plain Greek Yogurt", "Honeydew Melon", "Cantaloupe", "Fresh Strawberry", "Buckwheat Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Make Your Own Waffle", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Irish Soda Bread", "Morning Glory Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Tuscan Scrambled Eggs", "Sausage Biscuits & Gravy", "Diced Potatoes with Onions", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chipotle Chicken Wrap", "Egg Salad", "Sliced Genoa Salami", "Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Chicken Gumbo Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Red Onion & White Bean Flatbread", "Sausage Mushroom Pizza", "Fettucine", "Tomato Cream Sauce", "Whole Wheat Roll", "Cornmeal Berry Cake", "Lemon Bar", "Beef Soft Tacos", "Roasted Tomato Salsa", "Veggies for Gordas", "Fresh Tortilla Chips", "Pinto Beans", "Latin Bowl", "Sauteed Kale", "Seasoned Sweet Potato Halves", "Calamari Roll", "Daikon Roll", "Grilled Turkey Burger", "Grilled Swiss on Sourdough", "Sausage Biscuits & Gravy", "Steak Fries", "Spicy Mustard Sauce", "Chipotle Aioli", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Gumbo Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Garlic Pizza on Wheat", "Macaroni & Cheese", "Banana Cake & Penut Butter Icing(w/nut)v", "Sourdough Bread", "Chicken Marsala", "Rice Pilaf", "Pinto Beans", "Carrot & Zucchini with Lemon Butter", "Roasted Mixed Vegetables", "Drunken Noodles with Chicken", "Miso Broth with Udon Noodles", "Braised Bok Choy", "Calamari Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-05-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Cage Free Scrambled Eggs w/Ham & Cheese", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Cranberry Orange Bread (w/nuts)", "Carrot Muffin"],
"Lunch": ["Sliced Roast Beef", "Roasted Vegetables", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "African Spiced Seitan", "Couscous", "Grilled Rockfish with Chermoula Sauce", "Grilled Hoki Fish with Chermoula Sauce", "Chinese Broccoli Salad", "Tossed Antipasta Salad", "Chicken Club Wrap", "Peas", "Vegetable Fried Rice", "Sausage Mushroom Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Classic French Onion Soup with Croutons", "Charburger", "Gardenburger", "Corn Quesadilla", "Steak Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Bread Olive", "Black and White Brownie", "White Choc Macadamia Cookie (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Ground Beef Fajita", "Vegetable Fajita", "Refried Beans", "Spanish Rice", "Chicken Rice Soup", "Chinese Broccoli Salad", "Roast Leg of Pork", "Chili and Noodles", "Corn On The Cob", "Steamed Fresh Carrots", "Roasted Potato Wedges", "Whole Wheat Spaghetti", "Meat Sauce", "Fresh Tomato Basil Garlic Pasta", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Mushroom Pizza", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Roasted Garlic Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Chilaquiles de Queso (No Egg)", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sticky Bun (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Tomato Rice Soup", "Pulled Pork Buffalo Style Sandwich", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Bean and Rice Wet Burrito", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Beef Teriyaki Stir Fry & Brown Rice", "Ma Po Tofu", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Ham & Swiss Sandwich", "Shoestring French Fries", "Marinated Italian Vegetable Salad", "Wheat Germ Roll", "Pecan Pie Bar (w/nuts)"],
"Dinner": ["Carrot and Ginger Soup", "Lasagna", "Brown Rice Artichoke Casserole", "Carrots with Tarragon", "Baked Potato", "Baked Sweet Potato", "Beef Enchilada", "Potato Taquito", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Sweet & Sour Chicken", "Vegetable Lo Mein", "Long Grain Rice", "Brown Rice", "Pasta Salad with Spinach & Feta", "Pizza Bread", "Fresh Orange Cake"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Pineapple", "Honeydew Melon", "Fresh Strawberry", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Turkey Bacon", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Greek Chicken Wrap", "Sliced Turkey", "Sliced Roast Beef", "Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur", "Cherry Tomato Goat Cheese Herb Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Mushroom Carbonara", "Herb Focaccia Bread", "Pound Cake", "Mint Chocolate Chip Cookie", "Baked Ham & Turkey Hawaiian Sandwich", "Pineapple Fried Rice w/Tofu", "Pinto Beans", "Carrot & Zucchini with Lemon Sauce", "Sweet and Sour Chicken", "Sticky Rice", "Vegetable Medley Stir Fry", "Yam & Avocado Sushi Roll", "Spicy Tuna Roll", "Cheeseburger", "Bean and Cheese Burrito", "Buttermilk Pancakes", "Shoestring Fries", "Fire Roasted Tomato Chipotle Salsa", "Sriracha Mayonnaise", "Classic BBQ Sauce"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Cream of Broccoli Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur", "Cherry Tomato Goat Cheese Herb Pizza", "Grilled Salmon Pasta w/Roma Tomato", "Mushroom Carbonara", "Herb Focaccia Bread", "Rocky Road Tart (w/nuts)", "Grilled Tuscan Chicken", "Garlic French Bread", "Pasta with Olive Oil", "Pinto Beans", "Sauteed Zucchini with Garlic", "Cajun Chicken Jambalaya", "Long Grain Rice", "Red Beans & Rice", "Roasted Mixed Vegetables", "Yam & Avocado Sushi Roll", "Spicy Tuna Roll"],
}
},
],
},
{
"date": "2024-05-23",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat French Toast", "Croissant with Ham & Cheese", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Banana Nut Muffin (w/nuts)"],
"Lunch": ["Argentinian Grilled Vegetable", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Three Bean Salad", "Confetti Pasta Salad", "Chicken Salad Sandwich on Pita", "Chili and Noodles", "Sauteed Zucchini", "Steamed Crookneck Squash", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Carrot and Ginger Soup", "Grass Fed Burger", "Gardenburger", "Grilled Swiss/Bacon on Sourdough", "Krinkle Cut Fries", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Roll Herb Whole Wheat", "Mocha Coconut Pudding (w/nuts)", "Baba au Rum"],
"Dinner": ["Armenian Salad", "Couscous Salad with Tomato & Herb", "Sticky Rice", "Teriyaki Chicken Stir Fry", "Tofu Vegetable Stir Fry", "Spicy Black Bean Soup", "Caesar Salad", "Grilled Ham with Honey Glaze", "Stuffed Zucchini", "Baked Acorn Squash", "Fresh Spinach with Garlic", "Scalloped Potatoes", "Rotelli Pasta", "Roasted Pepper Tomato Sausage Sauce", "Rigatoni Pasta", "Marinara Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Smoked Barbeque Chicken Pizza", "Pineapple & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Pesto Bread", "White Cake with Raspberry Filling"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bread Pudding with Whiskey Sauce", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chocolate Cherry Bread"],
"Lunch": ["Coconut Carrot Soup (w/nuts)", "Roasted Pork Loin Sandwich w/Gouda", "Fresh Broccoli Spears", "Baked Potato", "Chicken Mole Enchiladas", "Potato Taco", "Green Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Sesame Chicken Stir Fry", "Spicy Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Black Bean Burger", "Grilled Turkey & Jack on Sourdough", "Krinkle Cut French Fries", "Chinese Chicken Salad (w/nuts)", "Sourdough Roll", "Oatmeal Raisin Cookie (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Grilled Cajun Chicken Breast", "Rice Pilaf", "Vegetable Medley", "Baked Potato", "BBQ Chicken Quesadilla", "Bean & Cheese Sope", "Green Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Penne Arrabiata with Chicken", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Greek Salad", "Crusty French Bread", "Chocolate Espresso Torte"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Orange Apricot Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Apple Cinnamon Oatmeal Pancake", "Fried Potatoes & Onion", "Sauteed Fresh Cauliflower"],
"Lunch": ["Zucchini Quinoa Green Bean Salad", "Queso with Roasted Chiles Panini", "Sliced Ham", "Grilled Chicken Breast", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Wild Rice Country Blend", "Chicken Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Caprese Flatbread w/Balsamic Redux", "Penne with Chicken and Mushrooms", "Greek Tomato Sauce", "Linguini Pasta", "Potato Bread", "Oatmeal Craisin Cookie", "Lime Bar", "Tacos Al Pastor", "Pinto Beans", "Cilantro & Onion Mixture", "Avocado Salsa", "Rice with Corn & Roasted Chiles", "Chicken Tikka Masala", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Mushroom Lentil Burger", "Caramelized Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Wild Rice Country Blend", "Chicken Rice Soup", "Pepperoni Pizza", "Alburro Sauce", "Fettuccine Pasta", "Penne with Chicken and Mushrooms", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Potato Bread", "White Cupcake with Buttercream Icing", "Char Grilled Chicken Thigh", "Classic BBQ Sauce", "Chipotle Bean Taquito", "Quinoa Salad", "Chipotle Roasted Potatoes", "Sauteed Kale", "Chile Colorado Burrito", "Refried Beans", "Rice with Cilantro & Onions", "Steamed Fresh Broccoli", "Calamari Roll", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-05-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Strawberry Pancake", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Blueberry Coffee Cake"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Chicken Fajitas", "Vegetable Fajita", "Refried Beans", "Spanish Rice", "Pasta Salad with Smoked Salmon", "Crunchy Fruit Salad (w/nuts)", "Beef and Bean Tostada", "Vegetable Tostada", "Corn with Red Peppers", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Danish Cauliflower Cheese Soup", "Cheeseburger", "Black Bean Burger", "Grilled Swiss & Tomato on Wheat", "Black Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Jalapeno Cheddar Roll", "Baklava (w/nuts)", "Cowboy Cookie Bar"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Ginger Beef Stir Fry", "Stir Fry Noodles with Vegetables", "Far East Vegetable Soup", "Pasta Salad with Smoked Salmon", "Halal Rotisserie Chicken", "Potato Gorda with Corn", "Chili Black Bean", "Vegetable Stir Fry", "Baby Carrots with Tarragon", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Whole Wheat Spaghetti", "Garden Vegetable Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Pepperoni Pizza", "Arugula & Artichoke Pizza on White", "Cheese Pizza on White", "Whole Wheat Sourdough Bread", "Black Forest Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Greek Eggs", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "BBQ Chicken Sandwich", "Carrots & Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Black Bean Tostada", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Grilled Pizza w/Pesto/Mozz/Arugula", "Herb Breadsticks", "Penne Pasta", "Creamy Pesto Sauce", "Whole Grain Rotin/Tom/Basil/Garlic", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Chicken Corn Dog", "Shoestring French Fries", "Pear Gorgonzola &Walnut Salad (w/nuts)(v", "Buttermilk Biscuit", "Raisin Rum Rice Pudding"],
"Dinner": ["Chicken Vegetable Soup", "Rock Cod w/Red Curry Sauce&Rice(w/nut)", "Steamed Zucchini", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Chipotle Bean Flauta", "Yellow Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fresh Tomato Salsa", "BBQ Chicken Pizza", "Grilled Pizza w/Pesto/Mozz/Arugula", "Herb Breadsticks", "Korean Beef Stir Fry with Brown Rice", "Vegetable Noodle Stir Fry", "Long Grain Rice", "zCountry Wild Rice Blend", "Pasta Salad w/Chicken & Sundried Tomato", "Cream Cheese Pie", "Cornbread"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Ruby Flame Grapes", "Cantaloupe", "Honeydew Melon", "Make Your Own Waffle", "Buckwheat Granola (w/nuts)", "Buckwheat Honeydew Berry Parfait(w/nut(v", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Banana Chocolate Chip Muffin", "Raspberry Swirl Coffee Cake(w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Grilled Ham", "Roasted Breakfast Potatoes", "Sauteed Cabbage & Tomatoes"],
"Lunch": ["Veg & Quinoa Salad w/Asian Vin", "Goat Cheese & Tomato Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Potato", "Brown Rice", "Vegetable Beef Soup", "Raita Sauce", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Meatball Pizza", "Spicy Marinara Sauce", "Whole Wheat Penne Pasta", "Fettuccine Alfredo", "Onion Bread", "Peanut Butter Bar (w/nuts)", "Cream Cheese Brownie Pie (w/nuts)", "Eggs Benedict", "Potato Latkes", "Pinto Beans", "Calabaza con Queso", "General Tso's Chicken", "Sticky Rice", "Fresh Vegetable Medley", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Chicken Club Sub", "Buttermilk Pancakes", "Cheese Quesadilla", "Crinkle Cut French Fries", "Salsa", "Housemade Ketchup", "Caramelized Onion Compote"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Vegetable Beef Soup", "Raita Sauce", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Meatball Pizza", "Orzo Pasta with Vegetables", "Spicy Marinara Sauce", "Spaghetti", "Homemade Onion Bread", "Confetti Cake with Buttercream", "Herb Marinated Rotisserie Chicken", "Garlic Roasted Red Potatoes", "Southwest Quinoa & Black Bean Bake", "Pinto Beans", "Seafood Creole", "Seasoned Sweet Potato Halves", "Seasoned Vegetable Medley", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi"],
}
},
],
},
{
"date": "2024-05-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Turkey", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "White Bean Basque Soup", "BBQ Chicken Sandwich", "Stir Fry Vegetables", "Roasted Potato Wedges", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Arroz con Leche", "Buttermilk Pancake", "Grilled Ham with Honey Glaze", "Beans Navy White", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Maple Pecan Scone (w/nuts)", "Strawberry Bread", "Soy Milk", "Banana", "Grape Jelly", "White Bean Basque Soup", "Baked Sweet Potato"],
"Dinner": ["Sticky Rice", "Pork Fried Rice", "Vegetable Chow Mein", "Vegetable Beef Soup", "Caesar Salad", "Beef Meatloaf", "Fresh Vegetable Medley", "French Cut Green Beans", "Risotto with Fresh Vegetables", "Mashed Potatoes", "Whole Wheat Penne Pasta", "Chicken Sausage & Mushroom Sauce", "Pasta Primavera", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Chicken Florentine Pizza w/White Sauce", "Black Olive Pizza on Wheat", "Cheese Pizza on White", "Cornbread with Honey Butter", "Devil's Food Cake with Icing", "Organic Nonfat Milk", "Fuji Apple", "Red Wine Vinegar", "Lemon", "Cheddar Cheese", "Celery", "Shredded Carrot", "Pepita", "Fresh Spinach", "Green Beans", "Brown Rice"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chicken Vegetable Soup", "Grilled Pastrami & Mozzerella on Sourdou", "Steamed Carrot & Corn & Peas", "Baked Potato", "Long Grain Rice", "Assorted Meat Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Chicken Sausage Patty", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Santa Fe Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Minestrone Soup", "Roast Beef", "Fresh Broccoli Spears", "Couscous with Vegetables", "Baked Potato", "Ground Beef and Bean Tostada", "Chile Corn Zucchini Soft Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Assorted Meat Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Beef Pad Thai (w/nuts)", "Tofu Vegetable Pad Thai (w/nuts)", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Sourdough Bread", "Apple Cobbler"],
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
"Brunch": ["Cantaloupe", "Grapefruit Halves", "Seedless Red Grape", "Cinnamon Apple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Raita Sauce", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Whole Wheat Waffles", "White Wine Garlic Sauce with Chicken", "Rotini Pasta", "Flour Tortilla", "Pumpkin Bread (w/nuts)", "Black Bean Chilaquiles", "Fried Eggs", "Roasted Yam w/Rosemary & Chile", "Pinto Beans", "Minestrone Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Minestrone Soup", "Raita Sauce", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Quattro Formaggio Pizza on Wheat", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "Lasagna Chicken/Spinach/Mush", "North African Stew", "Pinto Beans", "Steamed Fresh Broccoli", "Teriyaki Beef Rice Bowl", "Thai Tofu Curry w/ Vegetables", "Spinach with Fresh Garlic & Ginger", "Salmon Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-05-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Dilled Veggie Barley Soup", "Chicken Pot Pie", "Creole Beans And Rice", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Oatmeal", "Breakfast Quesadilla", "Sausage Biscuits & Gravy", "Black Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Raspberry Muffin", "Zucchini Bread (w/nuts)", "Soy Milk", "Navel Orange", "Dilled Veggie Barley Soup", "Mixed Vegetables", "Creole Beans And Rice"],
"Dinner": ["Sticky Rice", "Teriyaki Beef", "Tofu Teriyaki Rice Bowl", "Ham & Navy Bean Soup", "Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Spanish Rice", "Baked Acorn Squash", "Peas", "Penne Pasta", "Meat Sauce", "Linguini Pasta", "Fresh Basil Pesto", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Garlic Pizza Sticks with Marinara", "Cheese Pizza on White", "Hawaiian Sweet Bread", "Tres Leches Cake", "Organic Nonfat Milk", "Fuji Apple", "Raisin", "Honey", "Granulated Peanut", "Whole Plain Greek Yogurt", "Baked Acorn Squash", "Indian Lentils w/Long Grain Rice"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Hearty Vegetable Soup", "Turkey Sub Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Long Grain Rice", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Egg Whites", "Cage Free Scrambled Eggs", "Scrambled Eggs w/ Cheese & Mushroom", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Spinach Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Raisin Buttermilk Scone", "Pumpkin Muffin (w/nuts)"],
"Dinner": ["Miso Soup", "Char Grilled Pork Chop", "Steamed Vegetables & Rice", "French Cut Green Beans", "Baked Potato", "Chicken Bean & Rice Burrito", "Bean and Rice Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Sausage Pizza", "Cheese Pizza", "Herb Breadsticks", "Penne with Chicken & Mushrooms", "Pasta Pronto", "Long Grain Rice", "Brown Rice", "Broccoli Almond Salad (w/nuts)", "Graham Bread", "Italian Cream Cake (w/nuts)"],
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
"Brunch": ["Cantalope", "Grapefruit Halves", "Seedless Red Grape", "Cinnamon Apple Granola (w/nuts)", "Peach and Cream Oatmeal Bake", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Raita Sauce", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Penne Pasta", "Chilaquiles (No Egg)", "Flour Tortilla", "Blueberry Scone", "Breakfast Burrito", "Tortilla Chips & Salsa", "Pinto Beans", "Kale with Fresh Garlic", "Caldo de Marisco", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Sauteed Veggies", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Pozole Verde", "Italian Sausage & Basil Stromboli", "Fettuccine with Ham and Peas", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "Raita Sauce", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Cream Cheese Pie", "Whole Wheat French Bread", "Chicken Piccata", "Roasted Potato Wedges", "Quinoa Pilaf w/Cardamom (w/nuts)", "Pinto Beans", "Roasted Broccoli", "Vindaloo Chicken", "Sticky Rice", "Thai Vegetable Fried Noodles(w/nuts)", "Steamed Broccoli & Cauliflower", "Tempura Onion Roll", "California Club Roll"],
}
},
],
},
];
export default diningMenu
