import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <>
            <h2>HEADER</h2>
            <Outlet />
            <h2>FOOTER</h2>
        </>
    )
}