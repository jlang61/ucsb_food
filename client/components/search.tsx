"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import diningMenu from "../data/foodData";

export default function Search() {
  const [availableHalls, setAvailableHalls] = useState<string[]>([]);

  function isFoodAvailable(food: string): string[] {
    const availableHalls: string[] = [];
    // console.log("passed in", food);

    diningMenu.forEach((hall: any) => {
      if (hall.Breakfast) {
        hall.Breakfast.forEach((meal: any) => {
          // console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + "'s Breakfast " + meal)) {
              availableHalls.push(hall.name + "'s Breakfast " + meal);
            }
          }
        });
      }
      if (hall.Brunch) {
        hall.Brunch.forEach((meal: any) => {
          // console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + "'s Brunch " + meal)) {
              availableHalls.push(hall.name + "'s Brunch " + meal);
            }
          }
        });
      }

      if (hall.Lunch) {
        hall.Lunch.forEach((meal: any) => {
          // console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + "'s Lunch: " + meal)) {
              availableHalls.push(hall.name + "'s Lunch: " + meal);
            }
          }
        });
      }
      if (hall.Dinner) {
        hall.Dinner.forEach((meal: any) => {
          // console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + "'s Dinner " + meal)) {
              availableHalls.push(hall.name + "'s Dinner " + meal);
            }
          }
        });
      }

      //   if (hall.meals.includes(food)) {
      //     availableHalls.push(hall.name);
      //   }
    });
    console.log(availableHalls)
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
