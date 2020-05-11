import React,{useEffect,useState} from 'react';
// import './ExploreContainer.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonThumbnail, IonLabel, IonImg, IonFooter, IonText, IonCardHeader, IonButton, IonFabButton, IonGrid, IonRow, IonCol, IonIcon, IonSlides, IonSlide, IonModal, IonButtons, IonLoading } from '@ionic/react';
import { removeCircleOutline, addCircleOutline, arrowForwardOutline, arrowBack } from 'ionicons/icons';
import { getProduct } from '../services/api';

interface ContainerProps {
    productModal: any;
    onback: any;
    ProductId: any;
}
const item: any = {
    "name": "MICHAEL Michael Kors Moto jacket Leather", "price": "$190.00", "color": "Brown", "size": "XS", "img": "assets/cart/3.jpeg", "quantity": "1", "desc": "The timeless bomber jacket gets a modern update in lightweight scuba nylon. A tonal rubberized logo and glossed trim lend sporty appeal, while zipped pockets along the side and long sleeve offer a functional finish.",
    "category": "Men", "brand": "MICHAEL Michael Kors", "type": "Formal", "others": " Dry clean by leather professional"
};
const ProductDetailsComponent: React.FC<ContainerProps> = ({ productModal,ProductId,onback }) => {
  const [loading, setLoading] = useState(false);

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
        setLoading(true);
        getProduct(ProductId).then((response :any) => {
            if (response) {
              console.log(response);
           
            }
          }).finally(() => {
            setLoading(false);
          });
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
                <IonCard class="card-effect">
                    <IonImg src={item.img} class="img-size" />
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
                        {item.name}
                    </div>
                    <div className="ion-text-center f16 cred">Price:
                        {item.price}
                    </div>
                    {/* <IonText class="ion-text-wrap">{item.desc}</IonText> */}
                </IonCard>
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
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Specification:</b>
                    </IonCardHeader>
                    <IonCardContent>{item.specifications}</IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol class="label">• Category: </IonCol>
                            <IonCol>{item.category} </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label">• Brand: </IonCol>
                            <IonCol>{item.brand} </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label">• Type: </IonCol>
                            <IonCol>{item.type} </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="label">• Others: </IonCol>
                            <IonCol>{item.others} </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard class="card-effect">
                    <IonCardHeader>
                        <b className="f16 label">Description:</b>
                    </IonCardHeader>
                    <IonCardContent>
                        {item.desc}
                    </IonCardContent>
                </IonCard>
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
        duration={5000}
      />
        </IonModal>
    );
};

export default ProductDetailsComponent;
