import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/NotFound/NotFound";
import Contact from "../Component/Contact/Contact";
import BlogCardDetails from "../Pages/BlogCardDetails/BlogCardDetails";
import MyFavorite from "../Component/MyFavorite/MyFavorite";
import AboutUs from "../Component/AboutUs/AboutUs";

const Router = createBrowserRouter([
            {path: "/",
            errorElement: <ErrorPage></ErrorPage>,
            element : <Layout></Layout>,
            
            children :[
                  {
                        path: "/",
                        element : <Home></Home>,
                        loader:()=>fetch('/blogdata.json'),
                        
                  },
                  {
                        path: "/contact",
                        element : <Contact></Contact> ,
                        
                  },
                  {
                        path: "/blogData/:id",
                        element :<BlogCardDetails></BlogCardDetails>,
                        loader :()=> fetch('/blogdata.json')
                    },
                    {
                        path : "/favorite",
                        element : <MyFavorite></MyFavorite> ,
                    },
                    {
                        path : "/about",
                        element : <AboutUs></AboutUs> ,
                    }
            ]
}
 
]);

export default Router;
