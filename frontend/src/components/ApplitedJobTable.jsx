import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux';

function ApplitedJobTable() {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Table>
        <TableCaption>A List of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You have not applied any job yet.</span>
          ) : (
            allAppliedJobs.map((appliJob) => (
              <TableRow key={appliJob._id}>
                <TableCell>{appliJob?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{appliJob?.job?.title}</TableCell>
                <TableCell>{appliJob?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge className={`${appliJob?.status === 'rejected' ? "bg-red-400": appliJob?.status === "pending" ? "bg-gray-400" :"bg-green-400"} px-3 py-1` }>
                    {
                      appliJob?.status.toUpperCase() 
                    }
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplitedJobTable
