import { atom, RecoilState } from "recoil";

interface ICart {
    key: string
    default: any[]
}

export const cart = atom({
    key: "cart",
    default: [],
})