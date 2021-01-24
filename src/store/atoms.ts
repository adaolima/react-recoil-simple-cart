import { atom, RecoilState } from "recoil";


export interface ICart{
    id: string
    price: number
    qty: number
}

export const cart = atom({
    key: "cart",
    default: [],
})