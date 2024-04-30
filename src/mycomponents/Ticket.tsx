import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";

enum severityType {
  low = "low",
  medium = "medium",
  high = "high",
}
enum statusType {
  new = "new",
  assigned = "assigned",
  resolved = "resolved",
}
type FormField = {
  topic: string;
  description: string;
  severity: severityType;
  type: string;
  status: statusType;
};
const Ticket = () => {
  const form = useForm<FormField>();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const handleFormSubmit: SubmitHandler<FormField> = async (data) => {
    // https://swifty-backend.onrender.com/agents/api/support-agents
    console.log("Ticket Details", data);
    axios
      .post(
        "https://swifty-backend.onrender.com/ticket/api/support-tickets",
        data
      )
      .then((response) => {
        console.log("response Status", response.status);
      });

    console.log("Ticket details submitted");
  };
  return (
    <>
      <div>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className=" w-2/5 space-y-6 mx-auto  "
          >
            <Input
              className="bg-transparent"
              placeholder="Topic"
              type="text"
              {...register("topic", {
                required: "topic is required",
              })}
            ></Input>
            {errors.topic && <div>{errors.topic.message}</div>}
            <Textarea
              className="bg-transparent"
              placeholder="Enter your description here"
              {...register("description", { required: true })}
            ></Textarea>

            {errors.description && <div>{errors.description.message}</div>}
            <FormField
              control={control}
              name="severity"
              render={({ field }) => {
                return (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className=" bg-transparent">
                          <SelectValue placeholder="Severity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        <SelectGroup>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Input
              className="bg-transparent"
              placeholder="Type"
              type="text"
              {...register("type", { required: true })}
            ></Input>
            {errors.type && <div>{errors.type.message}</div>}
            <FormField
              control={control}
              name="status"
              render={({ field }) => {
                return (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className=" bg-transparent">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        <SelectGroup>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Assigned">Assigned</SelectItem>
                          <SelectItem value="Resolved">Resolved</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button
              type="submit"
              variant="outline"
              className="bg-transprant text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Ticket;
