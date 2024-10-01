const diningMenu = [
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
"Breakfast": ["7 Grain Hot Cereal", "Cage Free Scrambled Eggs w/Bacon &Cheese", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Brown Molasses Bread", "Cinnamon Roll"],
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
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Garlic Pizza on Wheat", "White Wine Garlic Sauce with Chicken", "Penne Pasta", "Tomato and Roasted Garlic Sauce", "Brownie Pie", "Oatmeal Bread", "Grilled Chicken Taco", "Cheese Quesadilla", "Fire Roasted Tomato Salsa", "Roasted Broccoli and Red Onion", "Black Beans", "Cilantro & Onion Mix", "Thai Chicken Bowl (w/nuts)", "Tofu Veggie Pad Thai w/Peanut(w/nuts)", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Roll", "Tempura Onion Roll"],
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
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Lemon Ginger Turkey Stir Fry", "Stir Fry Vegetables with Tofu", "Tortilla Chicken Soup", "Spinach Salad with Honey Dressing", "Indian Chicken Coconut Curry (w/nuts)", "Tamale Pie Vegetarian", "Green Beans", "Sauteed Fresh Cauliflower", "Basmati Rice with Peas", "Spaghetti Pasta", "Garden Vegetable Marinara", "Whole Wheat Penne Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Sausage Mushroom Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Hawaiian Sweet Bread", "Carrot Cake (w/nuts)"],
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
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Smoked Gouda", "Swiss Cheese", "Brown Rice", "Beef Stir Fry with Spicy Sauce", "Tofu Vegetable Kung Pao (w/nuts)", "Colorful Coleslaw", "Crunchy Fruit Salad (w/nuts)", "Chicken Tikka Masala", "Sauteed Summer Squash with Herbs", "Couscous", "Pepperoni Pizza", "Cheese Pizza on White", "Assorted Bell Pepper Pizza on Wheat", "Turkey Rice Soup", "Grass Fed Burger", "Gardenburger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Pesto Roll", "Caramel Flan", "Nut and Seed Bar (w/nuts)"],
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
"Lunch": ["Caponata Salad", "Grilled Vegetable Wrap", "Sliced Ham", "Tuna Salad", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Long Grain Rice", "White Bean Basque Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Goat Cheese and Onion Flatbread", "Penne with Cherry Tomato/Herb", "Mustard Chicken Sauce", "Linguini Pasta", "Roasted Garlic Roll", "Snickerdoodle Cookie", "Lime Bar", "Tacos Al Pastor", "Fire Roasted Tomato Chipotle Salsa", "Cilantro & Onion Mix", "Refried Black Beans", "Mexican Rice", "Roasted Cauliflower with Cumin", "Indian Chicken Coconut Curry (w/nuts)", "Basmati Rice", "Spinach with Fresh Garlic & Ginger", "California Roll", "Daikon Roll with Brown Rice", "Grass Fed Burger", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Malibu Burger", "Chipotle Aioli", "Housemade Ketchup", "Spicy Mustard Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "White Bean Basque Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Pepperoni Pizza", "Pasta Carbonara", "Greek Pasta w/Feta/Tom &Spinach", "Very Chocolate Cake w/Choc Icing", "Roasted Garlic Roll", "Mojo Roasted Chicken (Pollo Asado)", "Aji Amarillo Sauce", "Cuban Style Black Beans & Rice", "Chipotle Roasted Potatoes", "Sauteed Kale & Collard Greens", "Sweet & Sour Pork", "Vegetable Fried Rice", "Bang Bang Broccoli", "California Roll", "Daikon Roll with Brown Rice"],
}
},
],
},
{
"date": "2024-10-04",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Banana Nut Pancake (w/nuts)", "Bacon and Cheese Omelet", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Strawberry Cream Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Cheddar Cheese", "Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Greek Salad", "French Potato Salad", "Arni Psito (Roasted Lamb)", "Steamed Zucchini", "Spanakopita w/ Phyllo", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "New England Clam Chowder", "Cheeseburger", "Grilled Vegetable Burger", "Grilled Ham & Swiss on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Cheese Onion Roll", "Galaktoboureko (Greek Pudding)", "Snickerdoodle"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cake", "Sauteed Kale", "Coriander Lime Aioli", "Pesto Zucchini Soup", "Caesar Salad", "Halal Rotisserie Chicken", "Potato Gorda", "Carrots with Lemon Butter", "Sauteed Vegetables Rice and Beans", "Fettuccine", "White Wine Garlic Sauce with Chicken", "Pasta Shells w/Eggplant & Marinara", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Jasmine Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Quattro Formaggio Pizza on Wheat", "Ricotta Pepper Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs", "Scrambled Eggs w/ Cheese & Mushroom", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Potatoes O'Brien", "Waffle", "Multi-Grain Waffle", "Banana Coffee Cake (w/nuts)", "Bran Muffin"],
"Lunch": ["New England Clam Chowder", "Pulled Pork Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Wet Burrito", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Pork Stir Fry w/Vegetables & Brown Rice", "Vegetable Noodle Stir Fry", "Brown Rice", "Long Grain Rice", "Char Burger", "Black Bean Burger", "Grilled Cheese &Tomato on Wheat", "Krinkle Cut French Fries", "Caponata Salad", "Sour Cream & Chive Roll", "Blonde Brownie (w/nuts)"],
"Dinner": ["Tomato Rice Soup", "Herb & Garlic Crusted Tilapia", "Sauteed Squash with Herbs", "Mushroom Risotto", "Baked Sweet Potato", "Baked Potato", "Carnitas Taco", "Bean and Cheese Tostada", "Mexican Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "BBQ Chicken Pizza", "Vegetable & Jalapeno Pizza", "Herb Breadsticks", "Penne Mostacioli", "Sausage Marinara Sauce", "Wheat Pasta Primavera", "Brown Rice", "Long Grain Rice", "French Bistro Salad with Pepitas", "Pesto Bread", "Cherry Cobbler"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Honeydew Melon", "Sliced Cantalope", "Watermelon", "Peanut Butter & Banana Oats (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Arroz Con Leche", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Blueberry Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Egg White and Vegetable Omelet", "Sausage Patty", "Roasted Breakfast Potato", "Mixed Greens Side Salad"],
"Lunch": ["Thai Coleslaw (w/nuts)", "Chicken Provolone & Garlic Aioli Panini", "Sliced Turkey", "Tuna Salad", "Provolone Cheese", "Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "New England Clam Chowder", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Mushroom Pizza on White", "Tomato Basil & Garlic Sauce", "Penne Pasta", "Pasta Carbonara", "Potato Roll", "Shortbread Cookie", "Peanut Butter Bar (w/nuts)", "Italian Wrap", "Grilled Corn Relish", "Black Beans", "Fresh Tomato Quiche", "Roasted Sweet Potato", "Fish Taco", "Salsa de Tomatillo Verde", "Lettuce/Cheese/Tomatoes", "Mushroom Rajas & Corn", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "Crinkle Cut French Fries", "Sausage Biscuits & Gravy", "Roasted Tomato Tartine", "Chipotle Aioli", "Housemade Ketchup", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Sticky Rice", "New England Clam Chowder", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Quattro Formaggio Pizza on Wheat", "Creamy Pesto Sauce", "Penne Pasta", "Marinara Sauce with Sausage", "Spaghetti Pasta", "Hawaiian Sweet Bread", "Coconut Cream Pie (w/nuts)", "Pork Chile Verde Taco", "Calabaza con Queso", "Avocado Crema", "Cilantro & Onion Mix", "Refried Beans", "Cabo Shrimp Quinoa Bowl", "Harissa Lentils w/Pickled Onion", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-10-05",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Genoa Salami", "Sliced Turkey Pastrami", "Cheddar Cheese", "Swiss Cheese", "Caesar Salad", "Chicken Congee Soup", "Chicken Enchilada", "Corn with Red Peppers", "Refried Beans", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Oatmeal", "Cage Free Scrambled Eggs with Cheese", "Grilled Ham with Honey Glaze", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Ginger Beef Stir Fry", "Stir Fry Vegetables with Tofu", "Ham & Navy Bean Soup", "Caesar Salad", "Roast Beef", "Au Jus", "Polenta with Marinara Sauce", "Peas", "Sauteed Button Mushrooms", "zWhole Wheat Spaghetti", "Red Clam Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Vegetable Noodle Soup", "Buffalo Chicken Drumstick", "Mixed Vegetables", "Baked Potato", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Oatmeal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Patty", "Texas French Toast", "Sliced Potato with Onions", "Multi-Grain Waffle", "Waffle", "Chinese Chicken Salad (w/nuts)", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Lemon Scone"],
"Dinner": ["Pasta Fazool Soup", "Honey Baked Chicken", "Steamed Green Beans", "Rice Pilaf", "Baked Potato", "Ground Beef Soft Taco", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Bacon Jalapeno Pizza", "Black Olive Pizza on Wheat", "Herb Breadsticks", "Lemon Ginger Chicken Stir Fry", "Lemon Ginger Tofu Stir Fry w/Brn Rice (v", "Brown Rice", "Long Grain Rice", "Caesar Salad", "Whole Wheat Roll", "Brownie & Walnut Pie (w/nuts)"],
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
"Brunch": ["Watermelon", "Cantaloupe", "Grapefruit Halves", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Brown Rice", "Onion Pizza", "Pasta Primavera with Tomato Sauce", "Chilaquiles (No Egg)", "Flour Tortilla", "Banana Muffin", "Egg Ham & Cheese English Muffin Sandwich", "Grilled Cheese on Sourdough", "Black Beans", "Sauteed Zucchini with Garlic", "Turkey Vegetable Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potatoes", "Whole Wheat Banana Pancake", "Apple Cranberry Pancake Topping", "Seasoned Vegetable Medley"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Turkey Vegetable Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Apple Crisp", "Homemade Bread", "Herb Roasted Rotisserie Chicken", "Four Bean Stew", "Black Beans", "Fresh Green Beans", "Roasted Potato Wedges", "Shredded Beef Enchiladas", "Lettuce/Cheese/Tomatoes", "Vegetarian Tostada", "Fire Roasted Tomato Salsa", "Sauteed Cabbage & Carrots", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-10-06",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Roast Beef", "Provolone Cheese", "Sliced Jack Cheese", "Caesar Salad", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Apple Cinnamon Pancake", "Chorizo and Eggs", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Black Beans", "Make Your Own Waffle", "Blueberry Muffin", "Banana Choc Chip Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Summer Vegetables", "Vegetable Egg Roll", "Beef Albondigas Soup", "Caesar Salad", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Cauliflower & Broccoli Mix", "Rice with Cilantro & Onions", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Pearl Barley", "Ham & Cheese Pizza", "Cheese Pizza on White", "Pesto and Vegetable Pizza on Wheat", "Jalapeno Cornbread", "Toll House Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Far East Vegetable Soup", "Grilled Roast Beef & Jack Sandwich", "Fresh Cauliflower", "Baked Potato", "Tomato Pesto Pizza", "Cheese Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Pancakes", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Macaroni Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Muffin", "Bagels-Breads & Cereals- See for Choices"],
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
"Brunch": ["Fresh Strawberry", "Cantaloupe", "Pineapple", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Quinoa", "Make Your Own Waffle", "Whole Roasted Garlic", "Baby Spinach", "Sweet and Spicy Tofu", "Three Cheese Pizza on White", "Apple Cranberry Pancake Topping", "Fluffy Whole Wheat Waffles", "Linguini & Bacon/Tomato Cream Sauce", "Flour Tortilla", "Chocolate Chip Coffee Chip", "Tuna Melt", "Pita Sandwich w/Hummus & Tabouli", "Mashed Yams", "Black Beans", "Tortilla Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Broccoli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Tortilla Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Tomato Basil Pizza on White", "White Clam Sauce", "Linguini Pasta", "Penne Pasta with Pesto", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Turkey Meatloaf with Chipotle Glaze", "Garlic Roasted Red Potatoes", "Macaroni & Cheese", "Black Beans", "Sauteed Cabbage & Carrots", "Vietnamese BBQ Beef Sub", "Vegetable Fried Rice", "Stir Fry Brocoli Spinach Bok Choy", "Spicy Scallop Sushi Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-10-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancake", "Breakfast Burrito", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin", "Organic Nonfat Milk", "Honey", "Banana", "Chunky Peanut Butter"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Swiss Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Cucumber & Onion Salad", "Waldorf Salad (w/nuts)", "Macaroni Goulash", "Vegetable Taco", "Stir Fry Vegetables", "Rice with Cilantro & Onions", "Roasted Tomato Salsa", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Thai Tom Ka Soup w/Tofu (w/nuts)", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Potato Roll", "Brownie (w/nuts)", "Cookies 'n Cream Cake", "Water", "Fuji Apple", "Split Pea Soup", "Cracked Wheat Bread", "Balsamic Vinegar", "Extra Virgin Olive Oil", "Red Beet", "Cherry Tomato", "Cucumber", "Shredded Carrot", "Canned Black Bean", "Garbanzo Bean", "Daikon Sprout", "Shredded Carrot", "Swiss Chard with Fresh Garlic"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Pork Fried Rice", "Vegetable Tagine", "Marmite Caesar Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Whole Baby Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Spicy Navy Bean Soup", "Pasta Carbonara", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Chicken Florentine Pizza w/White Sauce", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cracked Wheat Bread", "Pineapple Upside Down Cake", "Organic Nonfat Milk", "Navel Orange", "Tortilla Chicken Soup", "Couscous Salad with Tomato & Herb", "Baked Sweet Potato", "Steamed Zucchini"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Cranberry Orange Muffin", "Banana Nut Bread  (w/nuts)"],
"Lunch": ["Chickpea Vegetable Soup", "Veggie Sandwich w/Tomato Spread", "Steamed Carrot & Corn & Peas", "Baked Potato", "Baked Sweet Potato", "Chicken Tostada", "Potato Taco", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Creamy Bolognese Sauce", "Wheat Pasta w/Tomato & Basil", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tomato Basil Mozz Sandwich", "Shoestring French Fries", "Asian Slaw", "Ricotta Pepper Roll", "Chocolate Volcano Cupcake"],
"Dinner": ["Minestrone Soup", "Roast Beef", "Broccoli Mushroom Noodle Casserole", "Fresh Sauteed Spinach", "Baked Potato", "Baked Sweet Potato", "Chicken Fajitas", "Grilled Vegetable Quesadilla", "Rice with Cilantro & Lime", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Assorted Meat Pizza", "Vegetable Pizza", "Herb Breadsticks", "Chicken Curry", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Jicama Salad", "Potato Bread", "Pumpkin Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Enchiladas Rajas w/Rice Refried Beans", "Tortellini with Cream Sauce", "Chorizo Breakfast Burrito", "Chicken Caesar Salad", "Edamame Spinach Salad", "Danish Cauliflower Cheese Soup", "Baked Pesto Pasta with Chicken", "Chipotle Chicken Wrap", "Classic Burger", "Veggie Burger", "Carnitas Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Korean BBQ Chicken w/Rice/Pickled Cukes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Cream Cheese Brownie", "Oatmeal Raisin Bar", "Lemon Crinkle Cookie", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Seedless Red Grape", "Cantaloupe", "Make Your Own Waffle", "Granola Parfait (w/nuts)", "Maple Quinoa Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Lemon Yogurt Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon Egg & Sweet Potato Hash", "Sourdough French Toast", "Western Hash Brown", "Sauteed Kale"],
"Lunch": ["Zucchini Salad w/Dill & Feta", "Turkey Melt", "Grilled Chicken Breast", "Sliced Turkey Pastrami", "Swiss Cheese", "Cheddar Cheese", "Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Mushroom & Sage Flatbread", "Greek Tomato Sauce", "Bowtie Pasta", "White Clam Sauce", "Linguini Pasta", "Hawaiian Sweet Bread", "Peanut Butter Cookie (w/nuts)", "Butterscotch Bar (w/nuts)", "BBQ Pork Sandwich", "French Potato Salad", "Pinto Beans", "Bleu Cheese Dressing", "Celery Stick", "Kung Pao Chicken (w/nuts)", "Sticky Rice", "Stir Fried Chinese Greens", "Salmon Roll", "Tempura Onion Roll", "Tuna Melt", "Sourdough French Toast", "Falafel Sandwich", "Shoestring Fries", "Sweet &Tangy Pickled Red Onion", "Chipotle Aioli", "Cucumber Tzatziki"],
"Dinner": ["Baked Potato", "Brown Rice", "Roasted Tomato Soup", "Baby Spinach", "Sweet and Spicy Tofu", "Brown Rice & Legumes Salad", "Pineapple & Jalapeno Pizza on Wheat", "Marinara Sauce with Meatballs", "Spaghetti Pasta", "Greek Tomato Sauce", "Farfalle Pasta", "Chocolate Mint Cupcake", "Hawaiian Sweet Bread", "Grilled Chicken & Bean Burrito", "Fire Roasted Tomato Salsa", "Rice with Cilantro and Lime", "Pinto Beans", "Fresh Cauliflower & Carrots", "Chicken Shoyu", "Sticky Rice", "Bok Choy Garlic & Ginger", "Steamed Fresh Broccoli", "Salmon Roll", "Tempura Onion Roll"],
}
},
],
},
];
export default diningMenu
