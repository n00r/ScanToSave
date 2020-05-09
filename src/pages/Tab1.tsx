import React, { useState ,useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSpinner, IonLoading } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { getProduct } from '../services/api';
import * as Cart from '../services/cart';

import './Tab1.css';

const Tab1: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();


  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${JSON.stringify(data)}`);
    fetchProduct(data.text);
  };
  const addtocart = async () =>{
    fetchProduct('PA1');

  }
  const fetchProduct = (ProductId:any) => {
    setLoading(true);


    getProduct(ProductId).then((response :any) => {
      if (response) {
        console.log(response);
        // setProduct(response.products);
        Cart.addToCart(response).finally(() => {
          console.log('item added');
          Cart.getCart().then((data)=> console.log(data));
          
      });
      }
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    // fetchProduct();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>SCAN TO SAVE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="danger">
            <IonTitle size="large">SCAN TO SAVE</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard class="tac">
          <img alt="img" src="assets/scan1.jpeg" />
          <IonCardHeader>
            <IonCardTitle>Scans the QR Code with the touch of a scan button</IonCardTitle>
            <IonCardSubtitle>Significantly reduces shopping times.</IonCardSubtitle>

          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={openScanner} expand="block" shape="round" size="large">Scan QR</IonButton>
            {/* <IonButton onClick={addtocart} expand="block" shape="round" size="large">Scan QR</IonButton> */}

          </IonCardContent>
        </IonCard>
        <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Gettting Product...'}
        duration={5000}
      />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
