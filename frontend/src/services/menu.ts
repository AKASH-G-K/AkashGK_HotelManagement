import axios from "axios";
import IRestaurant from "../models/IRestaurant";
import IMenuItem from "../models/IMenuItem";

const getMenuForRestaurant = ( id: number ) => {
    return axios.get<IMenuItem[]>(`${process.env.REACT_APP_API_BASE_URL}/restaurants/${id}/items`)
    .then( response => response.data);

    }

const  addItemToMenu = ( menuItem: Omit<IMenuItem, 'id'> ) => {
    return axios.post<IMenuItem>(`${process.env.REACT_APP_API_BASE_URL}/items`, menuItem, 
    {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then( response => response.data)
};
export {
    getMenuForRestaurant,
    addItemToMenu
};