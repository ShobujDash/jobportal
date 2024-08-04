import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { FastForward, LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

function Navbar() {
  
  const {user} = useSelector(store=>store.auth)

  return (
    <div className="bg-white ">
      <div className="flex justify-between items-center mx-auto md:max-w-7xl  h-16">
        <div>
          <h1 className="font-bold text-2xl">
            <Link to="/">
              Job<span className="text-[#F83002]">Portal</span>{" "}
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-12 ">
          <ul className="hidden sm:flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38c2] hover:bg-[#5a10db]" variant="">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium ">Shobuj MernStack</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-500 my-2">
                  <div className="flex w-fit items-center gap-2">
                    <User2 />
                    <Button variant="link">
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
