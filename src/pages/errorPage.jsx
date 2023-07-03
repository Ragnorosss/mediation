import { useRouteError, Link } from "react-router-dom"
import 'style/_errorPage.scss'
export const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="errorpage__wrapper">
            <h1 className="errorpage__title">Oops </h1>
            <p className="errorpage__subtitle">Somethink wrong</p>
            <p className="errorpage__info">{error.statusText ?? error.message}</p>
            <Link className="errorpage__link" to='/'>Home</Link>
        </div>
    )  
}