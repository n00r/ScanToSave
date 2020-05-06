import React ,{ useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonRow, IonCol, IonModal, IonButton, IonInput, IonText, IonList, IonButtons } from '@ionic/react';
import { arrowBack, personCircleOutline } from 'ionicons/icons';

interface ContainerProps {
    GuestModal: any;
    onhandleguest: any;
}

const GuestComponent: React.FC<ContainerProps> = ({ GuestModal,onhandleguest }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    
    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!firstname) {
          setFirstnameError(true);
        }
        if (!lastname) {
          setLastnameError(true);
        }
        if (!email) {
          setEmailError(true);
        }
        if (!phone) {
          setPhoneError(true);
          
        }
        if (firstname && lastname) {
          // await setIsLoggedIn(true);
          // await setUsernameAction(username);
          // history.push('/tabs/schedule', {direction: 'none'});
        }
      };
  return (
    <IonModal isOpen={GuestModal}>
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onhandleguest(false)}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Guest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <div className="login-logo">
          <IonIcon icon={personCircleOutline} class="f58"></IonIcon>
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="">First Name</IonLabel>
              <IonInput name="firstname" type="text" value={firstname} spellCheck={false} autocapitalize="off" onIonChange={e => {
                setFirstname(e.detail.value!);
                setFirstnameError(false);
              }}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && firstnameError && <IonText color="danger">
              <p className="ion-padding-start f13">
              Please enter a first name.
          </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="">Last Name</IonLabel>
              <IonInput name="lastname" type="text" value={lastname} onIonChange={e => {
                setLastname(e.detail.value!);
                setLastnameError(false);
              }}>
              </IonInput>
            </IonItem>

            {formSubmitted && lastnameError && <IonText color="danger">
              <p className="ion-padding-start f13">
              Please enter a last name.
          </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="">Email</IonLabel>
              <IonInput name="email" type="email" value={email} spellCheck={false} autocapitalize="off" onIonChange={e => {
                setEmail(e.detail.value!);
                setEmailError(false);
              }}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && emailError && <IonText color="danger">
              <p className="ion-padding-start f13">
              Please enter a email.

          </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="">Phone Number</IonLabel>
              <IonInput name="phone" type="number" value={phone} onIonChange={e => {
                setPhone(e.detail.value!);
                setPhoneError(false);
              }}>
              </IonInput>
            </IonItem>

            {formSubmitted && phoneError && <IonText color="danger">
              <p className="ion-padding-start f13">
              Please enter a phone number.
          </p>
            </IonText>}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block" color="danger" >Checkout As Guest</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>
    </IonModal>
  );
};

export default GuestComponent;
