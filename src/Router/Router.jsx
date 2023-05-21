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
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://hero-dungeon-server.vercel.app/allToys"),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivetRout>
            <ToyDetails></ToyDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://hero-dungeon-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/allToys",
        element: (
          <PrivetRout>
            <AllToys></AllToys>
          </PrivetRout>
        ),
        loader: () => fetch("https://hero-dungeon-server.vercel.app/allToys"),
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
        path: "/updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`https://hero-dungeon-server.vercel.app/allToys/${params.id}`),
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
