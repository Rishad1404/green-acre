import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Homepage from "../components/pages/HomePage/Homepage";
import Root from "../components/Root/Root";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Homepage></Homepage>
        }
      ]
    },
  ]);

  export default router;