import {Outlet,Link} from "react-router"
export default function DetailNested(){
    return(
        <div>
            <nav>
                <Link to="/DetailNested"></Link>
                <Link to="Hello">Hello</Link>
                <Link to="Hii">Hii</Link>
            </nav>
            <h1 className="bold text-6xl">Welcome to Details Nested Page</h1>
            <Outlet></Outlet>
        </div>
    )
}