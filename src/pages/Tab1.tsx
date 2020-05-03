import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { QRScanner ,QRScannerStatus } from '@ionic-native/qr-scanner';

import './Tab1.css';

const Tab1: React.FC = () => {
  const openScanner = () => {  
  QRScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = QRScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         QRScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e))};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
