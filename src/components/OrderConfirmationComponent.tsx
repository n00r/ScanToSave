import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonItem, IonThumbnail, IonLabel, IonIcon, IonCard, IonCardHeader, IonFooter, IonGrid, IonRow, IonCol, IonText, IonModal, IonButtons, IonButton, IonChip, IonAlert, IonLoading } from '@ionic/react';
import { arrowBack, checkmarkCircleOutline } from 'ionicons/icons';
import { getOrder } from '../services/api';
import { environment } from '../services/env';
import * as Cart from '../services/cart';
import { SMS } from '@ionic-native/sms';


interface ContainerProps {
  orderModal: any;
  onhandleorderout: any;
  onback: any;
  handleorder: any;
}

const lists: any = [

];
const OrderConfirmationComponent: React.FC<ContainerProps> = ({ orderModal, onhandleorderout, onback, handleorder }) => {
  const [showAlert2, setShowAlert2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  let [items, setItems] = useState(lists);
    let [totalAmount, SetTotalAmount] = useState();
    let [totalItems, SetTotalItems] = useState();

  let [details, setDetails] = useState(lists);
  var dateTimeToday = new Date(Date.now()).toLocaleDateString();

  useEffect(() => {

  });
  const getOrderByID = () => {
    setLoading(true);

    getOrder(handleorder.orderId).then((response: any) => {
      if (response) {
        console.log(response);
        setDetails(response);
        Cart.getCart().then((data) => {
          setItems(data);
        });
        Cart.getTotalItems().then((data: any) => {
          SetTotalItems(data);
      });
      setLoading(false);
      Cart.clearCart();
      Cart.removeOrderId();

        // onhandleorderout(response);
        // setProduct(response.products);
        // Cart.clearCart();


      }
    }).finally(() => {
      setLoading(false);
    });

  }

  return (
    <IonModal isOpen={orderModal} onDidPresent={getOrderByID}>
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
              <p>Below is the order details...</p>
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
                <IonCol className="tar"><b>#ORD-{details.orderId}</b></IonCol>
              </IonRow>
              <IonRow><IonCol>Order Date:</IonCol>
                <IonCol className="tar"><b>{dateTimeToday.toString()}</b></IonCol>
              </IonRow>
              <IonRow><IonCol>No. of Items:</IonCol>
                <IonCol className="tar"> <b>{totalItems}</b> </IonCol>
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
                    <IonCol className="tar"><b>{environment.currency}{details.totalAmount}</b></IonCol>
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
            {items && items.map((item: any, index: number) => (
              <IonItem key={index}>
                <IonThumbnail slot="start" >
                  <img alt="img" src={item.imageURL} />

                </IonThumbnail>


                <IonLabel>
                  <h3 className="ion-text-wrap w80" ><b>{item.productName}</b></h3>

                  {(item.offerPrice === 0) &&
                    <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p>
                  }
                  {(item.offerPrice !== 0) &&
                    <p className="cred"> <b>{environment.currency}{item.offerPrice}</b> <b className="mlf">{environment.currency}{item.productPrice}</b></p>
                  }


                  {/* <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p> */}
                  {/* <p>  Category: {item.productCategory} </p> */}
                  <p>  Brand: {item.productBrand} </p>
                  <p className="glab"> <b>Promo : {item.promoCode}</b></p>


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
              handler: (data) => {
                console.log('Confirm Ok');
                console.log(data)
                SMS.send(data.number, 'Ordered Placed Successfully');
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
