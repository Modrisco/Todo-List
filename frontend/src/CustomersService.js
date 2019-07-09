import axios from 'axios';
// const API_URL = 'http://localhost:8000';

axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

export default class CustomersService{

    constructor(){}

    getCustomers() {
        console.log("get customers");
        const url = `/api/customers/`;
        console.log(url);
        return axios.get(url).then(response => response.data);
    }

    getCustomersByURL(link){
        const url = `${link}`;
        return axios.get(url).then(response => response.data);
    }

    getCustomer(pk) {
        const url = `/api/customers/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    deleteCustomer(customer){
        const url = `/api/customers/${customer.pk}`;
        return axios.delete(url);
    }

    createCustomer(customer){
        const url = `/api/customers/`;
        return axios.post(url,customer);
    }

    updateCustomer(customer){
        const url = `/api/customers/${customer.pk}`;
        return axios.put(url,customer);
    }
}
