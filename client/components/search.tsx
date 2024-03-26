import { Button } from "./ui/button";
import { Input } from "./ui/input";
import diningMenu from "../data/foodData"

export default function Search() {
  function isFoodAvailable(food: string): string[] {
    const availableHalls: string[] = [];

    diningMenu.forEach((hall) => {
      if (hall.meals.includes(food)) {
        availableHalls.push(hall.name);
      }
    });

    return availableHalls;
  }
  return (
    <div className="w-full max-w-[500px]">
      <form className="flex items-stretch gap-2 md:gap-4">
        <Input
          className="flex-1 min-w-0"
          placeholder="Enter your search query..."
          type="search"
        />
        <Button className="shrink-0" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
