import { setSearchQuery } from "@/redux/jobSlice";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

function CategoryCarousel() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const searchJobHandler = (query) => {
     dispatch(setSearchQuery(query));
     navigate("/browse");
   };
  return (
    <div>
      <Carousel className="w-2/3 sm:max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/3" key={index}>
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full "
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
