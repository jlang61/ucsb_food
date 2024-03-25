from urllib.request import urlopen
from bs4 import BeautifulSoup

# Fetch HTML content from the URL
url = "https://apps.dining.ucsb.edu/menu/day?dc=carrillo&dc=de-la-guerra&dc=ortega&dc=portola&d=2024-03-31&m=breakfast&m=brunch&m=lunch&m=dinner&m=late-night&food="
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
sections = soup.find_all(class_='alert section-heading-alert')

# Iterate over sections and extract menu items
for section in sections:
    dining_area = section.find('h4').text.strip()
    menu_items = section.find_next_sibling('div').find_all('dl')
    
    print(f"Dining Area: {dining_area}")
    for item in menu_items:
        category = item.find('dt').text.strip()
        foods = item.find_all('dd')
        print(f"Category: {category}")
        for food in foods:
            print(f"- {food.text.strip()}")
    print()