const { RouterProvider } = require("react-router-dom");
const { router } = require("routing/routers");

export const App = () => <RouterProvider router={router}/>