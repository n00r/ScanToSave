import { Plugins } from '@capacitor/core';

const { Storage, Toast } = Plugins;

export const addToCart = async (product :any): Promise<void> => {
    
    const saved = await Storage.get({ key: 'savedCart' });
    const carts = (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;

    if (!carts) {
        const products = [{...product,qty:1}];
        await Storage.set({
            key: 'savedCart',
            value: JSON.stringify(products),
        });
        return Toast.show({
            text: 'Added to Cart',
        });
    }

    const copyOfcarts = carts.slice();
    const { productId } = product;
    const isSavedIndex = copyOfcarts.findIndex((c:any) => c.productId === productId);

    if (isSavedIndex !== -1) {
        return ;
    } else {
        copyOfcarts.unshift({...product,qty:1});
        await Storage.set({
            key: 'savedCart',
            value: JSON.stringify(copyOfcarts),
        });
        return Toast.show({
            text: 'Added to Cart',
        });
    }
};
export const setQuantity = async (product :any): Promise<void> => {
    
    const saved = await Storage.get({ key: 'savedCart' });
    const carts = (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;
    const copyOfcarts = carts.slice();
    const { productId } = product;
    const isSavedIndex =  copyOfcarts.findIndex((c:any) => c.productId === productId);
    if (isSavedIndex !== -1) {
        copyOfcarts[isSavedIndex]=product
        await Storage.set({
            key: 'savedCart',
            value: JSON.stringify(copyOfcarts),
        });
        return Toast.show({
            text: 'Added to Cart',
        });
    }
};
export const clearCart =  () => {
    
   
         Storage.set({
            key: 'savedCart',
            value: JSON.stringify([]),
        });
        
    
};
export const removeCart = async (product :any): Promise<void> => {
    
    const saved = await Storage.get({ key: 'savedCart' });
    const carts = (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;
    const copyOfcarts = carts.slice();
    const { productId } = product;
    const isSavedIndex =  copyOfcarts.findIndex((c:any) => c.productId === productId);
    if (isSavedIndex !== -1) {
        // copyOfcarts[isSavedIndex]=product
        copyOfcarts.splice(isSavedIndex, 1);
        await Storage.set({
            key: 'savedCart',
            value: JSON.stringify(copyOfcarts),
        });
        return Toast.show({
            text: 'Added to Cart',
        });
    }
};


export const getCart = async (): Promise<any | null> => {
    const saved = await Storage.get({
        key: 'savedCart',
    });
    return (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;
};

export const checkCart = async (productId: any): Promise<boolean> => {
    const saved = await Storage.get({
        key: 'savedCart',
    });
    const carts= (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;

    if (carts) {
        const isSavedIndex = carts.findIndex((c:any) => c.productId === productId);
        if (isSavedIndex !== -1) {
            return true;
        }
    }
    return false;
};
export const getTotalItems = async () => {
    var count = 0;
    const saved = await Storage.get({
        key: 'savedCart',
    });
    const carts= (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;
    if(carts){
        carts.map((item : any) =>{
            count += item.qty
        }
        );
    }
    
    return count;
};
export const getTotal = async () => {
    var total = 0;
    const saved = await Storage.get({
        key: 'savedCart',
    });
    const carts= (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;

    if(carts){
        carts.map((item : any) =>{
            total += item.productPrice *item.qty 
        }
        );
    }
    
    
    return total;
};
