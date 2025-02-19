import {ITodo} from "../../models/ITodo.ts";
interface ITodoProps{
    item: ITodo
}

export const TodoComponent = ({item}: ITodoProps) => {
    return (
        <div>
                <h3>{item.todo}</h3>
        </div>
    );
};