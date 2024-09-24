const diningMenu = [
{
"date": "2024-09-24",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Apple Crepe w/Caramel Sauce", "Bacon", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Apple Bishop's Coffee Cake", "Lemon Poppyseed Muffin"],
"Lunch": ["Sliced Roast Beef", "Sliced Turkey Pastrami", "Provolone Cheese", "Cheddar Cheese", "Brown Rice", "Pork Stir Fry with Green Beans", "Lemon Ginger Tofu Stir Fry", "Fiesta Vegetable Salad", "Japanese Noodle Salad", "Fish Taco", "Quesadilla", "Fresh Spinach with Garlic", "Black Beans", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Chicken Noodle Soup", "Char Burger", "Black Bean Burger", "Krinkle Cut Fries", "Grilled Turkey & Swiss on Sourdough", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Panna Cotta", "Cheese Roll", "Chocolate Chip Cookie"],
"Dinner": ["Greek Pasta Salad", "Spinach Salad with Honey Dressing", "Sticky Rice", "Chicken Coconut & Peanut Curry (w/nuts)", "Tofu Vegetable Coconut Curry (w/nut)(vgn", "Cream of Broccoli Soup", "Caesar Salad", "Turkey Breast", "Turkey Gravy", "Herb Stuffing", "Peas", "Stir Fry Vegetables", "Garlic Red Mashed Potato", "Linguini Pasta", "White Clam Sauce", "Pasta Primavera", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Long Grain Rice", "Bacon Tomato Basil", "Cheese Pizza on White", "Pineapple & Jalapeno Pizza on Wheat", "Rosemary Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Arroz con Leche", "Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sliced Potato with Onions", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Raspberry Swirl Coffee Cake(w/nuts)"],
"Lunch": ["Turkey Noodle Soup", "Ginger Peanut Tofu Wrap (w/nuts)", "Sauteed Squash with Herbs", "Baked Potato", "Ground Beef Soft Corn Taco", "Calabacitas Taco", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Penne with Rosemary Cream Sauce", "Linguini Pasta", "Mushroom Pepper Marinara", "Long Grain Rice", "Char Burger", "Malibu Burger", "Grilled Tuna Melt on Sourdough", "Shoestring French Fries", "Tabouli Salad", "Roasted Garlic Roll", "Toll House Bar"],
"Dinner": ["Potato Leek Soup", "Blackened Catfish", "Savory Rice", "Vegetable Medley", "Baked Potato", "Chicken Mole Enchiladas", "Bean and Cheese Hard Shell Taco", "Yellow Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Avocado Salsa", "Sausage Pizza", "Vegetable & Jalapeno Pizza on Wheat", "Herb Breadsticks", "Chicken Stir Fry w/Polynesian BBQ Sauce", "Vegetable Tagine", "Long Grain Rice", "Brown Rice", "Cucumber wiith Tarragon Salad", "Cornbread", "German Apple Cake (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Banana", "Organic Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Raspberry Yogurt", "Watermelon", "Sliced Pineapple", "Grapefruit Halves", "Buckwheat Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Make Your Own Waffle", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Banana Oat Bread", "Morning Glory Muffins (w/nuts)", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Scrambled Eggs with Ham & Cheese", "Potatoes O'Brien", "Buttermilk Pancake", "Fresh Sauteed Spinach"],
"Lunch": ["Taco Salad", "Chicken Fajita Wrap", "Sliced Roast Beef", "Sliced Genoa Salami", "Provolone Cheese", "Cheddar Cheese", "Baked Potato", "Long Grain Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Spinach & Ricotta Flatbread", "Pepperoni Pizza", "Penne Pasta", "Tomato Cream Sauce", "Whole Wheat French Bread", "Lemon Bar", "Peanut Butter Fudge Cupcake (w/nuts)", "Grilled Chicken Taco", "Cilantro & Onion Mix", "Fire Roasted Tomato Salsa", "Fresh Tortilla Chips", "Pinto Beans", "Vietnamese Beef Sub (Banh Mi)", "Sesame Asian Slaw Salad", "Stir Fried Bok Choy", "Salmon Roll", "Daikon Roll", "Hamburger", "Grilled Swiss & Tomato on Wheat", "Buttermilk Pancake", "Steak Fries", "Sriracha Mayonnaise", "Tahini Sauce", "Housemade Spicy Ketchup"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Split Pea Soup with Ham", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Pepperoni Pizza", "Tomato Cream Sauce", "Fettuccine Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Apple Crisp", "Sourdough Bread", "Spiced Beef Taco", "Mexican Rice", "Cheese Enchilada", "Pinto Beans", "Honey Sriracha Glaze Brussel Sprouts", "Teriyaki Chicken Stir Fry", "Long Grain Rice", "Braised Bok Choy", "Steamed Fresh Broccoli", "Salmon Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-09-25",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chorizo and Eggs", "Fried Potatoes with Onions", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Danish Pastry (w/nuts)", "Whole Wheat Banana Bread"],
"Lunch": ["Sliced Genoa Salami", "Sliced Turkey", "Cheddar Cheese", "Swiss Cheese", "Valenciana Paella", "Quinoa Salad w/Lemon Herb Veggies", "Salsa Salad", "Philly Cheese Steak Sandwich", "Spanakopita Triangles (V)", "Corn", "Indian Lentils w/Long Grain Rice", "Ham & Pineapple", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Cream of Tomato Basil Soup", "Charburger", "Grilled Vegetable Burger", "Grilled Swiss & Tomato on Wheat", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Black Beans", "Cheesecake Bar (w/nuts)", "Whole Wheat Bread", "Rice Krispie Treat"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Beef  Broccoli and Mushroom Stir Fry", "Stir Fry Vegetables with Tofu", "Minestrone Soup", "Quinoa Salad w/Lemon Herb Veggies", "Mahi Mahi Veracruz", "Steamed Zucchini", "Sauteed Fresh Carrots", "Oven Roasted Red Potatoes", "Fettuccine with Mustard Chicken Sauce", "Wheat Penne Chard & Sun Dried Tomato(vgn", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Brown Rice", "Ham & Pineapple", "Cheese Pizza on White", "Tomato Basil Pizza on Wheat", "Parmesan Herb Bread", "Very Chocolate Cake w/Chocolate Icing"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["7 Grain Hot Cereal", "Texas French Toast", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Strawberry Bread", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Cream of Mushroom Soup", "Tilapia with Red Curry Sauce (w/nuts)", "Long Grain Rice", "Fresh Sauteed Spinach", "Baked Potato", "Baked Sweet Potato", "Pork Chile Verde Tostada", "Roasted Vegetable Quesadilla", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Mushroom Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Teriyaki Beef Stir Fry", "Tofu Stir Fry", "Long Grain Rice", "Wild Rice Blend", "Cheeseburger", "Black Bean Burger", "Grilled Swiss & Tomato on 100% Wheat", "Steak Fries", "Jicama Salad", "Cheese Onion Roll", "Yellow Cupcake with Buttercream"],
"Dinner": ["Chicken Noodle Soup", "Baked Chicken", "Spinach Rice Casserole", "Green Beans", "Baked Potato", "Baked Sweet Potato", "Beef Sope", "Vegetable Chimichanga", "Rice with Cilantro & Onions", "Pinto Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Chicken Mushroom Pizza", "Three Cheese Pizza", "Herb Breadsticks", "Fettuccine with Mustard Chicken Sauce", "Penne Pasta", "Pesto Sauce", "Long Grain Rice", "Wild Rice Blend", "Kale Caesar Salad", "Sourdough Rounds", "White Cake w/Coconut Icing (w/nuts)"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Banana", "Organic Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Peach Yogurt", "Sliced Honeydew", "Cantaloupe", "Fresh Strawberry", "Make Your Own Waffle", "Cinnamon Maple Granola (w/nuts)", "Quinoa Breakfast Bowl (w/nuts)", "Bulgur Hot Cereal", "Baby Spinach", "Flour Tortilla", "Cream Cheese Strudel", "Blueberry Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Whole Wheat Pancake", "Scrambled Eggs w/ Cheese & Mushroom", "Roasted Breakfast Potatoes", "Fresh Cauliflower"],
"Lunch": ["Spicy Kale Caesar", "Thai Chicken Wrap (w/nuts)", "Sliced Turkey Pastrami", "Sliced Turkey", "Swiss Cheese", "Cheddar Cheese", "Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Marinara Sauce with Sausage", "Penne Pasta", "Pasta Primavera", "Herb Focaccia Bread", "Chocolate Chip Cookie", "Mocha Cupcake", "Chicken Chile Verde & Black Bean Burrito", "Roasted Tomato Salsa", "Grilled Vegetable Taco", "Pinto Beans", "Latin Bowl with Chicken", "Sticky Rice", "Spinach with Fresh Garlic & Ginger", "Spicy Scallop Sushi Roll", "Vegetable Roll", "Herb Marinated Chicken Breast Sandwich", "Mushroom Tofu Veggie Slider (w/nuts)", "Krinkle Cut Fries", "Whole Wheat Pancake", "Housemade Spicy Ketchup", "Red Chimichurri Sauce", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Turkey Vegetable Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Chicken Florentine Pizza w/White Sauce", "Pasta Primavera", "Marinara Sauce with Sausage", "Whole Wheat Penne Pasta", "Butterscotch Pudding", "Herb Focaccia Bread", "Chicken Marsala", "Pasta with Olive Oil", "Pinto Beans", "Risotto with Fresh Vegetables", "Sauteed Zucchini with Garlic", "Tilapia with Red Curry Sauce (w/nuts)", "Basmati Rice", "Spicy Noodles w/Tofu & Cucumber", "Steamed Broccoli & Cauliflower", "Spicy Scallop Sushi Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-09-26",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "French Toast", "Eggs Benedict", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Raspberry Scone", "Ginger Bread"],
"Lunch": ["Sliced Ham", "Egg Salad", "Provolone Cheese", "Sliced Smoked Mozzarella", "Brown Rice", "Lemon Ginger Chicken", "Vegetable Stir Fry", "Thai Sweet Chili Sauce", "Italian Chunk Salad", "Macaroni Salad", "Pulled Pork Sandwich with Coleslaw", "Swiss Chard with Fresh Garlic", "Baked Beans", "Potato Chip", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Split Pea Soup", "Grass Fed Burger", "Gardenburger", "Bean and Rice Burrito", "Shoestring Fries", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Almond Braids (w/nuts)", "Killer Brownie", "Pavlova Mango"],
"Dinner": ["Couscous Salad with Tomato & Herb", "Santa Fe Salad", "Sticky Rice", "Stir Fry Pork with Vegetables", "Stir Fry Noodles with Vegetables", "Tortilla Chicken Soup", "Italian Chunk Salad", "Halal Rotisserie Chicken", "Fresh Green Beans", "Fresh Broccoli Spears", "Risotto with Fresh Vegetables", "Potatoes Au Gratin", "Whole Wheat Penne Pasta", "Chicken Marinara Sauce", "Linguini Pasta", "Fresh Basil Pesto", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Jasmine Rice", "Sausage Olive Pizza", "Cheese Pizza on White", "Vegetable Pizza on Wheat", "Bread Olive", "Pumpkin Pie"],
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
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Banana", "Organic Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Vanilla Yogurt", "Watermelon", "Sliced Honeydew", "Pineapple", "Whole Wheat Waffles", "Baked Oatmeal with Peach & Blueberry", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Homemade Biscuit", "Banana Muffin", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancakes", "Bacon", "Diced Potatoes with Onions", "Sauteed Kale"],
"Lunch": ["Chicken Provolone & Garlic Aioli Panini", "Pear & Gorgonzola Salad (w/nuts)", "Roast Beef", "Sliced Genoa Salami", "Swiss Cheese", "Jack Cheese", "Baked Potato", "Basmati Rice", "Greens and Beans Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Grilled BBQ Chicken Pizza", "Greek Tomato Sauce", "Linguini Pasta", "Creamy Pesto Sauce", "Fettucine", "Parmesan Herb Bread", "Butterscotch Bar (w/nuts)", "Baklava Cookie (w/nuts)", "Eggs Turkey Benedict", "Roasted Red Potato Wedges", "Pinto Beans", "Steamed Veggies", "Vindaloo Chicken", "Sticky Rice", "Spinach with Fresh Garlic & Ginger", "Spicy Tuna Roll", "Tempura Onion Roll", "Grass Fed Burger", "Blueberry Pancakes", "Crinkle Cut French Fries", "White Bean & Red Lentil Patty", "Sriracha Mayonnaise", "Housemade Spicy Ketchup", "Red Chimichurri Sauce"],
"Dinner": ["Baked Potato", "Wild Rice", "Greens and Beans Soup", "Grilled BBQ Chicken Pizza", "Creamy Pesto Sauce", "Fettuccine Pasta", "Greek Tomato Sauce", "Linguini Pasta", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Everything Naan", "Spice & Walnut Cake (w/nuts)", "Roast Leg of Pork", "Apple Chutney", "Roasted  Red Potato Wedges", "Pinto Beans", "Fresh Vegetable Medley", "Tandoori Chicken", "Basmati Rice with Peas", "Seasoned Vegetable Medley", "Roasted Cauliflower with Cumin", "Spicy Tuna Bowl", "Tempura Onion Roll"],
}
},
],
},
{
"date": "2024-09-27",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Arroz con Leche", "Blueberry Pancake", "Chicken Machaca with Scrambled Eggs", "Potatoes O'Brien", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Fluffy Whole Wheat Waffles", "Assorted Bagels & Condiments", "Chocolate Pecan Coffee Cake (w/nuts)"],
"Lunch": ["Sliced Turkey Pastrami", "Tuna Salad", "Sliced Pepper Jack Cheese", "Swiss Cheese", "Rice with Cilantro & Onions", "Lamb Greek Gyro", "Seitan Shawarma", "Tahini Sauce", "Cucumber Tzatziki", "Chamorro BBQ Chicken", "Long Grain Rice", "Roasted Root Vegetables", "Pasta Pronto", "Chinese Chicken Salad (w/nuts)", "Spicy Kale Caesar Salad", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Beef Noodle Soup", "Coney Hot Dog", "Grilled Vegetable Burger", "Grilled Cheese on Sourdough", "Sweet Potato Fries", "Baked Potato", "Baked Sweet Potato", "Beans Navy White", "Brown Rice", "Sourdough Bread", "Date and Cashew Bar (w/nuts)", "Confetti Cake"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Cashew Chicken (w/nuts)", "Vegetable Fried Rice", "French Onion Soup with Croutons", "Roast Pork Loin", "Apricot Chutney", "Broccoli Stuffed Tomato", "Peas with Onions", "Mashed Potatoes", "Spicy Kale Caesar Salad", "Penne Pasta", "Marinara Sauce with Sausage", "Fusilli with Roasted Vegetables", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Pepperoni Pizza", "Cheese Pizza on White", "Three Cheese Pizza on Wheat", "Onion Roll", "Marble Cake with Chocolate Frosting"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Whole Wheat Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Bacon", "Hash Browns", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Sliced Pineapple", "Grapefruit Halves", "Cinnamon Roll"],
"Lunch": ["New England Clam Chowder", "Spinach Quiche", "Fresh Carrots with Thyme", "Baked Potato", "Baked Sweet Potato", "Chicken Mole Taco", "Potato Gorda with Black Beans", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Roasted Chile Negro Salsa", "Taco Pizza", "Mexican Pizza", "Herb Breadsticks", "Kung Pao Beef & Peanuts (w/nuts)", "Kung Pao Tofu & Peanuts (w/nuts)", "Long Grain Rice", "Wild Rice Blend", "Char Burger", "Malibu Burger", "Grilled Cheese on Sourdough", "Shoestring French Fries", "Pasta Salad with Spinach & Feta", "Cracked Wheat Roll", "Jelly Bar Spritz"],
"Dinner": ["Vegetable Soup", "Honey Baked Chicken", "Spinach & Feta Turnover", "Carrots & Broccoli", "Rice Pilaf", "Baked Potato", "Baked Sweet Potato", "Fish Taco", "Bean & Cheese Sope", "Rice with Cilantro & Lime", "Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Papaya Salsa", "Taco Pizza", "Mexican Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Long Grain Rice", "Wild Rice Blend", "Coleslaw with Vinaigrette", "Rosemary Bread", "Tres Leches Cake"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Chocolate Chip Cookie", "Oatmeal Trail Mix Cookie", "Butterscotch Bar", "Apple", "Organic Banana", "Organic Orange", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Blueberry Yogurt", "Sliced Cantalope", "Honeydew Melon", "Watermelon", "Make Your Own Waffle", "Granola Parfait (w/nuts)", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Bran Muffin", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Fried Eggs", "Pineapple Ham Fried Rice", "Roasted Breakfast Potatoes", "Mixed Greens Side Salad"],
"Lunch": ["Roasted Vegetable Panini", "Rainbow Peanut Noodles w/Chicken(w/nuts)", "Sliced Turkey", "Sliced Turkey Pastrami", "Cheddar Cheese", "Swiss Cheese", "Baked Sweet Potato", "Wild Rice Blend", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "zFusilli Buscatti Pasta", "Roasted Vegetable Marinara Sauce", "Ciabatta Roll", "Almond Biscotti (w/nuts)", "Lemon Pie", "BBQ Chicken Sandwich", "Fresh Tomato Quiche", "Pinto Beans", "Sauteed Kale & Collard Greens", "Street Style Fish Taco", "Pico De Gallo", "Refried Beans", "Grilled Zucchini & Tomatoes", "Spicy Shrimp Sushi", "Cucumber & Avocado Roll", "Hamburger", "French Toast w/ Strawberry Sauce", "Cheese Quesadilla with Chiles", "Crinkle Cut French Fries", "Fire Roasted Tomato Salsa", "Housemade Spicy Ketchup", "Sriracha Mayonnaise"],
"Dinner": ["Baked Sweet Potato", "Long Grain Rice", "Chicken Kale & Brown Rice Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Broccolini & Salami Stromboli", "Bolognaise Sauce", "Whole Wheat Penne Pasta", "Roasted Vegetable Marinara Sauce", "zFusilli Buscatti Pasta", "Onion Walnut Bread (w/nuts)", "Blueberry Lemon Cake", "Turkey Meatloaf with Chipotle Glaze", "Mashed Red Potatoes w/ Garlic", "Pinto Beans", "Steamed Broccoli & Cauliflower", "Korean Chicken Bulgogi", "Sticky Rice", "Kimchi", "Bok Choy & Nappa Cabbage w/Sesame", "Spicy Shrimp Bowl with Brown Rice", "Cucumber & Avocado Roll"],
}
},
],
},
{
"date": "2024-09-28",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Turkey", "Sliced Turkey Pastrami", "Swiss Cheese", "Cheddar Cheese", "Caesar Salad", "Pesto Zucchini Soup", "Spicy Meatball Sandwich", "Fresh Mushroom Quiche", "Fresh Cauliflower", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Oatmeal", "Chilaquiles (No Egg)", "Sausage Patty", "Hash Browns", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Pinto Beans", "Make Your Own Waffle", "Banana Nut Bread (w/nuts)", "Lemon Scone"],
"Dinner": ["Sticky Rice", "Chicken Pad Thai with Peanut (w/nuts)", "Vegetable Pad Thai (w/nuts)", "Potato Leek Soup", "Caesar Salad", "Cilantro Lime Salmon", "Carrots with Fresh Thyme", "Green Beans", "Rice Pilaf with Mushrooms", "Pasta Carbonara", "Rotini Pasta", "Garden Vegetable Marinara", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Brown Rice", "Thai Chicken Curry Pizza (w/nuts)", "Cheese Pizza on White", "Mushroom Pizza on Wheat", "Pizza Bread", "Chocolate Chip Cake Kahlua"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Bean & Barley Soup", "Grilled Turkey & Jack on Sourdough", "Mixed Vegetables", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Tomato Pesto Pizza on Wheat Crust", "Pineapple Pizza", "Herb Breadsticks", "7 Grain Hot Cereal", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Blueberry Pancake", "Sausage Patty", "Diced Potatoes with Onions", "Waffle", "Multi-Grain Waffle", "Tossed Italian Greens", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Cinnamon and  Sugar Muffin", "Bagels-Breads & Cereals- See for Choices"],
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
"Brunch": ["Pineapple", "Seedless Red Grape", "Cantalope", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "Oatmeal", "Brown Rice", "Make Your Own Waffle", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Sausage and Mushroom Pizza", "Fresh Tomato Basil Garlic Pasta", "Penne Pasta", "White Wine Garlic Sauce with Chicken", "Flour Tortilla", "zWhole Wheat Banana Bread", "Black Bean Chilaquiles", "Fried Eggs", "Roasted Yam w/Rosemary & Chile", "Chicken Noodle Soup", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Sausage Links", "Roasted Breakfast Potato", "Banana Pancakes", "Grilled Zucchini & Tomatoes"],
"Dinner": ["Baked Potato", "Jasmine Rice", "Chicken Noodle Soup", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Sausage Mushroom Pizza", "Alfredo Sauce", "Fettuccine Pasta", "Fresh Tomato Basil Garlic Pasta", "German Chocolate Cake (w/nuts)", "Whole Wheat Sourdough Bread", "BBQ Chicken Thigh", "Macaroni & Cheese", "Tangy Apple Cabbage Slaw", "zChili Beans", "Fresh Sauteed Spinach", "Asian Beef Bowl", "Sticky Rice", "Tofu Teriyaki Bowl", "Spinach with Fresh Garlic & Ginger", "Calamari Roll", "Vegetable Roll"],
}
},
],
},
{
"date": "2024-09-29",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Brunch": ["Sliced Ham", "Sliced Genoa Salami", "Cheddar Cheese", "Provolone Cheese", "Caesar Salad", "Cabbage Soup", "Carnitas Taco", "Vegetable Tostada", "Fresh Broccoli Spears", "Mexican Rice", "Baked Potato", "Baked Sweet Potato", "Wild and Long Grain Rice Blend", "Oatmeal", "Peach Chunk Pancake", "Bacon", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Beans Navy White", "Make Your Own Waffle", "Double Chocolate Bread", "Coconut Raisin Coffee Cake (w/nuts)"],
"Dinner": ["Sticky Rice", "Mongolian Beef", "Tofu Vegetable Stir Fry", "Spicy Stir Fry Sauce", "Spaghetti Soup", "Caesar Salad", "Turkey Meatloaf", "Stir Fry Vegetables", "Peas", "Potato Garlic Mashed", "Gnocchi Mushroom Corn & Sage Butter", "Baked Rigatoni", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Assorted Meat Pizza", "Cheese Pizza on White", "Tomato Pesto Pizza on Wheat", "Sour Cream & Chives Roll", "Cookies 'n Cream Cake"],
}
},
{
"name": "De La Guerra",
"meals": {
"Brunch": ["Cream of Tomato Soup", "Philly Cheese Steak Sandwich", "Cauliflower and Broccoli", "Baked Potato", "Baked Sweet Potato", "Long Grain Rice", "Chorizo Pizza", "Cheese Pizza", "Herb Breadsticks", "Arroz con Leche", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Texas French Toast", "Sausage Link", "Hash Browns", "Multi-Grain Waffle", "Waffle", "Brazilian Black Bean Salad", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Strawberry Bread"],
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
"Brunch": ["Pineapple", "Cantaloupe", "Fresh Strawberry", "Cinnamon Maple Granola (w/nuts)", "Peanut Butter & Banana Oats (w/nuts)", "8 Grain Hot Cereal", "Steamed White Rice", "Make Your Own Waffle", "Baby Spinach", "Watermelon", "Bulgur Wheat", "Canadian Bacon and Pineapple Pizza", "Baked Rigatoni", "Fresh Basil Pesto", "Penne Pasta", "Flour Tortilla", "Zucchini Bread (w/nuts)", "Bacon Egg & Sweet Potato Hash", "Grilled Cheese on Sourdough", "Pinto Beans", "Kale with Fresh Garlic", "Spicy Navy Bean Soup", "Fresh Cage Free Scrambled Eggs", "Mexican Scrambled Eggs", "Buttermilk Pancake", "Apple Cranberry Pancake Topping", "Roasted Breakfast Potato", "Fresh Vegetable Medley w/Spinach"],
"Dinner": ["Baked Sweet Potato", "Brown Rice", "Spicy Navy Bean Soup", "Canadian Bacon and Pineapple Pizza", "Fresh Basil Pesto", "Penne Pasta", "Rigatoni Mozzerella", "Watermelon Salad", "Orange Pickled Carrot Coins", "Bulgur Wheat", "Cream Cheese Pie", "Whole Wheat French Bread", "Pollo a la Brasa with Aji Verde Sauce", "Creole Beans And Rice", "Roasted Potato Wedges", "Roasted Broccoli", "Pork Balchao", "Basmati Rice", "Thai Vegetable & Peanut Noodle(w/nut)", "Steamed Broccoli & Cauliflower", "California Club Roll", "Daikon Roll"],
}
},
],
},
{
"date": "2024-09-30",
"dining_halls": [
{
"name": "Carrillo",
"meals": {
"Breakfast": ["Oatmeal", "Cream of Wheat", "Whole Wheat Pancake (Housemade)", "Chicken Chile Verde and Corn Tortillas", "Diced Potatoes", "Cage Free Eggs Scrambled", "Cage Free Scrambled Egg Whites", "Make Your Own Waffle", "Assorted Bagels & Condiments", "Orange Scone"],
"Lunch": ["Sliced Ham", "Sliced Turkey", "Provolone Cheese", "Sliced Pepper Jack Cheese", "Orange Hoki Fish", "Asian Vegetable Stir Fry", "Sticky Rice", "Italian Tossed Greens", "Tomato And Mozzarella Salad", "Penne Arrabiata with Chicken (w/nuts)", "Green Beans", "Steamed Fresh Carrots", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Potato Cheese Soup", "Gardenburger", "Corn Quesadilla", "Grilled Turkey Burger", "Krinkle Cut Fries", "Baked Potato", "Baked Sweet Potato", "Black Beans", "Pearl Barley", "Garlic French Bread", "Toll House Bar", "Karidopita (w/nuts)"],
"Dinner": ["Tortilla Chips and Salsa", "Hummus", "Pita Chips", "Sticky Rice", "Chicken Fried Rice", "Vegetable Fried Rice", "Fasolada Soup", "Walnut Kale Salad w/Cranberry(w/nut)(vgn", "Fish & Chips w/Tartar Sauce", "Corn", "Stir Fry Vegetables", "Mushroom Stroganoff", "Spirals with Marinara Sauce", "Baked Potato", "Baked Sweet Potato", "Pinto Beans", "Long Grain Rice", "Salami Pizza", "Cheese Pizza on White", "Onion & Jalapeno Pizza on Wheat", "Oatmeal Bread", "Apple Crumb Pie"],
}
},
{
"name": "De La Guerra",
"meals": {
"Breakfast": ["Oatmeal", "Banana Pancakes", "Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Grilled Ham", "Tater Tots", "Waffle", "Multi-Grain Waffle", "Sliced Cantalope", "Sliced Honeydew", "Grapefruit Halves", "Sliced Pineapple", "Blueberry Scone", "Bagels-Breads & Cereals- See for Choices"],
"Lunch": ["Miso Soup", "Reuben Sandwich", "Fresh Broccoli Spears", "Baked Potato", "Baked Sweet Potato", "Chicken Soft Taco", "Vegetable Burrito", "Spanish Rice", "Refried Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Chicken Chow Mein", "Vegetable Chow Mein", "Brown Rice", "Long Grain Rice", "Cheeseburger", "Black Bean Burger", "Grilled Swiss on Sourdough", "Shoestring French Fries", "Italian Vegetable Spinach Salad", "Potato Roll", "Lemon Bar"],
"Dinner": ["Vegetable Barley Soup", "Teriyaki Chicken", "Bok Choy with Garlic & Ginger", "Pineapple Rice", "Baked Potato", "Baked Sweet Potato", "Beef Tostada", "Black Bean & Rice Tostada", "Spanish Rice", "Refried Black Beans", "Flour Tortilla", "Corn Tortilla", "Wheat Tortilla", "Ranchero Salsa", "Greek Pizza", "Cheese Pizza", "Herb Breadsticks", "Fettuccine Pasta", "Garlic Cream Sauce with Vegetables", "Wheat Penne Pasta", "Tomato Leek Marinara", "Brown Rice", "Long Grain Rice", "Marinated Green Beans Salad", "Cheese Bread", "Blueberry Crumb Pie"],
}
},
{
"name": "Ortega",
"meals": {
"Lunch": ["Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Triple Chocolate Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
"Dinner": ["Greek Chicken with Orzo & Baked Tomatoes", "Macaroni & Cheese", "Pineapple Fried Rice", "Bacon Breakfast Burrito", "Chicken Caesar Salad", "Rainbow Salad w/Goddess Dressing", "Tomato Basil Soup", "Grilled Ham & Cheese Sandwich", "Grilled Cheese Sandwich on Wheat", "Baked Pesto Pasta with Chicken", "Turkey Club Sub Sandwich", "Pressed Bean & Cheese Burrito", "Philly Cheesesteak Sandwich", "Classic Burger", "Veggie Burger", "Steak Burrito", "Spicy Yellow Curry w/Tofu (w/nuts)", "Spicy Yellow Curry w/Chicken (w/nuts)", "Chipotle BBQ Chicken & Potatoes", "House Salad", "Hummus with Celery & Carrots", "Roasted Broccoli", "Roasted Citrus Thyme Carrots", "Seasoned Sweet Potato Halves", "Fries", "Potato Chip", "Snickerdoodle Cookie", "Chocolate Chunk Cookie", "Cowboy Cookie Bar", "Apple", "Organic Orange", "Organic Banana", "Water", "Bubly Lime Sparkling Water", "Bubly Raspberry Sparkling Water", "Balsamic Vinaigrette", "Ranch Dressing", "Mayonnaise", "Ketchup", "Mustard Packet"],
}
},
{
"name": "Portola",
"meals": {
"Breakfast": ["Whole Plain Greek Yogurt", "Strawberry Yogurt", "Watermelon", "Pineapple", "Grapefruit Halves", "Make Your Own Waffle", "Granola Berry Parfait", "Cinnamon Maple Granola (w/nuts)", "Oatmeal", "Baby Spinach", "Flour Tortilla", "Lemon Poppy Seed Bread", "Cinnamon Coffee Cake", "Fresh Cage Free Scrambled Eggs", "Cage Free Scrambled Egg Whites", "Buttermilk Pancakes", "Bacon", "Western Hash Brown", "Fresh Sauteed Spinach"],
"Lunch": ["Spring Mix Salad w/Feta & Craisins", "Greek Chicken Wrap", "Sliced Ham", "Sliced Turkey Pastrami", "Swiss Cheese", "Cheddar Cheese", "Baked Sweet Potato", "Quinoa", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Sausage Mushroom Pizza", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti", "Wheat Germ Bread", "Oatmeal Raisin Quinoa Cookie", "Cherry Pie (w/nuts)", "Char Grilled Cajun Chicken Sandwich", "Ranch Potato Salad", "Black Beans", "Bleu Cheese Dressing", "Celery Stick", "Pork Balchao", "Long Grain Rice", "Spinach Stir Fried with Garlic", "Calamari Roll", "Vegetable Roll", "Turkey Melt", "Grilled Swiss & Tomato on WW", "Banana Pancakes", "Shoestring Fries", "Housemade Ketchup", "Chipotle Aioli", "Roasted Tomato Salsa"],
"Dinner": ["Baked Potato", "Long Grain Rice", "Swiss Chard & Lentil Soup", "Whole Roasted Garlic", "Sweet and Spicy Tofu", "Shredded Carrot & Beet Salad", "Canadian Bacon and Pineapple Pizza", "Bolognese Sauce with Pancetta", "Penne Pasta", "Alburro Sauce", "Spaghetti Pasta", "Strawberry Shortcake", "Russian Bread", "Pueblo Pork Roast", "Red Potatoes with Rosemary", "Black Beans", "Mushroom Ragout over Polenta", "Tandoori Spiced Chicken", "Basmati Rice", "Mujaddara Lentils and Rice", "Seasoned Vegetable Medley", "Calamari Roll", "Vegetable Roll"],
}
},
],
},
];
export default diningMenu
