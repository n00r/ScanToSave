import React ,{ useState } from 'react';
import { IonContent, IonHeader,  IonTitle, IonToolbar, IonItem, IonLabel, IonIcon,  IonRow, IonCol, IonModal, IonButton, IonInput, IonText, IonList, IonButtons } from '@ionic/react';
import { arrowBack, lockOpenOutline } from 'ionicons/icons';

// import './ExploreContainer.css';

interface ContainerProps {
    CustomerModal: any;
    onhandlecustomer: any;
    onback: any;
}

const CustomerComponent: React.FC<ContainerProps> = ({ CustomerModal,onhandlecustomer,onback }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
  
    const [passwordError, setPasswordError] = useState(false);
    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!username) {
          setUsernameError(true);
        }
        if (!password) {
          setPasswordError(true);
        }
        if (username && password) {
          // await setIsLoggedIn(true);
          // await setUsernameAction(username);
          // history.push('/tabs/schedule', {direction: 'none'});
        }
      };
  return (
    <IonModal isOpen={CustomerModal}>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => onback(false)}>
            <IonIcon icon={arrowBack}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>Sign In</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">

      <div className="login-logo">
        <IonIcon icon={lockOpenOutline} class="f58"></IonIcon>
      </div>

      <form noValidate onSubmit={login}>
        <IonList>
          <IonItem>
            <IonLabel position="stacked" color="">Username / Email Address</IonLabel>
            <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => {
              setUsername(e.detail.value!);
              setUsernameError(false);
            }}
              required>
            </IonInput>
          </IonItem>

          {formSubmitted && usernameError && <IonText color="danger">
            <p className="ion-padding-start f13">
              Username is required
        </p>
          </IonText>}

          <IonItem>
            <IonLabel position="stacked" color="">Password</IonLabel>
            <IonInput name="password" type="password" value={password} onIonChange={e => {
              setPassword(e.detail.value!);
              setPasswordError(false);
            }}>
            </IonInput>
          </IonItem>

          {formSubmitted && passwordError && <IonText color="danger">
            <p className="ion-padding-start f13">
              Password is required
        </p>
          </IonText>}
        </IonList>

        <IonRow>
          <IonCol>
            <IonButton type="submit" expand="block" color="danger" onClick={() => onhandlecustomer({"username":username})}>Sign In & Checkout</IonButton>
          </IonCol>
        </IonRow>
      </form>

    </IonContent>
  </IonModal>
  );
};

export default CustomerComponent;
