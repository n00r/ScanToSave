import axios from 'axios';

const api = axios.create({
    baseURL: 'http://35.225.53.57:8080/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
});

export function getProduct(ProductId:any) {
    return api.get('getProduct/'+ProductId, {
        params: {
            limit: 10,
            hasStackAvail: true,
        },
    });
}
export function postLogin(userData : any) {
    return api.get('/loginUser.json', userData);
}
export function postOrder(orderData : any) {
    return api.get('/orderData.json', orderData);
}
export function getOrder(OrderId : any) {
    return api.get('/orderDetails.json', OrderId);
}
