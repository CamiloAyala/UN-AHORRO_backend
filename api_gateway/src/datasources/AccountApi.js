import { RESTDataSource } from '@apollo/datasource-rest';
import axios from 'axios';

export class AccountAPI extends RESTDataSource {
    
    constructor(){
        super();
        this.baseURL = "http://localhost:3000";        
    }

    async login(payload){
        return this.post('/login', { body: payload });
    }

    async signup(user){
        return this.post('/signup', { body: user });
    }
}