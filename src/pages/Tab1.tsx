import React, { useState ,useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import './Tab1.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLoading, IonAlert } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { getProduct } from '../services/api';
import * as Cart from '../services/cart';
interface OwnProps extends RouteComponentProps {
  // handlecount:any
}


const Tab1: React.FC <OwnProps> = ({history}) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const [showAlert1, setShowAlert1] = useState(false);


  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${JSON.stringify(data)}`);
    let url:any = data;
    let extractParam = url.text.split('?')[1];
    let qrdata = new URLSearchParams(extractParam)
    fetchProduct(qrdata.get('proId'),qrdata.get('promoId'));
  };
  const addtocart = async () =>{
    fetchProduct('PA02','PR02');
  }
  const fetchProduct = (ProductId:any,promoId:any) => {
    setLoading(true);


    getProduct(ProductId,promoId).then(async (response :any) => {
      if (response) {
        console.log(response);
        if(response.totalQuantity == 0){
          setShowAlert1(true);
          return;
        }
        // setProduct(response.products);
       await Cart.addToCart(response).finally(async () => {
          console.log('item added');
          await Cart.setOrderId();
          await Cart.getCart().then((data)=> {console.log(data);
             history.push('/cart');});
         

          
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
          <IonTitle>One Click Purchase</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="danger">
            <IonTitle size="large">One Click Purchase</IonTitle>
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
            {/* <IonButton onClick={addtocart} expand="block" shape="round" size="large">Get Pr</IonButton> */}

          </IonCardContent>
        </IonCard>
        <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Gettting Product...'}
        duration={5000}
      />
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={'Alert'}
          // subHeader={'Subtitle'}
          message={'No Stock Available'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
