import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";


export const TodoComponents = () => {
    const [todos, setTodods] = useState<ITodo[]>([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(value => value.json())
            .then((iTodos: ITodo[] )=> {
        setTodods(iTodos)
            })
    }, [])
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};