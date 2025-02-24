import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userAction} from "../redux/slices/UserSlice.ts";
import {IUser} from "../models/IUser.ts";


export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const  users = useAppSelector((state) => state.useStoreSlice.users);
    useEffect(() => {
        dispatch(userAction.loadUsers());
    }, []);
    return (
        <>
            {users.map((user: IUser) => (<div key={user.id}> {user.name}</div>))}
        </>
    );
};