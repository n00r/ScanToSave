import axios from 'axios';

class Api {
    getProduct = (productId: any) => axios.get(`http://localhost:9082/api/getProduct/${productId}`, productId);
}

export default new Api();