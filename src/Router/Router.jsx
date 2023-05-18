import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRout from "./PrivetRout";
import MyToys from "../Pages/MyToys/MyToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: (
          <PrivetRout>
            <AllToys></AllToys>
          </PrivetRout>
        ),
        loader: () => fetch("http://localhost:5000/allToys"),
      },
      {
        path: "/addAToy",
        element: (
          <PrivetRout>
            <AddAToy></AddAToy>
          </PrivetRout>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRout>
            <MyToys></MyToys>
          </PrivetRout>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
