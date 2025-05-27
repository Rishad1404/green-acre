import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Homepage from "../components/pages/HomePage/Homepage";
import Root from "../components/Root/Root";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Homepage></Homepage>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
      ]
    },
  ]);

  export default router;