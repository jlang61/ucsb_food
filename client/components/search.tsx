"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import diningMenu from "../data/foodData";

export default function Search() {
  const [availableHalls, setAvailableHalls] = useState<string[]>([]);

  function isFoodAvailable(food: string): string[] {
    const availableHalls: string[] = [];
    console.log("passed in", food);

    diningMenu.forEach((hall: any) => {
      if (hall.Breakfast) {
        hall.Breakfast.forEach((meal: any) => {
          console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + " Breakfast")) {
              availableHalls.push(hall.name + " Breakfast");
            }
          }
        });
      }
      if (hall.Lunch) {
        hall.Lunch.forEach((meal: any) => {
          console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + " Lunch")) {
              availableHalls.push(hall.name + " Lunch");
            }
          }
        });
      }
      if (hall.Dinner) {
        hall.Dinner.forEach((meal: any) => {
          console.log(meal);
          if (meal.toLowerCase().includes(food.toLowerCase())) {
            if (!availableHalls.includes(hall.name + " Dinner")) {
              availableHalls.push(hall.name + " Dinner");
            }
          }
        });
      }

      //   if (hall.meals.includes(food)) {
      //     availableHalls.push(hall.name);
      //   }
    });

    return availableHalls;
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event);
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
