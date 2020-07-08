import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.148.128.243:9082/',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
});

export function getProduct(productId: any, promoId: any = null) {
    return api.get('api/getPromoProducts/product/promo', {
        params: {
            productId,
            promoId,
        },
    });
}
export function postLogin(userData: any) {
    return api.post('api/authenticate', userData);
}
export function postOrder(orderData: any) {
    return api.post('/placeOrder', orderData);
}
export function getOrder(orderId: any) {
    return api.get('/getOrder', {
        params: {
            orderId
        }
    });
}
