import React, { useState, useCallback, useEffect } from 'react';
import { IonContent, IonHeader, IonAlert, IonPage, IonTitle, IonToolbar, IonFooter, IonGrid, IonRow, IonCol, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';
import CustomerComponent from '../components/CustomerComponent';
import CartComponent from '../components/CartComponent';
import CheckoutComponent from '../components/CheckoutComponent';
import OrderConfirmationComponent from '../components/OrderConfirmationComponent';
import * as Cart from '../services/cart';
import {environment} from '../services/env';



const Tab2: React.FC = () => {
  useIonViewWillEnter(() => {
    Cart.getTotalItems().then((data: any) => {
      SetTotalItems(data);
      
    });
    Cart.getTotal().then((data: any) => {
      SetTotalAmount(data);
      
    });
    // setShowcheckoutModal(true);

  });
 
  let [user, setuser] = useState('Guest');
  let [order, setorder] = useState(false);
  let [lists, setlists] = useState();
  let [totalItems, SetTotalItems] = useState();
  let [totalAmount, SetTotalAmount] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [showCheckoutModal, setShowcheckoutModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  // @typescript-eslint/no-unused-vars
  const handleguest = useCallback(() => {
    setShowGuestModal(false);
  }, []);
  const handlecustomer = useCallback((data) => {
    setShowCustomerModal(false);
    setShowcheckoutModal(true);
    setuser(data);
  }, []);
  const handlecheckout = useCallback((res) => {
    setShowcheckoutModal(false);
    // Cart.clearCart();
    setorder(res);
    setShowOrderModal(true);

  }, []);
  const handleorders = useCallback((res) => {
    setorder(false);

    setShowOrderModal(false);
  }, []);
  const handleback = useCallback(() => {
    setShowCustomerModal(false);
    setShowcheckoutModal(false);
    setShowOrderModal(false);
  }, []);
  const handlecart = useCallback(() => {
    Cart.getCart().then((data) => {
      Cart.getTotalItems().then((data: any) => {
         SetTotalItems(data);
         });
    });
    Cart.getTotal().then((data: any) => {
      SetTotalAmount(data);
      
    });
  }, []);


  const fetchCart = () => {
    Cart.getCart().then((data) => {
      setlists(data);
    });

  }
  useEffect(() => {
    fetchCart();
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
                setShowCustomerModal(true);
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
        {(lists) && (
          <CartComponent name="cart" lists={lists} handlecart={handlecart} />
        )}
        {/* <GuestComponent GuestModal={showGuestModal} onhandleguest={handleguest} /> */}
        <CustomerComponent CustomerModal={showCustomerModal} onhandlecustomer={handlecustomer} onback={handleback} />
        
        <CheckoutComponent CheckoutModal={showCheckoutModal} onhandlecheckout={handlecheckout} onback={handleback} handleuser={user} />
        {(order) && (
        <OrderConfirmationComponent orderModal={showOrderModal} onhandleorderout={handleorders} onback={handleback} handleorder={order} />

        )}

      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol >
                <IonToolbar >
                <IonTitle class="f16"><b>{environment.currency}{totalAmount}</b> </IonTitle>
                  <IonTitle class="fc14"> {totalItems} items </IonTitle>
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
