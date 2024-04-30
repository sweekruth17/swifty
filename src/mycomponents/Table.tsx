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
        <div>loading....</div>
      ) : (
        <div>
          <div className="flex">
            <Button variant="ghost" className="bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </Button>
          </div>
          <Table className="overflow-y-auto h-full">
            <TableCaption>A list of your recent tickets</TableCaption>
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
            <TableFooter>
              <TableRow>
                {/* <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell> */}
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )}
    </>
  );
};

export default Tables;
