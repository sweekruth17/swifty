import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { Button } from "../components/ui/button";

const Tables = () => {
  const [tableData, setTableData] = useState([]);
  // const [viewTableData, setViewTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    axios
      .get("https://swifty-backend.onrender.com/ticket/api/support-tickets")
      .then((response) => {
        setTableData(response.data.msg);
        console.log(tableData);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [tableData]);
  return (
    <>
      {isLoading ? (
        <div className="w-[1200px] h-[275px] ">
          <Skeleton className="h-8 w-[1000px] mx-auto my-4 bg-white/15" />
          <Skeleton className="h-8 w-[1000px] mx-auto my-4 bg-white/15" />
          <Skeleton className="h-8 w-[1000px] mx-auto my-4 bg-white/15" />
          <Skeleton className="h-8 w-[1000px] mx-auto my-4 bg-white/15" />
          <Skeleton className="h-8 w-[1000px] mx-auto my-4 bg-white/15" />
        </div>
      ) : (
        <div>
          <div className="flex mb-2 justify-between">
            <div className="gap-x-5 flex">
              <Button variant="outline" className="bg-transparent">
                Refresh
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </Button>
              <Select>
                <SelectTrigger className="w-[140px] bg-transparent">
                  <SelectValue placeholder="Select a filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="type">type</SelectItem>
                    <SelectItem value="status">status</SelectItem>
                    <SelectItem value="assigned to">assigned to</SelectItem>
                    <SelectItem value="severity">severity</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="gap-x-5 flex">
              <Select>
                <SelectTrigger className="w-[140px] bg-transparent text-center">
                  <SelectValue placeholder="Select sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Resolved On" className="text-center">
                      Resolved On
                    </SelectItem>
                    <SelectItem value="Date Created">Date Created</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[80px] bg-transparent">
                  <SelectValue placeholder="Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ASC">ASC</SelectItem>
                    <SelectItem value="DSC">DSC</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button variant="outline" className="bg-transparent">
                Clear filters
              </Button>
            </div>
          </div>
          <Table className="overflow-y-auto h-full">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="">Title</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="">Type</TableHead>
                <TableHead className="">AssignedTo</TableHead>

                <TableHead className="">Status</TableHead>
                <TableHead className="">Severity</TableHead>
                <TableHead className="">Resolved On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row: any) => (
                <TableRow key={row["_id"]}>
                  <TableCell className="font-medium text-left">
                    {row["topic"]}
                  </TableCell>
                  <TableCell className="text-left">
                    {row["dateCreated"].split("T")[0]}
                  </TableCell>

                  <TableCell className="text-left">
                    {row["description"]}
                  </TableCell>

                  <TableCell className="text-left">{row["type"]}</TableCell>
                  <TableCell className="text-left">
                    {row["assignedTo"]}
                  </TableCell>
                  <TableCell className="text-left">{row["status"]}</TableCell>
                  <TableCell className="text-left">{row["severity"]}</TableCell>
                  <TableCell className="text-left">
                    {row["resolvedOn"].split("T")[0]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption>
              <div className="flex">
                <Select>
                  <SelectTrigger className="w-[160px] bg-transparent text-white">
                    <SelectValue placeholder="Items per page" className="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="z-30 ">
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Pagination className="mr-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TableCaption>
            <TableFooter></TableFooter>
          </Table>
        </div>
      )}
    </>
  );
};

export default Tables;
