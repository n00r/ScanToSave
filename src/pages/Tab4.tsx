import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonImg, IonFooter, IonText, IonCardHeader, IonButton, IonFabButton, IonGrid, IonRow, IonCol, IonIcon, IonSlides, IonSlide, IonSpinner } from '@ionic/react';
import './Tab4.css';
import { removeCircleOutline, addCircleOutline, arrowForwardOutline } from 'ionicons/icons';
import api from '../service/api';

const productId: string = "PA1"
const Tab4: React.FC = () => {
    const [product, setProduct] = useState<any>({});
    const fetchProduct = () => {
        api.getProduct(productId).then((response) => {
            if (response && response.data) {
                console.log(response.data);
                setProduct(response.data);
            }
        })
    };
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle>{product.productName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard class="card-effect">
                    <IonImg src={product.imageURL} class="img-size" />
                    {/* <IonSlides pager>
                        <IonSlide >
                        <IonImg src={item.img} class="img-size" />
                        </IonSlide>
                        <IonSlide>
                        <IonImg src={item.img} class="img-size" />
                        </IonSlide>
                        <IonSlide>
                        <IonImg src={item.img} class="img-size" />
                        </IonSlide>
                    </IonSlides> */}
                    <div className="ion-text-center f16">
                        {product.productName}
                    </div>
                    <div className="ion-text-center f16 cred">Price:
                        {product.productPrice}
                    </div>
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Color:</b>
                        <span> {product.productColor} </span>
                    </IonCardHeader>
                    {/* <IonCardContent>
                        <IonFabButton size="small" color={product.productColor}></IonFabButton>
                    </IonCardContent> */}
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Quantity:</b>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonIcon icon={removeCircleOutline} slot="end" class="ms2"></IonIcon>
                        <span className="ion-padding">1</span>
                        <IonIcon icon={addCircleOutline} slot="end" class="ms2"></IonIcon>
                    </IonCardContent>
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Promotion Details: </b><IonText>{product.promotionDetails}</IonText>
                    </IonCardHeader>
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Specification:</b>
                    </IonCardHeader>
                    <IonGrid>
                        <IonRow>
                            <IonCol class="label">• Category: </IonCol>
                            <IonCol>{product.productCategory} </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label">• Size: </IonCol>
                            <IonCol>{product.productSize} </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label">• Type: </IonCol>
                            <IonCol>{product.productType} </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Description:</b>
                    </IonCardHeader>
                    <IonCardContent>
                        {product.productDescription}
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonGrid className="ion-no-padding">
                        <IonRow>
                            <IonCol >
                                <IonToolbar >
                                    <IonTitle class="f16"><b>Add To Cart</b> </IonTitle>
                                </IonToolbar>
                            </IonCol>
                            <IonCol className="ion-no-padding" color="" >
                                <IonToolbar color="danger"> <IonTitle class="f16">Buy Now<IonIcon slot="end" icon={arrowForwardOutline}></IonIcon></IonTitle></IonToolbar>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>

        </IonPage>
    );
};

export default Tab4;