import React ,{useState, useEffect}from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonItem, IonThumbnail, IonLabel, IonIcon, IonCard, IonCardHeader, IonFooter, IonGrid, IonRow, IonCol, IonText, IonModal, IonButtons, IonButton, IonChip, IonAlert, IonLoading, useIonViewWillEnter } from '@ionic/react';
import { arrowBack, checkmarkCircleOutline } from 'ionicons/icons';
import { getOrder } from '../services/api';
import {environment} from '../services/env';


interface ContainerProps {
  orderModal: any;
  onhandleorderout: any;
  onback: any;
  handleorder: any;
}

const lists: any = [
  { "name": "MICHAEL Michael Kors", "price": "190.00", "color": "Eggplant", "size": "XS", "img": "assets/cart/3.jpeg", "quantity": "1" },
  { "name": "Puma Men's Essential Logo Hoodie", "price": "45.00", "color": "Black", "size": "S", "img": "assets/cart/4.jpeg", "quantity": "1" },
  { "name": "MICHAEL Michael Kors Mae Medium Tote", "price": "278.00", "color": "Bright Red/Gold", "size": "S", "img": "assets/cart/2.jpeg", "quantity": "3" },
];
const OrderConfirmationComponent: React.FC<ContainerProps> = ({ orderModal, onhandleorderout ,onback ,handleorder }) => {
  const [showAlert2, setShowAlert2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderDetails,setOrderDetails] =useState();
  useEffect(() => {
   
    getOrder(handleorder).then((response: any) => {
      if (response) {
          console.log(response);
          // onhandleorderout(response);
          // setProduct(response.products);

      }
    }).finally(() => {
        setLoading(false);
    });
   });
  const getOrderByID  = () => {
   
    
   }

  return (
    <IonModal isOpen={orderModal}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onhandleorderout(false)}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle >Order Confirmation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div className="ion-text-center">
              <div>  <IonIcon icon={checkmarkCircleOutline} className="glab f65"></IonIcon> </div>

              <IonText color="danger" class="f20"><b>Thank You For Placing The Order!</b></IonText>
              <p>{ handleorder && getOrderByID()}Below is the order details...</p>
              <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block" color="danger" onClick={() => setShowAlert2(true)} >Share With Friends</IonButton>
            </IonCol>
          </IonRow>

            </div>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonText color="dark" class="f16 cred"> <b> Order Summary</b> </IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Order Status:</IonCol>
                <IonCol className="tar"><b >
                  <IonChip color="success">
                    <IonLabel color="" className="glab">Order Placed</IonLabel>
                  </IonChip>
                </b></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Order No:</IonCol>
                <IonCol className="tar"><b>#ORD-235613</b></IonCol>
              </IonRow>
              <IonRow><IonCol>Order Date:</IonCol>
                <IonCol className="tar"><b>05/05/2020</b></IonCol>
              </IonRow>
              <IonRow><IonCol>No. of Items:</IonCol>
                <IonCol className="tar"> <b>5</b> </IonCol>
              </IonRow>
              <IonRow>
                
              </IonRow>
            </IonGrid>
          </IonCardContent>
          <IonFooter>
            <IonToolbar color="">
              <IonTitle size="large">
                <IonText >
                <IonRow>
                <IonCol>Total Price:</IonCol>
                <IonCol className="tar"><b>{environment.currency}538.00</b></IonCol>
                </IonRow>
                </IonText>
              </IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonCard>
        <IonCard>

          <IonCardHeader>
            <IonText color="dark" class="f16 cred"> <b> Ordered Items</b> </IonText>
          </IonCardHeader>
          <IonCardContent class="ion-no-padding">
            {lists.map((item: any,index:any) => (
              <IonItem key={index}>
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
          
        </IonCard>
        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          header={'SMS Send To'}
          inputs={[
            {
              name: 'number',
              type: 'number',
              placeholder: 'Enter Mobile Number'
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'SEND SMS',
              handler: () => {
                console.log('Confirm Ok');
              }
            }
          ]}
        />
        <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Login...'}
      />
      </IonContent>
    </IonModal>
      
  );
};

export default OrderConfirmationComponent;
