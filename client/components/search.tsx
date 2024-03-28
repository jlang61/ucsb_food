"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import diningMenu from "../data/foodData";

export default function Search() {
  function getDayOfWeek(dateString: string) {
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-indexed in JavaScript Date object
    const day = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }
  const [availableHalls, setAvailableHalls] = useState<string[]>([]);
  function isFoodAvailable(food: string): string[] {
    const availableHalls: string[] = [];

    // Iterate through each date in the diningMenu
    diningMenu.forEach((date: any) => {
      // Iterate through each dining hall on that date
      date.dining_halls.forEach((hall: any) => {
        // Iterate through each meal in the dining hall
        Object.keys(hall.meals).forEach((mealTime: string) => {
          hall.meals[mealTime].forEach((meal: string) => {
            // Check if the meal contains the searched food
            if (meal.toLowerCase().includes(food.toLowerCase())) {
              // If the meal contains the searched food and it's not already in availableHalls, add it
              const hallMeal = `${getDayOfWeek(date.date)} at ${hall.name}'s ${mealTime}: ${meal}`;
              if (!availableHalls.includes(hallMeal)) {
                availableHalls.push(hallMeal);
              }
            }
          });
        });
      });
    });

    console.log(availableHalls);
    return availableHalls;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // console.log(event);
    const formData = new FormData(event.currentTarget);
    const food = formData.get("searchQuery") as string;
    const halls = isFoodAvailable(food);
    setAvailableHalls(halls);
  }
  return (
    <div className="w-full max-w-[500px]">
      <form
        className="flex items-stretch gap-2 md:gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          className="flex-1 min-w-0"
          placeholder="Enter your search query..."
          type="search"
          name="searchQuery"
        />
        {/* <Button className="shrink-0" type="submit">
          Search
        </Button> */}
      </form>
      <div className="mt-10 text-center">
        {availableHalls.length > 0 && (
          <ul>
            {availableHalls.map((hall) => (
              <li key={hall}>{hall}</li>
            ))}
          </ul>
        )}
        {availableHalls.length === 0 && (
          <p>No dining halls available for the entered query.</p>
        )}
      </div>
    </div>
  );
}
