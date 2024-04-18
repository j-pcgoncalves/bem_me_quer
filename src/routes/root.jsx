import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <h2>FOOTER</h2>
        </>
    )
}