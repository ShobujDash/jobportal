import { AvatarImage } from "@radix-ui/react-avatar";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { Avatar } from "../ui/avatar";
import { Popover } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminJobsTable() {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs =
      allAdminJobs.length >= 0 &&
      allAdminJobs.filter((job) => {
        if (!searchJobByText) {
          return true;
        }
        return (
          job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
          job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase()) 
        );
      });
    setFilterJobs(filteredJobs);
  }, [searchJobByText,allAdminJobs]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow> 
        </TableHeader>
        <TableBody>
          {filterJobs.length <= 0 ? (
            <span>You havent registered any company yet.</span>
          ) : (
            filterJobs?.map((job) => {
              return (
                <TableRow key={job?._id}>
                  <TableCell>{job?.company?.name}</TableCell>
                  <TableCell>{job?.title}</TableCell>
                  <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                  <TableCell className="text-right">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />{" "}
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div
                          onClick={() => navigate(`/admin/jobs/create`)}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                        <div
                          onClick={() =>
                            navigate(`/admin/jobs/${job?._id}/applicants`)
                          }
                          className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                        >
                          <Eye className="w-4" />
                          <span>Applicants</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminJobsTable;
