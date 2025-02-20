import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";

const url = 'https://dummyjson.com';

export const getUsers = async (page: string): Promise<IBaseResponseModel> =>{

    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = await fetch(url + '/users' + '?skip=' + skip)
        .then(value => value.json());

    return response
}