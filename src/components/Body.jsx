import { RouterProvider, createBrowserRouter } from "react-router";
import Browse from "./Browse";
import Login from "./Login";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
