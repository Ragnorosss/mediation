import { useRouteError,Link } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <h1>Oops </h1>
            <p>Somethink wrong</p>
            <p>{error.statusText ?? error.message}</p>
            <Link to='/'>Home</Link>
        </>
    )  
}