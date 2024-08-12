import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useState } from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

function CompanyCreate() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");

  const registerNewCompany = async () => {
    try {
      const { data } = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
        headers: {
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      if (data?.success) {
        dispatch(setSingleCompany(data.company))
        toast.success(data.message)
        const companyId = data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your comapny name? you can change this
            later.
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          value={companyName}
          onChange={(e)=>setCompanyName(e.target.value)}
          className="my-2"
          placeholder="JobHunt, Microsoft etc."
        />
        <div className="flex items-center gap-2 my-10">
          <Button variant="outfit" onClick={() => navigate("/admin/companies")}>
            Cencel
          </Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </>
  );
}

export default CompanyCreate;
