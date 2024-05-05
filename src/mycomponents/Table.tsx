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
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

enum filterTypes {
  type = "type",
  status = "status",
  assignedto = "	assignedto",
  severity = "severity",
}
enum sortTypes {
  resolvedon = "resolvedon",
  datecreated = "datecreated",
}
enum orderTypes {
  ASC = "ASC",
  DSC = "DSC",
}
enum pageLength {
  small = '5',
  medium = '10',
  larger = '15',
}

type FormField = {
  filter: filterTypes;
  sort: sortTypes;
  order: orderTypes;
  page: pageLength;
};

const Tables = () => {
  const [tableData, setTableData] = useState([]);
  const [viewTableData, setViewTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const form = useForm<FormField>();
  const { control, handleSubmit } = form;
  // register,
  const fetchData = async () => {
    axios
      .get("https://swifty-backend.onrender.com/ticket/api/support-tickets")
      .then((response) => {
        setTableData(response.data.msg);
        setViewTableData([...tableData]);
        console.log(tableData);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const searchSvg = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     stroke-width="1.5"
  //     stroke="currentColor"
  //     className="w-6 h-6"
  //   >
  //     <path
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  //     />
  //   </svg>
  // );
  useEffect(() => {
    fetchData();
  }, [tableData]);
  const handleFormControl: SubmitHandler<FormField> = async (data) => {
    console.log("Filter table Details", data);
  };
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
          <Form {...form}>
            <form onChange={handleSubmit(handleFormControl)}>
              {" "}
              <div className="flex mb-2 justify-between">
                <div className="gap-x-5 flex">
                  {/* <Button variant="outline" className="bg-transparent">
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
                  </Button> */}
                  <Input
                    placeholder="Search tickets ........"
                    className="w-[200px] bg-transparent text-white"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  ></Input>

                  <FormField
                    control={control}
                    name="filter"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-[140px] bg-transparent">
                                <SelectValue placeholder="Select a filter" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
                              <SelectGroup>
                                <SelectItem value="type">type</SelectItem>
                                <SelectItem value="status">status</SelectItem>
                                <SelectItem value="assigned to">
                                  assigned to
                                </SelectItem>
                                <SelectItem value="severity">
                                  severity
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="gap-x-5 flex">
                  {/* sort select */}

                  <FormField
                    control={control}
                    name="sort"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-[150px] bg-transparent text-center">
                                <SelectValue placeholder="Select sort" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
                              <SelectGroup>
                                <SelectItem
                                  value="Resolved On"
                                  className="text-center"
                                >
                                  Resolved On
                                </SelectItem>
                                <SelectItem value="Date Created">
                                  Date Created
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  {/* order select */}
                  <FormField
                    control={control}
                    name="order"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-[80px] bg-transparent">
                                <SelectValue placeholder="Order" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
                              <SelectGroup>
                                <SelectItem value="ASC">ASC</SelectItem>
                                <SelectItem value="DSC">DSC</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  {/* clear ffilter button */}
                  <Button variant="outline" className="bg-transparent">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    Clear filters{" "}
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
                      <TableCell className="text-left">
                        {row["status"]}
                      </TableCell>
                      <TableCell className="text-left">
                        {row["severity"]}
                      </TableCell>
                      <TableCell className="text-left">
                        {row["resolvedOn"].split("T")[0]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption>
                  <div className="flex">
                    {/* page select */}
                    <FormField
                      control={control}
                      name="page"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-[140px] bg-transparent text-white">
                                  <SelectValue
                                    placeholder="Items per page"
                                    className=""
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="">
                                <SelectGroup className="z-30 ">
                                  <SelectItem value="5">5</SelectItem>
                                  <SelectItem value="10">10</SelectItem>
                                  <SelectItem value="15">15</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />

                    {/* pagination component */}
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
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

export default Tables;
