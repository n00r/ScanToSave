import React, { useState } from 'react';
import './ExploreContainer.css';
import { IonCardContent, IonItem, IonLabel, IonIcon, IonThumbnail, IonButton, IonChip ,useIonViewWillEnter} from '@ionic/react';
import { removeCircleOutline, addCircleOutline, trashOutline, cart } from 'ionicons/icons';
import * as Cart from '../services/cart';
import {environment} from '../services/env';


interface ContainerProps {
  name: string;
  lists: any;
  handlecart: any;
}



const CartComponent: React.FC<ContainerProps> = ({ name, lists ,handlecart}) => {
  useIonViewWillEnter(() => {
   Cart.getCart().then((data)=> {
    setItems(data);
   })
   
  })
  let [items, setItems] = useState(lists);
  const handleDecrement = async(item:any)=>{
    if(item.qty != 1){
      item.qty = item.qty-1;
      await Cart.setQuantity(item);
      let list=  await Cart.getCart().then((data)=> {return data})
      setItems(list);
      handlecart();
    }
  };
  const handleIncrecrement = async(item:any)=>{
      item.qty = item.qty+1;
      await Cart.setQuantity(item);
      let list=  await Cart.getCart().then((data)=> {return data})
      setItems(list);
      handlecart();

  };
  const removeCart = async(item:any)=>{
      item.qty = item.qty+1;
      await Cart.removeCart(item);
      let list=  await Cart.getCart().then((data)=> {return data})
      setItems(list);
      handlecart();

  };
  
  return (
    <IonCardContent class="ion-no-padding">
      {items && items.map((item: any, index: number) => (
        <IonItem key={item.productId}>
          <IonThumbnail slot="start">
            <img alt="img" src={item.imageURL} />
            
          </IonThumbnail>
          

          <IonLabel>
            <h3><b>{item.productName}</b></h3>
            
            <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p>
            <p>  Color: {item.productColor}  | Size: {item.productSize} </p>
            
          </IonLabel>
          <div className="fp1">
            <IonIcon icon={removeCircleOutline} slot="end" class="ms2" onClick={()=>handleDecrement(item)}></IonIcon>
            <span className="ion-padding">{item.qty}</span>
            <IonIcon icon={addCircleOutline} slot="end" class="ms2"  onClick={()=>handleIncrecrement(item)}></IonIcon>
          </div>
          <div className="fp2">
          <IonChip color="danger"  onClick={()=>removeCart(item)}>
            <IonIcon icon={trashOutline} slot="icon-only" class="cred" ></IonIcon>
            Remove
          </IonChip>
          </div>
        </IonItem>
      ))}
    </IonCardContent>
  );
};

export default CartComponent;
