import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Tables from "./Table";
import Navbar from "./Navbar";
import Agent from "./Agent";
import Ticket from "./Ticket";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Tabs defaultValue="table" className="w-[1200px] mx-auto">
        <TabsList className="grid w-full grid-cols-3  bg-white bg-opacity-5 border-[1px] mt-16 text-white border-white">
          <TabsTrigger value="table">Tickets List</TabsTrigger>
          <TabsTrigger value="Agents">Add Agents</TabsTrigger>
          <TabsTrigger value="Tickets"> Add Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="table" className="mt-6 text-center">
          <Card className="bg-transparent text-white">
            <CardHeader>
              <CardTitle>Monitor all your tickets here</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
                add all the table functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Tables></Tables>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Agents" className="mt-6 text-center">
          <Card className="bg-transparent text-white">
            <CardHeader>
              <CardTitle>Create new Agent</CardTitle>
              <CardDescription>
                Enter details of your new agent here. Click submit when you're
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Agent></Agent>
            </CardContent>
            <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Tickets" className="mt-6 text-center">
          <Card className="bg-transparent text-white">
            <CardHeader>
              <CardTitle>Create a new Ticket</CardTitle>
              <CardDescription>
                Enter ticket details and click on submit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Ticket></Ticket>
            </CardContent>
            <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Home;
