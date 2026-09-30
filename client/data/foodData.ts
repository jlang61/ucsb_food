const diningMenu = [
{
"date": "2026-09-30",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Grits", "French Toast", "English Muffin Sausage Sandwich", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Chocolate Chip Banana Bread", "Cranberry Almond Biscotti (w/nuts)"],
"Lunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Sliced Jack Cheese", "Sliced Provolone Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable & Noodle Stir Fry", "Mediterranean Pine Nut Couscous(w/nut)(v", "Spinach Salad with Honey Dressing", "Asian Fish Taco", "Cactus Taco", "Corn with Red Peppers", "Neapolitan Pepperoni Pizza", "Cheese Pizza", "Vegetable Pizza on Wheat", "Lentil Soup", "Chili Dog", "Black Bean Burger", "Grilled Cheese with Chile & Veggie", "Steak Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Ginger Basmati Rice", "Focaccia Bread", "Nut & Seed Bar (w/nuts)", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Pork Chow Mein", "Five Spice Vegetable Stir Fry", "Tortilla Chicken Soup", "Spinach Salad with Honey Dressing", "Indian Chicken Coconut Curry", "Tamale Pie", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Spaghetti Pasta", "Garden Vegetable Marinara", "Whole Wheat Penne Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza", "Vegetable Pizza on Wheat", "Hawaiian Sweet Bread", "Carrot Cake with Walnuts (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Breakfast Quesadilla", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Pumpkin Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Gumbo Soup", "Open Face Grilled Eggplant Sandwich", "Vegetable Medley", "Baked Potato", "Baked Sweet Potato", "Beef Chorizo Burrito", "Bean & Cheese Entomatadas", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage and Mushroom Pizza", "Thai & Peanut Pizza (w/nuts)", "Herb Breadsticks", "Sweet & Sour Chicken Stir Fry", "Sweet & Sour Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Grilled Cheese on Wheat", "Steak Fries", "Lemon Herb Quinoa Salad", "Herb Biscuit", "Banana Chocolate Chip Bar"],
"Dinner": ["Spicy Navy Bean Soup", "Fish Cake", "Lemon Dill Sauce", "Vegetable Rice Pilaf", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Beef Fajita", "Chipotle Tempeh Tacos", "Rice with Cilantro & Onions", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage and Mushroom Pizza", "Thai & Peanut Pizza (w/nuts)", "Herb Breadsticks", "Spaghetti Pasta", "Meat Sauce", "Penne Pasta", "Marinara Sauce", "Brown Rice", "Long Grain Rice", "Curried Chicken Salad", "Crusty French Bread", "Banana Walnut Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Peach Yogurt", "Pineapple", "Cantaloupe", "Watermelon", "Make Your Own Waffle", "Cornmeal Waffle", "Cinnamon Maple Granola", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Orange Scone", "Blueberry Coffee Cake", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Banana Pancake", "Grilled Ham", "Home Fried Potatos", "Sauteed Kale"],
"Lunch": ["Spicy Kale Caesar", "Focaccia with Vegetables & Pesto", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Meat Sauce", "Farfalle Pasta", "Herb Focaccia Bread", "Black and White Brownie", "Dark Chocolate Chip Mint Cookie", "Philly Cheese Steak Sandwich", "Black Beans", "Spinach Stir Fried with Garlic", "Carrot & Zucchini with Lemon Sauce", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Stir Fried Bok Choy", "Cucumber & Avocado Roll", "Spicy Tuna Roll", "Grilled BBQ Chicken Sandwich", "Bean and Cheese Burrito", "Whole Wheat Banana Pancake", "Shoestring Fries", "Chipotle Aioli", "Classic BBQ Sauce", "Spicy Mustard Sauce"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Caldo de Marisco", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Assorted Bell Pepper Pizza on Wheat", "Pasta with Grilled Vegetables", "Fettuccine Alfredo", "Cookies and Cream Cake", "Herb Focaccia Bread", "Beef Bourguignon with Noodles", "Seasoned Sweet Potato Halves", "Black Beans", "Sauteed Zucchini with Garlic", "Ginger Pepper Steak", "Tofu Teriyaki Bowl", "Fresh Vegetable Medley w/Spinach", "Spicy Tuna Roll", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2026-10-01",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Apple Crepe w/Caramel Sauce", "Beef Eggs Machaca", "Cottage Fried Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Pumpkin & Walnut Muffin (w/nuts)", "Pinch Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Smoked Gouda", "Sliced Swiss Cheese", "Brown Rice", "Beef Stir Fry with Spicy Sauce", "Kung Pao Tofu with Peanut (w/nuts)", "Chicken Tikka Masala", "Sauteed Yellow Squash with Herbs", "Couscous", "Colorful Coleslaw", "Crunchy Fruit Salad", "Sausage Mushroom Pizza", "Cheese Pizza", "Assorted Bell Pepper Pizza on Wheat", "Turkey Rice Soup", "Grass Fed Burger", "Gardenburger", "Grilled Cheddar Cheese On Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Pesto Roll", "Coconut Almond Bites (w/nuts)", "Classic French Napoleon"],
"Dinner": ["Colorful Coleslaw", "Antipasto Salad", "Lemon Ginger Turkey Stir Fry", "Tofu & Vegetable Stir Fry", "Cream of Broccoli Soup", "Brown Rice", "Texas Smoked Brisket", "Garlic Red Mashed Potato", "Fresh Broccoli Spears", "Fresh Vegetable Medley", "Salad Wheat Berry", "Fettucine Alfredo", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Long Grain Rice", "Sausage Mushroom Pizza", "Cheese Pizza", "Assorted Bell Pepper Pizza on Wheat", "Olive Wheat Bread", "Yellow Cake with Mocha Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Strawberry Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cranberry Orange Muffin", "Lemon Scone"],
"Lunch": ["Lentil Soup", "Shaved Turkey on Wheat", "Baby Carrots with Tarragon", "Baked Potato", "Chicken Tostada", "Broccoli & Cauliflower Quesadilla", "Spanish Rice w/Roasted Corn", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Pasta Carbonara", "Whole Grain Rotini", "Creamy Pesto Sauce", "Brown Rice", "Long Grain Rice", "Grass Fed Burger", "Veggie Sweet Potato Burger", "Turkey Corn Dog", "Shoestring French Fries", "Thai Cucumber Salad", "Graham Bread", "Lemon Cookie", "Thai Sticky Rice with Mango"],
"Dinner": ["Cream of Mushroom Soup", "Breaded Pork Chop", "Roasted Red Potato Wedges", "Vegetable Medley", "Baked Potato", "Beef Fried Taco", "Potato Vegetable Taco", "Spanish Rice w/Roasted Corn", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Fire Roasted Tomato Salsa", "Ham Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Teriyaki Chicken Stir Fry", "Tofu Stir Fry w/Peanut Sauce (w/nuts)", "Long Grain Rice", "Brown Rice", "French Potato Salad", "Onion Bread", "Chocolate Mint Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Blueberry Yogurt", "Watermelon", "Sliced Pineapple", "Sliced Cantalope", "Make Your Own Waffle", "Cinnamon Maple Granola", "Quinoa Breakfast Bowl", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Zucchini Bread", "Hawaiian Sweet Roll", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs w/Cheese & Mushroom", "Oatmeal Apple Cinnamon Pancake", "Cottage Fried Potatoes", "Sauteed Fresh Cauliflower"],
"Lunch": ["Caponata Salad", "Grilled Vegetable Wrap", "Sliced Ham", "Sliced Genoa Salami", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Potato", "Long Grain Rice", "White Bean Basque Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Goat Cheese and Onion Flatbread", "Cherry Tomatoes & Herbs with Pasta", "Mustard Chicken Sauce", "Linguini Pasta", "Roasted Garlic Roll", "Snickerdoodle Cookie", "Yellow Cupcake with Chocolate Icing", "Tacos Al Pastor", "Fire Roasted Tomato Salsa", "Cilantro & Onion Mix", "Pinto Beans", "Mexican Rice", "Roasted Cauliflower with Cumin", "Chicken Cajun Stir Fry", "Sticky Rice", "Spinach with Garlic & Ginger", "California Roll", "Daikon Roll", "Grass Fed Burger", "Oatmeal Apple Cinnamon Pancake", "Shoestring Fries", "Malibu Burger", "Chipotle Aioli", "Housemade Ketchup", "Spicy Mustard Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "White Bean Basque Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Pepperoni Pizza", "Pasta Carbonara", "Greek Pasta w/Feta/Tom &Spinach", "Whole Wheat French Bread", "Boston Cream Pie", "Lemon Baked Salmon", "Roasted Red Potato Wedges", "Fresh Herb Polenta with Marinara", "Sauteed Kale & Collard Greens", "Sweet & Sour Pork", "Sticky Rice", "Vegetable Fried Rice", "Bang Bang Broccoli", "Daikon Roll", "California Sushi Plate"],
}
},
],
},
{
"date": "2026-10-02",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Bacon and Cheese Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Cypriot Tyropita", "Assorted Bagels & Condiments"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Greek Salad", "Jalapeno Popper Roasted Potato Salad", "Arni Psito (Roasted Lamb)", "Steamed Zucchini", "Spanakopita", "Bacon Tomato Basil", "Cheese Pizza", "Quattro Formaggio Pizza on Wheat", "New England Clam Chowder", "Cheeseburger", "Veggie Sweet Potato Burger", "Grilled Ham & Swiss on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Walnut Baklava (w/nuts)", "Cheese Onion Roll", "Pumpkin Chocolate Chip Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cake", "Sauteed Kale", "Coriander Lime Aioli", "Pesto Zucchini Soup", "Caesar Salad", "Rotisserie Chicken", "Potato Gorda", "Carrots with Lemon Butter", "Sauteed Vegetables Rice and Beans", "Fettuccine", "Chicken with White Wine Garlic Sauce", "Eggplant & Marinara with Pasta", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Bacon Tomato Basil", "Cheese Pizza", "Quattro Formaggio Pizza on Wheat", "Ricotta Pepper Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat w/Flaxseed", "Cage Free Scrambled Eggs", "Scrambled Eggs w/Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Chicken Sausage Link", "Potatoes O'Brien", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Banana Coffee Cake", "Bran Muffin"],
"Lunch": ["New England Clam Chowder", "Pulled Pork Buffalo Style Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Baked Sweet Potato", "Italian Fish Taco", "Bean & Cheese Wet Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Pork Stir Fry w/Vegetables & Brown Rice", "Vegetable Noodle Stir Fry", "Brown Rice", "Long Grain Rice", "Char Burger", "Malibu Burger", "Grilled Cheese & Tomato on Wheat", "Krinkle Cut French Fries", "Caponata Salad", "Sour Cream & Chive Roll", "Blonde Walnut Brownie (w/nuts)"],
"Dinner": ["Tomato Rice Soup", "Herb & Garlic Crusted Catfish", "Sauteed Squash with Herbs", "Mushroom Risotto", "Baked Sweet Potato", "Baked Potato", "Carnitas Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Penne Mostacioli", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "French Bistro Salad with Pepitas", "Pesto Bread", "Cherry Cobbler"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean Chicken & Rice", "Creamy Pesto Penne Pasta with Chicken", "Bacon Breakfast Burrito", "Breakfast Burrito", "Macaroni & Cheese", "Philly Cheesesteak Sandwich", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Turkey Sub Sandwich", "Carnitas Burrito", "Classic Burger", "Veggie Burger", "Pressed Bean & Cheese Burrito", "Chipotle BBQ Chicken & Potatoes", "Pasta Puttanesca", "Sweet & Sour Tofu Stir Fry", "Tortilla Soup", "House Salad", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Hummus with Celery & Carrots", "Fries", "Potato Chip", "Banana Bar", "Fuji Apple", "Navel Orange", "Banana", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Vanilla Yogurt", "Honeydew Melon", "Sliced Cantalope", "Sliced Pineapple", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola", "Make Your Own Waffle", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Orange Cranberry Muffin", "Blueberry Scone", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Sausage Patty", "Roasted Breakfast Potato", "Steamed Carrots & Zucchini"],
"Lunch": ["Thai Coleslaw", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Tuna Salad", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "Broccoli Cheese Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Mushroom Pizza on White", "Tomato Basil & Garlic Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Crusty French Bread", "Shortbread Cookie", "Peanut Butter Bar (w/nuts)", "Italian Wrap", "Grilled Corn Relish", "Black Beans", "Fresh Tomato Quiche", "Creamed Spinach", "Blackened Catfish", "Red Beans and Rice", "Steamed Veggies", "Spicy Shrimp Sushi", "Asparagus & Egg Roll", "Hamburger", "Tofu Saltado with Green Aji Sauce", "Crinkle Cut French Fries", "Buttermilk Pancakes", "Sausage Biscuits & Gravy", "Chipotle Aioli", "Housemade Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Sticky Rice", "Broccoli Cheese Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Sausage Marinara Sauce", "Spaghetti", "Crusty French Bread", "Coconut Cream Pie", "Pork Chile Verde Taco", "Calabaza con Queso", "Avocado Crema", "Cilantro & Onion Mix", "Refried Beans", "Chicken with Chermoula & Lemon", "Couscous", "Harissa Lentils w/Pickled Onion", "Spinach with Garlic & Ginger", "Spicy Shrimp Sushi Plate", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2026-10-03",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Genoa Salami", "Sliced Turkey Pastrami", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "White Bean Basque Soup", "Japanese Chicken Curry", "Japanese Curry", "Pickled Radish - Fukujin Zuke", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Caesar Salad", "Oatmeal", "Banana Pancake", "Char Grilled Ham", "Tater Tots", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Ginger Beef Stir Fry", "Tofu & Vegetable Stir Fry", "Ham & Navy Bean Soup", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Cauliflower & Broccoli Mix", "Sinangag - Garlic Fried Rice", "Caesar Salad", "Whole Wheat Spaghetti", "Red Clam Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza", "Vegetable Pizza on Wheat", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Buffalo Chicken Drumstick", "Mixed Vegetables", "Baked Potato", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Texas French Toast", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chinese Chicken Salad", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Lemon Scone"],
"Dinner": ["Pasta Fazool Soup", "Honey Baked Chicken", "Steamed Green Beans", "Rice Pilaf", "Baked Potato", "Ground Beef Taco", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Lemon Ginger Tofu Stir Fry", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Whole Wheat Roll", "Cream Cheese Brownie Pie"],
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
"Brunch": ["Watermelon", "Seedless Red Grape", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola", "Oatmeal", "Quinoa", "Make Your Own Waffle", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Baby Spinach", "Brown Rice", "Onion Pizza", "Chilaquiles (No Egg)", "Linguini Pasta", "Greek Tomato Sauce", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Apple Cranberry Pancake Topping", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Peach Crumb Pie", "Hawaiian Sweet Roll", "Char Grilled Chicken Thigh", "Four Bean Stew", "Black Beans", "Steamed Fresh Broccoli", "Roasted Potato Wedges", "Beef Enchilada", "Lettuce/Cheese/Tomatoes", "Vegetarian Tostada", "Fire Roasted Tomato Salsa", "Sauteed Cabbage & Carrots", "Tempura Onion Sushi Plate"],
}
},
],
},
{
"date": "2026-10-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Roast Beef", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Caesar Salad", "Oatmeal", "Apple Cinnamon Pancake", "Chorizo and Eggs", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Blueberry Muffin", "Banana Walnut Choc Coffee Cake(w/nut)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Vegetables", "Vegetable Egg Roll", "Beef Albondigas Soup", "Roast Beef", "Au Jus", "Polenta with Marinara Sauce", "Peas", "Sauteed Button Mushrooms", "Caesar Salad", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "White Navy Beans", "Pearl Barley", "Ham & Cheese Pizza", "Cheese Pizza", "Pesto and Vegetable Pizza on Wheat", "Key Lime Pie", "Jalapeno Cornbread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Far East Vegetable Soup", "Grilled Roast Beef & Jack Sandwich", "Fresh Cauliflower", "Baked Potato", "Tomato Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Macaroni Salad", "Chia Seed Pudding w/Mango", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Dinner": ["Potato Cheese Soup", "Pork Loin Roast with Garlic & Ginger", "Carrots & Broccoli", "Roasted Potato Wedges", "Baked Potato", "Chicken Bean & Rice Burrito", "Grilled Vegetable Tostada", "Spanish Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Tomato & Roasted Corn Salsa", "Tomato Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "Spicy Basil Beef", "Teriyaki Tofu Stir Fry", "Wild Rice Blend", "Long Grain Rice", "Tangy Cool Noodle Salad", "Pesto Rolls", "Boston Cream Pie"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Cinnamon Maple Granola", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Tortilla Soup", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Sweet and Spicy Tofu", "Three Cheese Pizza", "Apple Cranberry Pancake Topping", "Fluffy Whole Wheat Waffles", "Linguini & Bacon/Tomato Cream Sauce", "Flour Tortilla", "Chocolate Chip Coffee Cake", "Tuna Melt", "Pita Sandwich w/Hummus & Tabouli", "Mashed Yams", "Black Beans", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Steamed Fresh Broccoli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Tortilla Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Tomato Basil Pizza on White", "White Clam Sauce", "Linguini Pasta", "Penne Pasta with Pesto", "Cornmeal Berry Cake", "Crusty French Bread", "Beef Stew", "Mushroom Risotto", "Baked Acorn Squash", "Sauteed Cabbage & Carrots", "Hoisin Chicken", "Sticky Rice", "Vegetable Fried Rice", "Broccoli Spinach Bok Choy Stir Fry", "Spicy Scallop Sushi Plate", "Daikon Roll"],
}
},
],
},
{
"date": "2026-10-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin", "Organic Nonfat Milk", "Honey", "Banana", "Chunky Peanut Butter (w/nuts)"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Swiss Cheese", "Sticky Rice", "Pork & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Cucumber & Onion Salad", "Waldorf Walnut Salad (w/nuts)", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Potato Roll", "Dark Chocolate Walnut Brownie(w/nuts)", "Cookies 'n Cream Cake", "Water", "Fuji Apple", "Split Pea Soup", "Cracked Wheat Bread", "Balsamic Vinegar", "Extra Virgin Olive Oil", "Red Beet", "Cherry Tomato", "Shredded Carrot", "Canned Black Bean", "Garbanzo Bean", "Daikon Sprout", "Shredded Carrot", "Swiss Chard with Fresh Garlic"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Marmite Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza", "Tomato Basil Pizza on Wheat", "Cream Cheese Pie", "Cracked Wheat Bread", "Organic Nonfat Milk", "Navel Orange", "Tortilla Chicken Soup", "Couscous Salad with Tomato & Herb", "Baked Sweet Potato", "Steamed Zucchini"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Cranberry Orange Muffin", "Banana Bread", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple"],
"Lunch": ["Chickpea Vegetable Soup", "Veggie Sandwich with Tomato Spread", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Potato Taco", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Creamy Bolognese Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Shoestring French Fries", "Asian Slaw", "Ricotta Pepper Roll", "Chocolate Volcano Cupcake"],
"Dinner": ["Minestrone Soup", "Roast Beef", "Broccoli Mushroom Noodle Casserole", "Fresh Sauteed Spinach", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Grilled Vegetable Quesadilla", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Thai Chicken & Vegetable Curry", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Jicama Salad", "Potato Bread", "Pumpkin Pie"],
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
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Peach Yogurt", "Watermelon", "Honeydew Melon", "Pineapple", "Seedless Red Grape", "Cantaloupe", "Make Your Own Waffle", "Granola Parfait", "Maple Quinoa Granola", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Bran Muffin", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Turkey Melt", "Grilled Chicken Breast", "Sliced Turkey Pastrami", "Sliced Swiss Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Greek Tomato Sauce", "Farfalle Pasta", "Chicken with White Wine Garlic Sauce", "Linguini Pasta", "Hawaiian Sweet Bread", "Chocolate Chip Cookie", "Lemon Bar", "BBQ Beef Sandwich", "French Potato Salad", "Black Beans", "Steamed Carrots & Zucchini", "Kung Pao Chicken with Peanuts (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Salmon Roll", "Crunchy Onion Roll", "Hamburger", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Raita Sauce"],
"Dinner": ["Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Pineapple & Jalapeno Pizza on Wheat", "Sausage Marinara Sauce", "Spaghetti", "Greek Tomato Sauce", "Farfalle Pasta", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Cheese Quesadilla with Chiles", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Chicken Shoyu", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Sushi Plate", "Crunchy Onion Roll"],
}
},
],
},
{
"date": "2026-10-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin", "Organic Nonfat Milk", "Fuji Apple", "Raisin", "Granulated Peanut", "Oatmeal"],
"Lunch": ["Sliced Turkey", "Hummus", "Pita Chips", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Greek Salad", "Yogurt Potato Salad", "Common Thresher Shark w/Chermoula Sauce", "Steamed Zucchini", "Fresh Vegetable Medley", "Rice with Cilantro & Onions", "Thai Chicken Curry Pizza", "Cheese Pizza", "Roasted Garlic Onion & Pepper Pizza", "Classic Miso Soup", "Char Burger", "Black Bean Burger", "Chicken Gyro", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Refried Beans", "Couscous", "Tsoureki (Greek Easter Bread)", "Pecan Pie Bar (w/nuts)", "Banana Chocolate Bar", "Organic Unsweetened Soy Milk", "Fuji Apple", "Organic Nonfat Plain Greek Yogurt", "Sliced Almond (w/nuts)", "Fresh Garden Pasta Salad", "Steamed Crookneck Squash"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Rockfish Piccata", "Sauteed Zucchini with Garlic", "Corn on the Cob", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Garlic Cream Sauce with Herbs", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Thai Chicken Curry Pizza", "Cheese Pizza", "Roasted Garlic Onion & Pepper Pizza", "Roasted Garlic Bread", "Confetti Cake", "Organic Nonfat Milk", "Mandarin Orange", "Broccoli Stuffed Tomato", "Baked Sweet Potato", "Apricot Chutney", "Rotisserie Pork Loin"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Chia Seed Pudding", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Pumpkin Muffin"],
"Lunch": ["Pozole Soup with Condiments", "Grilled Chicken Vincenza Sandwich", "Vegetable Saute", "Baked Potato", "Beef Quesadilla", "Bean and Cheese Tostada", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Orange Chicken Stir Fry", "Thai Tofu Coconut Curry", "Long Grain Rice", "Brown Rice", "Char Burger", "Black Bean Burger", "Grilled Cheddar Cheese On Wheat", "Krinkle Cut French Fries", "Beet & Tomato Salad", "Cornmeal Roll", "Killer Brownie"],
"Dinner": ["Vegetable Noodle Soup", "Chicken Mushroom Picatta Pasta", "Vegetable Cutlet", "Vegetable Medley", "Rice Pilaf", "Baked Potato", "Beef Sope", "Bean and Rice Burrito", "Mexican Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Bacon Tomato Basil Pizza", "Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Thai Beef Stir Fry w/Peanut Sauce(w/nut)", "Veggie Stir Fry w/Peanut Sauce(w/nuts)(v", "Long Grain Rice", "Brown Rice", "Tangy Cool Noodle Salad", "Sourdough Bread", "Cream Cheese Pie"],
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
"Breakfast": ["Organic Nonfat Plain Greek Yogurt", "Vanilla Yogurt", "Fresh Strawberry", "Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Granola Cantaloupe Parfait", "Cinnamon Maple Granola", "Oatmeal", "Organic Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Chocolate Chip Scone", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Tomato Basil Flatbread", "Three Cheese Pizza", "Fettuccine Pasta", "Tomato Cream Sauce", "Cheese Bread", "Chocolate Chocolate Chip Bar", "Coconut Cream Pie", "Grilled Chicken Taco", "Cilantro Lime Crema", "Fall Vegetable Medley", "Cilantro & Onion Mix", "Refried Beans", "Roast Pork Loin with Spiced Apples", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Fluffy Whole Wheat Waffles", "Steak Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Hearty Vegetable Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Three Cheese Pizza", "Fettuccine Pasta", "Tomato Cream Sauce", "Whole Wheat Penne Pasta", "Chicken with White Wine Garlic Sauce", "Cheese Bread", "New York Style Crumb Cake", "Pot Roast", "Garlic Mashed Potatoes", "Carrots with Fresh Thyme", "Steamed Fresh Broccoli", "Pork Chow Mein", "Vegetable Fried Rice", "Braised Bok Choy", "Calamari Sushi Plate", "Daikon Roll"],
}
},
],
},
];
export default diningMenu
