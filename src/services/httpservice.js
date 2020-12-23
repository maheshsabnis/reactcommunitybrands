import axios from 'axios';

export class HttpService {
    constructor(){
        this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
    }

    getData(){
        let response = axios.get(this.url);
        return response;
    }

    getDatabyId(id) {
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }

    postData(data){
        let response = axios.post(this.url, data, {
              'Content-Type': 'application/json'  
        });
        return response;
    }

    putData(data){
        let response = axios.put(`${this.url}/${data.ProductRowId}`, data, {
              'Content-Type': 'application/json'
        });
        return response;
    }

    deleetData(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }


}