import { selector } from "recoil";
import { cart, ICart } from "./atoms";

export const cartState = selector({
  key: 'cartState',
  get: ({get}) => {
      const totalCost:number = get<ICart[]>(cart).reduce((a,b) => a + b.price * b.qty, 0);
      const totalQty:number = get<ICart[]>(cart).reduce((a,b) => a + b.qty, 0);
      return {
          totalCost,
          totalQty
      }
  }  
})