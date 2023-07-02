import Layout from "./layout/Layout";
import About from "pages/HomePage";
import { srcPath } from "./navigated/NavigatedSrc";
import { createBrowserRouter } from "react-router-dom";
import { PersonalArea } from 'section/PersonalArea/PersonalArea'
import { ErrorPage } from "pages/errorPage";
import { LibraryPage } from 'pages/LibraryPage'
export const router = createBrowserRouter([
    {
        path:srcPath.toHome,
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<About/>
            },
            {
                path:srcPath.toPersArea,
                element:<PersonalArea/>
            },
            {
                path:srcPath.toLibrary,
                element:<LibraryPage/>
            }
        ]
    },
    
])