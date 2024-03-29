

# Food Availability Search App

This application allows users to search for the availability of specific food items across different dining halls at UCSB. It provides a simple and intuitive interface for users to enter their desired food item and select the day they want to know about.

## Features:

Search Functionality: Users can enter the name of a food item they are looking for in the search bar.

Day Selection: Users can select from three options - "Today," "Tomorrow," or "All Week" - to specify the day they are interested in.

Dynamic Dropdown Menu: The app features a dropdown menu for selecting the desired day, with the selected option displayed as the trigger text.

Real-Time Availability: The app retrieves data from a predefined dataset containing information about dining halls and their menus. It dynamically updates the list of available halls based on the user's search query and selected day.


## How to Use:

Search: Enter the name of the food item you want to search for in the search bar.

Select Day: Click on the dropdown menu labeled "Which Days" and choose the day you want to check the availability for.

View Results: The app will display a list of dining halls where the selected food item is available on the chosen day. If no halls are available, it will show a message indicating that no dining halls match the search criteria.

## Technologies Used:

React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.

Python: A pseudo "back-end", the python script is ran everyday at midnight using CronJob and Github Actions. This automatically populates a data file with the next week's menu and allows for the website to keep up to date with the meals that students may want to search for.


## Usage:

To use the application, simply open it in your web browser and follow the steps outlined above to search for food availability on the campus dining halls.

Note: This application is still a work in progress so bugs are expected. Please reach out to me at jlang61@ucsb.edu if any bugs are found! I appreciate your help and I hope you enjoy your experience on this app. 
