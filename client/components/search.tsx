"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import diningMenu from "@/data/foodData";

export default function Search() {
  const [selectedOption, setSelectedOption] = useState("Today");

  let which_day = 0;
  function getDayOfWeek(dateString: string) {
    const parts = dateString.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-indexed in JavaScript Date object
    const day = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }
  const [availableHalls, setAvailableHalls] = useState<string[]>([]);
  function isFoodAvailable(food: string, which_day?: number): string[] {
    let availableHalls: string[] = [];

    // Iterate through each date in the diningMenu
    diningMenu.forEach((date: any, index: number) => {
      // Check if which_day is provided and if it matches the current index
      console.log("which_day", which_day);
      console.log("index", index);
      if (which_day !== undefined && which_day !== index - 1) {
        return; // Skip to the next date if it's not the specified day
      }
      console.log("passed");
      date.dining_halls.forEach((hall: any) => {
        // Iterate through each meal in the dining hall
        Object.keys(hall.meals).forEach((mealTime: string) => {
          hall.meals[mealTime].forEach((meal: string) => {
            // Check if the meal contains the searched food
            if (meal.toLowerCase().includes(food.toLowerCase())) {
              // If the meal contains the searched food and it's not already in availableHalls, add it
              const hallMeal = `${getDayOfWeek(date.date)} at ${
                hall.name
              }'s ${mealTime}: ${meal}`;
              if (!availableHalls.includes(hallMeal)) {
                availableHalls.push(hallMeal);
              }
            }
          });
        });
      });
    });

    console.log(availableHalls);
    if (which_day == 0) {
      availableHalls = [availableHalls[0]];
    } else if (which_day == 1) {
      availableHalls = [availableHalls[1]];
    }
    return availableHalls;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // console.log(event);
    const formData = new FormData(event.currentTarget);
    const food = formData.get("searchQuery") as string;
    const halls = isFoodAvailable(food, which_day);
    setAvailableHalls(halls);
  }
  function handleDaySelection(selectedDay: string): void {
    switch (selectedDay) {
      case "Today":
        which_day = 0;
        break;
      case "Tomorrow":
        which_day = 1;
        break;
      case "All Week":
        which_day = 2;
        break;
      default:
        which_day = 0;
        break;
    }
    setSelectedOption(selectedDay);
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
      <DropdownMenu>
        <DropdownMenuTrigger className="my-5 w-full bg-gray-200">
          {selectedOption}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-slate-200">
          <DropdownMenuLabel className = "min-w-[300px] justify-center flex ">Which day</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="min-w-[300px] justify-center flex bg-slate-200"
            onClick={() => handleDaySelection("Today")}
          >
            Today
          </DropdownMenuItem>
          <DropdownMenuItem
            className="min-w-[300px] justify-center flex  bg-slate-200"
            onClick={() => handleDaySelection("Tomorrow")}
          >
            Tomorrow
          </DropdownMenuItem>
          <DropdownMenuItem
            className="min-w-[300px] justify-center flex  bg-slate-200"
            onClick={() => handleDaySelection("All Week")}
          >
            All Week
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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
