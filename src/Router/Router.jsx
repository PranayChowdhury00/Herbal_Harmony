import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/services/Services";
import HowIsItWork from "../pages/HowIsItWork/HowIsItWork";
import Contact from "../pages/Contact/Contact";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/howItWork',
          element:<HowIsItWork></HowIsItWork>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

  export default router;