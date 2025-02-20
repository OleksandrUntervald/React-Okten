import {useEffect, useState} from "react";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'})

    const [ users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IBaseResponseModel) => {
            setUsers(users);
        });
    }, [searchParams]);


    return (
       <div>
           {
               users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }
       </div>


    );
};