/* eslint-disable no-unused-vars */
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Shop from "../Pages/Shop/Shop";
import App from "../App";
import About from "../components/About";
import Blog from "../components/Blog";
import Home from "../components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/shop",
        element:<Shop />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/bolg",
        element:<Blog />
      },
      

    ]
  },
]);
export default router