import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainSection } from "section/main/MainSection";

export const router = createBrowserRouter([
    {
        path:"/Pages",
        element:<MainSection/>
    }
])
export const RouterNav = () => <RouterProvider router={router}/>