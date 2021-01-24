import { useRecoilState} from "recoil";
import { cart, ICart } from "./atoms";


const cloneIndex = (items:ICart[], id:string) => ({
    clone: items.map((item) => ({ ...item })),
    index: items.findIndex((item) => item.id === id),
});

export const useAddItem = () => {
  const [items, setItems] = useRecoilState(cart);
  return (course:ICart) => {
    const { clone, index } = cloneIndex(items, course.id);
    if(index !== -1) {
        clone[index].qty += 1;
        setItems(clone as never[]);
    } else {
        setItems([...clone, {...course, qty: 1 }] as never[]);
    }
  };  
};

export const useRemoveItem =  () => {
    const [items, setItems] = useRecoilState(cart);
    return (course:ICart) => {
        setItems(items.filter((item:ICart) => item.id !== course.id))
    }
};

export const useDecreaseItem = () => {
    const [items, setItems] = useRecoilState(cart);
    const removeItem = useRemoveItem();

    return (course: ICart) => {
        const { clone, index } = cloneIndex(items, course.id);
        if(clone[index].qty === 1) {
            removeItem(course);
        } else {
            clone[index].qty -= 1;
            setItems(clone as never[]);
        }
    }
}