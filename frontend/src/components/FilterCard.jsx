
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";

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
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(() => {
    dispatch(setSearchQuery(selectedValue))
  },[selectedValue])
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup value={selectedValue} onValueChange={changeHandler} defaultValue="comfortable">
        {
          filterData.map((data, index) => (
            <div key={index}>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId = `id${index}-${idx}`
                  return (
                    <div className="flex items-center space-x-2 my-2" key={idx}>
                    <RadioGroupItem value={item } id={itemId} />
                    <Label htmlFor={itemId}>{ item}</Label>
                  </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
