from urllib.request import urlopen
from bs4 import BeautifulSoup

# Fetch HTML content from the URL
url = "https://apps.dining.ucsb.edu/menu/day"
page = urlopen(url)
html = page.read()

# Parse the HTML content
soup = BeautifulSoup(html, 'html.parser')


print(soup)
# Find the dining hall information
dining_hall_info = soup.find('div', class_='alert alert-danger').h5.text

# Find the entree you are interested in
desired_entree = "Teriyaki Bean Burger with Pineapple (v)"  # Change this to the desired entree
entrees = soup.find_all('dd')

# Check if the desired entree is in the list of entrees
if any(desired_entree in entree.text for entree in entrees):
    print("The entree '{}' is served at {}.".format(desired_entree, dining_hall_info))
else:
    print("The entree '{}' is not served at {}.".format(desired_entree, dining_hall_info))
