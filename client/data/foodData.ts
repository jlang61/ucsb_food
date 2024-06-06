const diningMenu = [
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
"Lunch": ["Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Watermelon", "Cantaloupe", "Baked Oatmeal with Apple & Cinnamon", "Buckwheat Granola (w/nuts)", "Whole Wheat Waffles", "8 Grain Hot Cereal", "Baby Spinach", "Flour Tortilla", "Pumpkin Muffins (w/nuts)", "Bagels-Breads & Cereals- See for Choices", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chinese Stir-Fried Tomatoes & Eggs", "Strawberry Pancakes", "Hash Browns", "Sauteed Kale"],
"Lunch": ["Ensalada de Fruta con Tajin", "Fried Tomato & Bacon Sandwich", "Sliced Turkey", "Sliced Genoa Salami", "Provolone Cheese", "Jack Cheese", "Baked Potato", "Quinoa", "Soup Gazpacho", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Seafood Ceviche", "Macaroni & Cheese", "Grilled Asparagus", "Garlic French Bread", "Cornbread Jalapeno Muffin", "Honey Butter", "Rocky Road Tart (w/nuts)", "Red White & Blueberry Shortcake", "Pork Spare Ribs", "Habanero Peach Guava BBQ Sauce", "Ranchero Beans", "Tangy Apple Cabbage Slaw", "Soup Gazpacho", "Elote Salad Bowl", "Grilled Achiote Chicken", "Fiery Spiced Potatoes", "Grilled Zucchini & Tomatoes w/Pesto", "Grilled Ahi Tuna Roll", "Corn & Plantain Sushi Bowl", "Tri Tip Sandwich with Chimichurri Sauce", "Bacon Hot Dog", "Sweet Potato Fries", "Nutella & Banana Crepe (w/nuts)", "Chipotle Mayo", "Chimichurri Sauce", "Caramelized Onion"],
"Dinner": ["Baked Potato", "Wild Rice Country Blend", "Tomato Basil Soup", "Pepperoni Pizza", "Greek Pasta w/Feta/Tom &Spinach", "Mustard Chicken Sauce", "Penne Pasta", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Very Chocolate Cake w/Choc Icing", "Hawaiian Sweet Bread", "Mojo Roasted Chicken (Pollo Asado)", "Cuban Style Black Beans & Rice", "Chipotle Roasted Potatoes", "Sauteed Kale & Collard Greens", "Thai Chicken Taco", "Grilled Pineapple/Mango Salsa", "Vegetable Fried Rice", "Bang Bang Broccoli", "Asparagus & Egg Roll", "California Club Roll with Brown Rice"],
}
},
],
},
{
"date": "2024-06-07",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Denver Omelet", "Western Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Strawberry Cream Coffee Cake (w/nuts)", "Assorted Bagels & Condiments"],
"Lunch": ["Sliced Turkey", "Roasted Vegetables", "Sliced Cheddar Cheese", "Sliced Provolone Cheese", "Tacos Al Pastor", "Pinto Beans", "Gazpacho Salad", "French Potato Salad", "Chicken Caesar Sandwich", "Steamed Zucchini", "Marinated Italian Vegetable Salad", "Bacon Tomato Basil", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Classic French Onion Soup with Croutons", "Cheeseburger", "Grilled Vegetable Burger", "Grilled Ham & Swiss on Sourdough", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Cheese Onion Roll", "Snickerdoodle", "Galaktoboureko (Greek Pudding)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Salmon Cakes", "Coriander Lime Aioli", "Sauteed Kale", "Cabbage Soup", "French Potato Salad", "Buttermilk Chicken Fried", "Carrots with Lemon Butter", "Mashed Potatoes", "Fresh Corn on the Cob", "Gnocchi Mushroom Corn & Sage Butter", "Pasta Shells w/Eggplant & Marinara", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Bacon Tomato Basil", "Quattro Formaggio Pizza on Wheat", "Cheese Pizza on White", "Ricotta Pepper Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Mexican Style Cage Free Scrambled Egg", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Banana Coffee Cake (w/nuts)", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["New England Clam Chowder", "Fish Cake", "Lemon Beurre Blanc", "Steamed Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef Hard Shell Taco", "Calabacitas Taco", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Salami Pizza", "Roasted Tomato & Basil Pizza", "Herb Breadsticks", "Penne Pasta", "Meat Sauce", "Farfalle with Roasted Vegetables", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Roast Beef & Jack Sandwich", "Shoestring French Fries", "Pasta Salad w/Chicken & Sundried Tomato", "Garlic Roll", "Zebra Bar (w/nuts)"],
"Dinner": ["Gumbo Soup", "Tilapia with Red Curry Sauce (w/nuts)", "Spinach Noodle Casserole", "Rice Pilaf", "Sauteed Squash with Herbs", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Chipotle Bean Flauta", "Yellow Rice", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Salami Pizza", "Roasted Tomato & Basil Pizza", "Herb Breadsticks", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai with Peanut(w/nut)", "Long Grain Rice", "Brown Rice", "Greek Salad", "Cracked Wheat Bread", "Fresh Strawberry Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Cantaloupe", "Watermelon", "Honeydew Melon", "Buckwheat Granola (w/nuts)", "Buckwheat Black & Blue Parfait (w/nuts(v", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Yogurt Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Bacon", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Lunch": ["Potato Salad w/Fennel & Salsa Verde (vgn", "Roasted Vegetable Panini", "Sliced Turkey Pastrami", "Sliced Turkey", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Sweet Potato", "Basmati Rice", "Miso Broth Soup with Spinach", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Creamy Pesto Sauce", "Penne Pasta", "Penne Arrabiata with Chicken (w/nuts)", "Three Grain Bread", "Chocolate Pudding", "Mocha Cupcake", "Chicken Mole Enchiladas", "Taco Rajas", "Spanish Rice w/Roasted Corn", "Tortilla Chips and Salsa", "Refried Beans", "Seafood Creole", "Long Grain Rice", "Steamed Fresh Broccoli", "Creole Beans and Rice", "Cucumber & Avocado Roll", "Spicy Shrimp Sushi", "Char Burger", "Vegetarian Cuban Sandwich", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chipotle Aioli", "Pickled Red Onion", "Red Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Jasmine Rice", "Miso Broth Soup with Spinach", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Four Cheese Pizza", "Creamy Pesto Sauce", "Penne Pasta", "Marinara Sauce with Sausage", "Linguini Pasta", "Rhubarb Stacking Cake", "Everything Naan", "Beef Birria Taco", "Quesadilla w/Roasted Poblano Chiles", "Avocado Salsa", "Lime", "Cilantro & Onion Mixture", "Roasted Broccoli and Red Onion", "Refried Beans", "Grilled Tilapia", "Chermoula Sauce", "Harissa Lentils w/Pickled Onion", "Couscous", "Spinach with Fresh Garlic & Ginger", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-06-08",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey Pastrami", "Sliced Genoa Salami", "Sliced Natural Swiss Cheese", "Sliced Cheddar Cheese", "Caesar Salad", "Tomato Soup w/Fresh Vegetables", "Chicken Enchilada", "Corn with Red Peppers", "Refried Beans", "Spanish Rice", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Oatmeal", "Cage Free Scrambled Eggs with Cheese", "Grilled Ham with Honey Glaze", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Chocolate Chip Scone", "Lemon Bread"],
"Dinner": ["Brown Rice", "Stir Fry Pork with Vegetables", "Stir Fry Vegetables with Tofu", "Ham & Navy Bean Soup", "Caesar Salad", "Ginger Beef Pepper Steak", "Polenta with Marinara Sauce", "Roasted Vegetables", "Peas", "Long Grain Rice", "Spaghetti Pasta", "Chicken Sausage & Mushroom Sauce", "Angel Hair Pasta", "Fresh Tomato Basil Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Assorted Meat Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Whole Wheat Bread", "Yellow Cake with Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Chocolate Bread", "Bagels-Breads & Cereals- See for Choices"],
"Brunch": ["Chili Style Lentil Soup", "Reuben Sandwich", "Steamed Cauliflower and Broccoli", "Baked Potato", "Long Grain Rice", "Sausage Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Vegetable Frittata", "Sausage Patty Chicken", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Taco Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Bagels-Breads & Cereals- See for Choices", "Chocolate Bread"],
"Dinner": ["Danish Cauliflower Cheese Soup", "Roast Beef", "Vegetable Medley", "Wild Rice Pilaf", "Baked Potato", "Chicken and Rice Tostada", "Potato Chorizo Burrito", "Spanish Rice", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Pork Stir Fry", "Vegetable Curry", "Long Grain Rice", "Brown Rice", "Caesar Salad", "Sundried Tomato Roll", "Mexican Chocolate Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Thompson Seedless Grapes", "Grapefruit Halves", "Watermelon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Blueberry Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Grilled Ham", "Roasted Cauliflower with Cumin", "Roasted Breakfast Potatoes"],
"Brunch": ["Grapefruit Halves", "Thompson Seedless Grapes", "Watermelon", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Raita Sauce", "Watermelon", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Chilaquiles (No Egg)", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Flour Tortilla", "Blueberry Bread", "Egg Ham & Cheese English Muffin Sandwich", "Sweet Potato Hash", "Pinto Beans", "Gaucho Chili", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Roasted Breakfast Potatoes", "Buttermilk Pancakes", "Roasted Cauliflower with Cumin"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Gaucho Chili", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Blueberry Bread", "Grilled BBQ Chicken Pizza", "Corn Pasta Sauce", "Whole Wheat Penne Pasta", "Roasted Chicken & Zucchini Marinara", "Farfalle Pasta", "Apple Crisp", "Pesto Bread", "Chicken & Dumplings", "Fresh Green Beans with Garlic", "Pinto Beans", "Roasted Potato Wedges", "Shredded Beef Enchiladas", "Cheese Enchilada", "Rice with Cilantro and Lime", "Lettuce/Cheese/Tomatoes", "Sauteed Cabbage & Carrots", "Yam & Avocado Sushi Roll", "Salmon Bowl with Brown Rice"],
}
},
],
},
{
"date": "2024-06-09",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Roast Beef", "Sliced Turkey", "Sliced Provolone Cheese", "Sliced Jack Cheese", "Caesar Salad", "Mushroom Barley Soup", "Patty Melt", "Garden Burger Patty Melt", "Peas with Onions", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Whole Wheat Pancake (Housemade)", "Chorizo and Eggs", "Black Beans", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Blueberry Muffin", "Banana Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Chinese Chicken with Summer Vegetables", "Handmade Vegetable Egg Roll", "Albondigas Soup", "Caesar Salad", "Pork Loin Roast With Garlic and Ginger", "Baked Acorn Squash", "Fresh Broccoli Spears", "Fresh Cauliflower", "Rice with Cilantro & Onions", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Bowtie Pasta", "Marinara Sauce", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Ham & Cheese Pizza", "Pesto and Vegetable Pizza on Wheat", "Cheese Pizza on White", "Jalapeno Cornbread", "Toll House Pie (w/nuts)"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Chickpea Vegetable Soup", "Italian Sub", "Italian Mixed Vegetables", "Baked Potato", "Long Grain Rice", "Ham Pizza", "Three Cheese & Olive Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Jicama Salad", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Lemon Scone", "Cinnamon Roll"],
"Dinner": ["Mushroom Barley Soup", "Char Grilled Pork Chop", "Fresh Sauteed Carrots", "Steamed Red Potatoes with Parsley", "Baked Potato", "Turkey Chorizo Quesadilla", "Bean and Rice Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Ham Pizza", "Three Cheese & Olive Pizza", "Herb Breadsticks", "Penne with Rosemary Cream Sauce", "Wheat Penne Pasta", "Pesto Sauce", "Wild Rice Blend", "Long Grain Rice", "Lemon Herb Quinoa Salad", "Rosemary Bread", "Boston Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Spaghetti with Pork Marinara & Cheese", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Red Velvet Crinkle Cookie", "Sugar Cookie", "Double Chocolate Brownie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Grapefruit Halves", "Cantaloupe", "Honeydew Melon", "Cinnamon Maple Granola (w/nuts)", "Chicken Congee", "Oatmeal", "Steamed White Rice", "Make Your Own Waffle", "Baby Spinach", "Raita Sauce", "Fresh Strawberry", "Bulgur Wheat", "Tomato Basil Pizza on White", "Meat Sauce", "Spaghetti", "Penne Pasta with Pesto", "Flour Tortilla", "Blueberry Scone", "Beef and Bean Tostada", "Vegetable Fajita", "Refried Beans", "Creamy Chipotle Salsa", "Vietnamese Chicken Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Whole Wheat French Toast", "Roasted Breakfast Potatoes", "Fresh Sauteed Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Vietnamese Chicken Soup", "Tomato Basil Pizza on White", "White Wine Garlic and Shrimp Sauce", "Spaghetti", "Penne Pasta with Pesto", "Raita Sauce", "Sweet &Tangy Pickled Red Onion", "Bulgur Wheat", "Cornmeal Berry Cake", "Whole Wheat French Bread", "Chinese BBQ Pork", "Sticky Rice", "Pinto Beans", "Roasted Broccoli and Red Onion", "Sauteed Cabbage & Carrots", "Vietnamese Turkey Banh Mi", "Vegetable Fried Rice", "Stir Fry Brocoli Spinach Bok Choy", "Calamari Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-06-10",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Breakfast Burrito", "Whole Wheat Pancake (Housemade)", "Hash Browns", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Raspberry White Chocolate Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "Sticky Rice", "Chicken & Vegetable Stir Fry", "Vegetable Teriyaki Rice Bowl", "Greek Salad", "Waldorf Salad (w/nuts)", "Smoked Pork Loin and Gouda Sandwich", "Mixed Vegetables", "Stir Fry Vegetables", "Chili Black Bean", "Chicken Florentine Pizza w/White Sauce", "Olive Mushroom Pizza on White", "Traditional Cheese Pizza on Wheat", "Thai Tom Ka Soup w/Tofu (w/nuts)", "Charburger", "Gardenburger", "Grilled Tuna & Swiss on Sourdough", "Black Beans", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Potato Roll", "Brownie (w/nuts)", "Cookies 'n Cream Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Pork Fried Rice", "Vegetable Tagine", "Spicy Navy Bean Soup", "Greek Salad", "Chicken Chile Verde & Black Bean Burrito", "Corn", "Steamed Whole Baby Carrots", "Mexican Rice", "Green Salsa", "Oven Roasted Tomato", "Spirals with Marinara Sauce", "Pasta Carbonara", "Long Grain Rice", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Chicken Florentine Pizza w/White Sauce", "Olive Mushroom Pizza on White", "Cheese Pizza on White", "Cracked Wheat Bread", "Pineapple Upside Down Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Banana Pancakes", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Bran Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Hearty Vegetable Soup", "Spicy Asian Vegetable Wrap", "Bok Choy w/Fresh Garlic & Ginger", "Baked Potato", "Baked Sweet Potato", "Chicken and Black Bean Burrito", "Tofu Mole Enchilada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Tortellini with Creamy Pesto Sauce", "Wheat Penne Pasta", "Tomato Leek Marinara", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Veggie Burger on Whole Wheat Bun", "Grilled Jack on Sourdough", "Krinkle Cut French Fries", "Spinach Salad", "Garlic Roll", "Confetti Cake w/Butter Cream Icing"],
"Dinner": ["Vegetable Soup", "Salisbury Steaks", "Mushroom Gravy", "Vegetable Turnover", "Roasted Potato Wedges", "Carrots with Tarragon", "Baked Potato", "Baked Sweet Potato", "Chicken Chile Verde Tostada", "Grilled Vegetable Soft Taco", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Pepperoni Pizza", "Cheese Pizza", "Herb Breadsticks", "Beef & Vegetables Stir Fry w/Brown Rice", "Vegetable Tagine", "Long Grain Rice", "Wild Rice Blend", "Jicama Salad", "Whole Wheat Sourdough Bread", "Banana Cream Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Cantaloupe", "Watermelon", "Pineapple", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Honeydew Parfait (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Raspberry White Chocolate Scone", "Irish Soda Bread", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Banana Wheat Pancakes", "Cottage Fried Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Marinated Broccoli & Bean Salad", "Panini Pizza", "Sliced Turkey", "Sliced Turkey Pastrami", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Tomato Basil Pizza on White", "Marinara Sauce", "Farfalle Pasta", "Penne w/Butternut Squash Sauce", "Hawaiian Sweet Bread", "Chocolate Mint Cupcake", "Fluffy Sugar Cookie (w/nuts)", "Ropa Vieja", "Basmati Rice with Peas", "Ensalada Cubana", "Black Beans", "Hunan Noodles with Spicy Pork Sauce", "Brussel Sprouts Honey Sriracha Glaze", "Calamari Roll", "Cucumber & Avocado Roll", "Grilled Turkey Burger", "Banana Wheat Pancakes", "Grilled Mediterranean Sandwich", "Crinkle Cut French Fries", "Pickled Red Onion", "Housemade Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Dilled Vegetable Barley Soup", "Tomato Basil Pizza on White", "Penne w/Butternut Squash Sauce", "Pasta Primavera w/Tomato Sauce", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Hawaiian Sweet Bread", "Chocolate Chocolate Chip Bar", "Ground Beef and Bean Tostada", "Bean Rice and Cheese Burrito", "Fire Roasted Tomato Salsa", "Refried Black Beans", "Fresh Cauliflower & Carrots", "Shanghai Noodles & Chix w/Bean Sauce", "Sauteed Vegetables Rice and Beans", "Stir Fried Chinese Greens", "Calamari Roll", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-06-11",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat French Toast", "Sausage Biscuits & Gravy", "Fried Potatoes with Onions", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Fluffy Whole Wheat Waffles", "Danish Pastry (w/nuts)", "Whole Wheat Banana Muffin"],
"Lunch": ["Sliced Turkey", "Egg Salad", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Sticky Brown Rice", "Beef Chow Mein", "Vegetable Chow Mein", "Cucumber & Onion Salad", "Yogurt Potato Salad", "Turkey Club Wrap", "Steamed Vegetables & Brown Rice", "Green Bean Almondine (w/nuts)", "Thai Chicken Curry Pizza (w/nuts)", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Classic Miso Soup", "Cheeseburger", "Black Bean Burger", "Quesadilla", "Shoestring Fries", "Refried Beans", "Baked Potato", "Baked Sweet Potato", "Couscous", "Tsoureki (Greek Easter Bread)", "Rice Krispie Treat", "Strawberry Cheese Cupcake"],
"Dinner": ["Tabouli Salad", "Broccoli Almond Salad (w/nuts)", "Sticky Rice", "Teriyaki Chicken Rice Bowl", "Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Vegetable Soup", "Caesar Salad", "Grilled Ono with Pesto Butter", "Corn on the Cob", "Sauteed Zucchini with Garlic", "Potatoes Au Gratin", "Penne Pasta", "Garlic & Caper Butter Sauce", "Pasta Primavera", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Roasted Garlic Onion & Pepper Pizza", "Cheese Pizza on White", "Onion Bread", "Confetti Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Pumpkin & Walnut Muffin (w/nuts)"],
"Lunch": ["White Bean Basque Soup", "Fish Sandwich on Wheat Bun w/Tartar Sauc", "Roasted Cauliflower w/Garlic", "Baked Potato", "Chicken Sope", "Vegetable Hard Shell Taco", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Taco Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Char Burger", "Malibu Burger", "Grilled Turkey Burger on Wheat Bun", "Shoestring French Fries", "Israeli Couscous Salad", "Cornbread", "Ginger Cookie"],
"Dinner": ["Curried Chicken Soup", "Buttermilk Fried Chicken", "Fresh Corn on the Cob", "Mashed Red Potatoes", "Chicken Gravy", "Baked Potato", "Chicken Nachos", "Bean & Rice Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Taco Pizza", "Vegetable Pizza on Wheat", "Herb Breadsticks", "Spicy Basil Beef", "Chinese Vegetable Stir Fry", "Long Grain Rice", "Brown Rice", "Kale Caesar Salad", "Pesto Bread", "Spice & Walnut Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Watermelon", "Pineapple", "Grapefruit Halves", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Granola Black & Blue Parfait (w/nuts)", "Sustainable Baby Spinach", "Cream of Wheat", "Flour Tortilla", "Carrot Walnut Bread (w/nuts)", "Assorted Bagels & Condiments", "Cream Cheese", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat French Toast", "Huevos Rancheros", "Refried Beans", "Brussel Hash"],
"Lunch": ["Vegetarian Taco Salad", "Grilled Cajun Chicken Wrap", "Sliced Genoa Salami", "Sliced Turkey", "Jack Cheese", "Provolone Cheese", "Baked Potato", "Long Grain Rice", "Spicy Black Bean Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Florentine Pizza w/White Sauce", "Tomato Basil Cream Sauce", "Penne Pasta", "Fettucine Alfredo", "Challah Bread", "Granola Bar (w/nuts)", "Peanut Butter Fudge Cupcake (w/nuts)", "Chili Macaroni", "Shredded Cheddar Cheese", "Black Beans", "Vegetable Wrap", "Ranch Potato Salad", "Lemon Ginger Chicken Stir Fry", "Sticky Rice", "Stir Fried Bok Choy", "Spicy Scallop Sushi Roll", "Daikon Roll", "Grilled BBQ Chicken Sandwich", "Grilled Swiss & Tomato on Wheat", "Whole Wheat French Toast", "Steak Fries", "Pickled Red Onion", "Classic BBQ Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Spicy Black Bean Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Chicken Florentine Pizza w/White Sauce", "Fettucine Alfredo", "Tomato Basil Cream Sauce", "Whole Wheat Penne Pasta", "Mango Cake", "Challah Bread", "Shredded Braised Beef", "Rice Pilaf", "Spinach Quiche", "Black Beans", "Sauteed Cabbage & Carrots", "Chicken Chow Mein", "Bok Choy & Nappa Cabbage w/Sesame", "Orange Infused Green Beans", "Daikon Roll", "Spicy Scallop Sushi Roll"],
}
},
],
},
{
"date": "2024-06-12",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Strawberry Pancake", "Bacon", "Potatoes O'Brien", "Cage Free Scrambled Egg Whites", "Cage Free Eggs Scrambled", "Make Your Own Waffle", "Applesauce Coffee Cake", "Blueberry Scone"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Jack Cheese", "Sticky Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Pasta Salad with Spinach & Feta", "Carrot & Raisin Salad", "Arni Psito", "Spanakopita Triangles (V)", "Steamed Fresh Carrots", "Buffalo Chicken Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Spicy Navy Bean Soup", "Charburger", "Grilled Vegetable Burger", "Reuben Sandwich", "Shoestring Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Raisin Bread with Glaze", "Pumpkin Crisp", "Oatmeal Raisin Cookie"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Green Curry Beef on Rice Noodle (w/nuts)", "Tofu Veggie Pad Thai w/Peanuts(w/nut)", "Lentil & Brown Rice Soup", "Pasta Salad with Spinach & Feta", "Chicken Marsala", "Polenta with Marinara Sauce", "Fresh Broccoli Spears", "Fresh Spinach with Garlic", "Oven Roasted Red Potatoes", "Whole Wheat Spaghetti", "Meat Sauce", "Linguini Pasta", "Marinara Sauce", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Buffalo Chicken Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Cheese Pizza on White", "Key Lime Pie", "Sourdough Bread"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Chicken Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Banana Chocolate Chip Muffin", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Chicken Noodle Soup", "Chipotle Beef Wrap", "Zucchini and Crookneck Squash", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Vegetable Empanada", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Sausage Pizza", "Mac and Cheese Pizza", "Herb Breadsticks", "Chicken Fried Rice", "Vegetable Chop Suey", "Long Grain Rice", "Brown Rice", "Cheeseburger", "Black Bean Burger", "Grilled Tuna Melt on Sourdough", "Krinkle Cut French Fries", "Thai Cucumber Salad", "Olive Roll", "Tres Leches Cake"],
"Dinner": ["Spicy Black Bean Soup", "Chicken Madeira", "Vegetable Rice Pilaf", "Spinach with Fresh Garlic & Ginger", "Baked Potato", "Baked Sweet Potato", "Beef Fajita", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Sausage Pizza", "Mac and Cheese Pizza", "Herb Breadsticks", "Chicken Sundried Tomato Pesto Pasta", "Whole Grain Rotini", "Garden Vegetable Marinara Sauce", "Long Grain Rice", "Brown Rice", "Southwestern Chopped Salad (w/nuts)", "Sesame Bread", "Lemon Yogurt Pound Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Lomo Saltado with Green Aji Sauce", "Buttermilk Fried Chicken Sandwich", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Raisin Bar", "Snickerdoodle Cookie", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Grapefruit Halves", "Cantaloupe", "Ruby Flame Grapes", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Homemade Cinnamon Rolls", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs w/Chile/Jack/Tomato", "Apple Cinnamon Oatmeal Pancake", "Hash Browns", "Fresh Cauliflower & Carrots"],
"Lunch": ["Spicy Kale Caesar", "Tuna Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Natural Swiss Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Buffalo Chicken Pizza", "Chef's Salmon Pasta", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Homemade Bread", "Sugar Cookies", "Cream Cheese Brownie Pie", "Chicken Chile Verde Burrito", "Fresh Tortilla Chips", "Black Beans", "Lettuce/Cheese/Tomatoes", "Sauteed Zucchini with Garlic", "Beef Pho", "Miso Ramen", "Vegetable Sushi Roll", "Spicy Tuna Roll", "Hamburger", "Grilled Cheese /Tom & Herbs on Wheat", "Apple Cinnamon Oatmeal Pancake", "Shoestring Fries", "Housemade Spicy Ketchup", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Cabbage Cilantro Slaw", "Sweet and Spicy Tofu", "Pearl Barley", "Buffalo Chicken Pizza", "Pasta Primavera", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Chocolate Flourless Cake", "Homemade Bread", "Beef Stew", "Mashed Red Potatoes w/ Garlic", "Black Beans", "Brussel Sprouts Honey Sriracha Glaze", "Teriyaki Chicken Rice Bowl", "Pineapple Fried Rice w/Tofu", "Bang Bang Broccoli", "Vegetable Roll with Brown Rice", "Spicy Tuna Roll"],
}
},
],
},
];
export default diningMenu
