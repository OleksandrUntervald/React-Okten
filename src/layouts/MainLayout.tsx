import {Outlet} from "react-router-dom";
import {Menu} from "../component/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
           <Outlet/>

        </div>
    );
};