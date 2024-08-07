import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {  Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import ApplitedJobTable from "./ApplitedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";



const isResume = true;
 

function Profile() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center  gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                className="h-24 w-24"
                src={user?.profile?.profilePhoto}
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills?.map((item, index) => {
                return <Badge key={index}>{item}</Badge>;
              })
            ) : (
              <span>Not Applicable</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {user?.profile?.resume ? (
            <a
              className="text-blue-600 w-full hover:underline cursor-pointer"
              target="blank"
              href={user?.profile?.resume}
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>Not Applicabe</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8">
        <h1 className="font-bold text-xl">Applied Jobs.</h1>
        <ApplitedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
