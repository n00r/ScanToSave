import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonItem, IonThumbnail, IonLabel, IonIcon, IonCard, IonCardHeader, IonFooter, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import './Tab3.css';
import { removeCircleOutline, addCircleOutline, arrowForwardOutline } from 'ionicons/icons';
import {environment} from '../services/env';

const lists: any = [
  { "name": "MICHAEL Michael Kors", "price": "190.00", "color": "Eggplant", "size": "XS","img":"assets/cart/3.jpeg", "quantity": "1" },
  { "name": "Puma Men's Essential Logo Hoodie", "price": "45.00", "color": "Black", "size": "S" ,"img":"assets/cart/4.jpeg", "quantity": "1" },
  { "name": "MICHAEL Michael Kors Mae Medium Tote", "price": "278.00", "color": "Bright Red/Gold", "size": "S" ,"img":"assets/cart/2.jpeg", "quantity": "3" },
];

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Order Confirmation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
        <IonCardContent>
          <div className="ion-text-center">
          <IonText color="danger" class="f20"><b>Thank You For Placing The Order!</b></IonText>
          <p>Below is the order details...</p>
          </div>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
        <IonText color="dark" class="f16">Summary:</IonText>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
          <IonRow><IonCol>Order Status:.<b >Order Placed</b></IonCol></IonRow>
          <IonRow><IonCol>Order No:.<span>235613</span></IonCol></IonRow>
          <IonRow><IonCol>Order Date:.<span>5/5/2020</span></IonCol></IonRow>
          <IonRow><IonCol>No. of Items:.<span>5</span></IonCol></IonRow>
          <IonRow><IonCol>Payment Method:.<span>Credit Card</span></IonCol></IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
      <IonCard>
      <IonCardHeader>
      <IonToolbar color="danger">
          <IonTitle>Order Details</IonTitle>
        </IonToolbar>
      </IonCardHeader>
        <IonCardContent class="ion-no-padding">
            {lists.map((item:any) => (
              <IonItem>
                <IonThumbnail slot="start">
                  <img src={item.img} />
                </IonThumbnail>
                <IonLabel>
                  <h3><b>{item.name}</b></h3>
                  <p className="cred"> <b>{environment.currency}{item.price}</b></p>
                  <p>  Color: {item.color}  | Size: {item.size} </p>
                  <p>  Quantity: {item.quantity} </p>
                </IonLabel>
              </IonItem>
            ))}
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="danger">
              <IonTitle size="large">
                <IonText  class="ion-float-left">Total Price: {environment.currency}538</IonText>
              </IonTitle>
            </IonToolbar>
          </IonFooter>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
