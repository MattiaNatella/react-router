import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNav />
            </header>
            <main>
                <div className="container my-5">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout