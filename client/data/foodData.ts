const diningMenu = [
{
"date": "2025-04-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Bacon", "Apple Crepe w/Caramel Sauce", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Valenciana Paella", "Philly Cheese Steak Sandwich", "Garlic Mushroom Turnover", "Corn", "Indian Lentils w/Long Grain Rice", "Kale & Arugula Salad w/Cranberries", "Asian Noodle Salad", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Chicken Noodle Soup", "Cheeseburger", "Black Bean Burger", "Grilled Turkey & Swiss on Sourdough", "Krinkle Cut Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Cheese Roll", "Panna Cotta", "Chocolate Chip Cookie"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Coconut & Peanut Curry (w/nuts)", "Tofu Vegetable Coconut Curry", "Cream of Broccoli Soup", "Turkey Pastitsio", "Sauteed Fresh Carrots", "Steamed Zucchini", "Oven Roasted Red Potatoes", "Caesar Salad", "Linguini Pasta", "Red Clam Sauce", "Pasta Primavera", "White Navy Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Sausage & Cheese Biscuit", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Raspberry Swirl Coffee Cake(w/nuts)"],
"Lunch": ["Minestrone Soup", "Ham Sandwich on Whole Wheat", "Kale/Peppers and Garlic", "Baked Potato", "Pork Chile Verde Burrito", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Pasta Carbonara", "Garden Vegetable Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tuna Melt on Wheat", "Krinkle Cut French Fries", "Strawberry Radicchio Salad (w/nuts)", "Garlic French Bread", "Chocolate Flan Cake"],
"Dinner": ["Gumbo Soup", "Roasted Petite Tender", "Crookneck Squash & Herbs", "Rice Pilaf", "Baked Potato", "Ground Beef & Bean Burrito", "Bean & Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Turkey Stir Fry with Brown Rice", "Pineapple Fried Rice with Tofu", "Long Grain Rice", "Wild Rice Blend", "Wild Rice Garden Salad", "Whole Wheat Sunflower Roll", "White Cake with Chocolate Frosting"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Watermelon", "Grapefruit Halves", "Cantaloupe", "Make Your Own Waffle", "Granola Raspberry Parfait (w/nuts)", "Cinnamon Maple Granola", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Banana Muffin", "Raspberry White Chocolate Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Breakfast Burrito", "Sausage Patty", "Cottage Fried Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Genoa Salami", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Roasted Tomato Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Bread", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie", "Grilled Chicken Taco", "Refried Beans", "Salsa de Tomatillo Verde", "Carrots with Fresh Thyme", "Cilantro & Onion Mix", "Pork Mu Shu", "Moo Shu Vegetables with Tofu", "Sticky Rice", "Spinach Stir Fried with Garlic", "Spicy Scallop Sushi Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Breakfast Burrito", "Steak Fries", "Chimichurri Sauce", "Chipotle Aioli", "Pumpkin Seed Pesto"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Roasted Tomato Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Three Cheese Pizza on White", "Tomato Cream Sauce", "Linguini Pasta", "Pasta Penne with Chicken & Mushrooms", "New York Style Crumb Cake", "Potato Bread", "Grilled Chicken Breast", "Pasta Shells w/Eggplant & Marinara", "Spanish Rice w/Roasted Corn", "White Beans", "Steamed Fresh Broccoli", "Pho Broth for Soup", "Miso Ramen", "Braised Bok Choy", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2025-04-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chorizo and Eggs", "Pancake", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Strawberry White Chocolate Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Quinoa Salad w/Lemon Herb Veggies", "Spinach Pecan Bacon & Cran Salad (w/nut)", "Herb Marinated Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Pepperoni Pizza", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Whole Wheat Roll", "Tiramisu", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Beef Broccoli & Mushroom Stir Fry", "Vegetable & Tofu Stir Fry", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Rockfish with Red Curry Sauce", "Polenta with Vegetables", "Fresh Vegetable Medley", "Peas with Onions", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Pepperoni Pizza", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Parmesan Herb Bread", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil and Brown Rice Soup", "Grilled Chicken Vincenza Sandwich", "Cauliflower & Red Bell Pepper", "Baked Sweet Potato", "Baked Potato", "Chicken Fried Taco", "Bean & Cheese Sope", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Ginger Beef Stir Fry", "Tofu Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Taco Salad", "Pesto Rolls", "Banana Chocolate Chip Bar"],
"Dinner": ["Hearty Vegetable Soup", "Meatloaf", "Mashed Potatoes", "Beef Gravy", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Mushroom Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Chickpea Salad", "Whole Wheat Sourdough Bread", "Zucchini Cake w/Cr Chz Icing (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Fresh Strawberry", "Granola Black & Blue Parfait (w/nuts)", "Cinnamon Maple Granola", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Chocolate Chip Scone", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Chicken Caesar Salad", "Turkey Club Wrap", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Sweet Potato Corn & Chipotle Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Sweet Potato Chicken Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Walnut Cupcakes (w/nuts)", "Vietnamese Beef BBQ Sub Sandwich", "White Beans", "French Potato Salad", "Sauteed Kale", "Cajun Chicken Jambalaya", "Red Beans and Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Roll", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Sweet Potato Corn & Chipotle Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Antipasto Pizza", "Butternut Squash Risotto", "Creamy Rosemary Sauce", "Whole Wheat Penne Pasta", "Sticky Toffee Pudding", "Thick Focaccia Bread", "Rosemary Roasted Chicken Quarters", "Chipotle Roasted Potatoes", "White Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Teriyaki Broccoli Beef Stir Fry", "Broccoli Spinach Bok Choy Stir Fry", "Tofu Teriyaki Bowl", "Vegetable Roll", "Spicy Tuna Sushi Plate"],
}
},
],
},
{
"date": "2025-04-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Egg Ham & Cheese English Muffin Sandwich", "Whole Wheat French Toast", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Bacon Cheddar Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Sticky Rice", "Hawaiian Chicken Stir Fry", "Sweet & Sour Tofu & Veggies(w/nuts)", "Vietnamese Pork Banh Mi", "Swiss Chard with Fresh Garlic", "Sticky Rice", "Potato Chip", "Sunomono Salad", "Wild Arugula Romaine Salad", "Sausage Olive Pizza", "Khachapuri", "Cheese Pizza on White", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Pinto Beans", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Greek Salad", "Sticky Rice", "Pork & Veggie Stir Fry", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Caesar Salad", "Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Olive Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Bread Olive", "Pumpkin Cheesecake Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Scone"],
"Lunch": ["Chicken Noodle Soup", "Patty Melt", "Fresh Broccoli Spears", "Baked Potato", "Beef Sope", "Grilled Vegetable Tostada", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "BBQ Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry Black Bean Sauce & Rice", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Malibu Burger", "Grilled Ham & Cheddar on Wheat", "Krinkle Cut French Fries", "Greek Salad", "Sour Cream & Chive Roll", "Oatmeal Raisin Walnut Cookie (w/nuts)"],
"Dinner": ["Hot and Sour Soup", "Grilled Chicken Quarters", "Spinach Rice Casserole", "Steamed Green Beans", "Baked Potato", "Beef Nachos", "Vegetable Soft Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "BBQ Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Chicken & Vegetable Stir Fry", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Olive Roll", "Peach Cobbler"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Grapefruit Halves", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Kale"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing", "Italian Panini", "Sliced Turkey", "Sliced Ham", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Sugar Snap Peas", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on Wheat", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Creamy Pesto Sauce", "Penne Pasta", "Three Grain Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Chicken Mole", "Mexican Rice", "Lettuce/Cheese/Tomatoes", "Refried Black Beans", "Roasted Cauliflower with Cumin", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Roasted Red Onion &  Zucchini", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Focaccia with Vegetables & Pesto", "Pickled Red Onion", "Chipotle Aioli", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Sugar Snap Peas", "Sweet and Spicy Tofu", "Couscous", "Quattro Formaggio Pizza on White", "Fettuccine Alfredo", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Marble Cake", "Three Grain Bread", "Arroz con Pollo", "Bean Rice & Cheese Burrito", "Fire Roasted Tomato Chipotle Salsa", "White Beans", "Cauliflower Au Gratin", "Korean Style Pork Ribs", "Korean BBQ Sauce", "Vegetable Fried Rice", "Fresh Spinach with Garlic", "Calamari Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
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
"Dinner": ["Sticky Rice", "Beef Chow Mein", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Italian Bread Salad", "Roast Pork Loin", "Mushroom Gravy", "Carrots with Fresh Thyme", "Green Beans", "Mashed Potatoes", "Italian Quinoa", "Fettuccine with Chicken Olives & Garlic", "Spaghetti Pasta", "Garden Vegetable Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Thai Chicken Curry Pizza", "Mushroom Pizza on Wheat", "Cheese Pizza on White", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Coconut Carrot Soup", "Chicken Philly Sandwich", "Fresh Vegetable Medley", "Baked Potato", "Pepperoni Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Santa Fe Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Banana Nut Bread  (w/nuts)", "Chocolate Chip Scone"],
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
"Brunch": ["Hearty Vegetable Soup", "Grilled Turkey & Jack on Sourdough", "Sauteed Crookneck Squash", "Baked Potato", "Canadian Bacon Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Beet & Tomato Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Bagels-Breads & Cereals- See for Choices", "Pinch Bread"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Watermelon", "Honeydew Melon", "Pineapple", "Make Your Own Waffle", "Buckwheat Black & Blue Parfait (w/nut)(v", "Buckwheat Granola (w/nuts)", "Grits", "Baby Spinach", "Flour Tortilla", "Cornbread Muffin", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Mexican Scrambled Eggs", "Potatoes O'Brien", "Sourdough French Toast", "Fresh Sauteed Spinach"],
"Lunch": ["Cherry Tomato & White Bean Salad", "Chipotle Hummus & Quinoa Wrap", "Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Italian Sausage & Basil Stromboli", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti Pasta", "Herb Focaccia Bread", "Apple Kuchen", "Oatmeal Raisin Bar (w/nuts)", "Pulled Pork Buffalo Style Sandwich", "Classic BBQ Sauce", "Egg & Arugula & Herb Tartine", "Pinto Beans", "Cabbage Cilantro Slaw", "Teriyaki Chicken Stir Fry", "Sticky Rice", "Stir Fried Chinese Greens", "Calamari Roll", "Sourdough French Toast", "Grilled Cheese and Tomato on Wheat", "Shoestring Fries", "Housemade Spicy Ketchup", "Pickled Red Onion"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Tortilla Soup", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Whole Wheat Penne Pasta", "White Wine Garlic Sauce with Chicken", "Spaghetti Pasta", "Brownie Pie", "Russian Bread", "Pork Chinese BBQ", "Pinto Beans", "Red Potatoes with Rosemary", "Steamed Vegetables & Brown Rice", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Daikon Roll", "California Sushi Plate"],
}
},
],
},
];
export default diningMenu
