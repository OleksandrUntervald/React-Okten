
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getAllTodos} from "../../services/api.services.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";


export const TodoComponents = () => {
    const [todos, setTodods] = useState<ITodo[]>([])
    useEffect(() =>{
        getAllTodos().then(({todos}) => setTodods(todos))
    }, [])
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};