import React,{useEffect,useState} from 'react';
// import './ExploreContainer.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonThumbnail, IonLabel, IonImg, IonFooter, IonText, IonCardHeader, IonButton, IonFabButton, IonGrid, IonRow, IonCol, IonIcon, IonSlides, IonSlide, IonModal, IonButtons, IonLoading, IonList } from '@ionic/react';
import { removeCircleOutline, addCircleOutline, arrowForwardOutline, arrowBack } from 'ionicons/icons';
import { getProduct } from '../services/api';
import {environment} from '../services/env';

interface ContainerProps {
    productModal: any;
    onback: any;
    Product: any;
}
const itemm: any = {}
    
const ProductDetailsComponent: React.FC<ContainerProps> = ({ productModal,Product,onback }) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(itemm);

    // useEffect(() => {
    //     // fetchProduct();
    //     setLoading(true);
    //     getProduct(ProductId).then((response :any) => {
    //         if (response) {
    //           console.log(response);
           
    //         }
    //       }).finally(() => {
    //         setLoading(false);
    //       });
    //   }, []);
    const getProd = () =>{
        // fetchProduct();
              setItem(Product);
              setLoading(true);
        // getProduct(Product).then((response :any) => {
        //     if (response) {
        //       console.log(response);
           
        //     }
        //   }).finally(() => {
        //     setLoading(false);
        //   });
      }
    return (
        <IonModal isOpen={productModal} onDidPresent={getProd}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => onback(false)}>
                            <IonIcon icon={arrowBack}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Product Details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className="ion-padding">
                    <IonImg src={item.imageURL} class="img-size" />
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
                    <IonLabel>
            <h3 className="ion-text-wrap" onClick={()=>getProduct(item)}><b>{item.productName}</b></h3>
            
            {(item.offerPrice === 0 ) && 
            <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p>
            }
            {(item.offerPrice !== 0 ) && 
            <p className="cred"> <b>{environment.currency}{item.offerPrice}</b> <b className="mlf">{environment.currency}{item.productPrice}</b></p>
             } 


            {/* <p className="cred"> <b>{environment.currency}{item.productPrice}</b></p> */}
            {/* <p>  Category: {item.productCategory} </p> */}
     
            
          </IonLabel>
                    {/* <IonText class="ion-text-wrap">{item.desc}</IonText> */}
                </IonList>
                <div className="divider"></div>
{/* 
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Color:</b>  {item.color}
                    </IonCardHeader>
                    <IonCardContent>
                        <IonFabButton size="small" color="danger"></IonFabButton>
                    </IonCardContent>
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
                        <b className="f16 label">Delivery By:</b><IonText> Fri May 8</IonText>
                    </IonCardHeader>
                </IonCard> */}
                <IonList >
                    <IonCardHeader>
                        <b className="f16 label">Specification:</b>
                    </IonCardHeader>
                    {/* <IonCardContent> <b> {item.specifications} </b></IonCardContent> */}
                    <IonGrid>
                        <IonRow>
                            <IonCol class="label" size="4" > Category: </IonCol>
                            <IonCol> <b> {item.productCategory} </b> </IonCol>
                        </IonRow>
                        <IonRow >
                            <IonCol class="label" size="4" > Brand: </IonCol>
                            <IonCol> <b> {item.productBrand} </b> </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label" size="4"> Size: </IonCol>
                            <IonCol> <b> {item.productSize} </b> </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label" size="4"> Color: </IonCol>
                            <IonCol> <b> {item.productColor} </b> </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label" size="4"> Others: </IonCol>
                            <IonCol> <b> {item.others} </b> </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonList>
                <div className="divider"></div>
                <IonList >
                    <IonCardHeader>
                        <b className="f16 label">Promo Details:</b>
                    </IonCardHeader>
                    {/* <IonCardContent> <b> {item.specifications} </b></IonCardContent> */}
                    <IonGrid>
                        <IonRow>
                            <IonCol class="label" size="4" > Promo Code: </IonCol>
                            <IonCol className="glab"> <b> {item.promoCode} </b> </IonCol>
                        </IonRow>
                        <IonRow >
                            <IonCol class="label" size="4" > Promo Description: </IonCol>
                            <IonCol> <b> {item.promoDesciption} </b> </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label" size="4"> Promo Details: </IonCol>
                            <IonCol> <b> {item.promotionDetails} </b> </IonCol>
                        </IonRow>
                      
                    </IonGrid>
                </IonList>
                <div className="divider"></div>

                <IonList>
                    <IonCardHeader>
                        <b className="f16 label">Description:</b>
                    </IonCardHeader>
                    <IonCardContent>
                        {item.productDescription}
                    </IonCardContent>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonGrid className="ion-no-padding">
                        <IonRow>
                            {/* <IonCol >
                                <IonToolbar >
                                    <IonTitle class="f16"><b>Add To Cart</b> </IonTitle>
                                </IonToolbar>
                            </IonCol> */}
                            <IonCol className="ion-no-padding tac" color="" >
                                <IonToolbar color="danger"> <IonTitle class="f16">ALREADY ADDED IN CART<IonIcon slot="end" icon={arrowForwardOutline}></IonIcon></IonTitle></IonToolbar>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
            <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Gettting Product...'}
        duration={500}
      />
        </IonModal>
    );
};

export default ProductDetailsComponent;
