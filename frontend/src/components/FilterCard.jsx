
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["DelhiNCR", "Bangalore", "Hyderabad", "pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

function FilterCard() {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup defaultValue="comfortable">
        {
          filterData.map((data, index) => (
            <div key={index}>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {
                data.array.map((item, indexs) => (
                  <div className="flex items-center space-x-2 my-2" key={indexs}>
                    <RadioGroupItem value={item } />
                    <Label >{ item}</Label>
                  </div>
                ))
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
