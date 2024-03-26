from urllib.request import urlopen
from bs4 import BeautifulSoup

# Fetch HTML content from the URL
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

# Find all sections corresponding to dining areas
sections = soup.find_all(class_='collapse in')
print("const diningMenu = [")
for section in sections:
    # Extract the dining hall name
    dining_hall_alert = section.find_previous(class_='section-heading-alert')
    if dining_hall_alert:
        dining_hall_name = dining_hall_alert.text.strip()
        print('{')
        print("\"name\":", "\"" + dining_hall_name + "\", ", end = "")
        print()

    # Extract the meal information
        meal_info = section.find(class_='panel-body')
        if meal_info:
            meal_name = meal_info.find_previous(class_='panel-heading').text.strip()
            # print("Meal:", meal_name)
            
            # Extract the menu items
            menu_items = meal_info.find_all('dl')
            print("\"meals\":["),
            for item in menu_items:
                category = item.find('dt').text.strip()
                # print("Category:", category)
                items = item.find_all('dd')
                for item_text in items:
                    strip_text = item_text.text.strip()
                    corrected_text = strip_text
                    for take_out in ["(vgn)", "(v)"]:
                        corrected_text = corrected_text.replace(take_out,"")
                    print("\"" + corrected_text + "\", ", end = ""),
            print("]")
        print("},")
print("]")

print("export default diningMenu")