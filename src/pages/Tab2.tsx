import React, { useState, useCallback } from 'react';
import { IonContent, IonHeader, IonAlert, IonPage, IonTitle, IonToolbar, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Tab2.css';
import GuestComponent from '../components/GuestComponent';
import CustomerComponent from '../components/CustomerComponent';
import CartComponent from '../components/CartComponent';
import CheckoutComponent from '../components/CheckoutComponent';
import OrderConfirmationComponent from '../components/OrderConfirmationComponent';



const Tab2: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [showCheckoutModal, setShowcheckoutModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const handleguest = useCallback(() => {
    setShowGuestModal(false);
  }, []);
  const handlecustomer = useCallback((data) => {
    setShowCustomerModal(false);
    console.log(data);
    setShowcheckoutModal(true);
  }, []);
  const handlecheckout = useCallback(() => {
    setShowcheckoutModal(false);
    setShowOrderModal(true);
  }, []);
  const handleorder = useCallback(() => {
    setShowOrderModal(false);
  }, []);
  const handleback = useCallback(() => {
    setShowCustomerModal(false);
    setShowcheckoutModal(false);
    setShowOrderModal(false);
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>YOUR CART</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <IonHeader collapse="condense">
          <IonToolbar color="danger">
            <IonTitle size="large">CART</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Confirm'}
          message={'Checkout as a guest or Returning Customer'}
          buttons={[
            {
              text: 'Returning customer',
              handler: blah => {
                console.log('customer');
                setShowCustomerModal(true)
              }
            },
            {
              text: 'Checkout As Guest',
              handler: () => {
                console.log('guest');
                // setShowGuestModal(true);
                setShowcheckoutModal(true);

              }
            }
          ]}
        />

        <CartComponent name="cart" />
        {/* <GuestComponent GuestModal={showGuestModal} onhandleguest={handleguest} /> */}
        <CustomerComponent CustomerModal={showCustomerModal} onhandlecustomer={handlecustomer} onback={handleback}/>
        <CheckoutComponent CheckoutModal={showCheckoutModal} onhandlecheckout={handlecheckout}  onback={handleback} />
        <OrderConfirmationComponent orderModal={showOrderModal} onhandleorderout={handleorder}  onback={handleback} />

      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol >
                <IonToolbar >
                  <IonTitle class="f16"><b>$538.00</b> </IonTitle>
                  <IonTitle class="fc14"> 4 items </IonTitle>
                </IonToolbar>
              </IonCol>
              <IonCol className="ion-no-padding" color="" onClick={() => setShowAlert(true)}>
                <IonToolbar color="success"> <IonTitle class="f16">CHECKOUT</IonTitle></IonToolbar>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab2;
