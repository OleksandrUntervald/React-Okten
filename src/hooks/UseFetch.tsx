import {useEffect, useState} from "react";

export const UseFetch = <T, > (url: string) => {

     const [obj, setObj] = useState<T>()
    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setObj(value)
            })
    }, []);

    return  obj
};