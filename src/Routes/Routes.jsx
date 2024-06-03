import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllArticle from "../pages/allArticle/AllArticle";
import ArticleDetails from "../pages/allArticle/ArticleDetails";
import AddArticles from "../pages/addArticles/AddArticles";
import Subscription from "../pages/subscription/Subscription";

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
      }, 
      {
        path: '/articleDetails/:id',
        element: <ArticleDetails></ArticleDetails>,
        loader:() => fetch("/news.json")
    }, 
      {
        path: '/addArticles',
        element: <AddArticles></AddArticles>,
    }, 
      {
        path: 'subscription',
        element: <Subscription></Subscription>,
    }, 
    ]
}
]);