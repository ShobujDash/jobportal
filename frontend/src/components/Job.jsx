import React from 'react'
import { Button } from './ui/button'
import {  Bookmark } from 'lucide-react'
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import image from '../assets/company.png'


function Job() {
  return (
    <div className="p-5 rounded-md shadow-2xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 bg-white ">
          2 days ago
        </p>
        <Button variant="outline" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icons">
          <Avatar>
            <AvatarImage src="https://i.postimg.cc/9XY1hNLb/icons8-company-50.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-lg my-2 ">Title</h1>
        <p className="text-sm text-muted-foreground ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          cumque veniam fugiat odit doloribus doloremque quas maiores beatae
          ipsam at?
        </p>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Badge className="text-blue-700 font-bold">12 Positions</Badge>
        <Badge className="text-[#F83002] font-bold">Part Time</Badge>
        <Badge className="text-[#7209b7] font-bold">24LPA</Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
}

export default Job
