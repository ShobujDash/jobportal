import { DialogTitle } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);


  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }


    try {
      setLoading(true)
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          'Content-Type': "multipart/form-data"
        },
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.res.data.message)
    } finally {
      setLoading(false)
    }
    setOpen(false)


    
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={input.email}
                  onChange={changeEventHandler}
                  type="email"
                  id="email"
                  name="email"
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="number">Number</Label>
                <Input
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  id="number"
                  name="phoneNumber"
                  type="Number"
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  value={input.bio}
                  onChange={changeEventHandler}
                  id="bioi"
                  name="bio"
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="skills">Skills</Label>
                <Input
                  value={input.skills}
                  onChange={changeEventHandler}
                  id="skills"
                  name="skills"
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="file">Resume</Label>
                <Input
                  id="file"
                  type="file"
                  name="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 animate-spin" />
                  Please wait..
                </Button>
              ) : (
                <Button type="submit" className="my-4 w-full">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
