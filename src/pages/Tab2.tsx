import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonIcon, IonThumbnail, IonFooter, IonBadge, IonButtons, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { removeCircleOutline, addCircleOutline, carOutline, arrowForwardOutline, cartOutline } from 'ionicons/icons';
const lists: any = [
  { "name": "MICHAEL Michael Kors", "price": "$190.00", "color": "Eggplant", "size": "XS","img":"assets/cart/3.jpeg" },
  { "name": "Adidas Men's Logo T-Shirt", "price": "$25.00", "color": "Scarle", "size": "L","img":"assets/cart/1.jpeg" },
  { "name": "Puma Men's Essential Logo Hoodie", "price": "$45.00", "color": "Black", "size": "S" ,"img":"assets/cart/4.jpeg" },
  { "name": "MICHAEL Michael Kors Mae Medium Tote", "price": "$278.00", "color": "Bright Red/Gold", "size": "S" ,"img":"assets/cart/2.jpeg" },
];

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>CART</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar color="danger">
            <IonTitle size="large">CART</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}

          {/* <IonCardHeader>
            <IonCardTitle>Items</IonCardTitle>
          </IonCardHeader> */}
          <IonCardContent class="ion-no-padding">
            {lists.map((item:any) => (
              <IonItem>
                <IonThumbnail slot="start">
                  <img src={item.img} />
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
      </IonContent>
      {/* <IonFooter>

  <IonToolbar >
    
  
    
    <IonButtons>
    <IonButton expand="block" shape="round" size="large">Scan QR</IonButton>

      <IonButton id="changeText" color="success">
       PROCEED TO CHECKOUT <IonIcon slot="start" icon={arrowForwardOutline}></IonIcon>
      </IonButton>
    </IonButtons>
  </IonToolbar>
</IonFooter> */}
      <IonFooter>
        <IonToolbar>
          {/* <IonTitle>Footer</IonTitle> */}
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol >
                <IonToolbar >
                  <IonTitle class="f16"><b>$538.00</b> </IonTitle>
                  <IonTitle class="fc14"> view price details </IonTitle>
                </IonToolbar>
              </IonCol>
              <IonCol className="ion-no-padding" color="" >
                <IonToolbar color="success"> <IonTitle class="f16">CHECKOUT <IonIcon slot="end" icon={arrowForwardOutline}></IonIcon></IonTitle></IonToolbar>

              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab2;
