import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center  gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                className="h-24 w-24"
                src="https://github.com/shadcn.png"
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti similique, tempore laboriosam a maiores ad?
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
