import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllArticle from "../pages/allArticle/AllArticle";
import ArticleDetails from "../pages/allArticle/ArticleDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:() => fetch("/news.json")
        }, 
        {
          path: 'allArticle',
          element: <AllArticle></AllArticle>,
          loader:() => fetch("/news.json")
          
      }, 
      {
        path: '/articleDetails/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader:() => fetch("/news.json")
    }, 
    ]
}
]);