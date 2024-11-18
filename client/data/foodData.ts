const diningMenu = [
{
"date": "2024-11-18",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Thick French Toast", "Chicken Sausage Patty", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Whole Wheat Banana Bread"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Sliced Jack Cheese", "Sliced Smoked Gouda", "Sticky Rice", "Vietnamese Vermicelli Pork", "Vegetable Stir Fry", "Greek Calamari Scallop Salad", "Coleslaw w/ Vinaigrette Dressing", "Chicken Enchilada", "Mixed Vegetables", "Refried Beans", "Mexican Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Spinach Lentil Soup", "Charburger", "Gardenburger", "Reuben Sandwich", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Quinoa", "Garlic Roll", "Chocolate Cupcake w/Choc Icing", "Butterscotch Bar (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Teriyaki Chicken Stir Fry", "Vegetable Stir Fry", "Teriyaki Sauce", "Hearty Vegetable Soup", "Coleslaw w/ Vinaigrette Dressing", "Roast Beef", "Steamed Crookneck Squash", "Fresh Cauliflower", "Oven Roasted Red Potatoes", "Whole Wheat Spaghetti", "Meat Sauce", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Basmati Rice", "Smoked Barbeque Chicken Pizza", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Onion Walnut Bread (w/nuts)", "White Cake with Raspberry"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Blintz with Strawberry Compote", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Yogurt Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Spicy Navy Bean Soup", "Sicilian Sandwich", "Carrots & Broccoli", "Baked Sweet Potato", "Baked Potato", "Chicken Sope", "Vegetable Corn Taco", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Sesame Beef with Broccoli", "Teriyaki Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Krinkle Cut French Fries", "Black Bean Salad", "Yeast Roll", "Lemon Cookie"],
"Dinner": ["Spicy Black Bean Soup", "Pork Loin Roast", "Vegetable Saute", "Scalloped Potatoes", "Baked Potato", "Baked Sweet Potato", "Chicken Hard Shell Taco", "Black Bean and Rice Burrito", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Spaghetti Pasta", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "Mediterranean Orzo Pasta Salad", "Focaccia Bread", "Chocolate Chip Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Honeydew Melon", "Sliced Pineapple", "Watermelon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Baked Oatmeal with Peach & Blueberry", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Muffin", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sourdough French Toast", "Sausage Patty", "Western Hash Brown", "Steamed Fresh Broccoli"],
"Lunch": ["Harissa Chicken Bulgur Apricot Salad", "Greek Chicken Wrap", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Mushroom & Sage Flatbread", "Gnocchi Mushroom Corn & Sage Butter", "White Clam Sauce", "Linguini Pasta", "Potato Bread", "Oatmeal Craisin Cookie", "Peach Crumb Pie (w/nuts)", "Pulled Pork Buffalo Style Sandwich", "Ranch Potato Salad", "Pinto Beans", "Bleu Cheese Dressing", "Celery Stick", "Honey Lime BBQ Chicken Thigh", "Sticky Rice", "Stir Fried Chinese Greens", "Calamari Roll", "Cucumber & Avocado Roll", "Grilled Turkey Burger", "Sourdough French Toast", "Falafel Sandwich", "Sweet Potato Shoestring Fries", "Tahini Sauce", "Raita Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Roasted Garlic Onion & Pepper Pizza", "Penne with Cherry Tomato/Herb", "Creamy Rosemary Sauce", "Linguini Pasta", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Banana Cream Pie", "Hawaiian Sweet Bread", "Roast Pork", "Dijon Cream Sauce", "Fried Potatoes and Onions", "Fresh Cauliflower & Carrots", "Pinto Beans", "Fresh Green Beans with Garlic", "Chicken Char Siu", "Sticky Rice", "Vegetable Chow Mein", "Spinach Stir Fried with Garlic", "Calamari Sushi Plate", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-11-19",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Apple Crepe w/Caramel Sauce", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Fiesta Vegetable Salad", "Japanese Noodle Salad", "Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Chicken Noodle Soup", "Char Burger", "Black Bean Burger", "Krinkle Cut Fries", "Grilled Turkey & Swiss on Sourdough", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Panna Cotta", "Cheese Roll", "Chocolate Chip Cookie"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Coconut & Peanut Curry (w/nuts)", "Tofu Vegetable Coconut Curry (w/nut)(vgn", "Cream of Broccoli Soup", "Fish & Chips w/Tartar Sauce", "Corn", "Stir Fry Vegetables", "Caesar Salad", "Linguini Pasta", "White Clam Sauce", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake", "Donut Muffin"],
"Lunch": ["Turkey Noodle Soup", "Ginger Peanut Tofu Wrap (w/nuts)", "Sauteed Zucchini with Garlic", "Baked Potato", "Ground Beef Soft Corn Taco", "Roasted Vegetable Quesadilla", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Penne with Rosemary Cream Sauce", "Linguini Pasta", "Mushroom Pepper Marinara", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Tuna Melt on Sourdough", "Shoestring French Fries", "Jicama Salad", "Roasted Garlic Roll", "Toll House Bar"],
"Dinner": ["Potato Leek Soup", "Blackened Catfish", "Stuffed Zucchini", "Savory Rice", "Vegetable Medley", "Baked Potato", "Chicken Mole Taco", "Bean and Cheese Hard Shell Taco", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry w/Polynesian BBQ Sauce", "Vegetable Tagine", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Cornbread", "German Apple Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Cantaloupe", "Sliced Pineapple", "Grapefruit Halves", "Buckwheat Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Raspberry White Chocolate Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Potatoes O'Brien", "Buttermilk Pancake", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Pepperoni Pizza", "Penne Pasta", "Tomato Cream Sauce", "Whole Wheat French Bread", "Lemon Bar", "Peanut Butter Fudge Cupcake (w/nuts)", "Grilled Chicken Taco", "Cilantro & Onion Mix", "Fire Roasted Tomato Salsa", "Fresh Tortilla Chips", "Pinto Beans", "Vietnamese Beef Sub (Banh Mi)", "Sesame Asian Slaw Salad", "Stir Fried Bok Choy", "Salmon Roll", "Daikon Roll", "Hamburger", "Grilled Swiss & Tomato on WW", "Buttermilk Pancake", "Steak Fries", "Sriracha Mayonnaise", "Tahini Sauce", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Pepperoni Pizza", "Tomato Cream Sauce", "Fettuccine Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Apple Crisp", "Sourdough Bread", "Cheese Enchilada", "Spiced Beef Taco", "Mexican Rice", "Pinto Beans", "Honey Sriracha Glaze Brussel Sprouts", "Teriyaki Chicken Stir Fry", "Long Grain Rice", "Braised Bok Choy", "Steamed Fresh Broccoli", "Daikon Roll", "Salmon Sushi Plate"],
}
},
],
},
{
"date": "2024-11-20",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chorizo and Eggs", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Strawberry White Chocolate Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Valenciana Paella", "Quinoa Salad w/Lemon Herb Veggies", "Salsa Salad", "Philly Cheese Steak Sandwich", "Spanakopita Triangles (V)", "Corn", "Indian Lentils w/Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Swiss & Tomato on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Black Beans", "Cheesecake Bar (w/nuts)", "Whole Wheat Bread", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Beef Broccoli & Mushroom Stir Fry", "Vegetable & Tofu Stir Fry", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Mahi Mahi Veracruz", "Steamed Zucchini", "Sauteed Fresh Carrots", "Oven Roasted Red Potatoes", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Ham & Pineapple", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Parmesan Herb Bread", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Cream of Mushroom Soup", "Tilapia with Red Curry Sauce (w/nuts)", "Long Grain Rice", "Bok Choy with Garlic & Ginger", "Baked Sweet Potato", "Baked Potato", "Pork Chile Verde Tostada", "Chipotle Tempeh Tacos", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Teriyaki Chicken Stir Fry & Brown Rice", "Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Grilled Chicken Burger", "Black Bean Burger", "Grilled Swiss & Tomato on 100% Wheat", "Steak Fries", "Tabouli Salad", "Cheese Onion Roll", "Yellow Cupcake with Buttercream"],
"Dinner": ["Chicken Rice Soup", "Lasagna", "Spinach Rice Casserole", "Green Beans", "Baked Sweet Potato", "Baked Potato", "Turkey Hard Taco", "Calabacitas Taco", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "zCellentani Pasta", "Pesto Sauce", "Long Grain Rice", "Brown Rice", "Kale Caesar Salad", "Sourdough Rounds", "Carrot Cake w/Cream Cheese (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Sliced Honeydew", "Fresh Strawberry", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Sausage Patty", "Roasted Breakfast Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Thai Chicken Peanut Wrap (w/nuts)", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon", "Three Cheese Pizza on Wheat", "Marinara Sauce with Sausage", "Penne Pasta", "Herb Focaccia Bread", "Chocolate Chip Cookie", "Lebanese Bowl", "Chicken Chile Verde & Black Bean Burrito", "Grilled Vegetable Taco", "Spinach with Fresh Garlic & Ginger", "Pinto Beans", "Roasted Tomato Salsa", "Grilled Turkey Burger", "Black Bean Burger", "Crinkle Cut French Fries", "Whole Wheat Pancake", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon", "Pasta Primavera", "Sausage Marinara Sauce", "Penne Pasta", "Pecan Butterscotch Brownie (w/nuts)", "Herb Focaccia Bread", "Roasted Achiote Chicken", "Chilpotle Sauce", "Diced Potatoes with Onions", "Pinto Beans", "Fresh Spinach with Garlic", "Tilapia with Red Curry Sauce (w/nuts)", "Basmati Rice", "Vegetable Fried Rice", "Steamed Fresh Broccoli"],
}
},
],
},
{
"date": "2024-11-21",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "French Toast", "Canadian Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Bacon Cheddar Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Italian Chunk Salad", "Macaroni Salad", "Pulled Pork Sandwich with Coleslaw", "Swiss Chard with Fresh Garlic", "Baked Beans", "Potato Chip", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Santa Fe Salad", "Sticky Rice", "Stir Fry Pork with Vegetables", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Italian Chunk Salad", "Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Bread Olive", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Pinch Bread", "Raisin Buttermilk Scone"],
"Lunch": ["Tortilla Soup", "Chipotle Chicken Wrap", "Italian Mixed Vegetables", "Baked Potato", "Beef Birria", "Raja Taco", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham and Pineapple Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Cheese Ravioli with Marinara", "Wheat Penne Pasta", "Sun Dried Tomato Sauce", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Turkey Burger on Wheat Bun", "Krinkle Cut French Fries", "Red Potato Salad with Dill", "Garlic French Bread", "Snickerdoodle"],
"Dinner": ["Lentil Soup", "Salisbury Steaks", "Mushroom Gravy", "Vegetable Medley", "Mashed Potatoes", "Baked Potato", "Chicken Nachos", "Bean & Rice Tostada", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham and Pineapple Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Sweet & Sour Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Whole Wheat Bread", "Apple Strudel with Caramel Sauce"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Sliced Honeydew", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Whole Wheat Banana Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Baked Oatmeal with Peach & Blueberry", "Bacon", "Diced Potatoes with Onions", "Steamed Fresh Broccoli"],
"Lunch": ["Chicken Provolone & Garlic Aioli Panini", "Baked Potato", "Basmati Rice", "Greens and Beans Soup", "Watermelon", "Tomato Basil Flatbread", "Creamy Pesto Sauce", "Fettuccine Pasta", "Parmesan Herb Bread", "Butterscotch Bar (w/nuts)", "Vindaloo Chicken", "Sticky Rice", "Spinach with Fresh Garlic & Ginger", "Turkey Melt", "Pinto Beans", "Roasted Broccoli", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "Malibu Burger", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Wild Rice", "Greens and Beans Soup", "Three Cheese Pizza on White", "Creamy Pesto Sauce", "Fettuccine Pasta", "Watermelon", "Crusty French Bread", "Spice & Walnut Cake (w/nuts)", "Shredded Braised Beef", "Spanish Rice", "Pinto Beans", "Roasted Broccoli", "Tandoori Chicken", "Basmati Rice with Peas", "Spinach Stir Fried with Garlic"],
}
},
],
},
{
"date": "2024-11-22",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Tahini Sauce", "Cucumber Tzatziki", "Chamorro BBQ Chicken", "Long Grain Rice", "Roasted Root Vegetables", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Broccoli Slaw Salad", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Roast Pork Loin", "Apricot Chutney", "Broccoli Stuffed Tomato", "Peas with Onions", "Mashed Potatoes", "Broccoli Slaw Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Onion Roll", "Marble Cake with Chocolate Frosting"],
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
"Lunch": ["Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Fried Chicken w/ Red Mash Potato & Gravy", "Macaroni & Cheese", "Harissa Tofu Quinoa Bowl", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Spicy Kale Caesar Salad", "Baked Pesto Pasta with Chicken", "Turkey Sub Sandwich", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Butternut Squash Soup", "Green Beans With Garlic", "Sauteed Zucchini with Garlic", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Ginger Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Cantalope", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Roasted Vegetable Panini", "Baked Sweet Potato", "Wild Rice Blend", "Chicken Kale & Brown Rice Soup", "Watermelon", "Waffle", "Apple Cranberry Pancake Topping", "Bolognaise Sauce", "Cellentani Pasta", "Crusty French Bread", "Lemon Pie", "Shrimp & Grits w/Fennel & Sausage", "Red Beans and Rice", "Cheese Quesadilla with Chiles", "Fire Roasted Tomato Salsa", "Pinto Beans", "Fresh Sauteed Spinach", "Grilled BBQ Chicken Sandwich", "Black Bean Burger", "Crinkle Cut French Fries", "Classic BBQ Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Chicken Kale & Brown Rice Soup", "Watermelon", "Bolognaise Sauce", "Penne Pasta", "Roasted Vegetable Marinara Sauce", "Cellentani Pasta", "Onion Walnut Bread (w/nuts)", "Blueberry Lemon Cake", "Sloppy Joe Sandwich", "Garlic Roasted Red Potatoes", "Pinto Beans", "Steamed Fresh Broccoli", "Chicken Adobo", "Long Grain Rice", "Miso Broth Soup with Spinach", "Spinach with Fresh Garlic & Ginger"],
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
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "Vegetarian Rigatoni", "BBQ Chicken Thigh", "Baby Red Oven Roasted Potatoes", "Tangy Apple Cabbage Slaw", "Chili Bean", "Fresh Sauteed Spinach", "Coconut Curry Beef Potatoes&Rice(w/nuts)", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Vegetable Roll", "Calamari Sushi Plate"],
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
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Beans Navy White", "Make Your Own Waffle", "Double Chocolate Bread", "Maple Pecan Scone (w/nuts)"],
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
];
export default diningMenu
