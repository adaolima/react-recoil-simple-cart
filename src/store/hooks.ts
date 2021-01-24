import { useRecoilState } from "recoil";
import { cart, ICart } from "./atoms";


const cloneIndex = (items:ICart[], id:string) => ({
    clone: items.map((item) => ({ ...item })),
    index: items.findIndex((item) => item.id === id),
});