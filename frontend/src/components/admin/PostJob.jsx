import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";


function PostJob() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedConpany = companies.find((company) => {
      return company.name.toLowerCase() === value;
    });
    setInput({ ...input, companyId: selectedConpany._id });
  };

  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          'Content-Type':"application/json"
        },
        withCredentials:true
      });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-4xl border border-gray-300 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                placeholder="Title"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="description"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Recuirement</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                placeholder="Requirements"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                placeholder="salary"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                placeholder="location"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                placeholder="jobType"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>Experience</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                placeholder="experience"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label>No of Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                placeholder="position"
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            {companies.length >= 0 && (
              <Select onValueChange={selectChangeHandler}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Company</SelectLabel>
                    {companies.map((company) => {
                      return (
                        <SelectItem
                          key={company._id}
                          value={company?.name?.toLowerCase()}
                        >
                          {company?.name}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 animate-spin" />
              Please wait..
            </Button>
          ) : (
            <Button type="submit" className="my-4 w-full">
              Post New Job
            </Button>
          )}
          {companies.length === 0 && (
            <p className="text-xs text-red-600 text-center my-1">
              Please register a company first , before posting a job
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default PostJob;
