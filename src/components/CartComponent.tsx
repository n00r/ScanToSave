import React from 'react';
import './ExploreContainer.css';
import {  IonCardContent, IonItem, IonLabel, IonIcon, IonThumbnail } from '@ionic/react';
import { removeCircleOutline, addCircleOutline } from 'ionicons/icons';


interface ContainerProps {
  name: string;
}

const lists: any = [
    { "name": "MICHAEL Michael Kors", "price": "$190.00", "color": "Eggplant", "size": "XS", "img": "assets/cart/3.jpeg" },
    { "name": "Adidas Men's Logo T-Shirt", "price": "$25.00", "color": "Scarle", "size": "L", "img": "assets/cart/1.jpeg" },
    { "name": "Puma Men's Essential Logo Hoodie", "price": "$45.00", "color": "Black", "size": "S", "img": "assets/cart/4.jpeg" },
    { "name": "MICHAEL Michael Kors Mae Medium Tote", "price": "$278.00", "color": "Bright Red/Gold", "size": "S", "img": "assets/cart/2.jpeg" },
  ];
  
const CartComponent: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonCardContent class="ion-no-padding">
    {lists.map((item: any,index:number) => (
      <IonItem key={index}>
        <IonThumbnail slot="start">
          <img alt="img" src={item.img} />
        </IonThumbnail>
        <IonLabel>
          <h3><b>{item.name}</b></h3>
          <p className="cred"> <b>{item.price}</b></p>
          <p>  Color: {item.color}  | Size: {item.size} </p>
        </IonLabel>
        <div>
          <IonIcon icon={removeCircleOutline} slot="end" class="ms2"></IonIcon>
          <span className="ion-padding">1</span>
          <IonIcon icon={addCircleOutline} slot="end" class="ms2"></IonIcon>
        </div>
      </IonItem>
    ))}
  </IonCardContent>
  );
};

export default CartComponent;
