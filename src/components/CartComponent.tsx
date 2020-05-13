import React, { useState, useCallback } from 'react';
import './ExploreContainer.css';
import ProductDetailsComponent from '../components/ProductDetailsComponent';

import { IonCardContent, IonItem, IonLabel, IonIcon, IonThumbnail, IonChip ,useIonViewWillEnter} from '@ionic/react';
import { removeCircleOutline, addCircleOutline, trashOutline } from 'ionicons/icons';
import * as Cart from '../services/cart';
import {environment} from '../services/env';


interface ContainerProps {
  name: string;
  lists: any;
  handlecart: any;
}



const CartComponent: React.FC<ContainerProps> = ({ name, lists ,handlecart}) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [Product, setProduct] = useState('');
  let [items, setItems] = useState(lists);

  const handleback = useCallback(() => {
    setShowProductModal(false);

  }, []);
  useIonViewWillEnter(async () => {
  await Cart.getCart().then((data)=> {
    setItems(data);
    console.log(items)
   })
   
  })
  const handleDecrement = async(item:any)=>{
    if(item.qty !== 1){
      item.qty = item.qty-1;
      await Cart.setQuantity(item);
      let list=  await Cart.getCart().then((data)=> {return data})
      setItems(list);
      handlecart();
    }
  };
  const handleIncrecrement = async(item:any)=>{
    if(item.offerQuantity  >  item.qty && item.totalQuantity > item.qty){
      item.qty = item.qty+1;
      await Cart.setQuantity(item);
      let list=  await Cart.getCart().then((data)=> {return data})
      setItems(list);
      handlecart();
    }
  };
  const removeCart = async(item:any)=>{
      item.qty = item.qty+1;
      await Cart.removeCart(item);
      let list=  await Cart.getCart().then((data)=> {return data})
      setItems(list);
      handlecart();

  };
  const getProduct = (data : any)=>{
    setProduct(data);
    setShowProductModal(true);
  }
  
  return (
    <IonCardContent class="ion-no-padding">
      {/* <h3>sss</h3> */}
      {items && items.map((item: any, index: number) => (
        <IonItem key={index}>
          <IonThumbnail slot="start" onClick={()=>getProduct(item)}>
            <img alt="img" src={item.imageURL} />
            
          </IonThumbnail>
          

          <IonLabel>
            <h3 className="ion-text-wrap w80" onClick={()=>getProduct(item)}><b>{item.productName}</b></h3>
            
            {(item.offerPrice === 0 ) && 
            <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p>
            }
            {(item.offerPrice !== 0 ) && 
            <p className="cred"> <b>{environment.currency}{item.offerPrice}</b> <b className="mlf">{environment.currency}{item.productPrice}</b></p>
             } 


            {/* <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p> */}
            {/* <p>  Category: {item.productCategory} </p> */}
            <p>  Brand: {item.productBrand} </p>
            {item.promoCode &&  <p className="glab"> <b>Promo : {item.promoCode}</b></p>}

            
          </IonLabel>
          <div className="fp1">
            <IonIcon icon={removeCircleOutline} slot="end" class="ms2" onClick={()=>handleDecrement(item)}></IonIcon>
            <span className="ion-padding">{item.qty}</span>
            <IonIcon icon={addCircleOutline} slot="end" class="ms2"  onClick={()=>handleIncrecrement(item)}></IonIcon>
          </div>
          <div className="fp2">
          {/* <IonChip color="danger"  onClick={()=>removeCart(item)}>
            <IonIcon icon={trashOutline} slot="icon-only" class="cred" ></IonIcon>
            Remove
          </IonChip> */}
          </div>
        </IonItem>
      ))}
      {(Product &&
    <ProductDetailsComponent  productModal={showProductModal} Product={Product} onback={handleback} />
    )}
      
    </IonCardContent>

  );
};

export default CartComponent;
