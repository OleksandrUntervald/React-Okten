import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

type Props = {
    user: IUser
}
export const UserComponent: FC<Props> = ({user}) => {
    const navigation = useNavigate()

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return (  <div className={"my-5"}>
            {user.username}: {user.email}

            <button className={"border-2"} onClick={onButtonClickNavigate}>click me</button>
        </div>
    );
};