import { selector } from "recoil";
import { cart, ICart } from "./atoms";

export const carState = selector({
  key: 'carState',
  get: ({get}) => {
      const totalCost = get<ICart[]>(cart).reduce((a,b) => a + b.price * b.qty, 0);
      const totalQty = get<ICart[]>(cart).reduce((a,b) => a + b.qty, 0);
      return {
          totalCost,
          totalQty
      }
  }  
})