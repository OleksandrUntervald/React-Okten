import {ITodo} from "../../models/ITodo.ts";
interface ITodoProps{
    item: ITodo
}

export const TodoComponent = ({item}: ITodoProps) => {
    return (
        <div>
                <h3>{item.title}</h3>
        </div>
    );
};