import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from "axios";
import { Textarea } from "../components/ui/textarea";

type FormField = {
  email: string;
  name: string;
  phone: string;
  description: string;
};
const Agent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>();

  const handleFormSubmit: SubmitHandler<FormField> = async (data) => {
    // https://swifty-backend.onrender.com/agents/api/support-agents
    console.log("Agent Details", data);
    axios
      .post(
        "https://swifty-backend.onrender.com/agent/api/support-agents",
        data
      )
      .then((response) => {
        console.log("response Status", response.status);
      });

    console.log("Agent details submitted");
  };
  return (
    <>
      <div className="">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className=" w-2/5 space-y-6 mx-auto  "
        >
          <Input
            className="bg-transparent"
            placeholder="Email"
            type="text"
            {...register("email", {
              required: "email is required",
              validate: {
                matchPattern: (value) =>
                  /^\S+@\S+\.\S+$/.test(value) || "invalid email address",
              },
            })}
          ></Input>
          {errors.email && <div>{errors.email.message}</div>}

          <Input
            className="bg-transparent"
            placeholder="Username"
            type="text"
            {...register("name", { required: true })}
          ></Input>
          {errors.name && <div>{errors.name.message}</div>}
          <Input
            className="bg-transparent"
            placeholder="Phone number"
            type="text"
            {...register("phone", {
              required: true,
              minLength: 10,
            })}
          ></Input>
          {errors.phone && <div>{errors.phone.message}</div>}
          <Textarea
            className="bg-transparent"
            placeholder="Enter your description here"
            {...register("description", { required: true })}
          ></Textarea>
          {/* <Input
            className="bg-transparent"
            placeholder="Description"
            type="text"
            {...register("description", { required: true })}
          ></Input> */}
          {errors.description && <div>{errors.description.message}</div>}
          <Button
            type="submit"
            variant="outline"
            className="bg-transprant text-white"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Agent;
