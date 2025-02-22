import {useContext} from "react";
import {MyContext} from "../context/MyContextProvider.tsx";
import './AA.css'

export const AA = () => {
    const {theme} =  useContext(MyContext);

    return (

        <div className={theme}>
            this is component AA, and theme value is - {theme}
        </div>
    );
};