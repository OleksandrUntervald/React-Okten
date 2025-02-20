import {IUser} from "./IUser.ts";

export type IBaseResponseModel = {
    total: number,
    skip: number,
    limit: number
    users: IUser[]
}