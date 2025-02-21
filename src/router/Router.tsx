import App from "../App.tsx";
import {CreateCarsPage} from "../pages/CreateCarsPage.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {createBrowserRouter} from "react-router";

    export const routes = createBrowserRouter([
        {
            path: '/', element: <App/>,children:[
                {path:'cars', element:<CarsPage/>},
                {path:'cars/create', element:<CreateCarsPage/>}
            ]
        }
    ])
