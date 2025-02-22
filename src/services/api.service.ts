import  axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMin: number
}

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers: {}
});



axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;

    }
    return requestObject
})


export const login = async ({username, password, expiresInMin}: LoginData): Promise <IUserWithTokens> => {
   const {data: UserWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMin});
   console.log(UserWithTokens)
   localStorage.setItem('user', JSON.stringify(UserWithTokens));
   return UserWithTokens
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
  const {data: {products}} = await axiosInstance.get<IProductsResponseModel>('/products');
  return  products
}

export  const  refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}}  = await axiosInstance.post('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}







