
import React from 'react'
import { Badge } from './ui/badge';

function LatestJobCards() {
  return (
    <div className="p-5 rounded-md shadow-2xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Compnay Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-medium text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt4">
        <Badge className="text-blue-700 font-bold">12 Positions</Badge>
        <Badge className="text-[#F83002] font-bold">Part Time</Badge>
        <Badge className="text-[#7209b7] font-bold">24LPA</Badge>
      </div>
    </div>
  );
}

export default LatestJobCards
