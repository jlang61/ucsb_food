from urllib.request import urlopen
from bs4 import BeautifulSoup

# Fetch HTML content from the URL
# url = "https://apps.dining.ucsb.edu/menu/day?dc=carrillo&dc=de-la-guerra&dc=ortega&dc=portola&d=2024-04-01&m=breakfast&m=brunch&m=lunch&m=dinner&m=late-night&food="
url = "https://apps.dining.ucsb.edu/menu/day"
page = urlopen(url)
html = page.read()

# Parse the HTML content
soup = BeautifulSoup(html, 'html.parser')


# print(soup)
# Find the dining hall information
dining_hall_info = soup.find('div', class_='alert alert-danger').h5.text
# print(dining_hall_info)
# Find the entree you are interested in
desired_entree = "Teriyaki Bean Burger with Pineapple (v)"  # Change this to the desired entree
entrees = soup.find_all('dd')

# Check if the desired entree is in the list of entrees
# if any(desired_entree in entree.text for entree in entrees):
#     print("The entree '{}' is served at {}.".format(desired_entree, dining_hall_info))
# else:
#     print("The entree '{}' is not served at {}.".format(desired_entree, dining_hall_info))


soup = BeautifulSoup(html, 'html.parser')
# print(soup)
# Find all sections corresponding to dining areas
sections = soup.find_all(class_='collapse in')
print("const diningMenu = [")

for section in sections:
    # print("section: ", section)
    # Extract the dining hall name
    dining_hall_alert = section.find_previous(class_='section-heading-alert')
    if dining_hall_alert:
        dining_hall_name = dining_hall_alert.text.strip()
        print('{')
        print("\"name\":", "\"" + dining_hall_name + "\", ", end = "")
        print()
        
        meals = section.find_all(class_='panel-heading')
        for meal in meals:
        # Extract the meal information

            meal_time = meal.text.strip()
            if meal_time.startswith("Breakfast"):
                meal_time = "Breakfast"
            elif meal_time.startswith("Brunch"):
                meal_time = "Brunch"
            elif meal_time.startswith("Lunch"):
                meal_time = "Lunch"
            elif meal_time.startswith("Dinner"):
                meal_time = "Dinner"
            meal_info = section.find(class_='panel-body')
            menu_items = meal.find_next_sibling(class_='panel-body').find_all('dd')
            print("\"" + meal_time + "\":["),
            for item in menu_items:
                corrected_text = item.text.strip().replace("(vgn)", "").replace("(v)", "").strip()
                print("\"" + corrected_text + "\", ", end=""),
            print("],")
        print("},")
print("]")

print("export default diningMenu")