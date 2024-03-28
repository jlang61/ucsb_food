from urllib.request import urlopen
from bs4 import BeautifulSoup
from datetime import date, timedelta

#getting currrent date
today = date.today()

left_link = "https://apps.dining.ucsb.edu/menu/day?dc=carrillo&dc=de-la-guerra&dc=ortega&dc=portola&d="
right_link = "&m=breakfast&m=brunch&m=lunch&m=dinner&m=late-night&food="
url_links = []
dates = []

# Generate URLs for the next 7 days
for i in range(7):
    current_date = today + timedelta(days=i)
    dates.append(str(current_date))
    url = left_link + str(current_date) + right_link
    url_links.append(url)

print("const diningMenu = [")
for i in range(7):
    url = url_links[i]
    date = dates[i]
    print("{")
    print("\"date\": \"" + date + "\",")
    print("\"dining_halls\": [")

    page = urlopen(url)
    html = page.read()

    # Parse the HTML content
    soup = BeautifulSoup(html, 'html.parser')

    # Find all sections corresponding to dining areas
    sections = soup.find_all(class_='collapse in')

    for section in sections:
        # Extract the dining hall name
        dining_hall_alert = section.find_previous(class_='section-heading-alert')
        if dining_hall_alert:
            dining_hall_name = dining_hall_alert.text.strip()
            print("{")
            print("\"name\": \"" + dining_hall_name + "\",")
            print("\"meals\": {")

            meals = section.find_all(class_='panel-heading')
            for meal in meals:
                meal_time = meal.text.strip()
                if meal_time.startswith("Breakfast"):
                    meal_time = "Breakfast"
                elif meal_time.startswith("Brunch"):
                    meal_time = "Brunch"
                elif meal_time.startswith("Lunch"):
                    meal_time = "Lunch"
                elif meal_time.startswith("Dinner"):
                    meal_time = "Dinner"
                
                menu_items = meal.find_next_sibling(class_='panel-body').find_all('dd')
                meal_items = [item.text.strip().replace("(vgn)", "").replace("(v)", "").strip() for item in menu_items]

                print("\"" + meal_time + "\": [\"" + "\", \"".join(meal_items) + "\"],")
            
            print("}")
            print("},")

    print("],")
    print("},")

print("];")
print("export default diningMenu")
