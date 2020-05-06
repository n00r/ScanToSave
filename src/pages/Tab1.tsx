import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import './Tab1.css';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color="danger">
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
        <img alt ="img" src="assets/scan1.jpeg" />
        <IonCardHeader>
          <IonCardTitle>Scans the QR Code with the touch of a scan button</IonCardTitle>
          <IonCardSubtitle>Significantly reduces shopping times.</IonCardSubtitle>

        </IonCardHeader>
        <IonCardContent>
        <IonButton onClick={openScanner} expand="block" shape="round" size="large">Scan QR</IonButton>

        </IonCardContent>
      </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
