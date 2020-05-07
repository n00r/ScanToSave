import React, { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonFooter, IonGrid, IonRow, IonCol, IonModal, IonButton, IonInput, IonText, IonList, IonButtons, IonSelect, IonSelectOption, IonThumbnail } from '@ionic/react';
import { arrowBack, arrowForward, chevronForwardOutline, giftOutline, checkmarkCircle, cardOutline } from 'ionicons/icons';

// import './ExploreContainer.css';

interface ContainerProps {
    CheckoutModal: any;
    onhandlecheckout: any;
    onback: any;
}

const CheckoutComponent: React.FC<ContainerProps> = ({ CheckoutModal, onhandlecheckout ,onback }) => {
    const [shippingAddress, setshippingAddress] = useState('');
    const [zipcode, setzipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [phoneError, setPhoneError] = useState(false);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [shippingAddressError, setshippingAddressError] = useState(false);

    const [zipcodeError, setzipcodeError] = useState(false);
    const onsubmit = async (e: React.FormEvent) => {
        onhandlecheckout()
        e.preventDefault();
        setFormSubmitted(true);
        if (!shippingAddress) {
            setshippingAddressError(true);
        }
        if (!zipcode) {
            setzipcodeError(true);
        }
        if (!phone) {
            setPhoneError(true);

        }
        if (shippingAddress && zipcode) {
            // await setIsLoggedIn(true);
            // await setUsernameAction(username);
            // history.push('/tabs/schedule', {direction: 'none'});
        }
    };
    return (
        <IonModal isOpen={CheckoutModal}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => onback(false)}>
                            <IonIcon icon={arrowBack}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Checkout</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-no-padding">


                {/* <div className="login-logo">
        <IonIcon icon={lockOpenOutline} class="f58"></IonIcon>
      </div> */}

<IonGrid className="ion-padding checkp">
                    <IonRow className="pb4">
                        <IonCol>
                            <p className="ion-no-botton-margin fw500">Bill Details</p>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <p className="ion-no-botton-margin f15">Item Total (4 items)</p>
                        </IonCol>
                        <IonCol>
                            <p className="ion-no-botton-margin tar f15">$538.00</p>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <p className="ion-no-botton-margin f15">Delivery Fee</p>
                        </IonCol>
                        <IonCol>
                            <p className="ion-no-botton-margin tar f15 glab">Free</p>
                        </IonCol>
                    </IonRow>
                    <div className="line"></div>
                    <IonRow>
                        <IonCol>
                            <p className="ion-no-botton-margin f15">Taxes</p>
                        </IonCol>
                        <IonCol>
                            <p className="ion-no-botton-margin tar f15 ">$2.50</p>
                        </IonCol>
                    </IonRow>
                    <div className="line"></div>
                    <IonRow>
                        <IonCol>
                            <p className="ion-no-botton-margin fwb">To Pay</p>
                        </IonCol>
                        <IonCol>
                            <p className="ion-no-botton-margin tar fwb ">$540.50</p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <div className="divider"></div>
                {/* <IonItem button onClick={() => { }} lines="none" >
                    <IonIcon icon={giftOutline} slot="start" />

                    <IonLabel>
                        APPLY COUPON
                    </IonLabel>
                    <IonIcon icon={chevronForwardOutline} slot="end" />
                </IonItem> */}
                <IonItem button onClick={() => { }} lines="none" >
                    <IonIcon icon={cardOutline} slot="start" />

                    <IonLabel>
                        PAYMENT - COD
                    </IonLabel>
                    <IonIcon className="glab" icon={checkmarkCircle} slot="end" />
                </IonItem>
                
                <div className="divider"></div>
                <form noValidate onSubmit={onsubmit} >
                    <IonTitle className="f18 pt12">Shipping Address</IonTitle>

                    <IonList>
                        <IonItem>
                            <IonLabel position="stacked" color="">Name </IonLabel>
                            <IonInput name="shippingAddress" type="text" readonly value="Noor Mohamed">
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked" color="">Address Line</IonLabel>
                            <IonInput name="shippingAddress" type="text" value={shippingAddress} spellCheck={false} autocapitalize="off" onIonChange={e => {
                                setshippingAddress(e.detail.value!);
                                setshippingAddressError(false);
                            }}
                                required>
                            </IonInput>
                        </IonItem>

                        {formSubmitted && shippingAddressError && <IonText color="danger">
                            <p className="ion-padding-start f13">
                                Address is required
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
                                Phone number is required.
                            </p>
                        </IonText>}
                        <IonItem>
                            <IonLabel position="stacked" color="">Zipcode</IonLabel>
                            <IonInput name="zipcode" type="text" value={zipcode} onIonChange={e => {
                                setzipcode(e.detail.value!);
                                setzipcodeError(false);
                            }}>
                            </IonInput>
                        </IonItem>

                        {formSubmitted && zipcodeError && <IonText color="danger">
                            <p className="ion-padding-start f13">
                                zipcode is required
                            </p>
                        </IonText>}
                        <IonItem lines="none">
                            <IonLabel>State</IonLabel>
                            <IonSelect value={state} placeholder="Select State" onIonChange={e => setState(e.detail.value)}>

                                <IonSelectOption value="AA">AA</IonSelectOption> <IonSelectOption value="AE">AE</IonSelectOption> <IonSelectOption value="AK">AK</IonSelectOption> <IonSelectOption value="AL">AL</IonSelectOption> <IonSelectOption value="AP">AP</IonSelectOption> <IonSelectOption value="AR">AR</IonSelectOption> <IonSelectOption value="AS">AS</IonSelectOption> <IonSelectOption value="AZ">AZ</IonSelectOption> <IonSelectOption value="CA">CA</IonSelectOption> <IonSelectOption value="CO">CO</IonSelectOption> <IonSelectOption value="CT">CT</IonSelectOption> <IonSelectOption value="DC">DC</IonSelectOption> <IonSelectOption value="DE">DE</IonSelectOption> <IonSelectOption value="FL">FL</IonSelectOption> <IonSelectOption value="FM">FM</IonSelectOption> <IonSelectOption value="GA">GA</IonSelectOption> <IonSelectOption value="GU">GU</IonSelectOption> <IonSelectOption value="HI">HI</IonSelectOption> <IonSelectOption value="IA">IA</IonSelectOption> <IonSelectOption value="ID">ID</IonSelectOption> <IonSelectOption value="IL">IL</IonSelectOption> <IonSelectOption value="IN">IN</IonSelectOption> <IonSelectOption value="KS">KS</IonSelectOption> <IonSelectOption value="KY">KY</IonSelectOption> <IonSelectOption value="LA">LA</IonSelectOption> <IonSelectOption value="MA">MA</IonSelectOption> <IonSelectOption value="MD">MD</IonSelectOption> <IonSelectOption value="ME">ME</IonSelectOption> <IonSelectOption value="MH">MH</IonSelectOption> <IonSelectOption value="MI">MI</IonSelectOption> <IonSelectOption value="MN">MN</IonSelectOption> <IonSelectOption value="MO">MO</IonSelectOption> <IonSelectOption value="MP">MP</IonSelectOption> <IonSelectOption value="MS">MS</IonSelectOption> <IonSelectOption value="MT">MT</IonSelectOption> <IonSelectOption value="NC">NC</IonSelectOption> <IonSelectOption value="ND">ND</IonSelectOption> <IonSelectOption value="NE">NE</IonSelectOption> <IonSelectOption value="NH">NH</IonSelectOption> <IonSelectOption value="NJ">NJ</IonSelectOption> <IonSelectOption value="NM">NM</IonSelectOption> <IonSelectOption value="NV">NV</IonSelectOption> <IonSelectOption value="NY">NY</IonSelectOption> <IonSelectOption value="OH">OH</IonSelectOption> <IonSelectOption value="OK">OK</IonSelectOption> <IonSelectOption value="OR">OR</IonSelectOption> <IonSelectOption value="PA">PA</IonSelectOption> <IonSelectOption value="PR">PR</IonSelectOption> <IonSelectOption value="PW">PW</IonSelectOption> <IonSelectOption value="RI">RI</IonSelectOption> <IonSelectOption value="SC">SC</IonSelectOption> <IonSelectOption value="SD">SD</IonSelectOption> <IonSelectOption value="TN">TN</IonSelectOption> <IonSelectOption value="TX">TX</IonSelectOption> <IonSelectOption value="UT">UT</IonSelectOption> <IonSelectOption value="VA">VA</IonSelectOption> <IonSelectOption value="VI">VI</IonSelectOption> <IonSelectOption value="VT">VT</IonSelectOption> <IonSelectOption value="WA">WA</IonSelectOption> <IonSelectOption value="WI">WI</IonSelectOption> <IonSelectOption value="WV">WV</IonSelectOption> <IonSelectOption value="WY">WY</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        
                    </IonList>
     
                </form>
                <div className="divider"></div>

            </IonContent>
            <IonFooter>
                <IonToolbar color="danger" className="tac">
                    <IonTitle onClick={onsubmit}>Place Order</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
};

export default CheckoutComponent;
