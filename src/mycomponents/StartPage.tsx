import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center text-center mt-20">
          <div className="h-12  bg-gradient-to-b from-primary1 from-5% to-primary2 text-lg font-medium flex border-[1px]   bg-white bg-opacity-5 rounded-xl my-3 px-4 py-1 ">
            <div className="mt-1.5 flex">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </span>
              New: Advanced algorithm for scrum work
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl lg:mb-7 xl:text-7xl xl:mb-10 font-bold">
            Say Goodbye to Boring Tasks, Hello to{" "}
            <span className="bg-gradient-to-r from-red-600 to-violet-700  bg-clip-text text-transparent">
              Swifty
            </span>
          </h1>
          <div className="flex my-1">
            {" "}
            <div className=" text-xl lg:text-2xl xl:text-4xl  px-6 py-6 mx-auto text-white rounded-lg  font-semibold mt-2 mb-4 bg-gradient-to-r from-red-600 to-violet-700">
              Efficiency Redefined like ever before 📈
            </div>
          </div>

          <div className="text-lg flex mx-auto  max-w-[600px] font-normal">
            Swifty is a revolutionary SaaS product that automates tedious tasks
            in your scrum workflow. With SwiftScrum, you can say goodbye to
            manual ticket assignments and focus on what truly matters—delivering
            results. Our intuitive platform streamlines your scrum process,
            ensuring efficiency, speed, and a seamless experience for your team.
          </div>
          <div className="mt-5  bg-none ">
            <Link to="./table">
              <Button
                variant="outline"
                className="bg-transparent px-6 py-2 text-lg font-normal"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
