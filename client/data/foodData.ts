const diningMenu = [
{
"date": "2024-05-28",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Bacon", "Apple Crepe w/Caramel Sauce", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Sliced Provolone Cheese", "Sliced Cheddar Cheese", "Valenciana Paella", "Kale & Arugula Salad w/Cranberries", "Japanese Noodle Salad", "Philly Cheese Steak Sandwich", "Garlic Mushroom Turnover", "Corn", "Indian Lentils w/Long Grain Rice", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Chicken Noodle Soup", "Cheeseburger", "Black Bean Burger", "Grilled Turkey & Swiss on Sourdough", "Krinkle Cut Fries", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Panna Cotta", "Cheese Roll", "Chocolate Chip Cookie"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Curry (w/nuts)", "Curry Tofu & Vegetables (w/nuts)", "Cream of Broccoli Soup", "Caesar Salad", "Boneless Breaded Cajun Pork Chop", "Country Gravy", "Steamed Fresh Carrots", "Fresh Vegetables Saute with Garlic", "Mashed Potatoes with Herbs", "Linguini Pasta", "Red Clam Sauce", "Pasta Primavera", "Beans Navy White", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Sausage Pizza", "Pineapple & Jalapeno Pizza on White", "Cheese Pizza on White", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Egg and Cheese Biscuit", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Blueberry Coffee Cake"],
"Lunch": ["Minestrone Soup", "Ham Sandwich on Whole Wheat", "Kale/Peppers and Garlic", "Baked Potato", "Beef Tostada", "Bean and Cheese Tostada", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Pasta Carbonara", "Garden Vegetable Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Char Burger", "Veggie Burger on Whole Wheat Bun", "Grilled Tuna Melt on Wheat", "Krinkle Cut French Fries", "Strawberry Radicchio Salad (w/nuts)", "Garlic French Bread", "Chocolate Flan Cake"],
"Dinner": ["Vegetable Beef Soup", "Roasted Petite Tender", "Orzo Pasta with Vegetables", "Rice Pilaf", "Sauteed Squash with Herbs", "Baked Potato", "Chicken Fajitas", "Bean and Rice Wet Burrito", "Mexican Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Tomato and Chile Salsa", "Salami Pizza", "Pesto Cheese Pizza on Wheat Crust", "Herb Breadsticks", "Hawaiian Chicken Stir Fry w/Br. Rice", "Stir Fry Tofu w/ Peanut Sauce (w/nuts)(v", "Long Grain Rice", "Brown Rice", "Wild Rice Garden Salad", "Whole Wheat Sunflower Roll", "White Cake with Chocolate Frosting"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Grapefruit Halves", "Cantaloupe", "Make Your Own Waffle", "Buckwheat Raspberry Parfait (w/nuts)", "Buckwheat Granola (w/nuts)", "Cream of Wheat", "Baby Spinach", "Flour Tortilla", "Banana Muffin", "Raspberry White Chocolate Scone", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Breakfast Burrito", "Sausage Patty", "Cottage Fried Potatoes", "Steamed Fresh Broccoli"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Genoa Salami", "Provolone Cheese", "Sliced Cheddar Cheese", "Baked Sweet Potato", "Long Grain Rice", "Roasted Tomato Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Tomato Basil Flatbread", "Three Cheese Pizza on White", "Fettuccine Pasta", "Tomato Cream Sauce", "Potato Bread", "Chocolate Chocolate Chip Bar (w/nuts)", "Coconut Cream Pie (w/nuts)", "Grilled Chicken Taco", "Refried Beans", "White Beans", "Salsa de Tomatillo Verde", "Lettuce/Cheese/Tomatoes", "Mu Shu Pork", "Moo Shu Vegetables with Tofu", "Sticky Rice", "Spinach Stir Fried with Garlic", "Spicy Scallop Sushi Roll", "Daikon Roll", "Hamburger", "Baked Hawaiian Vegetarian Sandwich", "Breakfast Burrito", "Steak Fries", "Chimichurri Sauce", "Chipotle Aioli", "Housemade Ketchup"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Roasted Tomato Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Three Cheese Pizza on White", "Tomato Cream Sauce", "Linguini Pasta", "Penne with Chicken and Mushrooms", "New York Style Crumb Cake", "Potato Bread", "Grilled Chicken Breast", "Pasta Shells w/Eggplant & Marinara", "Spanish Rice w/Roasted Corn", "White Beans", "Steamed Fresh Broccoli", "Pho Soup", "Miso Ramen", "Braised Bok Choy", "Spicy Scallop Sushi Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-05-29",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Chorizo and Eggs", "Pancake", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Whole Wheat Banana Bread"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Sliced Cheddar Cheese", "Sliced Swiss Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Quinoa Salad w/Lemon Herb Veggies", "Spinach Salad Pecan Bacon & Cranb(w/nut)", "Herb Marinated Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Ham & Pineapple", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Cheddar on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Whole Wheat Bread", "Cheesecake Bar (w/nuts)", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Brown Rice", "Beef  Broccoli and Mushroom Stir Fry", "Stir Fry Vegetables with Tofu", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Rockfish with Red Curry Sauce (w/nuts)", "Polenta with Vegetables", "Fresh Vegetable Medley", "Peas with Onions", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Ham & Pineapple", "Tomato Basil Pizza on Wheat", "Cheese Pizza on White", "Parmesan Herb Bread", "Black Bottom Banana Cream Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Ham & Egg Breakfast Sandwich", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Link", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Lentil and Brown Rice Soup", "Grilled Chicken Vincenza Sandwich", "Cauliflower and Red Bell Pepper", "Baked Potato", "Baked Sweet Potato", "Chicken Fried Taco", "Bean & Cheese Sope", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Ginger Beef Stir Fry", "Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Steak Fries", "Taco Salad", "Pesto Rolls", "Chocolate Chocolate Chip Bar (w/nuts)"],
"Dinner": ["Hearty Vegetable Soup", "Turkey Meatloaf", "Spinach Rice Casserole", "Sauteed Spinach w/ Onion & Garlic", "Baked Potato", "Baked Sweet Potato", "Beef Birria", "Broccoli & Cauliflower Quesadilla", "Rice with Cilantro & Onions", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Sausage Pizza", "Veggie Pizza w/Cilantro Pesto", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Mushroom Marinara Sauce", "Whole Grain Rotini", "Long Grain Rice", "Brown Rice", "Chickpea Salad", "Whole Wheat Sourdough Bread", "Zucchini Cake w/Cr Chz Icing (w/nuts)"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Grapefruit Halves", "Honeydew Melon", "Fresh Strawberry", "Buckwheat Black & Blue Parfait (w/nuts(v", "Buckwheat Granola (w/nuts)", "Make Your Own Waffle", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Hawaiian Sweet Roll", "Pumpkin Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Shakshuka", "Fried Potato with Onion", "Fresh Cauliflower"],
"Lunch": ["Chicken Caesar Salad", "Turkey Club Wrap", "Sliced Turkey Pastrami", "Sliced Turkey", "Monterey Jack Cheese", "Sliced Cheddar Cheese", "Baked Potato", "Brown Rice", "Sage & Sweet Potato Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Sweet Potato Chicken Flatbread", "Antipasto Pizza", "Creamy Rosemary Sauce", "Penne Pasta", "Thick Focaccia Bread", "Shortbread Cookie", "Carrot Cupcakes (w/nuts)", "Vietnamese BBQ Beef Sub", "White Beans", "Housemade Potato Chips", "Hawaiian Coleslaw", "Cajun Chicken Jambalaya", "Red Beans and Rice", "Fresh Cauliflower & Broccoli Mix", "Vegetable Sushi Roll", "Spicy Tuna Roll", "Grilled Turkey Burger", "Mushroom Tofu Veggie Slider (w/nuts)", "Buttermilk Pancakes", "Crinkle Cut French Fries", "Chimichurri Sauce", "Spicy Mustard Sauce", "Chipotle Aioli"],
"Dinner": ["Baked Potato", "Brown Rice", "Sage & Sweet Potato Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Antipasto Pizza", "Butternut Squash Risotto", "Creamy Rosemary Sauce", "Whole Wheat Penne Pasta", "Sticky Toffee Pudding (w/nuts)", "Thick Focaccia Bread", "Lemon Pepper Rotisserie Chicken", "Chipotle Roasted Potatoes", "White Beans", "Ratatouille", "Sauteed Cabbage & Carrots", "Teriyaki Broccoli Beef Stir Fry", "Stir Fry Brocoli Spinach Bok Choy", "Tofu Teriyaki Bowl", "Vegetable Roll", "Spicy Tuna Roll"],
}
},
],
},
{
"date": "2024-05-30",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Egg Ham & Cheese English Muffin Sandwich", "Whole Wheat French Toast", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Raspberry Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Sliced Provolone Cheese", "Sliced Smoked Mozzarella", "Tofu Bee Hoon Soup", "Fish Bee Hoon Soup", "Cuban Sandwich", "Leg of Lamb", "Vegetable Mousaka", "Caribbean Rice", "Broccolini", "Poisson Cru (Tahitian Lime Shrimp)(w/nut", "Pomegranate Pecan & Feta Salad (w/nut)(v", "Horiatiki Pizza", "Pinakbet Pizza", "Cheese Pizza on White", "Joumou Soup (Haitian Pumpkin Soup)", "Aloha Burger", "Patata L Forn", "Chamorro BBQ Chicken", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Australian Damper Bread", "Cherry Vanilla Clafoutis", "Chocolate Pecan Roughs (w/nuts)"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Greek Salad", "Sticky Rice", "Pork Stir Fry with Veggies", "Stir Fry Noodles with Vegetables", "Tortilla Soup", "Halal Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Caesar Salad", "Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Pesto Sauce", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Jasmine Rice", "Sausage Olive Pizza", "Vegetable Pizza on Wheat", "Cheese Pizza on White", "Bread Olive", "Pumpkin Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Cream of Wheat", "Cage Free Scrambled Eggs Vegetables", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Lemon Scone"],
"Lunch": ["Hot and Sour Soup", "Patty Melt", "Fresh Broccoli Spears", "Baked Potato", "Huevos Rancheros", "Grilled Vegetable Tostada", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Buffalo Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry w/Blk Bean Sce/Br. Rice", "Vegetable Fried Rice", "Long Grain Rice", "Brown Rice", "Grass Fed Burger", "Malibu Burger", "Grilled Ham & Cheddar on Wheat", "Krinkle Cut French Fries", "Greek Salad", "Sourdough Roll", "Oatmeal Raisin Walnut Cookie (w/nuts)"],
"Dinner": ["Bean & Barley Soup", "Pork Loin Roast with Garlic & Ginger", "Pineapple Rice", "Steamed Green Beans", "Baked Potato", "BBQ Chicken Quesadilla", "Vegetable Soft Taco", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Buffalo Chicken Pizza", "Tomato Basil Pizza on Wheat", "Herb Breadsticks", "Kung Pao Pork with Peanuts (w/nuts)", "Teriyaki Tofu Stir Fry", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Olive Roll", "Toll House Pie"],
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
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Grapefruit Halves", "Sliced Pineapple", "Honeydew Melon", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Cornbread", "Pecan Sour Cream Coffee Cake (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Blueberry Pancakes", "Potatoes O'Brien", "Sauteed Kale"],
"Lunch": ["Strawberry Salad w/Poppyseed Dressing (v", "Goat Cheese & Tomato Panini", "Sliced Ham", "Meatloaf", "Provolone Cheese", "Jack Cheese", "Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on Wheat", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Creamy Pesto Sauce", "Fettucine", "Three Grain Bread", "Lemon Cookie", "Killer Brownie (w/nuts)", "Chicken Mole", "Mexican Rice", "Lettuce/Cheese/Tomatoes", "Refried Black Beans", "Roasted Cauliflower with Cumin", "Chicken Satay & Peanut Sauce (w/nuts)", "Sticky Rice", "Roasted Red Onion &  Zucchini", "Calamari Roll", "Asparagus & Egg Roll", "Grass Fed Burger", "Blueberry Pancakes", "Shoestring Fries", "Focaccia with Vegetables & Pesto", "Pickled Red Onion", "Sriracha Mayonnaise", "Chimichurri Sauce"],
"Dinner": ["Baked Sweet Potato", "Basmati Rice", "Turkey Rice Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Quattro Formaggio Pizza on Wheat", "Fettucine Alfredo", "Roasted Pepper Tomato Sausage Sauce", "Spaghetti", "Marble Cake", "Three Grain Bread", "Arroz con Pollo", "Bean & Rice Burrito", "Chili de Arbol and Tomato Salsa", "White Beans", "Cauliflower Au Gratin", "Korean Style Pork Ribs", "Korean BBQ Sauce", "Vegetable Fried Rice", "Fresh Spinach with Garlic", "Calamari Roll", "Asparagus & Egg Roll"],
}
},
],
},
{
"date": "2024-05-31",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Chicken Machaca with Scrambled Eggs", "Blueberry Pancake", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Sliced Natural Swiss Cheese", "Sticky Brown Rice", "Sesame Beef with Broccoli", "Vegetable Chop Suey", "Chicken Caesar Salad", "Fresh Garden Pasta Salad", "Chicken Pot Pie", "Eggplant Parmigiano", "Pasta Pronto", "Steamed Crookneck Squash", "Pepperoni Pizza", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Beef Noodle Soup", "Charburger", "Black Bean Burger", "Grilled Cheese on Sourdough", "Beans Navy White", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "Red Curry Soup (w/nuts)", "Arugula Salad with Goat Cheese", "Pastitsio", "Sauteed Fresh Carrots", "Steamed Zucchini", "Oven Roasted Red Potatoes", "Whole Wheat Penne Pasta", "Marinara Sauce with Sausage", "Fresh Tomato Basil Garlic Pasta", "Pinto Beans", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Pepperoni Pizza", "Three Cheese Pizza on Wheat", "Cheese Pizza on White", "Onion Roll", "Chocolate Chip Kahlua Cake"],
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
"Lunch": ["Rainbow Peanut Noodles w/Chicken(w/nuts)", "Roasted Vegetable Panini", "Sliced Turkey", "Sliced Genoa Salami", "Sliced Cheddar Cheese", "Natural Swiss Cheese", "Baked Potato", "Minestrone Soup", "Brown Rice", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Pepperoni Stromboli with Provolone", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Alburro Sauce", "Spaghetti", "Crusty French Bread", "M&M Bar (w/nuts)", "Cream Cheese Brownie Pie (w/nuts)", "Rockfish with Lemon Pepper", "Creamy Pesto Sauce", "Parsley Potatoes", "White Beans", "Grilled Cheese and Tomato on Wheat", "Sauteed Kale Carrot & Snow Peas", "Chicken Pad Thai (w/nuts)", "Sticky Rice", "Roasted Mixed Vegetables", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Grilled BBQ Chicken Sandwich", "Whole Wheat French Toast", "Cheese Quesadilla", "Crinkle Cut French Fries", "Fire Roasted Tomato Chipotle Salsa", "Classic BBQ Sauce", "Sriracha Mayonnaise"],
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
"Dinner": ["Sticky Rice", "Chicken Pad Thai (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Italian Bread Salad", "Rotisserie Pork Loin", "Mushroom Gravy", "Carrots with Fresh Thyme", "Green Beans", "Mashed Potatoes", "Italian Quinoa", "Fettuccine with Chicken, Olives & Garlic", "Spaghetti Pasta", "Garden Vegetable Marinara", "Black Beans", "Baked Potato", "Baked Sweet Potato", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Mushroom Pizza on Wheat", "Cheese Pizza on White", "Pizza Bread", "Chocolate Flourless Cake"],
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
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
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
"Lunch": ["Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Baked Pesto Pasta with Chicken", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Lays Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Teriyaki Bean Burger with Pineapple", "Teriyaki Burger with Pineapple", "Ravioli with Pork Marinara", "Macaroni & Cheese", "Cream of Spinach Soup", "Grilled Turkey Cheddar Sandwich", "Roast Beef & Jack Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Shrimp Cobb Salad", "Italian Sub Sandwich", "Pressed Bean & Cheese Burrito", "Pulled Pork Buffalo Style Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Chicken (w/nuts)", "Spicy Yellow Curry w/Tofu (w/nuts)", "BBQ Chicken with Potatoes", "House Salad", "Hummus with Celery & Carrots", "Sauteed  Zucchini & Yellow Squash", "Roasted Broccoli", "Fries", "Potato Chip", "Chocolate Pudding", "Lemon Crinkle Cookie", "Toll House Bar", "Apple", "Banana", "Orange", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mustard", "Ketchup", "Mayonnaise"],
}
},
{
"name": "Portola",
"meals": {
"Brunch": ["Fresh Strawberry", "Sliced Pineapple", "Cantaloupe", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Chicken Chilaquiles", "Mushroom Cream Sauce", "Whole Wheat Penne Pasta", "Blueberry Scone", "Flour Tortilla", "Meatloaf Sandwich", "Mashed Yams", "Grilled Cheese on Sourdough", "White Beans", "Mixed Greens Side Salad", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham and Cheese", "Buttermilk Pancakes", "Cauliflower w/Sugar Snap Peas", "Roasted Breakfast Potato"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Organic Sugar Snap Pea", "Ginger Sesame Tofu", "Couscous", "Salami Pizza", "Bolognese Sauce with Pancetta", "Spaghetti", "Mushroom Cream Sauce", "Whole Wheat Penne Pasta", "Chocolate Chocolate Chip Bar (w/nuts)", "Whole Wheat French Bread", "Chicken Chile Verde and Corn Tortillas", "Tortilla Chips & Salsa", "Refried Beans", "Grilled Onion", "Lettuce/Cheese/Tomatoes", "Hoisin Chicken", "Sticky Rice", "Spicy Eggplant & Broc w/Ginger Sauce(vgn", "Steamed Broccoli & Cauliflower", "Yam & Avocado Sushi Roll", "California Club Roll"],
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
];
export default diningMenu
