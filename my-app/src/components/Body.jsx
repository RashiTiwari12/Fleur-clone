import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
