import {ITodoResponse} from "../models/ITodoResponse.ts";

const url = import.meta.env.VITE_API_URL;

export const getAllTodos = async (): Promise<ITodoResponse> =>{
   const todosResponseObject = await fetch(url + "/todos")
        .then(value => value.json()) ;

   return  todosResponseObject
}