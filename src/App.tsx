import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./mycomponents/Layout";
import StartPage from "./mycomponents/StartPage";
import Agent from "./mycomponents/Agent";
import Ticket from "./mycomponents/Ticket";
import Home from "./mycomponents/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<StartPage />} />
        <Route path="agent" element={<Agent />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="table" element={<Home />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
