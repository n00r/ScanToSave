import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import './Tab1.css';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data}`);
  };
  // const openScanner = () => {  
  // QRScanner.prepare()
  // .then((status: QRScannerStatus) => {
  //    if (status.authorized) {
  //      // camera permission was granted


  //      // start scanning
  //      let scanSub = QRScanner.scan().subscribe((text: string) => {
  //        console.log('Scanned something', text);

  //        QRScanner.hide(); // hide camera preview
  //        scanSub.unsubscribe(); // stop scanning
  //      });

  //    } else if (status.denied) {
  //      // camera permission was permanently denied
  //      // you must use QRScanner.openSettings() method to guide the user to the settings page
  //      // then they can grant the permission from there
  //    } else {
  //      // permission was denied, but not permanently. You can ask for permission again at a later time.
  //    }
  // })
  // .catch((e: any) => console.log('Error is', e))};
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
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonCard class="tac">
        <img src="assets/scan1.jpeg" />
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
